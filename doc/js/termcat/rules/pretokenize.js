// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.pretokenize');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
/**
* Converts all characters to tokens. Here the term/token-type
* a function from characters to keywords. That is, we guess.
*/
termcat.rules.pretokenize.char_to_token = (function char_to_token(c){return termcat.term.token.cljs$core$IFn$_invoke$arity$2((function (){var G__10037 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",G__10037))
{return cljs.core.constant$keyword$40;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10037))
{return cljs.core.constant$keyword$60;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__10037))
{return cljs.core.constant$keyword$63;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10037))
{return cljs.core.constant$keyword$42;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__10037))
{return cljs.core.constant$keyword$97;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("%",G__10037))
{return cljs.core.constant$keyword$98;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10037))
{return cljs.core.constant$keyword$35;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__10037))
{return termcat.term.ldelim_t(cljs.core.constant$keyword$96);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__10037))
{return termcat.term.rdelim_t(cljs.core.constant$keyword$96);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",G__10037))
{return cljs.core.constant$keyword$99;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",G__10037))
{return cljs.core.constant$keyword$41;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+",G__10037))
{return cljs.core.constant$keyword$38;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",G__10037))
{return cljs.core.constant$keyword$100;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",G__10037))
{return cljs.core.constant$keyword$31;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__10037))
{return cljs.core.constant$keyword$61;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__10037))
{return cljs.core.constant$keyword$62;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__10037))
{return termcat.term.ldelim_t(cljs.core.constant$keyword$95);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__10037))
{return termcat.term.ldelim_t(cljs.core.constant$keyword$101);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",G__10037))
{return cljs.core.constant$keyword$102;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__10037))
{return cljs.core.constant$keyword$103;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("|",G__10037))
{return cljs.core.constant$keyword$57;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__10037))
{return termcat.term.rdelim_t(cljs.core.constant$keyword$95);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__10037))
{return termcat.term.rdelim_t(cljs.core.constant$keyword$101);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",G__10037))
{return cljs.core.constant$keyword$104;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10037))
{return cljs.core.constant$keyword$50;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__10037))
{return cljs.core.constant$keyword$44;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__10037))
{return cljs.core.constant$keyword$64;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__10037))
{return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.constant$keyword$7;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})(),c);
});
termcat.rules.pretokenize.map_to_tokens = (function map_to_tokens(code){return cljs.core.first(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10040,c){var vec__10041 = p__10040;var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10041,0,null);var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10041,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.with_meta(termcat.rules.pretokenize.char_to_token(c),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$81,code,cljs.core.constant$keyword$79,pos,cljs.core.constant$keyword$80,pos], null))),(pos + 1)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,0], null),cljs.core.vec(code)));
});
