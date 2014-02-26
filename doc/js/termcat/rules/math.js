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
var G__9852 = null;
var G__9852__0 = (function (){return null;
});
var G__9852__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9815 = cljs.core.cons(state__5495__auto__,cljs.core.take(4,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9815,4,null);var temp__4090__auto__ = (function (){var ocr_9816 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9816)) && ((cljs.core.count(ocr_9816) === 5)))
{try{var ocr_9816_3__9838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,3);if((ocr_9816_3__9838 === null))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_3__9838,cljs.core.constant$keyword$40))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_3__9838,cljs.core.constant$keyword$43))
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
}catch (e9841){if((e9841 instanceof Error))
{var e__3769__auto__ = e9841;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9816_4__9839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,4);if(cljs.core.keyword_identical_QMARK_(ocr_9816_4__9839,cljs.core.constant$keyword$42))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_4__9839,cljs.core.constant$keyword$41))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_4__9839,cljs.core.constant$keyword$38))
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
}catch (e9842){if((e9842 instanceof Error))
{var e__3769__auto____$1 = e9842;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9816_1__9836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,1);if((ocr_9816_1__9836 === null))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$42))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(((termcat.term.block_QMARK_(t3))?termcat.term.center(t3):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t3], 0))),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),t4], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9850){if((e9850 instanceof Error))
{var e__3769__auto____$2 = e9850;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9850;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_1__9836,cljs.core.constant$keyword$40))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$42))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(((termcat.term.block_QMARK_(t3))?termcat.term.center(t3):termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([t3], 0))),cljs.core.array_seq([cljs.core.constant$keyword$34], 0)),t4], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9851){if((e9851 instanceof Error))
{var e__3769__auto____$2 = e9851;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9851;
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
}catch (e9843){if((e9843 instanceof Error))
{var e__3769__auto____$2 = e9843;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9816_1__9836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,1);if((ocr_9816_1__9836 === null))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$41))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),((termcat.term.block_QMARK_(t3))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(t3),cljs.core.array_seq([cljs.core.constant$keyword$29], 0))], null):termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t3)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9848){if((e9848 instanceof Error))
{var e__3769__auto____$3 = e9848;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9848;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_1__9836,cljs.core.constant$keyword$40))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$41))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),((termcat.term.block_QMARK_(t3))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.center(t3),cljs.core.array_seq([cljs.core.constant$keyword$29], 0))], null):termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t3)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9849){if((e9849 instanceof Error))
{var e__3769__auto____$3 = e9849;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9849;
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
}catch (e9844){if((e9844 instanceof Error))
{var e__3769__auto____$3 = e9844;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9816_1__9836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,1);if((ocr_9816_1__9836 === null))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$38))
{var ts = ((termcat.term.block_QMARK_(t3))?termcat.rewrite.unwrap(t3):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t3], null));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (ts,ocr_9816_2__9837,ocr_9816_1__9836,e__3769__auto____$3,e__3769__auto____$2,e__3769__auto____$1,e__3769__auto__,ocr_9816){
return (function (p1__9814_SHARP_){return termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$2(p1__9814_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null));
});})(ts,ocr_9816_2__9837,ocr_9816_1__9836,e__3769__auto____$3,e__3769__auto____$2,e__3769__auto____$1,e__3769__auto__,ocr_9816))
,ts),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9846){if((e9846 instanceof Error))
{var e__3769__auto____$4 = e9846;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9846;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9816_1__9836,cljs.core.constant$keyword$40))
{try{var ocr_9816_2__9837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9816,2);if(cljs.core.keyword_identical_QMARK_(ocr_9816_2__9837,cljs.core.constant$keyword$38))
{var ts = ((termcat.term.block_QMARK_(t3))?termcat.rewrite.unwrap(t3):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t3], null));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (ts,ocr_9816_2__9837,ocr_9816_1__9836,e__3769__auto____$3,e__3769__auto____$2,e__3769__auto____$1,e__3769__auto__,ocr_9816){
return (function (p1__9814_SHARP_){return termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$2(p1__9814_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$39,null], null), null));
});})(ts,ocr_9816_2__9837,ocr_9816_1__9836,e__3769__auto____$3,e__3769__auto____$2,e__3769__auto____$1,e__3769__auto__,ocr_9816))
,ts),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9847){if((e9847 instanceof Error))
{var e__3769__auto____$4 = e9847;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9847;
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
}catch (e9845){if((e9845 instanceof Error))
{var e__3769__auto____$4 = e9845;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9845;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9844;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9843;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9842;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
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
{var e__3769__auto__ = e9840;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9840;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(4,input__5496__auto__))], null);
} else
{return null;
}
});
G__9852 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9852__0.call(this);
case 2:
return G__9852__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9852;
})()
);
/**
* 
*/
termcat.rules.math.introduce_math_operators = termcat.rewrite.abstraction((function() {
var G__9900 = null;
var G__9900__0 = (function (){return null;
});
var G__9900__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9853 = cljs.core.cons(state__5495__auto__,cljs.core.take(7,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,6,null);var t7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9853,7,null);var temp__4090__auto__ = (function (){var ocr_9854 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(7,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9854)) && ((cljs.core.count(ocr_9854) === 8)))
{try{var ocr_9854_2__9874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,2);if(cljs.core.keyword_identical_QMARK_(ocr_9854_2__9874,cljs.core.constant$keyword$40))
{try{var ocr_9854_3__9875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,3);if(cljs.core.keyword_identical_QMARK_(ocr_9854_3__9875,cljs.core.constant$keyword$44))
{try{var ocr_9854_5__9877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,5);if(cljs.core.keyword_identical_QMARK_(ocr_9854_5__9877,cljs.core.constant$keyword$44))
{try{var ocr_9854_6__9878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,6);if(cljs.core.keyword_identical_QMARK_(ocr_9854_6__9878,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var ocr_9894 = termcat.term.payload(t3);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9894,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9894 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null);
} else
{if((ocr_9894 === "~~~"))
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
}catch (e9896){if((e9896 instanceof Error))
{var e__3769__auto__ = e9896;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9896;
} else
{return null;
}
}
}})(),(function (){var ocr_9897 = termcat.term.payload(t5);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9897,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9897 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null);
} else
{if((ocr_9897 === "~~~"))
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
}catch (e9899){if((e9899 instanceof Error))
{var e__3769__auto__ = e9899;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9899;
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
}catch (e9893){if((e9893 instanceof Error))
{var e__3769__auto__ = e9893;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9893;
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
}catch (e9892){if((e9892 instanceof Error))
{var e__3769__auto__ = e9892;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9892;
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
}catch (e9891){if((e9891 instanceof Error))
{var e__3769__auto__ = e9891;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9891;
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
}catch (e9881){if((e9881 instanceof Error))
{var e__3769__auto__ = e9881;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9854_2__9874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,2);if(cljs.core.keyword_identical_QMARK_(ocr_9854_2__9874,cljs.core.constant$keyword$40))
{try{var ocr_9854_3__9875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,3);if(cljs.core.keyword_identical_QMARK_(ocr_9854_3__9875,cljs.core.constant$keyword$44))
{var temp__4090__auto__ = (function (){var ocr_9884 = termcat.term.payload(t3);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9884,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9884 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45], null);
} else
{if((ocr_9884 === "~~~"))
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
}catch (e9886){if((e9886 instanceof Error))
{var e__3769__auto____$1 = e9886;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9886;
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
}catch (e9883){if((e9883 instanceof Error))
{var e__3769__auto____$1 = e9883;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9883;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9854_2__9874,cljs.core.constant$keyword$44))
{try{var ocr_9854_3__9875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9854,3);if(cljs.core.keyword_identical_QMARK_(ocr_9854_3__9875,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var ocr_9888 = termcat.term.payload(t2);try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_9888,"~"))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((ocr_9888 === "~~"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48], null);
} else
{if((ocr_9888 === "~~~"))
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
}catch (e9890){if((e9890 instanceof Error))
{var e__3769__auto____$1 = e9890;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9890;
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
}catch (e9887){if((e9887 instanceof Error))
{var e__3769__auto____$1 = e9887;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9887;
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
}catch (e9882){if((e9882 instanceof Error))
{var e__3769__auto____$1 = e9882;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9882;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9881;
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
}catch (e9880){if((e9880 instanceof Error))
{var e__3769__auto__ = e9880;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9880;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(7,input__5496__auto__))], null);
} else
{return null;
}
});
G__9900 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9900__0.call(this);
case 2:
return G__9900__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9900;
})()
);
termcat.rules.math.split_base_sub_sup = (function split_base_sub_sup(t){var ocr_9915 = termcat.term.tt(t);try{if((cljs.core.vector_QMARK_(ocr_9915)) && ((cljs.core.count(ocr_9915) === 2)))
{try{var ocr_9915_0__9920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,0);if(cljs.core.keyword_identical_QMARK_(ocr_9915_0__9920,cljs.core.constant$keyword$26))
{try{var ocr_9915_1__9921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,1);if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(ocr_9915_1__9921)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),cljs.core.second(termcat.rewrite.unwrap(t)),null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9928){if((e9928 instanceof Error))
{var e__3769__auto__ = e9928;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9928;
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
}catch (e9923){if((e9923 instanceof Error))
{var e__3769__auto__ = e9923;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9915_0__9920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,0);if(cljs.core.keyword_identical_QMARK_(ocr_9915_0__9920,cljs.core.constant$keyword$26))
{try{var ocr_9915_1__9921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,1);if(cljs.core.truth_(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(ocr_9915_1__9921)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),null,cljs.core.second(termcat.rewrite.unwrap(t))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9927){if((e9927 instanceof Error))
{var e__3769__auto____$1 = e9927;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9927;
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
}catch (e9924){if((e9924 instanceof Error))
{var e__3769__auto____$1 = e9924;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9915_0__9920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,0);if(cljs.core.keyword_identical_QMARK_(ocr_9915_0__9920,cljs.core.constant$keyword$26))
{try{var ocr_9915_1__9921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9915,1);if(cljs.core.truth_(cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(ocr_9915_1__9921)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.rewrite.unwrap(t)),cljs.core.second(termcat.rewrite.unwrap(t)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.unwrap(t),2)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9926){if((e9926 instanceof Error))
{var e__3769__auto____$2 = e9926;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9926;
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
}catch (e9925){if((e9925 instanceof Error))
{var e__3769__auto____$2 = e9925;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9925;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9924;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9923;
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
}catch (e9922){if((e9922 instanceof Error))
{var e__3769__auto__ = e9922;if((e__3769__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null,null], null);
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9922;
} else
{return null;
}
}
}});
termcat.rules.math.subsup_token = (function subsup_token(x,y){var $ = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__9929_SHARP_,p2__9930_SHARP_){return cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__9929_SHARP_,p2__9930_SHARP_],null)));
}),x,y);var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function ($){
return (function (p1__9931_SHARP_){if(!(cljs.core.empty_QMARK_(p1__9931_SHARP_)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(termcat.util.math.merge_rows,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"&InvisibleComma;")], 0)),cljs.core.array_seq([cljs.core.constant$keyword$30], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(termcat.util.math.math_cast,p1__9931_SHARP_));
} else
{return null;
}
});})($))
,$);var $__$2 = cljs.core.vec($__$1);var $__$3 = (function (){try{if((cljs.core.vector_QMARK_($__$2)) && ((cljs.core.count($__$2) === 3)))
{try{var $_0__9947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);if(($_0__9947 === null))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9951){if((e9951 instanceof Error))
{var e__3769__auto__ = e9951;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var $_1__9948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);if(($_1__9948 === null))
{try{var $_2__9949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);if(($_2__9949 === null))
{var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9955){if((e9955 instanceof Error))
{var e__3769__auto____$1 = e9955;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}catch (e9952){if((e9952 instanceof Error))
{var e__3769__auto____$1 = e9952;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var $_1__9948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);if(($_1__9948 === null))
{var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0)),cljs.core.array_seq([cljs.core.constant$keyword$54], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9953){if((e9953 instanceof Error))
{var e__3769__auto____$2 = e9953;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var $_2__9949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);if(($_2__9949 === null))
{var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0)),cljs.core.array_seq([cljs.core.constant$keyword$55], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9954){if((e9954 instanceof Error))
{var e__3769__auto____$3 = e9954;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,2);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2($__$2,0);return termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b,c], 0)),cljs.core.array_seq([cljs.core.constant$keyword$53], 0));
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9954;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9953;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9952;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
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
{var e__3769__auto__ = e9950;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str($__$2)].join('')));
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9950;
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
var G__10014 = null;
var G__10014__0 = (function (){return null;
});
var G__10014__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9956 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9956,3,null);var temp__4090__auto__ = (function (){var ocr_9957 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9957)) && ((cljs.core.count(ocr_9957) === 4)))
{try{var ocr_9957_1__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,1);if((cljs.core.vector_QMARK_(ocr_9957_1__9969)) && ((cljs.core.count(ocr_9957_1__9969) === 2)))
{try{var ocr_9957_1__9969_0__9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_1__9969,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_1__9969_0__9972,cljs.core.constant$keyword$26))
{try{var ocr_9957_1__9969_1__9973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_1__9969,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_9957_1__9969_1__9973)))
{try{var ocr_9957_2__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,2);if(cljs.core.keyword_identical_QMARK_(ocr_9957_2__9970,cljs.core.constant$keyword$35))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,(function (){var length = cljs.core.count([cljs.core.str(termcat.term.payload(t2))].join(''));var G__10013 = length;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,G__10013))
{return "\u2032";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2,G__10013))
{return "\u2033";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(3,G__10013))
{return "\u2034";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(4,G__10013))
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
}catch (e10012){if((e10012 instanceof Error))
{var e__3769__auto__ = e10012;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10012;
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
}catch (e10011){if((e10011 instanceof Error))
{var e__3769__auto__ = e10011;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
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
{var e__3769__auto__ = e10010;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10010;
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
{var e__3769__auto__ = e9987;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9957_1__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,1);if(cljs.core.keyword_identical_QMARK_(ocr_9957_1__9969,cljs.core.constant$keyword$7))
{try{var ocr_9957_2__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,2);if(cljs.core.keyword_identical_QMARK_(ocr_9957_2__9970,cljs.core.constant$keyword$51))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10007){if((e10007 instanceof Error))
{var e__3769__auto____$1 = e10007;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if((cljs.core.vector_QMARK_(ocr_9957_3__9971)) && ((cljs.core.count(ocr_9957_3__9971) === 2)))
{try{var ocr_9957_3__9971_0__9974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_3__9971,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971_0__9974,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10009){if((e10009 instanceof Error))
{var e__3769__auto____$2 = e10009;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
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
{var e__3769__auto____$2 = e10008;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10008;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
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
{var e__3769__auto____$1 = e10006;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}catch (e9988){if((e9988 instanceof Error))
{var e__3769__auto____$1 = e9988;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9957_1__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,1);if((cljs.core.vector_QMARK_(ocr_9957_1__9969)) && ((cljs.core.count(ocr_9957_1__9969) === 2)))
{try{var ocr_9957_1__9969_0__9976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_1__9969,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_1__9969_0__9976,cljs.core.constant$keyword$26))
{try{var ocr_9957_2__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,2);if(cljs.core.keyword_identical_QMARK_(ocr_9957_2__9970,cljs.core.constant$keyword$51))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10003){if((e10003 instanceof Error))
{var e__3769__auto____$2 = e10003;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if((cljs.core.vector_QMARK_(ocr_9957_3__9971)) && ((cljs.core.count(ocr_9957_3__9971) === 2)))
{try{var ocr_9957_3__9971_0__9978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_3__9971,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971_0__9978,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_row_cast(t3),null], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10005){if((e10005 instanceof Error))
{var e__3769__auto____$3 = e10005;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10005;
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
}catch (e10004){if((e10004 instanceof Error))
{var e__3769__auto____$3 = e10004;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10004;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10003;
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
}catch (e10002){if((e10002 instanceof Error))
{var e__3769__auto____$2 = e10002;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10002;
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
}catch (e10001){if((e10001 instanceof Error))
{var e__3769__auto____$2 = e10001;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10001;
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
{var e__3769__auto____$2 = e9989;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9957_1__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,1);if(cljs.core.keyword_identical_QMARK_(ocr_9957_1__9969,cljs.core.constant$keyword$7))
{try{var ocr_9957_2__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,2);if(cljs.core.keyword_identical_QMARK_(ocr_9957_2__9970,cljs.core.constant$keyword$50))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9998){if((e9998 instanceof Error))
{var e__3769__auto____$3 = e9998;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if((cljs.core.vector_QMARK_(ocr_9957_3__9971)) && ((cljs.core.count(ocr_9957_3__9971) === 2)))
{try{var ocr_9957_3__9971_0__9980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_3__9971,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971_0__9980,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10000){if((e10000 instanceof Error))
{var e__3769__auto____$4 = e10000;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10000;
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
}catch (e9999){if((e9999 instanceof Error))
{var e__3769__auto____$4 = e9999;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9999;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9998;
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
}catch (e9997){if((e9997 instanceof Error))
{var e__3769__auto____$3 = e9997;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9997;
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
}catch (e9990){if((e9990 instanceof Error))
{var e__3769__auto____$3 = e9990;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9957_1__9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,1);if((cljs.core.vector_QMARK_(ocr_9957_1__9969)) && ((cljs.core.count(ocr_9957_1__9969) === 2)))
{try{var ocr_9957_1__9969_0__9982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_1__9969,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_1__9969_0__9982,cljs.core.constant$keyword$26))
{try{var ocr_9957_2__9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,2);if(cljs.core.keyword_identical_QMARK_(ocr_9957_2__9970,cljs.core.constant$keyword$50))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9994){if((e9994 instanceof Error))
{var e__3769__auto____$4 = e9994;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9957_3__9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957,3);if((cljs.core.vector_QMARK_(ocr_9957_3__9971)) && ((cljs.core.count(ocr_9957_3__9971) === 2)))
{try{var ocr_9957_3__9971_0__9984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9957_3__9971,0);if(cljs.core.keyword_identical_QMARK_(ocr_9957_3__9971_0__9984,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.math.subsup_token(termcat.rules.math.split_base_sub_sup(t1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,termcat.util.math.math_row_cast(t3)], null))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9996){if((e9996 instanceof Error))
{var e__3769__auto____$5 = e9996;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9996;
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
}catch (e9995){if((e9995 instanceof Error))
{var e__3769__auto____$5 = e9995;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9995;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9994;
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
}catch (e9993){if((e9993 instanceof Error))
{var e__3769__auto____$4 = e9993;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9993;
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
}catch (e9992){if((e9992 instanceof Error))
{var e__3769__auto____$4 = e9992;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9992;
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
}catch (e9991){if((e9991 instanceof Error))
{var e__3769__auto____$4 = e9991;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9991;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9990;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9989;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9988;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
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
}catch (e9986){if((e9986 instanceof Error))
{var e__3769__auto__ = e9986;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9986;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(3,input__5496__auto__))], null);
} else
{return null;
}
});
G__10014 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10014__0.call(this);
case 2:
return G__10014__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10014;
})()
);
/**
* 
*/
termcat.rules.math.introduce_mfrac = termcat.rewrite.abstraction((function() {
var G__10043 = null;
var G__10043__0 = (function (){return null;
});
var G__10043__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10015 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,3,null);var temp__4090__auto__ = (function (){var ocr_10016 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10016)) && ((cljs.core.count(ocr_10016) === 4)))
{try{var ocr_10016_1__10022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,1);if(cljs.core.keyword_identical_QMARK_(ocr_10016_1__10022,cljs.core.constant$keyword$7))
{try{var ocr_10016_2__10023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,2);if(cljs.core.keyword_identical_QMARK_(ocr_10016_2__10023,cljs.core.constant$keyword$57))
{try{var ocr_10016_3__10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,3);if(cljs.core.keyword_identical_QMARK_(ocr_10016_3__10024,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10040){if((e10040 instanceof Error))
{var e__3769__auto__ = e10040;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10016_3__10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,3);if((cljs.core.vector_QMARK_(ocr_10016_3__10024)) && ((cljs.core.count(ocr_10016_3__10024) === 2)))
{try{var ocr_10016_3__10024_0__10025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016_3__10024,0);if(cljs.core.keyword_identical_QMARK_(ocr_10016_3__10024_0__10025,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10042){if((e10042 instanceof Error))
{var e__3769__auto____$1 = e10042;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10042;
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
}catch (e10041){if((e10041 instanceof Error))
{var e__3769__auto____$1 = e10041;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10041;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10040;
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
}catch (e10039){if((e10039 instanceof Error))
{var e__3769__auto__ = e10039;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10039;
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
{var e__3769__auto__ = e10032;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10016_1__10022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,1);if((cljs.core.vector_QMARK_(ocr_10016_1__10022)) && ((cljs.core.count(ocr_10016_1__10022) === 2)))
{try{var ocr_10016_1__10022_0__10027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016_1__10022,0);if(cljs.core.keyword_identical_QMARK_(ocr_10016_1__10022_0__10027,cljs.core.constant$keyword$26))
{try{var ocr_10016_2__10023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,2);if(cljs.core.keyword_identical_QMARK_(ocr_10016_2__10023,cljs.core.constant$keyword$57))
{try{var ocr_10016_3__10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,3);if(cljs.core.keyword_identical_QMARK_(ocr_10016_3__10024,cljs.core.constant$keyword$7))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10036){if((e10036 instanceof Error))
{var e__3769__auto____$1 = e10036;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10016_3__10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016,3);if((cljs.core.vector_QMARK_(ocr_10016_3__10024)) && ((cljs.core.count(ocr_10016_3__10024) === 2)))
{try{var ocr_10016_3__10024_0__10029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10016_3__10024,0);if(cljs.core.keyword_identical_QMARK_(ocr_10016_3__10024_0__10029,cljs.core.constant$keyword$26))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.util.math.math_row_cast(t1),termcat.util.math.math_row_cast(t3)], 0)),cljs.core.array_seq([cljs.core.constant$keyword$58], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10038){if((e10038 instanceof Error))
{var e__3769__auto____$2 = e10038;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10038;
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
}catch (e10037){if((e10037 instanceof Error))
{var e__3769__auto____$2 = e10037;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10037;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10036;
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
}catch (e10035){if((e10035 instanceof Error))
{var e__3769__auto____$1 = e10035;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10035;
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
}catch (e10034){if((e10034 instanceof Error))
{var e__3769__auto____$1 = e10034;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
{var e__3769__auto____$1 = e10033;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10033;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
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
{var e__3769__auto__ = e10031;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10031;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(3,input__5496__auto__))], null);
} else
{return null;
}
});
G__10043 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10043__0.call(this);
case 2:
return G__10043__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10043;
})()
);
/**
* 
*/
termcat.rules.math.math_cast_next_token = termcat.rewrite.abstraction((function() {
var G__10064 = null;
var G__10064__0 = (function (){return null;
});
var G__10064__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10044 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10044,2,null);var temp__4090__auto__ = (function (){var ocr_10045 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10045)) && ((cljs.core.count(ocr_10045) === 3)))
{try{var ocr_10045_1__10051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045,1);if((cljs.core.vector_QMARK_(ocr_10045_1__10051)) && ((cljs.core.count(ocr_10045_1__10051) === 2)))
{try{var ocr_10045_1__10051_0__10053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045_1__10051,0);if(cljs.core.keyword_identical_QMARK_(ocr_10045_1__10051_0__10053,cljs.core.constant$keyword$26))
{try{var ocr_10045_1__10051_1__10054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045_1__10051,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10045_1__10051_1__10054)))
{try{var ocr_10045_2__10052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045,2);if(cljs.core.keyword_identical_QMARK_(ocr_10045_2__10052,cljs.core.constant$keyword$7))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10061){if((e10061 instanceof Error))
{var e__3769__auto__ = e10061;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10045_2__10052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045,2);if((cljs.core.vector_QMARK_(ocr_10045_2__10052)) && ((cljs.core.count(ocr_10045_2__10052) === 2)))
{try{var ocr_10045_2__10052_0__10055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10045_2__10052,0);if(cljs.core.keyword_identical_QMARK_(ocr_10045_2__10052_0__10055,cljs.core.constant$keyword$26))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.math.math_cast.cljs$core$IFn$_invoke$arity$1(t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10063){if((e10063 instanceof Error))
{var e__3769__auto____$1 = e10063;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10063;
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
}catch (e10062){if((e10062 instanceof Error))
{var e__3769__auto____$1 = e10062;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10062;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10061;
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
}catch (e10060){if((e10060 instanceof Error))
{var e__3769__auto__ = e10060;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10060;
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
}catch (e10059){if((e10059 instanceof Error))
{var e__3769__auto__ = e10059;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10059;
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
}catch (e10058){if((e10058 instanceof Error))
{var e__3769__auto__ = e10058;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10058;
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
}catch (e10057){if((e10057 instanceof Error))
{var e__3769__auto__ = e10057;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10057;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(2,input__5496__auto__))], null);
} else
{return null;
}
});
G__10064 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10064__0.call(this);
case 2:
return G__10064__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10064;
})()
);
/**
* 
*/
termcat.rules.math.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__10087 = null;
var G__10087__0 = (function (){return null;
});
var G__10087__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10065 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,3,null);var temp__4090__auto__ = (function (){var ocr_10066 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10066)) && ((cljs.core.count(ocr_10066) === 4)))
{try{var ocr_10066_1__10072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066,1);if((cljs.core.vector_QMARK_(ocr_10066_1__10072)) && ((cljs.core.count(ocr_10066_1__10072) === 2)))
{try{var ocr_10066_1__10072_0__10075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066_1__10072,0);if(cljs.core.keyword_identical_QMARK_(ocr_10066_1__10072_0__10075,cljs.core.constant$keyword$26))
{try{var ocr_10066_1__10072_1__10076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066_1__10072,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10066_1__10072_1__10076)))
{try{var ocr_10066_2__10073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066,2);if(cljs.core.keyword_identical_QMARK_(ocr_10066_2__10073,cljs.core.constant$keyword$40))
{try{var ocr_10066_3__10074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066,3);if((cljs.core.vector_QMARK_(ocr_10066_3__10074)) && ((cljs.core.count(ocr_10066_3__10074) === 2)))
{try{var ocr_10066_3__10074_0__10077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066_3__10074,0);if(cljs.core.keyword_identical_QMARK_(ocr_10066_3__10074_0__10077,cljs.core.constant$keyword$26))
{try{var ocr_10066_3__10074_1__10078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10066_3__10074,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_10066_3__10074_1__10078)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10086){if((e10086 instanceof Error))
{var e__3769__auto__ = e10086;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10086;
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
}catch (e10085){if((e10085 instanceof Error))
{var e__3769__auto__ = e10085;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10085;
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
}catch (e10084){if((e10084 instanceof Error))
{var e__3769__auto__ = e10084;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10084;
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
}catch (e10083){if((e10083 instanceof Error))
{var e__3769__auto__ = e10083;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10083;
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
}catch (e10082){if((e10082 instanceof Error))
{var e__3769__auto__ = e10082;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10082;
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
}catch (e10081){if((e10081 instanceof Error))
{var e__3769__auto__ = e10081;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10081;
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
}catch (e10080){if((e10080 instanceof Error))
{var e__3769__auto__ = e10080;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10080;
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
}catch (e10079){if((e10079 instanceof Error))
{var e__3769__auto__ = e10079;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10079;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__5498__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5657__auto__ = cljs.core.first(r__5498__auto__);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return state__5495__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(3,input__5496__auto__))], null);
} else
{return null;
}
});
G__10087 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10087__0.call(this);
case 2:
return G__10087__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10087;
})()
);
