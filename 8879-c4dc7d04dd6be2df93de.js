(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[8879],{10234:(e,n,t)=>{"use strict";t.d(n,{Lt:()=>v,wZ:()=>m,TU:()=>f,Nv:()=>y,ir:()=>x});var i=t(59312),s=t(24246),r=t(60042),l=t.n(r),o=t(27378),u=t(80499),d=t(84042),a=t(673),p=t(28425),c=t(36831),h=t(65385),v=function(e){var n=e.cushion,t=void 0===n?4:n,r=e.visible,d=void 0!==r&&r,a=e.onVisibleChange,p=e.className,v=(0,i._T)(e,["cushion","visible","onVisibleChange","className"]),m=(0,o.useState)(d),f=m[0],y=m[1],x=(0,c.W)(a),C=(0,o.useCallback)((function(e){var n;y(e),null===(n=x.current)||void 0===n||n.call(x,e)}),[x]);return(0,o.useEffect)((function(){y(d)}),[d]),(0,s.jsx)(h.D.Provider,(0,i.pi)({value:f},{children:(0,s.jsx)(u.Z,(0,i.pi)({className:l()(p,"zent-dropdown"),cushion:t,visible:f,onVisibleChange:C},v),void 0)}),void 0)},m=d.Z,f=a.ZP,y=p.Z,x=u.Z.Position},83305:(e,n,t)=>{"use strict";t.d(n,{P:()=>a});var i=t(59312),s=t(24246),r=t(60042),l=t.n(r),o=t(96681),u=t(27036),d=t(65385),a=function(e){var n=e.className,t=e.children,r=(0,i._T)(e,["className","children"]);return(0,s.jsx)(d.D.Consumer,{children:function(e){return(0,s.jsxs)(o.z,(0,i.pi)({className:l()(n,"zent-dropdown-button",{"zent-dropdown-button--active":e})},r,{children:[t,(0,s.jsx)(u.Z,{type:"down"},void 0)]}),void 0)}},void 0)}},65385:(e,n,t)=>{"use strict";t.d(n,{D:()=>i});var i=(0,t(27378).createContext)(!1)},5716:(e,n,t)=>{"use strict";t.d(n,{v:()=>x,Z:()=>C});var i=t(59312),s=t(24246),r=t(60042),l=t.n(r),o=t(27378),u=t(17949),d=t(42690);function a(e,n,t){return void 0===t&&(t="item"),e.key||t+"_"+n}function p(e){var n=e.isInline,t=e.depth,i=e.inlineIndent,s={};return n&&(s={paddingLeft:t*i+"px"}),s}var c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return(0,i.ZT)(n,e),n.prototype.renderCommonMenuItem=function(e,n,t,s){var r=(0,i.pi)({specKey:a(e,n,t),onClick:this.handleClick},s);return(0,o.cloneElement)(e,r)},n}(o.PureComponent),h=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleClick=function(e){var t=n.props,i=t.specKey,s=t.onClick,r=t.disabled,l=t.isInline,o=t.handleSelect;r||(l&&o(i),s(e,i))},n}return(0,i.ZT)(n,e),n.prototype.render=function(){var e=this.props,n=e.specKey,t=e.className,r=e.children,o=e.disabled,u=e.isInline,d=e.selectedKey===n,a=p({isInline:u,depth:e.depth,inlineIndent:e.inlineIndent});return(0,s.jsx)("li",(0,i.pi)({className:l()("zent-menu-item",t,{"zent-menu__inline-item":u,"zent-menu__inline-item-selected":d,"zent-menu-item-disabled":o}),style:a,onClick:this.handleClick,"data-zv":"9.10.0"},{children:r}),void 0)},n}(o.Component),v=t(27036),m=t(79737),f=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleClick=function(e,t){(0,n.props.onClick)(e,t)},n.onSubMenuClick=function(){n.props.onSubMenuClick&&n.props.onSubMenuClick(n.props.specKey)},n.renderSubMenuItems=function(e,t){if(!e)return null;var i=n.props.specKey;return n.renderCommonMenuItem(e,t,i)},n}return(0,i.ZT)(n,e),n.prototype.render=function(){var e=this.props,n=e.children,t=e.visible,r=e.overlayCx;return t?(0,s.jsx)("ul",(0,i.pi)({className:l()("zent-menu","zent-submenu-content",r),onClick:this.onSubMenuClick,"data-zv":"9.10.0"},{children:o.Children.map(n,this.renderSubMenuItems)}),void 0):null},n}(c),y=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={subMenuVisible:!1},n.getEventHanders=function(e,t){var i={};return e||t||(i={onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave}),i},n.handleClick=function(e,t){var i=n.props,s=i.onClick;!i.isInline&&n.setState({subMenuVisible:!1}),s(e,t)},n.titleClickHandler=function(e){var t,i,s=n.props,r=s.isInline,l=s.specKey,o=s.toggleExpand;null===(i=(t=n.props).onSubMenuClick)||void 0===i||i.call(t,l),r&&o(l),e.stopPropagation()},n.onMouseEnter=function(){n.leaveTimer&&clearTimeout(n.leaveTimer),n.enterTimer=setTimeout((function(){n.setState({subMenuVisible:!0})}),200)},n.onMouseLeave=function(){n.enterTimer&&clearTimeout(n.enterTimer),n.leaveTimer=setTimeout((function(){n.setState({subMenuVisible:!1})}),200)},n.renderInlineChild=function(e,t){var i=n.props,s=i.depth,r=i.isInline,l=i.inlineIndent,o=i.selectedKey,u=i.expandKeys,d=i.handleSelect,a=i.toggleExpand,p=i.specKey;return n.renderCommonMenuItem(e,t,p,{depth:s+1,isInline:r,inlineIndent:l,selectedKey:o,expandKeys:u,handleSelect:d,toggleExpand:a,onSubMenuClick:n.props.onSubMenuClick})},n}return(0,i.ZT)(n,e),n.prototype.renderContent=function(){var e=this.props,n=e.children,t=e.specKey,r=e.overlayClassName,l=e.isInline,u=e.expandKeys,d=u&&-1!==u.indexOf(t);return l?(0,s.jsx)(m.H,(0,i.pi)({duration:200,height:d?"auto":0},{children:(0,s.jsx)("ul",(0,i.pi)({className:"zent-menu__inner","data-zv":"9.10.0"},{children:o.Children.map(n,this.renderInlineChild)}),void 0)}),void 0):(0,s.jsx)(f,(0,i.pi)({visible:this.state.subMenuVisible,onClick:this.handleClick,specKey:t,overlayCx:r,onSubMenuClick:this.props.onSubMenuClick},{children:n}),void 0)},n.prototype.render=function(){var e=this.props,n=e.className,t=e.disabled,r=e.title,o=e.isInline,u=e.depth,d=e.inlineIndent,a=e.expandKeys,c=e.specKey,h=a&&-1!==a.indexOf(c),m=this.getEventHanders(t,o),f=p({isInline:o,depth:u,inlineIndent:d}),y=l()(n,{"zent-menu-item":!o,"zent-menu-item-disabled":t,"zent-submenu":!o,"zent-menu__inline-submenu":o,"zent-menu__inline-item-disabled":t&&o});return(0,s.jsxs)("li",(0,i.pi)({className:y},m,{"data-zv":"9.10.0"},{children:[(0,s.jsxs)("div",(0,i.pi)({className:l()({"zent-submenu-title":!o,"zent-menu__inline-submenu-title":o,"zent-submenu-disabled":t}),style:f,onClick:this.titleClickHandler,"data-zv":"9.10.0"},{children:[r,!t&&(0,s.jsx)(v.Z,{className:l()("zent-submenu-title-operate-icon",{"zent-menu__inline-submenu-icon--expand":o&&h}),type:"right"},void 0)]}),void 0),!t&&this.renderContent()]}),void 0)},n.defaultProps={className:""},n}(c),x=function(e){function n(n){var t,s,r,l=e.call(this,n)||this;return l.toggleExpand=function(e){var n,t,s=l.state.expandedKeys,r=-1!==s.indexOf(e)?s.filter((function(n){return n!==e})):(0,i.ev)([e],s);l.setState({expandedKeys:r}),null===(t=(n=l.props).onExpandChange)||void 0===t||t.call(n,r)},l.handleSelect=function(e){var n,t;l.setState({selectedKey:e}),null===(t=(n=l.props).onSelectChange)||void 0===t||t.call(n,e)},l.handleClick=function(e,n){var t=l.props.onClick;t&&t(e,n)},l.renderMenuItem=function(e,n){return e?l.renderCommonMenuItem(e,n,void 0,{depth:1,isInline:"inline"===l.props.mode,inlineIndent:l.props.inlineIndent,selectedKey:l.state.selectedKey,expandKeys:l.state.expandedKeys,handleSelect:l.handleSelect,toggleExpand:l.toggleExpand,onSubMenuClick:l.props.onSubMenuClick}):null},"inline"===n.mode?l.state={selectedKey:null!==(t=n.selectedKey)&&void 0!==t?t:n.defaultSelectedKey,expandedKeys:null!==(r=null!==(s=n.expandedKeys)&&void 0!==s?s:n.defaultExpandedKeys)&&void 0!==r?r:n.defaultExpandKeys,prevExpandedKeysProp:n.expandedKeys,prevSelectedKeyProp:n.selectedKey}:l.state={},l}return(0,i.ZT)(n,e),n.getDerivedStateFromProps=function(e,n){if("inline"!==e.mode)return null;var t={prevSelectedKeyProp:e.selectedKey,prevExpandedKeysProp:e.expandedKeys};return e.selectedKey!==n.prevSelectedKeyProp&&e.selectedKey!==n.selectedKey&&(t.selectedKey=e.selectedKey),(0,u.Z)(e.expandedKeys,n.prevExpandedKeysProp)||(0,u.Z)(e.expandedKeys,n.expandedKeys)||(t.expandedKeys=e.expandedKeys),t},n.prototype.render=function(){var e=this.props,n=e.children,t=e.className,r=e.style,u="inline"===e.mode,d=l()("zent-menu",t,{"zent-menu__inline":u});return(0,s.jsx)("ul",(0,i.pi)({className:d,style:r,"data-zv":"9.10.0"},{children:o.Children.map(n,this.renderMenuItem)}),void 0)},n.MenuItem=h,n.SubMenu=y,n.defaultProps={onClick:d.Z,mode:"pop",inlineIndent:24,defaultExpandKeys:[],onSubMenuClick:d.Z},n}(c),C=x},79737:(e,n,t)=>{"use strict";t.d(n,{H:()=>u});var i=t(59312),s=t(24246),r=t(27378),l=t(17127);function o(e,n){e.style.height="number"==typeof n?n+"px":n}var u=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.ref=(0,r.createRef)(),n.timer=null,n}return(0,i.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props,t=n.appear,i=n.height,s=n.duration,r=this.ref.current;t&&"auto"===i?(r.style.height="0px",(0,l.tA)((function(){e.props.height===i&&(r.style.height=r.offsetHeight+"px",e.timer=setTimeout((function(){e.timer=null,e.props.height===i&&(r.style.height="auto")}),s))}))):o(r,i)},n.prototype.componentDidUpdate=function(e){var n=this,t=this.props,i=t.height,s=t.duration;if(e.height!==i){null!==this.timer&&(clearTimeout(this.timer),this.timer=null);var r=this.ref.current;if("auto"===e.height)r.style.height=r.offsetHeight+"px",(0,l.tA)((function(){n.props.height===i&&o(r,i)}));else if("auto"===i){var u=r.offsetHeight;r.style.height="auto";var d=r.offsetHeight;r.style.height=u+"px",(0,l.tA)((function(){r.style.height=d+"px",n.timer=setTimeout((function(){n.timer=null,n.props.height===i&&(r.style.height=i)}),s)}))}else o(r,i)}},n.prototype.render=function(){var e=this.props,n=e.duration,t=e.className,r=e.style,l=e.easing,o=e.overflow,u=e.children;return(0,s.jsx)("div",(0,i.pi)({ref:this.ref,className:t,style:(0,i.pi)((0,i.pi)({},r),{transition:"height "+n+"ms "+l,overflow:o}),"data-zv":"9.10.0"},{children:u}),void 0)},n.defaultProps={appear:!1,duration:200,easing:"ease",overflow:"hidden"},n}(r.Component)},36831:(e,n,t)=>{"use strict";t.d(n,{W:()=>s});var i=t(27378);function s(e){var n=(0,i.useRef)(e);return n.current=e,n}}}]);