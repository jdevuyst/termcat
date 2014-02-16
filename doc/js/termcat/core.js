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
var print_tree__1 = (function (tree){return print_tree.call(null,tree,"");
});
var print_tree__2 = (function (tree,indent){var token_to_string = (function token_to_string(t){return [cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.tt.call(null,t),termcat.term.payload.call(null,t)], null)),cljs.core.str((function (){var lpos = new cljs.core.Keyword(null,"lpos","lpos",1017232858).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t));var rpos = new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t));if(cljs.core.truth_((function (){var or__3403__auto__ = lpos;if(cljs.core.truth_(or__3403__auto__))
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
var seq__8737_8741 = cljs.core.seq.call(null,termcat.rewrite.unwrap.call(null,tree));var chunk__8738_8742 = null;var count__8739_8743 = 0;var i__8740_8744 = 0;while(true){
if((i__8740_8744 < count__8739_8743))
{var t_8745 = cljs.core._nth.call(null,chunk__8738_8742,i__8740_8744);if(termcat.term.block_QMARK_.call(null,t_8745))
{var new_indent_8746 = [cljs.core.str(indent),cljs.core.str("  ")].join('');cljs.core.println.call(null,indent,">",token_to_string.call(null,termcat.term.left.call(null,t_8745)));
print_tree.call(null,t_8745,new_indent_8746);
cljs.core.println.call(null,indent,"<",token_to_string.call(null,termcat.term.right.call(null,t_8745)));
} else
{cljs.core.println.call(null,indent,(((t_8745 == null))?"nil":token_to_string.call(null,t_8745)));
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
{var temp__4092__auto___8751 = cljs.core.seq.call(null,seq__8737_8741);if(temp__4092__auto___8751)
{var seq__8737_8752__$1 = temp__4092__auto___8751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8737_8752__$1))
{var c__4151__auto___8753 = cljs.core.chunk_first.call(null,seq__8737_8752__$1);{
var G__8754 = cljs.core.chunk_rest.call(null,seq__8737_8752__$1);
var G__8755 = c__4151__auto___8753;
var G__8756 = cljs.core.count.call(null,c__4151__auto___8753);
var G__8757 = 0;
seq__8737_8741 = G__8754;
chunk__8738_8742 = G__8755;
count__8739_8743 = G__8756;
i__8740_8744 = G__8757;
continue;
}
} else
{var t_8758 = cljs.core.first.call(null,seq__8737_8752__$1);if(termcat.term.block_QMARK_.call(null,t_8758))
{var new_indent_8759 = [cljs.core.str(indent),cljs.core.str("  ")].join('');cljs.core.println.call(null,indent,">",token_to_string.call(null,termcat.term.left.call(null,t_8758)));
print_tree.call(null,t_8758,new_indent_8759);
cljs.core.println.call(null,indent,"<",token_to_string.call(null,termcat.term.right.call(null,t_8758)));
} else
{cljs.core.println.call(null,indent,(((t_8758 == null))?"nil":token_to_string.call(null,t_8758)));
}
{
var G__8760 = cljs.core.next.call(null,seq__8737_8752__$1);
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
var G__8764__2 = (function (state,input){if(cljs.core._EQ_.call(null,id,termcat.core._STAR_debug_STAR_))
{termcat.core.print_tree.call(null,cljs.core.vec.call(null,input));
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
termcat.core.compile_rule = termcat.rewrite.sequence.call(null,termcat.rewrite.abstraction.call(null,termcat.rewrite.reduction.call(null,termcat.rules.tokenize.escape_html)),termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.tokenize.remove_escape_tokens,termcat.rules.tokenize.remove_annotated_tokens,termcat.rules.tokenize.merge_tokens,termcat.rules.tokenize.remove_magic_tokens))),termcat.rewrite.procedure.call(null,termcat.rules.tokenize.introduce_emptyline_tokens),termcat.rewrite.procedure.call(null,termcat.rules.tokenize.introduce_indent_tokens),termcat.rewrite.procedure.call(null,termcat.rules.tokenize.remove_superfluous_whitespace),termcat.rewrite.procedure.call(null,termcat.rules.tokenize.introduce_item_tokens),termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.tokenize.remove_percent_tokens)),termcat.core.debug_rule.call(null,new cljs.core.Keyword(null,"tok","tok",1014019266)),termcat.rewrite.abstraction.call(null,termcat.rewrite.reduction.call(null,termcat.rules.ast.abstract_blocks)),termcat.rewrite.recursion.call(null,termcat.rewrite.sequence.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.ast.introduce_delim_errors,termcat.rules.ast.fix_bullet_continuations))),termcat.term.block_QMARK_),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rewrite.sequence.call(null,termcat.rules.ast.remove_superfluous_whitespace,termcat.rules.ast.convert_newlines_to_whitespace))),termcat.term.block_QMARK_),termcat.core.debug_rule.call(null,new cljs.core.Keyword(null,"ast","ast",1014001140)),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.bind.introduce_lambdas,termcat.rules.bind.introduce_fun_calls)),termcat.term.block_QMARK_),termcat.rewrite.recursive_procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.bind.introduce_bindings),termcat.term.block_QMARK_,termcat.rewrite.lexical_scope),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.markdown.introduce_section_calls,termcat.rules.markdown.introduce_blockquote_calls,termcat.rules.markdown.introduce_bullet_list_calls,termcat.rules.markdown.introduce_link_calls,termcat.rules.markdown.introduce_img_calls,termcat.rules.markdown.remove_decorators)),termcat.term.block_QMARK_),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.bind.expand_bindings,termcat.rules.bind.evaluate_fun_calls))),termcat.rules.bind.non_dormant_block_QMARK_),termcat.core.debug_rule.call(null,new cljs.core.Keyword(null,"macro","macro",1117556542)),termcat.rewrite.recursion.call(null,termcat.rewrite.sequence.call(null,termcat.rewrite.fixpoint.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.math.remove_manual_casts,termcat.rules.math.introduce_math_operators,termcat.rules.math.introduce_msub_msup,termcat.rules.math.introduce_mfrac,termcat.rules.math.math_cast_next_token)))),termcat.rewrite.procedure.call(null,termcat.rules.math.remove_superfluous_whitespace)),termcat.term.block_QMARK_),termcat.core.debug_rule.call(null,new cljs.core.Keyword(null,"math","math",1017248378)),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.disjunction.call(null,termcat.rules.html.introduce_nbsp_entities,termcat.rules.html.introduce_typographic_dashes,termcat.rules.html.introduce_typographic_quotes,termcat.rules.html.introduce_typographic_full_stops,termcat.rules.html.introduce_typographic_colons)),termcat.rules.html.text_block_QMARK_),termcat.rewrite.recursion.call(null,termcat.rewrite.sequence.call(null,termcat.rewrite.procedure.call(null,termcat.rules.html.remove_error_tokens),termcat.rewrite.procedure.call(null,termcat.rules.html.introduce_inner_math_tags)),termcat.term.block_QMARK_),termcat.rewrite.recursive_procedure.call(null,termcat.rewrite.sequence.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.remove_double_math_tokens),termcat.rewrite.fixpoint.call(null,termcat.rules.html.introduce_mtext_tags)),termcat.term.block_QMARK_,termcat.rewrite.flat_scope),termcat.rewrite.recursion.call(null,termcat.rewrite.sequence.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.remove_canceling_math_tokens)),termcat.rewrite.procedure.call(null,termcat.rules.html.introduce_outer_math_tags)),termcat.term.block_QMARK_),termcat.core.debug_rule.call(null,new cljs.core.Keyword(null,"final","final",1111340264)),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.flatten)),termcat.term.block_QMARK_),termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.separate_head_body)),termcat.rules.html.add_boilerplate,termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.remove_superfluous_whitespace)),termcat.term.block_QMARK_),termcat.rewrite.recursion.call(null,termcat.rewrite.procedure.call(null,termcat.rewrite.fixpoint.call(null,termcat.rules.html.to_html_tokens)),termcat.term.block_QMARK_));
termcat.core.compile = (function() {
var compile = null;
var compile__1 = (function (s){return compile.call(null,s,termcat.rewrite.cache.call(null));
});
var compile__2 = (function (s,cache){cljs.core.enable_console_print_BANG_.call(null);
var _BANG__STAR_cache_STAR_8766 = termcat.rewrite._BANG__STAR_cache_STAR_;try{termcat.rewrite._BANG__STAR_cache_STAR_ = cache;
return termcat.rules.html.to_string.call(null,termcat.rewrite.apply_rule.call(null,termcat.core.compile_rule,termcat.rules.pretokenize.map_to_tokens.call(null,cljs.core.vec.call(null,s))));
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
