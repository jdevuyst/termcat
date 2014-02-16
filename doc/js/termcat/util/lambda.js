// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.util.lambda');
goog.require('cljs.core');
goog.require('termcat.util.math');
goog.require('termcat.util.math');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
goog.require('clojure.string');
goog.require('clojure.string');
termcat.util.lambda.tval = (function tval(t,pred){var $ = termcat.term.ednval.call(null,termcat.term.center.call(null,t));var $__$1 = (cljs.core.truth_(pred.call(null,$))?$:(function(){throw (new java.lang.Exception("Wrong type"))})());return $__$1;
});
termcat.util.lambda.curry_fun = (function() {
var curry_fun = null;
var curry_fun__1 = (function (f){return (function (self,x){if(cljs.core.truth_(x))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),curry_fun.call(null,cljs.core.partial.call(null,f,x)))], null);
} else
{return f.call(null);
}
});
});
var curry_fun__2 = (function (f,n){if(cljs.core._EQ_.call(null,n,1))
{return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return f.call(null,x);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),"Missing (system) function argument(s)")], null);
}
});
} else
{return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),curry_fun.call(null,cljs.core.partial.call(null,f,x),(n - 1)))], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),"Missing (system) function argument(s)")], null);
}
});
}
});
curry_fun = function(f,n){
switch(arguments.length){
case 1:
return curry_fun__1.call(this,f);
case 2:
return curry_fun__2.call(this,f,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curry_fun.cljs$core$IFn$_invoke$arity$1 = curry_fun__1;
curry_fun.cljs$core$IFn$_invoke$arity$2 = curry_fun__2;
return curry_fun;
})()
;
termcat.util.lambda.html_constant = (function html_constant(code){return (function (self__7743__auto__,constant_fun_x10489){if(cljs.core.truth_(constant_fun_x10489))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),code),constant_fun_x10489], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),code)], null);
}
});
});
termcat.util.lambda.html_wrapper = (function html_wrapper(tag){return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),[cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(">")].join(''))], null),termcat.rewrite.unwrap.call(null,x),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),[cljs.core.str("<"),cljs.core.str("/"),cljs.core.str(tag),cljs.core.str(">")].join(''))], null));
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),"Missing (system) function argument(s)")], null);
}
});
});
termcat.util.lambda.html_link = (function html_link(text,url){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<a href='"),termcat.util.math.math_block.call(null,termcat.term.center.call(null,url),new cljs.core.Keyword(null,"text","text",1017460895)),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'>"),termcat.util.math.math_block.call(null,termcat.term.center.call(null,text),new cljs.core.Keyword(null,"text","text",1017460895)),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"</a>")], null);
});
termcat.util.lambda.html_image = (function html_image(alt_text,url){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<img src='"),termcat.util.math.math_block.call(null,termcat.term.center.call(null,url),new cljs.core.Keyword(null,"text","text",1017460895)),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"' alt='"),termcat.util.math.math_block.call(null,termcat.term.center.call(null,alt_text),new cljs.core.Keyword(null,"text","text",1017460895)),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'>")], null);
});
/**
* @param {...*} var_args
*/
termcat.util.lambda.bullet_list = (function() { 
var bullet_list__delegate = function (rows){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<ul>")], null),cljs.core.mapcat.call(null,(function (x){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<li>"),termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null),termcat.rewrite.unwrap.call(null,x),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null));
}),rows),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"</ul>")], null));
};
var bullet_list = function (var_args){
var rows = null;if (arguments.length > 0) {
  rows = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bullet_list__delegate.call(this,rows);};
bullet_list.cljs$lang$maxFixedArity = 0;
bullet_list.cljs$lang$applyTo = (function (arglist__10490){
var rows = cljs.core.seq(arglist__10490);
return bullet_list__delegate(rows);
});
bullet_list.cljs$core$IFn$_invoke$arity$variadic = bullet_list__delegate;
return bullet_list;
})()
;
/**
* @param {...*} var_args
*/
termcat.util.lambda.numbered_list = (function() { 
var numbered_list__delegate = function (rows){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<ol>")], null),cljs.core.mapcat.call(null,(function (x){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<li>"),termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null),termcat.rewrite.unwrap.call(null,x),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null));
}),rows),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"</ol>")], null));
};
var numbered_list = function (var_args){
var rows = null;if (arguments.length > 0) {
  rows = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return numbered_list__delegate.call(this,rows);};
numbered_list.cljs$lang$maxFixedArity = 0;
numbered_list.cljs$lang$applyTo = (function (arglist__10491){
var rows = cljs.core.seq(arglist__10491);
return numbered_list__delegate(rows);
});
numbered_list.cljs$core$IFn$_invoke$arity$variadic = numbered_list__delegate;
return numbered_list;
})()
;
/**
* @param {...*} var_args
*/
termcat.util.lambda.map_fn = (function() { 
var map_fn__delegate = function (lambda,args){var x = cljs.core.mapcat.call(null,(function (x,y){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null),x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null));
}),cljs.core.repeat.call(null,termcat.rewrite.unwrap.call(null,lambda)),args);return x;
};
var map_fn = function (lambda,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_fn__delegate.call(this,lambda,args);};
map_fn.cljs$lang$maxFixedArity = 1;
map_fn.cljs$lang$applyTo = (function (arglist__10492){
var lambda = cljs.core.first(arglist__10492);
var args = cljs.core.rest(arglist__10492);
return map_fn__delegate(lambda,args);
});
map_fn.cljs$core$IFn$_invoke$arity$variadic = map_fn__delegate;
return map_fn;
})()
;
termcat.util.lambda.reduce_fn = (function reduce_fn(lambda,result){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),(function (self,new_el){if((new_el == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),termcat.util.lambda.curry_fun.call(null,reduce_fn,2)),lambda,termcat.term.block.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"reduce-fn","reduce-fn",3052859905)),termcat.term.fragmentcat.call(null,termcat.rewrite.unwrap.call(null,lambda),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,new_el], null)),termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"reduce-fn","reduce-fn",3052859905)))], null);
}
}))], null);
});
termcat.util.lambda.block_source = (function block_source(block_t){var lpos = new cljs.core.Keyword(null,"lpos","lpos",1017232858).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,termcat.term.left.call(null,block_t)));var rpos = new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,termcat.term.right.call(null,block_t)));var src = new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,termcat.term.left.call(null,block_t)));if(cljs.core.truth_((function (){var and__3391__auto__ = lpos;if(cljs.core.truth_(and__3391__auto__))
{return rpos;
} else
{return and__3391__auto__;
}
})()))
{return termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),cljs.core.subs.call(null,src,(lpos + 1),rpos));
} else
{return termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),"Source code not found");
}
});
termcat.util.lambda.lit = (function lit(src){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.lambda.block_source.call(null,src)], null);
});
termcat.util.lambda.litfork = (function litfork(src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"litfork","litfork",1196392267)),termcat.term.fragment.call(null,termcat.util.lambda.block_source.call(null,src)),termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"litfork","litfork",1196392267))),src], null);
});
termcat.util.lambda.nth_fn = (function nth_fn(n){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),termcat.util.lambda.curry_fun.call(null,(function() { 
var G__10495__delegate = function (args){try{return termcat.rewrite.unwrap.call(null,cljs.core.nth.call(null,args,termcat.util.lambda.tval.call(null,n,cljs.core.integer_QMARK_)));
}catch (e10494){if((e10494 instanceof java.lang.Exception))
{var x__7737__auto__ = e10494;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),x__7737__auto__.getMessage())], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10494;
} else
{return null;
}
}
}};
var G__10495 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10495__delegate.call(this,args);};
G__10495.cljs$lang$maxFixedArity = 0;
G__10495.cljs$lang$applyTo = (function (arglist__10496){
var args = cljs.core.seq(arglist__10496);
return G__10495__delegate(args);
});
G__10495.cljs$core$IFn$_invoke$arity$variadic = G__10495__delegate;
return G__10495;
})()
))], null);
});
termcat.util.lambda.apply_fn = (function apply_fn(f,arg){return cljs.core.concat.call(null,cljs.core.mapcat.call(null,termcat.rewrite.unwrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,arg], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))], null));
});
termcat.util.lambda.plus = (function plus(x,y){try{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str((termcat.util.lambda.tval.call(null,x,cljs.core.number_QMARK_) + termcat.util.lambda.tval.call(null,y,cljs.core.number_QMARK_)))].join(''))],null));
}catch (e10498){if((e10498 instanceof java.lang.Exception))
{var x__7737__auto__ = e10498;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),x__7737__auto__.getMessage())], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10498;
} else
{return null;
}
}
}});
termcat.util.lambda.greater_than = (function greater_than(x,y){try{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str((termcat.util.lambda.tval.call(null,x,cljs.core.number_QMARK_) > termcat.util.lambda.tval.call(null,y,cljs.core.number_QMARK_)))].join(''))],null));
}catch (e10500){if((e10500 instanceof java.lang.Exception))
{var x__7737__auto__ = e10500;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),x__7737__auto__.getMessage())], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10500;
} else
{return null;
}
}
}});
termcat.util.lambda.range_fn = (function range_fn(start,end){try{return cljs.core.map.call(null,(function (p1__10501_SHARP_){return termcat.term.block.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"range","range",1122184367)),termcat.term.fragment.call(null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),p1__10501_SHARP_)),termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"range","range",1122184367)));
}),cljs.core.map.call(null,cljs.core.str,cljs.core.range.call(null,termcat.util.lambda.tval.call(null,start,cljs.core.integer_QMARK_),termcat.util.lambda.tval.call(null,end,cljs.core.integer_QMARK_))));
}catch (e10503){if((e10503 instanceof java.lang.Exception))
{var x__7737__auto__ = e10503;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),x__7737__auto__.getMessage())], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10503;
} else
{return null;
}
}
}});
termcat.util.lambda.eq_fn = (function eq_fn(t1,t2){var v1 = termcat.util.lambda.tval.call(null,t1,cljs.core.constantly.call(null,true));var v2 = termcat.util.lambda.tval.call(null,t2,cljs.core.constantly.call(null,true));return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str((cljs.core.not_EQ_.call(null,null,v1)) && (cljs.core._EQ_.call(null,v1,v2)))].join(''))],null));
});
termcat.util.lambda.fun_map = cljs.core.PersistentHashMap.fromArrays([".apply",":h1",":h2",":h3",":h4",":h5",":h6",":img",".lit",":numbered-list",".litfork",".identity",".map",".range",":bullet-list",":strong",":quotation",":underline",".add",".nth",".reduce",":link",".eq",":emph",".gt"],[termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.apply_fn,2),termcat.util.lambda.html_wrapper.call(null,"h1"),termcat.util.lambda.html_wrapper.call(null,"h2"),termcat.util.lambda.html_wrapper.call(null,"h3"),termcat.util.lambda.html_wrapper.call(null,"h4"),termcat.util.lambda.html_wrapper.call(null,"h5"),termcat.util.lambda.html_wrapper.call(null,"h6"),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.html_image,2),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.lit,1),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.numbered_list),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.litfork,1),(function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return termcat.rewrite.unwrap.call(null,x);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),"Missing (system) function argument(s)")], null);
}
}),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.map_fn),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.range_fn,2),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.bullet_list),termcat.util.lambda.html_wrapper.call(null,"strong"),termcat.util.lambda.html_wrapper.call(null,"blockquote"),termcat.util.lambda.html_wrapper.call(null,"u"),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.plus,2),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.nth_fn,1),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.reduce_fn,2),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.html_link,2),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.eq_fn,2),termcat.util.lambda.html_wrapper.call(null,"em"),termcat.util.lambda.curry_fun.call(null,termcat.util.lambda.greater_than,2)]);
termcat.util.lambda.fun_call_head = (function fun_call_head(fname){var f = cljs.core.get.call(null,termcat.util.lambda.fun_map,fname);if(cljs.core.fn_QMARK_.call(null,f))
{return termcat.term.token.call(null,new cljs.core.Keyword(null,"fun","fun",1014006001),cljs.core.with_meta.call(null,f,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun-name","fun-name",2344786315),fname], null)));
} else
{return termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),[cljs.core.str("Function not found \u2013 "),cljs.core.str(fname)].join(''));
}
});
/**
* Returns a sequence of terms that represents a function call.
* 
* args is a sequence of fragments.
* @param {...*} var_args
*/
termcat.util.lambda.fun_call_seq = (function() { 
var fun_call_seq__delegate = function (fname,args){return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.lambda.fun_call_head.call(null,fname)], null),(function (){var iter__4120__auto__ = (function iter__10508(s__10509){return (new cljs.core.LazySeq(null,(function (){var s__10509__$1 = s__10509;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10509__$1);if(temp__4092__auto__)
{var s__10509__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10509__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10509__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10511 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10510 = 0;while(true){
if((i__10510 < size__4119__auto__))
{var arg = cljs.core._nth.call(null,c__4118__auto__,i__10510);cljs.core.chunk_append.call(null,b__10511,termcat.term.block.call(null,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),new cljs.core.Keyword(null,"fun-call-seq","fun-call-seq",1459025008)], null)),arg,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"fun-call-seq","fun-call-seq",1459025008)], null))));
{
var G__10512 = (i__10510 + 1);
i__10510 = G__10512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),iter__10508.call(null,cljs.core.chunk_rest.call(null,s__10509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),null);
}
} else
{var arg = cljs.core.first.call(null,s__10509__$2);return cljs.core.cons.call(null,termcat.term.block.call(null,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),new cljs.core.Keyword(null,"fun-call-seq","fun-call-seq",1459025008)], null)),arg,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"fun-call-seq","fun-call-seq",1459025008)], null))),iter__10508.call(null,cljs.core.rest.call(null,s__10509__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,args);
})());
};
var fun_call_seq = function (fname,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fun_call_seq__delegate.call(this,fname,args);};
fun_call_seq.cljs$lang$maxFixedArity = 1;
fun_call_seq.cljs$lang$applyTo = (function (arglist__10513){
var fname = cljs.core.first(arglist__10513);
var args = cljs.core.rest(arglist__10513);
return fun_call_seq__delegate(fname,args);
});
fun_call_seq.cljs$core$IFn$_invoke$arity$variadic = fun_call_seq__delegate;
return fun_call_seq;
})()
;
