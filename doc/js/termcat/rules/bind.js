// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.bind');
goog.require('cljs.core');
goog.require('termcat.util.lambda');
goog.require('termcat.util.lambda');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
goog.require('cljs.core.match');
termcat.rules.bind.strongest_blank = (function strongest_blank(t1,t2,default$){var pred__8977 = (function (p1__8973_SHARP_,p2__8972_SHARP_){return cljs.core.contains_QMARK_(p2__8972_SHARP_,p1__8973_SHARP_);
});var expr__8978 = (cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([termcat.term.tt(t1),termcat.term.tt(t2)],true) : cljs.core.PersistentHashSet.fromArray.call(null,[termcat.term.tt(t1),termcat.term.tt(t2)],true));if(pred__8977(null,expr__8978))
{return null;
} else
{if(pred__8977(cljs.core.constant$keyword$43,expr__8978))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$43);
} else
{if(pred__8977(cljs.core.constant$keyword$99,expr__8978))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$99);
} else
{if(pred__8977(cljs.core.constant$keyword$40,expr__8978))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40);
} else
{return default$;
}
}
}
}
});
/**
* 
*/
termcat.rules.bind.introduce_bindings = termcat.rewrite.abstraction((function() {
var G__9095 = null;
var G__9095__0 = (function (){return null;
});
var G__9095__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8980 = cljs.core.cons(state__5495__auto__,cljs.core.take(6,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,6,null);var temp__4090__auto__ = (function (){var ocr_8981 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(6,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8981)) && ((cljs.core.count(ocr_8981) === 7)))
{try{var ocr_8981_2__9003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,2);if(cljs.core.keyword_identical_QMARK_(ocr_8981_2__9003,cljs.core.constant$keyword$63))
{try{var ocr_8981_1__9002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,1);if((ocr_8981_1__9002 === null))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$7))
{try{var ocr_8981_4__9005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,4);if((cljs.core.vector_QMARK_(ocr_8981_4__9005)) && ((cljs.core.count(ocr_8981_4__9005) === 2)))
{try{var ocr_8981_4__9005_0__9008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_4__9005,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_4__9005_0__9008,cljs.core.constant$keyword$26))
{try{var ocr_8981_5__9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,5);if((cljs.core.vector_QMARK_(ocr_8981_5__9006)) && ((cljs.core.count(ocr_8981_5__9006) === 2)))
{try{var ocr_8981_5__9006_0__9010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_5__9006,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_5__9006_0__9010,cljs.core.constant$keyword$26))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"bind"))
{var ts = termcat.rewrite.unwrap(t4);var name = (function (){var $ = cljs.core.first(ts);var $__$1 = (cljs.core.truth_($)?termcat.term.payload($):null);return $__$1;
})();if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ts))) && (typeof name === 'string'))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,name,termcat.rewrite.unwrap(t5)),termcat.rules.bind.strongest_blank(t1,t6,t1)], null),((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$40,null], null), null),termcat.term.tt(t6))))?t6:null));
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"!bind: not a valid name \u2014 ",name,(((cljs.core.count(ts) > 1))?[cljs.core.str(" (and "),cljs.core.str((cljs.core.count(ts) - 1)),cljs.core.str(" more tokens)")].join(''):null))),t6], null);
}
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
}catch (e9079){if((e9079 instanceof Error))
{var e__3769__auto__ = e9079;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9079;
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
}catch (e9078){if((e9078 instanceof Error))
{var e__3769__auto__ = e9078;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9078;
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
}catch (e9077){if((e9077 instanceof Error))
{var e__3769__auto__ = e9077;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9077;
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
}catch (e9076){if((e9076 instanceof Error))
{var e__3769__auto__ = e9076;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9076;
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
}catch (e9075){if((e9075 instanceof Error))
{var e__3769__auto__ = e9075;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9075;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$40))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$7))
{try{var ocr_8981_4__9005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,4);if((cljs.core.vector_QMARK_(ocr_8981_4__9005)) && ((cljs.core.count(ocr_8981_4__9005) === 2)))
{try{var ocr_8981_4__9005_0__9012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_4__9005,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_4__9005_0__9012,cljs.core.constant$keyword$26))
{try{var ocr_8981_5__9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,5);if((cljs.core.vector_QMARK_(ocr_8981_5__9006)) && ((cljs.core.count(ocr_8981_5__9006) === 2)))
{try{var ocr_8981_5__9006_0__9014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_5__9006,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_5__9006_0__9014,cljs.core.constant$keyword$26))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"bind"))
{var ts = termcat.rewrite.unwrap(t4);var name = (function (){var $ = cljs.core.first(ts);var $__$1 = (cljs.core.truth_($)?termcat.term.payload($):null);return $__$1;
})();if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ts))) && (typeof name === 'string'))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,name,termcat.rewrite.unwrap(t5)),termcat.rules.bind.strongest_blank(t1,t6,t1)], null),((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$40,null], null), null),termcat.term.tt(t6))))?t6:null));
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"!bind: not a valid name \u2014 ",name,(((cljs.core.count(ts) > 1))?[cljs.core.str(" (and "),cljs.core.str((cljs.core.count(ts) - 1)),cljs.core.str(" more tokens)")].join(''):null))),t6], null);
}
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
}catch (e9084){if((e9084 instanceof Error))
{var e__3769__auto__ = e9084;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9084;
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
}catch (e9083){if((e9083 instanceof Error))
{var e__3769__auto__ = e9083;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9083;
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
}catch (e9082){if((e9082 instanceof Error))
{var e__3769__auto__ = e9082;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9082;
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
}catch (e9081){if((e9081 instanceof Error))
{var e__3769__auto__ = e9081;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9081;
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
}catch (e9080){if((e9080 instanceof Error))
{var e__3769__auto__ = e9080;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9080;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$99))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$7))
{try{var ocr_8981_4__9005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,4);if((cljs.core.vector_QMARK_(ocr_8981_4__9005)) && ((cljs.core.count(ocr_8981_4__9005) === 2)))
{try{var ocr_8981_4__9005_0__9016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_4__9005,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_4__9005_0__9016,cljs.core.constant$keyword$26))
{try{var ocr_8981_5__9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,5);if((cljs.core.vector_QMARK_(ocr_8981_5__9006)) && ((cljs.core.count(ocr_8981_5__9006) === 2)))
{try{var ocr_8981_5__9006_0__9018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_5__9006,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_5__9006_0__9018,cljs.core.constant$keyword$26))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"bind"))
{var ts = termcat.rewrite.unwrap(t4);var name = (function (){var $ = cljs.core.first(ts);var $__$1 = (cljs.core.truth_($)?termcat.term.payload($):null);return $__$1;
})();if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ts))) && (typeof name === 'string'))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,name,termcat.rewrite.unwrap(t5)),termcat.rules.bind.strongest_blank(t1,t6,t1)], null),((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$40,null], null), null),termcat.term.tt(t6))))?t6:null));
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"!bind: not a valid name \u2014 ",name,(((cljs.core.count(ts) > 1))?[cljs.core.str(" (and "),cljs.core.str((cljs.core.count(ts) - 1)),cljs.core.str(" more tokens)")].join(''):null))),t6], null);
}
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
}catch (e9089){if((e9089 instanceof Error))
{var e__3769__auto__ = e9089;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9089;
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
}catch (e9088){if((e9088 instanceof Error))
{var e__3769__auto__ = e9088;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9088;
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
}catch (e9087){if((e9087 instanceof Error))
{var e__3769__auto__ = e9087;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9087;
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
}catch (e9086){if((e9086 instanceof Error))
{var e__3769__auto__ = e9086;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9086;
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
}catch (e9085){if((e9085 instanceof Error))
{var e__3769__auto__ = e9085;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9085;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$43))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$7))
{try{var ocr_8981_4__9005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,4);if((cljs.core.vector_QMARK_(ocr_8981_4__9005)) && ((cljs.core.count(ocr_8981_4__9005) === 2)))
{try{var ocr_8981_4__9005_0__9020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_4__9005,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_4__9005_0__9020,cljs.core.constant$keyword$26))
{try{var ocr_8981_5__9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,5);if((cljs.core.vector_QMARK_(ocr_8981_5__9006)) && ((cljs.core.count(ocr_8981_5__9006) === 2)))
{try{var ocr_8981_5__9006_0__9022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_5__9006,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_5__9006_0__9022,cljs.core.constant$keyword$26))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"bind"))
{var ts = termcat.rewrite.unwrap(t4);var name = (function (){var $ = cljs.core.first(ts);var $__$1 = (cljs.core.truth_($)?termcat.term.payload($):null);return $__$1;
})();if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ts))) && (typeof name === 'string'))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,name,termcat.rewrite.unwrap(t5)),termcat.rules.bind.strongest_blank(t1,t6,t1)], null),((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$40,null], null), null),termcat.term.tt(t6))))?t6:null));
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"!bind: not a valid name \u2014 ",name,(((cljs.core.count(ts) > 1))?[cljs.core.str(" (and "),cljs.core.str((cljs.core.count(ts) - 1)),cljs.core.str(" more tokens)")].join(''):null))),t6], null);
}
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
}catch (e9094){if((e9094 instanceof Error))
{var e__3769__auto__ = e9094;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9094;
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
}catch (e9093){if((e9093 instanceof Error))
{var e__3769__auto__ = e9093;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9093;
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
}catch (e9092){if((e9092 instanceof Error))
{var e__3769__auto__ = e9092;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9092;
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
}catch (e9091){if((e9091 instanceof Error))
{var e__3769__auto__ = e9091;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9091;
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
}catch (e9090){if((e9090 instanceof Error))
{var e__3769__auto__ = e9090;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9090;
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
}
}
}catch (e9067){if((e9067 instanceof Error))
{var e__3769__auto__ = e9067;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_8981_1__9002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,1);if((cljs.core.vector_QMARK_(ocr_8981_1__9002)) && ((cljs.core.count(ocr_8981_1__9002) === 2)))
{try{var ocr_8981_1__9002_0__9024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_1__9002,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002_0__9024,cljs.core.constant$keyword$26))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$7))
{try{var ocr_8981_4__9005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,4);if((cljs.core.vector_QMARK_(ocr_8981_4__9005)) && ((cljs.core.count(ocr_8981_4__9005) === 2)))
{try{var ocr_8981_4__9005_0__9026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_4__9005,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_4__9005_0__9026,cljs.core.constant$keyword$26))
{try{var ocr_8981_5__9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,5);if((cljs.core.vector_QMARK_(ocr_8981_5__9006)) && ((cljs.core.count(ocr_8981_5__9006) === 2)))
{try{var ocr_8981_5__9006_0__9028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_5__9006,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_5__9006_0__9028,cljs.core.constant$keyword$26))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"bind"))
{var ts = termcat.rewrite.unwrap(t4);var name = (function (){var $ = cljs.core.first(ts);var $__$1 = (cljs.core.truth_($)?termcat.term.payload($):null);return $__$1;
})();if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(ts))) && (typeof name === 'string'))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,name,termcat.rewrite.unwrap(t5)),termcat.rules.bind.strongest_blank(t1,t6,t1)], null),((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$99,null,cljs.core.constant$keyword$40,null], null), null),termcat.term.tt(t6))))?t6:null));
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"!bind: not a valid name \u2014 ",name,(((cljs.core.count(ts) > 1))?[cljs.core.str(" (and "),cljs.core.str((cljs.core.count(ts) - 1)),cljs.core.str(" more tokens)")].join(''):null))),t6], null);
}
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
}catch (e9074){if((e9074 instanceof Error))
{var e__3769__auto____$1 = e9074;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9074;
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
}catch (e9073){if((e9073 instanceof Error))
{var e__3769__auto____$1 = e9073;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9073;
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
}catch (e9072){if((e9072 instanceof Error))
{var e__3769__auto____$1 = e9072;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9072;
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
}catch (e9071){if((e9071 instanceof Error))
{var e__3769__auto____$1 = e9071;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9071;
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
}catch (e9070){if((e9070 instanceof Error))
{var e__3769__auto____$1 = e9070;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9070;
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
}catch (e9069){if((e9069 instanceof Error))
{var e__3769__auto____$1 = e9069;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9069;
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
}catch (e9068){if((e9068 instanceof Error))
{var e__3769__auto____$1 = e9068;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9068;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9067;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_2__9003,cljs.core.constant$keyword$106))
{return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2)),t1,t2,t3,t4,t5,t6], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9043){if((e9043 instanceof Error))
{var e__3769__auto__ = e9043;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_8981_1__9002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,1);if((ocr_8981_1__9002 === null))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((ocr_8981_3__9004 === null))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}
}
}
}catch (e9051){if((e9051 instanceof Error))
{var e__3769__auto____$1 = e9051;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((cljs.core.vector_QMARK_(ocr_8981_3__9004)) && ((cljs.core.count(ocr_8981_3__9004) === 2)))
{try{var ocr_8981_3__9004_0__9030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_3__9004,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004_0__9030,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9054){if((e9054 instanceof Error))
{var e__3769__auto____$2 = e9054;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9054;
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
}catch (e9052){if((e9052 instanceof Error))
{var e__3769__auto____$2 = e9052;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9053){if((e9053 instanceof Error))
{var e__3769__auto____$3 = e9053;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9053;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9052;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9051;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$40))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((ocr_8981_3__9004 === null))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}
}
}
}catch (e9055){if((e9055 instanceof Error))
{var e__3769__auto____$1 = e9055;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((cljs.core.vector_QMARK_(ocr_8981_3__9004)) && ((cljs.core.count(ocr_8981_3__9004) === 2)))
{try{var ocr_8981_3__9004_0__9032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_3__9004,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004_0__9032,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9058){if((e9058 instanceof Error))
{var e__3769__auto____$2 = e9058;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9058;
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
}catch (e9056){if((e9056 instanceof Error))
{var e__3769__auto____$2 = e9056;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9057){if((e9057 instanceof Error))
{var e__3769__auto____$3 = e9057;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9057;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9056;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9055;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$99))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((ocr_8981_3__9004 === null))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}
}
}
}catch (e9059){if((e9059 instanceof Error))
{var e__3769__auto____$1 = e9059;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((cljs.core.vector_QMARK_(ocr_8981_3__9004)) && ((cljs.core.count(ocr_8981_3__9004) === 2)))
{try{var ocr_8981_3__9004_0__9034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_3__9004,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004_0__9034,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9062){if((e9062 instanceof Error))
{var e__3769__auto____$2 = e9062;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9062;
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
}catch (e9060){if((e9060 instanceof Error))
{var e__3769__auto____$2 = e9060;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9061){if((e9061 instanceof Error))
{var e__3769__auto____$3 = e9061;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9061;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9060;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9059;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002,cljs.core.constant$keyword$43))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((ocr_8981_3__9004 === null))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}
}
}
}catch (e9063){if((e9063 instanceof Error))
{var e__3769__auto____$1 = e9063;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((cljs.core.vector_QMARK_(ocr_8981_3__9004)) && ((cljs.core.count(ocr_8981_3__9004) === 2)))
{try{var ocr_8981_3__9004_0__9036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_3__9004,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004_0__9036,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9066){if((e9066 instanceof Error))
{var e__3769__auto____$2 = e9066;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9066;
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
}catch (e9064){if((e9064 instanceof Error))
{var e__3769__auto____$2 = e9064;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9065){if((e9065 instanceof Error))
{var e__3769__auto____$3 = e9065;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9065;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9064;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9063;
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
}
}
}catch (e9044){if((e9044 instanceof Error))
{var e__3769__auto____$1 = e9044;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8981_1__9002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,1);if((cljs.core.vector_QMARK_(ocr_8981_1__9002)) && ((cljs.core.count(ocr_8981_1__9002) === 2)))
{try{var ocr_8981_1__9002_0__9038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_1__9002,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_1__9002_0__9038,cljs.core.constant$keyword$26))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((ocr_8981_3__9004 === null))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}
}
}
}catch (e9047){if((e9047 instanceof Error))
{var e__3769__auto____$2 = e9047;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if((cljs.core.vector_QMARK_(ocr_8981_3__9004)) && ((cljs.core.count(ocr_8981_3__9004) === 2)))
{try{var ocr_8981_3__9004_0__9040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981_3__9004,0);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004_0__9040,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9050){if((e9050 instanceof Error))
{var e__3769__auto____$3 = e9050;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9050;
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
}catch (e9048){if((e9048 instanceof Error))
{var e__3769__auto____$3 = e9048;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8981_3__9004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8981,3);if(cljs.core.keyword_identical_QMARK_(ocr_8981_3__9004,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__5645__auto__ = termcat.term.token_QMARK_(t2);if(and__5645__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__5645__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
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
}catch (e9049){if((e9049 instanceof Error))
{var e__3769__auto____$4 = e9049;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9049;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9048;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9047;
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
}catch (e9046){if((e9046 instanceof Error))
{var e__3769__auto____$2 = e9046;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9046;
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
}catch (e9045){if((e9045 instanceof Error))
{var e__3769__auto____$2 = e9045;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9045;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9044;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9043;
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
}catch (e9042){if((e9042 instanceof Error))
{var e__3769__auto__ = e9042;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9042;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(6,input__5496__auto__))], null);
} else
{return null;
}
});
G__9095 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9095__0.call(this);
case 2:
return G__9095__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9095;
})()
);
/**
* 
*/
termcat.rules.bind.expand_bindings = termcat.rewrite.abstraction((function() {
var G__9108 = null;
var G__9108__0 = (function (){return null;
});
var G__9108__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9096 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9096,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9096,1,null);var temp__4090__auto__ = (function (){var ocr_9097 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9097)) && ((cljs.core.count(ocr_9097) === 2)))
{try{var ocr_9097_1__9101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9097,1);if((cljs.core.vector_QMARK_(ocr_9097_1__9101)) && ((cljs.core.count(ocr_9097_1__9101) === 2)))
{try{var ocr_9097_1__9101_0__9102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9097_1__9101,0);if(cljs.core.keyword_identical_QMARK_(ocr_9097_1__9101_0__9102,cljs.core.constant$keyword$26))
{try{var ocr_9097_1__9101_1__9103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9097_1__9101,1);if(cljs.core.keyword_identical_QMARK_(ocr_9097_1__9101_1__9103,cljs.core.constant$keyword$105))
{return cljs.core.cons(null,(function (){var $ = termcat.rewrite.unwrap(t1);var $__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(cljs.core.last($)),cljs.core.constant$keyword$97))?cljs.core.butlast($):$);return $__$1;
})());
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9107){if((e9107 instanceof Error))
{var e__3769__auto__ = e9107;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9107;
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
}catch (e9106){if((e9106 instanceof Error))
{var e__3769__auto__ = e9106;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9106;
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
}catch (e9105){if((e9105 instanceof Error))
{var e__3769__auto__ = e9105;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9105;
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
}catch (e9104){if((e9104 instanceof Error))
{var e__3769__auto__ = e9104;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9104;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(1,input__5496__auto__))], null);
} else
{return null;
}
});
G__9108 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9108__0.call(this);
case 2:
return G__9108__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9108;
})()
);
termcat.rules.bind.non_dormant_block_QMARK_ = (function non_dormant_block_QMARK_(x){return (termcat.term.block_QMARK_(x)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$26,cljs.core.constant$keyword$92], null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$26,cljs.core.constant$keyword$107], null)));
});
termcat.rules.bind.apply_fun = (function apply_fun(fun_token,arg){var retval = termcat.term.payload(fun_token).call(null,fun_token,arg);if(typeof retval === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,[cljs.core.str(retval),cljs.core.str(" \u2013 "),cljs.core.str(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(termcat.term.payload(fun_token))))].join(''))], null);
} else
{return retval;
}
});
termcat.rules.bind.apply_lambda = (function apply_lambda(lambda_term,arg){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(cljs.core.first(termcat.rewrite.unwrap(lambda_term))),cljs.core.constant$keyword$106))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap(lambda_term)) : termcat.rewrite.apply_rule.call(null,termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap(lambda_term))),arg);
} else
{if(cljs.core.not(arg))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,"Missing (user) function argument(s)")], null);
} else
{if(cljs.core.constant$keyword$6)
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.recursive_procedure(termcat.rewrite.fixpoint(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.introduce_bindings,termcat.rules.bind.expand_bindings], 0))),termcat.term.block_QMARK_,termcat.rewrite.lexical_scope),termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"bind"),termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$108),termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(termcat.rewrite.unwrap(lambda_term))], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$108)),arg], null),cljs.core.array_seq([cljs.core.next(termcat.rewrite.unwrap(lambda_term))], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92))) : termcat.rewrite.apply_rule.call(null,termcat.rewrite.recursive_procedure(termcat.rewrite.fixpoint(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.introduce_bindings,termcat.rules.bind.expand_bindings], 0))),termcat.term.block_QMARK_,termcat.rewrite.lexical_scope),termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"bind"),termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$108),termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(termcat.rewrite.unwrap(lambda_term))], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$108)),arg], null),cljs.core.array_seq([cljs.core.next(termcat.rewrite.unwrap(lambda_term))], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92))))], null);
} else
{return null;
}
}
}
});
termcat.rules.bind.apply_function = (function apply_function(fterm,arg){var G__9110 = termcat.term.tt(fterm);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$26,cljs.core.constant$keyword$92], null),G__9110))
{return termcat.rules.bind.apply_lambda(fterm,arg);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,G__9110))
{var x = termcat.rules.bind.apply_fun(fterm,arg);return x;
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.tt(fterm))].join('')));
} else
{return null;
}
}
}
});
/**
* 
*/
termcat.rules.bind.evaluate_fun_calls = termcat.rewrite.abstraction((function() {
var G__9151 = null;
var G__9151__0 = (function (){return null;
});
var G__9151__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9111 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9111,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9111,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9111,2,null);var temp__4090__auto__ = (function (){var ocr_9112 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9112)) && ((cljs.core.count(ocr_9112) === 3)))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120,cljs.core.constant$keyword$33))
{try{var ocr_9112_2__9121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,2);if((cljs.core.vector_QMARK_(ocr_9112_2__9121)) && ((cljs.core.count(ocr_9112_2__9121) === 2)))
{try{var ocr_9112_2__9121_0__9122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_2__9121,0);if(cljs.core.keyword_identical_QMARK_(ocr_9112_2__9121_0__9122,cljs.core.constant$keyword$26))
{return cljs.core.cons(null,termcat.rules.bind.apply_function(t1,t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9150){if((e9150 instanceof Error))
{var e__3769__auto__ = e9150;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9150;
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
}catch (e9149){if((e9149 instanceof Error))
{var e__3769__auto__ = e9149;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9149;
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
}catch (e9133){if((e9133 instanceof Error))
{var e__3769__auto__ = e9133;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if((cljs.core.vector_QMARK_(ocr_9112_1__9120)) && ((cljs.core.count(ocr_9112_1__9120) === 2)))
{try{var ocr_9112_1__9120_0__9124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,0);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_0__9124,cljs.core.constant$keyword$26))
{try{var ocr_9112_1__9120_1__9125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_1__9125,cljs.core.constant$keyword$92))
{try{var ocr_9112_2__9121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,2);if((cljs.core.vector_QMARK_(ocr_9112_2__9121)) && ((cljs.core.count(ocr_9112_2__9121) === 2)))
{try{var ocr_9112_2__9121_0__9126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_2__9121,0);if(cljs.core.keyword_identical_QMARK_(ocr_9112_2__9121_0__9126,cljs.core.constant$keyword$26))
{return cljs.core.cons(null,termcat.rules.bind.apply_function(t1,t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9148){if((e9148 instanceof Error))
{var e__3769__auto____$1 = e9148;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9148;
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
}catch (e9147){if((e9147 instanceof Error))
{var e__3769__auto____$1 = e9147;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9147;
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
}catch (e9146){if((e9146 instanceof Error))
{var e__3769__auto____$1 = e9146;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9146;
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
}catch (e9145){if((e9145 instanceof Error))
{var e__3769__auto____$1 = e9145;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9145;
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
}catch (e9134){if((e9134 instanceof Error))
{var e__3769__auto____$1 = e9134;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120,cljs.core.constant$keyword$33))
{try{var ocr_9112_2__9121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,2);if(cljs.core.keyword_identical_QMARK_(ocr_9112_2__9121,cljs.core.constant$keyword$97))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9144){if((e9144 instanceof Error))
{var e__3769__auto____$2 = e9144;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9144;
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
}catch (e9135){if((e9135 instanceof Error))
{var e__3769__auto____$2 = e9135;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if((cljs.core.vector_QMARK_(ocr_9112_1__9120)) && ((cljs.core.count(ocr_9112_1__9120) === 2)))
{try{var ocr_9112_1__9120_0__9128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,0);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_0__9128,cljs.core.constant$keyword$26))
{try{var ocr_9112_1__9120_1__9129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_1__9129,cljs.core.constant$keyword$92))
{try{var ocr_9112_2__9121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,2);if(cljs.core.keyword_identical_QMARK_(ocr_9112_2__9121,cljs.core.constant$keyword$97))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9143){if((e9143 instanceof Error))
{var e__3769__auto____$3 = e9143;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9143;
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
}catch (e9142){if((e9142 instanceof Error))
{var e__3769__auto____$3 = e9142;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9142;
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
}catch (e9141){if((e9141 instanceof Error))
{var e__3769__auto____$3 = e9141;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9141;
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
}catch (e9136){if((e9136 instanceof Error))
{var e__3769__auto____$3 = e9136;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120,cljs.core.constant$keyword$33))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.rules.bind.apply_function(t1,null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9137){if((e9137 instanceof Error))
{var e__3769__auto____$4 = e9137;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9112_1__9120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112,1);if((cljs.core.vector_QMARK_(ocr_9112_1__9120)) && ((cljs.core.count(ocr_9112_1__9120) === 2)))
{try{var ocr_9112_1__9120_0__9130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,0);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_0__9130,cljs.core.constant$keyword$26))
{try{var ocr_9112_1__9120_1__9131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9112_1__9120,1);if(cljs.core.keyword_identical_QMARK_(ocr_9112_1__9120_1__9131,cljs.core.constant$keyword$92))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.rules.bind.apply_function(t1,null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9140){if((e9140 instanceof Error))
{var e__3769__auto____$5 = e9140;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9140;
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
}catch (e9139){if((e9139 instanceof Error))
{var e__3769__auto____$5 = e9139;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9139;
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
}catch (e9138){if((e9138 instanceof Error))
{var e__3769__auto____$5 = e9138;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9138;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9137;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9136;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9135;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9134;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9133;
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
}catch (e9132){if((e9132 instanceof Error))
{var e__3769__auto__ = e9132;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9132;
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
G__9151 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9151__0.call(this);
case 2:
return G__9151__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9151;
})()
);
termcat.rules.bind.make_lambda = (function make_lambda(args,body){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$106,termcat.term.payload(x));
}),cljs.core.filter((function (p1__9152_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(p1__9152_SHARP_),cljs.core.constant$keyword$40);
}),termcat.term.center(args).terms)),cljs.core.array_seq([termcat.term.center(body).terms], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92))], null);
});
/**
* 
*/
termcat.rules.bind.introduce_lambdas = termcat.rewrite.abstraction((function() {
var G__9207 = null;
var G__9207__0 = (function (){return null;
});
var G__9207__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9153 = cljs.core.cons(state__5495__auto__,cljs.core.take(5,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9153,5,null);var temp__4090__auto__ = (function (){var ocr_9154 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(5,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9154)) && ((cljs.core.count(ocr_9154) === 6)))
{try{var ocr_9154_1__9160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,1);if((ocr_9154_1__9160 === null))
{try{var ocr_9154_2__9161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,2);if(cljs.core.keyword_identical_QMARK_(ocr_9154_2__9161,cljs.core.constant$keyword$61))
{try{var ocr_9154_3__9162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,3);if(cljs.core.keyword_identical_QMARK_(ocr_9154_3__9162,cljs.core.constant$keyword$7))
{try{var ocr_9154_4__9163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,4);if((cljs.core.vector_QMARK_(ocr_9154_4__9163)) && ((cljs.core.count(ocr_9154_4__9163) === 2)))
{try{var ocr_9154_4__9163_0__9165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_4__9163,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_4__9163_0__9165,cljs.core.constant$keyword$26))
{try{var ocr_9154_5__9164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,5);if((cljs.core.vector_QMARK_(ocr_9154_5__9164)) && ((cljs.core.count(ocr_9154_5__9164) === 2)))
{try{var ocr_9154_5__9164_0__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_5__9164,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_5__9164_0__9167,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__5657__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return termcat.term.payload(t1);
}
})())?t1:null)], null),termcat.rules.bind.make_lambda(t4,t5));
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
}catch (e9188){if((e9188 instanceof Error))
{var e__3769__auto__ = e9188;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9188;
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
}catch (e9187){if((e9187 instanceof Error))
{var e__3769__auto__ = e9187;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9187;
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
}catch (e9186){if((e9186 instanceof Error))
{var e__3769__auto__ = e9186;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9186;
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
}catch (e9185){if((e9185 instanceof Error))
{var e__3769__auto__ = e9185;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9185;
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
}catch (e9184){if((e9184 instanceof Error))
{var e__3769__auto__ = e9184;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9184;
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
}catch (e9183){if((e9183 instanceof Error))
{var e__3769__auto__ = e9183;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9183;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9154_1__9160,cljs.core.constant$keyword$40))
{try{var ocr_9154_2__9161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,2);if(cljs.core.keyword_identical_QMARK_(ocr_9154_2__9161,cljs.core.constant$keyword$61))
{try{var ocr_9154_3__9162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,3);if(cljs.core.keyword_identical_QMARK_(ocr_9154_3__9162,cljs.core.constant$keyword$7))
{try{var ocr_9154_4__9163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,4);if((cljs.core.vector_QMARK_(ocr_9154_4__9163)) && ((cljs.core.count(ocr_9154_4__9163) === 2)))
{try{var ocr_9154_4__9163_0__9169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_4__9163,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_4__9163_0__9169,cljs.core.constant$keyword$26))
{try{var ocr_9154_5__9164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,5);if((cljs.core.vector_QMARK_(ocr_9154_5__9164)) && ((cljs.core.count(ocr_9154_5__9164) === 2)))
{try{var ocr_9154_5__9164_0__9171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_5__9164,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_5__9164_0__9171,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__5657__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return termcat.term.payload(t1);
}
})())?t1:null)], null),termcat.rules.bind.make_lambda(t4,t5));
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
}catch (e9194){if((e9194 instanceof Error))
{var e__3769__auto__ = e9194;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9194;
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
}catch (e9193){if((e9193 instanceof Error))
{var e__3769__auto__ = e9193;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9193;
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
}catch (e9192){if((e9192 instanceof Error))
{var e__3769__auto__ = e9192;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9192;
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
}catch (e9191){if((e9191 instanceof Error))
{var e__3769__auto__ = e9191;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9191;
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
}catch (e9190){if((e9190 instanceof Error))
{var e__3769__auto__ = e9190;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9190;
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
}catch (e9189){if((e9189 instanceof Error))
{var e__3769__auto__ = e9189;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9189;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9154_1__9160,cljs.core.constant$keyword$43))
{try{var ocr_9154_2__9161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,2);if(cljs.core.keyword_identical_QMARK_(ocr_9154_2__9161,cljs.core.constant$keyword$61))
{try{var ocr_9154_3__9162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,3);if(cljs.core.keyword_identical_QMARK_(ocr_9154_3__9162,cljs.core.constant$keyword$7))
{try{var ocr_9154_4__9163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,4);if((cljs.core.vector_QMARK_(ocr_9154_4__9163)) && ((cljs.core.count(ocr_9154_4__9163) === 2)))
{try{var ocr_9154_4__9163_0__9173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_4__9163,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_4__9163_0__9173,cljs.core.constant$keyword$26))
{try{var ocr_9154_5__9164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,5);if((cljs.core.vector_QMARK_(ocr_9154_5__9164)) && ((cljs.core.count(ocr_9154_5__9164) === 2)))
{try{var ocr_9154_5__9164_0__9175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_5__9164,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_5__9164_0__9175,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__5657__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return termcat.term.payload(t1);
}
})())?t1:null)], null),termcat.rules.bind.make_lambda(t4,t5));
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
}catch (e9200){if((e9200 instanceof Error))
{var e__3769__auto__ = e9200;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9200;
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
}catch (e9199){if((e9199 instanceof Error))
{var e__3769__auto__ = e9199;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9199;
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
}catch (e9198){if((e9198 instanceof Error))
{var e__3769__auto__ = e9198;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9198;
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
}catch (e9197){if((e9197 instanceof Error))
{var e__3769__auto__ = e9197;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9197;
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
}catch (e9196){if((e9196 instanceof Error))
{var e__3769__auto__ = e9196;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9196;
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
}catch (e9195){if((e9195 instanceof Error))
{var e__3769__auto__ = e9195;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9195;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9154_1__9160,cljs.core.constant$keyword$99))
{try{var ocr_9154_2__9161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,2);if(cljs.core.keyword_identical_QMARK_(ocr_9154_2__9161,cljs.core.constant$keyword$61))
{try{var ocr_9154_3__9162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,3);if(cljs.core.keyword_identical_QMARK_(ocr_9154_3__9162,cljs.core.constant$keyword$7))
{try{var ocr_9154_4__9163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,4);if((cljs.core.vector_QMARK_(ocr_9154_4__9163)) && ((cljs.core.count(ocr_9154_4__9163) === 2)))
{try{var ocr_9154_4__9163_0__9177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_4__9163,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_4__9163_0__9177,cljs.core.constant$keyword$26))
{try{var ocr_9154_5__9164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154,5);if((cljs.core.vector_QMARK_(ocr_9154_5__9164)) && ((cljs.core.count(ocr_9154_5__9164) === 2)))
{try{var ocr_9154_5__9164_0__9179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9154_5__9164,0);if(cljs.core.keyword_identical_QMARK_(ocr_9154_5__9164_0__9179,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__5657__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return termcat.term.payload(t1);
}
})())?t1:null)], null),termcat.rules.bind.make_lambda(t4,t5));
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
}catch (e9206){if((e9206 instanceof Error))
{var e__3769__auto__ = e9206;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9206;
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
}catch (e9205){if((e9205 instanceof Error))
{var e__3769__auto__ = e9205;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9205;
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
}catch (e9204){if((e9204 instanceof Error))
{var e__3769__auto__ = e9204;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9204;
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
}catch (e9203){if((e9203 instanceof Error))
{var e__3769__auto__ = e9203;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9203;
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
}catch (e9202){if((e9202 instanceof Error))
{var e__3769__auto__ = e9202;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9202;
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
}catch (e9201){if((e9201 instanceof Error))
{var e__3769__auto__ = e9201;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9201;
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
}
}
}catch (e9182){if((e9182 instanceof Error))
{var e__3769__auto__ = e9182;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9182;
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
}catch (e9181){if((e9181 instanceof Error))
{var e__3769__auto__ = e9181;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9181;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(5,input__5496__auto__))], null);
} else
{return null;
}
});
G__9207 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9207__0.call(this);
case 2:
return G__9207__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9207;
})()
);
termcat.rules.bind.if_fn = (function if_fn(t1,t2,t3){return (termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap((cljs.core.truth_(termcat.util.lambda.tval(t1,(function (p1__9208_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9208_SHARP_,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9208_SHARP_,false));
})))?t2:t3))) : termcat.rewrite.apply_rule.call(null,termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap((cljs.core.truth_(termcat.util.lambda.tval(t1,(function (p1__9208_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9208_SHARP_,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9208_SHARP_,false));
})))?t2:t3))));
});
/**
* 
*/
termcat.rules.bind.introduce_fun_calls = termcat.rewrite.abstraction((function() {
var G__9240 = null;
var G__9240__0 = (function (){return null;
});
var G__9240__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9209 = cljs.core.cons(state__5495__auto__,cljs.core.take(6,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9209,6,null);var temp__4090__auto__ = (function (){var ocr_9210 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(6,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9210)) && ((cljs.core.count(ocr_9210) === 7)))
{try{var ocr_9210_1__9217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,1);if((ocr_9210_1__9217 === null))
{try{var ocr_9210_2__9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,2);if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$61))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9226){if((e9226 instanceof Error))
{var e__3769__auto__ = e9226;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9226;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$62))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9227){if((e9227 instanceof Error))
{var e__3769__auto__ = e9227;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9227;
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
}catch (e9225){if((e9225 instanceof Error))
{var e__3769__auto__ = e9225;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9225;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_1__9217,cljs.core.constant$keyword$40))
{try{var ocr_9210_2__9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,2);if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$61))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9229){if((e9229 instanceof Error))
{var e__3769__auto__ = e9229;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9229;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$62))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9230){if((e9230 instanceof Error))
{var e__3769__auto__ = e9230;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9230;
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
}catch (e9228){if((e9228 instanceof Error))
{var e__3769__auto__ = e9228;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9228;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_1__9217,cljs.core.constant$keyword$99))
{try{var ocr_9210_2__9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,2);if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$61))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9232){if((e9232 instanceof Error))
{var e__3769__auto__ = e9232;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9232;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$62))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9233){if((e9233 instanceof Error))
{var e__3769__auto__ = e9233;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9233;
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
}catch (e9231){if((e9231 instanceof Error))
{var e__3769__auto__ = e9231;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9231;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_1__9217,cljs.core.constant$keyword$43))
{try{var ocr_9210_2__9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,2);if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$61))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9235){if((e9235 instanceof Error))
{var e__3769__auto__ = e9235;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9235;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$62))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9236){if((e9236 instanceof Error))
{var e__3769__auto__ = e9236;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9236;
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
}catch (e9234){if((e9234 instanceof Error))
{var e__3769__auto__ = e9234;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9234;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_1__9217,cljs.core.constant$keyword$106))
{try{var ocr_9210_2__9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,2);if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$61))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9238){if((e9238 instanceof Error))
{var e__3769__auto__ = e9238;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9238;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9210_2__9218,cljs.core.constant$keyword$62))
{try{var ocr_9210_3__9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9210,3);if(cljs.core.keyword_identical_QMARK_(ocr_9210_3__9219,cljs.core.constant$keyword$7))
{if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$61)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t3),"if")))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,termcat.util.lambda.curry_fun.cljs$core$IFn$_invoke$arity$2(termcat.rules.bind.if_fn,3)),t4,((termcat.term.block_QMARK_(t5))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t5)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t5),((termcat.term.block_QMARK_(t6))?termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rewrite.unwrap(t6)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$107)):t6)], null);
} else
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head([cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join('')),t4,t5,t6], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9239){if((e9239 instanceof Error))
{var e__3769__auto__ = e9239;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9239;
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
}catch (e9237){if((e9237 instanceof Error))
{var e__3769__auto__ = e9237;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9237;
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
}
}
}
}catch (e9224){if((e9224 instanceof Error))
{var e__3769__auto__ = e9224;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9224;
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
}catch (e9223){if((e9223 instanceof Error))
{var e__3769__auto__ = e9223;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9223;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(6,input__5496__auto__))], null);
} else
{return null;
}
});
G__9240 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9240__0.call(this);
case 2:
return G__9240__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9240;
})()
);
