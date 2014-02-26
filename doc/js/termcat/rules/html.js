// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.html');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.util.math');
goog.require('termcat.term');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
goog.require('termcat.rewrite');
goog.require('clojure.core.reducers');
goog.require('termcat.rewrite');
goog.require('termcat.util.math');
goog.require('clojure.string');
goog.require('cljs.core.match');
termcat.rules.html.text_block_QMARK_ = (function text_block_QMARK_(x){return (termcat.term.block_QMARK_(x)) && (cljs.core.not(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(cljs.core.second(termcat.term.tt(x)))));
});
/**
* 
*/
termcat.rules.html.introduce_nbsp_entities = termcat.rewrite.abstraction((function() {
var G__9249 = null;
var G__9249__0 = (function (){return null;
});
var G__9249__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9241 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9241,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9241,1,null);var temp__4090__auto__ = (function (){var ocr_9242 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9242)) && ((cljs.core.count(ocr_9242) === 2)))
{try{var ocr_9242_1__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9242,1);if(cljs.core.keyword_identical_QMARK_(ocr_9242_1__9246,cljs.core.constant$keyword$44))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"&nbsp;")], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9248){if((e9248 instanceof Error))
{var e__3769__auto__ = e9248;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9248;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9247){if((e9247 instanceof Error))
{var e__3769__auto__ = e9247;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9247;
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
G__9249 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9249__0.call(this);
case 2:
return G__9249__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9249;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_dashes = termcat.rewrite.abstraction((function() {
var G__9259 = null;
var G__9259__0 = (function (){return null;
});
var G__9259__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9250 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9250,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9250,1,null);var temp__4090__auto__ = (function (){var ocr_9251 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9251)) && ((cljs.core.count(ocr_9251) === 2)))
{try{var ocr_9251_1__9255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9251,1);if(cljs.core.keyword_identical_QMARK_(ocr_9251_1__9255,cljs.core.constant$keyword$31))
{var G__9258 = ((typeof termcat.term.payload(t1) === 'string')?cljs.core.count(termcat.term.payload(t1)):null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(3,G__9258))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2014")], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2,G__9258))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2013")], null);
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9257){if((e9257 instanceof Error))
{var e__3769__auto__ = e9257;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9257;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9256){if((e9256 instanceof Error))
{var e__3769__auto__ = e9256;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9256;
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
G__9259 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9259__0.call(this);
case 2:
return G__9259__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9259;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_quotes = termcat.rewrite.abstraction((function() {
var G__9269 = null;
var G__9269__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,false], null);
});
var G__9269__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9260 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9260,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9260,1,null);var temp__4090__auto__ = (function (){var ocr_9261 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9261)) && ((cljs.core.count(ocr_9261) === 2)))
{try{var ocr_9261_1__9266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9261,1);if(cljs.core.keyword_identical_QMARK_(ocr_9261_1__9266,cljs.core.constant$keyword$60))
{var length = cljs.core.count([cljs.core.str(termcat.term.payload(t1))].join(''));var doublec = ((length / 2) | 0);var also_single = cljs.core.odd_QMARK_(cljs.core.mod(length,2));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doublec,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u201C")),cljs.core.array_seq([((also_single)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2018")], null):null)], 0));
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9261_1__9266,cljs.core.constant$keyword$35))
{var length = cljs.core.count([cljs.core.str(termcat.term.payload(t1))].join(''));var doublec = ((length / 2) | 0);var also_single = cljs.core.odd_QMARK_(cljs.core.mod(length,2));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),((also_single)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2019")], null):null),cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doublec,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u201D"))], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9268){if((e9268 instanceof Error))
{var e__3769__auto__ = e9268;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9268;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9267){if((e9267 instanceof Error))
{var e__3769__auto__ = e9267;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9267;
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
G__9269 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9269__0.call(this);
case 2:
return G__9269__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9269;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_full_stops = termcat.rewrite.abstraction((function() {
var G__9289 = null;
var G__9289__0 = (function (){return null;
});
var G__9289__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9270 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9270,3,null);var temp__4090__auto__ = (function (){var ocr_9271 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9271)) && ((cljs.core.count(ocr_9271) === 4)))
{try{var ocr_9271_1__9276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,1);if(cljs.core.keyword_identical_QMARK_(ocr_9271_1__9276,cljs.core.constant$keyword$7))
{try{var ocr_9271_2__9277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,2);if(cljs.core.keyword_identical_QMARK_(ocr_9271_2__9277,cljs.core.constant$keyword$61))
{try{var ocr_9271_3__9278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,3);if(cljs.core.keyword_identical_QMARK_(ocr_9271_3__9278,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),".");if(and__5645__auto__)
{var or__5657__auto__ = termcat.term.block_QMARK_(t1);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return cljs.core.re_matches(/[^\\.]*/,[cljs.core.str(termcat.term.payload(t1))].join(''));
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
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
}catch (e9288){if((e9288 instanceof Error))
{var e__3769__auto__ = e9288;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9288;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9287){if((e9287 instanceof Error))
{var e__3769__auto__ = e9287;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9287;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9282){if((e9282 instanceof Error))
{var e__3769__auto__ = e9282;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9271_1__9276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,1);if((cljs.core.vector_QMARK_(ocr_9271_1__9276)) && ((cljs.core.count(ocr_9271_1__9276) === 2)))
{try{var ocr_9271_1__9276_0__9279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271_1__9276,0);if(cljs.core.keyword_identical_QMARK_(ocr_9271_1__9276_0__9279,cljs.core.constant$keyword$26))
{try{var ocr_9271_2__9277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,2);if(cljs.core.keyword_identical_QMARK_(ocr_9271_2__9277,cljs.core.constant$keyword$61))
{try{var ocr_9271_3__9278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9271,3);if(cljs.core.keyword_identical_QMARK_(ocr_9271_3__9278,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),".");if(and__5645__auto__)
{var or__5657__auto__ = termcat.term.block_QMARK_(t1);if(or__5657__auto__)
{return or__5657__auto__;
} else
{return cljs.core.re_matches(/[^\\.]*/,[cljs.core.str(termcat.term.payload(t1))].join(''));
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
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
}catch (e9286){if((e9286 instanceof Error))
{var e__3769__auto____$1 = e9286;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9286;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9285){if((e9285 instanceof Error))
{var e__3769__auto____$1 = e9285;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9285;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9284){if((e9284 instanceof Error))
{var e__3769__auto____$1 = e9284;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9284;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9283){if((e9283 instanceof Error))
{var e__3769__auto____$1 = e9283;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9283;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9282;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9281){if((e9281 instanceof Error))
{var e__3769__auto__ = e9281;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9281;
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
G__9289 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9289__0.call(this);
case 2:
return G__9289__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9289;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_colons = termcat.rewrite.abstraction((function() {
var G__9313 = null;
var G__9313__0 = (function (){return null;
});
var G__9313__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9290 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9290,3,null);var temp__4090__auto__ = (function (){var ocr_9291 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9291)) && ((cljs.core.count(ocr_9291) === 4)))
{try{var ocr_9291_1__9296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,1);if(cljs.core.keyword_identical_QMARK_(ocr_9291_1__9296,cljs.core.constant$keyword$7))
{try{var ocr_9291_2__9297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,2);if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$62))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9310){if((e9310 instanceof Error))
{var e__3769__auto__ = e9310;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9310;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$63))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9311){if((e9311 instanceof Error))
{var e__3769__auto__ = e9311;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9311;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$64))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9312){if((e9312 instanceof Error))
{var e__3769__auto__ = e9312;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9312;
} else
{return null;
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
}catch (e9309){if((e9309 instanceof Error))
{var e__3769__auto__ = e9309;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9309;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9302){if((e9302 instanceof Error))
{var e__3769__auto__ = e9302;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9291_1__9296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,1);if((cljs.core.vector_QMARK_(ocr_9291_1__9296)) && ((cljs.core.count(ocr_9291_1__9296) === 2)))
{try{var ocr_9291_1__9296_0__9299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291_1__9296,0);if(cljs.core.keyword_identical_QMARK_(ocr_9291_1__9296_0__9299,cljs.core.constant$keyword$26))
{try{var ocr_9291_2__9297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,2);if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$62))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9306){if((e9306 instanceof Error))
{var e__3769__auto____$1 = e9306;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9306;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$63))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9307){if((e9307 instanceof Error))
{var e__3769__auto____$1 = e9307;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9307;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9291_2__9297,cljs.core.constant$keyword$64))
{try{var ocr_9291_3__9298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9291,3);if(cljs.core.keyword_identical_QMARK_(ocr_9291_3__9298,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9308){if((e9308 instanceof Error))
{var e__3769__auto____$1 = e9308;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9308;
} else
{return null;
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
}catch (e9305){if((e9305 instanceof Error))
{var e__3769__auto____$1 = e9305;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9305;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9304){if((e9304 instanceof Error))
{var e__3769__auto____$1 = e9304;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9304;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9303){if((e9303 instanceof Error))
{var e__3769__auto____$1 = e9303;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9303;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9302;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9301){if((e9301 instanceof Error))
{var e__3769__auto__ = e9301;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9301;
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
G__9313 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9313__0.call(this);
case 2:
return G__9313__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9313;
})()
);
/**
* 
*/
termcat.rules.html.remove_error_tokens = termcat.rewrite.abstraction((function() {
var G__9322 = null;
var G__9322__0 = (function (){return null;
});
var G__9322__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9314 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9314,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9314,1,null);var temp__4090__auto__ = (function (){var ocr_9315 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9315)) && ((cljs.core.count(ocr_9315) === 2)))
{try{var ocr_9315_1__9319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9315,1);if(cljs.core.keyword_identical_QMARK_(ocr_9315_1__9319,cljs.core.constant$keyword$65))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,termcat.term.payload(t1))], 0)),cljs.core.array_seq([cljs.core.constant$keyword$65], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9321){if((e9321 instanceof Error))
{var e__3769__auto__ = e9321;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9321;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9320){if((e9320 instanceof Error))
{var e__3769__auto__ = e9320;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9320;
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
G__9322 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9322__0.call(this);
case 2:
return G__9322__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9322;
})()
);
termcat.rules.html.wrap_math_block = (function wrap_math_block(t,props){var tag_name = (function (){var pred__9343 = (function (p1__9324_SHARP_,p2__9323_SHARP_){return cljs.core.contains_QMARK_(p2__9323_SHARP_,p1__9324_SHARP_);
});var expr__9344 = props;if(pred__9343(cljs.core.constant$keyword$30,expr__9344))
{return "mo";
} else
{if(pred__9343(cljs.core.constant$keyword$29,expr__9344))
{return "mi";
} else
{if(pred__9343(cljs.core.constant$keyword$28,expr__9344))
{return "mn";
} else
{return null;
}
}
}
})();return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str(tag_name),cljs.core.str(((cljs.core.contains_QMARK_(props,cljs.core.constant$keyword$39))?" mathvariant=script":null)),cljs.core.str((function (){var pred__9346 = (function (p1__9326_SHARP_,p2__9325_SHARP_){return cljs.core.contains_QMARK_(p2__9325_SHARP_,p1__9326_SHARP_);
});var expr__9347 = props;if(pred__9346(cljs.core.constant$keyword$32,expr__9347))
{return " form=prefix lspace=0em";
} else
{if(pred__9346(cljs.core.constant$keyword$52,expr__9347))
{return " form=infix";
} else
{if(pred__9346(cljs.core.constant$keyword$47,expr__9347))
{return " form=postfix rspace=0em";
} else
{return null;
}
}
}
})()),cljs.core.str((function (){var pred__9349 = (function (p1__9328_SHARP_,p2__9327_SHARP_){return cljs.core.contains_QMARK_(p2__9327_SHARP_,p1__9328_SHARP_);
});var expr__9350 = props;if(pred__9349(cljs.core.constant$keyword$49,expr__9350))
{return " lspace=veryverythickmathspace";
} else
{if(pred__9349(cljs.core.constant$keyword$48,expr__9350))
{return " lspace=thickmathspace";
} else
{return null;
}
}
})()),cljs.core.str((function (){var pred__9352 = (function (p1__9330_SHARP_,p2__9329_SHARP_){return cljs.core.contains_QMARK_(p2__9329_SHARP_,p1__9330_SHARP_);
});var expr__9353 = props;if(pred__9352(cljs.core.constant$keyword$46,expr__9353))
{return " rspace=veryverythickmathspace";
} else
{if(pred__9352(cljs.core.constant$keyword$45,expr__9353))
{return " rspace=thickmathspace";
} else
{return null;
}
}
})()),cljs.core.str(">")].join('')),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str("/"),cljs.core.str(tag_name),cljs.core.str(">")].join('')),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
});
/**
* 
*/
termcat.rules.html.introduce_inner_math_tags = termcat.rewrite.abstraction((function() {
var G__9395 = null;
var G__9395__0 = (function (){return null;
});
var G__9395__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9355 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9355,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9355,1,null);var temp__4090__auto__ = (function (){var ocr_9356 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9356)) && ((cljs.core.count(ocr_9356) === 2)))
{try{var ocr_9356_1__9374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356,1);if((cljs.core.vector_QMARK_(ocr_9356_1__9374)) && ((cljs.core.count(ocr_9356_1__9374) === 2)))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9394){if((e9394 instanceof Error))
{var e__3769__auto__ = e9394;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9394;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9379){if((e9379 instanceof Error))
{var e__3769__auto__ = e9379;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<merror>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mtext>")], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</merror>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9393){if((e9393 instanceof Error))
{var e__3769__auto____$1 = e9393;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9393;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9380){if((e9380 instanceof Error))
{var e__3769__auto____$1 = e9380;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9392){if((e9392 instanceof Error))
{var e__3769__auto____$2 = e9392;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9392;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9381){if((e9381 instanceof Error))
{var e__3769__auto____$2 = e9381;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msub>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msub>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9391){if((e9391 instanceof Error))
{var e__3769__auto____$3 = e9391;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9391;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9382){if((e9382 instanceof Error))
{var e__3769__auto____$3 = e9382;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msubsup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msubsup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9390){if((e9390 instanceof Error))
{var e__3769__auto____$4 = e9390;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9390;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9383){if((e9383 instanceof Error))
{var e__3769__auto____$4 = e9383;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mfrac>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mfrac>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9389){if((e9389 instanceof Error))
{var e__3769__auto____$5 = e9389;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9389;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9384){if((e9384 instanceof Error))
{var e__3769__auto____$5 = e9384;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mrow>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mrow>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9388){if((e9388 instanceof Error))
{var e__3769__auto____$6 = e9388;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9388;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9385){if((e9385 instanceof Error))
{var e__3769__auto____$6 = e9385;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{try{var ocr_9356_1__9374_0__9375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,0);if(cljs.core.keyword_identical_QMARK_(ocr_9356_1__9374_0__9375,cljs.core.constant$keyword$26))
{try{var ocr_9356_1__9374_1__9376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_9356_1__9374_1__9376)))
{var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9356_1__9374,1);return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66)], null),termcat.rules.html.wrap_math_block(t1,x),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9387){if((e9387 instanceof Error))
{var e__3769__auto____$7 = e9387;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9387;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9386){if((e9386 instanceof Error))
{var e__3769__auto____$7 = e9386;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9386;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9385;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9384;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9383;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9382;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9381;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9380;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9379;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9378){if((e9378 instanceof Error))
{var e__3769__auto__ = e9378;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9378;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9377){if((e9377 instanceof Error))
{var e__3769__auto__ = e9377;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9377;
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
G__9395 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9395__0.call(this);
case 2:
return G__9395__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9395;
})()
);
/**
* 
*/
termcat.rules.html.remove_double_math_tokens = termcat.rewrite.abstraction((function() {
var G__9412 = null;
var G__9412__0 = (function (){return null;
});
var G__9412__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9396 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396,2,null);var temp__4090__auto__ = (function (){var ocr_9397 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9397)) && ((cljs.core.count(ocr_9397) === 3)))
{try{var ocr_9397_1__9404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9397,1);if(cljs.core.keyword_identical_QMARK_(ocr_9397_1__9404,cljs.core.constant$keyword$67))
{try{var ocr_9397_2__9405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9397,2);if(cljs.core.keyword_identical_QMARK_(ocr_9397_2__9405,cljs.core.constant$keyword$67))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9408){if((e9408 instanceof Error))
{var e__3769__auto__ = e9408;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9408;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9397_1__9404,cljs.core.constant$keyword$68))
{try{var ocr_9397_2__9405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9397,2);if(cljs.core.keyword_identical_QMARK_(ocr_9397_2__9405,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9409){if((e9409 instanceof Error))
{var e__3769__auto__ = e9409;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9409;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9397_1__9404,cljs.core.constant$keyword$69))
{try{var ocr_9397_2__9405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9397,2);if(cljs.core.keyword_identical_QMARK_(ocr_9397_2__9405,cljs.core.constant$keyword$69))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9410){if((e9410 instanceof Error))
{var e__3769__auto__ = e9410;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9410;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9397_1__9404,cljs.core.constant$keyword$66))
{try{var ocr_9397_2__9405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9397,2);if(cljs.core.keyword_identical_QMARK_(ocr_9397_2__9405,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9411){if((e9411 instanceof Error))
{var e__3769__auto__ = e9411;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9411;
} else
{return null;
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
}catch (e9407){if((e9407 instanceof Error))
{var e__3769__auto__ = e9407;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9407;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9406){if((e9406 instanceof Error))
{var e__3769__auto__ = e9406;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9406;
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
G__9412 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9412__0.call(this);
case 2:
return G__9412__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9412;
})()
);
/**
* 
*/
termcat.rules.html.remove_canceling_math_tokens = termcat.rewrite.abstraction((function() {
var G__9428 = null;
var G__9428__0 = (function (){return null;
});
var G__9428__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9413 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9413,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9413,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9413,2,null);var temp__4090__auto__ = (function (){var ocr_9414 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9414)) && ((cljs.core.count(ocr_9414) === 3)))
{try{var ocr_9414_1__9420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9414,1);if(cljs.core.keyword_identical_QMARK_(ocr_9414_1__9420,cljs.core.constant$keyword$69))
{try{var ocr_9414_2__9421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9414,2);if(cljs.core.keyword_identical_QMARK_(ocr_9414_2__9421,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9426){if((e9426 instanceof Error))
{var e__3769__auto__ = e9426;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9426;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9414_1__9420,cljs.core.constant$keyword$67))
{try{var ocr_9414_2__9421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9414,2);if(cljs.core.keyword_identical_QMARK_(ocr_9414_2__9421,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9427){if((e9427 instanceof Error))
{var e__3769__auto__ = e9427;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9427;
} else
{return null;
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
}catch (e9423){if((e9423 instanceof Error))
{var e__3769__auto__ = e9423;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9414_1__9420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9414,1);if(cljs.core.keyword_identical_QMARK_(ocr_9414_1__9420,cljs.core.constant$keyword$69))
{try{var ocr_9414_2__9421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9414,2);if(cljs.core.keyword_identical_QMARK_(ocr_9414_2__9421,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9425){if((e9425 instanceof Error))
{var e__3769__auto____$1 = e9425;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9425;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9424){if((e9424 instanceof Error))
{var e__3769__auto____$1 = e9424;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9424;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9423;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9422){if((e9422 instanceof Error))
{var e__3769__auto__ = e9422;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9422;
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
G__9428 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9428__0.call(this);
case 2:
return G__9428__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9428;
})()
);
termcat.rules.html.introduce_mtext_tags = (function() {
var introduce_mtext_tags = null;
var introduce_mtext_tags__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,0,cljs.core.constant$keyword$71,false], null);
});
var introduce_mtext_tags__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9467 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9467,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9467,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9467,2,null);var temp__4090__auto__ = (function (){var ocr_9468 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9468)) && ((cljs.core.count(ocr_9468) === 3)))
{try{var ocr_9468_1__9479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,1);if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$68))
{try{var ocr_9468_0__9478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,0);if((function (){var G__9500 = ocr_9468_0__9478;if(G__9500)
{var bit__6307__auto__ = (G__9500.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__9500.cljs$core$ILookup$))
{return true;
} else
{if((!G__9500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9500);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9500);
}
})())
{try{var ocr_9468_0__9478_in_text__9483 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9468_0__9478,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72);if((ocr_9468_0__9478_in_text__9483 === true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,false),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9501){if((e9501 instanceof Error))
{var e__3769__auto__ = e9501;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9501;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9499){if((e9499 instanceof Error))
{var e__3769__auto__ = e9499;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9499;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$66))
{try{var ocr_9468_0__9478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,0);if((function (){var G__9503 = ocr_9468_0__9478;if(G__9503)
{var bit__6307__auto__ = (G__9503.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__9503.cljs$core$ILookup$))
{return true;
} else
{if((!G__9503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9503);
}
})())
{try{var ocr_9468_0__9478_in_text__9486 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9468_0__9478,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72);if((ocr_9468_0__9478_in_text__9486 === true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.inc),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9504){if((e9504 instanceof Error))
{var e__3769__auto__ = e9504;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9504;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9502){if((e9502 instanceof Error))
{var e__3769__auto__ = e9502;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9502;
} else
{return null;
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
}catch (e9491){if((e9491 instanceof Error))
{var e__3769__auto__ = e9491;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9468_1__9479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,1);if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.inc),t1,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$69))
{try{var ocr_9468_2__9480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,2);if(cljs.core.keyword_identical_QMARK_(ocr_9468_2__9480,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),t1,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9468_2__9480,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),t1,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9498){if((e9498 instanceof Error))
{var e__3769__auto____$1 = e9498;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9498;
} else
{return null;
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
}catch (e9492){if((e9492 instanceof Error))
{var e__3769__auto____$1 = e9492;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9468_1__9479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,1);if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$69))
{try{var ocr_9468_0__9478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,0);if((function (){var G__9496 = ocr_9468_0__9478;if(G__9496)
{var bit__6307__auto__ = (G__9496.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__9496.cljs$core$ILookup$))
{return true;
} else
{if((!G__9496.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9496);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9496);
}
})())
{try{var ocr_9468_0__9478_count__9489 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9468_0__9478,cljs.core.constant$keyword$70,cljs.core.constant$keyword$72);if((ocr_9468_0__9478_count__9489 === 1))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$70,0),t1,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9497){if((e9497 instanceof Error))
{var e__3769__auto____$2 = e9497;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9497;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9495){if((e9495 instanceof Error))
{var e__3769__auto____$2 = e9495;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9495;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9493){if((e9493 instanceof Error))
{var e__3769__auto____$2 = e9493;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9468_1__9479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9468,1);if(cljs.core.keyword_identical_QMARK_(ocr_9468_1__9479,cljs.core.constant$keyword$69))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mtext>")], null),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,termcat.term.tt(t2))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null):null));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9494){if((e9494 instanceof Error))
{var e__3769__auto____$3 = e9494;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9494;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9493;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9492;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9491;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9490){if((e9490 instanceof Error))
{var e__3769__auto__ = e9490;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9490;
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
introduce_mtext_tags = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return introduce_mtext_tags__0.call(this);
case 2:
return introduce_mtext_tags__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
introduce_mtext_tags.cljs$core$IFn$_invoke$arity$0 = introduce_mtext_tags__0;
introduce_mtext_tags.cljs$core$IFn$_invoke$arity$2 = introduce_mtext_tags__2;
return introduce_mtext_tags;
})()
;
/**
* 
*/
termcat.rules.html.introduce_outer_math_tags = termcat.rewrite.abstraction((function() {
var G__9517 = null;
var G__9517__0 = (function (){return null;
});
var G__9517__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9505 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9505,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9505,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9505,2,null);var temp__4090__auto__ = (function (){var ocr_9506 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9506)) && ((cljs.core.count(ocr_9506) === 3)))
{try{var ocr_9506_1__9513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9506,1);if(cljs.core.keyword_identical_QMARK_(ocr_9506_1__9513,cljs.core.constant$keyword$69))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</math>"),t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9506_1__9513,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<math>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9516){if((e9516 instanceof Error))
{var e__3769__auto__ = e9516;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9516;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9515){if((e9515 instanceof Error))
{var e__3769__auto__ = e9515;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9515;
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
G__9517 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9517__0.call(this);
case 2:
return G__9517__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9517;
})()
);
termcat.rules.html.escape = (function escape__$1(s){if(typeof s === 'string')
{return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__6374__auto__ = (function iter__9526(s__9527){return (new cljs.core.LazySeq(null,(function (){var s__9527__$1 = s__9527;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9527__$1);if(temp__4092__auto__)
{var s__9527__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9527__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__9527__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__9529 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__9528 = 0;while(true){
if((i__9528 < size__6373__auto__))
{var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__9528);cljs.core.chunk_append(b__9529,(function (){var G__9532 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__9532))
{return "&quot;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__9532))
{return "&apos;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__9532))
{return "&amp;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",G__9532))
{return "&gt;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",G__9532))
{return "&lt;";
} else
{if(cljs.core.constant$keyword$6)
{return c;
} else
{return null;
}
}
}
}
}
}
})());
{
var G__9534 = (i__9528 + 1);
i__9528 = G__9534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9529),iter__9526(cljs.core.chunk_rest(s__9527__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9529),null);
}
} else
{var c = cljs.core.first(s__9527__$2);return cljs.core.cons((function (){var G__9533 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__9533))
{return "&quot;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__9533))
{return "&apos;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__9533))
{return "&amp;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",G__9533))
{return "&gt;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",G__9533))
{return "&lt;";
} else
{if(cljs.core.constant$keyword$6)
{return c;
} else
{return null;
}
}
}
}
}
}
})(),iter__9526(cljs.core.rest(s__9527__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6374__auto__(s);
})());
} else
{if(cljs.core.constant$keyword$6)
{return "";
} else
{return null;
}
}
});
/**
* 
*/
termcat.rules.html.flatten = termcat.rewrite.abstraction((function() {
var G__9547 = null;
var G__9547__0 = (function (){return null;
});
var G__9547__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9535 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9535,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9535,1,null);var temp__4090__auto__ = (function (){var ocr_9536 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9536)) && ((cljs.core.count(ocr_9536) === 2)))
{try{var ocr_9536_1__9541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9536,1);if((cljs.core.vector_QMARK_(ocr_9536_1__9541)) && ((cljs.core.count(ocr_9536_1__9541) === 2)))
{try{var ocr_9536_1__9541_0__9542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9536_1__9541,0);if(cljs.core.keyword_identical_QMARK_(ocr_9536_1__9541_0__9542,cljs.core.constant$keyword$26))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(termcat.term.left(t1))))], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(termcat.term.right(t1))))], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9546){if((e9546 instanceof Error))
{var e__3769__auto__ = e9546;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9546;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9545){if((e9545 instanceof Error))
{var e__3769__auto__ = e9545;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9545;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9544){if((e9544 instanceof Error))
{var e__3769__auto__ = e9544;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9544;
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
G__9547 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9547__0.call(this);
case 2:
return G__9547__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9547;
})()
);
termcat.rules.html.separate_head_body = (function() {
var separate_head_body = null;
var separate_head_body__0 = (function (){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,cljs.core.constant$keyword$74,cljs.core.constant$keyword$74,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$75,cljs.core.PersistentVector.EMPTY], null);
});
var separate_head_body__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9559 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var temp__4090__auto__ = (function (){var ocr_9560 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9560)) && ((cljs.core.count(ocr_9560) === 2)))
{var ocr_9567 = clojure.string.lower_case([cljs.core.str(termcat.term.payload(t1))].join(''));try{if((ocr_9567 === "<head>"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$73,cljs.core.constant$keyword$75)], null);
} else
{if((ocr_9567 === "</head>"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$73,cljs.core.constant$keyword$74)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9569){if((e9569 instanceof Error))
{var e__3769__auto__ = e9569;if((e__3769__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.conj,t1)], null);
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9569;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9566){if((e9566 instanceof Error))
{var e__3769__auto__ = e9566;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9566;
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
separate_head_body = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return separate_head_body__0.call(this);
case 2:
return separate_head_body__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate_head_body.cljs$core$IFn$_invoke$arity$0 = separate_head_body__0;
separate_head_body.cljs$core$IFn$_invoke$arity$2 = separate_head_body__2;
return separate_head_body;
})()
;
termcat.rules.html.add_boilerplate = (function() {
var add_boilerplate = null;
var add_boilerplate__0 = (function (){return null;
});
var add_boilerplate__2 = (function (state,input){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<!DOCTYPE html>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<html>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<head>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<meta charset='utf-8'>")], null),cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(state),cljs.core.array_seq([new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<script type='text/x-mathjax-config'>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"MathJax.Hub.Config({ "),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"MathML: { useMathMLspacing: true } });"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</script>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</head>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<body>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$76)], null),cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$77),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</body>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</html>")], null)], 0))], null);
});
add_boilerplate = function(state,input){
switch(arguments.length){
case 0:
return add_boilerplate__0.call(this);
case 2:
return add_boilerplate__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_boilerplate.cljs$core$IFn$_invoke$arity$0 = add_boilerplate__0;
add_boilerplate.cljs$core$IFn$_invoke$arity$2 = add_boilerplate__2;
return add_boilerplate;
})()
;
/**
* 
*/
termcat.rules.html.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__9593 = null;
var G__9593__0 = (function (){return null;
});
var G__9593__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9570 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9570,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9570,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9570,2,null);var temp__4090__auto__ = (function (){var ocr_9571 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9571)) && ((cljs.core.count(ocr_9571) === 3)))
{try{var ocr_9571_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,1);if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$43))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9591){if((e9591 instanceof Error))
{var e__3769__auto__ = e9591;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9591;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$40))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9592){if((e9592 instanceof Error))
{var e__3769__auto__ = e9592;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
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
}
}catch (e9582){if((e9582 instanceof Error))
{var e__3769__auto__ = e9582;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_9571_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,1);if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$40))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9587){if((e9587 instanceof Error))
{var e__3769__auto____$1 = e9587;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9587;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$43))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9588){if((e9588 instanceof Error))
{var e__3769__auto____$1 = e9588;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9588;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$76))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9589){if((e9589 instanceof Error))
{var e__3769__auto____$1 = e9589;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9589;
} else
{return null;
}
}
}} else
{if((ocr_9571_1__9579 === null))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9590){if((e9590 instanceof Error))
{var e__3769__auto____$1 = e9590;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
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
}
}
}
}catch (e9583){if((e9583 instanceof Error))
{var e__3769__auto____$1 = e9583;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9571_1__9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,1);if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$40))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$77))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if((ocr_9571_2__9580 === null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9585){if((e9585 instanceof Error))
{var e__3769__auto____$2 = e9585;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9585;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9571_1__9579,cljs.core.constant$keyword$43))
{try{var ocr_9571_2__9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9571,2);if(cljs.core.keyword_identical_QMARK_(ocr_9571_2__9580,cljs.core.constant$keyword$77))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if((ocr_9571_2__9580 === null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9586){if((e9586 instanceof Error))
{var e__3769__auto____$2 = e9586;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9586;
} else
{return null;
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
}catch (e9584){if((e9584 instanceof Error))
{var e__3769__auto____$2 = e9584;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9584;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9583;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9582;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9581){if((e9581 instanceof Error))
{var e__3769__auto__ = e9581;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9581;
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
G__9593 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9593__0.call(this);
case 2:
return G__9593__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9593;
})()
);
/**
* 
*/
termcat.rules.html.to_html_tokens = termcat.rewrite.abstraction((function() {
var G__9607 = null;
var G__9607__0 = (function (){return null;
});
var G__9607__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9594 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9594,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9594,1,null);var temp__4090__auto__ = (function (){var ocr_9595 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9595)) && ((cljs.core.count(ocr_9595) === 2)))
{try{var ocr_9595_1__9604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9595,1);if(cljs.core.keyword_identical_QMARK_(ocr_9595_1__9604,cljs.core.constant$keyword$40))
{if(cljs.core.truth_(termcat.term.payload(t1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56," ")], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9595_1__9604,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<p>")], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9595_1__9604,cljs.core.constant$keyword$56))
{return null;
} else
{if((ocr_9595_1__9604 === null))
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
}
}catch (e9606){if((e9606 instanceof Error))
{var e__3769__auto__ = e9606;if((e__3769__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(t1)))], null);
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9606;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9605){if((e9605 instanceof Error))
{var e__3769__auto__ = e9605;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9605;
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
G__9607 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__9607__0.call(this);
case 2:
return G__9607__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9607;
})()
);
termcat.rules.html.to_string = (function to_string(v){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.payload,v));
});
