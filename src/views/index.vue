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
    </div>
    <div class="line"></div>
    <div class="right-preview">
      <div class="title">预览</div>
      <div class="main-container" >
        <draggable
          group="componentDrag"
          animation="500"
          v-model="drawList"
          ghostClass="ghost"
          style="height: 100%"
          handle=".sort-icon"
          @end="handleSoreEnd"
        >
          <template v-for="(item, index) in drawList">
            <div
              class="box-item-text"
              v-if="['edit', 'text'].includes(item.component)"
              :key="index"
              :style="{
                width: item.width + 'px',
                height: item.height + 'px',
                left: item.left + 'px',
                top: getHeight(index) + 'px',
              }"
            >
              <tinymce
                v-model="item.content"
                height="200"
                v-show="item.component === 'edit'"
              />
              <div
                class="box-item-content"
                :ref="item.id"
                v-html="item.content"
                v-show="item.component === 'text'"
                style="height: 100%"
              ></div>
              <i
                :class="[
                  item.component === 'text'
                    ? 'el-icon-edit'
                    : 'el-icon-copy-document',
                  'button',
                  'edit-button',
                ]"
                @click="handleToggle(item)"
              ></i>
              <i
                class="el-icon-delete button del-button"
                @click="removeComponent(item.id)"
              ></i>
              <i
                class="el-icon-rank button sort-icon"
                @click="removeComponent(item.id)"
              ></i>
            </div>

            <vue-drag-resize
              :x="parseFloat(item.left)"
              :y="parseFloat(getHeight(index))"
              :w="parseFloat(item.width)"
              :h="parseFloat(item.height)"
              @resizestop="(e) => handleResizeStop(e, item)"
              @dragstop="(e) => handleDragStop(e, item)"
              dragCancel=".sort-icon"
              :key="index"
              v-else
            >
              <img src="../assets/img.png" alt="" class="img" />
              <i
                class="el-icon-delete button del-button"
                @click="removeComponent(item.id)"
              ></i>
              <i
                class="el-icon-rank button sort-icon"
                @click="removeComponent(item.id)"
              ></i>
            </vue-drag-resize>
          </template>
        </draggable>
        <div class="empty" v-if="drawList.length === 0">
          从左侧拖入或点选组件进行设计
        </div>
      </div>
    </div>
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
          height: 340,
          width: "720",
          left: 0,
          top: 0,
          content: "",
        },
        {
          title: "添加图表",
          component: "echarts",
          height: 300,
          width: "710",
          left: 0,
          top: 0,
        },
      ],
      currentMove: {},
      drawList: [],
    };
  },
  methods: {
    getHeight(val) {
      if (val === 0) return 0;
      let height = 0;
      for (let i = 0; i < val; i++) {
        height += parseFloat(this.drawList[i].height)+25;
      }
      return height;
    },

    cloneComponent(e) {
      this.currentMove = {
        id: "box_" + new Date().getTime(),
        ...e,
      };
    },
    addComponent(e) {
      let obj = { ...e };
      if (this.drawList.length > 0) {
        // let item = this.drawList[this.drawList.length - 1];
        // obj.top =
        //   item.top + item.height + (item.component === "edit" ? 25 : 15);
      }
      this.drawList.push({
        id: "box_" + new Date().getTime(),
        ...obj,
      });
    },

    handleEnd() {
      this.drawList.push({
        ...this.currentMove,
      });
    },

    handleSoreEnd(val) {
      // console.log(this.drawList);
      // const { oldIndex, newIndex } = val;
      // if (oldIndex === newIndex) return;
      // // for (let i = oldIndex + 1; i <= newIndex; i++) {
      // //   // let tempTop = this.drawList[i].top;
      // //   // this.drawList[i].top = this.drawList[i - 1].top;
      // //   // this.drawList[i - 1].top = tempTop;
      // // }
      // // console.log(this.drawList);
      // // this.drawList[1].top = 400;
      // // this.drawList[0].top = 0;
      // console.log(this.drawList);
      // let min = 0,
      //   max = 0;
      // if (oldIndex > newIndex) {
      //   //往前拖
      //   max = oldIndex;
      //   min = newIndex;
      // } else {
      //   max = newIndex;
      //   min = oldIndex;
      // }
      // // for (let i = 0; i < this.drawList.length; i++) {
      // //   // if (newIndex > oldIndex) {
      // //   //   //向后拖拽
      // //   // } else {
      // //   //   //向前拖拽
      // //   // }
      // // }
    },

    //切换保存或修改状态
    handleToggle(val) {
      val.component = val.component === "edit" ? "text" : "edit";
      // this.$nextTick(() => {
      //   val.height=this.$refs[val.id][0].offsetHeight
      // });
    },

    //盒子自适应
    handleResizeStop(e, val) {
      val.width = e.width;
      val.height = e.height;
    },

    //拖拽移动停止
    handleDragStop(e, val) {
      val.left = e.left;
      val.top = e.top;
    },

    //删除当前图
    removeComponent(id) {
      let index = this.drawList.findIndex((item) => item.id == id);
      let newDrawList = [...this.drawList];
      let currentDel = this.drawList[index];
      for (let i = index + 1; i < newDrawList.length; i++) {
        newDrawList[i].top = newDrawList[i].top - currentDel.height - 25;
      }
      newDrawList.splice(index, 1);
      this.drawList = newDrawList;
    },
  },
};
</script>
<style lang="scss" scoped>
.index-container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;

  .left-container {
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin-left: 10%;
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
  .line {
    height: 95%;
    margin-top: 2%;
    width: 1px;
    background: #f1e8e8;
  }
  .right-preview {
    width: 794px;
    height: calc(100% - 50px);
    box-sizing: border-box;
    padding: 25px;
    margin-left: 25px;
    .main-container {
      width: 100%;
      border: 1px solid #f1e8e8;
      margin-top: 15px;
      box-sizing: border-box;
      height: 100%;
      position: relative;
      overflow: hidden auto;
      // padding: 25px;
      // background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
      .box-item-text {
        position: absolute;
        transition: all 0.4s;

        .box-item-content {
          background: rgb(250, 250, 250);
          padding: 15px;
          box-sizing: border-box;
        }
      }
      .img {
        width: 100%;
        height: 100%;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
      }
      .del-button {
        right: 45px;
        top: 5px;
      }
      .sort-icon {
        right: 0;
        top: 5px;
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
}
</style>
