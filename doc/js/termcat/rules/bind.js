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
termcat.rules.bind.strongest_blank = (function strongest_blank(t1,t2,default$){var pred__8925 = (function (p1__8921_SHARP_,p2__8920_SHARP_){return cljs.core.contains_QMARK_(p2__8920_SHARP_,p1__8921_SHARP_);
});var expr__8926 = (cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([termcat.term.tt(t1),termcat.term.tt(t2)],true) : cljs.core.PersistentHashSet.fromArray.call(null,[termcat.term.tt(t1),termcat.term.tt(t2)],true));if(pred__8925(null,expr__8926))
{return null;
} else
{if(pred__8925(cljs.core.constant$keyword$43,expr__8926))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$43);
} else
{if(pred__8925(cljs.core.constant$keyword$99,expr__8926))
{return termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$99);
} else
{if(pred__8925(cljs.core.constant$keyword$40,expr__8926))
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
var G__9043 = null;
var G__9043__0 = (function (){return null;
});
var G__9043__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8928 = cljs.core.cons(state__6468__auto__,cljs.core.take(6,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8928,6,null);var temp__4090__auto__ = (function (){var ocr_8929 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(6,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8929)) && ((cljs.core.count(ocr_8929) === 7)))
{try{var ocr_8929_2__8951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,2);if(cljs.core.keyword_identical_QMARK_(ocr_8929_2__8951,cljs.core.constant$keyword$63))
{try{var ocr_8929_1__8950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,1);if((ocr_8929_1__8950 === null))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$7))
{try{var ocr_8929_4__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,4);if((cljs.core.vector_QMARK_(ocr_8929_4__8953)) && ((cljs.core.count(ocr_8929_4__8953) === 2)))
{try{var ocr_8929_4__8953_0__8956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_4__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_4__8953_0__8956,cljs.core.constant$keyword$26))
{try{var ocr_8929_5__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,5);if((cljs.core.vector_QMARK_(ocr_8929_5__8954)) && ((cljs.core.count(ocr_8929_5__8954) === 2)))
{try{var ocr_8929_5__8954_0__8958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_5__8954,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_5__8954_0__8958,cljs.core.constant$keyword$26))
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
}catch (e9027){if((e9027 instanceof Error))
{var e__4796__auto__ = e9027;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9027;
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
}catch (e9026){if((e9026 instanceof Error))
{var e__4796__auto__ = e9026;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9026;
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
}catch (e9025){if((e9025 instanceof Error))
{var e__4796__auto__ = e9025;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9025;
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
}catch (e9024){if((e9024 instanceof Error))
{var e__4796__auto__ = e9024;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9024;
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
}catch (e9023){if((e9023 instanceof Error))
{var e__4796__auto__ = e9023;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9023;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$40))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$7))
{try{var ocr_8929_4__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,4);if((cljs.core.vector_QMARK_(ocr_8929_4__8953)) && ((cljs.core.count(ocr_8929_4__8953) === 2)))
{try{var ocr_8929_4__8953_0__8960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_4__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_4__8953_0__8960,cljs.core.constant$keyword$26))
{try{var ocr_8929_5__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,5);if((cljs.core.vector_QMARK_(ocr_8929_5__8954)) && ((cljs.core.count(ocr_8929_5__8954) === 2)))
{try{var ocr_8929_5__8954_0__8962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_5__8954,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_5__8954_0__8962,cljs.core.constant$keyword$26))
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
}catch (e9032){if((e9032 instanceof Error))
{var e__4796__auto__ = e9032;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9032;
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
}catch (e9031){if((e9031 instanceof Error))
{var e__4796__auto__ = e9031;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9031;
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
}catch (e9030){if((e9030 instanceof Error))
{var e__4796__auto__ = e9030;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9030;
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
}catch (e9029){if((e9029 instanceof Error))
{var e__4796__auto__ = e9029;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9029;
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
}catch (e9028){if((e9028 instanceof Error))
{var e__4796__auto__ = e9028;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9028;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$99))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$7))
{try{var ocr_8929_4__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,4);if((cljs.core.vector_QMARK_(ocr_8929_4__8953)) && ((cljs.core.count(ocr_8929_4__8953) === 2)))
{try{var ocr_8929_4__8953_0__8964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_4__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_4__8953_0__8964,cljs.core.constant$keyword$26))
{try{var ocr_8929_5__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,5);if((cljs.core.vector_QMARK_(ocr_8929_5__8954)) && ((cljs.core.count(ocr_8929_5__8954) === 2)))
{try{var ocr_8929_5__8954_0__8966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_5__8954,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_5__8954_0__8966,cljs.core.constant$keyword$26))
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
}catch (e9037){if((e9037 instanceof Error))
{var e__4796__auto__ = e9037;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9037;
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
}catch (e9036){if((e9036 instanceof Error))
{var e__4796__auto__ = e9036;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9036;
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
}catch (e9035){if((e9035 instanceof Error))
{var e__4796__auto__ = e9035;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9035;
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
}catch (e9034){if((e9034 instanceof Error))
{var e__4796__auto__ = e9034;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9034;
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
}catch (e9033){if((e9033 instanceof Error))
{var e__4796__auto__ = e9033;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9033;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$43))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$7))
{try{var ocr_8929_4__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,4);if((cljs.core.vector_QMARK_(ocr_8929_4__8953)) && ((cljs.core.count(ocr_8929_4__8953) === 2)))
{try{var ocr_8929_4__8953_0__8968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_4__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_4__8953_0__8968,cljs.core.constant$keyword$26))
{try{var ocr_8929_5__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,5);if((cljs.core.vector_QMARK_(ocr_8929_5__8954)) && ((cljs.core.count(ocr_8929_5__8954) === 2)))
{try{var ocr_8929_5__8954_0__8970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_5__8954,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_5__8954_0__8970,cljs.core.constant$keyword$26))
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
}catch (e9042){if((e9042 instanceof Error))
{var e__4796__auto__ = e9042;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9042;
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
}catch (e9041){if((e9041 instanceof Error))
{var e__4796__auto__ = e9041;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9041;
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
}catch (e9040){if((e9040 instanceof Error))
{var e__4796__auto__ = e9040;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9040;
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
}catch (e9039){if((e9039 instanceof Error))
{var e__4796__auto__ = e9039;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9039;
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
}catch (e9038){if((e9038 instanceof Error))
{var e__4796__auto__ = e9038;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9038;
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
}catch (e9015){if((e9015 instanceof Error))
{var e__4796__auto__ = e9015;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_8929_1__8950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,1);if((cljs.core.vector_QMARK_(ocr_8929_1__8950)) && ((cljs.core.count(ocr_8929_1__8950) === 2)))
{try{var ocr_8929_1__8950_0__8972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_1__8950,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950_0__8972,cljs.core.constant$keyword$26))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$7))
{try{var ocr_8929_4__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,4);if((cljs.core.vector_QMARK_(ocr_8929_4__8953)) && ((cljs.core.count(ocr_8929_4__8953) === 2)))
{try{var ocr_8929_4__8953_0__8974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_4__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_4__8953_0__8974,cljs.core.constant$keyword$26))
{try{var ocr_8929_5__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,5);if((cljs.core.vector_QMARK_(ocr_8929_5__8954)) && ((cljs.core.count(ocr_8929_5__8954) === 2)))
{try{var ocr_8929_5__8954_0__8976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_5__8954,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_5__8954_0__8976,cljs.core.constant$keyword$26))
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
}catch (e9022){if((e9022 instanceof Error))
{var e__4796__auto____$1 = e9022;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9022;
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
}catch (e9021){if((e9021 instanceof Error))
{var e__4796__auto____$1 = e9021;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9021;
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
}catch (e9020){if((e9020 instanceof Error))
{var e__4796__auto____$1 = e9020;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9020;
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
}catch (e9019){if((e9019 instanceof Error))
{var e__4796__auto____$1 = e9019;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9019;
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
}catch (e9018){if((e9018 instanceof Error))
{var e__4796__auto____$1 = e9018;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9018;
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
}catch (e9017){if((e9017 instanceof Error))
{var e__4796__auto____$1 = e9017;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9017;
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
}catch (e9016){if((e9016 instanceof Error))
{var e__4796__auto____$1 = e9016;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9016;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9015;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_2__8951,cljs.core.constant$keyword$106))
{return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2)),t1,t2,t3,t4,t5,t6], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8991){if((e8991 instanceof Error))
{var e__4796__auto__ = e8991;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_8929_1__8950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,1);if((ocr_8929_1__8950 === null))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((ocr_8929_3__8952 === null))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e8999){if((e8999 instanceof Error))
{var e__4796__auto____$1 = e8999;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((cljs.core.vector_QMARK_(ocr_8929_3__8952)) && ((cljs.core.count(ocr_8929_3__8952) === 2)))
{try{var ocr_8929_3__8952_0__8978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_3__8952,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952_0__8978,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9002){if((e9002 instanceof Error))
{var e__4796__auto____$2 = e9002;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9002;
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
}catch (e9000){if((e9000 instanceof Error))
{var e__4796__auto____$2 = e9000;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9001){if((e9001 instanceof Error))
{var e__4796__auto____$3 = e9001;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9001;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9000;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8999;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$40))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((ocr_8929_3__8952 === null))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9003){if((e9003 instanceof Error))
{var e__4796__auto____$1 = e9003;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((cljs.core.vector_QMARK_(ocr_8929_3__8952)) && ((cljs.core.count(ocr_8929_3__8952) === 2)))
{try{var ocr_8929_3__8952_0__8980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_3__8952,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952_0__8980,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9006){if((e9006 instanceof Error))
{var e__4796__auto____$2 = e9006;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9006;
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
}catch (e9004){if((e9004 instanceof Error))
{var e__4796__auto____$2 = e9004;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9005){if((e9005 instanceof Error))
{var e__4796__auto____$3 = e9005;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9005;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9004;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9003;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$99))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((ocr_8929_3__8952 === null))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9007){if((e9007 instanceof Error))
{var e__4796__auto____$1 = e9007;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((cljs.core.vector_QMARK_(ocr_8929_3__8952)) && ((cljs.core.count(ocr_8929_3__8952) === 2)))
{try{var ocr_8929_3__8952_0__8982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_3__8952,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952_0__8982,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9010){if((e9010 instanceof Error))
{var e__4796__auto____$2 = e9010;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9010;
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
}catch (e9008){if((e9008 instanceof Error))
{var e__4796__auto____$2 = e9008;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9009){if((e9009 instanceof Error))
{var e__4796__auto____$3 = e9009;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9009;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9008;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9007;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950,cljs.core.constant$keyword$43))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((ocr_8929_3__8952 === null))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9011){if((e9011 instanceof Error))
{var e__4796__auto____$1 = e9011;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((cljs.core.vector_QMARK_(ocr_8929_3__8952)) && ((cljs.core.count(ocr_8929_3__8952) === 2)))
{try{var ocr_8929_3__8952_0__8984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_3__8952,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952_0__8984,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9014){if((e9014 instanceof Error))
{var e__4796__auto____$2 = e9014;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9014;
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
}catch (e9012){if((e9012 instanceof Error))
{var e__4796__auto____$2 = e9012;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e9013){if((e9013 instanceof Error))
{var e__4796__auto____$3 = e9013;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9013;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9012;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9011;
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
}catch (e8992){if((e8992 instanceof Error))
{var e__4796__auto____$1 = e8992;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8929_1__8950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,1);if((cljs.core.vector_QMARK_(ocr_8929_1__8950)) && ((cljs.core.count(ocr_8929_1__8950) === 2)))
{try{var ocr_8929_1__8950_0__8986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_1__8950,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_1__8950_0__8986,cljs.core.constant$keyword$26))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((ocr_8929_3__8952 === null))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$40))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$99))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var ts = temp__4090__auto__;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,t1,termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(ts),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$105)),t3,t4,t5,t6], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$43))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e8995){if((e8995 instanceof Error))
{var e__4796__auto____$2 = e8995;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if((cljs.core.vector_QMARK_(ocr_8929_3__8952)) && ((cljs.core.count(ocr_8929_3__8952) === 2)))
{try{var ocr_8929_3__8952_0__8988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929_3__8952,0);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952_0__8988,cljs.core.constant$keyword$26))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e8998){if((e8998 instanceof Error))
{var e__4796__auto____$3 = e8998;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8998;
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
}catch (e8996){if((e8996 instanceof Error))
{var e__4796__auto____$3 = e8996;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8929_3__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8929,3);if(cljs.core.keyword_identical_QMARK_(ocr_8929_3__8952,cljs.core.constant$keyword$97))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = termcat.term.token_QMARK_(t2);if(and__3391__auto__)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,termcat.term.payload(t2));
} else
{return and__3391__auto__;
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
}catch (e8997){if((e8997 instanceof Error))
{var e__4796__auto____$4 = e8997;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8997;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8996;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8995;
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
}catch (e8994){if((e8994 instanceof Error))
{var e__4796__auto____$2 = e8994;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8994;
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
}catch (e8993){if((e8993 instanceof Error))
{var e__4796__auto____$2 = e8993;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8993;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8992;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8991;
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
}catch (e8990){if((e8990 instanceof Error))
{var e__4796__auto__ = e8990;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8990;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(6,input__6469__auto__))], null);
} else
{return null;
}
});
G__9043 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9043__0.call(this);
case 2:
return G__9043__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9043;
})()
);
/**
* 
*/
termcat.rules.bind.expand_bindings = termcat.rewrite.abstraction((function() {
var G__9056 = null;
var G__9056__0 = (function (){return null;
});
var G__9056__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9044 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9044,1,null);var temp__4090__auto__ = (function (){var ocr_9045 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9045)) && ((cljs.core.count(ocr_9045) === 2)))
{try{var ocr_9045_1__9049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9045,1);if((cljs.core.vector_QMARK_(ocr_9045_1__9049)) && ((cljs.core.count(ocr_9045_1__9049) === 2)))
{try{var ocr_9045_1__9049_0__9050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9045_1__9049,0);if(cljs.core.keyword_identical_QMARK_(ocr_9045_1__9049_0__9050,cljs.core.constant$keyword$26))
{try{var ocr_9045_1__9049_1__9051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9045_1__9049,1);if(cljs.core.keyword_identical_QMARK_(ocr_9045_1__9049_1__9051,cljs.core.constant$keyword$105))
{return cljs.core.cons(null,(function (){var $ = termcat.rewrite.unwrap(t1);var $__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(cljs.core.last($)),cljs.core.constant$keyword$97))?cljs.core.butlast($):$);return $__$1;
})());
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9055){if((e9055 instanceof Error))
{var e__4796__auto__ = e9055;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9055;
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
}catch (e9054){if((e9054 instanceof Error))
{var e__4796__auto__ = e9054;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}catch (e9053){if((e9053 instanceof Error))
{var e__4796__auto__ = e9053;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9053;
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
{var e__4796__auto__ = e9052;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9052;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9056 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9056__0.call(this);
case 2:
return G__9056__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9056;
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
termcat.rules.bind.apply_function = (function apply_function(fterm,arg){var G__9058 = termcat.term.tt(fterm);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$26,cljs.core.constant$keyword$92], null),G__9058))
{return termcat.rules.bind.apply_lambda(fterm,arg);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,G__9058))
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
var G__9099 = null;
var G__9099__0 = (function (){return null;
});
var G__9099__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9059 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9059,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9059,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9059,2,null);var temp__4090__auto__ = (function (){var ocr_9060 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9060)) && ((cljs.core.count(ocr_9060) === 3)))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068,cljs.core.constant$keyword$33))
{try{var ocr_9060_2__9069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,2);if((cljs.core.vector_QMARK_(ocr_9060_2__9069)) && ((cljs.core.count(ocr_9060_2__9069) === 2)))
{try{var ocr_9060_2__9069_0__9070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_2__9069,0);if(cljs.core.keyword_identical_QMARK_(ocr_9060_2__9069_0__9070,cljs.core.constant$keyword$26))
{return cljs.core.cons(null,termcat.rules.bind.apply_function(t1,t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9098){if((e9098 instanceof Error))
{var e__4796__auto__ = e9098;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9098;
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
}catch (e9097){if((e9097 instanceof Error))
{var e__4796__auto__ = e9097;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9097;
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
{var e__4796__auto__ = e9081;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if((cljs.core.vector_QMARK_(ocr_9060_1__9068)) && ((cljs.core.count(ocr_9060_1__9068) === 2)))
{try{var ocr_9060_1__9068_0__9072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,0);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_0__9072,cljs.core.constant$keyword$26))
{try{var ocr_9060_1__9068_1__9073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_1__9073,cljs.core.constant$keyword$92))
{try{var ocr_9060_2__9069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,2);if((cljs.core.vector_QMARK_(ocr_9060_2__9069)) && ((cljs.core.count(ocr_9060_2__9069) === 2)))
{try{var ocr_9060_2__9069_0__9074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_2__9069,0);if(cljs.core.keyword_identical_QMARK_(ocr_9060_2__9069_0__9074,cljs.core.constant$keyword$26))
{return cljs.core.cons(null,termcat.rules.bind.apply_function(t1,t2));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9096){if((e9096 instanceof Error))
{var e__4796__auto____$1 = e9096;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9096;
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
}catch (e9095){if((e9095 instanceof Error))
{var e__4796__auto____$1 = e9095;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9095;
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
}catch (e9094){if((e9094 instanceof Error))
{var e__4796__auto____$1 = e9094;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
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
{var e__4796__auto____$1 = e9093;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
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
}catch (e9082){if((e9082 instanceof Error))
{var e__4796__auto____$1 = e9082;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068,cljs.core.constant$keyword$33))
{try{var ocr_9060_2__9069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,2);if(cljs.core.keyword_identical_QMARK_(ocr_9060_2__9069,cljs.core.constant$keyword$97))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9092){if((e9092 instanceof Error))
{var e__4796__auto____$2 = e9092;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
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
}catch (e9083){if((e9083 instanceof Error))
{var e__4796__auto____$2 = e9083;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if((cljs.core.vector_QMARK_(ocr_9060_1__9068)) && ((cljs.core.count(ocr_9060_1__9068) === 2)))
{try{var ocr_9060_1__9068_0__9076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,0);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_0__9076,cljs.core.constant$keyword$26))
{try{var ocr_9060_1__9068_1__9077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_1__9077,cljs.core.constant$keyword$92))
{try{var ocr_9060_2__9069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,2);if(cljs.core.keyword_identical_QMARK_(ocr_9060_2__9069,cljs.core.constant$keyword$97))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9091){if((e9091 instanceof Error))
{var e__4796__auto____$3 = e9091;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
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
{var e__4796__auto____$3 = e9090;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
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
}catch (e9089){if((e9089 instanceof Error))
{var e__4796__auto____$3 = e9089;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
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
}catch (e9084){if((e9084 instanceof Error))
{var e__4796__auto____$3 = e9084;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068,cljs.core.constant$keyword$33))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.rules.bind.apply_function(t1,null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9085){if((e9085 instanceof Error))
{var e__4796__auto____$4 = e9085;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9060_1__9068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060,1);if((cljs.core.vector_QMARK_(ocr_9060_1__9068)) && ((cljs.core.count(ocr_9060_1__9068) === 2)))
{try{var ocr_9060_1__9068_0__9078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,0);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_0__9078,cljs.core.constant$keyword$26))
{try{var ocr_9060_1__9068_1__9079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9060_1__9068,1);if(cljs.core.keyword_identical_QMARK_(ocr_9060_1__9068_1__9079,cljs.core.constant$keyword$92))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.rules.bind.apply_function(t1,null),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9088){if((e9088 instanceof Error))
{var e__4796__auto____$5 = e9088;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
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
{var e__4796__auto____$5 = e9087;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
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
{var e__4796__auto____$5 = e9086;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9086;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9085;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9084;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9083;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9082;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9080;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9080;
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
G__9099 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9099__0.call(this);
case 2:
return G__9099__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9099;
})()
);
termcat.rules.bind.make_lambda = (function make_lambda(args,body){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.block(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){return termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$106,termcat.term.payload(x));
}),cljs.core.filter((function (p1__9100_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(p1__9100_SHARP_),cljs.core.constant$keyword$40);
}),termcat.term.center(args).terms)),cljs.core.array_seq([termcat.term.center(body).terms], 0)),termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$92))], null);
});
/**
* 
*/
termcat.rules.bind.introduce_lambdas = termcat.rewrite.abstraction((function() {
var G__9155 = null;
var G__9155__0 = (function (){return null;
});
var G__9155__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9101 = cljs.core.cons(state__6468__auto__,cljs.core.take(5,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,5,null);var temp__4090__auto__ = (function (){var ocr_9102 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(5,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9102)) && ((cljs.core.count(ocr_9102) === 6)))
{try{var ocr_9102_1__9108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,1);if((ocr_9102_1__9108 === null))
{try{var ocr_9102_2__9109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,2);if(cljs.core.keyword_identical_QMARK_(ocr_9102_2__9109,cljs.core.constant$keyword$61))
{try{var ocr_9102_3__9110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,3);if(cljs.core.keyword_identical_QMARK_(ocr_9102_3__9110,cljs.core.constant$keyword$7))
{try{var ocr_9102_4__9111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,4);if((cljs.core.vector_QMARK_(ocr_9102_4__9111)) && ((cljs.core.count(ocr_9102_4__9111) === 2)))
{try{var ocr_9102_4__9111_0__9113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_4__9111,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_4__9111_0__9113,cljs.core.constant$keyword$26))
{try{var ocr_9102_5__9112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,5);if((cljs.core.vector_QMARK_(ocr_9102_5__9112)) && ((cljs.core.count(ocr_9102_5__9112) === 2)))
{try{var ocr_9102_5__9112_0__9115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_5__9112,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_5__9112_0__9115,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__3403__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__3403__auto__)
{return or__3403__auto__;
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
}catch (e9136){if((e9136 instanceof Error))
{var e__4796__auto__ = e9136;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9136;
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
{var e__4796__auto__ = e9135;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9135;
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
{var e__4796__auto__ = e9134;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9134;
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
{var e__4796__auto__ = e9133;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9132;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9132;
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
}catch (e9131){if((e9131 instanceof Error))
{var e__4796__auto__ = e9131;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9131;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9102_1__9108,cljs.core.constant$keyword$40))
{try{var ocr_9102_2__9109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,2);if(cljs.core.keyword_identical_QMARK_(ocr_9102_2__9109,cljs.core.constant$keyword$61))
{try{var ocr_9102_3__9110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,3);if(cljs.core.keyword_identical_QMARK_(ocr_9102_3__9110,cljs.core.constant$keyword$7))
{try{var ocr_9102_4__9111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,4);if((cljs.core.vector_QMARK_(ocr_9102_4__9111)) && ((cljs.core.count(ocr_9102_4__9111) === 2)))
{try{var ocr_9102_4__9111_0__9117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_4__9111,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_4__9111_0__9117,cljs.core.constant$keyword$26))
{try{var ocr_9102_5__9112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,5);if((cljs.core.vector_QMARK_(ocr_9102_5__9112)) && ((cljs.core.count(ocr_9102_5__9112) === 2)))
{try{var ocr_9102_5__9112_0__9119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_5__9112,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_5__9112_0__9119,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__3403__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__3403__auto__)
{return or__3403__auto__;
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
}catch (e9142){if((e9142 instanceof Error))
{var e__4796__auto__ = e9142;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9141;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}catch (e9140){if((e9140 instanceof Error))
{var e__4796__auto__ = e9140;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9139;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9138;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9138;
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
}catch (e9137){if((e9137 instanceof Error))
{var e__4796__auto__ = e9137;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9137;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9102_1__9108,cljs.core.constant$keyword$43))
{try{var ocr_9102_2__9109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,2);if(cljs.core.keyword_identical_QMARK_(ocr_9102_2__9109,cljs.core.constant$keyword$61))
{try{var ocr_9102_3__9110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,3);if(cljs.core.keyword_identical_QMARK_(ocr_9102_3__9110,cljs.core.constant$keyword$7))
{try{var ocr_9102_4__9111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,4);if((cljs.core.vector_QMARK_(ocr_9102_4__9111)) && ((cljs.core.count(ocr_9102_4__9111) === 2)))
{try{var ocr_9102_4__9111_0__9121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_4__9111,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_4__9111_0__9121,cljs.core.constant$keyword$26))
{try{var ocr_9102_5__9112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,5);if((cljs.core.vector_QMARK_(ocr_9102_5__9112)) && ((cljs.core.count(ocr_9102_5__9112) === 2)))
{try{var ocr_9102_5__9112_0__9123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_5__9112,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_5__9112_0__9123,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__3403__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__3403__auto__)
{return or__3403__auto__;
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
}catch (e9148){if((e9148 instanceof Error))
{var e__4796__auto__ = e9148;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9147;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9146;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9145;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}catch (e9144){if((e9144 instanceof Error))
{var e__4796__auto__ = e9144;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}catch (e9143){if((e9143 instanceof Error))
{var e__4796__auto__ = e9143;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9143;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9102_1__9108,cljs.core.constant$keyword$99))
{try{var ocr_9102_2__9109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,2);if(cljs.core.keyword_identical_QMARK_(ocr_9102_2__9109,cljs.core.constant$keyword$61))
{try{var ocr_9102_3__9110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,3);if(cljs.core.keyword_identical_QMARK_(ocr_9102_3__9110,cljs.core.constant$keyword$7))
{try{var ocr_9102_4__9111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,4);if((cljs.core.vector_QMARK_(ocr_9102_4__9111)) && ((cljs.core.count(ocr_9102_4__9111) === 2)))
{try{var ocr_9102_4__9111_0__9125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_4__9111,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_4__9111_0__9125,cljs.core.constant$keyword$26))
{try{var ocr_9102_5__9112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102,5);if((cljs.core.vector_QMARK_(ocr_9102_5__9112)) && ((cljs.core.count(ocr_9102_5__9112) === 2)))
{try{var ocr_9102_5__9112_0__9127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9102_5__9112,0);if(cljs.core.keyword_identical_QMARK_(ocr_9102_5__9112_0__9127,cljs.core.constant$keyword$26))
{if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["fn",null,"recfn",null], null), null),termcat.term.payload(t3)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(cljs.core.truth_((function (){var or__3403__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),cljs.core.constant$keyword$43);if(or__3403__auto__)
{return or__3403__auto__;
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
}catch (e9154){if((e9154 instanceof Error))
{var e__4796__auto__ = e9154;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9154;
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
}catch (e9153){if((e9153 instanceof Error))
{var e__4796__auto__ = e9153;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9153;
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
}catch (e9152){if((e9152 instanceof Error))
{var e__4796__auto__ = e9152;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9152;
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
}catch (e9151){if((e9151 instanceof Error))
{var e__4796__auto__ = e9151;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9151;
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
}catch (e9150){if((e9150 instanceof Error))
{var e__4796__auto__ = e9150;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
{var e__4796__auto__ = e9149;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}
}
}
}catch (e9130){if((e9130 instanceof Error))
{var e__4796__auto__ = e9130;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9130;
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
}catch (e9129){if((e9129 instanceof Error))
{var e__4796__auto__ = e9129;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9129;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(5,input__6469__auto__))], null);
} else
{return null;
}
});
G__9155 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9155__0.call(this);
case 2:
return G__9155__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9155;
})()
);
termcat.rules.bind.if_fn = (function if_fn(t1,t2,t3){return (termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap((cljs.core.truth_(termcat.util.lambda.tval(t1,(function (p1__9156_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9156_SHARP_,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9156_SHARP_,false));
})))?t2:t3))) : termcat.rewrite.apply_rule.call(null,termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.rewrite.unwrap((cljs.core.truth_(termcat.util.lambda.tval(t1,(function (p1__9156_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9156_SHARP_,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__9156_SHARP_,false));
})))?t2:t3))));
});
/**
* 
*/
termcat.rules.bind.introduce_fun_calls = termcat.rewrite.abstraction((function() {
var G__9188 = null;
var G__9188__0 = (function (){return null;
});
var G__9188__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9157 = cljs.core.cons(state__6468__auto__,cljs.core.take(6,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9157,6,null);var temp__4090__auto__ = (function (){var ocr_9158 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(6,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9158)) && ((cljs.core.count(ocr_9158) === 7)))
{try{var ocr_9158_1__9165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,1);if((ocr_9158_1__9165 === null))
{try{var ocr_9158_2__9166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,2);if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$61))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9174){if((e9174 instanceof Error))
{var e__4796__auto__ = e9174;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9174;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$62))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9175){if((e9175 instanceof Error))
{var e__4796__auto__ = e9175;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9175;
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
}catch (e9173){if((e9173 instanceof Error))
{var e__4796__auto__ = e9173;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9173;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_1__9165,cljs.core.constant$keyword$40))
{try{var ocr_9158_2__9166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,2);if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$61))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9177){if((e9177 instanceof Error))
{var e__4796__auto__ = e9177;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9177;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$62))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9178){if((e9178 instanceof Error))
{var e__4796__auto__ = e9178;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9178;
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
}catch (e9176){if((e9176 instanceof Error))
{var e__4796__auto__ = e9176;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9176;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_1__9165,cljs.core.constant$keyword$99))
{try{var ocr_9158_2__9166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,2);if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$61))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9180){if((e9180 instanceof Error))
{var e__4796__auto__ = e9180;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9180;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$62))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9181){if((e9181 instanceof Error))
{var e__4796__auto__ = e9181;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9181;
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
}catch (e9179){if((e9179 instanceof Error))
{var e__4796__auto__ = e9179;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9179;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_1__9165,cljs.core.constant$keyword$43))
{try{var ocr_9158_2__9166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,2);if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$61))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9183){if((e9183 instanceof Error))
{var e__4796__auto__ = e9183;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9183;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$62))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9184){if((e9184 instanceof Error))
{var e__4796__auto__ = e9184;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}
}catch (e9182){if((e9182 instanceof Error))
{var e__4796__auto__ = e9182;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9182;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_1__9165,cljs.core.constant$keyword$106))
{try{var ocr_9158_2__9166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,2);if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$61))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9186){if((e9186 instanceof Error))
{var e__4796__auto__ = e9186;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9186;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9158_2__9166,cljs.core.constant$keyword$62))
{try{var ocr_9158_3__9167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9158,3);if(cljs.core.keyword_identical_QMARK_(ocr_9158_3__9167,cljs.core.constant$keyword$7))
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
}catch (e9187){if((e9187 instanceof Error))
{var e__4796__auto__ = e9187;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}
}catch (e9185){if((e9185 instanceof Error))
{var e__4796__auto__ = e9185;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
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
}
}
}
}
}catch (e9172){if((e9172 instanceof Error))
{var e__4796__auto__ = e9172;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9172;
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
}catch (e9171){if((e9171 instanceof Error))
{var e__4796__auto__ = e9171;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9171;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(6,input__6469__auto__))], null);
} else
{return null;
}
});
G__9188 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9188__0.call(this);
case 2:
return G__9188__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9188;
})()
);
