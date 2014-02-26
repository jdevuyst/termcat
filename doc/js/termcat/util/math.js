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
termcat.util.math.number_string_QMARK_ = (function number_string_QMARK_(s){try{return typeof cljs.reader.read_string(s) === 'number';
}catch (e10567){var x = e10567;return false;
}});
termcat.util.math.math_opts = (function math_opts(t){var ocr_10575 = termcat.term.tt(t);try{if((cljs.core.vector_QMARK_(ocr_10575)) && ((cljs.core.count(ocr_10575) === 2)))
{try{var ocr_10575_0__10577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10575,0);if(cljs.core.keyword_identical_QMARK_(ocr_10575_0__10577,cljs.core.constant$keyword$26))
{try{var ocr_10575_1__10578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10575,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10575_1__10578)))
{var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10575,1);return x;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10581){if((e10581 instanceof Error))
{var e__3769__auto__ = e10581;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10581;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10580){if((e10580 instanceof Error))
{var e__3769__auto__ = e10580;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10580;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10579){if((e10579 instanceof Error))
{var e__3769__auto__ = e10579;if((e__3769__auto__ === cljs.core.match.backtrack))
{return false;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10579;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
termcat.util.math.math_block = (function() { 
var math_block__delegate = function (frag,keys){var tag = cljs.core.into(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$27,null], null), null),keys);return termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(tag),frag,termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(tag));
};
var math_block = function (frag,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return math_block__delegate.call(this,frag,keys);};
math_block.cljs$lang$maxFixedArity = 1;
math_block.cljs$lang$applyTo = (function (arglist__10582){
var frag = cljs.core.first(arglist__10582);
var keys = cljs.core.rest(arglist__10582);
return math_block__delegate(frag,keys);
});
math_block.cljs$core$IFn$_invoke$arity$variadic = math_block__delegate;
return math_block;
})()
;
termcat.util.math.math_cast = (function() {
var math_cast = null;
var math_cast__1 = (function (t){return math_cast.cljs$core$IFn$_invoke$arity$2(t,null);
});
var math_cast__2 = (function (t,opts){var ocr_10595 = termcat.term.tt(t);try{if(cljs.core.keyword_identical_QMARK_(ocr_10595,cljs.core.constant$keyword$31))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30,cljs.core.constant$keyword$32], 0))], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10595,cljs.core.constant$keyword$33))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10595,cljs.core.constant$keyword$34))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10595,cljs.core.constant$keyword$35))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10601){if((e10601 instanceof Error))
{var e__3769__auto__ = e10601;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{if((cljs.core.vector_QMARK_(ocr_10595)) && ((cljs.core.count(ocr_10595) === 2)))
{try{var ocr_10595_0__10599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10595,0);if(cljs.core.keyword_identical_QMARK_(ocr_10595_0__10599,cljs.core.constant$keyword$26))
{try{var ocr_10595_1__10600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10595,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10595_1__10600)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10605){if((e10605 instanceof Error))
{var e__3769__auto____$1 = e10605;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10605;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10603){if((e10603 instanceof Error))
{var e__3769__auto____$1 = e10603;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10595_0__10599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10595,0);if(cljs.core.keyword_identical_QMARK_(ocr_10595_0__10599,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = termcat.util.math.math_opts(t);if(cljs.core.truth_(temp__4090__auto__))
{var cur_opts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.into(cur_opts,opts)),termcat.term.center(t),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.into(cur_opts,opts)))], null);
} else
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(termcat.term.payload(termcat.term.left(t)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.left(t)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30], 0))], null):null),(cljs.core.truth_(termcat.rewrite.unwrap(t))?math_cast.cljs$core$IFn$_invoke$arity$2(cljs.core.first(termcat.rewrite.unwrap(t)),opts):null),cljs.core.array_seq([cljs.core.next(termcat.rewrite.unwrap(t)),(cljs.core.truth_(termcat.term.payload(termcat.term.right(t)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.right(t)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30], 0))], null):null)], 0));
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10604){if((e10604 instanceof Error))
{var e__3769__auto____$2 = e10604;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10604;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10603;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10602){if((e10602 instanceof Error))
{var e__3769__auto____$1 = e10602;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{var s = [cljs.core.str(termcat.term.payload(t))].join('');if(cljs.core.truth_(termcat.util.math.number_string_QMARK_(s)))
{return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t], 0)),cljs.core.array_seq([cljs.core.constant$keyword$28], 0))],null));
} else
{return clojure.core.reducers.foldcat(clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((function (p1__10583_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(termcat.util.math.math_block,p1__10583_SHARP_,cljs.core.constant$keyword$29,opts);
}),clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.fragment,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(termcat.term.token,cljs.core.constant$keyword$7),cljs.core.vec(s)))));
}
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10602;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10601;
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
termcat.util.math.math_block_QMARK_ = (function math_block_QMARK_(t){var ocr_10614 = termcat.term.tt(t);try{if((cljs.core.vector_QMARK_(ocr_10614)) && ((cljs.core.count(ocr_10614) === 2)))
{try{var ocr_10614_0__10617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10614,0);if(cljs.core.keyword_identical_QMARK_(ocr_10614_0__10617,cljs.core.constant$keyword$26))
{try{var ocr_10614_1__10618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10614,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10614_1__10618)))
{return true;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10621){if((e10621 instanceof Error))
{var e__3769__auto__ = e10621;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10621;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10620){if((e10620 instanceof Error))
{var e__3769__auto__ = e10620;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10620;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10619){if((e10619 instanceof Error))
{var e__3769__auto__ = e10619;if((e__3769__auto__ === cljs.core.match.backtrack))
{return false;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10619;
} else
{return null;
}
}
}});
termcat.util.math.math_row_cast = (function math_row_cast(t){return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1((((termcat.term.block_QMARK_(t)) && (cljs.core.not(termcat.util.math.math_block_QMARK_(t))))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$36),termcat.term.center(t),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$36)):t))),cljs.core.array_seq([cljs.core.constant$keyword$37], 0));
});
/**
* @param {...*} var_args
*/
termcat.util.math.merge_rows = (function() { 
var merge_rows__delegate = function (sep,ts){var $ = ts;var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function ($){
return (function (p1__10622_SHARP_){var ocr_10631 = termcat.term.tt(p1__10622_SHARP_);try{if((cljs.core.vector_QMARK_(ocr_10631)) && ((cljs.core.count(ocr_10631) === 2)))
{try{var ocr_10631_0__10634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10631,0);if(cljs.core.keyword_identical_QMARK_(ocr_10631_0__10634,cljs.core.constant$keyword$26))
{try{var ocr_10631_1__10635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10631,1);if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(ocr_10631_1__10635)))
{return termcat.rewrite.unwrap(p1__10622_SHARP_);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10638){if((e10638 instanceof Error))
{var e__3769__auto__ = e10638;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10638;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10637){if((e10637 instanceof Error))
{var e__3769__auto__ = e10637;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10637;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10636){if((e10636 instanceof Error))
{var e__3769__auto__ = e10636;if((e__3769__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10622_SHARP_], null);
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10636;
} else
{return null;
}
}
}});})($))
,$);var $__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,$__$1);var $__$3 = termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1($__$2);var $__$4 = termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic($__$3,cljs.core.array_seq([cljs.core.constant$keyword$37], 0));return $__$4;
};
var merge_rows = function (sep,var_args){
var ts = null;if (arguments.length > 1) {
  ts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_rows__delegate.call(this,sep,ts);};
merge_rows.cljs$lang$maxFixedArity = 1;
merge_rows.cljs$lang$applyTo = (function (arglist__10639){
var sep = cljs.core.first(arglist__10639);
var ts = cljs.core.rest(arglist__10639);
return merge_rows__delegate(sep,ts);
});
merge_rows.cljs$core$IFn$_invoke$arity$variadic = merge_rows__delegate;
return merge_rows;
})()
;
