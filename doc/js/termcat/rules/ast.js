// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.ast');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
termcat.rules.ast.pop_n = (function pop_n(coll,n){return cljs.core.subvec.call(null,coll,0,(cljs.core.count.call(null,coll) - n));
});
termcat.rules.ast.last_n = (function last_n(coll,n){return cljs.core.subvec.call(null,coll,(cljs.core.count.call(null,coll) - n));
});
termcat.rules.ast.abstract_blocks = (function() {
var abstract_blocks = null;
var abstract_blocks__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"distance","distance",1302364007),0,new cljs.core.Keyword(null,"stack","stack",1123661306),null], null);
});
var abstract_blocks__2 = (function (p__8828,tok){while(true){
var vec__8830 = p__8828;var state = cljs.core.nth.call(null,vec__8830,0,null);var result = cljs.core.nth.call(null,vec__8830,1,null);if((tok == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,result], null);
} else
{if(termcat.term.ldelim_QMARK_.call(null,tok))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"distance","distance",1302364007),1,new cljs.core.Keyword(null,"stack","stack",1123661306),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(state),(new cljs.core.Keyword(null,"distance","distance",1302364007).cljs$core$IFn$_invoke$arity$1(state) + 1))], null),cljs.core.conj.call(null,result,tok)], null);
} else
{if(termcat.term.rdelim_QMARK_.call(null,tok))
{var ldelim = cljs.core.get.call(null,result,(cljs.core.count.call(null,result) - new cljs.core.Keyword(null,"distance","distance",1302364007).cljs$core$IFn$_invoke$arity$1(state)));if(termcat.term.delim_pair_QMARK_.call(null,ldelim,tok))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"distance","distance",1302364007),cljs.core.peek.call(null,new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"stack","stack",1123661306),cljs.core.pop.call(null,new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(state))], null),cljs.core.conj.call(null,termcat.rules.ast.pop_n.call(null,result,new cljs.core.Keyword(null,"distance","distance",1302364007).cljs$core$IFn$_invoke$arity$1(state)),termcat.term.block.call(null,ldelim,termcat.term.fragmentcat.call(null,termcat.rules.ast.last_n.call(null,result,(new cljs.core.Keyword(null,"distance","distance",1302364007).cljs$core$IFn$_invoke$arity$1(state) - 1))),tok))], null);
} else
{if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"bullet","bullet",3930937460)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"indent","indent",4124632094)], null)], true),termcat.term.tt.call(null,tok)))
{{
var G__8831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"distance","distance",1302364007),((new cljs.core.Keyword(null,"distance","distance",1302364007).cljs$core$IFn$_invoke$arity$1(state) + -1) + cljs.core.peek.call(null,new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"stack","stack",1123661306),cljs.core.pop.call(null,new cljs.core.Keyword(null,"stack","stack",1123661306).cljs$core$IFn$_invoke$arity$1(state))], null),result], null);
var G__8832 = tok;
p__8828 = G__8831;
tok = G__8832;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distance","distance",1302364007)], null),cljs.core.inc),cljs.core.conj.call(null,result,tok)], null);
} else
{return null;
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distance","distance",1302364007)], null),cljs.core.inc),cljs.core.conj.call(null,result,tok)], null);
} else
{return null;
}
}
}
}
break;
}
});
abstract_blocks = function(p__8828,tok){
switch(arguments.length){
case 0:
return abstract_blocks__0.call(this);
case 2:
return abstract_blocks__2.call(this,p__8828,tok);
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
termcat.rules.ast.introduce_delim_errors = termcat.rewrite.abstraction.call(null,(function() {
var G__8845 = null;
var G__8845__0 = (function (){return null;
});
var G__8845__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__8833 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,1,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__8833,0,null);var t1 = cljs.core.nth.call(null,vec__8833,1,null);var temp__4090__auto__ = (function (){var ocr_8834 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,1,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_8834)) && ((cljs.core.count.call(null,ocr_8834) === 2)))
{try{var ocr_8834_1__8839 = cljs.core.nth.call(null,ocr_8834,1);if((cljs.core.vector_QMARK_.call(null,ocr_8834_1__8839)) && ((cljs.core.count.call(null,ocr_8834_1__8839) === 2)))
{try{var ocr_8834_1__8839_0__8840 = cljs.core.nth.call(null,ocr_8834_1__8839,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8834_1__8839_0__8840,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),termcat.term.payload.call(null,t1))], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8834_1__8839_0__8840,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"error","error",1110689146),termcat.term.payload.call(null,t1))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8844){if((e8844 instanceof Error))
{var e__4796__auto__ = e8844;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8844;
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
}catch (e8843){if((e8843 instanceof Error))
{var e__4796__auto__ = e8843;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8843;
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
}catch (e8842){if((e8842 instanceof Error))
{var e__4796__auto__ = e8842;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8842;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,1,input__6469__auto__))], null);
} else
{return null;
}
});
G__8845 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__8845__0.call(this);
case 2:
return G__8845__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8845;
})()
);
termcat.rules.ast.merge_blocks = (function merge_blocks(b1,t,b2){return termcat.term.block.call(null,termcat.term.left.call(null,b1),termcat.term.fragmentcat.call(null,termcat.rewrite.unwrap.call(null,b1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null),termcat.rewrite.unwrap.call(null,b2)),termcat.term.right.call(null,b1));
});
/**
* 
*/
termcat.rules.ast.remove_superfluous_whitespace = termcat.rewrite.abstraction.call(null,(function() {
var G__8884 = null;
var G__8884__0 = (function (){return null;
});
var G__8884__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__8846 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__8846,0,null);var t1 = cljs.core.nth.call(null,vec__8846,1,null);var t2 = cljs.core.nth.call(null,vec__8846,2,null);var temp__4090__auto__ = (function (){var ocr_8847 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_8847)) && ((cljs.core.count.call(null,ocr_8847) === 3)))
{try{var ocr_8847_1__8852 = cljs.core.nth.call(null,ocr_8847,1);if((ocr_8847_1__8852 === null))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8882){if((e8882 instanceof Error))
{var e__4796__auto__ = e8882;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8882;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8883){if((e8883 instanceof Error))
{var e__4796__auto__ = e8883;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8883;
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
}
}catch (e8861){if((e8861 instanceof Error))
{var e__4796__auto__ = e8861;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_8847_1__8852 = cljs.core.nth.call(null,ocr_8847,1);if((cljs.core.vector_QMARK_.call(null,ocr_8847_1__8852)) && ((cljs.core.count.call(null,ocr_8847_1__8852) === 2)))
{try{var ocr_8847_1__8852_0__8854 = cljs.core.nth.call(null,ocr_8847_1__8852,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852_0__8854,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_1__8852_1__8855 = cljs.core.nth.call(null,ocr_8847_1__8852,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852_1__8855,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8881){if((e8881 instanceof Error))
{var e__4796__auto____$1 = e8881;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8881;
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
}catch (e8880){if((e8880 instanceof Error))
{var e__4796__auto____$1 = e8880;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8880;
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
}catch (e8876){if((e8876 instanceof Error))
{var e__4796__auto____$1 = e8876;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8847_1__8852_0__8854 = cljs.core.nth.call(null,ocr_8847_1__8852,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852_0__8854,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_1__8852_1__8855 = cljs.core.nth.call(null,ocr_8847_1__8852,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852_1__8855,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8879){if((e8879 instanceof Error))
{var e__4796__auto____$2 = e8879;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8879;
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
}catch (e8878){if((e8878 instanceof Error))
{var e__4796__auto____$2 = e8878;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8878;
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
}catch (e8877){if((e8877 instanceof Error))
{var e__4796__auto____$2 = e8877;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8877;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8876;
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
}catch (e8862){if((e8862 instanceof Error))
{var e__4796__auto____$1 = e8862;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_8847_1__8852 = cljs.core.nth.call(null,ocr_8847,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if((ocr_8847_2__8853 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8864){if((e8864 instanceof Error))
{var e__4796__auto____$2 = e8864;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if((cljs.core.vector_QMARK_.call(null,ocr_8847_2__8853)) && ((cljs.core.count.call(null,ocr_8847_2__8853) === 2)))
{try{var ocr_8847_2__8853_0__8856 = cljs.core.nth.call(null,ocr_8847_2__8853,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_0__8856,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_2__8853_1__8857 = cljs.core.nth.call(null,ocr_8847_2__8853,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_1__8857,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8869){if((e8869 instanceof Error))
{var e__4796__auto____$3 = e8869;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8869;
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
}catch (e8866){if((e8866 instanceof Error))
{var e__4796__auto____$3 = e8866;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8847_2__8853_0__8856 = cljs.core.nth.call(null,ocr_8847_2__8853,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_0__8856,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_2__8853_1__8857 = cljs.core.nth.call(null,ocr_8847_2__8853,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_1__8857,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8868){if((e8868 instanceof Error))
{var e__4796__auto____$4 = e8868;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8868;
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
}catch (e8867){if((e8867 instanceof Error))
{var e__4796__auto____$4 = e8867;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8867;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8866;
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
}catch (e8865){if((e8865 instanceof Error))
{var e__4796__auto____$3 = e8865;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8865;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8864;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_1__8852,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if((ocr_8847_2__8853 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e8870){if((e8870 instanceof Error))
{var e__4796__auto____$2 = e8870;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_8847_2__8853 = cljs.core.nth.call(null,ocr_8847,2);if((cljs.core.vector_QMARK_.call(null,ocr_8847_2__8853)) && ((cljs.core.count.call(null,ocr_8847_2__8853) === 2)))
{try{var ocr_8847_2__8853_0__8858 = cljs.core.nth.call(null,ocr_8847_2__8853,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_0__8858,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_2__8853_1__8859 = cljs.core.nth.call(null,ocr_8847_2__8853,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_1__8859,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8875){if((e8875 instanceof Error))
{var e__4796__auto____$3 = e8875;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8875;
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
}catch (e8872){if((e8872 instanceof Error))
{var e__4796__auto____$3 = e8872;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_8847_2__8853_0__8858 = cljs.core.nth.call(null,ocr_8847_2__8853,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_0__8858,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8847_2__8853_1__8859 = cljs.core.nth.call(null,ocr_8847_2__8853,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8847_2__8853_1__8859,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8874){if((e8874 instanceof Error))
{var e__4796__auto____$4 = e8874;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8874;
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
}catch (e8873){if((e8873 instanceof Error))
{var e__4796__auto____$4 = e8873;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8873;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8872;
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
}catch (e8871){if((e8871 instanceof Error))
{var e__4796__auto____$3 = e8871;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8871;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8870;
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
}
}catch (e8863){if((e8863 instanceof Error))
{var e__4796__auto____$2 = e8863;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8863;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8862;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8861;
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
}catch (e8860){if((e8860 instanceof Error))
{var e__4796__auto__ = e8860;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8860;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__8884 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__8884__0.call(this);
case 2:
return G__8884__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8884;
})()
);
/**
* 
*/
termcat.rules.ast.convert_newlines_to_whitespace = termcat.rewrite.abstraction.call(null,(function() {
var G__8893 = null;
var G__8893__0 = (function (){return null;
});
var G__8893__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__8885 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,1,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__8885,0,null);var t1 = cljs.core.nth.call(null,vec__8885,1,null);var temp__4090__auto__ = (function (){var ocr_8886 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,1,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_8886)) && ((cljs.core.count.call(null,ocr_8886) === 2)))
{try{var ocr_8886_1__8890 = cljs.core.nth.call(null,ocr_8886,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8886_1__8890,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983),"\n")], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8892){if((e8892 instanceof Error))
{var e__4796__auto__ = e8892;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8892;
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
}catch (e8891){if((e8891 instanceof Error))
{var e__4796__auto__ = e8891;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8891;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,1,input__6469__auto__))], null);
} else
{return null;
}
});
G__8893 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__8893__0.call(this);
case 2:
return G__8893__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8893;
})()
);
/**
* 
*/
termcat.rules.ast.fix_bullet_continuations = termcat.rewrite.abstraction.call(null,(function() {
var G__8919 = null;
var G__8919__0 = (function (){return null;
});
var G__8919__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__8894 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,3,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__8894,0,null);var t1 = cljs.core.nth.call(null,vec__8894,1,null);var t2 = cljs.core.nth.call(null,vec__8894,2,null);var t3 = cljs.core.nth.call(null,vec__8894,3,null);var temp__4090__auto__ = (function (){var ocr_8895 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,3,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_8895)) && ((cljs.core.count.call(null,ocr_8895) === 4)))
{try{var ocr_8895_1__8899 = cljs.core.nth.call(null,ocr_8895,1);if((cljs.core.vector_QMARK_.call(null,ocr_8895_1__8899)) && ((cljs.core.count.call(null,ocr_8895_1__8899) === 2)))
{try{var ocr_8895_1__8899_0__8902 = cljs.core.nth.call(null,ocr_8895_1__8899,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_1__8899_0__8902,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8895_1__8899_1__8903 = cljs.core.nth.call(null,ocr_8895_1__8899,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_1__8899_1__8903,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{try{var ocr_8895_2__8900 = cljs.core.nth.call(null,ocr_8895,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_2__8900,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_8895_3__8901 = cljs.core.nth.call(null,ocr_8895,3);if((cljs.core.vector_QMARK_.call(null,ocr_8895_3__8901)) && ((cljs.core.count.call(null,ocr_8895_3__8901) === 2)))
{try{var ocr_8895_3__8901_0__8904 = cljs.core.nth.call(null,ocr_8895_3__8901,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_3__8901_0__8904,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8895_3__8901_1__8905 = cljs.core.nth.call(null,ocr_8895_3__8901,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_3__8901_1__8905,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.ast.merge_blocks.call(null,t1,t2,t3)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8915){if((e8915 instanceof Error))
{var e__4796__auto__ = e8915;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8915;
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
}catch (e8914){if((e8914 instanceof Error))
{var e__4796__auto__ = e8914;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8914;
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
}catch (e8913){if((e8913 instanceof Error))
{var e__4796__auto__ = e8913;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8913;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_2__8900,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_8895_3__8901 = cljs.core.nth.call(null,ocr_8895,3);if((cljs.core.vector_QMARK_.call(null,ocr_8895_3__8901)) && ((cljs.core.count.call(null,ocr_8895_3__8901) === 2)))
{try{var ocr_8895_3__8901_0__8906 = cljs.core.nth.call(null,ocr_8895_3__8901,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_3__8901_0__8906,new cljs.core.Keyword(null,"block","block",1107736575)))
{try{var ocr_8895_3__8901_1__8907 = cljs.core.nth.call(null,ocr_8895_3__8901,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_8895_3__8901_1__8907,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.rules.ast.merge_blocks.call(null,t1,t2,t3)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e8918){if((e8918 instanceof Error))
{var e__4796__auto__ = e8918;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8918;
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
}catch (e8917){if((e8917 instanceof Error))
{var e__4796__auto__ = e8917;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8917;
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
}catch (e8916){if((e8916 instanceof Error))
{var e__4796__auto__ = e8916;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8916;
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
}
}catch (e8912){if((e8912 instanceof Error))
{var e__4796__auto__ = e8912;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8912;
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
}catch (e8911){if((e8911 instanceof Error))
{var e__4796__auto__ = e8911;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8911;
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
}catch (e8910){if((e8910 instanceof Error))
{var e__4796__auto__ = e8910;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8910;
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
}catch (e8909){if((e8909 instanceof Error))
{var e__4796__auto__ = e8909;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8909;
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
}catch (e8908){if((e8908 instanceof Error))
{var e__4796__auto__ = e8908;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8908;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,3,input__6469__auto__))], null);
} else
{return null;
}
});
G__8919 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__8919__0.call(this);
case 2:
return G__8919__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8919;
})()
);
