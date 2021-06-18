!function(){function o(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function r(i){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);(t="function"==typeof Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})):t).forEach(function(e){var t,o;t=i,e=r[o=e],o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e})}return i}class i{get(e){return o(this,n)[e]}set(e,t){void 0===t?this.remove(e):o(this,n)[e]!==t&&(o(this,n)[e]=t,this.persist())}remove(e){delete o(this,n)[e]&&this.persist()}persist(){localStorage.setItem(this.name,JSON.stringify(o(this,n)))}static load(e){var t=localStorage.getItem(e);return new i(e,void 0!==t?JSON.parse(t):{})}constructor(e,t){n.set(this,{writable:!0,value:void 0}),this.name=e,function(e,t,o){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");if(!(e=t.get(e)).writable)throw new TypeError("attempted to set read only private field");e.value=o}(this,n,null!=t?t:{})}}var n=new WeakMap;function s(e,t){return-1!==(t=t,-1!=(t=(e=e).indexOf(t))&&e.splice(t,1),t)}function t(t){delete BarItems[t.id];for(const r of t.toolbars){let e=0;for(;e<r.children.length;){var o=r.children[e];o===t||o.id===t?(r.children.splice(e,1),!s(o.toolbars,r)||void 0!==(o=parseInt(Object.entries(r.positionLookup).find(([,e])=>e===t)[0]))&&(void 0===r.postload&&(r.postload=[]),r.postload.push([t.id,o]))):e++}r.update()}var e,i;s(Keybinds.actions,t)&&(e=t.category,s(i=Keybinds.structure[e].actions,t),0==i.length&&delete Keybinds.structure[e]),Object.keys(t).forEach(e=>delete t[e]),t.id="DISABLED"}var a=new WeakMap;const l=new class{register(e=!0,t){for(const o of["oninstall","onuninstall","onload","onunload"])void 0!==this.options[o]&&(this.options[o]=this.options[o].bind(this));e&&(this.registerEvent("onload",{before:()=>this.hook(t),after:this.postInit.bind(this)}),this.registerEvent("onunload",{after:this.unhook.bind(this)})),Plugin.register(this.id,this.options)}registerEvent(e,t){const o=this.options[e];this.options[e]=function(){null!=t&&t.before&&t.before(),void 0!==o&&o(),null!=t&&t.after&&t.after()}}hook(e){null!=e&&e.stylesheet&&function(e,t){const o=document.createElement("style");o.id=e,o.innerHTML=t,$(o).appendTo("head"),o}(`swathe-css-${this.id.replaceAll("_","-")}`,e.stylesheet)}postInit(){Object.values(Toolbars).forEach(e=>{e.postload&&e.update()})}unhook(){var e;null!==(e=this.styleElement)&&void 0!==e&&e.remove(),o(this,a).forEach(t)}createAction(e,t){o(this,a).push(new Action(e,t))}constructor(e,t,o){if(a.set(this,{writable:!0,value:[]}),/[^a-z0-9_]/.test(e))throw new Error("Invalid plugin id! It must be alphanumeric and lowercase.");this.id=e,t.about=(t.about?t.about+"<br/>":"")+"This plugin is part of the <a href='https://github.com/Unoqwy/swathe'>Swathe</a> plugin collection.",this.options=t,null!=o&&o.storage&&(this.storage=i.load("swathe_"+e))}}("stretch",{icon:"aspect_ratio",title:"Stretch",author:"Unoqwy",description:"Add missing actions to control screen space",variant:"both",onload:()=>{l.storage.get("menubar_hidden")&&h(!1),e("toggle_left_sidebar",["left"],"toggle",{name:"Toggle Left Sidebar",icon:"chevron_left"}),e("toggle_right_sidebar",["right"],"toggle",{name:"Toggle Right Sidebar",icon:"chevron_right"}),e("hide_sidebars",["left","right"],!1,{name:"Hide both sidebars",icon:"unfold_more"}),e("show_sidebars",["left","right"],!0,{name:"Show both sidebars",icon:"unfold_less"}),l.createAction("toggle_menubar",{name:"Toggle Menu Bar",icon:"menu_open",category:"view",click:()=>h()})}},{storage:!0});function e(e,t,o,i){l.createAction(e,r({},i,{category:"view",click:()=>{t.map(e=>`show_${e}_bar`).forEach(e=>{Prop[e]="toggle"==o?!Prop[e]:o}),resizeWindow()}}))}function h(e){void 0!==e?$("header").toggle(e):$("header").toggle();e=!$("header").is(":visible");$("#page_wrapper").toggleClass("h-100-override",e),l.storage.set("menubar_hidden",e||void 0)}l.register(!0,{stylesheet:".h-100-override{height:100% !important}"})}();