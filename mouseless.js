!function(){function t(t){var e;if(e)return e;var o={exports:{}};return t(o,o.exports),e=o.exports}function d(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t).value}class i{get(t){return d(this,o)[t]}set(t,e){void 0===e?this.remove(t):d(this,o)[t]!==e&&(d(this,o)[t]=e,this.persist())}remove(t){delete d(this,o)[t]&&this.persist()}persist(){localStorage.setItem(this.name,JSON.stringify(d(this,o)))}static load(t){var e=localStorage.getItem(t);return new i(t,void 0!==e?JSON.parse(e):{})}constructor(t,e){o.set(this,{writable:!0,value:void 0}),this.name=t,function(t,e,o){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");if(!(t=e.get(t)).writable)throw new TypeError("attempted to set read only private field");t.value=o}(this,o,null!=e?e:{})}}var o=new WeakMap;function s(t,e){return-1!==(e=e,-1!=(e=(t=t).indexOf(e))&&t.splice(e,1),e)}function e(e){delete BarItems[e.id];for(const n of e.toolbars){let t=0;for(;t<n.children.length;){var o=n.children[t];o===e||o.id===e?(n.children.splice(t,1),!s(o.toolbars,n)||void 0!==(o=parseInt(Object.entries(n.positionLookup).find(([,t])=>t===e)[0]))&&(void 0===n.postload&&(n.postload=[]),n.postload.push([e.id,o]))):t++}n.update()}var t,i;s(Keybinds.actions,e)&&(t=e.category,s(i=Keybinds.structure[t].actions,e),0==i.length&&delete Keybinds.structure[t]),Object.keys(e).forEach(t=>delete e[t]),e.id="DISABLED"}var n=new WeakMap;var r,c,a=t.bind(void 0,function(t,e){t.exports=function(){const{map:t,action:e}=this;t({u:Undo.undo,"<C-r>":Undo.redo,dd:e.delete})}}),l=t.bind(void 0,function(t,e){t.exports=function(){const{map:t,action:e}=this;t({"<C-n>":e.add_cube,"<C-g>":e.add_group,"<C-d>":e.duplicate,"<Tab>":e.toggle_quad_view})}}),u=a(),a=l();(r=r||{}).vimode=!1;let p,h;const v=new class{register(t=!0,e){for(const o of["oninstall","onuninstall","onload","onunload"])void 0!==this.options[o]&&(this.options[o]=this.options[o].bind(this));t&&(this.registerEvent("onload",{before:()=>this.hook(e),after:this.postInit.bind(this)}),this.registerEvent("onunload",{after:this.unhook.bind(this)})),BBPlugin.register(this.id,this.options)}registerEvent(t,e){const o=this.options[t];this.options[t]=function(){null!=e&&e.before&&e.before(),void 0!==o&&o(),null!=e&&e.after&&e.after()}}hook(t){null!=t&&t.stylesheet&&function(t,e){const o=document.createElement("style");o.id=t,o.innerHTML=e,$(o).appendTo("head"),o}(`swathe-css-${this.id.replaceAll("_","-")}`,t.stylesheet)}postInit(){Object.values(Toolbars).forEach(t=>{t.postload&&t.update()})}unhook(){var t;null!==(t=this.styleElement)&&void 0!==t&&t.remove(),d(this,n).forEach(e)}createAction(t,e){d(this,n).push(new Action(t,e))}constructor(t,e,o){if(n.set(this,{writable:!0,value:[]}),/[^a-z0-9_]/.test(t))throw new Error("Invalid plugin id! It must be alphanumeric and lowercase.");this.id=t,e.about=(e.about?e.about+"<br/>":"")+"This plugin is part of the <a href='https://github.com/Unoqwy/swathe'>Swathe</a> plugin collection.",this.options=e,null!=o&&o.storage&&(this.storage=i.load("swathe_"+t))}}("mouseless",{icon:"keyboard",title:"Mouseless",author:"Unoqwy",description:"Vi-like keybindings in Blockbench",variant:"desktop",onload:()=>{r.vimode=v.storage.get("vi-mode"),Blockbench.on("press_key",m),v.createAction("toggle_vi_mode",{name:"Toggle vi mode",icon:"star",category:"mouseless",click:()=>{var t=r.vimode=!r.vimode;v.storage.set("vi-mode",t||void 0),f()}}),$(document).on("keydown.mouseless",t=>{h!==t.originalEvent?x.clearInputStack():x.handleKeyEvent(t.originalEvent),h=void 0});const t=document.createElement("div");t.id="mouseless-line";var e=document.createElement("span");t.appendChild(e);const o=document.createElement("span");o.id="mlv-input",t.appendChild(o),$("#status_bar").prepend(t),p={root:t,state:e,input:o},f()},onunload:()=>{Blockbench.removeListener("press_key",m),$(document).off(".mouseless"),$(p.root).remove()}},{storage:!0});function f(){void 0!==p&&(p.state.innerHTML="Vi-mode: "+(r.vimode?"on":"off"))}function m(t){const{event:e,input_in_focus:o,capture:i}=t;return!(!(e instanceof KeyboardEvent&&r.vimode)||o)&&(e.ctrlKey&&e.shiftKey&&"I"===e.key?currentwindow.toggleDevTools():void 0!==open_menu&&(h=e),i())}v.register(!0,{stylesheet:"#mouseless-line{position:absolute;bottom:26px}#mouseless-line #mlv-input{padding-left:3px}"}),(l=c=c||{})[l.None=0]="None",l[l.Operator=1]="Operator",l[l.OperatorOptions=2]="OperatorOptions",l[l.MotionCount=3]="MotionCount",l[l.Motion=4]="Motion",l[l.Keybinding=5]="Keybinding";class g{reset(){this.at=c.None,this.stack=void 0,this.trail=void 0,delete this.op.operator,delete this.op.motionCount}appendToTrail(t){void 0===this.trail?this.trail=t:this.trail+=t,void 0===this.stack?this.stack=t:this.stack+=t}constructor(){this.op={},this.reset()}}class b{}const y=["Tab","Space"];var k=new WeakMap;const w=new Proxy({},{get:(t,e)=>function(){BarItems[e].click()}});function E(t,e){var o,i;0!==selected.length&&(o=t,i={elements:selected},t=function(){return!1!==e(selected)&&void updateSelection()},Undo.initEdit(i),!1!==t()?Undo.finishEdit(o):Undo.cancelEdit())}const T=["x","y","z"];function I(t){return T.indexOf(t)}const x=new class{handleKeyEvent(e){var t,o,i,n,{key:s}=e;if("Shift"!==s&&"Control"!==s&&"Alt"!==s&&"Meta"!==s){if("Escape"===s||(n={ctrl:!0},(t=e).ctrlKey===(null!==(o=n.ctrl)&&void 0!==o&&o)&&t.shiftKey===(null!==(i=n.shift)&&void 0!==i&&i)&&t.altKey===(null!==(i=n.alt)&&void 0!==i&&i)&&t.metaKey===(null!==(n=n.meta)&&void 0!==n&&n)&&"["==s))return this.clearInputStack();const a=d(this,k);if(a.at===c.MotionCount&&/^[+-.0-9]$/.test(s)){if(void 0!==a.trail&&("+"===s||"-"===s)||"."===s&&void 0!==a.trail&&-1!==a.trail.indexOf("."))return this.clearInputStack();"."!==s||void 0!==a.trail&&"-"!==a.trail?this.appendToTrail(s):this.appendToTrail("0.")}else{if("<"===s||">"===s||!/^[\x22-\x7F]$/.test(s)&&!y.includes(s))return this.clearInputStack();{a.at===c.MotionCount&&(n=parseFloat(a.trail),isNaN(n)||(a.op.motionCount=n),a.trail=void 0,a.at=c.Motion);let t=y.includes(s)?`<${s}>`:s;if(e.ctrlKey&&(t="<C-"+t+">"),this.appendToTrail(t),a.at===c.None||a.at===c.Operator){var r=this.checkAndReserveInputKind(this.operators,c.Operator);r instanceof b&&(a.op.operator=r,a.at=c.MotionCount)}else if(a.at===c.Motion)return"s"===s||"n"===s?void 0:("x"===s||"y"===s||"z"===s?a.op.operator.exec(null!==(r=a.op.motionCount)&&void 0!==r?r:1,a.trail):"a"===s&&["x","y","z"].forEach(t=>{var e;a.op.operator.exec(null!==(e=a.op.motionCount)&&void 0!==e?e:1,a.trail.slice(0,-1)+t)}),this.clearInputStack());if(a.at===c.None||a.at===c.Keybinding){const l=this.checkAndReserveInputKind(this.keybindings,c.Keybinding);if(!0!==l)return!1!==l&&l(),this.clearInputStack()}}}}}checkAndReserveInputKind(t,e){const o=d(this,k);var i=t[o.trail];if(void 0!==i)return o.trail=void 0,i;t=0!=Object.keys(t).filter(t=>t.startsWith(o.trail)).length;return t&&o.at!==e&&(o.at=e),t}appendToTrail(t){d(this,k).appendToTrail(t),p.input.innerHTML="· "+d(this,k).stack}clearInputStack(){d(this,k).reset(),p.input.innerHTML=""}source(t,e){const s=this;var o={map:function o(i,n){Object.entries(i).forEach(([t,e])=>{void 0!==n&&(t=n+t),"function"==typeof e?s.keybindings[t]=e:"string"==typeof e&&o(i,void 0!==n?n+t:t)})},action:w};e.bind(o)()}constructor(){k.set(this,{writable:!0,value:new g}),this.operators={},this.keybindings={}}};function K(t,o){x.operators[t]=new class extends b{exec(t,e){o(t,e)}}}K("m",(t,e)=>{E("Move",()=>function(t,e){moveElementsInSpace(t,e)}(t,I(e)))}),K("r",(e,t)=>{E("Rotate",()=>rotateOnAxis(t=>t+e,I(t)))}),K("s",(e,t)=>{const o=2===t.length?t[0]:void 0,i=t.slice(-1);E("Resize",t=>{t.forEach(t=>{t.resizable&&(void 0!==o&&"n"!==o||t.resize(t=>t+e,I(i),!1,!1),void 0!==o&&"s"!==o||t.resize(t=>t+-e,I(i),!0,!1))})})}),x.source("std",u),x.source("defaults",a)}();