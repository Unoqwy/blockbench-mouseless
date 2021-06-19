!function(){function c(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t).value}class o{get(t){return c(this,i)[t]}set(t,e){void 0===e?this.remove(t):c(this,i)[t]!==e&&(c(this,i)[t]=e,this.persist())}remove(t){delete c(this,i)[t]&&this.persist()}persist(){localStorage.setItem(this.name,JSON.stringify(c(this,i)))}static load(t){var e=localStorage.getItem(t);return new o(t,void 0!==e?JSON.parse(e):{})}constructor(t,e){i.set(this,{writable:!0,value:void 0}),this.name=t,function(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");if(!(t=e.get(t)).writable)throw new TypeError("attempted to set read only private field");t.value=i}(this,i,null!=e?e:{})}}var i=new WeakMap;function s(t,e){return-1!==(e=e,-1!=(e=(t=t).indexOf(e))&&t.splice(e,1),e)}function e(e){delete BarItems[e.id];for(const n of e.toolbars){let t=0;for(;t<n.children.length;){var i=n.children[t];i===e||i.id===e?(n.children.splice(t,1),!s(i.toolbars,n)||void 0!==(i=parseInt(Object.entries(n.positionLookup).find(([,t])=>t===e)[0]))&&(void 0===n.postload&&(n.postload=[]),n.postload.push([e.id,i]))):t++}n.update()}var t,o;s(Keybinds.actions,e)&&(t=e.category,s(o=Keybinds.structure[t].actions,e),0==o.length&&delete Keybinds.structure[t]),Object.keys(e).forEach(t=>delete e[t]),e.id="DISABLED"}var n,u,t,r=new WeakMap;(n=n||{}).vimode=!1;let a;const l=new class{register(t=!0,e){for(const i of["oninstall","onuninstall","onload","onunload"])void 0!==this.options[i]&&(this.options[i]=this.options[i].bind(this));t&&(this.registerEvent("onload",{before:()=>this.hook(e),after:this.postInit.bind(this)}),this.registerEvent("onunload",{after:this.unhook.bind(this)})),BBPlugin.register(this.id,this.options)}registerEvent(t,e){const i=this.options[t];this.options[t]=function(){null!=e&&e.before&&e.before(),void 0!==i&&i(),null!=e&&e.after&&e.after()}}hook(t){null!=t&&t.stylesheet&&function(t,e){const i=document.createElement("style");i.id=t,i.innerHTML=e,$(i).appendTo("head"),i}(`swathe-css-${this.id.replaceAll("_","-")}`,t.stylesheet)}postInit(){Object.values(Toolbars).forEach(t=>{t.postload&&t.update()})}unhook(){var t;null!==(t=this.styleElement)&&void 0!==t&&t.remove(),c(this,r).forEach(e)}createAction(t,e){c(this,r).push(new Action(t,e))}constructor(t,e,i){if(r.set(this,{writable:!0,value:[]}),/[^a-z0-9_]/.test(t))throw new Error("Invalid plugin id! It must be alphanumeric and lowercase.");this.id=t,e.about=(e.about?e.about+"<br/>":"")+"This plugin is part of the <a href='https://github.com/Unoqwy/swathe'>Swathe</a> plugin collection.",this.options=e,null!=i&&i.storage&&(this.storage=o.load("swathe_"+t))}}("mouseless",{icon:"keyboard",title:"Mouseless",author:"Unoqwy",description:"Vi-like keybindings in Blockbench",variant:"desktop",onload:()=>{n.vimode=l.storage.get("vi-mode"),Keybinds.capture.push(d),l.createAction("toggle_vi_mode",{name:"Toggle vi mode",icon:"star",category:"mouseless",click:()=>{var t=n.vimode=!n.vimode;l.storage.set("vi-mode",t||void 0),console.log("Toggled vi mode",t?"on":"off")}}),$(document).on("keydown.mouseless",t=>{a!==t.originalEvent?y.clearInputStack():y.handleKeyEvent(t.originalEvent),a=void 0})},onunload:()=>{s(Keybinds.capture,d),$(document).off(".mouseless")}},{storage:!0});function d(t){if(!(t.originalEvent instanceof KeyboardEvent&&n.vimode))return!1;t=t.originalEvent;return t.ctrlKey&&t.shiftKey&&"I"===t.key?currentwindow.toggleDevTools():void 0!==open_menu&&(a=t),!0}l.register(),(t=u=u||{})[t.None=0]="None",t[t.Operator=1]="Operator",t[t.OperatorOptions=2]="OperatorOptions",t[t.MotionCount=3]="MotionCount",t[t.Motion=4]="Motion",t[t.Keybinding=5]="Keybinding";class h{reset(){this.at=u.None,this.trail=void 0,delete this.op.operator,delete this.op.motionCount}appendToTrail(t){void 0===this.trail?this.trail=t:this.trail+=t}constructor(){this.op={},this.reset()}}class p{}const v=["Tab","Space"];var g=new WeakMap;function f(t,e){var i,o;0!==selected.length&&(i=t,o={elements:selected},t=function(){return!1!==e(selected)&&void updateSelection()},Undo.initEdit(o),!1!==t()?Undo.finishEdit(i):Undo.cancelEdit())}const b=["x","y","z"];const y=new class{handleKeyEvent(e){var t,i,o,n,s,{key:r}=e;if("Shift"!==r&&"Control"!==r&&"Alt"!==r&&"Meta"!==r){if("Escape"===r||(i={ctrl:!0},(t=e).ctrlKey===(null!==(o=i.ctrl)&&void 0!==o&&o)&&t.shiftKey===(null!==(n=i.shift)&&void 0!==n&&n)&&t.altKey===(null!==(n=i.alt)&&void 0!==n&&n)&&t.metaKey===(null!==(i=i.meta)&&void 0!==i&&i)&&"["==r))return this.clearInputStack();const l=c(this,g);if(l.at===u.MotionCount&&/^[+-.0-9]$/.test(r)){if(void 0!==l.trail&&("+"===r||"-"===r)||"."===r&&-1!==(null===(s=l.trail)||void 0===s?void 0:s.indexOf(".")))return this.clearInputStack();l.appendToTrail(r)}else{if("<"===r||">"===r||!/^[\x22-\x7F]$/.test(r)&&!v.includes(r))return this.clearInputStack();{l.at===u.MotionCount&&(s=parseFloat(l.trail),isNaN(s)||(l.op.motionCount=s),l.trail=void 0,l.at=u.Motion);let t=v.includes(r)?`<${r}>`:r;if(e.ctrlKey&&(t="<C-"+t+">"),l.appendToTrail(t),l.at===u.None||l.at===u.Operator){var a=this.checkAndReserveInputKind(this.operators,u.Operator);a instanceof p&&(l.op.operator=a,l.at=u.MotionCount)}else if(l.at===u.Motion)return"x"!==r&&"y"!==r&&"z"!==r||l.op.operator.exec(null!==(a=l.op.motionCount)&&void 0!==a?a:1,r),this.clearInputStack();if(l.at===u.None||l.at===u.Keybinding){const d=this.checkAndReserveInputKind(this.keybindings,u.Keybinding);if(!0!==d)return!1!==d&&d(),this.clearInputStack()}}}}}checkAndReserveInputKind(t,e){const i=c(this,g);var o=t[i.trail];if(void 0!==o)return i.trail=void 0,o;t=0!=Object.keys(t).filter(t=>t.startsWith(i.trail)).length;return t&&i.at!==e&&(i.at=e),t}clearInputStack(){c(this,g).reset()}constructor(){g.set(this,{writable:!0,value:new h}),this.operators={},this.keybindings={}}};function m(t,i){y.operators[t]=new class extends p{exec(t,e){i(t,e)}}}m("m",(t,e)=>{f("Move",()=>function(t,e){moveElementsInSpace(t,b.indexOf(e))}(t,e))}),m("r",(e,t)=>{f("Rotate",()=>rotateOnAxis(t=>t+e,b.indexOf(t)))}),y.keybindings.u=()=>Undo.undo(),y.keybindings["<C-r>"]=()=>Undo.redo(),y.keybindings.dd=()=>BarItems.delete.click(),y.keybindings["<C-n>"]=()=>BarItems.add_cube.click(),y.keybindings["<C-d>"]=()=>BarItems.duplicate.click(),y.keybindings["<Tab>"]=()=>BarItems.toggle_quad_view.click(),y.keybindings["<C-h>"]=()=>BarItems.toggle_left_sidebar.click(),y.keybindings["<C-l>"]=()=>BarItems.toggle_right_sidebar.click(),y.keybindings.RL=()=>BarItems.reload_plugins.click()}();