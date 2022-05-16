import{c as H,t as d,v as o,a as f,x as h,y as N,z as W,A as F,d as A,u as D,e as P,B as I,f as z,g as K,h as q,i as x,j as G,k as J,w as Q,l as U,o as X,s as e}from"./index.7a98386c.js";var Y={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};const Z=t=>{const{dividerColor:r,cardColor:l,modalColor:a,popoverColor:i,tableHeaderColor:c,tableColorStriped:s,textColor1:n,textColor2:b,borderRadius:g,fontWeightStrong:p,lineHeight:v,fontSizeSmall:u,fontSizeMedium:m,fontSizeLarge:C}=t;return Object.assign(Object.assign({},Y),{fontSizeSmall:u,fontSizeMedium:m,fontSizeLarge:C,lineHeight:v,borderRadius:g,borderColor:d(l,r),borderColorModal:d(a,r),borderColorPopover:d(i,r),tdColor:l,tdColorModal:a,tdColorPopover:i,tdColorStriped:d(l,s),tdColorStripedModal:d(a,s),tdColorStripedPopover:d(i,s),thColor:d(l,c),thColorModal:d(a,c),thColorPopover:d(i,c),thTextColor:n,tdTextColor:b,thFontWeight:p})},oo={name:"Table",common:H,self:Z};var ro=oo,eo=o([f("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),h("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),h("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),h("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),h("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),N("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),W(f("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),F(f("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]);const to=Object.assign(Object.assign({},P.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}});var lo=A({name:"Table",props:to,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedRtlRef:a}=D(t),i=P("Table","-table",eo,ro,t,r),c=I("Table",a,r),s=z(()=>{const{size:b}=t,{self:{borderColor:g,tdColor:p,tdColorModal:v,tdColorPopover:u,thColor:m,thColorModal:C,thColorPopover:S,thTextColor:k,tdTextColor:M,borderRadius:_,thFontWeight:B,lineHeight:R,borderColorModal:T,borderColorPopover:y,tdColorStriped:w,tdColorStripedModal:$,tdColorStripedPopover:L,[x("fontSize",b)]:V,[x("tdPadding",b)]:j,[x("thPadding",b)]:E},common:{cubicBezierEaseInOut:O}}=i.value;return{"--n-bezier":O,"--n-td-color":p,"--n-td-color-modal":v,"--n-td-color-popover":u,"--n-td-text-color":M,"--n-border-color":g,"--n-border-color-modal":T,"--n-border-color-popover":y,"--n-border-radius":_,"--n-font-size":V,"--n-th-color":m,"--n-th-color-modal":C,"--n-th-color-popover":S,"--n-th-font-weight":B,"--n-th-text-color":k,"--n-line-height":R,"--n-td-padding":j,"--n-th-padding":E,"--n-td-color-striped":w,"--n-td-color-striped-modal":$,"--n-td-color-striped-popover":L}}),n=l?K("table",z(()=>t.size[0]),s,t):void 0;return{rtlEnabled:c,mergedClsPrefix:r,cssVars:l?void 0:s,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var t;const{mergedClsPrefix:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),q("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});const no={class:"table"},ao=e("thead",null,[e("tr",null,[e("th",null,"\u9879\u76EE1"),e("th",null,"\u9879\u76EE2"),e("th",null,"\u9879\u76EE3"),e("th",null,"\u9879\u76EE4"),e("th",null,"\u9879\u76EE5")])],-1),io=e("tbody",null,[e("tr",null,[e("td",null,"test"),e("td",null,"test"),e("td",null,"test"),e("td",null,"test"),e("td",null,"test")])],-1),co={setup(t){return(r,l)=>(X(),G("div",no,[J(U(lo),{bordered:!1,"single-line":!1},{default:Q(()=>[ao,io]),_:1})]))}};export{co as default};
