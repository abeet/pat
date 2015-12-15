!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.View=t():e.View=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var i=n(1),r=n(4),s=(n(18),n(2)),o=function(e){return s.assign({},r.defaultOptions,e)},a=function(e){e=o(e),this.$el=s.query(e.el),this.$data=e.data,this.$rootView=e.rootView?e.rootView:this,this.__rootCompile=e.rootCompile===!1?!1:!0,this.__replace=e.replace,this.__watchers={},this.__filters=e.filters||[],this._init()};a.prototype._init=function(){this.template&&(this.$el.innerHTML=this.template),this.$compile(this.$el)},a.prototype.$compile=function(e){i.parse(e,this)},a.prototype.$digest=function(){return a._isDigesting?void setTimeout(s.bind(arguments.callee,this),0):(a._isDigesting=!0,s.each(this.__watchers,function(e){e.check()}),void(a._isDigesting=!1))},a.prototype.$destroy=function(){s.each(this.__watchers,function(e){e.destroy()}),this.__replace&&(this.$el.innerHTML=""),this.$el=null,this.$data=null,this.$rootView=null,this.__rootCompile=null,this.__replace=null,this.__watchers=null,this.__filters=null},a.config=function(e){s.assign(r,e)},a._isDigesting=!1,e.exports=a},function(e,t,n){function i(e){var t,n,i;return i=e.view,t=a.create(e),n=i.__watchers[e.value],n?e.oneTime||n.__directives.push(t):(n=new u(i.$data,e.expression),n.__view=i,e.oneTime||(n.__directives.push(t),i.__watchers[e.value]=n)),t.__watcher=n,t.bind(e.args),t.update(n.getValue()),t}function r(e,n){var r,s,u,c;!o.isElement(e)||1!==e.nodeType||e.hasCompiled||!n.__rootCompile&&e==n.$el||(e.hasCompiled=!0,r=o.toArray(e.attributes),o.each(r,function(t){a.isDirective(t)&&(s=l(t),s.view=n,s.el=e,!f.debug&&!s.isInterpolationRegx&&e&&e.removeAttribute&&e.removeAttribute(s.name),dirInstance=i(s),dirInstance.block&&(u=!0))})),!u&&e.hasChildNodes()&&(c=o.toArray(e.childNodes),o.each(c,function(e){t.parse(e,n)}))}function s(e,t){var n,r,s,a;if(n=p(e.data),1!==n.length||n[0].type!==c.TextTemplateParserTypes.text)for(a=o.createAnchor("text-place-holder"),o.replace(e,a),_i=0,_len=n.length;_i<_len;_i++)r=n[_i],s=document.createTextNode(r.value),o.before(s,a),r.type===c.TextTemplateParserTypes.binding&&i({name:"",value:r.value,view:t,expression:h(r.value),oneTime:r.oneTime,html:r.html,directive:"textTemplate",el:s})}var o=n(2),a=n(8),u=n(17),c=n(9),l=c.parseDirective,p=c.parseText,h=c.parseExpression,f=n(4);t.parse=function(e,t){return o.isElement(e)?3==e.nodeType?void s(e,t):void r(e,t):void 0}},function(e,t,n){var i={},r=n(3),s=n(5),o=n(6),a=s.assign;a(i,s),a(i,r),a(i,o),i.Class=n(7),e.exports=i},function(e,t,n){var i=n(4),r=n(5);t.query=function(e){return r.isElement(e)?e:r.isString(e)?document.getElementById(e.replace(/^#/,"")):void 0},t.createAnchor=function(e,t){var n=i.debug?document.createComment(e):document.createTextNode(t?" ":"");return n},t.before=function(e,t){t.parentNode.insertBefore(e,t)},t.after=function(e,n){n.nextSibling?t.before(e,n.nextSibling):n.parentNode.appendChild(e)},t.remove=function(e){e.parentNode.removeChild(e)},t.prepend=function(e,n){n.firstChild?t.before(e,n.firstChild):n.appendChild(e)},t.replace=function(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)},t.attr=function(e,t){var n=e.getAttribute(t);return null!==n&&e.removeAttribute(t),n},t.clone=function(e){return e.cloneNode(!0)}},function(e,t){t.defaultOptions={el:"",template:"",replace:!0},t.defaultLog=function(e){console.log(e)},t.prefix="sk",t.delimiters=["{{","}}"],t.unsafeDelimiters=["{{{","}}}"],t.debug=!1},function(e,t){function n(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}t.bind=function(e,t){return function(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}},t.htmlspecialchars=function(e){return t.isString(e)?(e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/"/g,"&quot;"),e=e.replace(/'/g,"&#039;")):e},t.trim=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},t.toArray=function(e){return Array.prototype.slice.call(e)||[]},t.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},t.isObject=function(e){return"function"==typeof e||"object"==typeof e&&null!=e},t.isElement=function(e){return e&&"object"==typeof e&&e.nodeType&&"string"==typeof e.nodeName},t.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},t.each=function(e,n){if(t.isArray(e))for(var i=0,r=e.length;r>i;i++)n(e[i],i);else if(t.isObject(e))for(var s in e)n(e[s],s)},t.assign=function(){if(!(arguments.length<2)){for(var e,i=t.toArray(arguments),r=i.shift();e=i.shift();)n(r,e);return r}},t.hasKey=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&n==t)return!0;return!1},t.indexOf=function(e,t){if(null===e)return-1;for(var n=0,i=e.length;i>n;n++)if(e[n]===item)return n;return-1}},function(e,t,n){n(4),"undefined"!=typeof console;t.log=t.warn=function(){}},function(e,t){var n=function(){function e(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}var t=function(){this.initPrototype=!0;var n=new this;this.initPrototype=!1;for(var i,r=Array.prototype.slice.call(arguments)||[];i=r.shift();)e(n,i.prototype||i);var s=function(){!s.initPrototype&&this.init&&this.init.apply(this,arguments)};return s.prototype=n,s.prototype.constructor=s,s.extend=t,s},n=function(){};return n.extend=t,n}();e.exports=n},function(e,t,n){var i=n(2),r=i.Class,s=n(9);DIR_REGX=s.DIR_REGX,INTERPOLATION_REGX=s.INTERPOLATION_REGX;var o={bind:n(11),model:n(12),"if":n(13),unless:n(14),"for":n(15),textTemplate:n(16)};uid=0;var a=r.extend({init:function(e){this.__watcher=null,this.describe=e,this.el=e.el,this.view=e.view,this.uid=uid++},shoudUpdate:function(e,t){return!e||e&&e!=t},destroy:function(){this.unbind(),this.__watcher=null,this.describe=null,this.el=null,this.view=null,this.uid=null}}),u={};i.each(o,function(e,t){u[t]=a.extend(o[t])}),e.exports={publics:u,create:function(e){var t=u[e.directive];return new t(e)},isDirective:function(e){var t,n,r;return t=e.name,n=e.value,INTERPOLATION_REGX.test(n)?!0:(r=t.match(DIR_REGX),r&&r[1]&&i.hasKey(o,r[1].split(":")[0])?!0:!1)},directive:function(e,t){this.publicDirectives[e]=a.extend(t)}}},function(e,t,n){function i(e){return e.replace(u,"\\$&")}var r=n(4),s=n(2),o=n(10),a=r.prefix,u=(r.delimiters,/[-.*+?^${}()|[\]\/\\]/g),c=new RegExp("^"+a+"-([^=]+)"),l=/:(.*)$/,p=/([^|]+)\|?([\sA-Za-z$_]*)/,h=i(r.delimiters[0]),f=i(r.delimiters[1]),d=i(r.unsafeDelimiters[0]),v=i(r.unsafeDelimiters[1]),m=new RegExp(d+"(.+?)"+v+"|"+h+"(.+?)"+f,"g"),_=new RegExp("^"+d+".*"+v+"$"),g=new RegExp(d+"(.+?)"+v+"|"+h+"(.+?)"+f);t.parseDirective=function(e){var n,i,r,s,o,a,u=e.name,p=e.value;if(r=s=!1,g.test(p)){i=t.parseText(p);for(var h=0;h<i.length;h++)if(i[h].html){s=!0;break}for(var h=0;h<i.length;h++){if(!i[h].oneTime){r=!1;break}r=!0}return{name:u,value:p,directive:"bind",args:[u],oneTime:r,html:s,expression:t.token2expression(i),isInterpolationRegx:!0}}return o=u.match(c)[1],l.test(o)&&(a=o.split(":"),o=a[0],n=a[1]?a[1].split("|"):[]),{name:u,value:p,directive:o,args:n||[],oneTime:!1,html:!1,expression:t.parseExpression(p)}},t.parseExpression=function(e){var t,n=e.match(p),i=s.trim(n[1]),r=s.trim(n[2]);return t=o.compileExpFns(i),r&&(t="_that.applyFilter("+t+',"'+r+'")'),t},TextTemplateParserTypes={text:0,binding:1},t.parseText=function(e){if(e=e.replace(/\n/g,""),!m.test(e))return[{type:TextTemplateParserTypes.text,value:e}];for(var t,n,i,r,o,a,u=[],c=m.lastIndex=0;t=m.exec(e);)n=t.index,n>c&&u.push({type:TextTemplateParserTypes.text,value:e.slice(c,n)}),i=_.test(t[0]),r=i?t[1]:t[2],o=r.charCodeAt(0),a=42===o,r=a?r.slice(1):r,u.push({type:TextTemplateParserTypes.binding,value:s.trim(r),html:i,oneTime:a}),c=n+t[0].length;return c<e.length&&u.push({type:TextTemplateParserTypes.text,value:e.slice(c)}),u},t.token2expression=function(e){var n="";return s.each(e,function(e){n+=t.parseExpression(e.value)}),n},t.INTERPOLATION_REGX=g,t.DIR_REGX=c,t.TextTemplateParserTypes=TextTemplateParserTypes},function(e,t,n){function i(e,t){var n=v.length;return v[n]=t?e.replace(p,"\\n"):e,'"'+n+'"'}function r(e){var t=e.charAt(0),n=e.slice(1);return a.test(n)?e:(n=n.indexOf('"')>-1?n.replace(f,s):n,t+"_scope."+n)}function s(e,t){return v[t]}var o=(n(2),"Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat"),a=new RegExp("^("+o.replace(/,/g,"\\b|")+"\\b)"),u="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",c=new RegExp("^("+u.replace(/,/g,"\\b|")+"\\b)"),l=/\s/g,p=/\n/g,h=/[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,f=/"(\d+)"/g,d=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,v=[];t.compileExpFns=function(e,t){c.test(e),v.length=0;var n=e.replace(h,i).replace(l,"");return n=(" "+n).replace(d,r).replace(f,s)}},function(e,t,n){var i=n(2);e.exports={priority:3e3,bind:function(e){},update:function(e){var t,n,r;t=this.describe.args||[],n=t[0],r=this.describe.html,e=r?e:i.htmlspecialchars(e),this.el.setAttribute(n,e)},unbind:function(){var e,t;e=this.describe.args||[],t=e[0]}}},function(e,t){Util={bindEvent:function(){return"addEventListener"in window?function(e,t,n){return e.addEventListener(t,n,!1)}:function(e,t,n){return e.attachEvent("on"+t,n)}}(),unbindEvent:function(){return"removeEventListener"in window?function(e,t,n){return e.removeEventListener(t,n,!1)}:function(e,t,n){return e.detachEvent("on"+t,n)}}(),getInputValue:function(e){var t,n,i,r;if("checkbox"===e.type)return e.checked;if("select-multiple"===e.type){for(r=[],n=0,i=e.length;i>n;n++)t=e[n],t.selected&&r.push(t.value);return r}return e.value}},e.exports={priority:3e3,bind:function(e){var t=this;Util.bindEvent(t.el,"blur",function(){var e=Util.getInputValue(t.el),n=t.describe.value;t.setValue(n,e),t.view.$digest()})},setValue:function(e,t){return new Function("$scope","return $scope."+e+'="'+t+'"')(this.view.$data)},update:function(e){this.el.value=e},unbind:function(){Util.unbindEvent(this.el,"blur")}}},function(e,t,n){var i=n(2);e.exports={block:!0,priority:3e3,shoudUpdate:function(e,t){return!0},bind:function(e){this.bound=!1,this.placeholder=i.createAnchor("if-statement"),i.replace(this.el,this.placeholder)},update:function(e){e&&0==this.bound&&(this.childView=new this.view.constructor({el:this.el,data:this.view.$data,rootCompile:!1,rootView:this.view.$rootView}),i.before(this.el,this.placeholder),this.bound=!0),e||1!=this.bound||(i.remove(this.el),this.bound=!1),this.childView&&this.childView.$digest()},unbind:function(){this.childView&&this.childView.$destroy()}}},function(e,t,n){var i=n(2),r=n(13);e.exports=i.assign({},r,{update:function(e){return r.update.call(this,!e)}})},function(e,t,n){var i=n(2),r=n(9),s=r.parseExpression,o={MOVE_EXISTING:1,REMOVE_NODE:2,INSERT_MARKUP:3};e.exports={block:!0,priority:3e3,shoudUpdate:function(e,t){return!0},bind:function(e){var t=this.describe.value.match(/(.*) in (.*)/);if(t){var n=t[1].match(/\((.*),(.*)\)/);n?(this.iterator=n[1].trim(),this.alias=n[2].trim()):this.alias=t[1].trim(),this.__watcher.expression=s(t[2])}!this.alias,this.start=i.createAnchor("v-for-start"),this.end=i.createAnchor("v-for-end"),i.replace(this.el,this.end),i.before(this.start,this.end),this.oldViewMap={}},_generateNewChildren:function(e){var t,n={},r=this.oldViewMap,s=this;return i.each(e,function(e,o){r[o]&&r[o].$data[s.alias]===e?(n[o]=r[o],i.assign(r[o].$data,s.view.$data),r[o].$digest()):(t={},t[s.alias]=e,i.assign(t,s.view.$data),s.iterator&&(t[s.iterator]=o),n[o]=new s.view.constructor({el:i.clone(s.el),data:t,rootCompile:!1,rootView:s.view.$rootView}))}),n},_diff:function(){var e,t,n=0,i=0,r=this.oldViewMap,s=this.newViewMap,a=this.diffQueue=[];for(name in s)s.hasOwnProperty(name)&&(e=r&&r[name],t=s[name],e===t?e._mountIndex<i&&a.push({name:name,type:o.MOVE_EXISTING,fromIndex:e._mountIndex,toIndex:n}):(e&&(i=Math.max(e._mountIndex,i),a.push({name:name,type:o.REMOVE_NODE,fromIndex:e._mountIndex,toIndex:null}),e.$destroy()),a.push({name:name,type:o.INSERT_MARKUP,fromIndex:null,toIndex:n,markup:t.$el})),t._mountIndex=n,n++);for(name in r)!r.hasOwnProperty(name)||s&&s.hasOwnProperty(name)||(a.push({name:name,type:o.REMOVE_NODE,fromIndex:e._mountIndex,toIndex:null}),e.$destroy())},_patch:function(){for(var e,t,n={},r=[],s=this.diffQueue,a=0;a<s.length;a++)e=s[a],(e.type===o.MOVE_EXISTING||e.type===o.REMOVE_NODE)&&(t=this.oldViewMap[e.name],n[e.name]=t.$el,r.push(t));i.each(r,function(e){i.remove(e.$el)});for(var u=0;u<s.length;u++)switch(e=s[u],e.type){case o.INSERT_MARKUP:this._insertChildAt(e.markup,e.toIndex);break;case o.MOVE_EXISTING:this._insertChildAt(n[e.name],e.toIndex);break;case o.REMOVE_NODE:}},_insertChildAt:function(e,t){for(var n=this.start,r=this.end,s=-1,o=n;o&&o!==r;)if(o=o.nextSibling,i.isElement(o)&&1==o.nodeType&&(s++,t==s))return void i.after(e,o);t>s&&i.before(e,r)},update:function(e){this.newViewMap=this._generateNewChildren(e),this._diff(),this._patch(),this.oldViewMap=this.newViewMap},unbind:function(){i.each(this.newViewMap,function(e){e.$destroy()})}}},function(e,t,n){var i=n(2);e.exports={priority:3e3,bind:function(e){},update:function(e){var t=this.describe.html;this.el.data=t?e:i.htmlspecialchars(e)},unbind:function(){}}},function(e,t,n){function i(e,t,n){this.last=null,this.current=null,this.__directives=[],this.__view=null,this.expression=t,this.callback=n,this.scope=e}var r=n(2);i.prototype.applyFilter=function(e,t){if(!t)return e;var n=this.__view.__filters[t];return n?n.call(this.__view,e,this.scope):e},i.prototype.getValue=function(){return new Function("_scope","_that","return "+this.expression)(this.scope,this)},i.prototype.check=function(){this.current=this.getValue(),this._check(this.last,this.current)&&this.callback&&this.callback(),this.last=this.current},i.prototype._check=function(e,t){var n=!1;return r.each(this.__directives,function(i){i.shoudUpdate(e,t)&&(i.update(t),n=!0)}),n},i.prototype.destroy=function(){r.each(this.__directives,function(e){e.destroy()})},e.exports=i},function(e,t,n){var i=n(2);e.exports=i.Class.extend({on:function(e,t){return this.__events||(this.__events={}),this.__events[e]||(this.__events[e]=[]),-1===i.indexOf(this.__events,t)&&"function"==typeof t&&this.__events[e].push(t),this},fire:function(e){if(this.__events&&this.__events[e]){var t=Array.prototype.slice.call(arguments,1)||[],n=this.__events[e],i=0,r=n.length;for(i;r>i;i++)n[i].apply(this,t);return this}},off:function(e,t){if(e||t||(this.__events={}),e&&!t&&delete this.__events[e],e&&t)var n=this.__events[e],r=i.indexOf(n,t)(r>-1)&&n.splice(r,1);return this}})}])});