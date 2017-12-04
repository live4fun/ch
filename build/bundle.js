function _setState(t,e){var i=_buildClass(t,e),n=Page.$html.attr("class").split(/\s+/).filter(function(e){return e.indexOf(t)>-1}).pop();return Page.$html.removeClass(n).addClass(i),"slide"===t&&(Page.slide=e),Page}function _toggleState(t,e){var i=_buildClass(t,e);return Page.$html.toggleClass(i),Page}function _delState(t,e){var i=_buildClass(t,e);return Page.$html.removeClass(i),Page}function _hasState(t,e){var i=_buildClass(t,e);return Page.$html.hasClass(i)}function _buildClass(t,e){return["page",t,e].filter(Boolean).join("_")}var WheelIndicator=function(t,e){function i(t){this._options=c(l,t),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var e=this;this._wheelHandler=function(t){e._isWorking&&(o.call(e,t),e._options.preventMouse&&r(t))},a(this._options.elem,u,this._wheelHandler)}function n(t){t.direction=this._direction,this._options.callback.call(this,t)}function r(e){(e=e||t.event).preventDefault?e.preventDefault():e.returnValue=!1}function o(t){var e=this,i=p(t);if(0!==i){var r,o=i>0?"down":"up",a=e._deltaArray.length,h=!1,c=0;for(clearTimeout(e._timer),e._timer=setTimeout(function(){e._deltaArray=[0,0,0],e._isStopped=!0,e._direction=o},150),r=0;r<a;r++)0!==e._deltaArray[r]&&(e._deltaArray[r]>0?++c:--c);Math.abs(c)===a&&(c>0?"down":"up")!==e._direction&&(h=!0,e._direction=o),e._isStopped||(h?(e._isAcceleration=!0,n.call(this,t)):Math.abs(c)===a&&s.call(this,t)),e._isStopped&&(e._isStopped=!1,e._isAcceleration=!0,e._direction=o,n.call(this,t)),e._deltaArray.shift(),e._deltaArray.push(i)}}function s(t){var e=Math.abs(this._deltaArray[0]),i=Math.abs(this._deltaArray[1]),r=Math.abs(this._deltaArray[2]),o=Math.abs(p(t));o>r&&r>i&&i>e&&(this._isAcceleration||(n.call(this,t),this._isAcceleration=!0)),o<r&&r<=i&&(this._isAcceleration=!1)}function a(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)}function h(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i)}function c(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var u="onwheel"in e?"wheel":"mousewheel",l={callback:function(){},elem:e,preventMouse:!0};i.prototype={constructor:i,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(t){return this._options=c(this._options,t),this},getOption:function(t){var e=this._options[t];if(void 0!==e)return e;throw new Error("Unknown option")},destroy:function(){return h(this._options.elem,u,this._wheelHandler),this}};var p=function(t){return(p=t.wheelDelta&&!t.deltaY?function(t){return-1*t.wheelDelta}:function(t){return t.deltaY})(t)};return i}(window,document);"object"==typeof exports&&(module.exports=WheelIndicator),function(t,e,i,n){"use strict";function r(t,e,i){return setTimeout(c(t,i),e)}function o(t,e,i){return!!Array.isArray(t)&&(s(t,i[e],i),!0)}function s(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function a(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=t.console&&(t.console.warn||t.console.log);return o&&o.call(t.console,r,n),e.apply(this,arguments)}}function h(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&ut(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function u(t,e){return typeof t==dt?t.apply(e?e[0]||n:n,e):t}function l(t,e){return t===n?e:t}function p(t,e,i){s(v(e),function(e){t.addEventListener(e,i,!1)})}function d(t,e,i){s(v(e),function(e){t.removeEventListener(e,i,!1)})}function f(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function m(t,e){return t.indexOf(e)>-1}function v(t){return t.trim().split(/\s+/g)}function g(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function y(t){return Array.prototype.slice.call(t,0)}function _(t,e,i){for(var n=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];g(r,s)<0&&n.push(t[o]),r[o]=s,o++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function T(t,e){for(var i,r,o=e[0].toUpperCase()+e.slice(1),s=0;s<lt.length;){if(i=lt[s],(r=i?i+o:e)in t)return r;s++}return n}function E(){return _t++}function w(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}function I(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){u(t.options.enable,[t])&&i.handler(e)},this.init()}function b(t){var e=t.options.inputClass;return new(e||(Et?q:wt?W:Tt?Y:N))(t,C)}function C(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,o=e&xt&&n-r==0,s=e&(Pt|kt)&&n-r==0;i.isFirst=!!o,i.isFinal=!!s,o&&(t.session={}),i.eventType=e,x(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function x(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=k(e)),r>1&&!i.firstMultiple?i.firstMultiple=k(e):1===r&&(i.firstMultiple=!1);var o=i.firstInput,s=i.firstMultiple,a=s?s.center:o.center,h=e.center=S(n);e.timeStamp=vt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=z(a,h),e.distance=$(a,h),A(i,e),e.offsetDirection=O(e.deltaX,e.deltaY);var c=D(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=mt(c.x)>mt(c.y)?c.x:c.y,e.scale=s?R(s.pointers,n):1,e.rotation=s?L(s.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,P(i,e);var u=t.element;f(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function A(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==xt&&o.eventType!==Pt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}function P(t,e){var i,r,o,s,a=t.lastInterval||e,h=e.timeStamp-a.timeStamp;if(e.eventType!=kt&&(h>Ct||a.velocity===n)){var c=e.deltaX-a.deltaX,u=e.deltaY-a.deltaY,l=D(h,c,u);r=l.x,o=l.y,i=mt(l.x)>mt(l.y)?l.x:l.y,s=O(c,u),t.lastInterval=e}else i=a.velocity,r=a.velocityX,o=a.velocityY,s=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=o,e.direction=s}function k(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:ft(t.pointers[i].clientX),clientY:ft(t.pointers[i].clientY)},i++;return{timeStamp:vt(),pointers:e,center:S(e),deltaX:t.deltaX,deltaY:t.deltaY}}function S(t){var e=t.length;if(1===e)return{x:ft(t[0].clientX),y:ft(t[0].clientY)};for(var i=0,n=0,r=0;e>r;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:ft(i/e),y:ft(n/e)}}function D(t,e,i){return{x:e/t||0,y:i/t||0}}function O(t,e){return t===e?St:mt(t)>=mt(e)?0>t?Dt:Ot:0>e?$t:zt}function $(t,e,i){i||(i=qt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function z(t,e,i){i||(i=qt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}function L(t,e){return z(e[1],e[0],Mt)+z(t[1],t[0],Mt)}function R(t,e){return $(e[0],e[1],Mt)/$(t[0],t[1],Mt)}function N(){this.evEl=Wt,this.evWin=jt,this.pressed=!1,I.apply(this,arguments)}function q(){this.evEl=Ft,this.evWin=Bt,I.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function M(){this.evTarget=Vt,this.evWin=Gt,this.started=!1,I.apply(this,arguments)}function H(t,e){var i=y(t.touches),n=y(t.changedTouches);return e&(Pt|kt)&&(i=_(i.concat(n),"identifier",!0)),[i,n]}function W(){this.evTarget=Qt,this.targetIds={},I.apply(this,arguments)}function j(t,e){var i=y(t.touches),n=this.targetIds;if(e&(xt|At)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,o,s=y(t.changedTouches),a=[],h=this.target;if(o=i.filter(function(t){return f(t.target,h)}),e===xt)for(r=0;r<o.length;)n[o[r].identifier]=!0,r++;for(r=0;r<s.length;)n[s[r].identifier]&&a.push(s[r]),e&(Pt|kt)&&delete n[s[r].identifier],r++;return a.length?[_(o.concat(a),"identifier",!0),a]:void 0}function Y(){I.apply(this,arguments);var t=c(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new N(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function X(t,e){t&xt?(this.primaryTouch=e.changedPointers[0].identifier,F.call(this,e)):t&(Pt|kt)&&F.call(this,e)}function F(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},Jt)}}function B(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],o=Math.abs(e-r.x),s=Math.abs(i-r.y);if(Kt>=o&&Kt>=s)return!0}return!1}function U(t,e){this.manager=t,this.set(e)}function V(t){if(m(t,oe))return oe;var e=m(t,se),i=m(t,ae);return e&&i?oe:e||i?e?se:ae:m(t,re)?re:ne}function G(t){this.options=ut({},this.defaults,t||{}),this.id=E(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=ce,this.simultaneous={},this.requireFail=[]}function Z(t){return t&fe?"cancel":t&pe?"end":t&le?"move":t&ue?"start":""}function Q(t){return t==zt?"down":t==$t?"up":t==Dt?"left":t==Ot?"right":""}function J(t,e){var i=e.manager;return i?i.get(t):t}function K(){G.apply(this,arguments)}function tt(){K.apply(this,arguments),this.pX=null,this.pY=null}function et(){K.apply(this,arguments)}function it(){G.apply(this,arguments),this._timer=null,this._input=null}function nt(){K.apply(this,arguments)}function rt(){K.apply(this,arguments)}function ot(){G.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(t,e){return e=e||{},e.recognizers=l(e.recognizers,st.defaults.preset),new at(t,e)}function at(t,e){this.options=ut({},st.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=b(this),this.touchAction=new U(this,this.options.touchAction),ht(this,!0),s(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ht(t,e){var i=t.element;if(i.style){var n;s(t.options.cssProps,function(r,o){n=T(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={})}}function ct(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var ut,lt=["","webkit","Moz","MS","ms","o"],pt=e.createElement("div"),dt="function",ft=Math.round,mt=Math.abs,vt=Date.now;ut="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(r!==n&&null!==r)for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])}return e}:Object.assign;var gt=a(function(t,e,i){for(var r=Object.keys(e),o=0;o<r.length;)(!i||i&&t[r[o]]===n)&&(t[r[o]]=e[r[o]]),o++;return t},"extend","Use `assign`."),yt=a(function(t,e){return gt(t,e,!0)},"merge","Use `assign`."),_t=1,Tt="ontouchstart"in t,Et=T(t,"PointerEvent")!==n,wt=Tt&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),It="touch",bt="mouse",Ct=25,xt=1,At=2,Pt=4,kt=8,St=1,Dt=2,Ot=4,$t=8,zt=16,Lt=Dt|Ot,Rt=$t|zt,Nt=Lt|Rt,qt=["x","y"],Mt=["clientX","clientY"];I.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(w(this.element),this.evWin,this.domHandler)}};var Ht={mousedown:xt,mousemove:At,mouseup:Pt},Wt="mousedown",jt="mousemove mouseup";h(N,I,{handler:function(t){var e=Ht[t.type];e&xt&&0===t.button&&(this.pressed=!0),e&At&&1!==t.which&&(e=Pt),this.pressed&&(e&Pt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:bt,srcEvent:t}))}});var Yt={pointerdown:xt,pointermove:At,pointerup:Pt,pointercancel:kt,pointerout:kt},Xt={2:It,3:"pen",4:bt,5:"kinect"},Ft="pointerdown",Bt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(Ft="MSPointerDown",Bt="MSPointerMove MSPointerUp MSPointerCancel"),h(q,I,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=Yt[n],o=Xt[t.pointerType]||t.pointerType,s=o==It,a=g(e,t.pointerId,"pointerId");r&xt&&(0===t.button||s)?0>a&&(e.push(t),a=e.length-1):r&(Pt|kt)&&(i=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(a,1))}});var Ut={touchstart:xt,touchmove:At,touchend:Pt,touchcancel:kt},Vt="touchstart",Gt="touchstart touchmove touchend touchcancel";h(M,I,{handler:function(t){var e=Ut[t.type];if(e===xt&&(this.started=!0),this.started){var i=H.call(this,t,e);e&(Pt|kt)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:It,srcEvent:t})}}});var Zt={touchstart:xt,touchmove:At,touchend:Pt,touchcancel:kt},Qt="touchstart touchmove touchend touchcancel";h(W,I,{handler:function(t){var e=Zt[t.type],i=j.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:It,srcEvent:t})}});var Jt=2500,Kt=25;h(Y,I,{handler:function(t,e,i){var n=i.pointerType==It,r=i.pointerType==bt;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)X.call(this,e,i);else if(r&&B.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var te=T(pt.style,"touchAction"),ee=te!==n,ie="compute",ne="auto",re="manipulation",oe="none",se="pan-x",ae="pan-y",he=function(){if(!ee)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();U.prototype={set:function(t){t==ie&&(t=this.compute()),ee&&this.manager.element.style&&he[t]&&(this.manager.element.style[te]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return s(this.manager.recognizers,function(e){u(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),V(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;{if(!this.manager.session.prevented){var n=this.actions,r=m(n,oe)&&!he[oe],o=m(n,ae)&&!he[ae],s=m(n,se)&&!he[se];if(r){var a=1===t.pointers.length,h=t.distance<2,c=t.deltaTime<250;if(a&&h&&c)return}return s&&o?void 0:r||o&&i&Lt||s&&i&Rt?this.preventSrc(e):void 0}e.preventDefault()}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ce=1,ue=2,le=4,pe=8,de=pe,fe=16;G.prototype={defaults:{},set:function(t){return ut(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(o(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=J(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return o(t,"dropRecognizeWith",this)?this:(t=J(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(o(t,"requireFailure",this))return this;var e=this.requireFail;return t=J(t,this),-1===g(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(o(t,"dropRequireFailure",this))return this;t=J(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,n=this.state;pe>n&&e(i.options.event+Z(n)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),n>=pe&&e(i.options.event+Z(n))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|ce)))return!1;t++}return!0},recognize:function(t){var e=ut({},t);return u(this.options.enable,[this,e])?(this.state&(de|fe|32)&&(this.state=ce),this.state=this.process(e),void(this.state&(ue|le|pe|fe)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},h(K,G,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ue|le),r=this.attrTest(t);return n&&(i&kt||!r)?e|fe:n||r?i&Pt?e|pe:e&ue?e|le:ue:32}}),h(tt,K,{defaults:{event:"pan",threshold:10,pointers:1,direction:Nt},getTouchAction:function(){var t=this.options.direction,e=[];return t&Lt&&e.push(ae),t&Rt&&e.push(se),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Lt?(r=0===o?St:0>o?Dt:Ot,i=o!=this.pX,n=Math.abs(t.deltaX)):(r=0===s?St:0>s?$t:zt,i=s!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return K.prototype.attrTest.call(this,t)&&(this.state&ue||!(this.state&ue)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Q(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(et,K,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[oe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ue)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),h(it,G,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ne]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Pt|kt)&&!o)this.reset();else if(t.eventType&xt)this.reset(),this._timer=r(function(){this.state=de,this.tryEmit()},e.time,this);else if(t.eventType&Pt)return de;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===de&&(t&&t.eventType&Pt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=vt(),this.manager.emit(this.options.event,this._input)))}}),h(nt,K,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[oe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ue)}}),h(rt,K,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Lt|Rt,pointers:1},getTouchAction:function(){return tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Lt|Rt)?e=t.overallVelocity:i&Lt?e=t.overallVelocityX:i&Rt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&mt(e)>this.options.velocity&&t.eventType&Pt},emit:function(t){var e=Q(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(ot,G,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[re]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&xt&&0===this.count)return this.failTimeout();if(n&&o&&i){if(t.eventType!=Pt)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||$(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=r(function(){this.state=de,this.tryEmit()},e.interval,this),ue):de}return 32},failTimeout:function(){return this._timer=r(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==de&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.8",st.defaults={domEvents:!1,touchAction:ie,enable:!0,inputTarget:null,inputClass:null,preset:[[nt,{enable:!1}],[et,{enable:!1},["rotate"]],[rt,{direction:Lt}],[tt,{direction:Lt},["swipe"]],[ot],[ot,{event:"doubletap",taps:2},["tap"]],[it]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};at.prototype={set:function(t){return ut(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&de)&&(r=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(ue|le|pe)&&(r=e.curRecognizer=i),o++}},get:function(t){if(t instanceof G)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(o(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(o(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=g(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return s(v(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==n){var i=this.handlers;return s(v(t),function(t){e?i[t]&&i[t].splice(g(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&ct(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ht(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ut(st,{INPUT_START:xt,INPUT_MOVE:At,INPUT_END:Pt,INPUT_CANCEL:kt,STATE_POSSIBLE:ce,STATE_BEGAN:ue,STATE_CHANGED:le,STATE_ENDED:pe,STATE_RECOGNIZED:de,STATE_CANCELLED:fe,STATE_FAILED:32,DIRECTION_NONE:St,DIRECTION_LEFT:Dt,DIRECTION_RIGHT:Ot,DIRECTION_UP:$t,DIRECTION_DOWN:zt,DIRECTION_HORIZONTAL:Lt,DIRECTION_VERTICAL:Rt,DIRECTION_ALL:Nt,Manager:at,Input:I,TouchAction:U,TouchInput:W,MouseInput:N,PointerEventInput:q,TouchMouseInput:Y,SingleTouchInput:M,Recognizer:G,AttrRecognizer:K,Tap:ot,Pan:tt,Swipe:rt,Pinch:et,Rotate:nt,Press:it,on:p,off:d,each:s,merge:yt,extend:gt,assign:ut,inherit:h,bindFn:c,prefixed:T}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=st,"function"==typeof define&&define.amd?define(function(){return st}):"undefined"!=typeof module&&module.exports?module.exports=st:t.Hammer=st}(window,document),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,r=i[n];e=e||[];for(var o=this._onceEvents&&this._onceEvents[t];r;){var s=o&&o[r];s&&(this.off(t,r),delete o[r]),r.apply(this,e),r=i[n+=s?0:1]}return this}},e.allOff=e.removeAllListeners=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function r(t,e,o){return this instanceof r?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?o=e:i(this.options,e),o&&this.on("always",o),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(function(){this.check()}.bind(this))):new r(t,e,o)}function o(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,h=t.console;r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var r=i[n];this.addImage(r)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var s=o[n];this.addElementBackgroundImages(s)}}}};var c={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var r=n&&n[2];r&&this.addBackground(r,t),n=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new o(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},r.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&h&&h.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},o.prototype=Object.create(e.prototype),o.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(o.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&(a=e,a.fn.imagesLoaded=function(t,e){return new r(this,t,e).jqDeferred.promise(a(this))})},r.makeJQueryPlugin(),r});var Page={$win:$(window),$doc:$(document),$html:$("html"),$body:$("body"),setState:_setState,toggleState:_toggleState,delState:_delState,hasState:_hasState};"ontouchstart"in window||navigator.maxTouchPoints||Page.setState("hoverable"),window.devicePixelRatio>1.5&&Page.setState("hidpi"),setTimeout(function(){Page.delState("transition","no")},100),Page.$win.on("hashchange",function(t){t.preventDefault()}),Page.$html.on("slider.vertical slider.horizontal",function(t,e){Page.setState("slide",e.id).setState("type","dark"===e.type?"none":"dark").setState("logo","collections"===e.id?"no":"yes")}).on("dragstart",'[draggable="false"]',function(t){t.preventDefault()}),$(".header").each(function(){var t=$(this).find(".nav__link");Page.$html.on("slider.vertical",function(e,i){location.hash=i.id,t.removeClass("nav__link_current").filter("[href*="+i.id+"]").addClass("nav__link_current")}).on("click",".menu__burger, .menu__close",function(){Page.toggleState("menu")}).on("click",".nav__link",function(){var t=this.href.split("#")[1];Page.$win.trigger("menu.click",{id:t})}).on("click",".menu__link",function(){var t=this.href.split("#")[1];Page.$win.trigger("menu.click",{id:t,jump:!0}),Page.toggleState("menu")})}),$(".achievements, .history").each(function(){function t(){p.eq(0).prop("disabled",0===v).end().eq(1).prop("disabled",v===m)}function e(){f=l.eq(0).innerWidth(),n(v,!0)}function i(t){var e=v+t;e<=m&&e>=0&&n(e)}function n(e,i){var n=(v=e)*f,a=i?0:d;u.stop().animate({scrollLeft:n},a),t(),r(),o(),s()}function r(){l.removeClass("horizontal-slide_current").eq(v).addClass("horizontal-slide_current")}function o(){var t=l.eq(v).data("type");c["dark"===t?"addClass":"removeClass"]("horizontal-slider_type_dark")}function s(){Page.$html.trigger("slider.horizontal",{id:g,type:l.eq(v).data("type"),index:v})}function a(){Page.slide===g&&s()}function h(t,e){e.id===g&&n(e.index)}var c=$(this),u=c.find(".horizontal-slider__list-wrapper"),l=u.find(".horizontal-slide"),p=c.find(".arrow-button"),d=500,f=l.eq(0).innerWidth(),m=l.length-1,v=-1,g=c.data("id");n(0),p.on("click",function(t){i($(t.target).closest(".arrow-button").hasClass("arrow-button_next")?1:-1)}),Page.$win.on("resize",e).on("slider.vertical",a).on("timeline.click",h),function(){var t=new Hammer(c[0]);t.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL}),t.on("swipe",function(t){switch(t.direction){case Hammer.DIRECTION_RIGHT:return i(-1);case Hammer.DIRECTION_LEFT:return i(1)}})}()}),$(".loading").each(function(){var t=$(this),e=t.find(".loading__progress-bar");t.on("click",".button",function(){t.addClass("loading_closed"),setTimeout(t.remove.bind(t),500)}),Page.$body.imagesLoaded().always(function(){setTimeout(t.addClass.bind(t,"loading_finished"),200),document.cookie=["loaded=1","expires="+6048e5,"path=/"].join(";")}).progress(function(t){var i=t.progressedCount/t.images.length;e.css("transform","scaleX("+i+")")})}),$(".philosophy .horizontal-slider").each(function(){function t(t){var r=l+t;r>u?(e(0,!0),r=1):r<0&&(e(u,!0),r=u-1),e(l=r),i(),n(l===u?0:l)}function e(t,e){var i=t*c,n=e?0:h;o.animate({scrollLeft:i},n)}function i(){o.find(".horizontal-slide_current").removeClass("horizontal-slide_current")}function n(t){o.find(".horizontal-slide[data-id="+t+"]").addClass("horizontal-slide_current")}var r=$(this),o=r.find(".horizontal-slider__list-wrapper"),s=o.find(".horizontal-slide").map(function(t){return this.dataset.id=t,this}),a=s.eq(0).clone();o.find(".horizontal-slider__list").append(a);var h=500,c=o.eq(0).width(),u=s.length,l=0;r.on("click",".arrow-button",function(e){o.is(":animated")||t($(e.target).hasClass("arrow-button_next")?1:-1)}),$(window).on("resize",function(){c=o.eq(0).width(),e(l,!0)}),function(){var e=new Hammer(r[0]);e.get("swipe").set({direction:Hammer.DIRECTION_HORIZONTAL}),e.on("swipe",function(e){switch(e.direction){case Hammer.DIRECTION_RIGHT:return t(-1);case Hammer.DIRECTION_LEFT:return t(1)}})}()}),$(".timeline").each(function(){function t(t){return t+" "+["диплом","диплома","дипломов"][t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}function e(t,e){return t+1+"/"+e+" дипломов"}function i(t){h.removeClass("timeline__item_current timeline__item_prev");var e=c[t];n(e),r(t,e),o(t,e)}function n(t){t.$dom.addClass("timeline__item_current"),t.$text.html(t.currentText||t.text)}function r(t,e){for(var i=t;i>=0;--i){var n=c[i];if(e.$dom!==n.$dom){n.$text.html(n.text),n.$dom.addClass("timeline__item_prev");break}}}function o(t,e){for(var i=t;i<c.length;++i){var n=c[i];if(e.$dom!==n.$dom){n.$text.html(n.text);break}}}var s=$(this),a=s.data("id"),h=s.find(".timeline__item"),c=function(){var i=[];return h.each(function(){var n=$(this),r=n.find(".timeline__text"),o=n.data("count"),s={$dom:n,$text:r};if(s.$dom.data("index",i.length),!o)return s.text=s.$text.html(),i.push(s);for(var a=0;a<o;a+=1)(s=$.extend({},s,{text:t(o),currentText:e(a,o)})).$text.html(s.text),i.push(s)}),i}();Page.$win.on("slider.horizontal",function(t,e){e.id===a&&"number"==typeof e.index&&i(e.index)}),s.on("click",".timeline__item",function(){Page.$html.trigger("timeline.click",{id:a,index:$(this).data("index")})}),i(0)}),$(".vertical-slider").each(function(){function t(t){u=s.height(),o(l,!0)}function e(t,e){o(i(e.id),e.jump)}function i(t){for(var e=0;e<d.length;e+=1)if(d[e].id===t)return e;return-1}function n(t){var e=r(t);l!==e&&o(l=e)}function r(t){var e=l+t;return e<0||e>p?l:e}function o(t,e){if(!h){h=!0;var i=(l=t)*u,n=e?0:c;s.animate({scrollTop:i},n,function(){h=!1}),Page.$html.trigger("slider.vertical",d[l])}}var s=$(this),a=s.find(".vertical-slide"),h=!1,c=500,u=null,l=-1,p=a.length-1,d=a.toArray().map(function(t){return{id:t.dataset.id,type:t.dataset.type}});!function(){var t=i(location.hash.slice(1));o(t>-1?t:0,!0)}(),Page.$win.on("resize",t).on("menu.click",e),new WheelIndicator({elem:s[0],callback:function(t){n("up"===t.direction?-1:1)}}),function(){var t=new Hammer(s[0]);t.get("swipe").set({direction:Hammer.DIRECTION_VERTICAL}),t.on("swipe",function(t){switch(t.direction){case Hammer.DIRECTION_DOWN:return n(-1);case Hammer.DIRECTION_UP:return n(1)}})}(),t()});