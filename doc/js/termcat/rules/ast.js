// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.ast');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
termcat.rules.ast.pop_n = (function pop_n(coll,n){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,0,(cljs.core.count(coll) - n));
});
termcat.rules.ast.last_n = (function last_n(coll,n){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(cljs.core.count(coll) - n));
});
termcat.rules.ast.abstract_blocks = (function() {
var abstract_blocks = null;
var abstract_blocks__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,0,cljs.core.constant$keyword$132,null], null);
});
var abstract_blocks__2 = (function (p__8880,tok){while(true){
var vec__8882 = p__8880;var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8882,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8882,1,null);if((tok == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,result], null);
} else
{if(termcat.term.ldelim_QMARK_(tok))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,1,cljs.core.constant$keyword$132,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(state),(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(state) + 1))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,tok)], null);
} else
{if(termcat.term.rdelim_QMARK_(tok))
{var ldelim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(cljs.core.count(result) - cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(state)));if(termcat.term.delim_pair_QMARK_(ldelim,tok))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,cljs.core.peek(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.constant$keyword$132,cljs.core.pop(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(state))], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(termcat.rules.ast.pop_n(result,cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(state)),termcat.term.block(ldelim,termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(termcat.rules.ast.last_n(result,(cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(state) - 1))),tok))], null);
} else
{if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$94], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$93], null)], true),termcat.term.tt(tok)))
{{
var G__8883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,((cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(state) + -1) + cljs.core.peek(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.constant$keyword$132,cljs.core.pop(cljs.core.constant$keyword$132.cljs$core$IFn$_invoke$arity$1(state))], null),result], null);
var G__8884 = tok;
p__8880 = G__8883;
tok = G__8884;
continue;
}
} else
{if(cljs.core.constant$keyword$6)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131], null),cljs.core.inc),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,tok)], null);
} else
{return null;
}
}
}
} else
{if(cljs.core.constant$keyword$6)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131], null),cljs.core.inc),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,tok)], null);
} else
{return null;
}
}
}
}
break;
}
});
abstract_blocks = function(p__8880,tok){
switch(arguments.length){
case 0:
return abstract_blocks__0.call(this);
case 2:
return abstract_blocks__2.call(this,p__8880,tok);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abstract_blocks.cljs$core$IFn$_invoke$arity$0 = abstract_blocks__0;
abstract_blocks.cljs$core$IFn$_invoke$arity$2 = abstract_blocks__2;
return abstract_blocks;
})()
;
/**
* 
*/
termcat.rules.ast.introduce_delim_errors = termcat.rewrite.abstraction((function() {
var G__8897 = null;
var G__8897__0 = (function (){return null;
});
var G__8897__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8885 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8885,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8885,1,null);var temp__4090__auto__ = (function (){var ocr_8886 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8886)) && ((cljs.core.count(ocr_8886) === 2)))
{try{var ocr_8886_1__8891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8886,1);if((cljs.core.vector_QMARK_(ocr_8886_1__8891)) && ((cljs.core.count(ocr_8886_1__8891) === 2)))
{try{var ocr_8886_1__8891_0__8892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8886_1__8891,0);if(cljs.core.keyword_identical_QMARK_(ocr_8886_1__8891_0__8892,cljs.core.constant$keyword$23))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,termcat.term.payload(t1))], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8886_1__8891_0__8892,cljs.core.constant$keyword$24))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,termcat.term.payload(t1))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8896){if((e8896 instanceof Error))
{var e__3769__auto__ = e8896;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8896;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8895){if((e8895 instanceof Error))
{var e__3769__auto__ = e8895;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8895;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8894){if((e8894 instanceof Error))
{var e__3769__auto__ = e8894;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8894;
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
G__8897 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__8897__0.call(this);
case 2:
return G__8897__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8897;
})()
);
termcat.rules.ast.merge_blocks = (function merge_blocks(b1,t,b2){return termcat.term.block(termcat.term.left(b1),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$variadic(termcat.rewrite.unwrap(b1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null),termcat.rewrite.unwrap(b2)], 0)),termcat.term.right(b1));
});
/**
* 
*/
termcat.rules.ast.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__8936 = null;
var G__8936__0 = (function (){return null;
});
var G__8936__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8898 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8898,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8898,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8898,2,null);var temp__4090__auto__ = (function (){var ocr_8899 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8899)) && ((cljs.core.count(ocr_8899) === 3)))
{try{var ocr_8899_1__8904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,1);if((ocr_8899_1__8904 === null))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8934){if((e8934 instanceof Error))
{var e__3769__auto__ = e8934;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8934;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904,cljs.core.constant$keyword$43))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8935){if((e8935 instanceof Error))
{var e__3769__auto__ = e8935;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8935;
} else
{return null;
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
}catch (e8913){if((e8913 instanceof Error))
{var e__3769__auto__ = e8913;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_8899_1__8904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,1);if((cljs.core.vector_QMARK_(ocr_8899_1__8904)) && ((cljs.core.count(ocr_8899_1__8904) === 2)))
{try{var ocr_8899_1__8904_0__8906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_1__8904,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904_0__8906,cljs.core.constant$keyword$26))
{try{var ocr_8899_1__8904_1__8907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_1__8904,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904_1__8907,cljs.core.constant$keyword$93))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8933){if((e8933 instanceof Error))
{var e__3769__auto____$1 = e8933;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8933;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8932){if((e8932 instanceof Error))
{var e__3769__auto____$1 = e8932;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8932;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8928){if((e8928 instanceof Error))
{var e__3769__auto____$1 = e8928;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8899_1__8904_0__8906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_1__8904,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904_0__8906,cljs.core.constant$keyword$26))
{try{var ocr_8899_1__8904_1__8907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_1__8904,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904_1__8907,cljs.core.constant$keyword$94))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8931){if((e8931 instanceof Error))
{var e__3769__auto____$2 = e8931;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8931;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8930){if((e8930 instanceof Error))
{var e__3769__auto____$2 = e8930;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8930;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8929){if((e8929 instanceof Error))
{var e__3769__auto____$2 = e8929;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8929;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8928;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8914){if((e8914 instanceof Error))
{var e__3769__auto____$1 = e8914;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8899_1__8904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904,cljs.core.constant$keyword$40))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if((ocr_8899_2__8905 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8916){if((e8916 instanceof Error))
{var e__3769__auto____$2 = e8916;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if((cljs.core.vector_QMARK_(ocr_8899_2__8905)) && ((cljs.core.count(ocr_8899_2__8905) === 2)))
{try{var ocr_8899_2__8905_0__8908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_0__8908,cljs.core.constant$keyword$26))
{try{var ocr_8899_2__8905_1__8909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_1__8909,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8921){if((e8921 instanceof Error))
{var e__3769__auto____$3 = e8921;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8921;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8918){if((e8918 instanceof Error))
{var e__3769__auto____$3 = e8918;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8899_2__8905_0__8908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_0__8908,cljs.core.constant$keyword$26))
{try{var ocr_8899_2__8905_1__8909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_1__8909,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8920){if((e8920 instanceof Error))
{var e__3769__auto____$4 = e8920;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8920;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8919){if((e8919 instanceof Error))
{var e__3769__auto____$4 = e8919;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8919;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8918;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8917){if((e8917 instanceof Error))
{var e__3769__auto____$3 = e8917;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8917;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8916;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_1__8904,cljs.core.constant$keyword$99))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if((ocr_8899_2__8905 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8922){if((e8922 instanceof Error))
{var e__3769__auto____$2 = e8922;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8899_2__8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899,2);if((cljs.core.vector_QMARK_(ocr_8899_2__8905)) && ((cljs.core.count(ocr_8899_2__8905) === 2)))
{try{var ocr_8899_2__8905_0__8910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_0__8910,cljs.core.constant$keyword$26))
{try{var ocr_8899_2__8905_1__8911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_1__8911,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8927){if((e8927 instanceof Error))
{var e__3769__auto____$3 = e8927;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8927;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8924){if((e8924 instanceof Error))
{var e__3769__auto____$3 = e8924;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8899_2__8905_0__8910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,0);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_0__8910,cljs.core.constant$keyword$26))
{try{var ocr_8899_2__8905_1__8911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8899_2__8905,1);if(cljs.core.keyword_identical_QMARK_(ocr_8899_2__8905_1__8911,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8926){if((e8926 instanceof Error))
{var e__3769__auto____$4 = e8926;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8926;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8925){if((e8925 instanceof Error))
{var e__3769__auto____$4 = e8925;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8925;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8924;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8923){if((e8923 instanceof Error))
{var e__3769__auto____$3 = e8923;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8923;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8922;
} else
{return null;
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
}catch (e8915){if((e8915 instanceof Error))
{var e__3769__auto____$2 = e8915;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8915;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8914;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8913;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8912){if((e8912 instanceof Error))
{var e__3769__auto__ = e8912;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8912;
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
G__8936 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__8936__0.call(this);
case 2:
return G__8936__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8936;
})()
);
/**
* 
*/
termcat.rules.ast.convert_newlines_to_whitespace = termcat.rewrite.abstraction((function() {
var G__8945 = null;
var G__8945__0 = (function (){return null;
});
var G__8945__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8937 = cljs.core.cons(state__5495__auto__,cljs.core.take(1,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8937,1,null);var temp__4090__auto__ = (function (){var ocr_8938 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8938)) && ((cljs.core.count(ocr_8938) === 2)))
{try{var ocr_8938_1__8942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8938,1);if(cljs.core.keyword_identical_QMARK_(ocr_8938_1__8942,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,"\n")], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8944){if((e8944 instanceof Error))
{var e__3769__auto__ = e8944;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8944;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8943){if((e8943 instanceof Error))
{var e__3769__auto__ = e8943;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8943;
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
G__8945 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__8945__0.call(this);
case 2:
return G__8945__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8945;
})()
);
/**
* 
*/
termcat.rules.ast.fix_bullet_continuations = termcat.rewrite.abstraction((function() {
var G__8971 = null;
var G__8971__0 = (function (){return null;
});
var G__8971__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__8946 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,3,null);var temp__4090__auto__ = (function (){var ocr_8947 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_8947)) && ((cljs.core.count(ocr_8947) === 4)))
{try{var ocr_8947_1__8951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947,1);if((cljs.core.vector_QMARK_(ocr_8947_1__8951)) && ((cljs.core.count(ocr_8947_1__8951) === 2)))
{try{var ocr_8947_1__8951_0__8954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_1__8951,0);if(cljs.core.keyword_identical_QMARK_(ocr_8947_1__8951_0__8954,cljs.core.constant$keyword$26))
{try{var ocr_8947_1__8951_1__8955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_1__8951,1);if(cljs.core.keyword_identical_QMARK_(ocr_8947_1__8951_1__8955,cljs.core.constant$keyword$94))
{try{var ocr_8947_2__8952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947,2);if(cljs.core.keyword_identical_QMARK_(ocr_8947_2__8952,cljs.core.constant$keyword$43))
{try{var ocr_8947_3__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947,3);if((cljs.core.vector_QMARK_(ocr_8947_3__8953)) && ((cljs.core.count(ocr_8947_3__8953) === 2)))
{try{var ocr_8947_3__8953_0__8956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_3__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8947_3__8953_0__8956,cljs.core.constant$keyword$26))
{try{var ocr_8947_3__8953_1__8957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_3__8953,1);if(cljs.core.keyword_identical_QMARK_(ocr_8947_3__8953_1__8957,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.ast.merge_blocks(t1,t2,t3)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8967){if((e8967 instanceof Error))
{var e__3769__auto__ = e8967;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8967;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8966){if((e8966 instanceof Error))
{var e__3769__auto__ = e8966;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8966;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8965){if((e8965 instanceof Error))
{var e__3769__auto__ = e8965;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8965;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_8947_2__8952,cljs.core.constant$keyword$99))
{try{var ocr_8947_3__8953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947,3);if((cljs.core.vector_QMARK_(ocr_8947_3__8953)) && ((cljs.core.count(ocr_8947_3__8953) === 2)))
{try{var ocr_8947_3__8953_0__8958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_3__8953,0);if(cljs.core.keyword_identical_QMARK_(ocr_8947_3__8953_0__8958,cljs.core.constant$keyword$26))
{try{var ocr_8947_3__8953_1__8959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_8947_3__8953,1);if(cljs.core.keyword_identical_QMARK_(ocr_8947_3__8953_1__8959,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.ast.merge_blocks(t1,t2,t3)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8970){if((e8970 instanceof Error))
{var e__3769__auto__ = e8970;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8970;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8969){if((e8969 instanceof Error))
{var e__3769__auto__ = e8969;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8969;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8968){if((e8968 instanceof Error))
{var e__3769__auto__ = e8968;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8968;
} else
{return null;
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
}catch (e8964){if((e8964 instanceof Error))
{var e__3769__auto__ = e8964;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8964;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8963){if((e8963 instanceof Error))
{var e__3769__auto__ = e8963;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8963;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8962){if((e8962 instanceof Error))
{var e__3769__auto__ = e8962;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8962;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8961){if((e8961 instanceof Error))
{var e__3769__auto__ = e8961;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8961;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8960){if((e8960 instanceof Error))
{var e__3769__auto__ = e8960;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e8960;
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
G__8971 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__8971__0.call(this);
case 2:
return G__8971__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8971;
})()
);
