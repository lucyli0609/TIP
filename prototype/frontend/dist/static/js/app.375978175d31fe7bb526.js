webpackJsonp([1],{"5Kos":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(e){a("ZJ/N")},null,null).exports,i=a("/ocq"),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links!!!!!!!!!!!!")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var s=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(e){a("5Kos")},"data-v-5f8a859b",null).exports,c={name:"Header",data:function(){return{logo:a("rNsI")}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header-wrapper"},[t("div",{staticClass:"header"},[t("p",[this._v("Easy Peasy")]),this._v(" "),t("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:this.logo}})])])},staticRenderFns:[]};var m=a("VU/8")(c,u,!1,function(e){a("UBBG")},"data-v-48177244",null).exports,d={data:function(){return{input:"",productInfo:[{barcode:"",name:"",price:""}],fileName:"",barcode:""}},name:"FirstPage",methods:{showBook:function(){console.log("Hey there"),this.axios.get("http://127.0.0.1:8000/api/show_books").then(function(e){var t=e.data;console.log(t)})},submitBarcode:function(){console.log(">>>"+this.input),this.axios.get("http://127.0.0.1:8000/api/overview_item").then(function(e){var t=e.data;console.log(t)})},handleUpload:function(e){console.log(e.name),this.fileName=e.name,this.input=this.fileName}},components:{Header:m}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("div",{staticClass:"MainBox"},[a("el-row",{attrs:{display:"margin-top:10px"}},[a("el-input",{staticStyle:{display:"inline-table",width:"60%",float:"left"},attrs:{placeholder:"Enter Barcode",disabled:!0},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e._v(" "),a("el-button",{staticStyle:{float:"left",margin:"2px"},on:{click:e.submitBarcode}},[e._v(" submit")])],1),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.productInfo,border:""}},[a("el-table-column",{attrs:{prop:"barcode",label:"Barcode Number","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Product Name","min-width":"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"Product Unit Price","min-width":"100"}})],1)],1)],1)],1)},staticRenderFns:[]};var f=a("VU/8")(d,p,!1,function(e){a("jLyh")},"data-v-4f0dedd6",null).exports,v={data:function(){return{form:{barcode:"",name:"",price:"",sup:""}}},name:"NewProduct",created:function(){console.log("hello!!!!!!!!!"),this.getParams()},methods:{getParams:function(){console.log(">>!!");var e=this.$route.query.barcode;console.log(e),this.form.barcode=e,console.log(">>!!")},onSubmit:function(){console.log("submit"),console.log(this.form)},goBack:function(){this.$router.push("/FirstPage")}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Barcode Number"}},[a("el-input",{model:{value:e.form.barcode,callback:function(t){e.$set(e.form,"barcode",t)},expression:"form.barcode"}},[e._v(e._s(e.form.barcode))])],1),e._v(" "),a("el-form-item",{attrs:{label:"Product Name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Unit Price"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Supplier Number"}},[a("el-switch",{model:{value:e.form.sup,callback:function(t){e.$set(e.form,"sup",t)},expression:"form.sup"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")]),e._v(" "),a("el-button",{on:{click:e.goBack}},[e._v("Cancel")])],1)],1)],1)},staticRenderFns:[]},_=a("VU/8")(v,h,!1,null,null,null).exports,b={data:function(){return{fileName:"",barcode:"",name:"",price:"",quantity:"",form:{barcode:"",name:"",price:"",quantity:""}}},components:{Header:m},methods:{handleUpload:function(e){console.log(e.name),this.fileName=e.name,this.barcode=this.fileName},searchBarcode:function(){var e=this;this.axios.get("http://127.0.0.1:8000/api/barcode_get_item?barcode="+this.barcode).then(function(t){var a=t.data;console.log(a),console.log(a.productInfo),e.form=a.productInfo,0===a.newItem?(e.name=a.productInfo.name,e.price=a.productInfo.price,e.$message({message:"We found the product in the Barcode Database",type:"success"})):e.$message({message:"We cannot find the product, please manually enter details",type:"warning"})})},onSubmit:function(){this.axios.post("http://127.0.0.1:8000/api/update_info",{barcode:this.barcode,name:this.name,price:this.price,quantity:this.quantity}).then(function(e){console.log(e),console.log(e.data)})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._v(" "),a("div",{staticClass:"MainBox"},[a("el-row",[a("div",{staticClass:"box1"},[a("el-upload",{attrs:{action:"#","list-type":"picture-card","auto-upload":!1},scopedSlots:e._u([{key:"file",fn:function(t){var o=t.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:o.url,alt:""}}),e._v(" "),a("span",{staticClass:"el-upload-list__item-actions"},[e.disabled?e._e():a("span",{staticClass:"el-upload-list__item-delete",on:{click:function(t){return e.handleUpload(o)}}},[a("i",{staticClass:"el-icon-upload2"}),e._v(" "),a("p",{staticClass:"search"},[e._v("Search Barcode")])])])])}}])},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)]),e._v(" "),a("el-row",[a("el-button",{on:{click:e.searchBarcode}},[e._v("search the Barcode")])],1),e._v(" "),a("el-row",[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,"label-position":e.left}},[a("el-form-item",{attrs:{label:"Barcode Number"}},[a("el-input",{model:{value:e.barcode,callback:function(t){e.barcode=t},expression:"barcode"}},[e._v(e._s(e.form.barcode))])],1),e._v(" "),a("el-form-item",{attrs:{label:"Product Name"}},[a("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Unit Price"}},[a("el-input",{model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Quantity"}},[a("el-input-number",{model:{value:e.quantity,callback:function(t){e.quantity=t},expression:"quantity"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Create")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var w=a("VU/8")(b,g,!1,function(e){a("vprp")},"data-v-d7f4fba2",null).exports;o.default.use(i.a);var y=new i.a({routes:[{path:"/",name:"HelloWorld",component:s},{path:"/FirstPage",name:"FirstPage",component:f},{path:"/NewProduct",name:"NewProduct",component:_},{path:"/Header",name:"Header",component:m},{path:"/scan",name:"scan",component:w}]}),k=a("zL8q"),x=a.n(k),N=(a("tvR6"),a("mtWM")),B=a.n(N);o.default.config.productionTip=!1,o.default.use(x.a),o.default.config.productionTip=!1,o.default.prototype.axios=B.a,new o.default({el:"#app",router:y,components:{App:r},template:"<App/>"})},UBBG:function(e,t){},"ZJ/N":function(e,t){},jLyh:function(e,t){},rNsI:function(e,t,a){e.exports=a.p+"static/img/Logo_NBG.814e8e3.png"},tvR6:function(e,t){},vprp:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.375978175d31fe7bb526.js.map