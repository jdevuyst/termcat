// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.math');
goog.require('cljs.core');
goog.require('termcat.util.math');
goog.require('termcat.util.math');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
/**
* 
*/
termcat.rules.math.remove_manual_casts = termcat.rewrite.abstraction((function() {
var G__9800 = null;
var G__9800__0 = (function (){return null;
});
var G__9800__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9763 = cljs.core.cons(state__6468__auto__,cljs.core.take(4,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763,4,null);var temp__4090__auto__ = (function (){var ocr_9764 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9764)) && ((cljs.core.count(ocr_9764) === 5)))
{try{var ocr_9764_3__9786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,3);if((ocr_9764_3__9786 === null))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_3__9786,cljs.core.constant$keyword$40))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_3__9786,cljs.core.constant$keyword$43))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9789){if((e9789 instanceof Error))
{var e__4796__auto__ = e9789;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9764_4__9787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,4);if(cljs.core.keyword_identical_QMARK_(ocr_9764_4__9787,cljs.core.constant$keyword$42))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_4__9787,cljs.core.constant$keyword$41))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_4__9787,cljs.core.constant$keyword$38))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9790){if((e9790 instanceof Error))
{var e__4796__auto____$1 = e9790;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9764_1__9784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,1);if((ocr_9764_1__9784 === null))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$42))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(((termcat.term.block_QMARK_(t3))?termcat.term.center(t3):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t3], 0))),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),t4], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9798){if((e9798 instanceof Error))
{var e__4796__auto____$2 = e9798;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9798;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_1__9784,cljs.core.constant$keyword$40))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$42))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(((termcat.term.block_QMARK_(t3))?termcat.term.center(t3):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t3], 0))),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),t4], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9799){if((e9799 instanceof Error))
{var e__4796__auto____$2 = e9799;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9799;
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
}
}catch (e9791){if((e9791 instanceof Error))
{var e__4796__auto____$2 = e9791;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9764_1__9784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,1);if((ocr_9764_1__9784 === null))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$41))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),((termcat.term.block_QMARK_(t3))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(t3),cljs.core.array_seq([cljs.core.constant$keyword$29], 0))], null):termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t3)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9796){if((e9796 instanceof Error))
{var e__4796__auto____$3 = e9796;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9796;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_1__9784,cljs.core.constant$keyword$40))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$41))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),((termcat.term.block_QMARK_(t3))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(t3),cljs.core.array_seq([cljs.core.constant$keyword$29], 0))], null):termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t3)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9797){if((e9797 instanceof Error))
{var e__4796__auto____$3 = e9797;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9797;
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
}
}catch (e9792){if((e9792 instanceof Error))
{var e__4796__auto____$3 = e9792;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9764_1__9784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,1);if((ocr_9764_1__9784 === null))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$38))
{var ts = ((termcat.term.block_QMARK_(t3))?termcat.rewrite.unwrap(t3):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t3], null));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (ts,ocr_9764_2__9785,ocr_9764_1__9784,e__4796__auto____$3,e__4796__auto____$2,e__4796__auto____$1,e__4796__auto__,ocr_9764){
return (function (p1__9762_SHARP_){return termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$2(p1__9762_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null));
});})(ts,ocr_9764_2__9785,ocr_9764_1__9784,e__4796__auto____$3,e__4796__auto____$2,e__4796__auto____$1,e__4796__auto__,ocr_9764))
,ts),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9794){if((e9794 instanceof Error))
{var e__4796__auto____$4 = e9794;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9794;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9764_1__9784,cljs.core.constant$keyword$40))
{try{var ocr_9764_2__9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9764,2);if(cljs.core.keyword_identical_QMARK_(ocr_9764_2__9785,cljs.core.constant$keyword$38))
{var ts = ((termcat.term.block_QMARK_(t3))?termcat.rewrite.unwrap(t3):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t3], null));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (ts,ocr_9764_2__9785,ocr_9764_1__9784,e__4796__auto____$3,e__4796__auto____$2,e__4796__auto____$1,e__4796__auto__,ocr_9764){
return (function (p1__9762_SHARP_){return termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$2(p1__9762_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null));
});})(ts,ocr_9764_2__9785,ocr_9764_1__9784,e__4796__auto____$3,e__4796__auto____$2,e__4796__auto____$1,e__4796__auto__,ocr_9764))
,ts),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9795){if((e9795 instanceof Error))
{var e__4796__auto____$4 = e9795;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9795;
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
}
}catch (e9793){if((e9793 instanceof Error))
{var e__4796__auto____$4 = e9793;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9793;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9792;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9791;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9790;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9789;
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
}catch (e9788){if((e9788 instanceof Error))
{var e__4796__auto__ = e9788;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9788;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(4,input__6469__auto__))], null);
} else
{return null;
}
});
G__9800 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9800__0.call(this);
case 2:
return G__9800__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9800;
})()
);
/**
* 
*/
termcat.rules.math.introduce_math_operators = termcat.rewrite.abstraction((function() {
var G__9848 = null;
var G__9848__0 = (function (){return null;
});
var G__9848__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9801 = cljs.core.cons(state__6468__auto__,cljs.core.take(7,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,6,null);var t7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9801,7,null);var temp__4090__auto__ = (function (){var ocr_9802 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(7,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9802)) && ((cljs.core.count(ocr_9802) === 8)))
{try{var ocr_9802_2__9822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,2);if(cljs.core.keyword_identical_QMARK_(ocr_9802_2__9822,cljs.core.constant$keyword$40))
{try{var ocr_9802_3__9823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,3);if(cljs.core.keyword_identical_QMARK_(ocr_9802_3__9823,cljs.core.constant$keyword$44))
{try{var ocr_9802_5__9825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,5);if(cljs.core.keyword_identical_QMARK_(ocr_9802_5__9825,cljs.core.constant$keyword$44))
{try{var ocr_9802_6__9826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,6);if(cljs.core.keyword_identical_QMARK_(ocr_9802_6__9826,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var ocr_9842 = termcat.term.payload(t3);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9842,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9842 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null);
} else
{if((ocr_9842 === "~~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9844){if((e9844 instanceof Error))
{var e__4796__auto__ = e9844;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9844;
} else
{return null;
}
}
}})(),(function (){var ocr_9845 = termcat.term.payload(t5);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9845,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9845 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null);
} else
{if((ocr_9845 === "~~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9847){if((e9847 instanceof Error))
{var e__4796__auto__ = e9847;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9847;
} else
{return null;
}
}
}})());if(cljs.core.truth_(temp__4090__auto__))
{var opt = temp__4090__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(termcat.util.math.math_block,((termcat.term.block_QMARK_(t4))?termcat.term.center(t4):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t4], 0))),cljs.core.constant$keyword$30,cljs.core.constant$keyword$52,opt)], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t7)], 0));
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9841){if((e9841 instanceof Error))
{var e__4796__auto__ = e9841;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9841;
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
}catch (e9840){if((e9840 instanceof Error))
{var e__4796__auto__ = e9840;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9840;
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
}catch (e9839){if((e9839 instanceof Error))
{var e__4796__auto__ = e9839;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9839;
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
}catch (e9829){if((e9829 instanceof Error))
{var e__4796__auto__ = e9829;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9802_2__9822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,2);if(cljs.core.keyword_identical_QMARK_(ocr_9802_2__9822,cljs.core.constant$keyword$40))
{try{var ocr_9802_3__9823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,3);if(cljs.core.keyword_identical_QMARK_(ocr_9802_3__9823,cljs.core.constant$keyword$44))
{var temp__4090__auto__ = (function (){var ocr_9832 = termcat.term.payload(t3);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9832,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9832 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null);
} else
{if((ocr_9832 === "~~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9834){if((e9834 instanceof Error))
{var e__4796__auto____$1 = e9834;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9834;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var opt = temp__4090__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(termcat.util.math.math_block,((termcat.term.block_QMARK_(t4))?termcat.term.center(t4):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t4], 0))),cljs.core.constant$keyword$30,cljs.core.constant$keyword$47,opt)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t5,t6,t7], null)], 0));
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9831){if((e9831 instanceof Error))
{var e__4796__auto____$1 = e9831;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9831;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9802_2__9822,cljs.core.constant$keyword$44))
{try{var ocr_9802_3__9823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9802,3);if(cljs.core.keyword_identical_QMARK_(ocr_9802_3__9823,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var ocr_9836 = termcat.term.payload(t2);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9836,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9836 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null);
} else
{if((ocr_9836 === "~~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9838){if((e9838 instanceof Error))
{var e__4796__auto____$1 = e9838;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9838;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var opt = temp__4090__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$5(termcat.util.math.math_block,((termcat.term.block_QMARK_(t1))?termcat.term.center(t1):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t1], 0))),cljs.core.constant$keyword$30,cljs.core.constant$keyword$32,opt)], null),cljs.core.array_seq([((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$35,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null], null), null),termcat.term.tt(t4)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null):termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t4)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t5,t6,t7], null)], 0));
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9835){if((e9835 instanceof Error))
{var e__4796__auto____$1 = e9835;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9835;
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
}
}catch (e9830){if((e9830 instanceof Error))
{var e__4796__auto____$1 = e9830;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9830;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9829;
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
}catch (e9828){if((e9828 instanceof Error))
{var e__4796__auto__ = e9828;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9828;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(7,input__6469__auto__))], null);
} else
{return null;
}
});
G__9848 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9848__0.call(this);
case 2:
return G__9848__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9848;
})()
);
termcat.rules.math.split_base_sub_sup = (function split_base_sub_sup(t){var ocr_9863 = termcat.term.tt(t);try{if((cljs.core.vector_QMARK_(ocr_9863)) && ((cljs.core.count(ocr_9863) === 2)))
{try{var ocr_9863_0__9868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,0);if(cljs.core.keyword_identical_QMARK_(ocr_9863_0__9868,cljs.core.constant$keyword$26))
{try{var ocr_9863_1__9869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,1);if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(ocr_9863_1__9869)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),cljs.core.second(termcat.rewrite.unwrap(t)),null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9876){if((e9876 instanceof Error))
{var e__4796__auto__ = e9876;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9876;
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
}catch (e9871){if((e9871 instanceof Error))
{var e__4796__auto__ = e9871;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9863_0__9868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,0);if(cljs.core.keyword_identical_QMARK_(ocr_9863_0__9868,cljs.core.constant$keyword$26))
{try{var ocr_9863_1__9869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,1);if(cljs.core.truth_(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(ocr_9863_1__9869)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),null,cljs.core.second(termcat.rewrite.unwrap(t))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9875){if((e9875 instanceof Error))
{var e__4796__auto____$1 = e9875;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9875;
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
}catch (e9872){if((e9872 instanceof Error))
{var e__4796__auto____$1 = e9872;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9863_0__9868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,0);if(cljs.core.keyword_identical_QMARK_(ocr_9863_0__9868,cljs.core.constant$keyword$26))
{try{var ocr_9863_1__9869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9863,1);if(cljs.core.truth_(cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(ocr_9863_1__9869)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),cljs.core.second(termcat.rewrite.unwrap(t)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.unwrap(t),2)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9874){if((e9874 instanceof Error))
{var e__4796__auto____$2 = e9874;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9874;
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
}catch (e9873){if((e9873 instanceof Error))
{var e__4796__auto____$2 = e9873;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9873;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9872;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9871;
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
}catch (e9870){if((e9870 instanceof Error))
{var e__4796__auto__ = e9870;if((e__4796__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null,null], null);
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9870;
} else
{return null;
}
}
}});
termcat.rules.math.subsup_token = (function subsup_token(x,y){var $ = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__9877_SHARP_,p2__9878_SHARP_){return cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__9877_SHARP_,p2__9878_SHARP_],null)));
}),x,y);var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function ($){
return (function (p1__9879_SHARP_){if(!(cljs.core.empty_QMARK_(p1__9879_SHARP_)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(termcat.util.math.merge_rows,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"&InvisibleComma;")], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(termcat.util.math.math_cast,p1__9879_SHARP_));
} else
{return null;
}
});})($))
,$);var $__$2 = cljs.core.vec($__$1);var $__$3 = (function (){try{if((cljs.core.vector_QMARK_($__$2)) && ((cljs.core.count($__$2) === 3)))
{try{var $_0__9895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);if(($_0__9895 === null))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9899){if((e9899 instanceof Error))
{var e__4796__auto__ = e9899;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var $_1__9896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);if(($_1__9896 === null))
{try{var $_2__9897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);if(($_2__9897 === null))
{var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9903){if((e9903 instanceof Error))
{var e__4796__auto____$1 = e9903;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9903;
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
}catch (e9900){if((e9900 instanceof Error))
{var e__4796__auto____$1 = e9900;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var $_1__9896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);if(($_1__9896 === null))
{var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0)),cljs.core.array_seq([cljs.core.constant$keyword$54], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9901){if((e9901 instanceof Error))
{var e__4796__auto____$2 = e9901;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var $_2__9897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);if(($_2__9897 === null))
{var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0)),cljs.core.array_seq([cljs.core.constant$keyword$55], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9902){if((e9902 instanceof Error))
{var e__4796__auto____$3 = e9902;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b,c], 0)),cljs.core.array_seq([cljs.core.constant$keyword$53], 0));
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9902;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9901;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9900;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9899;
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
}catch (e9898){if((e9898 instanceof Error))
{var e__4796__auto__ = e9898;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str($__$2)].join('')));
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9898;
} else
{return null;
}
}
}})();return $__$3;
});
/**
* 
*/
termcat.rules.math.introduce_msub_msup = termcat.rewrite.abstraction((function() {
var G__9962 = null;
var G__9962__0 = (function (){return null;
});
var G__9962__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9904 = cljs.core.cons(state__6468__auto__,cljs.core.take(3,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904,3,null);var temp__4090__auto__ = (function (){var ocr_9905 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9905)) && ((cljs.core.count(ocr_9905) === 4)))
{try{var ocr_9905_1__9917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,1);if((cljs.core.vector_QMARK_(ocr_9905_1__9917)) && ((cljs.core.count(ocr_9905_1__9917) === 2)))
{try{var ocr_9905_1__9917_0__9920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_1__9917,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_1__9917_0__9920,cljs.core.constant$keyword$26))
{try{var ocr_9905_1__9917_1__9921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_1__9917,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_9905_1__9917_1__9921)))
{try{var ocr_9905_2__9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,2);if(cljs.core.keyword_identical_QMARK_(ocr_9905_2__9918,cljs.core.constant$keyword$35))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,(function (){var length = cljs.core.count([cljs.core.str(termcat.term.payload(t2))].join(''));var G__9961 = length;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,G__9961))
{return "\u2032";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2,G__9961))
{return "\u2033";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(3,G__9961))
{return "\u2034";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(4,G__9961))
{return "\u2057";
} else
{if(cljs.core.constant$keyword$6)
{return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,"\u2032"));
} else
{return null;
}
}
}
}
}
})())], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30], 0))], null)),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9960){if((e9960 instanceof Error))
{var e__4796__auto__ = e9960;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9960;
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
}catch (e9959){if((e9959 instanceof Error))
{var e__4796__auto__ = e9959;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9959;
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
}catch (e9958){if((e9958 instanceof Error))
{var e__4796__auto__ = e9958;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9958;
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
}catch (e9935){if((e9935 instanceof Error))
{var e__4796__auto__ = e9935;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9905_1__9917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,1);if(cljs.core.keyword_identical_QMARK_(ocr_9905_1__9917,cljs.core.constant$keyword$7))
{try{var ocr_9905_2__9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,2);if(cljs.core.keyword_identical_QMARK_(ocr_9905_2__9918,cljs.core.constant$keyword$51))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9955){if((e9955 instanceof Error))
{var e__4796__auto____$1 = e9955;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if((cljs.core.vector_QMARK_(ocr_9905_3__9919)) && ((cljs.core.count(ocr_9905_3__9919) === 2)))
{try{var ocr_9905_3__9919_0__9922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_3__9919,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919_0__9922,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9957){if((e9957 instanceof Error))
{var e__4796__auto____$2 = e9957;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9957;
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
}catch (e9956){if((e9956 instanceof Error))
{var e__4796__auto____$2 = e9956;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9956;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9955;
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
}catch (e9954){if((e9954 instanceof Error))
{var e__4796__auto____$1 = e9954;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9954;
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
}catch (e9936){if((e9936 instanceof Error))
{var e__4796__auto____$1 = e9936;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9905_1__9917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,1);if((cljs.core.vector_QMARK_(ocr_9905_1__9917)) && ((cljs.core.count(ocr_9905_1__9917) === 2)))
{try{var ocr_9905_1__9917_0__9924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_1__9917,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_1__9917_0__9924,cljs.core.constant$keyword$26))
{try{var ocr_9905_2__9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,2);if(cljs.core.keyword_identical_QMARK_(ocr_9905_2__9918,cljs.core.constant$keyword$51))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9951){if((e9951 instanceof Error))
{var e__4796__auto____$2 = e9951;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if((cljs.core.vector_QMARK_(ocr_9905_3__9919)) && ((cljs.core.count(ocr_9905_3__9919) === 2)))
{try{var ocr_9905_3__9919_0__9926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_3__9919,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919_0__9926,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9953){if((e9953 instanceof Error))
{var e__4796__auto____$3 = e9953;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9953;
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
}catch (e9952){if((e9952 instanceof Error))
{var e__4796__auto____$3 = e9952;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9952;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9951;
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
}catch (e9950){if((e9950 instanceof Error))
{var e__4796__auto____$2 = e9950;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9950;
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
}catch (e9949){if((e9949 instanceof Error))
{var e__4796__auto____$2 = e9949;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9949;
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
}catch (e9937){if((e9937 instanceof Error))
{var e__4796__auto____$2 = e9937;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9905_1__9917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,1);if(cljs.core.keyword_identical_QMARK_(ocr_9905_1__9917,cljs.core.constant$keyword$7))
{try{var ocr_9905_2__9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,2);if(cljs.core.keyword_identical_QMARK_(ocr_9905_2__9918,cljs.core.constant$keyword$50))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9946){if((e9946 instanceof Error))
{var e__4796__auto____$3 = e9946;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if((cljs.core.vector_QMARK_(ocr_9905_3__9919)) && ((cljs.core.count(ocr_9905_3__9919) === 2)))
{try{var ocr_9905_3__9919_0__9928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_3__9919,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919_0__9928,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9948){if((e9948 instanceof Error))
{var e__4796__auto____$4 = e9948;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9948;
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
}catch (e9947){if((e9947 instanceof Error))
{var e__4796__auto____$4 = e9947;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9947;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9946;
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
}catch (e9945){if((e9945 instanceof Error))
{var e__4796__auto____$3 = e9945;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9945;
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
}catch (e9938){if((e9938 instanceof Error))
{var e__4796__auto____$3 = e9938;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9905_1__9917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,1);if((cljs.core.vector_QMARK_(ocr_9905_1__9917)) && ((cljs.core.count(ocr_9905_1__9917) === 2)))
{try{var ocr_9905_1__9917_0__9930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_1__9917,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_1__9917_0__9930,cljs.core.constant$keyword$26))
{try{var ocr_9905_2__9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,2);if(cljs.core.keyword_identical_QMARK_(ocr_9905_2__9918,cljs.core.constant$keyword$50))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9942){if((e9942 instanceof Error))
{var e__4796__auto____$4 = e9942;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9905_3__9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905,3);if((cljs.core.vector_QMARK_(ocr_9905_3__9919)) && ((cljs.core.count(ocr_9905_3__9919) === 2)))
{try{var ocr_9905_3__9919_0__9932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9905_3__9919,0);if(cljs.core.keyword_identical_QMARK_(ocr_9905_3__9919_0__9932,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9944){if((e9944 instanceof Error))
{var e__4796__auto____$5 = e9944;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9944;
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
}catch (e9943){if((e9943 instanceof Error))
{var e__4796__auto____$5 = e9943;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9943;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9942;
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
}catch (e9941){if((e9941 instanceof Error))
{var e__4796__auto____$4 = e9941;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9941;
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
}catch (e9940){if((e9940 instanceof Error))
{var e__4796__auto____$4 = e9940;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9940;
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
}catch (e9939){if((e9939 instanceof Error))
{var e__4796__auto____$4 = e9939;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9939;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9938;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9937;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9936;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9935;
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
}catch (e9934){if((e9934 instanceof Error))
{var e__4796__auto__ = e9934;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9934;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(3,input__6469__auto__))], null);
} else
{return null;
}
});
G__9962 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9962__0.call(this);
case 2:
return G__9962__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9962;
})()
);
/**
* 
*/
termcat.rules.math.introduce_mfrac = termcat.rewrite.abstraction((function() {
var G__9991 = null;
var G__9991__0 = (function (){return null;
});
var G__9991__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9963 = cljs.core.cons(state__6468__auto__,cljs.core.take(3,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,3,null);var temp__4090__auto__ = (function (){var ocr_9964 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9964)) && ((cljs.core.count(ocr_9964) === 4)))
{try{var ocr_9964_1__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,1);if(cljs.core.keyword_identical_QMARK_(ocr_9964_1__9970,cljs.core.constant$keyword$7))
{try{var ocr_9964_2__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,2);if(cljs.core.keyword_identical_QMARK_(ocr_9964_2__9971,cljs.core.constant$keyword$57))
{try{var ocr_9964_3__9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,3);if(cljs.core.keyword_identical_QMARK_(ocr_9964_3__9972,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9988){if((e9988 instanceof Error))
{var e__4796__auto__ = e9988;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9964_3__9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,3);if((cljs.core.vector_QMARK_(ocr_9964_3__9972)) && ((cljs.core.count(ocr_9964_3__9972) === 2)))
{try{var ocr_9964_3__9972_0__9973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964_3__9972,0);if(cljs.core.keyword_identical_QMARK_(ocr_9964_3__9972_0__9973,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9990){if((e9990 instanceof Error))
{var e__4796__auto____$1 = e9990;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9990;
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
}catch (e9989){if((e9989 instanceof Error))
{var e__4796__auto____$1 = e9989;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9989;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9988;
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
}catch (e9987){if((e9987 instanceof Error))
{var e__4796__auto__ = e9987;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9987;
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
}catch (e9980){if((e9980 instanceof Error))
{var e__4796__auto__ = e9980;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9964_1__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,1);if((cljs.core.vector_QMARK_(ocr_9964_1__9970)) && ((cljs.core.count(ocr_9964_1__9970) === 2)))
{try{var ocr_9964_1__9970_0__9975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964_1__9970,0);if(cljs.core.keyword_identical_QMARK_(ocr_9964_1__9970_0__9975,cljs.core.constant$keyword$26))
{try{var ocr_9964_2__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,2);if(cljs.core.keyword_identical_QMARK_(ocr_9964_2__9971,cljs.core.constant$keyword$57))
{try{var ocr_9964_3__9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,3);if(cljs.core.keyword_identical_QMARK_(ocr_9964_3__9972,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9984){if((e9984 instanceof Error))
{var e__4796__auto____$1 = e9984;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9964_3__9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964,3);if((cljs.core.vector_QMARK_(ocr_9964_3__9972)) && ((cljs.core.count(ocr_9964_3__9972) === 2)))
{try{var ocr_9964_3__9972_0__9977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9964_3__9972,0);if(cljs.core.keyword_identical_QMARK_(ocr_9964_3__9972_0__9977,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9986){if((e9986 instanceof Error))
{var e__4796__auto____$2 = e9986;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9986;
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
}catch (e9985){if((e9985 instanceof Error))
{var e__4796__auto____$2 = e9985;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9985;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9984;
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
}catch (e9983){if((e9983 instanceof Error))
{var e__4796__auto____$1 = e9983;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9983;
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
}catch (e9982){if((e9982 instanceof Error))
{var e__4796__auto____$1 = e9982;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9982;
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
}catch (e9981){if((e9981 instanceof Error))
{var e__4796__auto____$1 = e9981;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9981;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9980;
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
}catch (e9979){if((e9979 instanceof Error))
{var e__4796__auto__ = e9979;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9979;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(3,input__6469__auto__))], null);
} else
{return null;
}
});
G__9991 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9991__0.call(this);
case 2:
return G__9991__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9991;
})()
);
/**
* 
*/
termcat.rules.math.math_cast_next_token = termcat.rewrite.abstraction((function() {
var G__10012 = null;
var G__10012__0 = (function (){return null;
});
var G__10012__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9992 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992,2,null);var temp__4090__auto__ = (function (){var ocr_9993 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9993)) && ((cljs.core.count(ocr_9993) === 3)))
{try{var ocr_9993_1__9999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993,1);if((cljs.core.vector_QMARK_(ocr_9993_1__9999)) && ((cljs.core.count(ocr_9993_1__9999) === 2)))
{try{var ocr_9993_1__9999_0__10001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993_1__9999,0);if(cljs.core.keyword_identical_QMARK_(ocr_9993_1__9999_0__10001,cljs.core.constant$keyword$26))
{try{var ocr_9993_1__9999_1__10002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993_1__9999,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_9993_1__9999_1__10002)))
{try{var ocr_9993_2__10000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993,2);if(cljs.core.keyword_identical_QMARK_(ocr_9993_2__10000,cljs.core.constant$keyword$7))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10009){if((e10009 instanceof Error))
{var e__4796__auto__ = e10009;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9993_2__10000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993,2);if((cljs.core.vector_QMARK_(ocr_9993_2__10000)) && ((cljs.core.count(ocr_9993_2__10000) === 2)))
{try{var ocr_9993_2__10000_0__10003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9993_2__10000,0);if(cljs.core.keyword_identical_QMARK_(ocr_9993_2__10000_0__10003,cljs.core.constant$keyword$26))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10011){if((e10011 instanceof Error))
{var e__4796__auto____$1 = e10011;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10011;
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
}catch (e10010){if((e10010 instanceof Error))
{var e__4796__auto____$1 = e10010;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10010;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10009;
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
}catch (e10008){if((e10008 instanceof Error))
{var e__4796__auto__ = e10008;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10008;
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
}catch (e10007){if((e10007 instanceof Error))
{var e__4796__auto__ = e10007;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10007;
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
}catch (e10006){if((e10006 instanceof Error))
{var e__4796__auto__ = e10006;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10006;
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
}catch (e10005){if((e10005 instanceof Error))
{var e__4796__auto__ = e10005;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10005;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10012 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10012__0.call(this);
case 2:
return G__10012__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10012;
})()
);
/**
* 
*/
termcat.rules.math.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__10035 = null;
var G__10035__0 = (function (){return null;
});
var G__10035__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10013 = cljs.core.cons(state__6468__auto__,cljs.core.take(3,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10013,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10013,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10013,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10013,3,null);var temp__4090__auto__ = (function (){var ocr_10014 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10014)) && ((cljs.core.count(ocr_10014) === 4)))
{try{var ocr_10014_1__10020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014,1);if((cljs.core.vector_QMARK_(ocr_10014_1__10020)) && ((cljs.core.count(ocr_10014_1__10020) === 2)))
{try{var ocr_10014_1__10020_0__10023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014_1__10020,0);if(cljs.core.keyword_identical_QMARK_(ocr_10014_1__10020_0__10023,cljs.core.constant$keyword$26))
{try{var ocr_10014_1__10020_1__10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014_1__10020,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10014_1__10020_1__10024)))
{try{var ocr_10014_2__10021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014,2);if(cljs.core.keyword_identical_QMARK_(ocr_10014_2__10021,cljs.core.constant$keyword$40))
{try{var ocr_10014_3__10022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014,3);if((cljs.core.vector_QMARK_(ocr_10014_3__10022)) && ((cljs.core.count(ocr_10014_3__10022) === 2)))
{try{var ocr_10014_3__10022_0__10025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014_3__10022,0);if(cljs.core.keyword_identical_QMARK_(ocr_10014_3__10022_0__10025,cljs.core.constant$keyword$26))
{try{var ocr_10014_3__10022_1__10026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10014_3__10022,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10014_3__10022_1__10026)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10034){if((e10034 instanceof Error))
{var e__4796__auto__ = e10034;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10034;
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
}catch (e10033){if((e10033 instanceof Error))
{var e__4796__auto__ = e10033;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10033;
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
}catch (e10032){if((e10032 instanceof Error))
{var e__4796__auto__ = e10032;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10032;
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
}catch (e10031){if((e10031 instanceof Error))
{var e__4796__auto__ = e10031;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10031;
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
}catch (e10030){if((e10030 instanceof Error))
{var e__4796__auto__ = e10030;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10030;
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
}catch (e10029){if((e10029 instanceof Error))
{var e__4796__auto__ = e10029;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10029;
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
}catch (e10028){if((e10028 instanceof Error))
{var e__4796__auto__ = e10028;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10028;
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
}catch (e10027){if((e10027 instanceof Error))
{var e__4796__auto__ = e10027;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10027;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(3,input__6469__auto__))], null);
} else
{return null;
}
});
G__10035 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10035__0.call(this);
case 2:
return G__10035__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10035;
})()
);
