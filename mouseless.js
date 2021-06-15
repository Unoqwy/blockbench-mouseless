function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==="function"){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function removeFromArray(elt,array){const eltIndex=array.indexOf(elt);if(eltIndex!=-1){array.splice(eltIndex,1);return true;}return false;}function removeAction(action){if(removeFromArray(action,Keybinds.actions)){const category=action.category;const structCategoryActions=Keybinds.structure[category].actions;removeFromArray(action,structCategoryActions);if(structCategoryActions.length==0)delete Keybinds.structure[category];}}var InjectionStore;(function(InjectionStore1){const actions=[];function registerAction(action){actions.push(action);}InjectionStore1.registerAction=registerAction;function unhook(){actions.forEach(removeAction);}InjectionStore1.unhook=unhook;})(InjectionStore||(InjectionStore={}));function sidebarAction(id,sides,changeState,opts){InjectionStore.registerAction(new Action(id,_objectSpread({},opts,{category:"view",click:()=>{sides.map(side=>`show_${side}_bar`).forEach(side=>{Prop[side]=changeState=="toggle"?!Prop[side]:changeState;});resizeWindow();}})));}Plugin.register("mouseless",{icon:"keyboard",title:"Blockbench Mouseless",author:"Unoqwy",description:"Add shortcuts to Blockbench to fully take advantage of the keyboard",variant:"both",onload:()=>{sidebarAction("toggle_left_sidebar",["left"],"toggle",{name:"Toggle Left Sidebar",icon:"chevron-left"});sidebarAction("toggle_right_sidebar",["right"],"toggle",{name:"Toggle Right Sidebar",icon:"chevron-right"});sidebarAction("hide_sidebars",["left","right"],false,{name:"Hide both sidebars",icon:"expand-arrows"});sidebarAction("show_sidebars",["left","right"],true,{name:"Show both sidebars",icon:"compress-arrows"});},onunload:()=>{InjectionStore.unhook();}});