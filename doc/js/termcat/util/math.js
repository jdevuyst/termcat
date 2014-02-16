// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.util.math');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.match');
termcat.util.math.number_string_QMARK_ = (function number_string_QMARK_(s){try{return typeof cljs.reader.read_string.call(null,s) === 'number';
}catch (e10515){if((e10515 instanceof java.lang.Exception))
{var x = e10515;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10515;
} else
{return null;
}
}
}});
termcat.util.math.math_opts = (function math_opts(t){var ocr_10523 = termcat.term.tt.call(null,t);try{if((cljs.core.vector_QMARK_.call(null,ocr_10523)) && ((cljs.core.count.call(null,ocr_10523) === 2)))
{try{var ocr_10523_0__10525 = cljs.core.nth.call(null,ocr_10523,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10523_0__10525,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_10523_1__10526 = cljs.core.nth.call(null,ocr_10523,1);if(cljs.core.truth_(new cljs.core.Keyword(null,"math","math",1017248378).cljs$core$IFn$_invoke$arity$1(ocr_10523_1__10526)))
{var x = cljs.core.nth.call(null,ocr_10523,1);return x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10529){if((e10529 instanceof Error))
{var e__4796__auto__ = e10529;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10529;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10528){if((e10528 instanceof Error))
{var e__4796__auto__ = e10528;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10528;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10527){if((e10527 instanceof Error))
{var e__4796__auto__ = e10527;if((e__4796__auto__ === cljs.core.match.backtrack))
{return false;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10527;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
termcat.util.math.math_block = (function() { 
var math_block__delegate = function (frag,keys){var tag = cljs.core.into.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"math","math",1017248378),null], null), null),keys);return termcat.term.block.call(null,termcat.term.ldelim.call(null,tag),frag,termcat.term.rdelim.call(null,tag));
};
var math_block = function (frag,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return math_block__delegate.call(this,frag,keys);};
math_block.cljs$lang$maxFixedArity = 1;
math_block.cljs$lang$applyTo = (function (arglist__10530){
var frag = cljs.core.first(arglist__10530);
var keys = cljs.core.rest(arglist__10530);
return math_block__delegate(frag,keys);
});
math_block.cljs$core$IFn$_invoke$arity$variadic = math_block__delegate;
return math_block;
})()
;
termcat.util.math.math_cast = (function() {
var math_cast = null;
var math_cast__1 = (function (t){return math_cast.call(null,t,null);
});
var math_cast__2 = (function (t,opts){var ocr_10543 = termcat.term.tt.call(null,t);try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.call(null,termcat.term.fragment.call(null,t),new cljs.core.Keyword(null,"mo","mo",1013907732),new cljs.core.Keyword(null,"prefix","prefix",4328760836))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543,new cljs.core.Keyword(null,"fun","fun",1014006001)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543,new cljs.core.Keyword(null,"text","text",1017460895)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543,new cljs.core.Keyword(null,"right-quote","right-quote",3807707901)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10549){if((e10549 instanceof Error))
{var e__4796__auto__ = e10549;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_.call(null,ocr_10543)) && ((cljs.core.count.call(null,ocr_10543) === 2)))
{try{var ocr_10543_0__10547 = cljs.core.nth.call(null,ocr_10543,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543_0__10547,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_10543_1__10548 = cljs.core.nth.call(null,ocr_10543,1);if(cljs.core.truth_(new cljs.core.Keyword(null,"math","math",1017248378).cljs$core$IFn$_invoke$arity$1(ocr_10543_1__10548)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10553){if((e10553 instanceof Error))
{var e__4796__auto____$1 = e10553;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10553;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10551){if((e10551 instanceof Error))
{var e__4796__auto____$1 = e10551;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10543_0__10547 = cljs.core.nth.call(null,ocr_10543,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10543_0__10547,new cljs.core.Keyword(null,"block","block",1107736575)))
{var temp__4090__auto__ = termcat.util.math.math_opts.call(null,t);if(cljs.core.truth_(temp__4090__auto__))
{var cur_opts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block.call(null,termcat.term.ldelim.call(null,cljs.core.into.call(null,cur_opts,opts)),termcat.term.center.call(null,t),termcat.term.rdelim.call(null,cljs.core.into.call(null,cur_opts,opts)))], null);
} else
{return cljs.core.concat.call(null,(cljs.core.truth_(termcat.term.payload.call(null,termcat.term.left.call(null,t)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.call(null,termcat.term.fragment.call(null,termcat.term.left.call(null,t)),new cljs.core.Keyword(null,"mo","mo",1013907732))], null):null),(cljs.core.truth_(termcat.rewrite.unwrap.call(null,t))?math_cast.call(null,cljs.core.first.call(null,termcat.rewrite.unwrap.call(null,t)),opts):null),cljs.core.next.call(null,termcat.rewrite.unwrap.call(null,t)),(cljs.core.truth_(termcat.term.payload.call(null,termcat.term.right.call(null,t)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.call(null,termcat.term.fragment.call(null,termcat.term.right.call(null,t)),new cljs.core.Keyword(null,"mo","mo",1013907732))], null):null));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10552){if((e10552 instanceof Error))
{var e__4796__auto____$2 = e10552;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10552;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10551;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10550){if((e10550 instanceof Error))
{var e__4796__auto____$1 = e10550;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{var s = [cljs.core.str(termcat.term.payload.call(null,t))].join('');if(cljs.core.truth_(termcat.util.math.number_string_QMARK_.call(null,s)))
{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.util.math.math_block.call(null,termcat.term.fragment.call(null,t),new cljs.core.Keyword(null,"mn","mn",1013907731))],null));
} else
{return clojure.core.reducers.foldcat.call(null,clojure.core.reducers.map.call(null,(function (p1__10531_SHARP_){return cljs.core.apply.call(null,termcat.util.math.math_block,p1__10531_SHARP_,new cljs.core.Keyword(null,"mi","mi",1013907726),opts);
}),clojure.core.reducers.map.call(null,termcat.term.fragment,clojure.core.reducers.map.call(null,cljs.core.partial.call(null,termcat.term.token,new cljs.core.Keyword(null,"default","default",2558708147)),cljs.core.vec.call(null,s)))));
}
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10550;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10549;
} else
{return null;
}
}
}});
math_cast = function(t,opts){
switch(arguments.length){
case 1:
return math_cast__1.call(this,t);
case 2:
return math_cast__2.call(this,t,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
math_cast.cljs$core$IFn$_invoke$arity$1 = math_cast__1;
math_cast.cljs$core$IFn$_invoke$arity$2 = math_cast__2;
return math_cast;
})()
;
termcat.util.math.math_block_QMARK_ = (function math_block_QMARK_(t){var ocr_10562 = termcat.term.tt.call(null,t);try{if((cljs.core.vector_QMARK_.call(null,ocr_10562)) && ((cljs.core.count.call(null,ocr_10562) === 2)))
{try{var ocr_10562_0__10565 = cljs.core.nth.call(null,ocr_10562,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10562_0__10565,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_10562_1__10566 = cljs.core.nth.call(null,ocr_10562,1);if(cljs.core.truth_(new cljs.core.Keyword(null,"math","math",1017248378).cljs$core$IFn$_invoke$arity$1(ocr_10562_1__10566)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10569){if((e10569 instanceof Error))
{var e__4796__auto__ = e10569;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10569;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10568){if((e10568 instanceof Error))
{var e__4796__auto__ = e10568;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10568;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10567){if((e10567 instanceof Error))
{var e__4796__auto__ = e10567;if((e__4796__auto__ === cljs.core.match.backtrack))
{return false;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10567;
} else
{return null;
}
}
}});
termcat.util.math.math_row_cast = (function math_row_cast(t){return termcat.util.math.math_block.call(null,termcat.term.fragmentcat.call(null,termcat.util.math.math_cast.call(null,(((termcat.term.block_QMARK_.call(null,t)) && (cljs.core.not.call(null,termcat.util.math.math_block_QMARK_.call(null,t))))?termcat.term.block.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"math-row-cast","math-row-cast",2044318697)),termcat.term.center.call(null,t),termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"math-row-cast","math-row-cast",2044318697))):t))),new cljs.core.Keyword(null,"mrow","mrow",1017264575));
});
/**
* @param {...*} var_args
*/
termcat.util.math.merge_rows = (function() { 
var merge_rows__delegate = function (sep,ts){var $ = ts;var $__$1 = cljs.core.map.call(null,((function ($){
return (function (p1__10570_SHARP_){var ocr_10579 = termcat.term.tt.call(null,p1__10570_SHARP_);try{if((cljs.core.vector_QMARK_.call(null,ocr_10579)) && ((cljs.core.count.call(null,ocr_10579) === 2)))
{try{var ocr_10579_0__10582 = cljs.core.nth.call(null,ocr_10579,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10579_0__10582,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_10579_1__10583 = cljs.core.nth.call(null,ocr_10579,1);if(cljs.core.truth_(new cljs.core.Keyword(null,"mrow","mrow",1017264575).cljs$core$IFn$_invoke$arity$1(ocr_10579_1__10583)))
{return termcat.rewrite.unwrap.call(null,p1__10570_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10586){if((e10586 instanceof Error))
{var e__4796__auto__ = e10586;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10586;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10585){if((e10585 instanceof Error))
{var e__4796__auto__ = e10585;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10585;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10584){if((e10584 instanceof Error))
{var e__4796__auto__ = e10584;if((e__4796__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10570_SHARP_], null);
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10584;
} else
{return null;
}
}
}});})($))
,$);var $__$2 = cljs.core.apply.call(null,cljs.core.concat,$__$1);var $__$3 = termcat.term.fragmentcat.call(null,$__$2);var $__$4 = termcat.util.math.math_block.call(null,$__$3,new cljs.core.Keyword(null,"mrow","mrow",1017264575));return $__$4;
};
var merge_rows = function (sep,var_args){
var ts = null;if (arguments.length > 1) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_rows__delegate.call(this,sep,ts);};
merge_rows.cljs$lang$maxFixedArity = 1;
merge_rows.cljs$lang$applyTo = (function (arglist__10587){
var sep = cljs.core.first(arglist__10587);
var ts = cljs.core.rest(arglist__10587);
return merge_rows__delegate(sep,ts);
});
merge_rows.cljs$core$IFn$_invoke$arity$variadic = merge_rows__delegate;
return merge_rows;
})()
;
