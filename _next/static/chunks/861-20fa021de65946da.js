(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{50015:function(e,t,n){"use strict";n.r(t)},8846:function(e,t,n){"use strict";n.r(t)},28038:function(e,t,n){"use strict";n.r(t)},46518:function(e,t,n){"use strict";n.d(t,{M:function(){return h}});var o=n(52322),r=n(2784),s=n(54503);var i=n(90243);const c=(0,r.createContext)({});var u=n(57263),a=n(12496),l=n(63358);const d=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:i,exitVariant:c,enterVariant:d,presenceAffectsLayout:f}=e;const h=(0,u.h)(p),m=(0,a.M)()||"",v=r.useMemo((()=>({id:m,initial:n,isPresent:s,exitVariant:c,enterVariant:d,onExitComplete:e=>{h.set(e,!0);for(const t of h.values())if(!t)return;null==i||i()},register:e=>(h.set(e,!1),()=>h.delete(e))})),f?void 0:[s,c,d]);return r.useMemo((()=>{h.forEach(((e,t)=>h.set(t,!1)))}),[s]),r.useEffect((()=>{!s&&!h.size&&(null==i||i())}),[s]),(0,o.jsx)(l.O.Provider,{value:v,children:t})};function p(){return new Map}r.keep;const f=e=>e.key||"";const h=e=>{let{children:t,enterVariant:n,exitVariant:u,initial:a=!0,onExitComplete:l,exitBeforeEnter:p,presenceAffectsLayout:h=!0}=e,m=(0,i.N)();const v=(0,r.useContext)(c).forceRender;v&&(m=v);const b=function(){const e=(0,r.useRef)(!1);return(0,s.LI)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}(),g=function(e){const t=[];return r.Children.forEach(e,((e,n)=>{(0,r.isValidElement)(e)&&(e.key?t.push(e):t.push(r.cloneElement(e,{key:n})))})),t}(t);let x=g;const y=new Set,k=(0,r.useRef)(x),C=(0,r.useRef)(new Map).current,w=(0,r.useRef)(!0);var E;if((0,s.LI)((()=>{w.current=!1,function(e,t){e.forEach((e=>{const n=f(e);t.set(n,e)}))}(g,C),k.current=x})),E=()=>{w.current=!0,C.clear(),y.clear()},(0,r.useEffect)((()=>()=>E()),[]),w.current)return(0,o.jsx)(o.Fragment,{children:x.map((e=>(0,o.jsx)(d,{isPresent:!0,exitVariant:u,enterVariant:n,initial:!!a&&void 0,presenceAffectsLayout:h,children:e},f(e))))});x=[...x];const _=k.current.map(f),P=g.map(f),Z=_.length;for(let o=0;o<Z;o++){const e=_[o];-1===P.indexOf(e)&&y.add(e)}return p&&y.size&&(x=[]),y.forEach((e=>{if(-1!==P.indexOf(e))return;const t=C.get(e);if(!t)return;const r=_.indexOf(e);x.splice(r,0,(0,o.jsx)(d,{isPresent:!1,onExitComplete:()=>{C.delete(e),y.delete(e);const t=k.current.findIndex((t=>t.key===e));if(k.current.splice(t,1),!y.size){if(k.current=g,!1===b.current)return;m(),null==l||l()}},exitVariant:u,enterVariant:n,presenceAffectsLayout:h,children:t},f(t)))})),x=x.map((e=>{const t=e.key;return y.has(t)?e:(0,o.jsx)(d,{isPresent:!0,exitVariant:u,enterVariant:n,presenceAffectsLayout:h,children:e},f(e))})),(0,o.jsx)(o.Fragment,{children:y.size?x:x.map((e=>(0,r.cloneElement)(e)))})};h.displayName="AnimatePresence"},80832:function(e,t,n){"use strict";n.d(t,{R:function(){return o.R}});var o=n(49732)},5146:function(e,t,n){"use strict";n.d(t,{zx:function(){return C}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=n(45482),u=n(37314),a=n(25622),l=n(59699),d=n(9058),p=n(63035),f=n(38129),h=n(49957),m=n(39383),v=n(29694),b=n(41977),g=n(2784);g.createElement;const x=(0,c.z)(m.K,{name:"Button",tag:"button",focusable:!0,hoverTheme:!0,pressTheme:!0,backgrounded:!0,variants:{size:{"...size":u.a},active:{true:{hoverStyle:{backgroundColor:"$background"}}},disabled:{true:{opacity:.5,pointerEvents:"none"}}},defaultVariants:{size:"$4"},"borderTopColor-focus":"_btc-0focus-1b0a2ef","borderRightColor-focus":"_brc-0focus-1b0a2ef","borderBottomColor-focus":"_bbc-0focus-1b0a2ef","borderLeftColor-focus":"_blc-0focus-1b0a2ef","borderTopColor-hover":"_btc-0hover-16hdpw2","borderRightColor-hover":"_brc-0hover-16hdpw2","borderBottomColor-hover":"_bbc-0hover-16hdpw2","borderLeftColor-hover":"_blc-0hover-16hdpw2","borderTopColor-active":"_btc-0active-16hdpw2","borderRightColor-active":"_brc-0active-16hdpw2","borderBottomColor-active":"_bbc-0active-16hdpw2","borderLeftColor-active":"_blc-0active-16hdpw2",cursor:"_cur-1seloot",flexDirection:"_fd-2fa2",flexWrap:"_fw-1hu5zm3",alignItems:"_ai-1ch0i1h",justifyContent:"_jc-1ch0i1h",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderBottomStyle:"_bbs-1t9igb",borderTopStyle:"_bts-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_brs-1t9igb"}),y=(0,c.z)(v.J,{selectable:!1,ellipse:!0,flexShrink:"_fs-1",flexGrow:"_fg-0",cursor:"_cur-w76juj",color:"_col-b5vn3b"}),k=(0,g.forwardRef)(((e,t)=>{const{children:n,icon:c,iconAfter:u,noTextWrap:p,theme:m,space:v,spaceFlex:k,scaleIcon:C=1,scaleSpace:w=.66,separator:E,color:_,fontWeight:P,letterSpacing:Z,fontSize:R,fontFamily:j,textAlign:z,textProps:L}=e,S=(0,s.Z)(e,["children","icon","iconAfter","noTextWrap","theme","space","spaceFlex","scaleIcon","scaleSpace","separator","color","fontWeight","letterSpacing","fontSize","fontFamily","textAlign","textProps"]),A=(0,g.useContext)(a.K),F=e.size||"$4",$=("number"===typeof F?.5*F:(0,f.yv)(F))*C,T=(0,h.useGetThemedIcon)({size:$,color:_}),[W,N]=[c,u].map(T),O=(0,l.Ve)($)*w,I=(0,b.k)(y,e);return(0,i.jsx)(x,(0,r.Z)((0,o.Z)((0,r.Z)((0,o.Z)({fontFamily:j},A&&{tag:"span"}),{ref:t}),S),{children:(0,i.jsx)(a.K.Provider,{value:!0,children:W||N?(0,d.P9)({space:O,spaceFlex:k,separator:E,direction:"column"===e.flexDirection||"column-reverse"===e.flexDirection?"vertical":"horizontal",children:[W,I,N]}):I})}))})),C=x.extractable((0,p.Y)(k),{inlineProps:new Set(["color","fontWeight","fontSize","fontFamily","letterSpacing","textAlign"])});n(50015)},8005:function(e,t,n){"use strict";n.d(t,{b:function(){return a},k:function(){return u}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=n(2784);function u(e,t){const n=c.createContext(t);function o(e){const{children:t}=e,o=(0,s.Z)(e,["children"]),r=c.useMemo((()=>o),Object.values(o));return(0,i.jsx)(n.Provider,{value:r,children:t})}return o.displayName=e+"Provider",[o,function(o){const r=c.useContext(n);if(r)return r;if(void 0!==t)return t;throw new Error("`".concat(o,"` must be used within `").concat(e,"`"))}]}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];function u(t,o){const r=c.createContext(o),u=n.length;function a(t){const{scope:n,children:o}=t,a=(0,s.Z)(t,["scope","children"]),l=(null==n?void 0:n[e][u])||r,d=c.useMemo((()=>a),Object.values(a));return(0,i.jsx)(l.Provider,{value:d,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,s){const i=(null==s?void 0:s[e][u])||r,a=c.useContext(i);if(a)return a;if(void 0!==o)return o;throw new Error("`".concat(n,"` must be used within `").concat(t,"`"))}]}const a=()=>{const t=n.map((e=>c.createContext(e)));return function(n){const s=(null==n?void 0:n[e])||t;return c.useMemo((()=>({["__scope".concat(e)]:(0,r.Z)((0,o.Z)({},n),{[e]:s})})),[n,s])}};return a.scopeName=e,[u,l(a,...t)]}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t[0];if(1===t.length)return r;const s=()=>{const e=t.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(t){const n=e.reduce(((e,n)=>{let{useScope:r,scopeName:s}=n;const i=r(t)["__scope".concat(s)];return(0,o.Z)({},e,i)}),{});return c.useMemo((()=>({["__scope".concat(r.scopeName)]:n})),[n])}};return s.scopeName=r.scopeName,s}},70628:function(e,t,n){"use strict";n.d(t,{M:function(){return p}});var o=n(37328),r=n(96670),s=n(26297),i=n(88290),c=n(43798),u=n(2784);const a="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},p=u.forwardRef(((e,t)=>{const{loop:n=!1,trapped:p=!1,onMountAutoFocus:m,onUnmountAutoFocus:v}=e,x=(0,s.Z)(e,["loop","trapped","onMountAutoFocus","onUnmountAutoFocus"]),[y,k]=u.useState(null),C=(0,c.z)(m),w=(0,c.z)(v),E=u.useRef(null),_=(0,i.e)(t,(e=>k(e))),P=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect((()=>{if(p){let e=function(e){if(P.paused||!y)return;const t=e.target;y.contains(t)?E.current=t:b(E.current,{select:!0})},t=function(e){!P.paused&&y&&(y.contains(e.relatedTarget)||b(E.current,{select:!0}))};return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[p,y,P.paused]),u.useEffect((()=>{if(y){g.add(P);const t=document.activeElement;if(!y.contains(t)){const n=new CustomEvent(a,d);y.addEventListener(a,C),y.dispatchEvent(n),n.defaultPrevented||(!function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=document.activeElement;for(const o of e)if(b(o,{select:t}),document.activeElement!==n)return}((e=f(y),e.filter((e=>"A"!==e.tagName))),{select:!0}),document.activeElement===t&&b(y))}return()=>{y.removeEventListener(a,C),setTimeout((()=>{const e=new CustomEvent(l,d);y.addEventListener(l,w),y.dispatchEvent(e),e.defaultPrevented||b(null!=t?t:document.body,{select:!0}),y.removeEventListener(l,w),g.remove(P)}),0)}}var e}),[y,C,w,P]);const Z=u.useCallback((e=>{if(!n&&!p)return;if(P.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){const t=e.currentTarget,[r,s]=function(e){const t=f(e),n=h(t,e),o=h(t.reverse(),e);return[n,o]}(t);r&&s?e.shiftKey||o!==s?e.shiftKey&&o===r&&(e.preventDefault(),n&&b(s,{select:!0})):(e.preventDefault(),n&&b(r,{select:!0})):o===t&&e.preventDefault()}}),[n,p,P.paused]),R=u.Children.only(e.children);return u.cloneElement(R,(0,r.Z)((0,o.Z)({tabIndex:-1},x),{ref:_,onKeyDown:Z}))}));function f(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function h(e,t){for(const n of e)if(!m(n,{upTo:t}))return n}function m(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==n&&e===n)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function v(e){return e instanceof HTMLInputElement&&"select"in e}function b(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&v(e)&&t&&e.select()}}p.displayName="FocusScope";const g=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=x(e,t),e.unshift(t)},remove(t){var n;e=x(e,t),null==(n=e[0])||n.resume()}}}();function x(e,t){const n=[...e],o=n.indexOf(t);return-1!==o&&n.splice(o,1),n}},38129:function(e,t,n){"use strict";n.d(t,{yv:function(){return s}});var o=n(59699),r=n(77650);const s=(e,t)=>{const n=i(e,t);return(0,o.cG)(n)?+n.val:n?+n:16},i=(e,t)=>{const n=c(e,t);if(!n)return e;return(0,r.iE)().fontsParsed[(null==t?void 0:t.font)||"$body"].size[n]},c=(e,t)=>{var n;if("number"===typeof e)return null;const o=e||"$4",s=(null==t?void 0:t.relativeSize)||0,i=(0,r.iE)().fontsParsed[(null==t?void 0:t.font)||"$body"].size,c=Object.keys(i);let u=c.indexOf(o);-1===u&&o.endsWith(".5")&&(u=c.indexOf(o.replace(".5","")));return null!=(n=c[Math.min(Math.max(0,u+s),c.length-1)])?n:o}},49957:function(e,t,n){"use strict";n.d(t,{useGetThemedIcon:function(){return c}});var o=n(37328),r=n(96670),s=n(2784),i=n(61958);const c=e=>{const t=(e=>{const t=(0,i.Fg)();let n;return n=t&&e&&e in t?t[e]:e||(null==t?void 0:t.color),(null==n?void 0:n.toString())||""})(e.color);return n=>n?(0,s.isValidElement)(n)?s.cloneElement(n,(0,o.Z)((0,r.Z)((0,o.Z)({},e),{color:t}),n.props)):s.createElement(n,(0,r.Z)((0,o.Z)({},e),{color:t})):n}},32577:function(e,t,n){"use strict";n.d(t,{J2:function(){return H},QH:function(){return M},bh:function(){return R},s2:function(){return L},tW:function(){return A},xo:function(){return $},yk:function(){return W}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=(n(99021),n(98333)),u=n(46518),a=n(80832),l=n(88290),d=n(11193),p=n(61958),f=n(36475),h=n(82735),m=n(12496),v=n(8005),b=n(70628),g=n(6621),x=n(12938),y=n(2940),k=n(74697),C=n(35314),w=n(47138),E=n(2784);const _="Popover",[P,Z]=(0,v.b)(_,[g.D7]),R=(0,g.D7)(),[j,z]=P(_),L=j,S="PopoverAnchor",A=E.forwardRef(((e,t)=>{const{__scopePopover:n}=e,c=(0,s.Z)(e,["__scopePopover"]),u=z(S,n),a=R(n),{onCustomAnchorAdd:l,onCustomAnchorRemove:d}=u;return E.useEffect((()=>(l(),()=>d())),[l,d]),(0,i.jsx)(g.Xp,(0,r.Z)((0,o.Z)({},a,c),{ref:t}))}));A.displayName=S;const F="PopoverTrigger",$=E.forwardRef(((e,t)=>{const{__scopePopover:n}=e,c=(0,s.Z)(e,["__scopePopover"]),u=z(F,n),a=R(n),p=(0,l.e)(t,u.triggerRef),f=(0,i.jsx)(C.FA,(0,r.Z)((0,o.Z)({"aria-haspopup":"dialog","aria-expanded":u.open,"aria-controls":u.contentId,"data-state":D(u.open)},c),{ref:p,onPress:(0,d.composeEventHandlers)(e.onPress,u.onOpenToggle)}));return u.hasCustomAnchor?f:(0,i.jsx)(g.Xp,(0,r.Z)((0,o.Z)({asChild:!0},a),{children:f}))}));$.displayName=F;const T="PopoverContent",W=E.forwardRef(((e,t)=>{const{allowPinchZoom:n,trapFocus:c,disableRemoveScroll:u}=e,h=(0,s.Z)(e,["allowPinchZoom","trapFocus","disableRemoveScroll"]),m=z(T,e.__scopePopover),v=E.useRef(null),b=(0,l.e)(t,v),g=E.useRef(!1),x=(0,p.Cg)();return E.useEffect((()=>{if(!m.open)return;const e=v.current;return e?(0,a.R)(e):void 0}),[m.open]),(0,i.jsx)(y.h_,{children:(0,i.jsx)(f.Q,{name:x,children:(0,i.jsx)(k.f,{enabled:!u&&m.open,allowPinchZoom:n,removeScrollBar:!1,children:(0,i.jsx)(N,(0,r.Z)((0,o.Z)({},h),{ref:b,trapFocus:null!=c?c:m.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,d.composeEventHandlers)(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),g.current||null==(t=m.triggerRef.current)||t.focus()})),onPointerDownOutside:(0,d.composeEventHandlers)(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,o=2===t.button||n;g.current=o}),{checkDefaultPrevented:!1}),onFocusOutside:(0,d.composeEventHandlers)(e.onFocusOutside,(e=>e.preventDefault()),{checkDefaultPrevented:!1})}))})})})})),N=E.forwardRef(((e,t)=>{const{__scopePopover:n,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:l,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:f,onFocusOutside:h,onInteractOutside:m,children:v}=e,x=(0,s.Z)(e,["__scopePopover","trapFocus","onOpenAutoFocus","onCloseAutoFocus","disableOutsidePointerEvents","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","children"]),y=R(n),k=z(T,y.__scopePopover);return(0,i.jsx)(u.M,{children:!!k.open&&(0,i.jsx)(g.XS,(0,r.Z)((0,o.Z)({"data-state":D(k.open),id:k.contentId,pointerEvents:"auto"},y,x),{ref:t,children:!1===c?v:(0,i.jsx)(b.M,{loop:!0,trapped:null!=c?c:k.open,onMountAutoFocus:a,onUnmountAutoFocus:l,children:(0,i.jsx)("div",{style:{display:"contents"},children:v})})}),"popper-content")})})),O="PopoverClose",I=E.forwardRef(((e,t)=>{const{__scopePopover:n}=e,c=(0,s.Z)(e,["__scopePopover"]),u=z(O,n);return(0,i.jsx)(C.FA,(0,r.Z)((0,o.Z)({},c),{ref:t,onPress:(0,d.composeEventHandlers)(e.onPress,(()=>u.onOpenChange(!1)))}))}));I.displayName=O;const M=E.forwardRef(((e,t)=>{const{__scopePopover:n}=e,c=(0,s.Z)(e,["__scopePopover"]),u=R(n);return(0,i.jsx)(g.cU,(0,r.Z)((0,o.Z)({},u,c),{ref:t}))}));M.displayName="PopoverArrow";const H=(0,h.$)((e=>{const{__scopePopover:t,children:n,open:u,defaultOpen:a,onOpenChange:l}=e,d=(0,s.Z)(e,["__scopePopover","children","open","defaultOpen","onOpenChange"]),p=R(t),f=E.useRef(null),[h,v]=E.useState(!1),[b,y]=(0,w.T)({prop:u,defaultProp:a||!1,onChange:l}),k=E.useCallback((e=>{const t=(0,c.YF)((0,r.Z)((0,o.Z)({},e),{open:b,onOpenChange:y})),{getReferenceProps:n,getFloatingProps:s}=(0,c.NI)([(0,c.KK)(t.context),(0,c.qs)(t.context,{role:"dialog"}),(0,c.bQ)(t.context)]);return(0,r.Z)((0,o.Z)({},t),{getReferenceProps:n,getFloatingProps:s})}),[b,y]);return(0,i.jsx)(x.A.Provider,{value:k,children:(0,i.jsx)(g.rD,(0,r.Z)((0,o.Z)({},p,d),{children:(0,i.jsx)(j,{scope:t,contentId:(0,m.M)(),triggerRef:f,open:b,onOpenChange:y,onOpenToggle:E.useCallback((()=>y((e=>!e))),[y]),hasCustomAnchor:h,onCustomAnchorAdd:E.useCallback((()=>v(!0)),[]),onCustomAnchorRemove:E.useCallback((()=>v(!1)),[]),children:n})}))})}),{Anchor:A,Arrow:M,Trigger:$,Content:W,Close:I});function D(e){return e?"open":"closed"}H.displayName=_},6621:function(e,t,n){"use strict";n.d(t,{D7:function(){return E},GK:function(){return P},XS:function(){return S},Xp:function(){return j},cU:function(){return T},rD:function(){return Z}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=n(88290),u=n(54503),a=n(45482),l=n(77650),d=n(59699),p=n(9303),f=n(8005),h=n(35314),m=n(39383),v=n(2784),b=n(20189),g=n(66379),x=n(40771),y=n(12938);const k="Popper",[C,w]=(0,f.b)(k),E=w,[_,P]=C(k),Z=e=>{const{__scopePopper:t,children:n,size:s,strategy:a="absolute",placement:l="bottom",stayInFrame:d,allowFlip:p}=e,[f,h]=v.useState(!1);(0,u.LI)((()=>{h(!0)}),[]);const m=v.useRef(),[k,C]=v.useState(null),[w,E]=v.useState(0),P=v.useRef(),Z=(0,y.Y)({strategy:a,placement:l,middleware:[d?(0,b.uY)(d):null,p?(0,b.RR)(p):null,k?(0,g.x7)({element:k}):null,w?(0,b.cv)(w):null].filter(Boolean)}),{refs:R,middlewareData:j}=Z,z=(0,c.e)(P,C);(0,u.LI)((()=>{Z.reference(m.current)}),[m]),v.useEffect((()=>{if(R.reference.current&&R.floating.current)return(0,x.Me)(R.reference.current,R.floating.current,Z.update)}),[R.floating.current,R.reference.current]);const L=v.useMemo((()=>j.arrow),[JSON.stringify(j.arrow||{})]);return(0,i.jsx)(_,(0,r.Z)((0,o.Z)({scope:t,anchorRef:m,size:s,arrowRef:z,arrowStyle:L,onArrowSize:E,isMounted:f},Z),{children:n}))};Z.displayName=k;const R="PopperAnchor",j=v.forwardRef(((e,t)=>{const{__scopePopper:n,virtualRef:r}=e,u=(0,s.Z)(e,["__scopePopper","virtualRef"]),{anchorRef:a,getReferenceProps:l}=P(R,n),d=v.useRef(null),p=(0,c.e)(t,d,a);if(r)return null;const f=(0,o.Z)({ref:p},u);return(0,i.jsx)(h.FA,(0,o.Z)({},l?l(f):f))}));j.displayName=R;const z="PopperContent",L=(0,a.z)(m.K,{name:"PopperContent",backgroundColor:"$background",alignItems:"center",radiused:!0,variants:{size:{"...size":(e,t)=>{let{tokens:n}=t;return{padding:n.space[e],borderRadius:n.radius[e]}}}},defaultVariants:{size:"$4"}}),S=L.extractable(v.forwardRef(((e,t)=>{const{__scopePopper:n}=e,u=(0,s.Z)(e,["__scopePopper"]),{strategy:a,placement:l,floating:d,x:p,y:f,getFloatingProps:m,size:b,isMounted:g}=P(z,n),x=(0,c.e)(d,t),y=v.useMemo((()=>(0,i.jsx)(L,(0,r.Z)((0,o.Z)({"data-placement":l,"data-strategy":a},u),{size:u.size||b}),"popper-content-frame")),[l,a,e]);if(!g)return null;const k={ref:x,x:p||0,y:f||0,position:a};return(0,i.jsx)(h.FA,(0,r.Z)((0,o.Z)({},m?m(k):k),{children:y}))})));S.displayName=z;const A="PopperArrow",F=(0,a.z)(h.FA,{name:"PopperArrow",borderColor:"$borderColor",backgroundColor:"$background",position:"absolute",zIndex:-1,pointerEvents:"none"}),$={top:"bottom",right:"left",bottom:"top",left:"right"},T=F.extractable(v.forwardRef((function(e,t){const{__scopePopper:n,offset:a,size:f,borderWidth:h=0}=e,m=(0,s.Z)(e,["__scopePopper","offset","size","borderWidth"]),v=P(A,n),b=(0,l.lz)(),g=null!=f?f:v.size,x=+(0,d.Ve)((0,p.C)(b.space,g,-2,[2])),{placement:y}=v,{x:k,y:C}=v.arrowStyle||{x:0,y:0},w=(0,c.e)(v.arrowRef,t),E=y?y.split("-")[0]:"top",_={x:k,y:C,width:x,height:x};if(E){const e=$[E];e&&(_[e]=-x/2),"top"!==e&&"bottom"!==e||(_.left=0),"left"!==e&&"right"!==e||(_.top=0)}return(0,u.LI)((()=>{var e;null==(e=v.onArrowSize)||e.call(v,x)}),[x,v.onArrowSize]),(0,i.jsx)(F,(0,o.Z)((0,r.Z)((0,o.Z)((0,r.Z)((0,o.Z)({},m),{ref:w}),_),{rotate:"45deg"}),"top"===E&&{borderBottomWidth:h,borderRightWidth:h},"bottom"===E&&{borderTopWidth:h,borderLeftWidth:h},"left"===E&&{borderTopWidth:h,borderRightWidth:h},"right"===E&&{borderBottomWidth:h,borderLeftWidth:h}))})));T.displayName=A},12938:function(e,t,n){"use strict";n.d(t,{A:function(){return s},Y:function(){return i}});var o=n(2784),r=n(66379);const s=(0,o.createContext)(null),i=e=>{var t;return null==(t=(0,o.useContext)(s)||r.YF)?void 0:t(e)}},74697:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var o=n(37328),r=n(52322),s=n(18217);const i=e=>(0,r.jsx)(s.Z,(0,o.Z)({},e));i.classNames=s.Z.classNames},539:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var o=n(45482),r=n(39383),s=n(53167);const i=(0,o.z)(r.K,{name:"Square",backgrounded:!0,variants:{circular:{true:{borderRadius:1e5}},size:{"...size":s.k}},justifyContent:"_jc-1ch0i1h",alignItems:"_ai-1ch0i1h"});n(8846)},53167:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});const o=(e,t)=>{let{tokens:n}=t;var o,r;const s=null!=(o=n.size[e])?o:e,i=null!=(r=n.size[e])?r:e;return{width:s,height:i,minWidth:s,maxWidth:s,maxHeight:i,minHeight:i}}},87831:function(e,t,n){"use strict";n.d(t,{H:function(){return u}});var o=n(26297),r=n(52322),s=n(97729),i=n.n(s),c=n(5632);n(2784);function u(e){var{url:t="https://tamagui.dev",pathname:n,title:s="Tamagui",description:u="",poster:a}=e,l=(0,o.Z)(e,["url","pathname","title","description","poster"]);const d=(0,c.useRouter)();var p;const f=null!==(p=l.image)&&void 0!==p?p:a?"".concat(t,"/").concat(a):"".concat(t,"/social.png"),h=n||d.pathname;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:s}),(0,r.jsx)("meta",{name:"description",content:u}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(t).concat(h)}),(0,r.jsx)("meta",{property:"og:title",content:s}),(0,r.jsx)("meta",{property:"og:description",content:u}),(0,r.jsx)("meta",{property:"og:image",content:f}),(0,r.jsx)("meta",{name:"twitter:site",content:"@tamagui_js"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},39383:function(e,t,n){"use strict";n.d(t,{K:function(){return c}});var o=n(45482),r=n(35314),s=n(37328);const i={true:(e,t)=>(0,r.yQ)(t.props.size,t)},c=(0,o.z)(r.FA,{name:"SizableStack",variants:{fontFamily:()=>({}),backgrounded:{true:{backgroundColor:"$background"}},radiused:{true:(e,t)=>{const{tokens:n,props:o}=t;return{borderRadius:n.radius[o.size]||n.radius.$4}}},hoverTheme:{true:{hoverStyle:{backgroundColor:"$backgroundHover",borderColor:"$borderColorHover"}},false:{}},pressTheme:{true:{pressStyle:{backgroundColor:"$backgroundPress",borderColor:"$borderColorPress"}},false:{}},focusTheme:{true:{focusStyle:{backgroundColor:"$backgroundFocus",borderColor:"$borderColorFocus"}},false:{}},circular:{true:(e,t)=>{let{props:n,tokens:o}=t;const r=o.size[n.size];return{width:r,height:r,maxWidth:r,maxHeight:r,minWidth:r,minHeight:r,borderRadius:1e5,paddingVertical:0,paddingHorizontal:0}}},padded:{true:(e,t)=>{const{tokens:n,props:o}=t;return{padding:n.space[o.size]||n.space.$4}}},elevate:i,bordered:(e,t)=>{let{props:n}=t;return(0,s.Z)({borderWidth:"number"===typeof e?e:1,borderColor:"$borderColor"},n.hoverTheme&&{hoverStyle:{borderColor:"$borderColorHover"}},n.pressTheme&&{pressStyle:{borderColor:"$borderColorPress"}},n.focusTheme&&{focusStyle:{borderColor:"$borderColorFocus"}})},transparent:{true:{backgroundColor:"transparent"}},chromeless:{true:{backgroundColor:"transparent",borderColor:"transparent",shadowColor:"transparent"}}}})},46318:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=n(45482),u=n(61125),a=n(59699),l=n(77650),d=n(9058),p=n(80641),f=n(39383),h=n(2784),m=n(8343);const v=(0,c.z)(f.K,{name:"GroupFrame",variants:{size:(e,t)=>{let{tokens:n}=t;var o,r;return{borderRadius:null!=(r=null!=(o=n.radius[e])?o:e)?r:n.radius.$4}}},defaultVariants:{size:"$4"},overflowX:"_ovx-1ew92ne",overflowY:"_ovy-1ew92ne",backgroundColor:"_bc-180kg62",transform:"_transform-19qlv72"}),b=v.extractable((0,h.forwardRef)(((e,t)=>{const n=(0,u.p)(e),{children:c,space:p,spaceDirection:f,separator:b,size:x="$4",scrollable:y,vertical:k,disabled:C,disablePassBorderRadius:w,disablePassSize:E,borderRadius:_}=n,P=(0,s.Z)(n,["children","space","spaceDirection","separator","size","scrollable","vertical","disabled","disablePassBorderRadius","disablePassSize","borderRadius"]),Z=null!=_?_:x?(0,a.Ve)((0,l.lz)().radius[x])-1:void 0,R=void 0!==Z,j=null!=w?w:!R,z=h.Children.toArray(c),L=null!=E?E:void 0===x,S=z.map(((e,t)=>{var n,r;if(!(0,h.isValidElement)(e))return e;const s=null!=(n=e.props.disabled)?n:C,i=null!=(r=e.props.size)?r:x,c=0===t,u=t===z.length-1,a=(0,o.Z)({disabled:s},!L&&{size:i},!j&&(0,o.Z)({borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0},R&&(0,o.Z)({},c&&!k&&{borderTopLeftRadius:Z,borderBottomLeftRadius:Z},c&&k&&{borderTopLeftRadius:Z,borderTopRightRadius:Z},u&&!k&&{borderTopRightRadius:Z,borderBottomRightRadius:Z},u&&k&&{borderBottomLeftRadius:Z,borderBottomRightRadius:Z})));return g(e,a)}));return(0,i.jsx)(v,(0,r.Z)((0,o.Z)({ref:t,size:x,flexDirection:k?"column":"row",borderRadius:_},P),{children:(A=(0,d.P9)({direction:f,separator:b,space:p,children:S}),y?(0,i.jsx)(m.Z,(0,r.Z)((0,o.Z)({},k&&{showsVerticalScrollIndicator:!1},!k&&{horizontal:!0,showsHorizontalScrollIndicator:!1}),{children:A})):A)}));var A}))),g=(e,t)=>{const n=(0,p.d)(e.props,t)[0];return h.cloneElement((0,r.Z)((0,o.Z)({},e),{props:null}),n)};n(28038)},41977:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var o=n(37328),r=n(96670),s=n(52322),i=n(2784);function c(e,t){let{children:n,textProps:c,size:u,noTextWrap:a,color:l,fontFamily:d,fontSize:p,fontWeight:f,letterSpacing:h,textAlign:m}=t;if(a||!n)return n;let v=i.Children.toArray(n),b=[],g=!1;const x={};function y(){if(!g)return;const t=b.length-1,n=b[t];b[t]=(0,s.jsx)(e,(0,r.Z)((0,o.Z)((0,r.Z)((0,o.Z)({},x),{size:u}),c),{children:n}),t)}l&&(x.color=l),d&&(x.fontFamily=d),p&&(x.fontSize=p),f&&(x.fontWeight=f),h&&(x.letterSpacing=h),m&&(x.textAlign=m);for(const o of v){const e=b[b.length-1],t="string"===typeof o;t?g?e.push(o):b.push([o]):(y(),b.push(o)),g=t}return y(),b}},34989:function(e,t,n){"use strict";n.d(t,{AZ:function(){return g},u:function(){return x},w6:function(){return y}});var o=n(37328),r=n(96670),s=n(26297),i=n(52322),c=(n(99021),n(98333)),u=n(82735),a=n(43798),l=n(12496),d=n(32577),p=n(6621),f=n(12938),h=n(61342),m=n(2784);const v=m.forwardRef(((e,t)=>{var{__scopePopover:n}=e,r=(0,s.Z)(e,["__scopePopover"]);const c=(0,d.bh)(n),u=(0,p.GK)("PopperContent",c.__scopePopper);return(0,i.jsx)(d.yk,(0,o.Z)({disableRemoveScroll:!0,trapFocus:!1,padding:r.size||u.size||"$2",componentName:"TooltipContent",pointerEvents:"none",ref:t},r))})),b=m.forwardRef(((e,t)=>(0,i.jsx)(d.QH,(0,o.Z)({componentName:"TooltipArrow",ref:t},e)))),g=c.e0,x=(0,u.$)((e=>{const{__scopePopover:t,children:n,restMs:u=500,delay:h,onOpenChange:v}=e,b=(0,s.Z)(e,["__scopePopover","children","restMs","delay","onOpenChange"]),g=(0,d.bh)(t),x=m.useRef(null),[y,k]=m.useState(!1),{delay:C,setCurrentId:w}=(0,c.tj)(),E=null!=h?h:C,[_,P]=m.useState(!1),Z=e.groupId,R=(0,a.z)((e=>{P(e),e&&w(Z),null==v||v(e)})),j=m.useCallback((e=>{const t=(0,c.YF)((0,r.Z)((0,o.Z)({},e),{open:_,onOpenChange:R})),{getReferenceProps:n,getFloatingProps:s}=(0,c.NI)([(0,c.XI)(t.context,{delay:E,restMs:u}),(0,c.KK)(t.context),(0,c.qs)(t.context,{role:"tooltip"}),(0,c.bQ)(t.context),(0,c.Qu)(t.context,{id:Z})]);return(0,r.Z)((0,o.Z)({},t),{getReferenceProps:n,getFloatingProps:s})}),[Z,E,_]),z=m.useCallback((()=>{}),[P]);return(0,i.jsx)(f.A.Provider,{value:j,children:(0,i.jsx)(p.rD,(0,r.Z)((0,o.Z)({size:"$2"},g,b),{children:(0,i.jsx)(d.s2,{scope:t,contentId:(0,l.M)(),triggerRef:x,open:_,onOpenChange:P,onOpenToggle:z,hasCustomAnchor:y,onCustomAnchorAdd:m.useCallback((()=>k(!0)),[]),onCustomAnchorRemove:m.useCallback((()=>k(!1)),[]),children:n})}))})}),{Anchor:d.tW,Arrow:b,Content:v,Trigger:d.xo});x.displayName="Tooltip";const y=e=>{var{label:t,children:n,contentProps:u}=e,a=(0,s.Z)(e,["label","children","contentProps"]);let l;try{l=(0,c.tj)()}catch(p){}const d=(0,i.jsxs)(x,(0,r.Z)((0,o.Z)({},a),{children:[(0,i.jsx)(x.Trigger,{asChild:!0,children:n}),(0,i.jsxs)(x.Content,(0,r.Z)((0,o.Z)({enterStyle:{x:0,y:-10,opacity:0,scale:.9},exitStyle:{x:0,y:-10,opacity:0,scale:.9},x:0,scale:1,y:0,elevation:"$1",opacity:1,animation:["bouncy",{opacity:{overshootClamping:!0}}]},u),{children:[(0,i.jsx)(x.Arrow,{}),(0,i.jsx)(h.n,{size:"$2",lineHeight:"$1",children:t})]}))]}));return l?d:(0,i.jsx)(g,{delay:{open:3e3,close:100},children:d})}},47138:function(e,t,n){"use strict";n.d(t,{T:function(){return s}});var o=n(43798),r=n(2784);function s(e){let{prop:t,defaultProp:n,onChange:s,strategy:c="prop-wins",preventUpdate:u}=e;const a=(0,r.useRef)(t),{0:l,1:d}=(0,r.useState)(null!=t?t:n),p="prop-wins"===c;return a.current===t||u||(a.current=t,d((e=>i(e,t,s)))),[l,(0,o.z)((e=>{u||(p&&void 0!==a.current?null==s||s(e):d((t=>i(t,"function"===typeof e?e(t):e,s))))}))]}const i=(e,t,n)=>e===t||void 0===t?e:(null==n||n(t),t)},43798:function(e,t,n){"use strict";n.d(t,{z:function(){return i},X:function(){return s}});var o=n(2784);const r=o.useLayoutEffect;function s(e,t,n){const s=(0,o.useRef)(null!=t?t:e);return r((()=>{s.current=e})),(0,o.useCallback)(n?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o;return null==(o=s.current)?void 0:o.apply(null,t)}:()=>s.current,[])}function i(e){return s(e,c,!0)}const c=()=>{throw new Error("Cannot call an event handler while rendering.")}},61125:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var o=n(77650);function r(e){const t=(0,o.iE)().shorthands;if(!t)return e;let n={};for(const o in e)n[t[o]||o]=e[o];return n}},9303:function(e,t,n){"use strict";n.d(t,{C:function(){return s},a:function(){return r}});var o=n(77650);const r=(e,t=0,n=[0])=>s((0,o.lz)().size,e,t,n),s=(e,t,n=0,o=[0])=>{const r=Object.keys(e),s=`$${+(("string"===typeof t?t.replace("$",""):t)||"4")+n}`,i=o[0]??0,c=o[1]??r.length-1,u=Math.min(c,Math.max(i,r.indexOf(s)));return e[r[u]]||e.$4}},37314:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var o=n(9303);const r=(e,{tokens:t})=>{if("number"===typeof e)return{paddingHorizontal:.25*e,height:e,borderRadius:.2*e};const n=(0,o.a)(e,0);return{paddingHorizontal:(0,o.C)(t.space,e),height:n,borderRadius:t.radius[e]??t.radius.$4}}},63035:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var o=n(2784),r=n(36475),s=n(83715);function i(e,t){const n=(0,o.forwardRef)((function(n,i){const{themeInverse:c,theme:u,...a}=n,l=o.createElement(e,{...a,ref:i});return c?o.createElement(s.f,null,l):u||t?o.createElement(r.Q,{componentName:null==t?void 0:t.componentName,name:u||null},l):l}));return n.displayName=`Themed(${(null==e?void 0:e.displayName)||(null==e?void 0:e.name)||"Anonymous"})`,n}},82735:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});const o=function(e,t){return Object.assign(e,t),e}},11193:function(e,t,n){"use strict";n.d(t,{composeEventHandlers:function(){return r.composeEventHandlers}});var o=n(8135);n.o(o,"composeEventHandlers")&&n.d(t,{composeEventHandlers:function(){return o.composeEventHandlers}});n(90243),n(43798);var r=n(29688)},8135:function(){},83715:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var o=n(2784),r=n(54503),s=n(61958),i=n(36475);let c={light:"dark",dark:"light"};const u=e=>{const t=(0,s.Cg)(),n=(0,s.YC)(),[u,a]=(0,o.useState)(null);return(0,r.LI)((()=>{a(c[t]||c[n||""]||null)}),[n,t]),o.createElement(i.Q,{name:u},e.children)}},2655:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var o=n(2784),r=n(70810),s=n(74479);const i=e=>{const{color:t="black",size:n=24,...s}=e;return o.createElement(r.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s},o.createElement(r.UL,{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"8",y1:"21",x2:"16",y2:"21",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"12",y1:"17",x2:"12",y2:"21",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};i.displayName="Monitor";const c=(0,o.memo)((0,s.H)(i))},75200:function(e,t,n){"use strict";n.d(t,{J:function(){return c}});var o=n(2784),r=n(70810),s=n(74479);const i=e=>{const{color:t="black",size:n=24,...s}=e;return o.createElement(r.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s},o.createElement(r.y$,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};i.displayName="Moon";const c=(0,o.memo)((0,s.H)(i))},91977:function(e,t,n){"use strict";n.d(t,{o:function(){return c}});var o=n(2784),r=n(70810),s=n(74479);const i=e=>{const{color:t="black",size:n=24,...s}=e;return o.createElement(r.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s},o.createElement(r.Cd,{cx:"11",cy:"11",r:"8",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"21",y1:"21",x2:"16.65",y2:"16.65",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};i.displayName="Search";const c=(0,o.memo)((0,s.H)(i))},79733:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var o=n(2784),r=n(70810),s=n(74479);const i=e=>{const{color:t="black",size:n=24,...s}=e;return o.createElement(r.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s},o.createElement(r.Cd,{cx:"12",cy:"12",r:"5",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"12",y1:"1",x2:"12",y2:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"12",y1:"21",x2:"12",y2:"23",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"1",y1:"12",x2:"3",y2:"12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"21",y1:"12",x2:"23",y2:"12",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};i.displayName="Sun";const c=(0,o.memo)((0,s.H)(i))},68110:function(e,t,n){"use strict";n.d(t,{V:function(){return c}});var o=n(2784),r=n(70810),s=n(74479);const i=e=>{const{color:t="black",size:n=24,...s}=e;return o.createElement(r.ny,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...s},o.createElement(r.y$,{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement(r.x1,{x1:"7",y1:"7",x2:"7.01",y2:"7",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};i.displayName="Tag";const c=(0,o.memo)((0,s.H)(i))},74479:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var o=n(61958),r=n(2784);function s(e){return t=>{const n=(0,o.Fg)(),s=t.color||(t.disableTheme?null:n.color)||"#000";return r.createElement(e,{...t,color:s})}}}}]);