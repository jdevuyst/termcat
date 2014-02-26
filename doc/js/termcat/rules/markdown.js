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
var G__9650 = null;
var G__9650__0 = (function (){return null;
});
var G__9650__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9608 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608,2,null);var temp__4090__auto__ = (function (){var ocr_9609 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9609)) && ((cljs.core.count(ocr_9609) === 3)))
{try{var ocr_9609_1__9626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_1__9626,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9633){if((e9633 instanceof Error))
{var e__3769__auto__ = e9633;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9609_1__9626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609,1);if((cljs.core.vector_QMARK_(ocr_9609_1__9626)) && ((cljs.core.count(ocr_9609_1__9626) === 2)))
{try{var ocr_9609_1__9626_0__9628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_1__9626,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_1__9626_0__9628,cljs.core.constant$keyword$26))
{try{var ocr_9609_1__9626_1__9629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_1__9626,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_1__9626_1__9629,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9649){if((e9649 instanceof Error))
{var e__3769__auto____$1 = e9649;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}catch (e9648){if((e9648 instanceof Error))
{var e__3769__auto____$1 = e9648;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}catch (e9634){if((e9634 instanceof Error))
{var e__3769__auto____$1 = e9634;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609,2);if((cljs.core.vector_QMARK_(ocr_9609_2__9627)) && ((cljs.core.count(ocr_9609_2__9627) === 2)))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$91))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h1"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9647){if((e9647 instanceof Error))
{var e__3769__auto____$2 = e9647;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
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
}catch (e9636){if((e9636 instanceof Error))
{var e__3769__auto____$2 = e9636;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$90))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h2"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9646){if((e9646 instanceof Error))
{var e__3769__auto____$3 = e9646;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
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
}catch (e9637){if((e9637 instanceof Error))
{var e__3769__auto____$3 = e9637;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$89))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h3"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9645){if((e9645 instanceof Error))
{var e__3769__auto____$4 = e9645;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
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
}catch (e9638){if((e9638 instanceof Error))
{var e__3769__auto____$4 = e9638;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$88))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h4"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9644){if((e9644 instanceof Error))
{var e__3769__auto____$5 = e9644;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9644;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9639){if((e9639 instanceof Error))
{var e__3769__auto____$5 = e9639;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$87))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h5"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9643){if((e9643 instanceof Error))
{var e__3769__auto____$6 = e9643;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9643;
} else
{return null;
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
{var e__3769__auto____$6 = e9640;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{try{var ocr_9609_2__9627_0__9630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,0);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_0__9630,cljs.core.constant$keyword$26))
{try{var ocr_9609_2__9627_1__9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9609_2__9627,1);if(cljs.core.keyword_identical_QMARK_(ocr_9609_2__9627_1__9631,cljs.core.constant$keyword$86))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":h6"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9642){if((e9642 instanceof Error))
{var e__3769__auto____$7 = e9642;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9642;
} else
{return null;
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
{var e__3769__auto____$7 = e9641;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9641;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9640;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9639;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9638;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9637;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9636;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9635){if((e9635 instanceof Error))
{var e__3769__auto____$2 = e9635;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9635;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9634;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9633;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9632){if((e9632 instanceof Error))
{var e__3769__auto__ = e9632;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9632;
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
G__9650 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9650__0.call(this);
case 2:
return G__9650__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9650;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_blockquote_calls = termcat.rewrite.abstraction((function() {
var G__9673 = null;
var G__9673__0 = (function (){return null;
});
var G__9673__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9651 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9651,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9651,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9651,2,null);var temp__4090__auto__ = (function (){var ocr_9652 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9652)) && ((cljs.core.count(ocr_9652) === 3)))
{try{var ocr_9652_1__9659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652,1);if(cljs.core.keyword_identical_QMARK_(ocr_9652_1__9659,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9666){if((e9666 instanceof Error))
{var e__3769__auto__ = e9666;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9652_1__9659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652,1);if((cljs.core.vector_QMARK_(ocr_9652_1__9659)) && ((cljs.core.count(ocr_9652_1__9659) === 2)))
{try{var ocr_9652_1__9659_0__9661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652_1__9659,0);if(cljs.core.keyword_identical_QMARK_(ocr_9652_1__9659_0__9661,cljs.core.constant$keyword$26))
{try{var ocr_9652_1__9659_1__9662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652_1__9659,1);if(cljs.core.keyword_identical_QMARK_(ocr_9652_1__9659_1__9662,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9672){if((e9672 instanceof Error))
{var e__3769__auto____$1 = e9672;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9672;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9671){if((e9671 instanceof Error))
{var e__3769__auto____$1 = e9671;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9671;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9667){if((e9667 instanceof Error))
{var e__3769__auto____$1 = e9667;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9652_2__9660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652,2);if((cljs.core.vector_QMARK_(ocr_9652_2__9660)) && ((cljs.core.count(ocr_9652_2__9660) === 2)))
{try{var ocr_9652_2__9660_0__9663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652_2__9660,0);if(cljs.core.keyword_identical_QMARK_(ocr_9652_2__9660_0__9663,cljs.core.constant$keyword$26))
{try{var ocr_9652_2__9660_1__9664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9652_2__9660,1);if(cljs.core.keyword_identical_QMARK_(ocr_9652_2__9660_1__9664,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":quotation"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9670){if((e9670 instanceof Error))
{var e__3769__auto____$2 = e9670;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9670;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9669){if((e9669 instanceof Error))
{var e__3769__auto____$2 = e9669;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9669;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9668){if((e9668 instanceof Error))
{var e__3769__auto____$2 = e9668;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9668;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9667;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9666;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9665){if((e9665 instanceof Error))
{var e__3769__auto__ = e9665;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9665;
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
G__9673 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9673__0.call(this);
case 2:
return G__9673__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9673;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_bullet_list_calls = termcat.rewrite.abstraction((function() {
var G__9703 = null;
var G__9703__0 = (function (){return null;
});
var G__9703__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9674 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9674,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9674,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9674,2,null);var temp__4090__auto__ = (function (){var ocr_9675 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9675)) && ((cljs.core.count(ocr_9675) === 3)))
{try{var ocr_9675_1__9684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675,1);if((cljs.core.vector_QMARK_(ocr_9675_1__9684)) && ((cljs.core.count(ocr_9675_1__9684) === 2)))
{try{var ocr_9675_1__9684_0__9686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_1__9684,0);if(cljs.core.keyword_identical_QMARK_(ocr_9675_1__9684_0__9686,cljs.core.constant$keyword$26))
{try{var ocr_9675_1__9684_1__9687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_1__9684,1);if(cljs.core.keyword_identical_QMARK_(ocr_9675_1__9684_1__9687,cljs.core.constant$keyword$94))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9702){if((e9702 instanceof Error))
{var e__3769__auto__ = e9702;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9702;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9701){if((e9701 instanceof Error))
{var e__3769__auto__ = e9701;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9701;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9693){if((e9693 instanceof Error))
{var e__3769__auto__ = e9693;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9675_1__9684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675,1);if(cljs.core.keyword_identical_QMARK_(ocr_9675_1__9684,cljs.core.constant$keyword$33))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9694){if((e9694 instanceof Error))
{var e__3769__auto____$1 = e9694;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9675_1__9684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675,1);if((cljs.core.vector_QMARK_(ocr_9675_1__9684)) && ((cljs.core.count(ocr_9675_1__9684) === 2)))
{try{var ocr_9675_1__9684_0__9688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_1__9684,0);if(cljs.core.keyword_identical_QMARK_(ocr_9675_1__9684_0__9688,cljs.core.constant$keyword$26))
{try{var ocr_9675_1__9684_1__9689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_1__9684,1);if(cljs.core.keyword_identical_QMARK_(ocr_9675_1__9684_1__9689,cljs.core.constant$keyword$92))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9700){if((e9700 instanceof Error))
{var e__3769__auto____$2 = e9700;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9700;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9699){if((e9699 instanceof Error))
{var e__3769__auto____$2 = e9699;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9699;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9695){if((e9695 instanceof Error))
{var e__3769__auto____$2 = e9695;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9675_2__9685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675,2);if((cljs.core.vector_QMARK_(ocr_9675_2__9685)) && ((cljs.core.count(ocr_9675_2__9685) === 2)))
{try{var ocr_9675_2__9685_0__9690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_2__9685,0);if(cljs.core.keyword_identical_QMARK_(ocr_9675_2__9685_0__9690,cljs.core.constant$keyword$26))
{try{var ocr_9675_2__9685_1__9691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9675_2__9685,1);if(cljs.core.keyword_identical_QMARK_(ocr_9675_2__9685_1__9691,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.util.lambda.fun_call_head(":bullet-list"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9698){if((e9698 instanceof Error))
{var e__3769__auto____$3 = e9698;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9698;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9697){if((e9697 instanceof Error))
{var e__3769__auto____$3 = e9697;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9697;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9696){if((e9696 instanceof Error))
{var e__3769__auto____$3 = e9696;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9696;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9695;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9694;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9693;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9692){if((e9692 instanceof Error))
{var e__3769__auto__ = e9692;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9692;
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
G__9703 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9703__0.call(this);
case 2:
return G__9703__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9703;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_img_calls = termcat.rewrite.abstraction((function() {
var G__9735 = null;
var G__9735__0 = (function (){return null;
});
var G__9735__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9704 = cljs.core.cons(state__5495__auto__,cljs.core.take(4,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,4,null);var temp__4090__auto__ = (function (){var ocr_9705 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9705)) && ((cljs.core.count(ocr_9705) === 5)))
{try{var ocr_9705_4__9718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705,4);if((cljs.core.vector_QMARK_(ocr_9705_4__9718)) && ((cljs.core.count(ocr_9705_4__9718) === 2)))
{try{var ocr_9705_4__9718_0__9719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705_4__9718,0);if(cljs.core.keyword_identical_QMARK_(ocr_9705_4__9718_0__9719,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9734){if((e9734 instanceof Error))
{var e__3769__auto__ = e9734;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9734;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9726){if((e9726 instanceof Error))
{var e__3769__auto__ = e9726;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9705_1__9715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705,1);if(cljs.core.keyword_identical_QMARK_(ocr_9705_1__9715,cljs.core.constant$keyword$63))
{try{var ocr_9705_2__9716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705,2);if((cljs.core.vector_QMARK_(ocr_9705_2__9716)) && ((cljs.core.count(ocr_9705_2__9716) === 2)))
{try{var ocr_9705_2__9716_0__9721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705_2__9716,0);if(cljs.core.keyword_identical_QMARK_(ocr_9705_2__9716_0__9721,cljs.core.constant$keyword$26))
{try{var ocr_9705_2__9716_1__9722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705_2__9716,1);if(cljs.core.keyword_identical_QMARK_(ocr_9705_2__9716_1__9722,cljs.core.constant$keyword$95))
{try{var ocr_9705_3__9717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705,3);if((cljs.core.vector_QMARK_(ocr_9705_3__9717)) && ((cljs.core.count(ocr_9705_3__9717) === 2)))
{try{var ocr_9705_3__9717_0__9723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705_3__9717,0);if(cljs.core.keyword_identical_QMARK_(ocr_9705_3__9717_0__9723,cljs.core.constant$keyword$26))
{try{var ocr_9705_3__9717_1__9724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9705_3__9717,1);if(cljs.core.keyword_identical_QMARK_(ocr_9705_3__9717_1__9724,cljs.core.constant$keyword$96))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),termcat.util.lambda.fun_call_seq.cljs$core$IFn$_invoke$arity$variadic(":img",cljs.core.array_seq([termcat.term.center(t2),termcat.term.center(t3)], 0)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9733){if((e9733 instanceof Error))
{var e__3769__auto____$1 = e9733;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9733;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9732){if((e9732 instanceof Error))
{var e__3769__auto____$1 = e9732;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9732;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9731){if((e9731 instanceof Error))
{var e__3769__auto____$1 = e9731;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9731;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9730){if((e9730 instanceof Error))
{var e__3769__auto____$1 = e9730;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9730;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9729){if((e9729 instanceof Error))
{var e__3769__auto____$1 = e9729;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9729;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9728){if((e9728 instanceof Error))
{var e__3769__auto____$1 = e9728;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}catch (e9727){if((e9727 instanceof Error))
{var e__3769__auto____$1 = e9727;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9727;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
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
{var e__3769__auto__ = e9725;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9725;
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
G__9735 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9735__0.call(this);
case 2:
return G__9735__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9735;
})()
);
/**
* 
*/
termcat.rules.markdown.introduce_link_calls = termcat.rewrite.abstraction((function() {
var G__9781 = null;
var G__9781__0 = (function (){return null;
});
var G__9781__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9736 = cljs.core.cons(state__5495__auto__,cljs.core.take(4,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,4,null);var temp__4090__auto__ = (function (){var ocr_9737 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(4,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9737)) && ((cljs.core.count(ocr_9737) === 5)))
{try{var ocr_9737_1__9757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737,1);if((cljs.core.vector_QMARK_(ocr_9737_1__9757)) && ((cljs.core.count(ocr_9737_1__9757) === 2)))
{try{var ocr_9737_1__9757_0__9761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_1__9757,0);if(cljs.core.keyword_identical_QMARK_(ocr_9737_1__9757_0__9761,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9780){if((e9780 instanceof Error))
{var e__3769__auto__ = e9780;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9780;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9770){if((e9770 instanceof Error))
{var e__3769__auto__ = e9770;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9737_1__9757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737,1);if(cljs.core.keyword_identical_QMARK_(ocr_9737_1__9757,cljs.core.constant$keyword$63))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9771){if((e9771 instanceof Error))
{var e__3769__auto____$1 = e9771;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9737_4__9760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737,4);if((cljs.core.vector_QMARK_(ocr_9737_4__9760)) && ((cljs.core.count(ocr_9737_4__9760) === 2)))
{try{var ocr_9737_4__9760_0__9763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_4__9760,0);if(cljs.core.keyword_identical_QMARK_(ocr_9737_4__9760_0__9763,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9779){if((e9779 instanceof Error))
{var e__3769__auto____$2 = e9779;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9779;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9772){if((e9772 instanceof Error))
{var e__3769__auto____$2 = e9772;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9737_2__9758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737,2);if((cljs.core.vector_QMARK_(ocr_9737_2__9758)) && ((cljs.core.count(ocr_9737_2__9758) === 2)))
{try{var ocr_9737_2__9758_0__9765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_2__9758,0);if(cljs.core.keyword_identical_QMARK_(ocr_9737_2__9758_0__9765,cljs.core.constant$keyword$26))
{try{var ocr_9737_2__9758_1__9766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_2__9758,1);if(cljs.core.keyword_identical_QMARK_(ocr_9737_2__9758_1__9766,cljs.core.constant$keyword$95))
{try{var ocr_9737_3__9759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737,3);if((cljs.core.vector_QMARK_(ocr_9737_3__9759)) && ((cljs.core.count(ocr_9737_3__9759) === 2)))
{try{var ocr_9737_3__9759_0__9767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_3__9759,0);if(cljs.core.keyword_identical_QMARK_(ocr_9737_3__9759_0__9767,cljs.core.constant$keyword$26))
{try{var ocr_9737_3__9759_1__9768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9737_3__9759,1);if(cljs.core.keyword_identical_QMARK_(ocr_9737_3__9759_1__9768,cljs.core.constant$keyword$96))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null),termcat.util.lambda.fun_call_seq.cljs$core$IFn$_invoke$arity$variadic(":link",cljs.core.array_seq([termcat.term.center(t2),termcat.term.center(t3)], 0)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t4], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9778){if((e9778 instanceof Error))
{var e__3769__auto____$3 = e9778;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9778;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9777){if((e9777 instanceof Error))
{var e__3769__auto____$3 = e9777;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9777;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9776){if((e9776 instanceof Error))
{var e__3769__auto____$3 = e9776;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9776;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9775){if((e9775 instanceof Error))
{var e__3769__auto____$3 = e9775;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9775;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9774){if((e9774 instanceof Error))
{var e__3769__auto____$3 = e9774;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9774;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9773){if((e9773 instanceof Error))
{var e__3769__auto____$3 = e9773;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9773;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9772;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9771;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9770;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9769){if((e9769 instanceof Error))
{var e__3769__auto__ = e9769;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9769;
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
G__9781 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9781__0.call(this);
case 2:
return G__9781__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9781;
})()
);
termcat.rules.markdown.wrap_term = (function wrap_term(tag_name,t){return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str(tag_name),cljs.core.str(">")].join(''))], null),((termcat.term.block_QMARK_(t))?termcat.rewrite.unwrap(t):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null)),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("</"),cljs.core.str(tag_name),cljs.core.str(">")].join(''))], null)], 0));
});
/**
* 
*/
termcat.rules.markdown.remove_decorators = termcat.rewrite.abstraction((function() {
var G__9813 = null;
var G__9813__0 = (function (){return null;
});
var G__9813__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9782 = cljs.core.cons(state__5495__auto__,cljs.core.take(9,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,3,null);var t4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,4,null);var t5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,5,null);var t6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,6,null);var t7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,7,null);var t8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,8,null);var t9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782,9,null);var temp__4090__auto__ = (function (){var ocr_9783 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(9,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9783)) && ((cljs.core.count(ocr_9783) === 10)))
{try{var ocr_9783_3__9798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,3);if(cljs.core.keyword_identical_QMARK_(ocr_9783_3__9798,cljs.core.constant$keyword$51))
{try{var ocr_9783_5__9800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,5);if(cljs.core.keyword_identical_QMARK_(ocr_9783_5__9800,cljs.core.constant$keyword$51))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,6);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,7);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$51)))
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
}catch (e9811){if((e9811 instanceof Error))
{var e__3769__auto__ = e9811;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9811;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9783_3__9798,cljs.core.constant$keyword$41))
{try{var ocr_9783_5__9800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,5);if(cljs.core.keyword_identical_QMARK_(ocr_9783_5__9800,cljs.core.constant$keyword$41))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,6);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,7);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$41)))
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
}catch (e9812){if((e9812 instanceof Error))
{var e__3769__auto__ = e9812;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9812;
} else
{return null;
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
}catch (e9806){if((e9806 instanceof Error))
{var e__3769__auto__ = e9806;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9783_3__9798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,3);if(cljs.core.keyword_identical_QMARK_(ocr_9783_3__9798,cljs.core.constant$keyword$41))
{try{var ocr_9783_4__9799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,4);if(cljs.core.keyword_identical_QMARK_(ocr_9783_4__9799,cljs.core.constant$keyword$41))
{try{var ocr_9783_6__9801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,6);if(cljs.core.keyword_identical_QMARK_(ocr_9783_6__9801,cljs.core.constant$keyword$41))
{try{var ocr_9783_7__9802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,7);if(cljs.core.keyword_identical_QMARK_(ocr_9783_7__9802,cljs.core.constant$keyword$41))
{var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,1);var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,2);var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,8);var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9783,9);if(!(cljs.core.contains_QMARK_((cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashSet.fromArray.cljs$core$IFn$_invoke$arity$2([x1,x2,y1,y2],true) : cljs.core.PersistentHashSet.fromArray.call(null,[x1,x2,y1,y2],true)),cljs.core.constant$keyword$41)))
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
}catch (e9810){if((e9810 instanceof Error))
{var e__3769__auto____$1 = e9810;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9810;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9809){if((e9809 instanceof Error))
{var e__3769__auto____$1 = e9809;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9809;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9808){if((e9808 instanceof Error))
{var e__3769__auto____$1 = e9808;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9808;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9807){if((e9807 instanceof Error))
{var e__3769__auto____$1 = e9807;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9807;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9806;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9805){if((e9805 instanceof Error))
{var e__3769__auto__ = e9805;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9805;
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
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__5498__auto__),cljs.core.drop(9,input__5496__auto__))], null);
} else
{return null;
}
});
G__9813 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9813__0.call(this);
case 2:
return G__9813__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9813;
})()
);
