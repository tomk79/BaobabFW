!function t(n,i,r){function e(a,c){if(!i[a]){if(!n[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var s=i[a]={exports:{}};n[a][0].call(s.exports,function(t){var i=n[a][1][t];return e(i?i:t)},s,s.exports,t,n,i,r)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)e(r[a]);return e}({1:[function(t,n,i){n.exports=new function(){function t(){return"uuid-"+((new Date).getTime().toString(16)+Math.floor(1e7*Math.random()).toString(16))}var n={};this.addNewFunction=function(i){if("function"!=typeof i)return!1;for(var r=0;;)if(r=t(),!n["fnc-"+r])return n["fnc-"+r]=i,"fnc-"+r;return!1},this.getCallbackFunction=function(t){if(n[t]){var i=n[t];return n[t]=null,delete n[t],i}return!1},this.callRemoteFunction=function(t,n,i){t.send(n,i)}}},{}],2:[function(t,n,i){window.baobabFw=function(){var n=function(){};return n.prototype.createSocket=function(n,i,r){var e=window.location.origin;return new function(n,i,r,e){_this=this,this.main=n,this.apis=e,this.temporaryApis={},this.temporaryApis=t("../../lib/temporaryApis.js"),_this.socket=i.connect(r),this.send=function(t,n,i){var r={api:t,data:n,callback:_this.temporaryApis.addNewFunction(i)};return this.socket.emit("command",r),this},_this.socket.on("command",function(t){t=t||{},t.api=t.api||"",t.data=t.data||{},t.callback=t.callback||null;var n=_this.temporaryApis.getCallbackFunction(t.api),i=t.callback;!n&&_this.apis[t.api]&&(n=_this.apis[t.api]),n&&n(t.data,function(t){_this.temporaryApis.callRemoteFunction(_this,i,t)},_this.main,_this)})}(n,i,e,r)},new n}()},{"../../lib/temporaryApis.js":1}]},{},[2]);