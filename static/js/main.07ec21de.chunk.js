(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s(8),i=s.n(a),l=s(6),r=s(2),o=s(3),d=s(5),h=s(4),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleDelete=function(){e.props.handleDelete(e.props.index)},e.handleClick=function(){e.props.handleClick(e.props.index)},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:["item",this.props.checked?"checked":"unchecked"].join(" "),children:[Object(n.jsx)("input",{type:"checkbox",className:"input",onClick:this.handleClick,checked:this.props.checked,readOnly:!0}),Object(n.jsx)("div",{onClick:this.handleClick,className:"task",children:this.props.item}),Object(n.jsx)("div",{onClick:this.handleDelete,className:"deleteBtn",children:Object(n.jsx)("svg",{className:"icon",children:Object(n.jsx)("use",{xlinkHref:"#icon-shanchu"})})})]})}}]),s}(c.Component),p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"border",children:[Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("h2",{children:this.props.title}),Object(n.jsx)("div",{className:"number",children:this.props.taskList.length})]}),Object(n.jsx)("div",{children:this.props.taskList.map((function(t,s){return Object(n.jsx)(u,{item:t,index:s,checked:e.props.checked,handleDelete:e.props.handleDelete,handleClick:e.props.handleClick},s)}))})]})}}]),s}(c.Component),j=(s(14),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;Object(r.a)(this,s),(n=t.call(this,e)).keyDown=function(e){13===e.keyCode&&n.addTask()},n.handleInput=function(e){n.setState((function(){return{inputValue:e.target.value}}))},n.addTask=function(){""!==n.state.inputValue&&n.setState((function(e){return{taskList:[].concat(Object(l.a)(e.taskList),[n.state.inputValue]),inputValue:""}}))},n.handleClick=function(e){var t=n.handleDelete(e);n.setState((function(e){return{completedList:[].concat(Object(l.a)(e.completedList),[t])}}))},n.handleItemClick=function(e){var t=n.handleItemDelete(e);n.setState((function(e){return{taskList:[].concat(Object(l.a)(e.taskList),[t])}}))},n.handleDelete=function(e){return n.setState((function(t){var s=Object(l.a)(t.taskList);return s.splice(e,1),{taskList:s}})),n.state.taskList[e]},n.handleItemDelete=function(e){return n.setState((function(t){var s=Object(l.a)(t.completedList);return s.splice(e,1),{completedList:s}})),n.state.completedList[e]},n.listener=function(e){localStorage.setItem("taskList",JSON.stringify(n.state.taskList)),localStorage.setItem("completedList",JSON.stringify(n.state.completedList))};var c=localStorage.getItem("taskList"),a=localStorage.getItem("completedList");return n.state={inputValue:"",taskList:c?JSON.parse(c):[],completedList:a?JSON.parse(a):[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.listener)}},{key:"render",value:function(){return Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"nav",children:"ToDoList"}),Object(n.jsx)("input",{className:"input",placeholder:"\u6dfb\u52a0todo",value:this.state.inputValue,onChange:this.handleInput,onKeyDown:this.keyDown}),Object(n.jsx)("button",{className:"button",onClick:this.addTask,children:"\u6dfb\u52a0"})]})}),Object(n.jsxs)("div",{className:"context",children:[Object(n.jsxs)("div",{className:"taskList",children:[Object(n.jsx)(p,{title:"\u6b63\u5728\u8fdb\u884c",taskList:this.state.taskList,handleDelete:this.handleDelete,handleClick:this.handleClick,checked:""}),Object(n.jsx)(p,{title:"\u5df2\u7ecf\u5b8c\u6210",taskList:this.state.completedList,handleDelete:this.handleItemDelete,handleClick:this.handleItemClick,checked:"checked"})]}),Object(n.jsxs)("div",{className:"copyright",children:["Created by WXC",Object(n.jsx)("br",{}),"Copyright \xa9 2021"]})]})]})}}]),s}(c.Component));i.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.07ec21de.chunk.js.map