// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.markdown');
goog.require('cljs.core');
goog.require('termcat.util.lambda');
goog.require('termcat.util.lambda');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
/**
* 
*/
termcat.rules.markdown.introduce_section_calls = termcat.rewrite.abstraction((function() {
var G__9598 = null;
var G__9598__0 = (function (){return null;
});
var G__9598__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9556 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9556,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9556,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9556,2,null);var temp__4090__auto__ = (function (){var ocr_9557 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9557)) && ((cljs.core.count(ocr_9557) === 3)))
{try{var ocr_9557_1__9574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_1__9574,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9581){if((e9581 instanceof Error))
{var e__4796__auto__ = e9581;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9557_1__9574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557,1);if((cljs.core.vector_QMARK_(ocr_9557_1__9574)) && ((cljs.core.count(ocr_9557_1__9574) === 2)))
{try{var ocr_9557_1__9574_0__9576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_1__9574,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_1__9574_0__9576,cljs.core.constant$keyword$26))
{try{var ocr_9557_1__9574_1__9577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_1__9574,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_1__9574_1__9577,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9597){if((e9597 instanceof Error))
{var e__4796__auto____$1 = e9597;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9597;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9596){if((e9596 instanceof Error))
{var e__4796__auto____$1 = e9596;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9596;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9582){if((e9582 instanceof Error))
{var e__4796__auto____$1 = e9582;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557,2);if((cljs.core.vector_QMARK_(ocr_9557_2__9575)) && ((cljs.core.count(ocr_9557_2__9575) === 2)))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$91))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h1"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9595){if((e9595 instanceof Error))
{var e__4796__auto____$2 = e9595;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9595;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9584){if((e9584 instanceof Error))
{var e__4796__auto____$2 = e9584;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$90))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h2"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9594){if((e9594 instanceof Error))
{var e__4796__auto____$3 = e9594;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9594;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9585){if((e9585 instanceof Error))
{var e__4796__auto____$3 = e9585;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$89))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h3"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9593){if((e9593 instanceof Error))
{var e__4796__auto____$4 = e9593;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9593;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9586){if((e9586 instanceof Error))
{var e__4796__auto____$4 = e9586;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$88))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h4"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9592){if((e9592 instanceof Error))
{var e__4796__auto____$5 = e9592;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9592;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9587){if((e9587 instanceof Error))
{var e__4796__auto____$5 = e9587;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$87))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h5"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9591){if((e9591 instanceof Error))
{var e__4796__auto____$6 = e9591;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9591;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9588){if((e9588 instanceof Error))
{var e__4796__auto____$6 = e9588;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{try{var ocr_9557_2__9575_0__9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,0);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_0__9578,cljs.core.constant$keyword$26))
{try{var ocr_9557_2__9575_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9557_2__9575,1);if(cljs.core.keyword_identical_QMARK_(ocr_9557_2__9575_1__9579,cljs.core.constant$keyword$86))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h6"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9590){if((e9590 instanceof Error))
{var e__4796__auto____$7 = e9590;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9590;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9589){if((e9589 instanceof Error))
{var e__4796__auto____$7 = e9589;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9589;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9588;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9587;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9586;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9585;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9584;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9583){if((e9583 instanceof Error))
{var e__4796__auto____$2 = e9583;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9583;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9582;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9581;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9580){if((e9580 instanceof Error))
{var e__4796__auto__ = e9580;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9580;
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
G__9598 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9598__0.call(this);
case 2:
return G__9598__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9598;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_blockquote_calls = termcat.rewrite.abstraction((function() {
var G__9621 = null;
var G__9621__0 = (function (){return null;
});
var G__9621__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9599 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9599,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9599,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9599,2,null);var temp__4090__auto__ = (function (){var ocr_9600 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9600)) && ((cljs.core.count(ocr_9600) === 3)))
{try{var ocr_9600_1__9607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600,1);if(cljs.core.keyword_identical_QMARK_(ocr_9600_1__9607,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9614){if((e9614 instanceof Error))
{var e__4796__auto__ = e9614;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9600_1__9607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600,1);if((cljs.core.vector_QMARK_(ocr_9600_1__9607)) && ((cljs.core.count(ocr_9600_1__9607) === 2)))
{try{var ocr_9600_1__9607_0__9609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600_1__9607,0);if(cljs.core.keyword_identical_QMARK_(ocr_9600_1__9607_0__9609,cljs.core.constant$keyword$26))
{try{var ocr_9600_1__9607_1__9610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600_1__9607,1);if(cljs.core.keyword_identical_QMARK_(ocr_9600_1__9607_1__9610,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9620){if((e9620 instanceof Error))
{var e__4796__auto____$1 = e9620;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9620;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9619){if((e9619 instanceof Error))
{var e__4796__auto____$1 = e9619;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9619;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9615){if((e9615 instanceof Error))
{var e__4796__auto____$1 = e9615;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9600_2__9608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600,2);if((cljs.core.vector_QMARK_(ocr_9600_2__9608)) && ((cljs.core.count(ocr_9600_2__9608) === 2)))
{try{var ocr_9600_2__9608_0__9611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600_2__9608,0);if(cljs.core.keyword_identical_QMARK_(ocr_9600_2__9608_0__9611,cljs.core.constant$keyword$26))
{try{var ocr_9600_2__9608_1__9612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9600_2__9608,1);if(cljs.core.keyword_identical_QMARK_(ocr_9600_2__9608_1__9612,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":quotation"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9618){if((e9618 instanceof Error))
{var e__4796__auto____$2 = e9618;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9618;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9617){if((e9617 instanceof Error))
{var e__4796__auto____$2 = e9617;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9617;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9616){if((e9616 instanceof Error))
{var e__4796__auto____$2 = e9616;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9616;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9615;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9614;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9613){if((e9613 instanceof Error))
{var e__4796__auto__ = e9613;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9613;
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
G__9621 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9621__0.call(this);
case 2:
return G__9621__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9621;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_bullet_list_calls = termcat.rewrite.abstraction((function() {
var G__9651 = null;
var G__9651__0 = (function (){return null;
});
var G__9651__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9622 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9622,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9622,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9622,2,null);var temp__4090__auto__ = (function (){var ocr_9623 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9623)) && ((cljs.core.count(ocr_9623) === 3)))
{try{var ocr_9623_1__9632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623,1);if((cljs.core.vector_QMARK_(ocr_9623_1__9632)) && ((cljs.core.count(ocr_9623_1__9632) === 2)))
{try{var ocr_9623_1__9632_0__9634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_1__9632,0);if(cljs.core.keyword_identical_QMARK_(ocr_9623_1__9632_0__9634,cljs.core.constant$keyword$26))
{try{var ocr_9623_1__9632_1__9635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_1__9632,1);if(cljs.core.keyword_identical_QMARK_(ocr_9623_1__9632_1__9635,cljs.core.constant$keyword$94))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9650){if((e9650 instanceof Error))
{var e__4796__auto__ = e9650;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9650;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9649){if((e9649 instanceof Error))
{var e__4796__auto__ = e9649;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9649;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9641){if((e9641 instanceof Error))
{var e__4796__auto__ = e9641;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9623_1__9632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623,1);if(cljs.core.keyword_identical_QMARK_(ocr_9623_1__9632,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9642){if((e9642 instanceof Error))
{var e__4796__auto____$1 = e9642;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9623_1__9632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623,1);if((cljs.core.vector_QMARK_(ocr_9623_1__9632)) && ((cljs.core.count(ocr_9623_1__9632) === 2)))
{try{var ocr_9623_1__9632_0__9636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_1__9632,0);if(cljs.core.keyword_identical_QMARK_(ocr_9623_1__9632_0__9636,cljs.core.constant$keyword$26))
{try{var ocr_9623_1__9632_1__9637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_1__9632,1);if(cljs.core.keyword_identical_QMARK_(ocr_9623_1__9632_1__9637,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9648){if((e9648 instanceof Error))
{var e__4796__auto____$2 = e9648;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9648;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9647){if((e9647 instanceof Error))
{var e__4796__auto____$2 = e9647;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9647;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9643){if((e9643 instanceof Error))
{var e__4796__auto____$2 = e9643;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9623_2__9633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623,2);if((cljs.core.vector_QMARK_(ocr_9623_2__9633)) && ((cljs.core.count(ocr_9623_2__9633) === 2)))
{try{var ocr_9623_2__9633_0__9638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_2__9633,0);if(cljs.core.keyword_identical_QMARK_(ocr_9623_2__9633_0__9638,cljs.core.constant$keyword$26))
{try{var ocr_9623_2__9633_1__9639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9623_2__9633,1);if(cljs.core.keyword_identical_QMARK_(ocr_9623_2__9633_1__9639,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":bullet-list"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9646){if((e9646 instanceof Error))
{var e__4796__auto____$3 = e9646;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9646;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9645){if((e9645 instanceof Error))
{var e__4796__auto____$3 = e9645;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9645;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9644){if((e9644 instanceof Error))
{var e__4796__auto____$3 = e9644;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9644;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9643;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9642;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9641;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9640){if((e9640 instanceof Error))
{var e__4796__auto__ = e9640;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9640;
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
G__9651 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9651__0.call(this);
case 2:
return G__9651__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9651;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_img_calls = termcat.rewrite.abstraction((function() {
var G__9683 = null;
var G__9683__0 = (function (){return null;
});
var G__9683__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9652 = cljs.core.cons(state__6468__auto__,cljs.core.take(4,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9652,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9652,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9652,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9652,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9652,4,null);var temp__4090__auto__ = (function (){var ocr_9653 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9653)) && ((cljs.core.count(ocr_9653) === 5)))
{try{var ocr_9653_4__9666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653,4);if((cljs.core.vector_QMARK_(ocr_9653_4__9666)) && ((cljs.core.count(ocr_9653_4__9666) === 2)))
{try{var ocr_9653_4__9666_0__9667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653_4__9666,0);if(cljs.core.keyword_identical_QMARK_(ocr_9653_4__9666_0__9667,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9682){if((e9682 instanceof Error))
{var e__4796__auto__ = e9682;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9682;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9674){if((e9674 instanceof Error))
{var e__4796__auto__ = e9674;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9653_1__9663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653,1);if(cljs.core.keyword_identical_QMARK_(ocr_9653_1__9663,cljs.core.constant$keyword$63))
{try{var ocr_9653_2__9664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653,2);if((cljs.core.vector_QMARK_(ocr_9653_2__9664)) && ((cljs.core.count(ocr_9653_2__9664) === 2)))
{try{var ocr_9653_2__9664_0__9669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653_2__9664,0);if(cljs.core.keyword_identical_QMARK_(ocr_9653_2__9664_0__9669,cljs.core.constant$keyword$26))
{try{var ocr_9653_2__9664_1__9670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653_2__9664,1);if(cljs.core.keyword_identical_QMARK_(ocr_9653_2__9664_1__9670,cljs.core.constant$keyword$95))
{try{var ocr_9653_3__9665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653,3);if((cljs.core.vector_QMARK_(ocr_9653_3__9665)) && ((cljs.core.count(ocr_9653_3__9665) === 2)))
{try{var ocr_9653_3__9665_0__9671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653_3__9665,0);if(cljs.core.keyword_identical_QMARK_(ocr_9653_3__9665_0__9671,cljs.core.constant$keyword$26))
{try{var ocr_9653_3__9665_1__9672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9653_3__9665,1);if(cljs.core.keyword_identical_QMARK_(ocr_9653_3__9665_1__9672,cljs.core.constant$keyword$96))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.util.lambda.fun_call_seq.cljs$core$IFn$_invoke$arity$variadic(":img",cljs.core.array_seq([termcat.term.center(t2),termcat.term.center(t3)], 0)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9681){if((e9681 instanceof Error))
{var e__4796__auto____$1 = e9681;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9681;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9680){if((e9680 instanceof Error))
{var e__4796__auto____$1 = e9680;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9680;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9679){if((e9679 instanceof Error))
{var e__4796__auto____$1 = e9679;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9679;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9678){if((e9678 instanceof Error))
{var e__4796__auto____$1 = e9678;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9678;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9677){if((e9677 instanceof Error))
{var e__4796__auto____$1 = e9677;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9677;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9676){if((e9676 instanceof Error))
{var e__4796__auto____$1 = e9676;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9676;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9675){if((e9675 instanceof Error))
{var e__4796__auto____$1 = e9675;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9675;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9674;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9673){if((e9673 instanceof Error))
{var e__4796__auto__ = e9673;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9673;
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
G__9683 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9683__0.call(this);
case 2:
return G__9683__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9683;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_link_calls = termcat.rewrite.abstraction((function() {
var G__9729 = null;
var G__9729__0 = (function (){return null;
});
var G__9729__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9684 = cljs.core.cons(state__6468__auto__,cljs.core.take(4,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684,4,null);var temp__4090__auto__ = (function (){var ocr_9685 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9685)) && ((cljs.core.count(ocr_9685) === 5)))
{try{var ocr_9685_1__9705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685,1);if((cljs.core.vector_QMARK_(ocr_9685_1__9705)) && ((cljs.core.count(ocr_9685_1__9705) === 2)))
{try{var ocr_9685_1__9705_0__9709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_1__9705,0);if(cljs.core.keyword_identical_QMARK_(ocr_9685_1__9705_0__9709,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9728){if((e9728 instanceof Error))
{var e__4796__auto__ = e9728;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9728;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9718){if((e9718 instanceof Error))
{var e__4796__auto__ = e9718;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9685_1__9705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685,1);if(cljs.core.keyword_identical_QMARK_(ocr_9685_1__9705,cljs.core.constant$keyword$63))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9719){if((e9719 instanceof Error))
{var e__4796__auto____$1 = e9719;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9685_4__9708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685,4);if((cljs.core.vector_QMARK_(ocr_9685_4__9708)) && ((cljs.core.count(ocr_9685_4__9708) === 2)))
{try{var ocr_9685_4__9708_0__9711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_4__9708,0);if(cljs.core.keyword_identical_QMARK_(ocr_9685_4__9708_0__9711,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9727){if((e9727 instanceof Error))
{var e__4796__auto____$2 = e9727;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9727;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9720){if((e9720 instanceof Error))
{var e__4796__auto____$2 = e9720;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9685_2__9706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685,2);if((cljs.core.vector_QMARK_(ocr_9685_2__9706)) && ((cljs.core.count(ocr_9685_2__9706) === 2)))
{try{var ocr_9685_2__9706_0__9713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_2__9706,0);if(cljs.core.keyword_identical_QMARK_(ocr_9685_2__9706_0__9713,cljs.core.constant$keyword$26))
{try{var ocr_9685_2__9706_1__9714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_2__9706,1);if(cljs.core.keyword_identical_QMARK_(ocr_9685_2__9706_1__9714,cljs.core.constant$keyword$95))
{try{var ocr_9685_3__9707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685,3);if((cljs.core.vector_QMARK_(ocr_9685_3__9707)) && ((cljs.core.count(ocr_9685_3__9707) === 2)))
{try{var ocr_9685_3__9707_0__9715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_3__9707,0);if(cljs.core.keyword_identical_QMARK_(ocr_9685_3__9707_0__9715,cljs.core.constant$keyword$26))
{try{var ocr_9685_3__9707_1__9716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9685_3__9707,1);if(cljs.core.keyword_identical_QMARK_(ocr_9685_3__9707_1__9716,cljs.core.constant$keyword$96))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.lambda.fun_call_seq.cljs$core$IFn$_invoke$arity$variadic(":link",cljs.core.array_seq([termcat.term.center(t2),termcat.term.center(t3)], 0)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9726){if((e9726 instanceof Error))
{var e__4796__auto____$3 = e9726;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9726;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9725){if((e9725 instanceof Error))
{var e__4796__auto____$3 = e9725;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9725;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9724){if((e9724 instanceof Error))
{var e__4796__auto____$3 = e9724;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9724;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9723){if((e9723 instanceof Error))
{var e__4796__auto____$3 = e9723;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9723;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9722){if((e9722 instanceof Error))
{var e__4796__auto____$3 = e9722;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9722;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9721){if((e9721 instanceof Error))
{var e__4796__auto____$3 = e9721;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9721;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9720;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9719;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9718;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9717){if((e9717 instanceof Error))
{var e__4796__auto__ = e9717;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9717;
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
G__9729 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9729__0.call(this);
case 2:
return G__9729__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9729;
})()
);
termcat.rules.markdown.wrap_term = (function wrap_term(tag_name,t){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str(tag_name),cljs.core.str(">")].join(''))], null),((termcat.term.block_QMARK_(t))?termcat.rewrite.unwrap(t):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("</"),cljs.core.str(tag_name),cljs.core.str(">")].join(''))], null)], 0));
});
/**
* 
*/
termcat.rules.markdown.remove_decorators = termcat.rewrite.abstraction((function() {
var G__9761 = null;
var G__9761__0 = (function (){return null;
});
var G__9761__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9730 = cljs.core.cons(state__6468__auto__,cljs.core.take(9,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,6,null);var t7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,7,null);var t8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,8,null);var t9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9730,9,null);var temp__4090__auto__ = (function (){var ocr_9731 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(9,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9731)) && ((cljs.core.count(ocr_9731) === 10)))
{try{var ocr_9731_3__9746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,3);if(cljs.core.keyword_identical_QMARK_(ocr_9731_3__9746,cljs.core.constant$keyword$51))
{try{var ocr_9731_5__9748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,5);if(cljs.core.keyword_identical_QMARK_(ocr_9731_5__9748,cljs.core.constant$keyword$51))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,6);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,7);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$51)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t2], null),termcat.rules.markdown.wrap_term("u",t4),cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t6,t7,t8,t9], null)], 0));
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
}catch (e9759){if((e9759 instanceof Error))
{var e__4796__auto__ = e9759;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9759;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9731_3__9746,cljs.core.constant$keyword$41))
{try{var ocr_9731_5__9748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,5);if(cljs.core.keyword_identical_QMARK_(ocr_9731_5__9748,cljs.core.constant$keyword$41))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,6);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,7);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$41)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t2], null),termcat.rules.markdown.wrap_term("em",t4),cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [t6,t7,t8,t9], null)], 0));
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
}catch (e9760){if((e9760 instanceof Error))
{var e__4796__auto__ = e9760;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9760;
} else
{return null;
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
}catch (e9754){if((e9754 instanceof Error))
{var e__4796__auto__ = e9754;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9731_3__9746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,3);if(cljs.core.keyword_identical_QMARK_(ocr_9731_3__9746,cljs.core.constant$keyword$41))
{try{var ocr_9731_4__9747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,4);if(cljs.core.keyword_identical_QMARK_(ocr_9731_4__9747,cljs.core.constant$keyword$41))
{try{var ocr_9731_6__9749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,6);if(cljs.core.keyword_identical_QMARK_(ocr_9731_6__9749,cljs.core.constant$keyword$41))
{try{var ocr_9731_7__9750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,7);if(cljs.core.keyword_identical_QMARK_(ocr_9731_7__9750,cljs.core.constant$keyword$41))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,8);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9731,9);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$41)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t2], null),termcat.rules.markdown.wrap_term("strong",t5),cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t8,t9], null)], 0));
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
}catch (e9758){if((e9758 instanceof Error))
{var e__4796__auto____$1 = e9758;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9758;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9757){if((e9757 instanceof Error))
{var e__4796__auto____$1 = e9757;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9757;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9756){if((e9756 instanceof Error))
{var e__4796__auto____$1 = e9756;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9756;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9755){if((e9755 instanceof Error))
{var e__4796__auto____$1 = e9755;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9755;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9754;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9753){if((e9753 instanceof Error))
{var e__4796__auto__ = e9753;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9753;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(9,input__6469__auto__))], null);
} else
{return null;
}
});
G__9761 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9761__0.call(this);
case 2:
return G__9761__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9761;
})()
);
