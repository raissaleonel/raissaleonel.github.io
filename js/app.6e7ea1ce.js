(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,A=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&A.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(A.length)A.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"039a":function(t,e,a){"use strict";var n=a("7174"),i=a.n(n);i.a},"0405":function(t,e,a){},"0f7a":function(t,e,a){},"2d11":function(t,e,a){"use strict";var n=a("4187"),i=a.n(n);i.a},4187:function(t,e,a){},4269:function(t,e,a){},"4dff":function(t,e,a){"use strict";var n=a("d20e"),i=a.n(n);i.a},"4e9f":function(t,e,a){"use strict";var n=a("4269"),i=a.n(n);i.a},"53a2":function(t,e,a){"use strict";var n=a("0405"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},o=[],r=(a("96cf"),a("1da1")),s=a("bc3a"),c=a.n(s),l="https://obscure-refuge-51303.herokuapp.com",u="user_admin";function d(t){t&&t.response&&t.response.data?n["a"].toasted.global.defaultError({msg:t.response.data}):"string"===typeof t?n["a"].toasted.global.defaultError({msg:t}):n["a"].toasted.global.defaultError()}var A={name:"App",methods:{validateToken:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=localStorage.getItem(u),n=JSON.parse(a),t.$store.commit("setUser",null),n){e.next=6;break}return t.$store.commit("setUser",null),e.abrupt("return");case 6:return e.next=8,c.a.post("".concat(l,"/validate"),n);case 8:i=e.sent,i.data?t.$store.commit("setUser",n):(localStorage.removeItem(u),t.$store.commit("setUser",null));case 10:case"end":return e.stop()}}),e)})))()}},created:function(){this.validateToken()}},m=A,g=(a("034f"),a("2877")),f=Object(g["a"])(m,i,o,!1,null,null,null),p=f.exports,b=a("a65d"),h=a.n(b);n["a"].use(h.a,{iconPack:"fontawesome",duration:3e3}),n["a"].toasted.register("defaultSuccess",(function(t){return t.msg?t.msg:"Operação realizada com sucesso"}),{type:"success",icon:"check"}),n["a"].toasted.register("defaultError",(function(t){return t.msg?t.msg:"Oops... Erro Inesperado"}),{type:"error",icon:"times"}),n["a"].toasted.register("loading",(function(t){return t.msg?t.msg:"Carregando a página..."}),{type:"info",icon:"times"}),n["a"].toasted.register("loadingFinish",(function(t){return t.msg?t.msg:"Página carregada!"}),{type:"success",icon:"check"});a("f9e3"),a("2dd8");var v=a("9f7b");n["a"].use(v["a"]);var C=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"client"},[a("Title",{attrs:{msg:"Site",logoutButtom:"0"}}),a("Menu"),a("Content"),t._m(0)],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("span",[t._v("Site da pessoa 123"),a("i",{staticClass:"fa fa-facebook"}),a("i",{staticClass:"fa fa-instagram"}),a("i",{staticClass:"fa fa-youtube"})])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",["0"==t.logoutButtom?a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.msg))])]):t._e(),"1"==t.logoutButtom?a("div",{staticClass:"title title-logout"},[t._v(" "+t._s(t.msg)+" "),a("span",[a("b-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"sm",variant:"outline-dark"},on:{click:function(e){return t.navigate()}}},[t._v("voltar para o blog")]),a("b-button",{attrs:{size:"sm",variant:"outline-dark"},on:{click:t.logout}},[t._v("logout")])],1)]):t._e()])},k=[],x={name:"Title",props:{msg:String,logoutButtom:String},methods:{navigate:function(){this.$router.push("/")},logout:function(){localStorage.removeItem(u),this.$store.commit("setUser",null),this.$router.push("/"),this.$toasted.global.defaultSuccess({msg:"Successfully Logged Out"})}}},I=x,B=(a("d6f6"),Object(g["a"])(I,y,k,!1,null,null,null)),E=B.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/")}}},[t._v("Pagina Principal")]),a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/categories")}}},[t._v("Categorias")])])},S=[],O={name:"Menu",methods:{navigate:function(t){this.$router.push(t)}}},U=O,M=(a("86de"),Object(g["a"])(U,Q,S,!1,null,null,null)),L=M.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view",{staticClass:"content"})},$=[],D={name:"Content"},K=D,z=(a("2d11"),Object(g["a"])(K,Y,$,!1,null,null,null)),G=z.exports,P={name:"Client",components:{Title:E,Menu:L,Content:G}},j=P,q=(a("c88e"),Object(g["a"])(j,_,w,!1,null,null,null)),J=q.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"publication-box"},[a("Title",{attrs:{msg:"Administração",logoutButtom:"1"}}),a("AdminMenu"),a("router-view")],1)},F=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-menu"},[a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/admin/publication")}}},[t._v("Gerenciar publicações")]),a("div",{staticClass:"menu-item",on:{click:function(e){return t.navigate("/admin/category")}}},[t._v("Gerenciar categorias")])])},T=[],Z={name:"AdminMenu",methods:{navigate:function(t){this.$router.push(t)}}},R=Z,W=(a("93ed"),Object(g["a"])(R,N,T,!1,null,null,null)),X=W.exports,V={name:"Admin",components:{Title:E,AdminMenu:X},data:function(){return{fields:["name","title","subtitle","ações"],items:[],edit:!1,new_publication:{name:null,title:null,subtitle:null,content:null,removed:0}}},methods:{validateToken:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem(u),n=JSON.parse(a),t.$store.commit("setUser",null),e.next=6,c.a.post("".concat(l,"/validate"),n);case 6:i=e.sent,i.data?t.$store.commit("setUser",n):(localStorage.removeItem(u),t.$store.commit("setUser",null),t.$router.push({path:"/login"})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.$router.push({path:"/login"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},beforeMount:function(){this.validateToken()}},tt=V,et=Object(g["a"])(tt,H,F,!1,null,null,null),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"login-panel"},[a("h3",[t._v("Login")]),a("b-form-group",{attrs:{label:"Name:","label-for":"new-name"}},[a("b-form-input",{attrs:{id:"new-name",type:"text",required:"",placeholder:"Insira o seu email"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Título:","label-for":"new-title"}},[a("b-form-input",{attrs:{id:"new-title",type:"password",required:"",placeholder:"Insira a sua senha"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"buttons"},[a("b-button",{on:{click:function(e){return t.navigate("/")}}},[t._v("Cancelar")]),a("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.login()}}},[t._v("Entrar")])],1)],1)])},it=[],ot=(a("b0c0"),{name:"Login",data:function(){return{name:null,password:null}},methods:{navigate:function(t){this.$router.push({path:t})},login:function(){var t=this;c.a.post("".concat(l,"/login"),{email:this.name,password:this.password}).then((function(e){t.$store.commit("setUser",e.data),localStorage.setItem(u,JSON.stringify(e.data)),t.$router.push({path:"/admin/publication"}),t.$toasted.global.defaultSuccess({msg:"Successfully Logged In"})})).catch(d)}}}),rt=ot,st=(a("039a"),Object(g["a"])(rt,nt,it,!1,null,null,null)),ct=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("Loading"):a("div",{staticClass:"home"},[a("div",{staticClass:"home-title"},[t._v("Bem vindo! Confira as principais publicações!")]),a("b-container",{staticClass:"home-content"},[a("b-row",t._l(t.data,(function(e){return a("b-col",{key:e._id,on:{click:function(a){return t.navigate(e._id)}}},[a("div",{staticClass:"publicationBox"},[a("div",{staticClass:"publicationBox-info"},[a("div",{staticClass:"boxcategory"},[t._v(t._s(e.category_name))]),a("div",{staticClass:"boxtitle"},[t._v(t._s(e.title))]),a("div",{staticClass:"boxsubtitle"},[t._v(t._s(e.subtitle))])]),a("img",{attrs:{src:e.image}})])])})),1)],1)],1)},ut=[],dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("cf1c"),alt:"Loading"}})])}],mt={name:"Loading"},gt=mt,ft=(a("53a2"),Object(g["a"])(gt,dt,At,!1,null,null,null)),pt=ft.exports,bt={name:"Home",components:{Loading:pt},data:function(){return{data:[],loading:0}},methods:{navigate:function(t){this.$router.push("/publication/".concat(t))},loadPublications:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/publication-favorites")).then((function(e){t.data=e.data,t.loading=0})).catch(d)}},beforeMount:function(){this.loadPublications()}},ht=bt,vt=(a("4dff"),Object(g["a"])(ht,lt,ut,!1,null,null,null)),Ct=vt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("Loading",{staticClass:"loading"}):a("b-container",{staticClass:"categories"},[a("b-row",t._l(t.categories,(function(e){return a("b-col",{key:e._id,staticClass:"category-item",on:{click:function(a){return t.navigate(e._id)}}},[a("h2",[t._v(t._s(e.title))]),a("img",{attrs:{src:e.image}})])})),1)],1)},wt=[],yt={name:"Categories",components:{Loading:pt},data:function(){return{categories:[],loading:0}},methods:{navigate:function(t){this.$router.push("/category/".concat(t))},loadCategories:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/category")).then((function(e){t.categories=e.data,t.loading=0})).catch(d)}},beforeMount:function(){this.loadCategories()}},kt=yt,xt=(a("591d"),Object(g["a"])(kt,_t,wt,!1,null,null,null)),It=xt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("Loading"):a("div",{staticClass:"publication"},[a("h1",[t._v(t._s(t.data.title))]),a("h3",[t._v(t._s(t.data.subtitle))]),t._l(t.data.content,(function(e,n){return a("span",{key:n},["text"==e.type?a("div",[t._v(t._s(e.data))]):t._e(),"image"==e.type?a("img",{attrs:{src:e.data}}):t._e(),"video"==e.type?a("iframe",{attrs:{frameborder:"0",allowfullscreen:"",src:"https://www.youtube.com/embed/"+e.data}}):t._e()])}))],2)},Et=[],Qt=(a("99af"),{name:"Title",components:{Loading:pt},props:{id:String},data:function(){return{loading:!1,data:null}},methods:{loadPublication:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/publication/").concat(this.id)).then((function(e){t.data=e.data[0],t.loading=0,console.log(t.data)})).catch(d)}},beforeMount:function(){this.loadPublication()}}),St=Qt,Ot=(a("9d50"),Object(g["a"])(St,Bt,Et,!1,null,null,null)),Ut=Ot.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("Loading"):a("div",{staticClass:"data-category"},[a("div",{staticClass:"data-category-title"},[a("h1",[t._v(t._s(t.data.title))]),a("img",{attrs:{src:t.data.image}})]),0==t.data.children.length?a("h3",[t._v("Categoria sem publicações :(")]):t._e(),t._l(t.data.children,(function(e,n){return a("span",{key:n,on:{click:function(a){return t.navigate(e._id)}}},[t._v(" "+t._s(e.title)+" "),a("img",{attrs:{src:e.image}})])}))],2)},Lt=[],Yt={name:"Title",components:{Loading:pt},props:{id:String},data:function(){return{loading:!1,data:null}},methods:{navigate:function(t){this.$router.push("/publication/".concat(t))},loadCategory:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/category/").concat(this.id)).then((function(e){t.data=e.data[0],t.loading=0})).catch(d)}},beforeMount:function(){this.loadCategory()}},$t=Yt,Dt=(a("4e9f"),Object(g["a"])($t,Mt,Lt,!1,null,null,null)),Kt=Dt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-publication"},[a("div",{staticClass:"admin-publication-create"},[t.edit?t._e():a("h3",[t._v("Criar uma publicação")]),t.edit?a("h3",[t._v("Editar uma publicação")]):t._e(),a("b-form-group",{attrs:{label:"Título:","label-for":"new-title"}},[a("b-form-input",{attrs:{id:"new-title",type:"text",required:"",placeholder:"Insira um título para a publicação"},model:{value:t.new_publication.title,callback:function(e){t.$set(t.new_publication,"title",e)},expression:"new_publication.title"}})],1),a("b-form-group",{attrs:{label:"Subtítulo:","label-for":"new-subtitle"}},[a("b-form-input",{attrs:{id:"new-subtitle",type:"text",required:"",placeholder:"Insira um subtítulo para a publicação"},model:{value:t.new_publication.subtitle,callback:function(e){t.$set(t.new_publication,"subtitle",e)},expression:"new_publication.subtitle"}})],1),a("b-form-group",{staticClass:"newpublication-content",attrs:{label:"Conteúdo:","label-for":"new-content"}},[t._l(t.new_publication.content,(function(e,n){return a("span",{key:n},["text"==e.type?a("span",{staticClass:"image-and-uploader"},[a("b-button",{staticClass:"m-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.removeContent(n)}}},[a("i",{staticClass:"fa fa-trash"})]),a("b-form-textarea",{attrs:{id:"new-content",type:"text",required:"",placeholder:"Insira o conteúdo"},model:{value:t.new_publication.content[n].data,callback:function(e){t.$set(t.new_publication.content[n],"data",e)},expression:"new_publication.content[index].data"}})],1):t._e(),"video"==e.type?a("span",{staticClass:"image-and-uploader"},[a("b-button",{staticClass:"m-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.removeContent(n)}}},[a("i",{staticClass:"fa fa-trash"})]),a("b-form-input",{attrs:{id:"new-content-video",type:"text",required:"",placeholder:"Insira o link do video"},model:{value:t.new_publication.content[n].data,callback:function(e){t.$set(t.new_publication.content[n],"data",e)},expression:"new_publication.content[index].data"}})],1):t._e(),"image"==e.type?a("span",{staticClass:"image-and-uploader"},[a("b-button",{staticClass:"m-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.removeContent(n)}}},[a("i",{staticClass:"fa fa-trash"})]),a("img",{staticStyle:{height:"50px"},attrs:{src:t.new_publication.content[n].data}}),a("ImageUploader",{attrs:{className:"image-uploader",debug:1,maxWidth:384,maxHeight:384,quality:.7,autoRotate:!0,outputFormat:"verbose",preview:!1,capture:!1,accept:"image/*",doNotResize:"['gif', 'svg']"},on:{input:function(e){return t.setContentImage(e,n)},onUpload:function(e){return t.setContentImage(e,n)},onComplete:function(e){return t.setContentImage(e,n)}}})],1):t._e()])})),a("b-button",{staticClass:"m-1",on:{click:function(e){return t.addContent("text")}}},[t._v(" add "),a("i",{staticClass:"fa fa-align-left"})]),a("b-button",{staticClass:"m-1",on:{click:function(e){return t.addContent("image")}}},[t._v(" add "),a("i",{staticClass:"fa fa-image"})]),a("b-button",{staticClass:"m-1",on:{click:function(e){return t.addContent("video")}}},[t._v(" add "),a("i",{staticClass:"fa fa-youtube"})])],2),a("b-form-group",{attrs:{label:"Categoria:","label-for":"new-category"}},[a("b-dropdown",{attrs:{id:"new-category",dropup:"",text:t.selected_category}},t._l(t.categories,(function(e){return a("b-dropdown-item",{key:e._id,attrs:{value:e},on:{click:function(a){t.new_publication.category_id=e._id,t.new_publication.category_name=e.name,t.selected_category=e.name}}},[t._v(t._s(e.name))])})),1)],1),a("b-form-group",{attrs:{label:"Capa da publicação:","label-for":"new-image"}},[a("span",{staticClass:"image-and-uploader"},[a("img",{staticStyle:{height:"50px"},attrs:{src:t.new_publication.image}}),a("ImageUploader",{attrs:{debug:1,maxWidth:384,maxHeight:384,quality:.7,autoRotate:!0,outputFormat:"verbose",preview:!1,capture:!1,accept:"image/*",doNotResize:"['gif', 'svg']"},on:{input:t.setCoverImage,onUpload:t.setCoverImage,onComplete:t.setCoverImage}})],1)]),a("div",{staticClass:"buttons"},[a("b-button",{on:{click:t.reset}},[t._v("Cancelar")]),t.edit?t._e():a("b-button",{attrs:{variant:"success"},on:{click:t.create}},[t._v("Criar")]),t.edit?a("b-button",{attrs:{variant:"success"},on:{click:t.update}},[t._v("Editar")]):t._e()],1)],1),a("div",{staticClass:"admin-publication-list"},[t.loading?a("Loading"):a("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"image",fn:function(t){return[a("img",{staticStyle:{width:"70px"},attrs:{src:t.item.image}})]}},{key:"editar",fn:function(e){return[a("b-button",{staticClass:"mr-1",attrs:{variant:"warning"},on:{click:function(a){t.edit=!0,t.new_publication=e.item}}},[a("i",{staticClass:"fa fa-pencil"})])]}},{key:"ativar",fn:function(e){return[e.item.removed?t._e():a("b-button",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:function(a){return t.remove(e.item)}}},[a("i",{staticClass:"fa fa-check-circle"})]),e.item.removed?a("b-button",{staticClass:"mr-1",attrs:{variant:"danger"},on:{click:function(a){return t.remove(e.item)}}},[a("i",{staticClass:"fa fa-times-circle"})]):t._e()]}},{key:"favoritar",fn:function(e){return[e.item.favorited?t._e():a("b-button",{staticClass:"mr-1",on:{click:function(a){return t.favorite(e.item)}}},[a("i",{staticClass:"fa fa-star"})]),e.item.favorited?a("b-button",{staticClass:"mr-1",attrs:{variant:"warning"},on:{click:function(a){return t.favorite(e.item)}}},[a("i",{staticClass:"fa fa-star"})]):t._e()]}}])})],1)])},Gt=[],Pt=(a("a434"),a("5530")),jt=a("4c7d"),qt=a.n(jt),Jt={name:"AdminPublication",components:{Loading:pt,ImageUploader:qt.a},data:function(){return{loading:0,selected_category:null,fields:["image","title","category_name","editar","ativar","favoritar"],items:[],categories:[],edit:!1,new_publication:{title:null,subtitle:null,content:[],image:null,category_id:null,category_name:null,removed:0,favorited:0}}},methods:{addContent:function(t){this.new_publication.content.push({type:t,data:null})},removeContent:function(t){this.new_publication.content.splice(t,1)},setContentImage:function(t,e){this.hasImage=!0,void 0!=t&&(this.new_publication.content[e].data=t.dataUrl)},setCoverImage:function(t){this.hasImage=!0,void 0!=t&&(this.new_publication.image=t.dataUrl)},loadPublications:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/publication")).then((function(e){t.items=e.data,t.loading=0})).catch(d)},loadCategories:function(){var t=this;c.a.get("".concat(l,"/category")).then((function(e){t.categories=e.data})).catch(d)},create:function(){var t=this;c.a.post("".concat(l,"/publication"),this.new_publication).then((function(){t.loadPublications(),t.$toasted.global.defaultSuccess({msg:"Publicação cadastrado!"}),t.reset()})).catch(d)},update:function(){var t=this;c.a.put("".concat(l,"/publication"),this.new_publication).then((function(){t.loadPublications(),t.$toasted.global.defaultSuccess({msg:"Publicação atualizada!"}),t.reset()})).catch(d)},remove:function(t){var e=this;c.a.put("".concat(l,"/publication"),Object(Pt["a"])({},t,{removed:!t.removed})).then((function(){e.loadPublications(),e.$toasted.global.defaultSuccess({msg:"Publicação atualizada!"}),e.reset()})).catch(d)},favorite:function(t){var e=this;c.a.put("".concat(l,"/publication"),Object(Pt["a"])({},t,{favorited:!t.favorited})).then((function(){e.loadPublications(),e.$toasted.global.defaultSuccess({msg:"Publicação atualizada!"}),e.reset()})).catch(d)},reset:function(){this.edit=!1,this.new_publication={title:null,subtitle:null,content:[],image:null,category_id:null,category_name:null,removed:0,favorited:0}}},mounted:function(){this.loadPublications(),this.loadCategories()},created:function(){this.loadPublications(),this.loadCategories()}},Ht=Jt,Ft=(a("de9d"),Object(g["a"])(Ht,zt,Gt,!1,null,null,null)),Nt=Ft.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-category"},[a("div",{staticClass:"admin-category-create"},[t.edit?t._e():a("h3",[t._v("Criar uma nova Categoria")]),t.edit?a("h3",[t._v("Editar uma Categoria")]):t._e(),a("b-form-group",{attrs:{label:"Nome:","label-for":"new-name"}},[a("b-form-input",{attrs:{id:"new-name",type:"text",required:"",placeholder:"Insira um nome para a Categoria"},model:{value:t.new_category.name,callback:function(e){t.$set(t.new_category,"name",e)},expression:"new_category.name"}})],1),a("b-form-group",{attrs:{label:"Título:","label-for":"new-title"}},[a("b-form-input",{attrs:{id:"new-title",type:"text",required:"",placeholder:"Insira um título para a Categoria"},model:{value:t.new_category.title,callback:function(e){t.$set(t.new_category,"title",e)},expression:"new_category.title"}})],1),a("b-form-group",{attrs:{label:"Capa da categoria:","label-for":"new-image"}},[a("img",{staticStyle:{width:"70px"},attrs:{src:t.new_category.image}}),a("ImageUploader",{attrs:{debug:1,maxWidth:384,maxHeight:384,quality:.7,autoRotate:!0,outputFormat:"verbose",preview:!1,capture:!1,accept:"image/*",doNotResize:"['gif', 'svg']"},on:{input:t.setCoverImage,onUpload:t.setCoverImage,onComplete:t.setCoverImage}})],1),a("div",{staticClass:"buttons"},[a("b-button",{on:{click:t.reset}},[t._v("Cancelar")]),t.edit?t._e():a("b-button",{attrs:{variant:"success"},on:{click:t.create}},[t._v("Criar")]),t.edit?a("b-button",{attrs:{variant:"success"},on:{click:t.update}},[t._v("Editar")]):t._e()],1)],1),a("div",{staticClass:"admin-category-list"},[t.loading?a("Loading"):a("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"editar",fn:function(e){return[a("b-button",{staticStyle:{margin:"0 15px"},attrs:{variant:"warning"},on:{click:function(a){t.edit=!0,t.new_category=e.item}}},[a("i",{staticClass:"fa fa-pencil"})])]}},{key:"image",fn:function(t){return[a("img",{staticStyle:{width:"70px"},attrs:{src:t.item.image}})]}}])})],1)])},Zt=[],Rt={name:"AdminCategory",components:{Loading:pt,ImageUploader:qt.a},data:function(){return{loading:0,fields:["image","name","title","editar"],items:[],edit:!1,new_category:{name:null,title:null,image:null},imageBytes:null}},methods:{setCoverImage:function(t){this.hasImage=!0,void 0!=t&&(this.new_category.image=t.dataUrl)},loadCategories:function(){var t=this;this.loading=1,c.a.get("".concat(l,"/category")).then((function(e){t.items=e.data,t.loading=0})).catch(d)},create:function(){var t=this;c.a.post("".concat(l,"/category"),this.new_category).then((function(){t.loadCategories(),t.$toasted.global.defaultSuccess({msg:"Categoria cadastrada!"}),t.reset()})).catch(d)},update:function(){var t=this;c.a.put("".concat(l,"/category"),this.new_category).then((function(){t.loadCategories(),t.$toasted.global.defaultSuccess({msg:"Categoria atualizada!"}),t.reset()})).catch(d)},remove:function(t){var e=this;c.a.put("".concat(l,"/category"),Object(Pt["a"])({},t,{removed:!t.removed})).then((function(){e.loadCategories(),e.$toasted.global.defaultSuccess({msg:"Categoria atualizada!"}),e.reset()})).catch(d)},reset:function(){this.edit=!1,this.new_category={name:null,title:null}}},mounted:function(){this.loadCategories()},created:function(){this.loadCategories()}},Wt=Rt,Xt=(a("7719"),Object(g["a"])(Wt,Tt,Zt,!1,null,null,null)),Vt=Xt.exports;n["a"].use(C["a"]);var te=new C["a"]({history:!0,routes:[{name:"Client",path:"/",component:J,children:[{path:"/",name:"Home",component:Ct},{path:"/categories",name:"Categories",component:It},{path:"/publication/:id",name:"Publication",component:Ut,props:!0},{path:"/category/:id",name:"Category",component:Kt,props:!0}]},{name:"Admin",path:"/admin",component:at,children:[{path:"/admin/publication",name:"AdminPublication",component:Nt},{path:"/admin/category",name:"AdminCategory",component:Vt}]},{name:"Login",path:"/login",component:ct}]}),ee=te,ae=a("2f62");n["a"].use(ae["a"]);var ne=new ae["a"].Store({state:{user:null,loged:!1},mutations:{setUser:function(t,e){t.user=e,e?(c.a.defaults.headers.common["Authorization"]="bearer ".concat(e.token),t.loged=!0):(delete c.a.defaults.headers.common["Authorization"],t.loged=!1)}}});n["a"].config.productionTip=!1,new n["a"]({store:ne,router:ee,render:function(t){return t(p)}}).$mount("#app")},"591d":function(t,e,a){"use strict";var n=a("9d1e"),i=a.n(n);i.a},"5e8a":function(t,e,a){},7174:function(t,e,a){},7719:function(t,e,a){"use strict";var n=a("a092"),i=a.n(n);i.a},"85ac":function(t,e,a){},"85ec":function(t,e,a){},"86de":function(t,e,a){"use strict";var n=a("db42"),i=a.n(n);i.a},"93ed":function(t,e,a){"use strict";var n=a("f610"),i=a.n(n);i.a},"9d1e":function(t,e,a){},"9d50":function(t,e,a){"use strict";var n=a("0f7a"),i=a.n(n);i.a},a092:function(t,e,a){},c17e:function(t,e,a){},c88e:function(t,e,a){"use strict";var n=a("5e8a"),i=a.n(n);i.a},cf1c:function(t,e){t.exports="data:image/gif;base64,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"},d20e:function(t,e,a){},d6f6:function(t,e,a){"use strict";var n=a("c17e"),i=a.n(n);i.a},db42:function(t,e,a){},de9d:function(t,e,a){"use strict";var n=a("85ac"),i=a.n(n);i.a},f610:function(t,e,a){}});
//# sourceMappingURL=app.6e7ea1ce.js.map