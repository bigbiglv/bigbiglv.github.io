import{i as w,k as x,c as b,e as r,F as k,o as D}from"./index.52853219.js";const B=r("select",{name:"mode",id:"mode"},[r("option",{value:"point"},"\u6807\u8BB0\u5173\u952E\u70B9"),r("option",{value:"rect"},"\u7ED8\u5236\u77E9\u5F62\u6846")],-1),C={setup(P){const n=w(null);return x(()=>{const t=n.value.getContext("2d"),l=[],u=[];let d=!1,c="point",a=null;function v(e,i,s){this.x=e,this.y=i,this.type=s}function h(e,i,s){var o=n.value.getBoundingClientRect();return new v(e-o.left*(n.value.width/o.width),i-o.top*(n.value.height/o.height),s)}function g(e){t.save(),t.fillStyle=e.type===3?"red":"green",t.beginPath(),t.arc(e.x,e.y,3,0,Math.PI*2,!0),t.fill(),t.font="20px serif",t.fillText(l.length.toString(),e.x-5,e.y-10),t.restore(),l.push(e)}function m(e){let i=Math.abs(e.x-a.x),s=Math.abs(e.y-a.y),o=e.x>a.x?a.x:e.x,p=e.y>a.y?a.y:e.y;t.save(),t.beginPath(),t.rect(o,p,i,s),t.stroke(),t.restore()}function y(){t.putImageData(u[u.length-1].data,0,0)}function f(e){u.push({mode:c,data:t.getImageData(0,0,n.value.width,n.value.height)})}document.getElementById("mode").onchange=function(e){c=e.target.value},n.value.onmousedown=function(e){e.preventDefault(),a=h(e.clientX,e.clientY,e.which),d=!0},n.value.onmousemove=function(e){e.preventDefault(),d&&c==="rect"&&(y(),m(h(e.clientX,e.clientY,e.which)))},f(),n.value.onmouseup=function(e){e.preventDefault(),d=!1,c==="point"&&g(a),f()},n.value.oncontextmenu=function(e){e.preventDefault()}}),(t,l)=>(D(),b(k,null,[r("canvas",{width:"640",height:"480",style:{"background-color":"antiquewhite"},ref_key:"canvas",ref:n},null,512),B,r("button",{id:"undo",onClick:l[0]||(l[0]=(...u)=>t.undo&&t.undo(...u))},"\u64A4\u9500")],64))}};export{C as default};
