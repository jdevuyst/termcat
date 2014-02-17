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
termcat.rules.pretokenize.char_to_token = (function char_to_token(c){return termcat.term.token.call(null,(function (){var G__10037 = c;if(cljs.core._EQ_.call(null," ",G__10037))
{return new cljs.core.Keyword(null,"whitespace","whitespace",1290815983);
} else
{if(cljs.core._EQ_.call(null,"`",G__10037))
{return new cljs.core.Keyword(null,"left-quote","left-quote",2041480360);
} else
{if(cljs.core._EQ_.call(null,"!",G__10037))
{return new cljs.core.Keyword(null,"bang","bang",1016920490);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10037))
{return new cljs.core.Keyword(null,"double-quote","double-quote",969793778);
} else
{if(cljs.core._EQ_.call(null,"#",G__10037))
{return new cljs.core.Keyword(null,"hash","hash",1017099392);
} else
{if(cljs.core._EQ_.call(null,"%",G__10037))
{return new cljs.core.Keyword(null,"percent","percent",4629944247);
} else
{if(cljs.core._EQ_.call(null,"'",G__10037))
{return new cljs.core.Keyword(null,"right-quote","right-quote",3807707901);
} else
{if(cljs.core._EQ_.call(null,"(",G__10037))
{return termcat.term.ldelim_t.call(null,new cljs.core.Keyword(null,"parenthesis","parenthesis",2036987848));
} else
{if(cljs.core._EQ_.call(null,")",G__10037))
{return termcat.term.rdelim_t.call(null,new cljs.core.Keyword(null,"parenthesis","parenthesis",2036987848));
} else
{if(cljs.core._EQ_.call(null,"\n",G__10037))
{return new cljs.core.Keyword(null,"newline","newline",2859826438);
} else
{if(cljs.core._EQ_.call(null,"*",G__10037))
{return new cljs.core.Keyword(null,"asterisk","asterisk",669280996);
} else
{if(cljs.core._EQ_.call(null,"+",G__10037))
{return new cljs.core.Keyword(null,"plus","plus",1017348364);
} else
{if(cljs.core._EQ_.call(null,",",G__10037))
{return new cljs.core.Keyword(null,"comma","comma",1108747847);
} else
{if(cljs.core._EQ_.call(null,"-",G__10037))
{return new cljs.core.Keyword(null,"dash","dash",1016980228);
} else
{if(cljs.core._EQ_.call(null,".",G__10037))
{return new cljs.core.Keyword(null,"period","period",4317145395);
} else
{if(cljs.core._EQ_.call(null,":",G__10037))
{return new cljs.core.Keyword(null,"colon","colon",1108746961);
} else
{if(cljs.core._EQ_.call(null,"[",G__10037))
{return termcat.term.ldelim_t.call(null,new cljs.core.Keyword(null,"bracket","bracket",1151311898));
} else
{if(cljs.core._EQ_.call(null,"{",G__10037))
{return termcat.term.ldelim_t.call(null,new cljs.core.Keyword(null,"brace","brace",1107901861));
} else
{if(cljs.core._EQ_.call(null,"<",G__10037))
{return new cljs.core.Keyword(null,"less-than","less-than",1333713095);
} else
{if(cljs.core._EQ_.call(null,"\\",G__10037))
{return new cljs.core.Keyword(null,"escape","escape",4014699507);
} else
{if(cljs.core._EQ_.call(null,"|",G__10037))
{return new cljs.core.Keyword(null,"bar","bar",1014001541);
} else
{if(cljs.core._EQ_.call(null,"]",G__10037))
{return termcat.term.rdelim_t.call(null,new cljs.core.Keyword(null,"bracket","bracket",1151311898));
} else
{if(cljs.core._EQ_.call(null,"}",G__10037))
{return termcat.term.rdelim_t.call(null,new cljs.core.Keyword(null,"brace","brace",1107901861));
} else
{if(cljs.core._EQ_.call(null,">",G__10037))
{return new cljs.core.Keyword(null,"greater-than","greater-than",3888014086);
} else
{if(cljs.core._EQ_.call(null,"^",G__10037))
{return new cljs.core.Keyword(null,"circumflex","circumflex",4463600090);
} else
{if(cljs.core._EQ_.call(null,"~",G__10037))
{return new cljs.core.Keyword(null,"tilde","tilde",1124267722);
} else
{if(cljs.core._EQ_.call(null,"?",G__10037))
{return new cljs.core.Keyword(null,"question-mark","question-mark",4232142790);
} else
{if(cljs.core._EQ_.call(null,"_",G__10037))
{return new cljs.core.Keyword(null,"underscore","underscore",3544053292);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
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
termcat.rules.pretokenize.map_to_tokens = (function map_to_tokens(code){return cljs.core.first.call(null,clojure.core.reducers.reduce.call(null,(function (p__10040,c){var vec__10041 = p__10040;var result = cljs.core.nth.call(null,vec__10041,0,null);var pos = cljs.core.nth.call(null,vec__10041,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,cljs.core.with_meta.call(null,termcat.rules.pretokenize.char_to_token.call(null,c),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),code,new cljs.core.Keyword(null,"lpos","lpos",1017232858),pos,new cljs.core.Keyword(null,"rpos","rpos",1017411604),pos], null))),(pos + 1)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,0], null),cljs.core.vec.call(null,code)));
});
