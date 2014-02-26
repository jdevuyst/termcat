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
termcat.util.lambda.tval = (function tval(t,pred){var $ = termcat.term.ednval(termcat.term.center(t));var $__$1 = (cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1($) : pred.call(null,$)))?$:(function(){throw (new java.lang.Exception("Wrong type"))})());return $__$1;
});
termcat.util.lambda.curry_fun = (function() {
var curry_fun = null;
var curry_fun__1 = (function (f){return (function (self,x){if(cljs.core.truth_(x))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,curry_fun.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,x)))], null);
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
});
var curry_fun__2 = (function (f,n){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,1))
{return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Missing (system) function argument(s)")], null);
}
});
} else
{return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,curry_fun.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,x),(n - 1)))], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Missing (system) function argument(s)")], null);
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,code),constant_fun_x10489], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,code)], null);
}
});
});
termcat.util.lambda.html_wrapper = (function html_wrapper(tag){return (function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str(tag),cljs.core.str(">")].join(''))], null),termcat.rewrite.unwrap(x),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str("/"),cljs.core.str(tag),cljs.core.str(">")].join(''))], null)], 0));
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Missing (system) function argument(s)")], null);
}
});
});
termcat.util.lambda.html_link = (function html_link(text,url){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<a href='"),termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(url),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'>"),termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(text),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</a>")], null);
});
termcat.util.lambda.html_image = (function html_image(alt_text,url){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<img src='"),termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(url),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"' alt='"),termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(alt_text),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'>")], null);
});
/**
* @param {...*} var_args
*/
termcat.util.lambda.bullet_list = (function() { 
var bullet_list__delegate = function (rows){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<ul>")], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (x){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<li>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null),termcat.rewrite.unwrap(x),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null)], 0));
}),rows),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</ul>")], null)], 0));
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
var numbered_list__delegate = function (rows){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<ol>")], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (x){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<li>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null),termcat.rewrite.unwrap(x),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null)], 0));
}),rows),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</ol>")], null)], 0));
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
var map_fn__delegate = function (lambda,args){var x = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x,y){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null),x,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null)], 0));
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(lambda)),cljs.core.array_seq([args], 0));return x;
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
termcat.util.lambda.reduce_fn = (function reduce_fn(lambda,result){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,(function (self,new_el){if((new_el == null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(reduce_fn,2)),lambda,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(termcat.rewrite.unwrap(lambda),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,new_el], null)], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$78))], null);
}
}))], null);
});
termcat.util.lambda.block_source = (function block_source(block_t){var lpos = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(termcat.term.left(block_t)));var rpos = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(termcat.term.right(block_t)));var src = cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(termcat.term.left(block_t)));if(cljs.core.truth_((function (){var and__3391__auto__ = lpos;if(cljs.core.truth_(and__3391__auto__))
{return rpos;
} else
{return and__3391__auto__;
}
})()))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(src,(lpos + 1),rpos));
} else
{return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Source code not found");
}
});
termcat.util.lambda.lit = (function lit(src){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.lambda.block_source(src)], null);
});
termcat.util.lambda.litfork = (function litfork(src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$82),termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.lambda.block_source(src)], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$82)),src], null);
});
termcat.util.lambda.nth_fn = (function nth_fn(n){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$1((function() { 
var G__10495__delegate = function (args){try{return termcat.rewrite.unwrap(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,termcat.util.lambda.tval(n,cljs.core.integer_QMARK_)));
}catch (e10494){if((e10494 instanceof java.lang.Exception))
{var x__7737__auto__ = e10494;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,x__7737__auto__.getMessage())], null);
} else
{if(cljs.core.constant$keyword$6)
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
termcat.util.lambda.apply_fn = (function apply_fn(f,arg){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.unwrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,arg], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)], null));
});
termcat.util.lambda.plus = (function plus(x,y){try{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str((termcat.util.lambda.tval(x,cljs.core.number_QMARK_) + termcat.util.lambda.tval(y,cljs.core.number_QMARK_)))].join(''))],null));
}catch (e10498){if((e10498 instanceof java.lang.Exception))
{var x__7737__auto__ = e10498;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,x__7737__auto__.getMessage())], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e10498;
} else
{return null;
}
}
}});
termcat.util.lambda.greater_than = (function greater_than(x,y){try{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str((termcat.util.lambda.tval(x,cljs.core.number_QMARK_) > termcat.util.lambda.tval(y,cljs.core.number_QMARK_)))].join(''))],null));
}catch (e10500){if((e10500 instanceof java.lang.Exception))
{var x__7737__auto__ = e10500;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,x__7737__auto__.getMessage())], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e10500;
} else
{return null;
}
}
}});
termcat.util.lambda.range_fn = (function range_fn(start,end){try{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10501_SHARP_){return termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$83),termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,p1__10501_SHARP_)], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$83));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.range.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.tval(start,cljs.core.integer_QMARK_),termcat.util.lambda.tval(end,cljs.core.integer_QMARK_))));
}catch (e10503){if((e10503 instanceof java.lang.Exception))
{var x__7737__auto__ = e10503;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,x__7737__auto__.getMessage())], null);
} else
{if(cljs.core.constant$keyword$6)
{throw e10503;
} else
{return null;
}
}
}});
termcat.util.lambda.eq_fn = (function eq_fn(t1,t2){var v1 = termcat.util.lambda.tval(t1,cljs.core.constantly(true));var v2 = termcat.util.lambda.tval(t2,cljs.core.constantly(true));return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,v1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v1,v2)))].join(''))],null));
});
termcat.util.lambda.fun_map = cljs.core.PersistentHashMap.fromArrays([".apply",":h1",":h2",":h3",":h4",":h5",":h6",":img",".lit",":numbered-list",".litfork",".identity",".map",".range",":bullet-list",":strong",":quotation",":underline",".add",".nth",".reduce",":link",".eq",":emph",".gt"],[termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.apply_fn,2),termcat.util.lambda.html_wrapper("h1"),termcat.util.lambda.html_wrapper("h2"),termcat.util.lambda.html_wrapper("h3"),termcat.util.lambda.html_wrapper("h4"),termcat.util.lambda.html_wrapper("h5"),termcat.util.lambda.html_wrapper("h6"),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.html_image,2),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.lit,1),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$1(termcat.util.lambda.numbered_list),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.litfork,1),(function (self__7749__auto__,x){if(cljs.core.truth_(x))
{return termcat.rewrite.unwrap(x);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Missing (system) function argument(s)")], null);
}
}),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$1(termcat.util.lambda.map_fn),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.range_fn,2),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$1(termcat.util.lambda.bullet_list),termcat.util.lambda.html_wrapper("strong"),termcat.util.lambda.html_wrapper("blockquote"),termcat.util.lambda.html_wrapper("u"),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.plus,2),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.nth_fn,1),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.reduce_fn,2),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.html_link,2),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.eq_fn,2),termcat.util.lambda.html_wrapper("em"),termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.greater_than,2)]);
termcat.util.lambda.fun_call_head = (function fun_call_head(fname){var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(termcat.util.lambda.fun_map,fname);if(cljs.core.fn_QMARK_(f))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,cljs.core.with_meta(f,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$84,fname], null)));
} else
{return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,[cljs.core.str("Function not found \u2013 "),cljs.core.str(fname)].join(''));
}
});
/**
* Returns a sequence of terms that represents a function call.
* 
* args is a sequence of fragments.
* @param {...*} var_args
*/
termcat.util.lambda.fun_call_seq = (function() { 
var fun_call_seq__delegate = function (fname,args){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.lambda.fun_call_head(fname)], null),(function (){var iter__4120__auto__ = (function iter__10508(s__10509){return (new cljs.core.LazySeq(null,(function (){var s__10509__$1 = s__10509;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10509__$1);if(temp__4092__auto__)
{var s__10509__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10509__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__10509__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__10511 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__10510 = 0;while(true){
if((i__10510 < size__4119__auto__))
{var arg = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__10510);cljs.core.chunk_append(b__10511,termcat.term.block(termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$85], null)),arg,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$85], null))));
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
{return cljs.core.chunk_cons(cljs.core.chunk(b__10511),iter__10508(cljs.core.chunk_rest(s__10509__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10511),null);
}
} else
{var arg = cljs.core.first(s__10509__$2);return cljs.core.cons(termcat.term.block(termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$85], null)),arg,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$85], null))),iter__10508(cljs.core.rest(s__10509__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(args);
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
