/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1028:function(e,t,r){var n=r(21),o=r(362)(!0);n(n.S,"Object",{entries:function(e){return o(e)}})},1202:function(e,t,r){var n,o;!function(){var l,c,h,d,f,y,m,x,v,w,Q,k,S,E,L,P,T,O,I,R,F,C,N,j,_,D,A=function(e){var t=new A.Builder;return t.pipeline.add(A.trimmer,A.stopWordFilter,A.stemmer),t.searchPipeline.add(A.stemmer),e.call(t,t),t.build()};A.version="2.3.8",A.utils={},A.utils.warn=(l=this,function(e){l.console&&console.warn&&console.warn(e)}),A.utils.asString=function(e){return null==e?"":e.toString()},A.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),i=0;i<r.length;i++){var n=r[i],o=e[n];if(Array.isArray(o))t[n]=o.slice();else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects");t[n]=o}}return t},A.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},A.FieldRef.joiner="/",A.FieldRef.fromString=function(s){var e=s.indexOf(A.FieldRef.joiner);if(-1===e)throw"malformed field ref string";var t=s.slice(0,e),r=s.slice(e+1);return new A.FieldRef(r,t,s)},A.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+A.FieldRef.joiner+this.docRef),this._stringValue},A.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var i=0;i<this.length;i++)this.elements[e[i]]=!0}else this.length=0},A.Set.complete={intersect:function(e){return e},union:function(e){return e},contains:function(){return!0}},A.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},A.Set.prototype.contains=function(object){return!!this.elements[object]},A.Set.prototype.intersect=function(e){var a,b,t,r=[];if(e===A.Set.complete)return this;if(e===A.Set.empty)return e;this.length<e.length?(a=this,b=e):(a=e,b=this),t=Object.keys(a.elements);for(var i=0;i<t.length;i++){var element=t[i];element in b.elements&&r.push(element)}return new A.Set(r)},A.Set.prototype.union=function(e){return e===A.Set.complete?A.Set.complete:e===A.Set.empty?this:new A.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},A.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var o=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(o))},A.Token=function(e,t){this.str=e||"",this.metadata=t||{}},A.Token.prototype.toString=function(){return this.str},A.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},A.Token.prototype.clone=function(e){return e=e||function(s){return s},new A.Token(e(this.str,this.metadata),this.metadata)},A.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new A.Token(A.utils.asString(e).toLowerCase(),A.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,o=[],l=0,c=0;l<=n;l++){var h=l-c;if(r.charAt(l).match(A.tokenizer.separator)||l==n){if(h>0){var d=A.utils.clone(t)||{};d.position=[c,h],d.index=o.length,o.push(new A.Token(r.slice(c,l),d))}c=l+1}}return o},A.tokenizer.separator=/[\s\-]+/,A.Pipeline=function(){this._stack=[]},A.Pipeline.registeredFunctions=Object.create(null),A.Pipeline.registerFunction=function(e,label){label in this.registeredFunctions&&A.utils.warn("Overwriting existing registered function: "+label),e.label=label,A.Pipeline.registeredFunctions[e.label]=e},A.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||A.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},A.Pipeline.load=function(e){var t=new A.Pipeline;return e.forEach((function(e){var r=A.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},A.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){A.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},A.Pipeline.prototype.after=function(e,t){A.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},A.Pipeline.prototype.before=function(e,t){A.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},A.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},A.Pipeline.prototype.run=function(e){for(var t=this._stack.length,i=0;i<t;i++){for(var r=this._stack[i],n=[],o=0;o<e.length;o++){var l=r(e[o],o,e);if(null!=l&&""!==l)if(Array.isArray(l))for(var c=0;c<l.length;c++)n.push(l[c]);else n.push(l)}e=n}return e},A.Pipeline.prototype.runString=function(e,t){var r=new A.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},A.Pipeline.prototype.reset=function(){this._stack=[]},A.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return A.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},A.Vector=function(e){this._magnitude=0,this.elements=e||[]},A.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,o=Math.floor(n/2),l=this.elements[2*o];n>1&&(l<e&&(t=o),l>e&&(r=o),l!=e);)n=r-t,o=t+Math.floor(n/2),l=this.elements[2*o];return l==e||l>e?2*o:l<e?2*(o+1):void 0},A.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},A.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},A.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,i=1;i<t;i+=2){var r=this.elements[i];e+=r*r}return this._magnitude=Math.sqrt(e)},A.Vector.prototype.dot=function(e){for(var t=0,a=this.elements,b=e.elements,r=a.length,n=b.length,o=0,l=0,i=0,c=0;i<r&&c<n;)(o=a[i])<(l=b[c])?i+=2:o>l?c+=2:o==l&&(t+=a[i+1]*b[c+1],i+=2,c+=2);return t},A.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},A.Vector.prototype.toArray=function(){for(var output=new Array(this.elements.length/2),i=1,e=0;i<this.elements.length;i+=2,e++)output[e]=this.elements[i];return output},A.Vector.prototype.toJSON=function(){return this.elements},A.stemmer=(c={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},h={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},d="[aeiouy]",f="[^aeiou][^aeiouy]*",y=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),m=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),x=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),v=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),w=/^(.+?)(ss|i)es$/,Q=/^(.+?)([^s])s$/,k=/^(.+?)eed$/,S=/^(.+?)(ed|ing)$/,E=/.$/,L=/(at|bl|iz)$/,P=new RegExp("([^aeiouylsz])\\1$"),T=new RegExp("^"+f+d+"[^aeiouwxy]$"),O=/^(.+?[^aeiou])y$/,I=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,R=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,F=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,C=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,j=/ll$/,_=new RegExp("^"+f+d+"[^aeiouwxy]$"),D=function(e){var t,r,n,o,l,d,f;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),l=Q,(o=w).test(e)?e=e.replace(o,"$1$2"):l.test(e)&&(e=e.replace(l,"$1$2")),l=S,(o=k).test(e)){var D=o.exec(e);(o=y).test(D[1])&&(o=E,e=e.replace(o,""))}else l.test(e)&&(t=(D=l.exec(e))[1],(l=v).test(t)&&(d=P,f=T,(l=L).test(e=t)?e+="e":d.test(e)?(o=E,e=e.replace(o,"")):f.test(e)&&(e+="e")));return(o=O).test(e)&&(e=(t=(D=o.exec(e))[1])+"i"),(o=I).test(e)&&(t=(D=o.exec(e))[1],r=D[2],(o=y).test(t)&&(e=t+c[r])),(o=R).test(e)&&(t=(D=o.exec(e))[1],r=D[2],(o=y).test(t)&&(e=t+h[r])),l=C,(o=F).test(e)?(t=(D=o.exec(e))[1],(o=m).test(t)&&(e=t)):l.test(e)&&(t=(D=l.exec(e))[1]+D[2],(l=m).test(t)&&(e=t)),(o=N).test(e)&&(t=(D=o.exec(e))[1],l=x,d=_,((o=m).test(t)||l.test(t)&&!d.test(t))&&(e=t)),l=m,(o=j).test(e)&&l.test(e)&&(o=E,e=e.replace(o,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(D)}),A.Pipeline.registerFunction(A.stemmer,"stemmer"),A.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},A.stopWordFilter=A.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),A.Pipeline.registerFunction(A.stopWordFilter,"stopWordFilter"),A.trimmer=function(e){return e.update((function(s){return s.replace(/^\W+/,"").replace(/\W+$/,"")}))},A.Pipeline.registerFunction(A.trimmer,"trimmer"),A.TokenSet=function(){this.final=!1,this.edges={},this.id=A.TokenSet._nextId,A.TokenSet._nextId+=1},A.TokenSet._nextId=1,A.TokenSet.fromArray=function(e){for(var t=new A.TokenSet.Builder,i=0,r=e.length;i<r;i++)t.insert(e[i]);return t.finish(),t.root},A.TokenSet.fromClause=function(e){return"editDistance"in e?A.TokenSet.fromFuzzyString(e.term,e.editDistance):A.TokenSet.fromString(e.term)},A.TokenSet.fromFuzzyString=function(e,t){for(var r=new A.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var o=n.pop();if(o.str.length>0){var l,c=o.str.charAt(0);c in o.node.edges?l=o.node.edges[c]:(l=new A.TokenSet,o.node.edges[c]=l),1==o.str.length&&(l.final=!0),n.push({node:l,editsRemaining:o.editsRemaining,str:o.str.slice(1)})}if(0!=o.editsRemaining){if("*"in o.node.edges)var h=o.node.edges["*"];else{h=new A.TokenSet;o.node.edges["*"]=h}if(0==o.str.length&&(h.final=!0),n.push({node:h,editsRemaining:o.editsRemaining-1,str:o.str}),o.str.length>1&&n.push({node:o.node,editsRemaining:o.editsRemaining-1,str:o.str.slice(1)}),1==o.str.length&&(o.node.final=!0),o.str.length>=1){if("*"in o.node.edges)var d=o.node.edges["*"];else{d=new A.TokenSet;o.node.edges["*"]=d}1==o.str.length&&(d.final=!0),n.push({node:d,editsRemaining:o.editsRemaining-1,str:o.str.slice(1)})}if(o.str.length>1){var f,y=o.str.charAt(0),m=o.str.charAt(1);m in o.node.edges?f=o.node.edges[m]:(f=new A.TokenSet,o.node.edges[m]=f),1==o.str.length&&(f.final=!0),n.push({node:f,editsRemaining:o.editsRemaining-1,str:y+o.str.slice(2)})}}}return r},A.TokenSet.fromString=function(e){for(var t=new A.TokenSet,r=t,i=0,n=e.length;i<n;i++){var o=e[i],l=i==n-1;if("*"==o)t.edges[o]=t,t.final=l;else{var c=new A.TokenSet;c.final=l,t.edges[o]=c,t=c}}return r},A.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),o=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var i=0;i<o;i++){var l=n[i];t.push({prefix:r.prefix.concat(l),node:r.node.edges[l]})}}return e},A.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,i=0;i<r;i++){var label=t[i];e=e+label+this.edges[label].id}return e},A.TokenSet.prototype.intersect=function(b){for(var output=new A.TokenSet,e=void 0,t=[{qNode:b,output:output,node:this}];t.length;){e=t.pop();for(var r=Object.keys(e.qNode.edges),n=r.length,o=Object.keys(e.node.edges),l=o.length,q=0;q<n;q++)for(var c=r[q],h=0;h<l;h++){var d=o[h];if(d==c||"*"==c){var f=e.node.edges[d],y=e.qNode.edges[c],m=f.final&&y.final,x=void 0;d in e.output.edges?(x=e.output.edges[d]).final=x.final||m:((x=new A.TokenSet).final=m,e.output.edges[d]=x),t.push({qNode:y,output:x,node:f})}}}return output},A.TokenSet.Builder=function(){this.previousWord="",this.root=new A.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},A.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(i=r;i<e.length;i++){var n=new A.TokenSet,o=e[i];t.edges[o]=n,this.uncheckedNodes.push({parent:t,char:o,child:n}),t=n}t.final=!0,this.previousWord=e},A.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},A.TokenSet.Builder.prototype.minimize=function(e){for(var i=this.uncheckedNodes.length-1;i>=e;i--){var t=this.uncheckedNodes[i],r=t.child.toString();r in this.minimizedNodes?t.parent.edges[t.char]=this.minimizedNodes[r]:(t.child._str=r,this.minimizedNodes[r]=t.child),this.uncheckedNodes.pop()}},A.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},A.Index.prototype.search=function(e){return this.query((function(t){new A.QueryParser(e,t).parse()}))},A.Index.prototype.query=function(e){for(var t=new A.Query(this.fields),r=Object.create(null),n=Object.create(null),o=Object.create(null),l=Object.create(null),c=Object.create(null),i=0;i<this.fields.length;i++)n[this.fields[i]]=new A.Vector;e.call(t,t);for(i=0;i<t.clauses.length;i++){var h=t.clauses[i],d=null,f=A.Set.complete;d=h.usePipeline?this.pipeline.runString(h.term,{fields:h.fields}):[h.term];for(var y=0;y<d.length;y++){var m=d[y];h.term=m;var x=A.TokenSet.fromClause(h),v=this.tokenSet.intersect(x).toArray();if(0===v.length&&h.presence===A.Query.presence.REQUIRED){for(var w=0;w<h.fields.length;w++){l[D=h.fields[w]]=A.Set.empty}break}for(var Q=0;Q<v.length;Q++){var k=v[Q],S=this.invertedIndex[k],E=S._index;for(w=0;w<h.fields.length;w++){var L=S[D=h.fields[w]],P=Object.keys(L),T=k+"/"+D,O=new A.Set(P);if(h.presence==A.Query.presence.REQUIRED&&(f=f.union(O),void 0===l[D]&&(l[D]=A.Set.complete)),h.presence!=A.Query.presence.PROHIBITED){if(n[D].upsert(E,h.boost,(function(a,b){return a+b})),!o[T]){for(var I=0;I<P.length;I++){var R,F=P[I],C=new A.FieldRef(F,D),N=L[F];void 0===(R=r[C])?r[C]=new A.MatchData(k,D,N):R.add(k,D,N)}o[T]=!0}}else void 0===c[D]&&(c[D]=A.Set.empty),c[D]=c[D].union(O)}}}if(h.presence===A.Query.presence.REQUIRED)for(w=0;w<h.fields.length;w++){l[D=h.fields[w]]=l[D].intersect(f)}}var j=A.Set.complete,_=A.Set.empty;for(i=0;i<this.fields.length;i++){var D;l[D=this.fields[i]]&&(j=j.intersect(l[D])),c[D]&&(_=_.union(c[D]))}var B=Object.keys(r),V=[],z=Object.create(null);if(t.isNegated()){B=Object.keys(this.fieldVectors);for(i=0;i<B.length;i++){C=B[i];var M=A.FieldRef.fromString(C);r[C]=new A.MatchData}}for(i=0;i<B.length;i++){var $=(M=A.FieldRef.fromString(B[i])).docRef;if(j.contains($)&&!_.contains($)){var W,U=this.fieldVectors[M],J=n[M.fieldName].similarity(U);if(void 0!==(W=z[$]))W.score+=J,W.matchData.combine(r[M]);else{var G={ref:$,score:J,matchData:r[M]};z[$]=G,V.push(G)}}}return V.sort((function(a,b){return b.score-a.score}))},A.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:A.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},A.Index.load=function(e){var t={},r={},n=e.fieldVectors,o=Object.create(null),l=e.invertedIndex,c=new A.TokenSet.Builder,h=A.Pipeline.load(e.pipeline);e.version!=A.version&&A.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+A.version+"' does not match serialized index '"+e.version+"'");for(var i=0;i<n.length;i++){var d=(y=n[i])[0],f=y[1];r[d]=new A.Vector(f)}for(i=0;i<l.length;i++){var y,m=(y=l[i])[0],x=y[1];c.insert(m),o[m]=x}return c.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=o,t.tokenSet=c.root,t.pipeline=h,new A.Index(t)},A.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=A.tokenizer,this.pipeline=new A.Pipeline,this.searchPipeline=new A.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},A.Builder.prototype.ref=function(e){this._ref=e},A.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},A.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},A.Builder.prototype.k1=function(e){this._k1=e},A.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var o=n[i],l=this._fields[o].extractor,c=l?l(e):e[o],h=this.tokenizer(c,{fields:[o]}),d=this.pipeline.run(h),f=new A.FieldRef(r,o),y=Object.create(null);this.fieldTermFrequencies[f]=y,this.fieldLengths[f]=0,this.fieldLengths[f]+=d.length;for(var m=0;m<d.length;m++){var x=d[m];if(null==y[x]&&(y[x]=0),y[x]+=1,null==this.invertedIndex[x]){var v=Object.create(null);v._index=this.termIndex,this.termIndex+=1;for(var w=0;w<n.length;w++)v[n[w]]=Object.create(null);this.invertedIndex[x]=v}null==this.invertedIndex[x][o][r]&&(this.invertedIndex[x][o][r]=Object.create(null));for(var Q=0;Q<this.metadataWhitelist.length;Q++){var k=this.metadataWhitelist[Q],S=x.metadata[k];null==this.invertedIndex[x][o][r][k]&&(this.invertedIndex[x][o][r][k]=[]),this.invertedIndex[x][o][r][k].push(S)}}}},A.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var o=A.FieldRef.fromString(e[i]),l=o.fieldName;n[l]||(n[l]=0),n[l]+=1,r[l]||(r[l]=0),r[l]+=this.fieldLengths[o]}var c=Object.keys(this._fields);for(i=0;i<c.length;i++){var h=c[i];r[h]=r[h]/n[h]}this.averageFieldLength=r},A.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var o=A.FieldRef.fromString(t[i]),l=o.fieldName,c=this.fieldLengths[o],h=new A.Vector,d=this.fieldTermFrequencies[o],f=Object.keys(d),y=f.length,m=this._fields[l].boost||1,x=this._documents[o.docRef].boost||1,v=0;v<y;v++){var w,Q,k,S=f[v],E=d[S],L=this.invertedIndex[S]._index;void 0===n[S]?(w=A.idf(this.invertedIndex[S],this.documentCount),n[S]=w):w=n[S],Q=w*((this._k1+1)*E)/(this._k1*(1-this._b+this._b*(c/this.averageFieldLength[l]))+E),Q*=m,Q*=x,k=Math.round(1e3*Q)/1e3,h.insert(L,k)}e[o]=h}this.fieldVectors=e},A.Builder.prototype.createTokenSet=function(){this.tokenSet=A.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},A.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new A.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},A.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},A.MatchData=function(e,t,r){for(var n=Object.create(null),o=Object.keys(r||{}),i=0;i<o.length;i++){var l=o[i];n[l]=r[l].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},A.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),i=0;i<t.length;i++){var r=t[i],n=Object.keys(e.metadata[r]);null==this.metadata[r]&&(this.metadata[r]=Object.create(null));for(var o=0;o<n.length;o++){var l=n[o],c=Object.keys(e.metadata[r][l]);null==this.metadata[r][l]&&(this.metadata[r][l]=Object.create(null));for(var h=0;h<c.length;h++){var d=c[h];null==this.metadata[r][l][d]?this.metadata[r][l][d]=e.metadata[r][l][d]:this.metadata[r][l][d]=this.metadata[r][l][d].concat(e.metadata[r][l][d])}}}},A.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i];o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(r[o]):this.metadata[e][t][o]=r[o]}else this.metadata[e][t]=r},A.Query=function(e){this.clauses=[],this.allFields=e},A.Query.wildcard=new String("*"),A.Query.wildcard.NONE=0,A.Query.wildcard.LEADING=1,A.Query.wildcard.TRAILING=2,A.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},A.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=A.Query.wildcard.NONE),e.wildcard&A.Query.wildcard.LEADING&&e.term.charAt(0)!=A.Query.wildcard&&(e.term="*"+e.term),e.wildcard&A.Query.wildcard.TRAILING&&e.term.slice(-1)!=A.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=A.Query.presence.OPTIONAL),this.clauses.push(e),this},A.Query.prototype.isNegated=function(){for(var i=0;i<this.clauses.length;i++)if(this.clauses[i].presence!=A.Query.presence.PROHIBITED)return!1;return!0},A.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,A.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},A.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},A.QueryParseError.prototype=new Error,A.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},A.QueryLexer.prototype.run=function(){for(var e=A.QueryLexer.lexText;e;)e=e(this)},A.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)r=this.escapeCharPositions[i],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},A.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},A.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},A.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return A.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},A.QueryLexer.prototype.width=function(){return this.pos-this.start},A.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},A.QueryLexer.prototype.backup=function(){this.pos-=1},A.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=A.QueryLexer.EOS&&this.backup()},A.QueryLexer.prototype.more=function(){return this.pos<this.length},A.QueryLexer.EOS="EOS",A.QueryLexer.FIELD="FIELD",A.QueryLexer.TERM="TERM",A.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",A.QueryLexer.BOOST="BOOST",A.QueryLexer.PRESENCE="PRESENCE",A.QueryLexer.lexField=function(e){return e.backup(),e.emit(A.QueryLexer.FIELD),e.ignore(),A.QueryLexer.lexText},A.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(A.QueryLexer.TERM)),e.ignore(),e.more())return A.QueryLexer.lexText},A.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(A.QueryLexer.EDIT_DISTANCE),A.QueryLexer.lexText},A.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(A.QueryLexer.BOOST),A.QueryLexer.lexText},A.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(A.QueryLexer.TERM)},A.QueryLexer.termSeparator=A.tokenizer.separator,A.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==A.QueryLexer.EOS)return A.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return A.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(A.QueryLexer.TERM),A.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(A.QueryLexer.TERM),A.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(A.QueryLexer.PRESENCE),A.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(A.QueryLexer.PRESENCE),A.QueryLexer.lexText;if(t.match(A.QueryLexer.termSeparator))return A.QueryLexer.lexTerm}else e.escapeCharacter()}},A.QueryParser=function(e,t){this.lexer=new A.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},A.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=A.QueryParser.parseClause;e;)e=e(this);return this.query},A.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},A.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},A.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},A.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case A.QueryLexer.PRESENCE:return A.QueryParser.parsePresence;case A.QueryLexer.FIELD:return A.QueryParser.parseField;case A.QueryLexer.TERM:return A.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value '"+t.str+"'"),new A.QueryParseError(r,t.start,t.end)}},A.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=A.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=A.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new A.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n){r="expecting term or field, found nothing";throw new A.QueryParseError(r,t.start,t.end)}switch(n.type){case A.QueryLexer.FIELD:return A.QueryParser.parseField;case A.QueryLexer.TERM:return A.QueryParser.parseTerm;default:r="expecting term or field, found '"+n.type+"'";throw new A.QueryParseError(r,n.start,n.end)}}},A.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new A.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var o=e.peekLexeme();if(null==o){n="expecting term, found nothing";throw new A.QueryParseError(n,t.start,t.end)}switch(o.type){case A.QueryLexer.TERM:return A.QueryParser.parseTerm;default:n="expecting term, found '"+o.type+"'";throw new A.QueryParseError(n,o.start,o.end)}}},A.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case A.QueryLexer.TERM:return e.nextClause(),A.QueryParser.parseTerm;case A.QueryLexer.FIELD:return e.nextClause(),A.QueryParser.parseField;case A.QueryLexer.EDIT_DISTANCE:return A.QueryParser.parseEditDistance;case A.QueryLexer.BOOST:return A.QueryParser.parseBoost;case A.QueryLexer.PRESENCE:return e.nextClause(),A.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new A.QueryParseError(n,r.start,r.end)}else e.nextClause()}},A.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new A.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var o=e.peekLexeme();if(null!=o)switch(o.type){case A.QueryLexer.TERM:return e.nextClause(),A.QueryParser.parseTerm;case A.QueryLexer.FIELD:return e.nextClause(),A.QueryParser.parseField;case A.QueryLexer.EDIT_DISTANCE:return A.QueryParser.parseEditDistance;case A.QueryLexer.BOOST:return A.QueryParser.parseBoost;case A.QueryLexer.PRESENCE:return e.nextClause(),A.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+o.type+"'";throw new A.QueryParseError(n,o.start,o.end)}else e.nextClause()}},A.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new A.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var o=e.peekLexeme();if(null!=o)switch(o.type){case A.QueryLexer.TERM:return e.nextClause(),A.QueryParser.parseTerm;case A.QueryLexer.FIELD:return e.nextClause(),A.QueryParser.parseField;case A.QueryLexer.EDIT_DISTANCE:return A.QueryParser.parseEditDistance;case A.QueryLexer.BOOST:return A.QueryParser.parseBoost;case A.QueryLexer.PRESENCE:return e.nextClause(),A.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+o.type+"'";throw new A.QueryParseError(n,o.start,o.end)}else e.nextClause()}},void 0===(o="function"==typeof(n=function(){return A})?n.call(t,r,t,e):n)||(e.exports=o)}()}}]);