(function(t){function e(e){for(var r,i,s=e[0],a=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},l=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Soma-website/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=a;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SoMa")],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"soma"},[n("header",{staticClass:"globalHeader"},[n("form",{staticClass:"searchForm",attrs:{method:"get",action:"https://www.baidu.com/s"}},[n("input",{attrs:{name:"wd",type:"text"},on:{keydown:function(e){return e.stopPropagation(),t.enter.apply(null,arguments)}}}),n("button",{attrs:{type:"submit"}},[t._v("搜索")])])]),n("main",{staticClass:"globalMain"},[n("ul",{staticClass:"siteList"},[t._l(t.urlList,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:t.urlList[r].url}},[n("div",{staticClass:"site"},[n("div",{staticClass:"logo"},[t._v(t._s(t.urlList[r].logo))]),n("div",{staticClass:"link"},[t._v(t._s(t.simplifyUrl(t.urlList[r].url)))]),n("div",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.close(r)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-close"}})])])])])])})),n("li",[n("div",{staticClass:"addButton",on:{click:t.add}},[n("div",{staticClass:"icon-wrapper"},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-add"}})])]),n("div",{staticClass:"text"},[t._v("新增网站")])])])],2)]),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"globalFooter"},[n("div",{staticClass:"footerButton"},[t._v("搜码 - 私人导航网站")])])}],a=(n("ac1f"),n("5319"),n("a434"),n("e9c4"),{name:"HelloWorld",data:function(){return{addUrl:null,urlList:this.xObject||[{logo:"J",url:"https://juejin.cn/"},{logo:"G",url:"https://github.com/"},{logo:"Z",url:"https://www.zhihu.com/hot"}],xObject:null,logoText:null,cache:null,key:null}},methods:{add:function(){this.addUrl=window.prompt("请问你要添加的网址是？"),null!==this.addUrl&&(0!==this.addUrl.indexOf("http")&&(this.addUrl="https://"+this.addUrl),this.logoText=this.simplifyUrl(this.addUrl),this.urlList.push({logo:this.logoText[0],url:this.addUrl}))},simplifyUrl:function(t){return t.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,"")},close:function(t){this.urlList.splice(t,1)},enter:function(){}},beforeCreate:function(){this.xObject=JSON.parse(localStorage.getItem("x"))},mounted:function(){var t=this;window.onbeforeunload=function(){t.cache=JSON.stringify(t.urlList),localStorage.setItem("x",t.cache)},document.onkeydown=function(e){t.key=e.key;for(var n=0;n<t.urlList.length;n++)t.urlList[n].logo.toLowerCase()===t.key&&window.open(t.urlList[n].url)}}}),c=a,u=(n("8445"),n("2877")),d=Object(u["a"])(c,i,s,!1,null,"6fc966c0",null),p=d.exports,f={name:"App",components:{SoMa:p}},h=f,v=Object(u["a"])(h,o,l,!1,null,null,null),g=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},8445:function(t,e,n){"use strict";n("a5ac")},a5ac:function(t,e,n){}});
//# sourceMappingURL=app.4e9d6a98.js.map