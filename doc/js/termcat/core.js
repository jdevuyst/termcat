// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.core');
goog.require('cljs.core');
goog.require('termcat.rules.pretokenize');
goog.require('termcat.rules.math');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('termcat.rules.math');
goog.require('termcat.rules.html');
goog.require('termcat.rules.html');
goog.require('termcat.rewrite');
goog.require('termcat.rules.markdown');
goog.require('termcat.rules.pretokenize');
goog.require('termcat.rewrite');
goog.require('termcat.rules.bind');
goog.require('termcat.rules.bind');
goog.require('termcat.rules.tokenize');
goog.require('termcat.rules.markdown');
goog.require('termcat.rules.ast');
goog.require('termcat.rules.ast');
goog.require('termcat.rules.tokenize');
termcat.core._STAR_debug_STAR_ = null;
termcat.core.print_tree = (function() {
var print_tree = null;
var print_tree__1 = (function (tree){return print_tree.cljs$core$IFn$_invoke$arity$2(tree,"");
});
var print_tree__2 = (function (tree,indent){var token_to_string = (function token_to_string(t){return [cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.tt(t),termcat.term.payload(t)], null)),cljs.core.str((function (){var lpos = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t));var rpos = cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t));if(cljs.core.truth_((function (){var or__3403__auto__ = lpos;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return rpos;
}
})()))
{return [cljs.core.str(" :: "),cljs.core.str(lpos),cljs.core.str("-"),cljs.core.str(rpos)].join('');
} else
{return null;
}
})())].join('');
});
var seq__8737_8741 = cljs.core.seq(termcat.rewrite.unwrap(tree));var chunk__8738_8742 = null;var count__8739_8743 = 0;var i__8740_8744 = 0;while(true){
if((i__8740_8744 < count__8739_8743))
{var t_8745 = chunk__8738_8742.cljs$core$IIndexed$_nth$arity$2(null,i__8740_8744);if(termcat.term.block_QMARK_(t_8745))
{var new_indent_8746 = [cljs.core.str(indent),cljs.core.str("  ")].join('');cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,">",token_to_string(termcat.term.left(t_8745))], 0));
print_tree.cljs$core$IFn$_invoke$arity$2(t_8745,new_indent_8746);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,"<",token_to_string(termcat.term.right(t_8745))], 0));
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,(((t_8745 == null))?"nil":token_to_string(t_8745))], 0));
}
{
var G__8747 = seq__8737_8741;
var G__8748 = chunk__8738_8742;
var G__8749 = count__8739_8743;
var G__8750 = (i__8740_8744 + 1);
seq__8737_8741 = G__8747;
chunk__8738_8742 = G__8748;
count__8739_8743 = G__8749;
i__8740_8744 = G__8750;
continue;
}
} else
{var temp__4092__auto___8751 = cljs.core.seq(seq__8737_8741);if(temp__4092__auto___8751)
{var seq__8737_8752__$1 = temp__4092__auto___8751;if(cljs.core.chunked_seq_QMARK_(seq__8737_8752__$1))
{var c__4151__auto___8753 = cljs.core.chunk_first(seq__8737_8752__$1);{
var G__8754 = cljs.core.chunk_rest(seq__8737_8752__$1);
var G__8755 = c__4151__auto___8753;
var G__8756 = cljs.core.count(c__4151__auto___8753);
var G__8757 = 0;
seq__8737_8741 = G__8754;
chunk__8738_8742 = G__8755;
count__8739_8743 = G__8756;
i__8740_8744 = G__8757;
continue;
}
} else
{var t_8758 = cljs.core.first(seq__8737_8752__$1);if(termcat.term.block_QMARK_(t_8758))
{var new_indent_8759 = [cljs.core.str(indent),cljs.core.str("  ")].join('');cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,">",token_to_string(termcat.term.left(t_8758))], 0));
print_tree.cljs$core$IFn$_invoke$arity$2(t_8758,new_indent_8759);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,"<",token_to_string(termcat.term.right(t_8758))], 0));
} else
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([indent,(((t_8758 == null))?"nil":token_to_string(t_8758))], 0));
}
{
var G__8760 = cljs.core.next(seq__8737_8752__$1);
var G__8761 = null;
var G__8762 = 0;
var G__8763 = 0;
seq__8737_8741 = G__8760;
chunk__8738_8742 = G__8761;
count__8739_8743 = G__8762;
i__8740_8744 = G__8763;
continue;
}
}
} else
{}
}
break;
}
return tree;
});
print_tree = function(tree,indent){
switch(arguments.length){
case 1:
return print_tree__1.call(this,tree);
case 2:
return print_tree__2.call(this,tree,indent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
print_tree.cljs$core$IFn$_invoke$arity$1 = print_tree__1;
print_tree.cljs$core$IFn$_invoke$arity$2 = print_tree__2;
return print_tree;
})()
;
termcat.core.debug_rule = (function debug_rule(id){return (function() {
var G__8764 = null;
var G__8764__0 = (function (){return null;
});
var G__8764__2 = (function (state,input){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,termcat.core._STAR_debug_STAR_))
{termcat.core.print_tree.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(input));
} else
{}
return null;
});
G__8764 = function(state,input){
switch(arguments.length){
case 0:
return G__8764__0.call(this);
case 2:
return G__8764__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8764;
})()
});
termcat.core.compile_rule = termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.abstraction(termcat.rewrite.reduction(termcat.rules.tokenize.escape_html)),termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.tokenize.remove_escape_tokens,termcat.rules.tokenize.remove_annotated_tokens,termcat.rules.tokenize.merge_tokens,termcat.rules.tokenize.remove_magic_tokens], 0)))),termcat.rewrite.procedure(termcat.rules.tokenize.introduce_emptyline_tokens),termcat.rewrite.procedure(termcat.rules.tokenize.introduce_indent_tokens),termcat.rewrite.procedure(termcat.rules.tokenize.remove_superfluous_whitespace),termcat.rewrite.procedure(termcat.rules.tokenize.introduce_item_tokens),termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.tokenize.remove_percent_tokens)),termcat.core.debug_rule(cljs.core.constant$keyword$133),termcat.rewrite.abstraction(termcat.rewrite.reduction(termcat.rules.ast.abstract_blocks)),termcat.rewrite.recursion(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.procedure(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.ast.introduce_delim_errors,termcat.rules.ast.fix_bullet_continuations], 0)))], 0)),termcat.term.block_QMARK_),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.ast.remove_superfluous_whitespace,termcat.rules.ast.convert_newlines_to_whitespace], 0)))),termcat.term.block_QMARK_),termcat.core.debug_rule(cljs.core.constant$keyword$134),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.introduce_lambdas,termcat.rules.bind.introduce_fun_calls], 0))),termcat.term.block_QMARK_),termcat.rewrite.recursive_procedure(termcat.rewrite.fixpoint(termcat.rules.bind.introduce_bindings),termcat.term.block_QMARK_,termcat.rewrite.lexical_scope),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.markdown.introduce_section_calls,termcat.rules.markdown.introduce_blockquote_calls,termcat.rules.markdown.introduce_bullet_list_calls,termcat.rules.markdown.introduce_link_calls,termcat.rules.markdown.introduce_img_calls,termcat.rules.markdown.remove_decorators], 0))),termcat.term.block_QMARK_),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls], 0)))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.core.debug_rule(cljs.core.constant$keyword$135),termcat.rewrite.recursion(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.fixpoint(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.math.remove_manual_casts,termcat.rules.math.introduce_math_operators,termcat.rules.math.introduce_msub_msup,termcat.rules.math.introduce_mfrac,termcat.rules.math.math_cast_next_token], 0))))),termcat.rewrite.procedure(termcat.rules.math.remove_superfluous_whitespace)], 0)),termcat.term.block_QMARK_),termcat.core.debug_rule(cljs.core.constant$keyword$27),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.disjunction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rules.html.introduce_nbsp_entities,termcat.rules.html.introduce_typographic_dashes,termcat.rules.html.introduce_typographic_quotes,termcat.rules.html.introduce_typographic_full_stops,termcat.rules.html.introduce_typographic_colons], 0))),termcat.rules.html.text_block_QMARK_),termcat.rewrite.recursion(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.procedure(termcat.rules.html.remove_error_tokens),termcat.rewrite.procedure(termcat.rules.html.introduce_inner_math_tags)], 0)),termcat.term.block_QMARK_),termcat.rewrite.recursive_procedure(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.fixpoint(termcat.rules.html.remove_double_math_tokens),termcat.rewrite.fixpoint(termcat.rules.html.introduce_mtext_tags)], 0)),termcat.term.block_QMARK_,termcat.rewrite.flat_scope),termcat.rewrite.recursion(termcat.rewrite.sequence.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.html.remove_canceling_math_tokens)),termcat.rewrite.procedure(termcat.rules.html.introduce_outer_math_tags)], 0)),termcat.term.block_QMARK_),termcat.core.debug_rule(cljs.core.constant$keyword$136),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.html.flatten)),termcat.term.block_QMARK_),termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.html.separate_head_body)),termcat.rules.html.add_boilerplate,termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.html.remove_superfluous_whitespace)),termcat.term.block_QMARK_),termcat.rewrite.recursion(termcat.rewrite.procedure(termcat.rewrite.fixpoint(termcat.rules.html.to_html_tokens)),termcat.term.block_QMARK_)], 0));
termcat.core.compile = (function() {
var compile = null;
var compile__1 = (function (s){return compile.cljs$core$IFn$_invoke$arity$2(s,termcat.rewrite.cache());
});
var compile__2 = (function (s,cache){cljs.core.enable_console_print_BANG_();
var _BANG__STAR_cache_STAR_8766 = termcat.rewrite._BANG__STAR_cache_STAR_;try{termcat.rewrite._BANG__STAR_cache_STAR_ = cache;
return termcat.rules.html.to_string((termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(termcat.core.compile_rule,termcat.rules.pretokenize.map_to_tokens(s)) : termcat.rewrite.apply_rule.call(null,termcat.core.compile_rule,termcat.rules.pretokenize.map_to_tokens(s))));
}finally {termcat.rewrite._BANG__STAR_cache_STAR_ = _BANG__STAR_cache_STAR_8766;
}});
compile = function(s,cache){
switch(arguments.length){
case 1:
return compile__1.call(this,s);
case 2:
return compile__2.call(this,s,cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compile.cljs$core$IFn$_invoke$arity$1 = compile__1;
compile.cljs$core$IFn$_invoke$arity$2 = compile__2;
return compile;
})()
;
goog.exportSymbol('termcat.core.compile', termcat.core.compile);
