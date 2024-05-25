"use strict";(self.webpackChunktic_tac_toe=self.webpackChunktic_tac_toe||[]).push([[840],{9279:(e,t,n)=>{function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"===typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{h:()=>o})},540:(e,t,n)=>{function o(e){return"string"===typeof e}n.d(t,{g:()=>o})},8201:(e,t,n)=>{n.d(t,{Q:()=>d});var o=n(8168),r=n(8587),i=n(7042),s=n(540);var a=n(8387),l=n(9279);function c(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"===typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var t;const{elementType:n,externalSlotProps:d,ownerState:p,skipResolvingSlotProps:f=!1}=e,h=(0,r.A)(e,u),m=f?{}:function(e,t,n){return"function"===typeof e?e(t,n):e}(d,p),{props:E,internalRef:v}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:s}=e;if(!t){const e=(0,a.A)(null==n?void 0:n.className,s,null==i?void 0:i.className,null==r?void 0:r.className),t=(0,o.A)({},null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),l=(0,o.A)({},n,i,r);return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}const u=(0,l.h)((0,o.A)({},i,r)),d=c(r),p=c(i),f=t(u),h=(0,a.A)(null==f?void 0:f.className,null==n?void 0:n.className,s,null==i?void 0:i.className,null==r?void 0:r.className),m=(0,o.A)({},null==f?void 0:f.style,null==n?void 0:n.style,null==i?void 0:i.style,null==r?void 0:r.style),E=(0,o.A)({},f,n,p,d);return h.length>0&&(E.className=h),Object.keys(m).length>0&&(E.style=m),{props:E,internalRef:f.ref}}((0,o.A)({},h,{externalSlotProps:m})),b=(0,i.A)(v,null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref),x=function(e,t,n){return void 0===e||(0,s.g)(e)?t:(0,o.A)({},t,{ownerState:(0,o.A)({},t.ownerState,n)})}(n,(0,o.A)({},E,{ref:b}),p);return x}},1840:(e,t,n)=>{n.r(t),n.d(t,{ModalManager:()=>u,default:()=>de,getModalUtilityClass:()=>ie,modalClasses:()=>se});var o=n(2144);function r(e){return(0,o.A)(e).defaultView||window}function i(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function s(e){return parseInt(r(e).getComputedStyle(e).paddingRight,10)||0}function a(e,t,n,o,r){const s=[t,n,...o];[].forEach.call(e.children,(e=>{const t=-1===s.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&i(e,r)}))}function l(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function c(e,t){const n=[],i=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,o.A)(e);return t.body===e?r(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){const e=function(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}((0,o.A)(i));n.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight="".concat(s(i)+e,"px");const t=(0,o.A)(i).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight="".concat(s(t)+e,"px")}))}let e;if(i.parentNode instanceof DocumentFragment)e=(0,o.A)(i).body;else{const t=i.parentElement,n=r(i);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:i}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((e=>{let{value:t,el:n,property:o}=e;t?n.style.setProperty(o,t):n.style.removeProperty(o)}))}}class u{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&i(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);a(t,e.mount,e.modalRef,o,!0);const r=l(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=l(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];o.restore||(o.restore=c(o,t))}remove(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=this.modals.indexOf(e);if(-1===n)return n;const o=l(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&i(e.modalRef,t),a(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&i(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}var d=n(8587),p=n(8168),f=n(5043),h=n(8387),m=n(8201),E=n(7042),v=n(4626);function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}),(()=>{}))}var x=n(9279);const y=new u;function g(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:s=y,closeAfterTransition:a=!1,onTransitionEnter:l,onTransitionExited:c,children:u,onClose:d,open:h,rootRef:m}=e,g=f.useRef({}),A=f.useRef(null),k=f.useRef(null),R=(0,E.A)(k,m),[S,T]=f.useState(!h),P=function(e){return!!e&&e.props.hasOwnProperty("in")}(u);let C=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(C=!1);const N=()=>(g.current.modalRef=k.current,g.current.mount=A.current,g.current),w=()=>{s.mount(N(),{disableScrollLock:r}),k.current&&(k.current.scrollTop=0)},O=(0,v.A)((()=>{const e=function(e){return"function"===typeof e?e():e}(t)||(0,o.A)(A.current).body;s.add(N(),e),k.current&&w()})),M=f.useCallback((()=>s.isTopModal(N())),[s]),I=(0,v.A)((e=>{A.current=e,e&&(h&&M()?w():k.current&&i(k.current,C))})),D=f.useCallback((()=>{s.remove(N(),C)}),[C,s]);f.useEffect((()=>()=>{D()}),[D]),f.useEffect((()=>{h?O():P&&a||D()}),[h,D,P,a,O]);const F=e=>t=>{var o;null==(o=e.onKeyDown)||o.call(e,t),"Escape"===t.key&&229!==t.which&&M()&&(n||(t.stopPropagation(),d&&d(t,"escapeKeyDown")))},L=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&d&&d(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(0,x.h)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const o=(0,p.A)({},n,t);return(0,p.A)({role:"presentation"},o,{onKeyDown:F(o),ref:R})},getBackdropProps:function(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.A)({"aria-hidden":!0},e,{onClick:L(e),open:h})},getTransitionProps:()=>({onEnter:b((()=>{T(!1),l&&l()}),null==u?void 0:u.props.onEnter),onExited:b((()=>{T(!0),c&&c(),a&&D()}),null==u?void 0:u.props.onExited)}),rootRef:R,portalRef:I,isTopModal:M,exited:S,hasTransition:P}}var A=n(8606),k=n(579);const R=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function S(e){const t=[],n=[];return Array.from(e.querySelectorAll(R)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector('input[type="radio"]'.concat(t));let n=t('[name="'.concat(e.name,'"]:checked'));return n||(n=t('[name="'.concat(e.name,'"]'))),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function T(){return!0}function P(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:i=!1,getTabbable:s=S,isEnabled:a=T,open:l}=e,c=f.useRef(!1),u=f.useRef(null),d=f.useRef(null),p=f.useRef(null),h=f.useRef(null),m=f.useRef(!1),v=f.useRef(null),b=(0,E.A)(t.ref,v),x=f.useRef(null);f.useEffect((()=>{l&&v.current&&(m.current=!n)}),[n,l]),f.useEffect((()=>{if(!l||!v.current)return;const e=(0,o.A)(v.current);return v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),m.current&&v.current.focus()),()=>{i||(p.current&&p.current.focus&&(c.current=!0,p.current.focus()),p.current=null)}}),[l]),f.useEffect((()=>{if(!l||!v.current)return;const e=(0,o.A)(v.current),t=t=>{x.current=t,!r&&a()&&"Tab"===t.key&&e.activeElement===v.current&&t.shiftKey&&(c.current=!0,d.current&&d.current.focus())},n=()=>{const t=v.current;if(null===t)return;if(!e.hasFocus()||!a()||c.current)return void(c.current=!1);if(t.contains(e.activeElement))return;if(r&&e.activeElement!==u.current&&e.activeElement!==d.current)return;if(e.activeElement!==h.current)h.current=null;else if(null!==h.current)return;if(!m.current)return;let n=[];if(e.activeElement!==u.current&&e.activeElement!==d.current||(n=s(v.current)),n.length>0){var o,i;const e=Boolean((null==(o=x.current)?void 0:o.shiftKey)&&"Tab"===(null==(i=x.current)?void 0:i.key)),t=n[0],r=n[n.length-1];"string"!==typeof t&&"string"!==typeof r&&(e?r.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const i=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(i),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,r,i,a,l,s]);const y=e=>{null===p.current&&(p.current=e.relatedTarget),m.current=!0};return(0,k.jsxs)(f.Fragment,{children:[(0,k.jsx)("div",{tabIndex:l?0:-1,onFocus:y,ref:u,"data-testid":"sentinelStart"}),f.cloneElement(t,{ref:b,onFocus:e=>{null===p.current&&(p.current=e.relatedTarget),m.current=!0,h.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,k.jsx)("div",{tabIndex:l?0:-1,onFocus:y,ref:d,"data-testid":"sentinelEnd"})]})}var C=n(7950),N=n(3844),w=n(9184);const O=f.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[i,s]=f.useState(null),a=(0,E.A)(f.isValidElement(n)?n.ref:null,t);if((0,N.A)((()=>{r||s(function(e){return"function"===typeof e?e():e}(o)||document.body)}),[o,r]),(0,N.A)((()=>{if(i&&!r)return(0,w.A)(t,i),()=>{(0,w.A)(t,null)}}),[t,i,r]),r){if(f.isValidElement(n)){const e={ref:a};return f.cloneElement(n,e)}return(0,k.jsx)(f.Fragment,{children:n})}return(0,k.jsx)(f.Fragment,{children:i?C.createPortal(n,i):i})}));var M=n(4535),I=n(3847),D=n(5540);const F=!1;var L=n(8726),j="unmounted",B="exited",U="entering",K="entered",_="exiting",W=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=B,o.appearStatus=U):r=K:r=t.unmountOnExit||t.mountOnEnter?j:B,o.state={status:r},o.nextCallback=null,o}(0,D.A)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===j?{status:B}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==U&&n!==K&&(t=U):n!==U&&n!==K||(t=_)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===U){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===B&&this.setState({status:j})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[C.findDOMNode(this),o],i=r[0],s=r[1],a=this.getTimeouts(),l=o?a.appear:a.enter;!e&&!n||F?this.safeSetState({status:K},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,s),this.safeSetState({status:U},(function(){t.props.onEntering(i,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:K},(function(){t.props.onEntered(i,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:C.findDOMNode(this);t&&!F?(this.props.onExit(o),this.safeSetState({status:_},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:B},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:B},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:C.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===j)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,d.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return f.createElement(L.A.Provider,{value:null},"function"===typeof n?n(e,o):f.cloneElement(f.Children.only(n),o))},t}(f.Component);function H(){}W.contextType=L.A,W.propTypes={},W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:H,onEntering:H,onEntered:H,onExit:H,onExiting:H,onExited:H},W.UNMOUNTED=j,W.EXITED=B,W.ENTERING=U,W.ENTERED=K,W.EXITING=_;const V=W;var Y=n(8653),q=n(7200),z=n(3375);function G(e,t){var n,o;const{timeout:r,easing:i,style:s={}}=e;return{duration:null!=(n=s.transitionDuration)?n:"number"===typeof r?r:r[t.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof i?i[t.mode]:i,delay:s.transitionDelay}}var Q=n(5849);const X=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Z={entering:{opacity:1},entered:{opacity:1}},J=f.forwardRef((function(e,t){const n=function(){const e=(0,Y.A)(q.A);return e[z.A]||e}(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:s,easing:a,in:l,onEnter:c,onEntered:u,onEntering:h,onExit:m,onExited:E,onExiting:v,style:b,timeout:x=o,TransitionComponent:y=V}=e,g=(0,d.A)(e,X),A=f.useRef(null),R=(0,Q.A)(A,s.ref,t),S=e=>t=>{if(e){const n=A.current;void 0===t?e(n):e(n,t)}},T=S(h),P=S(((e,t)=>{(e=>{e.scrollTop})(e);const o=G({style:b,timeout:x,easing:a},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",o),e.style.transition=n.transitions.create("opacity",o),c&&c(e,t)})),C=S(u),N=S(v),w=S((e=>{const t=G({style:b,timeout:x,easing:a},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),m&&m(e)})),O=S(E);return(0,k.jsx)(y,(0,p.A)({appear:i,in:l,nodeRef:A,onEnter:P,onEntered:C,onEntering:T,onExit:w,onExited:O,onExiting:N,addEndListener:e=>{r&&r(A.current,e)},timeout:x},g,{children:(e,t)=>f.cloneElement(s,(0,p.A)({style:(0,p.A)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},Z[e],b,s.props.style),ref:R},t))}))}));var $=n(7056),ee=n(4579);function te(e){return(0,ee.Ay)("MuiBackdrop",e)}(0,$.A)("MuiBackdrop",["root","invisible"]);const ne=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],oe=(0,M.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((e=>{let{ownerState:t}=e;return(0,p.A)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})})),re=f.forwardRef((function(e,t){var n,o,r;const i=(0,I.A)({props:e,name:"MuiBackdrop"}),{children:s,className:a,component:l="div",components:c={},componentsProps:u={},invisible:f=!1,open:m,slotProps:E={},slots:v={},TransitionComponent:b=J,transitionDuration:x}=i,y=(0,d.A)(i,ne),g=(0,p.A)({},i,{component:l,invisible:f}),R=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,A.A)(o,te,t)})(g),S=null!=(n=E.root)?n:u.root;return(0,k.jsx)(b,(0,p.A)({in:m,timeout:x},y,{children:(0,k.jsx)(oe,(0,p.A)({"aria-hidden":!0},S,{as:null!=(o=null!=(r=v.root)?r:c.Root)?o:l,className:(0,h.A)(R.root,a,null==S?void 0:S.className),ownerState:(0,p.A)({},g,null==S?void 0:S.ownerState),classes:R,ref:t,children:s}))}))}));function ie(e){return(0,ee.Ay)("MuiModal",e)}const se=(0,$.A)("MuiModal",["root","hidden","backdrop"]),ae=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],le=(0,M.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((e=>{let{theme:t,ownerState:n}=e;return(0,p.A)({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!n.open&&n.exited&&{visibility:"hidden"})})),ce=(0,M.Ay)(re,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ue=f.forwardRef((function(e,t){var n,o,r,i,s,a;const l=(0,I.A)({name:"MuiModal",props:e}),{BackdropComponent:c=ce,BackdropProps:u,className:E,closeAfterTransition:v=!1,children:b,container:x,component:y,components:R={},componentsProps:S={},disableAutoFocus:T=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:N=!1,disablePortal:w=!1,disableRestoreFocus:M=!1,disableScrollLock:D=!1,hideBackdrop:F=!1,keepMounted:L=!1,onBackdropClick:j,open:B,slotProps:U,slots:K}=l,_=(0,d.A)(l,ae),W=(0,p.A)({},l,{closeAfterTransition:v,disableAutoFocus:T,disableEnforceFocus:C,disableEscapeKeyDown:N,disablePortal:w,disableRestoreFocus:M,disableScrollLock:D,hideBackdrop:F,keepMounted:L}),{getRootProps:H,getBackdropProps:V,getTransitionProps:Y,portalRef:q,isTopModal:z,exited:G,hasTransition:Q}=g((0,p.A)({},W,{rootRef:t})),X=(0,p.A)({},W,{exited:G}),Z=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,A.A)(r,ie,o)})(X),J={};if(void 0===b.props.tabIndex&&(J.tabIndex="-1"),Q){const{onEnter:e,onExited:t}=Y();J.onEnter=e,J.onExited=t}const $=null!=(n=null!=(o=null==K?void 0:K.root)?o:R.Root)?n:le,ee=null!=(r=null!=(i=null==K?void 0:K.backdrop)?i:R.Backdrop)?r:c,te=null!=(s=null==U?void 0:U.root)?s:S.root,ne=null!=(a=null==U?void 0:U.backdrop)?a:S.backdrop,oe=(0,m.Q)({elementType:$,externalSlotProps:te,externalForwardedProps:_,getSlotProps:H,additionalProps:{ref:t,as:y},ownerState:X,className:(0,h.A)(E,null==te?void 0:te.className,null==Z?void 0:Z.root,!X.open&&X.exited&&(null==Z?void 0:Z.hidden))}),re=(0,m.Q)({elementType:ee,externalSlotProps:ne,additionalProps:u,getSlotProps:e=>V((0,p.A)({},e,{onClick:t=>{j&&j(t),null!=e&&e.onClick&&e.onClick(t)}})),className:(0,h.A)(null==ne?void 0:ne.className,null==u?void 0:u.className,null==Z?void 0:Z.backdrop),ownerState:X});return L||B||Q&&!G?(0,k.jsx)(O,{ref:q,container:x,disablePortal:w,children:(0,k.jsxs)($,(0,p.A)({},oe,{children:[!F&&c?(0,k.jsx)(ee,(0,p.A)({},re)):null,(0,k.jsx)(P,{disableEnforceFocus:C,disableAutoFocus:T,disableRestoreFocus:M,isEnabled:z,open:B,children:f.cloneElement(b,J)})]}))}):null})),de=ue},5849:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(7042).A},2144:(e,t,n)=>{function o(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>o})},8726:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(5043).createContext(null)},5540:(e,t,n)=>{function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=840.e2824866.chunk.js.map