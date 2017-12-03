function _setState(t,e){var n=_buildClass(t,e),i=Page.$html.attr("class").split(/\s+/).filter(function(e){return e.indexOf(t)>-1}).pop();return Page.$html.removeClass(i).addClass(n),"slide"===t&&(Page.slide=e),Page}function _toggleState(t,e){var n=_buildClass(t,e);return Page.$html.toggleClass(n),Page}function _delState(t,e){var n=_buildClass(t,e);return Page.$html.removeClass(n),Page}function _hasState(t,e){var n=_buildClass(t,e);return Page.$html.hasClass(n)}function _buildClass(t,e){return["page",t,e].filter(Boolean).join("_")}var WheelIndicator=function(t,e){function n(t){this._options=u(l,t),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var e=this;this._wheelHandler=function(t){e._isWorking&&(o.call(e,t),e._options.preventMouse&&r(t))},a(this._options.elem,h,this._wheelHandler)}function i(t){t.direction=this._direction,this._options.callback.call(this,t)}function r(e){(e=e||t.event).preventDefault?e.preventDefault():e.returnValue=!1}function o(t){var e=this,n=p(t);if(0!==n){var r,o=n>0?"down":"up",a=e._deltaArray.length,c=!1,u=0;for(clearTimeout(e._timer),e._timer=setTimeout(function(){e._deltaArray=[0,0,0],e._isStopped=!0,e._direction=o},150),r=0;r<a;r++)0!==e._deltaArray[r]&&(e._deltaArray[r]>0?++u:--u);Math.abs(u)===a&&(u>0?"down":"up")!==e._direction&&(c=!0,e._direction=o),e._isStopped||(c?(e._isAcceleration=!0,i.call(this,t)):Math.abs(u)===a&&s.call(this,t)),e._isStopped&&(e._isStopped=!1,e._isAcceleration=!0,e._direction=o,i.call(this,t)),e._deltaArray.shift(),e._deltaArray.push(n)}}function s(t){var e=Math.abs(this._deltaArray[0]),n=Math.abs(this._deltaArray[1]),r=Math.abs(this._deltaArray[2]),o=Math.abs(p(t));o>r&&r>n&&n>e&&(this._isAcceleration||(i.call(this,t),this._isAcceleration=!0)),o<r&&r<=n&&(this._isAcceleration=!1)}function a(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&t.detachEvent("on"+e,n)}function u(t,e){var n,i={};for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}var h="onwheel"in e?"wheel":"mousewheel",l={callback:function(){},elem:e,preventMouse:!0};n.prototype={constructor:n,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(t){return this._options=u(this._options,t),this},getOption:function(t){var e=this._options[t];if(void 0!==e)return e;throw new Error("Unknown option")},destroy:function(){return c(this._options.elem,h,this._wheelHandler),this}};var p=function(t){return(p=t.wheelDelta&&!t.deltaY?function(t){return-1*t.wheelDelta}:function(t){return t.deltaY})(t)};return n}(window,document);"object"==typeof exports&&(module.exports=WheelIndicator),function(t,e,n,i){"use strict";function r(t,e,n){return setTimeout(u(t,n),e)}function o(t,e,n){return!!Array.isArray(t)&&(s(t,n[e],n),!0)}function s(t,e,n){var r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==i)for(r=0;r<t.length;)e.call(n,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)}function a(e,n,i){var r="DEPRECATED METHOD: "+n+"\n"+i+" AT \n";return function(){var n=new Error("get-stack-trace"),i=n&&n.stack?n.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=t.console&&(t.console.warn||t.console.log);return o&&o.call(t.console,r,i),e.apply(this,arguments)}}function c(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&ht(i,n)}function u(t,e){return function(){return t.apply(e,arguments)}}function h(t,e){return typeof t==dt?t.apply(e?e[0]||i:i,e):t}function l(t,e){return t===i?e:t}function p(t,e,n){s(m(e),function(e){t.addEventListener(e,n,!1)})}function d(t,e,n){s(m(e),function(e){t.removeEventListener(e,n,!1)})}function f(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function v(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function g(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function y(t){return Array.prototype.slice.call(t,0)}function _(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];g(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function T(t,e){for(var n,r,o=e[0].toUpperCase()+e.slice(1),s=0;s<lt.length;){if(n=lt[s],(r=n?n+o:e)in t)return r;s++}return i}function E(){return _t++}function w(e){var n=e.ownerDocument||e;return n.defaultView||n.parentWindow||t}function I(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){h(t.options.enable,[t])&&n.handler(e)},this.init()}function C(t){var e=t.options.inputClass;return new(e||(Et?H:wt?q:Tt?X:M))(t,b)}function b(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Pt&&i-r==0,s=e&(At|St)&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,P(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function P(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=S(e)),r>1&&!n.firstMultiple?n.firstMultiple=S(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,c=e.center=$(i);e.timeStamp=mt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=R(a,c),e.distance=z(a,c),x(n,e),e.offsetDirection=O(e.deltaX,e.deltaY);var u=D(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=vt(u.x)>vt(u.y)?u.x:u.y,e.scale=s?N(s.pointers,i):1,e.rotation=s?k(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,A(n,e);var h=t.element;f(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function x(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Pt&&o.eventType!==At||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function A(t,e){var n,r,o,s,a=t.lastInterval||e,c=e.timeStamp-a.timeStamp;if(e.eventType!=St&&(c>bt||a.velocity===i)){var u=e.deltaX-a.deltaX,h=e.deltaY-a.deltaY,l=D(c,u,h);r=l.x,o=l.y,n=vt(l.x)>vt(l.y)?l.x:l.y,s=O(u,h),t.lastInterval=e}else n=a.velocity,r=a.velocityX,o=a.velocityY,s=a.direction;e.velocity=n,e.velocityX=r,e.velocityY=o,e.direction=s}function S(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:ft(t.pointers[n].clientX),clientY:ft(t.pointers[n].clientY)},n++;return{timeStamp:mt(),pointers:e,center:$(e),deltaX:t.deltaX,deltaY:t.deltaY}}function $(t){var e=t.length;if(1===e)return{x:ft(t[0].clientX),y:ft(t[0].clientY)};for(var n=0,i=0,r=0;e>r;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:ft(n/e),y:ft(i/e)}}function D(t,e,n){return{x:e/t||0,y:n/t||0}}function O(t,e){return t===e?$t:vt(t)>=vt(e)?0>t?Dt:Ot:0>e?zt:Rt}function z(t,e,n){n||(n=Ht);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function R(t,e,n){n||(n=Ht);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function k(t,e){return R(e[1],e[0],Wt)+R(t[1],t[0],Wt)}function N(t,e){return z(e[0],e[1],Wt)/z(t[0],t[1],Wt)}function M(){this.evEl=qt,this.evWin=Lt,this.pressed=!1,I.apply(this,arguments)}function H(){this.evEl=jt,this.evWin=Ut,I.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function W(){this.evTarget=Gt,this.evWin=Zt,this.started=!1,I.apply(this,arguments)}function Y(t,e){var n=y(t.touches),i=y(t.changedTouches);return e&(At|St)&&(n=_(n.concat(i),"identifier",!0)),[n,i]}function q(){this.evTarget=Jt,this.targetIds={},I.apply(this,arguments)}function L(t,e){var n=y(t.touches),i=this.targetIds;if(e&(Pt|xt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=y(t.changedTouches),a=[],c=this.target;if(o=n.filter(function(t){return f(t.target,c)}),e===Pt)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(At|St)&&delete i[s[r].identifier],r++;return a.length?[_(o.concat(a),"identifier",!0),a]:void 0}function X(){I.apply(this,arguments);var t=u(this.handler,this);this.touch=new q(this.manager,t),this.mouse=new M(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function F(t,e){t&Pt?(this.primaryTouch=e.changedPointers[0].identifier,j.call(this,e)):t&(At|St)&&j.call(this,e)}function j(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)},Kt)}}function U(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(Qt>=o&&Qt>=s)return!0}return!1}function V(t,e){this.manager=t,this.set(e)}function G(t){if(v(t,oe))return oe;var e=v(t,se),n=v(t,ae);return e&&n?oe:e||n?e?se:ae:v(t,re)?re:ie}function Z(t){this.options=ht({},this.defaults,t||{}),this.id=E(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=ue,this.simultaneous={},this.requireFail=[]}function B(t){return t&fe?"cancel":t&pe?"end":t&le?"move":t&he?"start":""}function J(t){return t==Rt?"down":t==zt?"up":t==Dt?"left":t==Ot?"right":""}function K(t,e){var n=e.manager;return n?n.get(t):t}function Q(){Z.apply(this,arguments)}function tt(){Q.apply(this,arguments),this.pX=null,this.pY=null}function et(){Q.apply(this,arguments)}function nt(){Z.apply(this,arguments),this._timer=null,this._input=null}function it(){Q.apply(this,arguments)}function rt(){Q.apply(this,arguments)}function ot(){Z.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(t,e){return e=e||{},e.recognizers=l(e.recognizers,st.defaults.preset),new at(t,e)}function at(t,e){this.options=ht({},st.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=C(this),this.touchAction=new V(this,this.options.touchAction),ct(this,!0),s(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ct(t,e){var n=t.element;if(n.style){var i;s(t.options.cssProps,function(r,o){i=T(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function ut(t,n){var i=e.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n,n.target.dispatchEvent(i)}var ht,lt=["","webkit","Moz","MS","ms","o"],pt=e.createElement("div"),dt="function",ft=Math.round,vt=Math.abs,mt=Date.now;ht="function"!=typeof Object.assign?function(t){if(t===i||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(r!==i&&null!==r)for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])}return e}:Object.assign;var gt=a(function(t,e,n){for(var r=Object.keys(e),o=0;o<r.length;)(!n||n&&t[r[o]]===i)&&(t[r[o]]=e[r[o]]),o++;return t},"extend","Use `assign`."),yt=a(function(t,e){return gt(t,e,!0)},"merge","Use `assign`."),_t=1,Tt="ontouchstart"in t,Et=T(t,"PointerEvent")!==i,wt=Tt&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),It="touch",Ct="mouse",bt=25,Pt=1,xt=2,At=4,St=8,$t=1,Dt=2,Ot=4,zt=8,Rt=16,kt=Dt|Ot,Nt=zt|Rt,Mt=kt|Nt,Ht=["x","y"],Wt=["clientX","clientY"];I.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(w(this.element),this.evWin,this.domHandler)}};var Yt={mousedown:Pt,mousemove:xt,mouseup:At},qt="mousedown",Lt="mousemove mouseup";c(M,I,{handler:function(t){var e=Yt[t.type];e&Pt&&0===t.button&&(this.pressed=!0),e&xt&&1!==t.which&&(e=At),this.pressed&&(e&At&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Ct,srcEvent:t}))}});var Xt={pointerdown:Pt,pointermove:xt,pointerup:At,pointercancel:St,pointerout:St},Ft={2:It,3:"pen",4:Ct,5:"kinect"},jt="pointerdown",Ut="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(jt="MSPointerDown",Ut="MSPointerMove MSPointerUp MSPointerCancel"),c(H,I,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=Xt[i],o=Ft[t.pointerType]||t.pointerType,s=o==It,a=g(e,t.pointerId,"pointerId");r&Pt&&(0===t.button||s)?0>a&&(e.push(t),a=e.length-1):r&(At|St)&&(n=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var Vt={touchstart:Pt,touchmove:xt,touchend:At,touchcancel:St},Gt="touchstart",Zt="touchstart touchmove touchend touchcancel";c(W,I,{handler:function(t){var e=Vt[t.type];if(e===Pt&&(this.started=!0),this.started){var n=Y.call(this,t,e);e&(At|St)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}}});var Bt={touchstart:Pt,touchmove:xt,touchend:At,touchcancel:St},Jt="touchstart touchmove touchend touchcancel";c(q,I,{handler:function(t){var e=Bt[t.type],n=L.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:It,srcEvent:t})}});var Kt=2500,Qt=25;c(X,I,{handler:function(t,e,n){var i=n.pointerType==It,r=n.pointerType==Ct;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)F.call(this,e,n);else if(r&&U.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var te=T(pt.style,"touchAction"),ee=te!==i,ne="compute",ie="auto",re="manipulation",oe="none",se="pan-x",ae="pan-y",ce=function(){if(!ee)return!1;var e={},n=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){e[i]=!n||t.CSS.supports("touch-action",i)}),e}();V.prototype={set:function(t){t==ne&&(t=this.compute()),ee&&this.manager.element.style&&ce[t]&&(this.manager.element.style[te]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return s(this.manager.recognizers,function(e){h(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),G(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;{if(!this.manager.session.prevented){var i=this.actions,r=v(i,oe)&&!ce[oe],o=v(i,ae)&&!ce[ae],s=v(i,se)&&!ce[se];if(r){var a=1===t.pointers.length,c=t.distance<2,u=t.deltaTime<250;if(a&&c&&u)return}return s&&o?void 0:r||o&&n&kt||s&&n&Nt?this.preventSrc(e):void 0}e.preventDefault()}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ue=1,he=2,le=4,pe=8,de=pe,fe=16;Z.prototype={defaults:{},set:function(t){return ht(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(o(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=K(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=K(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requireFailure",this))return this;var e=this.requireFail;return t=K(t,this),-1===g(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=K(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;pe>i&&e(n.options.event+B(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=pe&&e(n.options.event+B(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ue)))return!1;t++}return!0},recognize:function(t){var e=ht({},t);return h(this.options.enable,[this,e])?(this.state&(de|fe|32)&&(this.state=ue),this.state=this.process(e),void(this.state&(he|le|pe|fe)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},c(Q,Z,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(he|le),r=this.attrTest(t);return i&&(n&St||!r)?e|fe:i||r?n&At?e|pe:e&he?e|le:he:32}}),c(tt,Q,{defaults:{event:"pan",threshold:10,pointers:1,direction:Mt},getTouchAction:function(){var t=this.options.direction,e=[];return t&kt&&e.push(ae),t&Nt&&e.push(se),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&kt?(r=0===o?$t:0>o?Dt:Ot,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?$t:0>s?zt:Rt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Q.prototype.attrTest.call(this,t)&&(this.state&he||!(this.state&he)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=J(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),c(et,Q,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[oe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&he)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),c(nt,Z,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ie]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(At|St)&&!o)this.reset();else if(t.eventType&Pt)this.reset(),this._timer=r(function(){this.state=de,this.tryEmit()},e.time,this);else if(t.eventType&At)return de;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===de&&(t&&t.eventType&At?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=mt(),this.manager.emit(this.options.event,this._input)))}}),c(it,Q,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[oe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&he)}}),c(rt,Q,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:kt|Nt,pointers:1},getTouchAction:function(){return tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(kt|Nt)?e=t.overallVelocity:n&kt?e=t.overallVelocityX:n&Nt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&vt(e)>this.options.velocity&&t.eventType&At},emit:function(t){var e=J(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(ot,Z,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[re]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&Pt&&0===this.count)return this.failTimeout();if(i&&o&&n){if(t.eventType!=At)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||z(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=r(function(){this.state=de,this.tryEmit()},e.interval,this),he):de}return 32},failTimeout:function(){return this._timer=r(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==de&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.8",st.defaults={domEvents:!1,touchAction:ne,enable:!0,inputTarget:null,inputClass:null,preset:[[it,{enable:!1}],[et,{enable:!1},["rotate"]],[rt,{direction:kt}],[tt,{direction:kt},["swipe"]],[ot],[ot,{event:"doubletap",taps:2},["tap"]],[nt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return ht(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&de)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(he|le|pe)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Z)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(o(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=g(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==i&&e!==i){var n=this.handlers;return s(m(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==i){var n=this.handlers;return s(m(t),function(t){e?n[t]&&n[t].splice(g(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&ut(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ct(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ht(st,{INPUT_START:Pt,INPUT_MOVE:xt,INPUT_END:At,INPUT_CANCEL:St,STATE_POSSIBLE:ue,STATE_BEGAN:he,STATE_CHANGED:le,STATE_ENDED:pe,STATE_RECOGNIZED:de,STATE_CANCELLED:fe,STATE_FAILED:32,DIRECTION_NONE:$t,DIRECTION_LEFT:Dt,DIRECTION_RIGHT:Ot,DIRECTION_UP:zt,DIRECTION_DOWN:Rt,DIRECTION_HORIZONTAL:kt,DIRECTION_VERTICAL:Nt,DIRECTION_ALL:Mt,Manager:at,Input:I,TouchAction:V,TouchInput:q,MouseInput:M,PointerEventInput:H,TouchMouseInput:X,SingleTouchInput:W,Recognizer:Z,AttrRecognizer:Q,Tap:ot,Pan:tt,Swipe:rt,Pinch:et,Rotate:it,Press:nt,on:p,off:d,each:s,merge:yt,extend:gt,assign:ht,inherit:c,bindFn:u,prefixed:T}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=st,"function"==typeof define&&define.amd?define(function(){return st}):"undefined"!=typeof module&&module.exports?module.exports=st:t.Hammer=st}(window,document);var Page={$win:$(window),$doc:$(document),$html:$("html"),$body:$("body"),setState:_setState,toggleState:_toggleState,delState:_delState,hasState:_hasState};window.ontouchstart||navigator.maxTouchPoints||Page.setState("hoverable"),window.devicePixelRatio>1.5&&Page.setState("hidpi"),window.onhashchange=function(t){t.preventDefault()},Page.$html.on("slider.vertical slider.horizontal",function(t,e){Page.setState("slide",e.id).setState("type","dark"===e.type?"none":"dark").setState("logo","collections"===e.id?"no":"yes")}).on("menu",function(t){switch(t.namespace){case"show":return Page.setState("menu");case"click":case"hide":return Page.delState("menu")}}).on("dragstart",'[draggable="false"]',function(t){t.preventDefault()}),$(".achievements, .history").each(function(){function t(){p.eq(0).prop("disabled",0===m).end().eq(1).prop("disabled",m===v)}function e(){f=l.eq(0).innerWidth(),i(m,!0)}function n(t){var e=m+t;e<=v&&e>=0&&i(e)}function i(e,n){var i=(m=e)*f,a=n?0:d;h.stop().animate({scrollLeft:i},a),t(),r(),o(),s()}function r(){l.removeClass("horizontal-slide_current").eq(m).addClass("horizontal-slide_current")}function o(){var t=l.eq(m).data("type");u["dark"===t?"addClass":"removeClass"]("horizontal-slider__type_dark")}function s(){Page.$html.trigger("slider.horizontal",{id:g,type:l.eq(m).data("type"),index:m})}function a(){Page.slide===g&&s()}function c(t,e){e.id===g&&i(e.index)}var u=$(this),h=u.find(".horizontal-slider__list-wrapper"),l=h.find(".horizontal-slide"),p=u.find(".arrow-button"),d=500,f=l.eq(0).innerWidth(),v=l.length-1,m=-1,g=u.data("id");i(0),p.on("click",function(t){n($(t.target).closest(".arrow-button").hasClass("arrow-button_next")?1:-1)}),Page.$win.on("resize",e).on("slider.vertical",a).on("timeline.click",c),function(){var t=new Hammer(u[0]);t.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL}),t.on("swipe",function(t){switch(t.direction){case Hammer.DIRECTION_RIGHT:return n(-1);case Hammer.DIRECTION_LEFT:return n(1)}})}()}),$(".header").each(function(){var t=$(this).find(".nav__link");Page.$html.on("slider.vertical",function(e,n){location.hash=n.id,t.removeClass("nav__link_current").filter("[href*="+n.id+"]").addClass("nav__link_current")}).on("click",".nav__link",function(){var t=this.href.split("#")[1];Page.$win.trigger("menu.click",t)})}),$(".philosophy .horizontal-slider").each(function(){function t(t){var r=l+t;r>h?(e(0,!0),r=1):r<0&&(e(h,!0),r=h-1),e(l=r),n(),i(l===h?0:l)}function e(t,e){var n=t*u,i=e?0:c;o.animate({scrollLeft:n},i)}function n(){o.find(".horizontal-slide_current").removeClass("horizontal-slide_current")}function i(t){o.find(".horizontal-slide[data-id="+t+"]").addClass("horizontal-slide_current")}var r=$(this),o=r.find(".horizontal-slider__list-wrapper"),s=o.find(".horizontal-slide").map(function(t){return this.dataset.id=t,this}),a=s.eq(0).clone();o.find(".horizontal-slider__list").append(a);var c=500,u=o.eq(0).width(),h=s.length,l=0;r.on("click",".arrow-button",function(e){o.is(":animated")||t($(e.target).hasClass("arrow-button_next")?1:-1)}),$(window).on("resize",function(){u=o.eq(0).width(),e(l,!0)}),function(){var e=new Hammer(r[0]);e.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL}),e.on("swipe",function(e){switch(e.direction){case Hammer.DIRECTION_RIGHT:return t(-1);case Hammer.DIRECTION_LEFT:return t(1)}})}()}),$(".timeline").each(function(){function t(t){return t+" "+["диплом","диплома","дипломов"][t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function e(t,e){return t+1+"/"+e+" дипломов"}function n(t){t.$dom.addClass("timeline__item_current"),t.$text.html(t.currentText||t.text)}function i(t,e){for(var n=t;n>=0;--n){var i=c[n];if(e.$dom!==i.$dom){i.$text.html(i.text),i.$dom.addClass("timeline__item_prev");break}}}function r(t,e){for(var n=t;n<c.length;++n){var i=c[n];if(e.$dom!==i.$dom){i.$text.html(i.text);break}}}var o=$(this),s=o.data("id"),a=o.find(".timeline__item"),c=function(){var n=[];return a.each(function(){var i=$(this),r=i.find(".timeline__text"),o=i.data("count"),s={$dom:i,$text:r};if(s.$dom.data("index",n.length),!o)return s.text=s.$text.html(),n.push(s);for(var a=0;a<o;a+=1)(s=$.extend({},s,{text:t(o),currentText:e(a,o)})).$text.html(s.text),n.push(s)}),n}();Page.$win.on("slider.horizontal",function(t,e){if(e.id===s&&"number"==typeof e.index){a.removeClass("timeline__item_current timeline__item_prev");var o=c[e.index];n(o),i(e.index,o),r(e.index,o)}}),o.on("click",".timeline__item",function(){console.log($(this).data("index")),Page.$html.trigger("timeline.click",{id:s,index:$(this).data("index")})})}),$(".vertical-slider").each(function(){function t(){h=s.height(),o(l,!0)}function e(t,e){var i=Page.hasState("menu");o(n(e),i)}function n(t){for(var e=0;e<d.length;e+=1)if(d[e].id===t)return e;return-1}function i(t){var e=r(t);l!==e&&o(l=e)}function r(t){var e=l+t;return e<0||e>p?l:e}function o(t,e){if(!c){c=!0;var n=(l=t)*h,i=e?0:u;s.animate({scrollTop:n},i,function(){c=!1}),Page.$html.trigger("slider.vertical",d[l])}}var s=$(this),a=s.find(".vertical-slide"),c=!1,u=500,h=s.height(),l=-1,p=a.length-1,d=a.toArray().map(function(t){return{id:t.dataset.id,type:t.dataset.type}});!function(){var t=n(location.hash.slice(1));o(t>-1?t:0,!0)}(),Page.$win.on("resize",t).on("menu.click",e),new WheelIndicator({elem:s[0],callback:function(t){i("up"===t.direction?-1:1)}}),function(){var t=new Hammer(s[0]);t.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),t.on("swipe",function(t){switch(t.direction){case Hammer.DIRECTION_DOWN:return i(-1);case Hammer.DIRECTION_UP:return i(1)}})}()});