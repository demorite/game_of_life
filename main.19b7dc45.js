parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var n=document.querySelector("canvas"),i=n.getContext("2d"),e=10,r=2.5,t=[];function o(){for(var o in i.clearRect(0,0,n.width,n.height),t)for(var a in t[o])i.beginPath(),i.save(),i.fillStyle=1===t[o][a]?"#789":"#123",i.fillRect(a*(e+r),o*(e+r),e,e),i.restore(),i.closePath()}function a(){var n=JSON.parse(JSON.stringify(t));for(var i in n)for(var e in n[i=+i]){e=+e;var r=0;n[i-1]&&1===n[i-1][e-1]&&r++,n[i-1]&&1===n[i-1][e]&&r++,n[i-1]&&1===n[i-1][e+1]&&r++,n[i]&&1===n[i][e-1]&&r++,n[i]&&1===n[i][e+1]&&r++,n[i+1]&&1===n[i+1][e-1]&&r++,n[i+1]&&1===n[i+1][e]&&r++,n[i+1]&&1===n[i+1][e+1]&&r++,0===n[i][e]&&3===r&&(t[i][e]=1),1===n[i][e]&&(r<2||r>3)&&(t[i][e]=0)}}function d(){o(),a(),requestAnimationFrame(d)}window.onload=window.onresize=function(){n.height=window.innerHeight,n.width=window.innerWidth;for(var i=0,o=0;i<window.innerHeight-(r+e);i+=e+r,o++){t[o]=[];for(var a=0,d=0;a<window.innerWidth-(r+e);a+=e+r,d++){var w=Math.floor(2*Math.random());t[o].push(w)}}},window.addEventListener("keypress",function(n){return"d"===n.key&&d()}),d();
},{}]},{},["epB2"], null)