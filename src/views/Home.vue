<template>
  <div class="index-container">
    <div class="left-container">
      <div class="title">组件</div>
      <draggable
        class="component-list"
        :group="{ name: 'componentDrag', pull: 'clone' }"
        :sort="false"
        animation="300"
        draggable=".component-item"
        @end="handleEnd"
        v-model="comList"
        :clone="cloneComponent"
      >
        <div
          v-for="(element, index) in comList"
          :key="index"
          class="component-item"
          @click="addComponent(element)"
        >
          <el-icon name="circle-plus-outline" class="icon"></el-icon
          >{{ element.title }}
        </div>
      </draggable>
      <div style="margin-top: 15px">
        <el-button type="primary" @click="dialogVisible = true"
          >预览打印</el-button
        >
        <el-button type="primary" style="margin-left: 15px" @click="addNewPage"
          >新增一页</el-button
        >
      </div>
    </div>
    <div class="main-container">
      <div
        class="main-canvas pageA4"
        v-for="(page, pageIndex) in pageList"
        :key="page.id"
        ref="mainRef"
        :id="'page' + pageIndex"
        @click.self="handlePageClick(pageIndex)"
        :class="{ active: pageIndex === currentIndex }"
      >
        <draggable
          group="componentDrag"
          animation="400"
          v-model="page.drawList"
          ghostClass="ghost"
          handle=".sort-icon"
          :data-index="pageIndex"
          :ref="'realRef_' + pageIndex"
        >
          <div
            v-for="(draw, drawIndex) in page.drawList"
            :key="drawIndex"
            class="main-canvas-item"
          >
            <div
              class="main-canvas-text"
              v-if="['edit', 'text'].includes(draw.component)"
              :key="draw.id"
              :style="{
                width: draw.width + 'px',
              }"
            >
              <tinymce
                v-model="draw.content"
                height="200"
                v-if="draw.component === 'edit'"
              />
              <div
                class="main-canvas-content"
                :ref="draw.id"
                v-html="draw.content"
                v-else
              ></div>
              <el-icon
                :name="draw.component === 'text' ? 'edit' : 'copy-document'"
                class="button edit-button"
                @click.native="handleToggle(draw)"
                id="printIgnore"
              ></el-icon>
              <el-icon
                name="delete"
                class="button del-button"
                @click.native="removeComponent(draw.id, pageIndex)"
                id="printIgnore"
              ></el-icon>
              <el-icon
                name="rank"
                class="button sort-icon"
                id="printIgnore"
              ></el-icon>
            </div>
            <div
              class="main-canvas-echarts"
              v-else
              :key="draw.id"
              :style="{
                width: parseFloat(draw.width) + parseFloat(draw.left) + 'px',
                height: parseFloat(draw.height) + parseFloat(draw.top) + 'px',
              }"
            >
              <vue-drag-resize
                :x="parseFloat(draw.left)"
                :y="parseFloat(draw.top)"
                :w="parseFloat(draw.width)"
                :h="parseFloat(draw.height)"
                @resizestop="(e) => handleResizeStop(e, draw, pageIndex)"
                @dragstop="(e) => handleDragStop(e, draw, pageIndex)"
                dragCancel=".noCancel"
              >
                <img src="../assets/img.png" alt="" class="img" />
                <el-icon
                  name="delete"
                  class="button noCancel del-button"
                  @click.native="removeComponent(draw.id, pageIndex)"
                  id="printIgnore"
                ></el-icon>
                <el-icon
                  name="rank"
                  class="button noCancel sort-icon"
                  id="printIgnore"
                ></el-icon>
              </vue-drag-resize>
            </div>
          </div>
        </draggable>
        <div class="paging">
          <span class="currentIndex">{{ pageIndex + 1 }}</span>
          <span class="split">/</span>
          <span class="totalIndex">{{ pageList.length }}</span>
        </div>
        <i
          class="el-icon-delete button page-del-button"
          id="printIgnore"
          @click.stop="handleDelPage(pageIndex)"
          v-if="pageIndex > 0"
        ></i>
        <div class="empty" v-if="page.drawList.length === 0">
          从左侧拖入或点选组件进行设计
        </div>
      </div>
    </div>

    <el-dialog
      title="打印预览"
      :visible.sync="dialogVisible"
      width="230mm"
      @close="dialogVisible = false"
      :close-on-click-modal="false"
      class="print-dialog"
    >
      <div id="print">
        <div
          class="pageA4 main-canvas"
          v-for="(page, pageIndex) in pageList"
          :key="page.id"
        >
          <div
            class="main-canvas-item"
            v-for="draw in page.drawList"
            :key="draw.id"
          >
            <div
              class="main-canvas-text"
              v-if="['edit', 'text'].includes(draw.component)"
              :key="draw.id"
              :style="{
                width: draw.width + 'px',
              }"
            >
              <div
                class="main-canvas-content"
                :ref="draw.id"
                v-html="draw.content"
              ></div>
            </div>
            <div
              class="main-canvas-echarts"
              v-else
              :key="draw.id"
              :style="{
                width: parseFloat(draw.width) + parseFloat(draw.left) + 'px',
                height: parseFloat(draw.height) + parseFloat(draw.top) + 'px',
              }"
            >
              <img src="../assets/img.png" alt="" class="img" />
            </div>
          </div>
          <div class="paging">
            <span class="currentIndex">{{ pageIndex + 1 }}</span>
            <span class="split">/</span>
            <span class="totalIndex">{{ pageList.length }}</span>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlePrint" style="margin-left: 15px"
          >打 印</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import vueDragResize from "vue-drag-resize";
