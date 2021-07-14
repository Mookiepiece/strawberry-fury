var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&s(e,n,t[n]);return e},c=(e,r)=>t(e,n(r)),i=(e,t)=>{var n={};for(var s in e)a.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&o.call(e,s)&&(n[s]=e[s]);return n};import{R as m,D as u,T as p,c as d,u as h,a as E,b as f,C as S,M as g,h as b,P as v,d as x,S as y,e as C,f as _,L as w,g as N,i as k,j as O,k as I,l as R,m as T,B as P,n as D}from"./vendor.335fc97d.js";const A={IndexPageDesc:{en:"vanilla react.js components.",zh:"自然的react.js组件库"},IndexPageGetStarted:{en:"GET STARTED",zh:"开始使用"},NavbarHome:{en:"Home",zh:"家"},NavbarSfComponents:{en:"Strawberry Fury",zh:"Strawberry Fury"},NavbarStComponents:{en:"Starfall",zh:"Starfall"},SidebarSfComponentButton:{en:"Button 按钮",zh:"Button 按钮"},SidebarSfComponentDialog:{en:"Dialog 对话框",zh:"Dialog 对话框"},SidebarSfComponentFarm:{en:"Farm 农场",zh:"Farm 农场"},SidebarStComponentButton:{en:"Button 按钮",zh:"Button 按钮"},SidebarStComponentDialog:{en:"Dialog 对话框",zh:"Dialog 对话框"},SidebarStComponentModal:{en:"Modal 模态框",zh:"Modal 模态框"},SidebarStComponentCollapse:{en:"Collapse 折叠面板",zh:"Collapse 折叠面板"},SidebarStComponentForm:{en:"Form 表单",zh:"Form 表单"},SidebarStComponentLink:{en:"Link 链接",zh:"Link 链接"},SidebarStComponentNotification:{en:"Notification 通知提示",zh:"Notification 通知提示"},SidebarStComponentSpin:{en:"Spin 加载符",zh:"Spin 加载符"},SidebarStComponentScroll:{en:"Scroll 滚动",zh:"Scroll 滚动"},SidebarStComponentSlider:{en:"Slider 滑块",zh:"Slider 滑块"},SidebarStDesignColor:{en:"Color 色彩",zh:"Color 色彩"},SidebarStDesignLayout:{en:"Layout 布局",zh:"Layout 布局"}},L=new Map,j=e=>{if(L.has(e))return L.get(e);const t=Object.keys(A).reduce(((t,n)=>c(l({},t),{[n]:A[n][e]})),{});return L.set(e,t),t},M=m.createContext(j("zh")),z=m.createContext(["zh",()=>[]]);let F;const V={},B=function(e,t){if(!t)return e();if(void 0===F){const e=document.createElement("link").relList;F=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in V)return;V[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":F,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};var G="/strawberry-fury/assets/strawberry-fury-LOGO.2baf3fcf.png";const H=m.createContext({names:[],activeNames:[],register:()=>"",unregister(){},toggle(){}}),$=({children:e})=>{const[t,n]=u.exports.useState([]),[r,a]=u.exports.useState([]),o=u.exports.useRef(0),s=h((()=>{let e;do{e=(o.current++).toString()}while(t.includes(e));return n((t=>[...t,e])),e})),l=u.exports.useCallback((e=>{n((t=>{const n=t.findIndex((t=>t===e));return-1===n&&console.error(`[SF Collapse] invalid name: ${e}`),[...t.slice(0,n),...t.slice(n+1)]})),a((t=>{const n=t.findIndex((t=>t===e));return[...t.slice(0,n),...t.slice(n+1)]}))}),[]),c=u.exports.useCallback((e=>{a((t=>{const n=t.findIndex((t=>t===e));return-1===n?[...t,e]:[...t.slice(0,n),...t.slice(n+1)]}))}),[]),i=u.exports.useMemo((()=>({register:s,unregister:l,names:t,activeNames:r,toggle:c})),[s,l,t,r,c]);return m.createElement("div",null,m.createElement(H.Provider,{value:i},e))};$.Panel=e=>{var t=e,{children:n,active:r,className:a,style:o}=t,s=i(t,["children","active","className","style"]);const c=u.exports.useRef(null),h=u.exports.useCallback((()=>{var e;c.current&&(c.current.style.height=`${c.current.scrollHeight}px`,null==(e=c.current)||e.scrollHeight)}),[]);return m.createElement(p,{in:r,timeout:300,onExit:h},(e=>{var t;return m.createElement("div",l({className:d("sf-collapse-panel",a),ref:c,style:l(l({},{entering:{height:null==(t=c.current)?void 0:t.scrollHeight,transition:"all 0.3s"},entered:{height:void 0},exiting:{height:0,transition:"all 0.3s"},exited:{height:0},unmounted:{height:void 0}}[e]),o)},s),n)}))},$.Item=({children:e})=>{const{register:t,unregister:n,activeNames:r,toggle:a}=u.exports.useContext(H),[o,s]=u.exports.useState("");E((()=>s(t()))),f((()=>n(o)));const i=u.exports.useMemo((()=>({toggle:()=>a(o),active:r.includes(o),name:o})),[r,o,a]),p=e[0],d=e[1];return m.createElement(m.Fragment,null,m.cloneElement(p,c(l({},p.props),{active:i.active})),m.cloneElement(d,c(l({},d.props),{active:i.active})))},$.Summary=({children:e,active:t})=>(m.Children.only(e),m.cloneElement(e,{className:d(e.props.className,t?"active":""),onClick:()=>{var t,n;null==(n=(t=e.props).onClick)||n.call(t)}}));const U=(e,t)=>{const[n,r]=u.exports.useState(!1),a=u.exports.useRef(void 0);return u.exports.useEffect((()=>{t?e?a.current=setTimeout((()=>{r(!0)}),t):(void 0!==a.current&&clearTimeout(a.current),r(!1)):r(e)}),[e,t]),n},W=({loading:e,weight:t=2,lazy:n})=>{const r=U(e,n);return m.createElement(S,{in:!0===r||void 0===r,timeout:void 0===r?0:300,classNames:"st-spin",unmountOnExit:!0},m.createElement("div",{className:"st-spin",style:{"--st-spin-border":t+"px"}}))};W.Container=({children:e,loading:t,weight:n,lazy:r})=>{const a=U(t,r);return m.createElement("div",{className:d("st-spin-container",a&&"st-spin-container--loading")},m.createElement("div",{className:"st-spin-container__inner"},e),m.createElement("div",{className:"st-spin-container__overlay"},m.createElement(W,l({},{loading:a,weight:n}))))};const q=e=>{var t=e,{type:n="button",primary:r,textual:a,block:o,solid:s,loading:c=!1,disabled:u,children:p,className:h}=t,E=i(t,["type","primary","textual","block","solid","loading","disabled","children","className"]);return m.createElement("button",l({type:n,className:d(h,"st-button",r?"st-button--primary":a?"st-button--textual":"st-button--default",o&&"st-button--block",c&&"st-button--loading",s&&"st-button--solid"),disabled:u||c},E),m.createElement(W,{weight:1,loading:c}),m.createElement("span",{className:"st-button__content"},p))},J=e=>{const t=e,{children:n,type:r,href:a,className:o,active:s}=t,c=i(t,["children","type","href","className","active"]);return m.createElement("a",l({className:d(o,"st-link","button"===r?"st-link--button":"st-link--default",s&&"st-link--active"),tabIndex:0,href:a},c),m.createElement("span",null,n))};let K=[];const Q=g();Q.on("REGISTER",(e=>Z.registry=K=[...K,e])),Q.on("UNREGISTER",(e=>Z.registry=K=b.remove(K,(t=>t===e))));let X=1;const Y=()=>{},Z=e=>{const t=e,{visible:n,title:r,onClose:a,noHeader:o,closable:s=!0,maskClosable:c=!0,width:p,maxWidth:E,style:f,children:g,mountOnEnter:b,unmountOnExit:x,onVisibilityChange:y}=t,C=i(t,["visible","title","onClose","noHeader","closable","maskClosable","width","maxWidth","style","children","mountOnEnter","unmountOnExit","onVisibilityChange"]),[_]=u.exports.useState((()=>X++));u.exports.useEffect((()=>{n?(console.log("I am res",_),Q.emit("REGISTER",_)):Q.emit("UNREGISTER",_)}),[_,n]);const w=h(a||Y);return u.exports.useEffect((()=>{const e=e=>{e==_&&w()};return Q.on("REMOTE_CLOSE",e),()=>Q.off("REMOTE_CLOSE",e)}),[w,_]),m.createElement(v,null,m.createElement(S,{timeout:300,in:n,classNames:"st-modal-wrap",mountOnEnter:b,unmountOnExit:x,onEnter:y&&(()=>y(!0)),onExit:y&&(()=>y(!1))},m.createElement("div",l({className:d("st-modal-wrap",!n&&"st-not-interactive"),"aria-hidden":!n,style:l({width:p,maxWidth:E},f)},C),m.createElement("div",{className:"st-modal__mask",onClick:c&&n?a:void 0}),m.createElement("div",{className:"st-modal"},m.createElement("div",{className:"st-modal__header"},m.createElement("div",{className:"st-modal__title"},r),s?m.createElement(q,{textual:!0,className:"st-modal__close",onClick:n?a:void 0},"×"):null),m.createElement("div",{className:"st-modal__body"},g)))))};Z.Mitt=Q,Z.registry=K;const ee=(e,t)=>{const n=({children:e,reverse:n,className:r,justify:a,align:o,content:s,wrap:c,wrapReverse:i,grow:u,shrink:p,basis:h,flex:E,order:f,style:S})=>{const g=d(n?`${r}-reverse`:r,t,a&&`justify-${a}`,o&&`align-${o}`,c&&"flex-wrap",i&&"wrap-reverse",s&&`align-content-${s}`);return m.createElement("div",{className:g,style:l({flex:E,flexBasis:h,flexGrow:u,flexShrink:p,order:f},S)},e)};return n.displayName=e,n},te=Object.assign(ee("Row","row"),{Col:ee("Col","col")});var ne=te.Col;const re=m.createContext({register(){},unregister(){},formMitt:{on(){},off(){},emit(){}}});function ae(e,t,n){const r=l({},e);let a=r,o=0;for(;o<t.length-1;o++){const n=t[o],r=a[n];if(Array.isArray(r))a=a[n]=[...r];else{if("object"!=typeof r)throw new Error(`[ST form] cannot get prop on ${e} by [${t.join(" ")}]`);a=a[n]=l({},r)}}return a[t[o]]=n,r}const oe={};function se(e,t){return t.reduce(((e,t)=>t in e?e[t]:oe),e)}const le=(e,t)=>{if(e.action&&e.onSubmit||!e.action&&!e.onSubmit)throw new Error("[ST form] prop `action` and `onSubmit` conflicts or not be provided");const n=u.exports.useRef(e.initialValue),r=u.exports.useRef(n.current),[a]=u.exports.useState((()=>g())),o=u.exports.useRef([]);E((()=>{a.on("CHANGE",(({pathes:e,value:t})=>{r.current=ae(r.current,e,t),a.emit("UPDATE",{value:r.current,pathes:e})}))}));const s=h((e=>{o.current=[...o.current,e],e.reset(se(r.current,e.pathes))})),l=u.exports.useCallback((e=>{const t=o.current.findIndex((t=>t===e));-1!==t&&(o.current=[...o.current.slice(0,t),...o.current.slice(t+1)])}),[]),c=h((async(e=[])=>{const t=e.length?o.current.filter((({name:t})=>e.includes(t))):o.current;let n=0;const a=[],s=r.current;return new Promise(((e,r)=>{const o=o=>{o&&a.push(...o.errors),++n===t.length&&(a.length&&r(a),e(s))};t.map((e=>e.validate().then((()=>o()),o)))}))})),i=h((async(e=[])=>{(e.length?o.current.filter((({name:t})=>e.includes(t))):o.current).forEach((e=>{const t=se(n.current,e.pathes);e.reset(t),r.current=ae(r.current,e.pathes,t)}))})),p=u.exports.useCallback(((e,t)=>{o.current.filter((({name:t})=>t===e)).forEach((e=>{e.setValidateStatus(t)}))}),[]),d=u.exports.useCallback((e=>{a.emit("UPDATE",{value:r.current=e(r.current),pathes:[]})}),[a]),f=u.exports.useMemo((()=>({register:s,unregister:l,formMitt:a})),[s,l,a]);u.exports.useImperativeHandle(t,(()=>({setInitialValue(e){n.current=e},validate:c,setValidateStatus:p,set:d,get value(){return r.current},reset:i})),[c,p,d,i]);const S=u.exports.useRef(!1),b=h((async t=>{var n;if(t.preventDefault(),e.action){if(S.current)return;const[t,n]=Array.isArray(e.action)?e.action:[e.action,()=>{}];a.emit("SUBMITTING_CHANGE",S.current=!0);const l=r.current;try{await c();try{await t(l)}catch(o){}}catch(s){n(s)}finally{a.emit("SUBMITTING_CHANGE",S.current=!1)}}else null==(n=e.onSubmit)||n.call(e)}));return m.createElement("form",{onSubmit:b,onReset:e=>{e.preventDefault(),i()}},m.createElement(re.Provider,{value:f},e.children))};le.displayName="Form";const ce=Object.assign(m.forwardRef(le),{Item:({rules:e=[],label:t,name:n,children:r})=>{const{register:a,unregister:o,formMitt:s}=u.exports.useContext(re),i=x(),[p,E]=u.exports.useState({model:oe,validateStatus:{state:"",message:""}}),f=u.exports.useRef(!1),S=p.model,g=p.validateStatus,b=u.exports.useMemo((()=>n.replace(/\[(\w+)\]/g,".$1").split(".")),[n]),v=u.exports.useCallback((e=>{i()&&E("string"==typeof e?t=>""===t.validateStatus.state?t:c(l({},t),{validateStatus:{state:e,message:t.validateStatus.message}}):t=>c(l({},t),{validateStatus:e}))}),[i]),C=u.exports.useRef(0),_=u.exports.useRef(!1),w=u.exports.useCallback((()=>++C.current),[]),N=h((async t=>{const r=Array.isArray(e)?e:[e];if(!r.length)return;const a=new y({[n]:r});if("change"===t&&f.current)return void(_.current=!0);"force"===t&&(_.current=!1);const o=++C.current;try{f.current=!0,await a.validate({[n]:S},{firstFields:!0}),o===C.current&&v("")}catch(s){if(o===C.current&&(v({state:"error",message:s.errors[0].message}),"force"===t))throw s}finally{o===C.current&&(f.current=!1,!0===_.current&&(_.current=!1,N("change")))}}));u.exports.useEffect((()=>{const e=({value:e,pathes:t})=>{const n=se(e,b);t.length<=b.length&&p.model!==n&&(E((e=>c(l({},e),{model:n}))),_.current=!0)};return s.on("UPDATE",e),()=>{s.off("UPDATE",e)}}),[s,b,p.model]),u.exports.useEffect((()=>{!0===_.current&&(_.current=!1,N("change"))}));const k=u.exports.useCallback((e=>{v(""),w(),E((t=>c(l({},t),{model:e})))}),[w,v]);u.exports.useEffect((()=>{const e={name:n,pathes:b,validate:()=>N("force"),setValidateStatus:v,cancelValidate:w,reset:k};return a(e),()=>o(e)}),[a,o,n,N,w,v,b,k]);const O=u.exports.useCallback((e=>{s.emit("CHANGE",{pathes:b,value:e})}),[s,b]),I=!!(Array.isArray(e)?e:[e]).find((e=>e.required))&&"st-label-asterisk",R=g.message?m.createElement("span",{className:"st-error-message"},g.message):m.createElement("span",{className:"st-error-message"}," "),T=e=>t?m.createElement("div",{className:d("st-form-item","error"===g.state&&"st-form-item--error")},m.createElement("label",null,m.createElement("span",{className:d("st-label",I)},t),e),R):m.createElement(m.Fragment,null,e);if(S===oe)return m.createElement(m.Fragment,null);let P=null;if(m.isValidElement(r)){if("value"in r.props)throw new Error("[ST Form.Item] remove prop `value` from input inside a form item");if("onChange"in r.props)throw new Error("[ST Form.Item] remove prop `onChange` from input inside a form item");P=T(m.cloneElement(r,c(l({},r.props),{value:S,onChange:O})))}else"function"==typeof r&&(P=r({value:S,onChange:O,validate:N,withLabel:T,validateStatus:g,setValidateStatus:v,cancelValidate:w}));return m.createElement(m.Fragment,null,P)},SubmitButton:e=>{const{formMitt:t}=u.exports.useContext(re),[n,r]=u.exports.useState(!1);return u.exports.useEffect((()=>(t.on("SUBMITTING_CHANGE",r),()=>t.off("SUBMITTING_CHANGE",r))),[t]),m.createElement(q,c(l({},e),{type:"submit",loading:e.loading||n}))},useRef:()=>m.useRef(null)}),ie=({to:e,className:t,children:n})=>{const r=_({path:e});return m.createElement(w,{to:e,className:d(t,"st-link","st-link--button",r&&"st-link--active")},n)},me=m.createContext([]),ue=[],pe=m.memo((({routes:e})=>{const t=u.exports.useContext(me),n=u.exports.useMemo((()=>(e||t).map((e=>{if("component"in e){const t=e,{component:n,children:r}=t,a=i(t,["component","children"]),o=m.memo((()=>m.createElement(me.Provider,{value:r||ue},m.createElement(n))));return l({render:()=>m.createElement(o,null)},a)}return e}))),[e,t]);return n.length?m.createElement(N,null,n.map((e=>{if("redirect"in e){const{path:t,exact:n,redirect:r}=e;return m.createElement(k,{key:t,from:t,exact:n,to:r})}const{path:t,exact:n,render:r}=e;return m.createElement(O,{key:t,path:t,exact:n,render:r})}))):null}));const de=({nav:e})=>{const[t,n]=u.exports.useState(!0),r=u.exports.useContext(M);return m.createElement(m.Fragment,null,m.createElement("aside",{className:d("doc-aside",t&&"doc-aside--expanded")},Object.entries(e).map((([e,t])=>m.createElement("dl",{key:e},m.createElement("dt",null,e),m.createElement("dd",null,Object.entries(t).map((([e,t])=>m.createElement("div",{key:e},m.createElement(ie,{to:e},r[t]))))))))),m.createElement(q,{textual:!0,onClick:()=>n((e=>!e))},m.createElement("div",{style:{background:"currentColor",width:20,height:2,boxShadow:"0 5px, 0 -5px"}})))},he=({nav:e})=>m.createElement("main",{className:"doc-layout"},m.createElement("div",{className:"doc-content"},m.createElement("article",null,m.createElement(pe,null))),m.createElement(de,{nav:e})),Ee={mobile:"(min-width: 0)","tablet-":"(max-width: 767px)",tablet:"(min-width: 768px)","laptop-":"(max-width: 1119px)",laptop:"(min-width: 1200px)"};const fe=({i18nState:e,setI18nState:t})=>{const n=u.exports.useContext(M),r=I(Ee["tablet"]);return m.createElement("header",{className:"doc-nav"},m.createElement("div",null,m.createElement(ie,{className:"doc-nav-logo-link",to:"/"},m.createElement("img",{src:G,alt:"logo"}),r?m.createElement("h3",null,"Strawberry Fury"):null),m.createElement("div",null,m.createElement(q,{primary:!0,style:{width:120},onClick:t},m.createElement("sup",null,"文"),m.createElement("sub",null,"A"),m.createElement("span",null,"   ",e)))),m.createElement("div",null,m.createElement(ie,{to:"/index"},n.NavbarHome),m.createElement(ie,{to:"/sf-components"},n.NavbarSfComponents),m.createElement(ie,{to:"/st-components"},n.NavbarStComponents)))},Se=({children:e})=>{const t=R(),n=u.exports.useRef("/");return t.pathname!==n.current&&(n.current=t.pathname,window.scrollTo(0,0)),e};var ge=[{path:"/",component:()=>{const[e,t]=u.exports.useContext(z);return m.createElement(Se,null,m.createElement(fe,{i18nState:e,setI18nState:()=>t("zh"===e?"en":"zh")}),m.createElement(pe,null))},children:[{path:"/index",exact:!0,component:()=>{const e=u.exports.useContext(M),t=C();return m.createElement("div",{style:{textAlign:"center"}},m.createElement("header",null,m.createElement("img",{src:G,alt:"logo",style:{width:240,height:240,margin:24}}),m.createElement("h2",null,"Strawberry Fury"),m.createElement(J,{type:"button",href:"https://github.com/Mookiepiece/strawberry-fury",target:"_blank",rel:"noreferrer"},m.createElement("svg",{style:{width:40,fill:"var(--color-primary)"},"aria-labelledby":"simpleicons-github-dark-icon",lang:"",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),m.createElement("p",null,e.IndexPageDesc),m.createElement(q,{primary:!0,style:{marginTop:24,width:240},onClick:()=>t.push("/st-components")},e.IndexPageGetStarted)))}},{path:"/sf-components",component:()=>m.createElement(he,{nav:{Components:{"/sf-components/button":"SidebarSfComponentButton","/sf-components/dialog":"SidebarSfComponentDialog","/sf-components/farm":"SidebarSfComponentFarm"}}}),children:[{path:"/sf-components",exact:!0,component:()=>m.createElement("h1",null,"Strawberry Fury")},{path:"/sf-components/button",component:T((()=>B((()=>import("./Button.5c95eea6.js")),["/strawberry-fury/assets/Button.5c95eea6.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/Farm.b404a976.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/sf-components/dialog",component:T((()=>B((()=>import("./Dialog.37df1a91.js")),["/strawberry-fury/assets/Dialog.37df1a91.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/Farm.b404a976.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/sf-components/farm",component:T((()=>B((()=>import("./Farm.d9c1a296.js")),["/strawberry-fury/assets/Farm.d9c1a296.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/Farm.b404a976.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))}]},{path:"/st-components",component:()=>m.createElement(he,{nav:{Design:{"/st-components/color":"SidebarStDesignColor","/st-components/layout":"SidebarStDesignLayout"},Components:{"/st-components/button":"SidebarStComponentButton","/st-components/collapse":"SidebarStComponentCollapse","/st-components/form":"SidebarStComponentForm","/st-components/link":"SidebarStComponentLink","/st-components/modal":"SidebarStComponentModal","/st-components/notification":"SidebarStComponentNotification","/st-components/spin":"SidebarStComponentSpin","/st-components/scroll-view":"SidebarStComponentScroll","/st-components/slider":"SidebarStComponentSlider"}}}),children:[{path:"/st-components",exact:!0,component:()=>m.createElement("h1",null,"Starfall")},{path:"/st-components/color",component:T((()=>B((()=>import("./Color.588693d1.js")),["/strawberry-fury/assets/Color.588693d1.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/layout",component:T((()=>B((()=>import("./Layout.f486814d.js")),["/strawberry-fury/assets/Layout.f486814d.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/collapse",component:T((()=>B((()=>import("./Collapse.ec24ee7d.js")),["/strawberry-fury/assets/Collapse.ec24ee7d.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/form",component:T((()=>B((()=>import("./Form.3e95c659.js")),["/strawberry-fury/assets/Form.3e95c659.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/button",component:T((()=>B((()=>import("./Button.6e6c603d.js")),["/strawberry-fury/assets/Button.6e6c603d.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/link",component:T((()=>B((()=>import("./Link.47d6174d.js")),["/strawberry-fury/assets/Link.47d6174d.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/modal",component:T((()=>B((()=>import("./Modal.cf66e67f.js")),["/strawberry-fury/assets/Modal.cf66e67f.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/notification",component:T((()=>B((()=>import("./Notification.ca62cbe4.js")),["/strawberry-fury/assets/Notification.ca62cbe4.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/spin",component:T((()=>B((()=>import("./Spin.57dd0dc2.js")),["/strawberry-fury/assets/Spin.57dd0dc2.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/scroll-view",component:T((()=>B((()=>import("./ScrollView.2529e263.js")),["/strawberry-fury/assets/ScrollView.2529e263.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))},{path:"/st-components/slider",component:T((()=>B((()=>import("./Slider.368a6afd.js")),["/strawberry-fury/assets/Slider.368a6afd.js","/strawberry-fury/assets/vendor.335fc97d.js","/strawberry-fury/assets/PageWalker.d61cf7bd.js","/strawberry-fury/assets/PageWalker.a09d9a39.css"])))}]},{path:"/",exact:!0,redirect:"/index"}]}];const be=()=>{const[e,t]=u.exports.useState("zh"),[n,r]=u.exports.useState((()=>j("zh")));u.exports.useEffect((()=>{r(j(e))}),[e]);const a=u.exports.useMemo((()=>[e,t]),[e]);return m.createElement(M.Provider,{value:n},m.createElement(z.Provider,{value:a},m.createElement(P,null,m.createElement(pe,{routes:ge}),m.createElement(ve,null))))},ve=()=>{const e=C();return u.exports.useEffect((()=>e.block(((e,t)=>{if("POP"===t&&Z.registry.length)return Z.Mitt.emit("REMOTE_CLOSE",Z.registry.slice(-1)[0]),!1})))),null};D.render(m.createElement(be,null),document.getElementById("app"));export{q as B,$ as C,ce as F,J as L,Z as M,te as R,W as S,ne as a,z as i};