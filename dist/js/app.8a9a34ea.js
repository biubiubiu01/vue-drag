(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"058b":function(t,e,n){"use strict";n("7537")},"10e8":function(t,e,n){"use strict";n("8d9d")},"2f94":function(t,e,n){},"2f98":function(t,e,n){},"475d":function(t,e,n){"use strict";n("dd0d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=n("2877"),r={},c=Object(o["a"])(r,a,s,!1,null,null,null),l=c.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-container"},[i("div",{staticClass:"left-container"},[i("div",{staticClass:"title"},[t._v("组件")]),i("draggable",{staticClass:"component-list",attrs:{group:{name:"componentDrag",pull:"clone"},sort:!1,animation:"300",draggable:".component-item",clone:t.cloneComponent},on:{end:t.handleEnd},model:{value:t.comList,callback:function(e){t.comList=e},expression:"comList"}},t._l(t.comList,(function(e,n){return i("div",{key:n,staticClass:"component-item",on:{click:function(n){return t.addComponent(e)}}},[i("el-icon",{staticClass:"icon",attrs:{name:"circle-plus-outline"}}),t._v(t._s(e.title)+" ")],1)})),0),i("div",{staticStyle:{"margin-top":"15px"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("预览打印")]),i("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:t.addNewPage}},[t._v("新增一页")])],1)],1),i("div",{staticClass:"main-container"},t._l(t.pageList,(function(e,a){return i("div",{key:e.id,ref:"mainRef",refInFor:!0,staticClass:"main-canvas pageA4",class:{active:a===t.currentIndex},attrs:{id:"page"+a},on:{click:function(e){return e.target!==e.currentTarget?null:t.handlePageClick(a)}}},[i("draggable",{ref:"realRef_"+a,refInFor:!0,attrs:{group:"componentDrag",animation:"400",ghostClass:"ghost",handle:".sort-icon","data-index":a},model:{value:e.drawList,callback:function(n){t.$set(e,"drawList",n)},expression:"page.drawList"}},t._l(e.drawList,(function(e,s){return i("div",{key:s,staticClass:"main-canvas-item"},[["edit","text"].includes(e.component)?i("div",{key:e.id,staticClass:"main-canvas-text",style:{width:e.width+"px"}},["edit"===e.component?i("tinymce",{attrs:{height:"200"},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"draw.content"}}):i("div",{ref:e.id,refInFor:!0,staticClass:"main-canvas-content",domProps:{innerHTML:t._s(e.content)}}),i("el-icon",{staticClass:"button edit-button",attrs:{name:"text"===e.component?"edit":"copy-document",id:"printIgnore"},nativeOn:{click:function(n){return t.handleToggle(e)}}}),i("el-icon",{staticClass:"button del-button",attrs:{name:"delete",id:"printIgnore"},nativeOn:{click:function(n){return t.removeComponent(e.id,a)}}}),i("el-icon",{staticClass:"button sort-icon",attrs:{name:"rank",id:"printIgnore"}})],1):i("div",{key:e.id,staticClass:"main-canvas-echarts",style:{width:parseFloat(e.width)+parseFloat(e.left)+"px",height:parseFloat(e.height)+parseFloat(e.top)+"px"}},[i("vue-drag-resize",{attrs:{x:parseFloat(e.left),y:parseFloat(e.top),w:parseFloat(e.width),h:parseFloat(e.height),dragCancel:".noCancel"},on:{resizestop:function(n){return t.handleResizeStop(n,e,a)},dragstop:function(n){return t.handleDragStop(n,e,a)}}},[i("img",{staticClass:"img",attrs:{src:n("7e77"),alt:""}}),i("el-icon",{staticClass:"button noCancel del-button",attrs:{name:"delete",id:"printIgnore"},nativeOn:{click:function(n){return t.removeComponent(e.id,a)}}}),i("el-icon",{staticClass:"button noCancel sort-icon",attrs:{name:"rank",id:"printIgnore"}})],1)],1)])})),0),i("div",{staticClass:"paging"},[i("span",{staticClass:"currentIndex"},[t._v(t._s(a+1))]),i("span",{staticClass:"split"},[t._v("/")]),i("span",{staticClass:"totalIndex"},[t._v(t._s(t.pageList.length))])]),a>0?i("i",{staticClass:"el-icon-delete button page-del-button",attrs:{id:"printIgnore"},on:{click:function(e){return e.stopPropagation(),t.handleDelPage(a)}}}):t._e(),0===e.drawList.length?i("div",{staticClass:"empty"},[t._v(" 从左侧拖入或点选组件进行设计 ")]):t._e()],1)})),0),i("el-dialog",{staticClass:"print-dialog",attrs:{title:"打印预览",visible:t.dialogVisible,width:"230mm","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e},close:function(e){t.dialogVisible=!1}}},[i("div",{attrs:{id:"print"}},t._l(t.pageList,(function(e,a){return i("div",{key:e.id,staticClass:"pageA4 main-canvas"},[t._l(e.drawList,(function(e){return i("div",{key:e.id,staticClass:"main-canvas-item"},[["edit","text"].includes(e.component)?i("div",{key:e.id,staticClass:"main-canvas-text",style:{width:e.width+"px"}},[i("div",{ref:e.id,refInFor:!0,staticClass:"main-canvas-content",domProps:{innerHTML:t._s(e.content)}})]):i("div",{key:e.id,staticClass:"main-canvas-echarts",style:{width:parseFloat(e.width)+parseFloat(e.left)+"px",height:parseFloat(e.height)+parseFloat(e.top)+"px"}},[i("img",{staticClass:"img",attrs:{src:n("7e77"),alt:""}})])])})),i("div",{staticClass:"paging"},[i("span",{staticClass:"currentIndex"},[t._v(t._s(a+1))]),i("span",{staticClass:"split"},[t._v("/")]),i("span",{staticClass:"totalIndex"},[t._v(t._s(t.pageList.length))])])],2)})),0),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:t.handlePrint}},[t._v("打 印")])],1)])],1)},u=[],m=n("2909"),h=n("5530"),g=(n("c740"),n("a434"),n("b76a")),f=n.n(g),v=n("3b58"),b=n.n(v),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.id}})])},_=[],y=n("1da1"),w=(n("96cf"),n("a9e3"),n("b680"),["undo redo  bold italic underline strikethrough   alignleft aligncenter alignright   blockquote  formatselect fontsizeselect ","forecolor backcolor searchreplace bullist numlist outdent indent link image  media  charmap      table  preview  fullscreen code"]),C=w,k=["advlist anchor autolink autosave code colorpicker  contextmenu directionality  fullscreen hr    link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],L=k,I="*{ padding:0; margin:0; }\nhtml, body      { height:100%; }\nimg             { max-width:100%; display:block;height:auto; }\na               { text-decoration: none; }\niframe          { width: 100%; }\np               { line-height:1.6; margin: 0px; }\ntable           { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }\nul,ol           { list-style-position:inside; }",S=I,T={name:"tinymce",props:{height:{type:[Number,String],default:"300"},resize:{type:Boolean,default:!0},value:{type:String,default:""}},data:function(){return{id:"editor-"+ +new Date+(1e3*Math.random()).toFixed(0),firstInit:!1,errorStatus:!1,fullscreen:!1}},mounted:function(){this.initTinymce()},methods:{init:function(){return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},initTinymce:function(){var t=this;window.tinymce.init({selector:"#".concat(this.id),language:"zh_CN",height:this.height,object_resizing:this.resize,toolbar:C,plugins:L,end_container_on_empty_block:!0,powerpaste_word_import:"clean",default_link_target:"_blank",link_title:!1,paste_retain_style_properties:"all",paste_word_valid_elements:"*[*]",paste_data_images:!0,paste_convert_word_fake_lists:!1,file_picker_types:"media",content_style:S,init_instance_callback:function(e){t.value&&e.setContent(t.value),t.firstInit=!0,e.on("input change undo redo",(function(){t.errorStatus=!0,t.$emit("input",e.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){t.fullscreen=e.state}))}})},setContent:function(t){window.tinymce.get(this.id).setContent(t)},getContent:function(){window.tinymce.get(this.id).getContent()},destroyTinymce:function(){var t=window.tinymce.get(this.id);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()}},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},watch:{value:function(t){var e=this;!this.errorStatus&&this.firstInit&&this.$nextTick((function(){window.tinymce.get(e.id).setContent(t||"")}))}}},F=T,D=(n("e720"),Object(o["a"])(F,x,_,!1,null,"2b77ef8e",null)),$=D.exports,O={name:"Home",components:{draggable:f.a,vueDragResize:b.a,tinymce:$},data:function(){return{comList:[{title:"文本框",component:"edit",height:360,width:"720",left:0,top:0,content:""},{title:"添加图表",component:"echarts",height:300,width:"720",left:0,top:0}],pageList:[{drawList:[],id:"page_"+(new Date).getTime()}],currentMove:{},currentIndex:0,dialogVisible:!1}},methods:{addNewPage:function(){this.pageList.push({drawList:[],id:"page_"+(new Date).getTime()}),this.currentIndex++,this.scrollTo("#page"+this.currentIndex)},cloneComponent:function(t){this.currentMove=Object(h["a"])({id:"box_"+(new Date).getTime()},t)},handleEnd:function(t){},addComponent:function(t){var e=Object(h["a"])({},t);this.limitBox({type:"add",item:e})},handleToggle:function(t){t.component="edit"===t.component?"text":"edit"},removeComponent:function(t,e){var n=this.pageList[e].drawList,i=n.findIndex((function(e){return e.id==t})),a=Object(m["a"])(n);a.splice(i,1),this.pageList[e].drawList=a},handlePageClick:function(t){this.currentIndex=t},handleDelPage:function(t){this.pageList.splice(t,1),this.currentIndex=this.pageList.length-1},handleResizeStop:function(t,e,n){var i=this;this.currentIndex=n,e.width=t.width,e.height=t.height,this.$nextTick((function(){i.limitBox({type:"move",item:e})}))},handleDragStop:function(t,e,n){var i=this;this.currentIndex=n,e.left=t.left,e.top=t.top,this.$nextTick((function(){i.limitBox({type:"move",item:e})}))},limitBox:function(t){var e=t.type,n=t.item,i=void 0===n?{}:n,a=this.$refs["mainRef"][0].offsetHeight,s=this.$refs["realRef_"+this.currentIndex][0].$el.scrollHeight;"add"===e?parseFloat(s)+parseFloat(i.height)>a?(this.$message.warning("当前页超出，已自动为您添加新页"),this.pageList.splice(this.currentIndex+1,0,{drawList:[Object(h["a"])({id:"box_"+(new Date).getTime()},i)],id:"page_"+(new Date).getTime()}),this.currentIndex++,this.scrollTo("#page"+this.currentIndex)):this.pageList[this.currentIndex].drawList.push(Object(h["a"])({id:"box_"+(new Date).getTime()},i)):parseFloat(s)>a&&(this.pageList[this.currentIndex+1]?this.$message.warning("超出边界，请在新页进行操作"):(this.$message.warning("当前页超出，已自动为您添加新页"),this.pageList.splice(this.currentIndex+1,0,{drawList:[],id:"page_"+(new Date).getTime()})),this.currentIndex++,this.scrollTo("#page"+this.currentIndex))},handlePrint:function(){this.$print({printable:"print",type:"html",header:null,targetStyles:["*"],ignoreElements:["printIgnore"]})},scrollTo:function(t){this.$nextTick((function(){var e=document.querySelector(t);e&&e.scrollIntoView(!0,{behavior:"smooth"})}))}}},P=O,j=(n("f6a1"),n("475d"),Object(o["a"])(P,p,u,!1,null,"93f39e80",null)),z=j.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-container"},[i("div",{staticClass:"left-container"},[i("div",{staticClass:"title"},[t._v("组件")]),i("draggable",{staticClass:"component-list",attrs:{group:{name:"componentDrag",pull:"clone"},sort:!1,animation:"300",draggable:".component-item",clone:t.cloneComponent},on:{end:t.handleEnd},model:{value:t.comList,callback:function(e){t.comList=e},expression:"comList"}},t._l(t.comList,(function(e,n){return i("div",{key:n,staticClass:"component-item",on:{click:function(n){return t.addComponent(e)}}},[i("el-icon",{staticClass:"icon",attrs:{name:"circle-plus-outline"}}),t._v(t._s(e.title)+" ")],1)})),0)],1),i("div",{staticClass:"line"}),i("div",{staticClass:"right-preview"},[i("div",{staticClass:"title"},[t._v("预览")]),i("div",{staticClass:"main-container"},[i("draggable",{staticStyle:{height:"100%"},attrs:{group:"componentDrag",animation:"500",ghostClass:"ghost",handle:".sort-icon"},on:{end:t.handleSoreEnd},model:{value:t.drawList,callback:function(e){t.drawList=e},expression:"drawList"}},[t._l(t.drawList,(function(e,a){return[["edit","text"].includes(e.component)?i("div",{key:a,staticClass:"box-item-text",style:{width:e.width+"px",height:e.height+"px",left:e.left+"px",top:t.getHeight(a)+"px"}},[i("tinymce",{directives:[{name:"show",rawName:"v-show",value:"edit"===e.component,expression:"item.component === 'edit'"}],attrs:{height:"200"},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"item.content"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:"text"===e.component,expression:"item.component === 'text'"}],ref:e.id,refInFor:!0,staticClass:"box-item-content",staticStyle:{height:"100%"},domProps:{innerHTML:t._s(e.content)}}),i("i",{class:["text"===e.component?"el-icon-edit":"el-icon-copy-document","button","edit-button"],on:{click:function(n){return t.handleToggle(e)}}}),i("i",{staticClass:"el-icon-delete button del-button",on:{click:function(n){return t.removeComponent(e.id)}}}),i("i",{staticClass:"el-icon-rank button sort-icon",on:{click:function(n){return t.removeComponent(e.id)}}})],1):i("vue-drag-resize",{key:a,attrs:{x:parseFloat(e.left),y:parseFloat(t.getHeight(a)),w:parseFloat(e.width),h:parseFloat(e.height),dragCancel:".sort-icon"},on:{resizestop:function(n){return t.handleResizeStop(n,e)},dragstop:function(n){return t.handleDragStop(n,e)}}},[i("img",{staticClass:"img",attrs:{src:n("7e77"),alt:""}}),i("i",{staticClass:"el-icon-delete button del-button",on:{click:function(n){return t.removeComponent(e.id)}}}),i("i",{staticClass:"el-icon-rank button sort-icon",on:{click:function(n){return t.removeComponent(e.id)}}})])]}))],2),0===t.drawList.length?i("div",{staticClass:"empty"},[t._v(" 从左侧拖入或点选组件进行设计 ")]):t._e()],1)])])},E=[],H={name:"Home",components:{draggable:f.a,vueDragResize:b.a,tinymce:$},data:function(){return{comList:[{title:"文本框",component:"edit",height:340,width:"720",left:0,top:0,content:""},{title:"添加图表",component:"echarts",height:300,width:"710",left:0,top:0}],currentMove:{},drawList:[]}},methods:{getHeight:function(t){if(0===t)return 0;for(var e=0,n=0;n<t;n++)e+=parseFloat(this.drawList[n].height)+25;return e},cloneComponent:function(t){this.currentMove=Object(h["a"])({id:"box_"+(new Date).getTime()},t)},addComponent:function(t){var e=Object(h["a"])({},t);this.drawList.length,this.drawList.push(Object(h["a"])({id:"box_"+(new Date).getTime()},e))},handleEnd:function(){this.drawList.push(Object(h["a"])({},this.currentMove))},handleSoreEnd:function(t){},handleToggle:function(t){t.component="edit"===t.component?"text":"edit"},handleResizeStop:function(t,e){e.width=t.width,e.height=t.height},handleDragStop:function(t,e){e.left=t.left,e.top=t.top},removeComponent:function(t){for(var e=this.drawList.findIndex((function(e){return e.id==t})),n=Object(m["a"])(this.drawList),i=this.drawList[e],a=e+1;a<n.length;a++)n[a].top=n[a].top-i.height-25;n.splice(e,1),this.drawList=n}}},N=H,M=(n("dbcd"),Object(o["a"])(N,R,E,!1,null,"aa31e04e",null)),B=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test-container"},[n("div",{attrs:{id:"print"}},[t._l(3,(function(e){return n("el-form",{key:e,ref:"form",refInFor:!0,staticClass:"print-page page-a4",attrs:{model:t.form}},[n("h1",{staticClass:"h1-page"},[t._v("重庆市婚姻档案跨馆查询服务申请表")]),n("table",{staticClass:"table-page",attrs:{border:"1",cellspacing:"0"}},[n("tr",[n("td",[t._v("申请人")]),n("td",[t._v(t._s(t.form.regApplyName))]),n("td",[t._v("联系电话")]),n("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.regApplyPhone))])]),n("tr",[n("td",[t._v("证件类型")]),n("td",[t._v(t._s(t.form.regApplyCardType))]),n("td",[t._v("证件号码")]),n("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.regApplyCardNum))])]),n("tr",[n("td",[t._v("被查人姓名")]),n("td",[t._v(t._s(t.form.regPassiveQueryName))]),n("td",[t._v("被查人证件号码")]),n("td",{attrs:{colspan:"2"}},[t._v(t._s(t.form.regPassiveQueryCard))])]),n("tr",[n("td",[t._v("婚姻登记所在地")]),n("td",{attrs:{colspan:"4"}})]),n("tr",[n("td",[t._v("查档用途")]),n("td",{attrs:{colspan:"4"}},[n("div",{staticClass:"box_checkbox",staticStyle:{float:"left","text-align":"left"}},[n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check1",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"1"}}),t._v("补办证件")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check2",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"2"}}),t._v("申报户口")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check3",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"3"}}),t._v("办理退休")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check4",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"4"}}),t._v("公证")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check5",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"5"}}),t._v("购商品房")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check6",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"6"}}),t._v("申请廉租房、经适房")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check7",refInFor:!0,attrs:{name:"carType",type:"checkbox",value:"7"}}),t._v("其他")])])])]),n("tr",[n("td",[t._v("风险告知")]),n("td",{attrs:{colspan:"4"}},[n("p",{staticStyle:{"margin-left":"1px","text-align":"left","text-indent":"2em"}},[t._v(" 档案馆与受理点之间以计算机网络方式发送或调取个人相关信息,可能造成个人信息泄露的风险本人已知晓以上告知的全部内容 ")]),n("span",{staticStyle:{float:"right","margin-right":"150px"}},[t._v("签名:"),n("img",{staticStyle:{width:"100px"},attrs:{src:t.form.regAutographUrl}})])])]),n("td",{attrs:{colspan:"5"}},[t._v("以下由查阅窗口工作人员填写")]),n("tr",[n("td",{staticStyle:{width:"150px"}},[t._v("受理意见")]),n("td",{attrs:{colspan:"5"}},[n("div",{staticStyle:{"margin-top":"10px",float:"left"}},[n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"regReceiptStatus0",refInFor:!0,attrs:{name:"carType",type:"checkbox",onclick:"this.checked=!this.checked"}}),t._v("予以受理")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"regReceiptStatus1",refInFor:!0,attrs:{name:"carType",type:"checkbox",onclick:"this.checked=!this.checked"}}),t._v("不予受理 原因说明: "+t._s(t.form.regReceiptContent))])]),n("br"),n("br"),n("div",{staticStyle:{float:"right"}},[n("span",[t._v("日期:     年      月      日")]),n("span",[t._v("办理人:                ")])])])]),n("tr",[n("td",[t._v("办理结果")]),n("td",{attrs:{colspan:"2"}},[n("div",{staticStyle:{"margin-top":"10px",float:"left"}},[n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check_type0",refInFor:!0,attrs:{name:"carType",type:"checkbox"}}),t._v("提供档案打印原件")]),n("label",{staticStyle:{"margin-left":"8px"}},[n("input",{ref:"check_type1",refInFor:!0,attrs:{name:"carType",type:"checkbox"}}),t._v("未查到档案")])])]),n("td",[t._v("打印:"+t._s(t.form.apPrintPageNum)+" "),n("span",[t._v("页")])]),n("td",[t._v("调档:"+t._s(t.form.volumeNumber)+" 卷/件")])])]),n("div",{staticStyle:{position:"absolve",bottom:"5mm","font-size":"10px"}},[n("div",{staticStyle:{"text-align":"center",margin:"0 auto",position:"absolute",width:"100%"}},[n("span",[t._v("第 "+t._s(t.pageSize)+" 页")]),t._v(" / "),n("span",[t._v("共 "+t._s(t.count)+" 页")])]),n("div",{staticStyle:{"margin-right":"15mm",position:"absolute",right:"0mm"}},[t._v(" 市区档案局印制 ")])]),n("div",{staticClass:"print-bottom hidden-print noPrint"})])})),n("el-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")])],2)])},V=[],q={components:{},data:function(){return{form:{},pageSize:1,count:1}},created:function(){},mounted:function(){},methods:{print:function(){this.$print({printable:"print",type:"html",header:"",targetStyles:["*"]})}}},J=q,Q=(n("058b"),Object(o["a"])(J,A,V,!1,null,"3fe9c764",null)),U=Q.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-container"},[i("div",{staticClass:"left-container"},[i("div",{staticClass:"title"},[t._v("组件")]),i("draggable",{staticClass:"component-list",attrs:{group:{name:"componentDrag",pull:"clone"},sort:!1,animation:"300",draggable:".component-item",clone:t.cloneComponent},on:{end:t.handleEnd},model:{value:t.comList,callback:function(e){t.comList=e},expression:"comList"}},t._l(t.comList,(function(e,n){return i("div",{key:n,staticClass:"component-item",on:{click:function(n){return t.addComponent(e)}}},[i("el-icon",{staticClass:"icon",attrs:{name:"circle-plus-outline"}}),t._v(t._s(e.title)+" ")],1)})),0),i("div",{staticStyle:{"margin-top":"15px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.print}},[t._v("打印")]),i("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:t.addNewPage}},[t._v("新增一页")])],1)],1),i("div",{staticClass:"main-container"},[i("div",{ref:"pagePrint",attrs:{id:"print"}},t._l(t.pageList,(function(e,a){return i("div",{key:e.id,ref:"mainRef",refInFor:!0,staticClass:"main-canvas pageA4",class:{active:a===t.currentIndex},on:{click:function(e){t.currentIndex=a}}},[i("draggable",{ref:"realRef_"+a,refInFor:!0,attrs:{group:"componentDrag",animation:"400",ghostClass:"ghost",handle:".sort-icon","data-index":a},model:{value:e.drawList,callback:function(n){t.$set(e,"drawList",n)},expression:"page.drawList"}},t._l(e.drawList,(function(e,s){return i("div",{key:s,staticClass:"main-canvas-item"},[["edit","text"].includes(e.component)?i("div",{key:e.id,staticClass:"main-canvas-text",style:{width:e.width+"px"}},["edit"===e.component?i("tinymce",{attrs:{height:"200"},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"draw.content"}}):i("div",{ref:e.id,refInFor:!0,staticClass:"main-canvas-content",domProps:{innerHTML:t._s(e.content)}}),i("el-icon",{staticClass:"button edit-button",attrs:{name:"text"===e.component?"edit":"copy-document",id:"printIgnore"},nativeOn:{click:function(n){return t.handleToggle(e)}}}),i("el-icon",{staticClass:"button del-button",attrs:{name:"delete",id:"printIgnore"},nativeOn:{click:function(n){return t.removeComponent(e.id,a)}}}),i("el-icon",{staticClass:"button sort-icon",attrs:{name:"rank",id:"printIgnore"}})],1):i("div",{key:e.id,staticClass:"main-canvas-echarts",style:{width:parseFloat(e.width)+parseFloat(e.left)+"px",height:parseFloat(e.height)+parseFloat(e.top)+"px"}},[i("vue-drag-resize",{attrs:{x:parseFloat(e.left),y:parseFloat(e.top),w:parseFloat(e.width),h:parseFloat(e.height),dragCancel:".noCancel"},on:{resizestop:function(n){return t.handleResizeStop(n,e,a)},dragstop:function(n){return t.handleDragStop(n,e,a)}}},[i("img",{staticClass:"img",attrs:{src:n("7e77"),alt:""}}),i("el-icon",{staticClass:"button noCancel del-button",attrs:{name:"delete",id:"printIgnore"},nativeOn:{click:function(n){return t.removeComponent(e.id,a)}}}),i("el-icon",{staticClass:"button noCancel sort-icon",attrs:{name:"rank",id:"printIgnore"}})],1)],1)])})),0),i("div",{staticClass:"paging"},[i("span",{staticClass:"currentIndex"},[t._v(t._s(a+1))]),i("span",{staticClass:"split"},[t._v("/")]),i("span",{staticClass:"totalIndex"},[t._v(t._s(t.pageList.length))])]),a>0?i("i",{staticClass:"el-icon-delete button page-del-button",attrs:{id:"printIgnore"},on:{click:function(e){return e.stopPropagation(),t.handleDelPage(a)}}}):t._e(),0===e.drawList.length?i("div",{staticClass:"empty"},[t._v(" 从左侧拖入或点选组件进行设计 ")]):t._e()],1)})),0)])])},K=[],W={name:"Home",components:{draggable:f.a,vueDragResize:b.a,tinymce:$},data:function(){return{comList:[{title:"文本框",component:"edit",height:360,width:"720",left:0,top:0,content:""},{title:"添加图表",component:"echarts",height:300,width:"720",left:0,top:0}],pageList:[{drawList:[],id:"page_"+(new Date).getTime()}],currentMove:{},currentIndex:0}},methods:{addNewPage:function(){this.pageList.push({drawList:[],id:"page_"+(new Date).getTime()}),this.currentIndex++},cloneComponent:function(t){this.currentMove=Object(h["a"])({id:"box_"+(new Date).getTime()},t)},handleEnd:function(t){},addComponent:function(t){var e=Object(h["a"])({},t);this.limitBox({type:"add",item:e})},handleToggle:function(t){t.component="edit"===t.component?"text":"edit"},removeComponent:function(t,e){var n=this.pageList[e].drawList,i=n.findIndex((function(e){return e.id==t})),a=Object(m["a"])(n);a.splice(i,1),this.pageList[e].drawList=a},handleDelPage:function(t){this.pageList.splice(t,1),this.currentIndex=this.pageList.length-1},handleResizeStop:function(t,e,n){var i=this;this.currentIndex=n,e.width=t.width,e.height=t.height,this.$nextTick((function(){i.limitBox({type:"move",item:e})}))},handleDragStop:function(t,e,n){var i=this;this.currentIndex=n,e.left=t.left,e.top=t.top,this.$nextTick((function(){i.limitBox({type:"move",item:e})}))},limitBox:function(t){var e=t.type,n=t.item,i=void 0===n?{}:n,a=this.$refs["mainRef"][0].offsetHeight,s=this.$refs["realRef_"+this.currentIndex][0].$el.scrollHeight;"add"===e?parseFloat(s)+parseFloat(i.height)>a?(this.$message.warning("当前页超出，已自动为您添加新页"),this.pageList.push({drawList:[Object(h["a"])({id:"box_"+(new Date).getTime()},i)],id:"page_"+(new Date).getTime()}),this.currentIndex++):this.pageList[this.currentIndex].drawList.push(Object(h["a"])({id:"box_"+(new Date).getTime()},i)):parseFloat(s)>a&&(this.pageList[this.currentIndex+1]?this.$message.warning("超出边界，请在新页进行操作"):(this.$message.warning("当前页超出，已自动为您添加新页"),this.pageList.push({drawList:[],id:"page_"+(new Date).getTime()})),this.currentIndex++)},print:function(){this.$print({printable:"print",type:"html",header:null,targetStyles:["*"],ignoreElements:["printIgnore"]})}}},X=W,Y=(n("10e8"),n("b0a6"),Object(o["a"])(X,G,K,!1,null,"c91510d8",null)),Z=Y.exports;i["default"].use(d["a"]);var tt=[{path:"/",name:"Home",component:z},{path:"/index",name:"index",component:B},{path:"/test",name:"test",component:U},{path:"/test2",name:"test2",component:Z}],et=new d["a"]({routes:tt}),nt=et,it=n("2f62");i["default"].use(it["a"]);var at=new it["a"].Store({state:{},mutations:{},actions:{},modules:{}}),st=n("5c96"),ot=n.n(st),rt=(n("0fae"),n("b20f"),n("add5")),ct=n.n(rt);i["default"].use(ot.a),i["default"].prototype.$print=ct.a,i["default"].config.productionTip=!1,new i["default"]({router:nt,store:at,render:function(t){return t(l)}}).$mount("#app")},"5bd6":function(t,e,n){},7537:function(t,e,n){},"7e77":function(t,e,n){t.exports=n.p+"img/img.1fe87f14.png"},"8d9d":function(t,e,n){},b0a6:function(t,e,n){"use strict";n("5bd6")},b20f:function(t,e,n){},dbcd:function(t,e,n){"use strict";n("2f94")},dd0d:function(t,e,n){},e720:function(t,e,n){"use strict";n("2f98")},e952:function(t,e,n){},f6a1:function(t,e,n){"use strict";n("e952")}},[[0,"runtime","chunk-libs"]]]);