import tinymce from "@/components/tinymce/index";
export default {
  name: "Home",
  components: { draggable, vueDragResize, tinymce },
  data() {
    return {
      comList: [
        {
          title: "文本框",
          component: "edit",
          height: 360,
          width: "720",
          left: 0,
          top: 0,
          content: "",
        },
        {
          title: "添加图表",
          component: "echarts",
          height: 300,
          width: "720",
          left: 0,
          top: 0,
        },
      ],
      pageList: [
        {
          drawList: [],
          id: "page_" + new Date().getTime(),
        },
      ],
      currentMove: {},
      currentIndex: 0,
      dialogVisible: false,
    };
  },
  methods: {
    //新增下一页
    addNewPage() {
      this.pageList.push({
        drawList: [],
        id: "page_" + new Date().getTime(),
      });
      this.currentIndex++;
      this.scrollTo("#page" + this.currentIndex);
    },

    //点击左侧拖动克隆当前盒子
    cloneComponent(e) {
      this.currentMove = {
        id: "box_" + new Date().getTime(),
        ...e,
      };
    },

    //拖动盒子到右边画布
    handleEnd(e) {
      // const { newIndex } = e;
      // const toIndex = e.to.dataset.index;
      // console.log(toIndex);
      // this.pageList[toIndex].drawList.splice(newIndex, 0, {
      //   ...this.currentMove,
      // });
    },

    //点击盒子，克隆到画布
    addComponent(e) {
      let obj = { ...e };
      this.limitBox({ type: "add", item: obj });
    },

    //切换富文本保存或修改状态
    handleToggle(val) {
      val.component = val.component === "edit" ? "text" : "edit";
    },

    //删除当前图
    removeComponent(id, i) {
      let list = this.pageList[i].drawList;
      let index = list.findIndex((item) => item.id == id);
      let newDrawList = [...list];
      newDrawList.splice(index, 1);
      this.pageList[i].drawList = newDrawList;
    },

    //点击当前页
    handlePageClick(index) {
      this.currentIndex = index;
    },

    //删除当前页
    handleDelPage(index) {
      this.pageList.splice(index, 1);
      this.currentIndex = this.pageList.length - 1;
    },

    //拖动盒子自适应
    handleResizeStop(e, val, index) {
      this.currentIndex = index;
      val.width = e.width;
      val.height = e.height;
      this.$nextTick(() => {
        this.limitBox({ type: "move", item: val });
      });
    },

    //拖拽移动停止
    handleDragStop(e, val, index) {
      this.currentIndex = index;
      val.left = e.left;
      val.top = e.top;
      this.$nextTick(() => {
        this.limitBox({ type: "move", item: val });
      });
    },

    limitBox(obj) {
      const { type, item = {} } = obj;
      let pageHeight = this.$refs["mainRef"][0].offsetHeight;
      let realHeight =
        this.$refs["realRef_" + this.currentIndex][0].$el.scrollHeight;
      if (type === "add") {
        if (parseFloat(realHeight) + parseFloat(item.height) > pageHeight) {
          this.$message.warning("当前页超出，已自动为您添加新页");
          this.pageList.splice(this.currentIndex + 1, 0, {
            drawList: [
              {
                id: "box_" + new Date().getTime(),
                ...item,
              },
            ],
            id: "page_" + new Date().getTime(),
          });
          this.currentIndex++;
          this.scrollTo("#page" + this.currentIndex);
        } else {
          this.pageList[this.currentIndex].drawList.push({
            id: "box_" + new Date().getTime(),
            ...item,
          });
        }
      } else {
        if (parseFloat(realHeight) > pageHeight) {
          if (this.pageList[this.currentIndex + 1]) {
            this.$message.warning("超出边界，请在新页进行操作");
          } else {
            this.$message.warning("当前页超出，已自动为您添加新页");
            this.pageList.splice(this.currentIndex + 1, 0, {
              drawList: [],
              id: "page_" + new Date().getTime(),
            });
          }

          this.currentIndex++;
          this.scrollTo("#page" + this.currentIndex);
        }
      }
    },

    //打印
    handlePrint() {
      this.$print({
        printable: "print",
        type: "html",
        header: null,
        targetStyles: ["*"],
        ignoreElements: ["printIgnore"],
      });
    },

    /**
     * 滚动元素到视图
     */
    scrollTo(el) {
      this.$nextTick(() => {
        let element = document.querySelector(el);
        if (element) {
          element.scrollIntoView(true, {
            behavior: "smooth",
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.index-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;

  .left-container {
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin-left: 10%;
    position: fixed;
    left: 0;
    top: 0;
    .title {
      font-weight: bold;
    }
    .component-list {
      margin-top: 25px;
      .component-item {
        margin-bottom: 15px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        cursor: move;
        &:hover {
          border-style: dashed;
        }
        .icon {
          margin-right: 8px;
        }
      }
    }
  }
  .main-container {
    margin-left: calc(10% + 350px);
    position: relative;
    width: 230mm;
    &:before {
      width: 1px;
      position: absolute;
      top: 5%;
      bottom: 5%;
      left: -35px;
      background: #f1e8e8;
      content: "";
    }
    .main-canvas {
      box-sizing: border-box;
      margin-top: 30px;
      position: relative;
      overflow: hidden;
      margin: 14mm auto;
      &.active {
        border-color: #409eff;
      }
      .page-del-button {
        position: absolute;
        right: 0;
        top: 0;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }

      .empty {
        position: absolute;
        top: 46%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 18px;
        color: #ccb1ea;
        letter-spacing: 4px;
      }
      .del-button {
        position: absolute;
        right: 35px;
        top: 5px;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
      .edit-button {
        position: absolute;
        right: 70px;
        top: 5px;
        background-color: #409eff;
        border-color: #409eff;
      }
      .sort-icon {
        position: absolute;
        right: 0;
        top: 5px;
        cursor: move !important;
        background-color: #e6a23c;
        border: 1px solid #e6a23c;
      }
      .button {
        color: #fff;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 12px;
      }
      .ghost {
        opacity: 0;
      }
    }
  }
  .pageA4 {
    border: 1px solid #f1e8e8;
    width: 210mm;
    height: 297mm;
    position: relative;
    // background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
    .main-canvas-item {
      box-sizing: border-box;
      padding-top: 25px;
      .main-canvas-text {
        position: relative;
        margin: 0 10mm;

        .main-canvas-content {
          background: rgb(250, 250, 250);
          padding: 15px;
          box-sizing: border-box;
          border-radius: 6px;
          word-wrap: break-word;
        }
      }
      .main-canvas-echarts {
        position: relative;
        margin: 0 10mm;
        .img {
          width: 100%;
          height: 100%;
          border: 1px solid #dcdfe6;
          box-sizing: border-box;
          margin-left: 0 !important;
        }
        .del-button {
          right: 45px;
          top: 5px;
        }
        .sort-icon {
          right: 0;
          top: 5px;
        }
      }
    }

    .paging {
      position: absolute;
      bottom: 6px;
      width: 100%;
      text-align: center;
      z-index: 99;
      .currentIndex {
        color: #ccb1ea;
        font-size: 16px;
      }
      .split {
        margin: 0 3px;
        color: #606266;
      }
      .totalIndex {
        color: #606266;
        font-size: 14px;
      }
    }
  }
  .print-dialog {
    .dialog-footer {
      text-align: center;
    }
  }
}
</style>
<style media="print" scoped>
@page {
  size: auto; /* auto is the initial value */
  margin: 0mm; /* this affects the margin in the printer settings */
}
.pageA4 {
  display: block;
  overflow: hidden;
  margin: 0;
  height: 266.5mm;
}
</style>
