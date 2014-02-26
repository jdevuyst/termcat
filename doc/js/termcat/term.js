// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.term');
goog.require('cljs.core');
goog.require('termcat.rewrite');
goog.require('termcat.rewrite');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
goog.require('cljs.reader');
goog.require('cljs.reader');
termcat.term.ITerm = (function (){var obj10459 = {};return obj10459;
})();
termcat.term.tt = (function tt(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$ITerm$tt$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$ITerm$tt$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.tt[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.tt["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("ITerm.tt",this$);
}
}
})().call(null,this$);
}
});
termcat.term.IToken = (function (){var obj10461 = {};return obj10461;
})();
termcat.term.payload = (function payload(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$IToken$payload$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$IToken$payload$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.payload[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.payload["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("IToken.payload",this$);
}
}
})().call(null,this$);
}
});
termcat.term.IFragment = (function (){var obj10463 = {};return obj10463;
})();
termcat.term.ednval = (function ednval(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$IFragment$ednval$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$IFragment$ednval$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.ednval[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.ednval["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("IFragment.ednval",this$);
}
}
})().call(null,this$);
}
});
termcat.term.IBlock = (function (){var obj10465 = {};return obj10465;
})();
termcat.term.left = (function left(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$IBlock$left$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$IBlock$left$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.left[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.left["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("IBlock.left",this$);
}
}
})().call(null,this$);
}
});
termcat.term.center = (function center(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$IBlock$center$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$IBlock$center$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.center[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.center["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("IBlock.center",this$);
}
}
})().call(null,this$);
}
});
termcat.term.right = (function right(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.termcat$term$IBlock$right$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.termcat$term$IBlock$right$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (termcat.term.right[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (termcat.term.right["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("IBlock.right",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
* @param {*} tag
* @param {*} payload
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
termcat.term.Token = (function (tag,payload,__meta,__extmap){
this.tag = tag;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
termcat.term.Token.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;var h__3814__auto__ = self__.__hash;if(!((h__3814__auto__ == null)))
{return h__3814__auto__;
} else
{var h__3814__auto____$1 = cljs.core.hash_imap(this__3984__auto____$1);self__.__hash = h__3814__auto____$1;
return h__3814__auto____$1;
}
});
termcat.term.Token.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3989__auto__,k__3990__auto__){var self__ = this;
var this__3989__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3989__auto____$1,k__3990__auto__,null);
});
termcat.term.Token.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3991__auto__,k10467,else__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k10467,cljs.core.constant$keyword$17))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_(k10467,cljs.core.constant$keyword$18))
{return self__.payload;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10467,else__3992__auto__);
} else
{return null;
}
}
}
});
termcat.term.Token.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3996__auto__,k__3997__auto__,G__10466){var self__ = this;
var this__3996__auto____$1 = this;var pred__10469 = cljs.core.keyword_identical_QMARK_;var expr__10470 = k__3997__auto__;if(cljs.core.truth_((pred__10469.cljs$core$IFn$_invoke$arity$2 ? pred__10469.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$17,expr__10470) : pred__10469.call(null,cljs.core.constant$keyword$17,expr__10470))))
{return (new termcat.term.Token(G__10466,self__.payload,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10469.cljs$core$IFn$_invoke$arity$2 ? pred__10469.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18,expr__10470) : pred__10469.call(null,cljs.core.constant$keyword$18,expr__10470))))
{return (new termcat.term.Token(self__.tag,G__10466,self__.__meta,self__.__extmap,null));
} else
{return (new termcat.term.Token(self__.tag,self__.payload,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3997__auto__,G__10466),null));
}
}
});
termcat.term.Token.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4003__auto__,writer__4004__auto__,opts__4005__auto__){var self__ = this;
var this__4003__auto____$1 = this;var pr_pair__4006__auto__ = (function (keyval__4007__auto__){return cljs.core.pr_sequential_writer(writer__4004__auto__,cljs.core.pr_writer,""," ","",opts__4005__auto__,keyval__4007__auto__);
});return cljs.core.pr_sequential_writer(writer__4004__auto__,pr_pair__4006__auto__,"#termcat.term.Token{",", ","}",opts__4005__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.payload],null))], null),self__.__extmap));
});
termcat.term.Token.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3994__auto__,entry__3995__auto__){var self__ = this;
var this__3994__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3995__auto__))
{return cljs.core._assoc(this__3994__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3994__auto____$1,entry__3995__auto__);
}
});
termcat.term.Token.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4001__auto__){var self__ = this;
var this__4001__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.payload],null))], null),self__.__extmap));
});
termcat.term.Token.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3993__auto__){var self__ = this;
var this__3993__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
termcat.term.Token.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3985__auto__,other__3986__auto__){var self__ = this;
var this__3985__auto____$1 = this;if(cljs.core.truth_((function (){var and__3391__auto__ = other__3986__auto__;if(cljs.core.truth_(and__3391__auto__))
{return ((this__3985__auto____$1.constructor === other__3986__auto__.constructor)) && (cljs.core.equiv_map(this__3985__auto____$1,other__3986__auto__));
} else
{return and__3391__auto__;
}
})()))
{return true;
} else
{return false;
}
});
termcat.term.Token.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3988__auto__,G__10466){var self__ = this;
var this__3988__auto____$1 = this;return (new termcat.term.Token(self__.tag,self__.payload,G__10466,self__.__extmap,self__.__hash));
});
termcat.term.Token.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;return (new termcat.term.Token(self__.tag,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});
termcat.term.Token.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3987__auto__){var self__ = this;
var this__3987__auto____$1 = this;return self__.__meta;
});
termcat.term.Token.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3998__auto__,k__3999__auto__){var self__ = this;
var this__3998__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$17,null], null), null),k__3999__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3998__auto____$1),self__.__meta),k__3999__auto__);
} else
{return (new termcat.term.Token(self__.tag,self__.payload,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3999__auto__)),null));
}
});
termcat.term.Token.cljs$lang$type = true;
termcat.term.Token.cljs$lang$ctorPrSeq = (function (this__4023__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"termcat.term/Token");
});
termcat.term.Token.cljs$lang$ctorPrWriter = (function (this__4023__auto__,writer__4024__auto__){return cljs.core._write(writer__4024__auto__,"termcat.term/Token");
});
termcat.term.__GT_Token = (function __GT_Token(tag,payload){return (new termcat.term.Token(tag,payload));
});
termcat.term.map__GT_Token = (function map__GT_Token(G__10468){return (new termcat.term.Token(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__10468),cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__10468),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10468,cljs.core.constant$keyword$17,cljs.core.array_seq([cljs.core.constant$keyword$18], 0))));
});

/**
* @constructor
* @param {*} terms
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
termcat.term.Fragment = (function (terms,__meta,__extmap){
this.terms = terms;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
termcat.term.Fragment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;var h__3814__auto__ = self__.__hash;if(!((h__3814__auto__ == null)))
{return h__3814__auto__;
} else
{var h__3814__auto____$1 = cljs.core.hash_imap(this__3984__auto____$1);self__.__hash = h__3814__auto____$1;
return h__3814__auto____$1;
}
});
termcat.term.Fragment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3989__auto__,k__3990__auto__){var self__ = this;
var this__3989__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3989__auto____$1,k__3990__auto__,null);
});
termcat.term.Fragment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3991__auto__,k10473,else__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k10473,cljs.core.constant$keyword$19))
{return self__.terms;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10473,else__3992__auto__);
} else
{return null;
}
}
});
termcat.term.Fragment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3996__auto__,k__3997__auto__,G__10472){var self__ = this;
var this__3996__auto____$1 = this;var pred__10475 = cljs.core.keyword_identical_QMARK_;var expr__10476 = k__3997__auto__;if(cljs.core.truth_((pred__10475.cljs$core$IFn$_invoke$arity$2 ? pred__10475.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19,expr__10476) : pred__10475.call(null,cljs.core.constant$keyword$19,expr__10476))))
{return (new termcat.term.Fragment(G__10472,self__.__meta,self__.__extmap,null));
} else
{return (new termcat.term.Fragment(self__.terms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3997__auto__,G__10472),null));
}
});
termcat.term.Fragment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4003__auto__,writer__4004__auto__,opts__4005__auto__){var self__ = this;
var this__4003__auto____$1 = this;var pr_pair__4006__auto__ = (function (keyval__4007__auto__){return cljs.core.pr_sequential_writer(writer__4004__auto__,cljs.core.pr_writer,""," ","",opts__4005__auto__,keyval__4007__auto__);
});return cljs.core.pr_sequential_writer(writer__4004__auto__,pr_pair__4006__auto__,"#termcat.term.Fragment{",", ","}",opts__4005__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.terms],null))], null),self__.__extmap));
});
termcat.term.Fragment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3994__auto__,entry__3995__auto__){var self__ = this;
var this__3994__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3995__auto__))
{return cljs.core._assoc(this__3994__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3994__auto____$1,entry__3995__auto__);
}
});
termcat.term.Fragment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4001__auto__){var self__ = this;
var this__4001__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.terms],null))], null),self__.__extmap));
});
termcat.term.Fragment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3993__auto__){var self__ = this;
var this__3993__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
termcat.term.Fragment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3985__auto__,other__3986__auto__){var self__ = this;
var this__3985__auto____$1 = this;if(cljs.core.truth_((function (){var and__3391__auto__ = other__3986__auto__;if(cljs.core.truth_(and__3391__auto__))
{return ((this__3985__auto____$1.constructor === other__3986__auto__.constructor)) && (cljs.core.equiv_map(this__3985__auto____$1,other__3986__auto__));
} else
{return and__3391__auto__;
}
})()))
{return true;
} else
{return false;
}
});
termcat.term.Fragment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3988__auto__,G__10472){var self__ = this;
var this__3988__auto____$1 = this;return (new termcat.term.Fragment(self__.terms,G__10472,self__.__extmap,self__.__hash));
});
termcat.term.Fragment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;return (new termcat.term.Fragment(self__.terms,self__.__meta,self__.__extmap,self__.__hash));
});
termcat.term.Fragment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3987__auto__){var self__ = this;
var this__3987__auto____$1 = this;return self__.__meta;
});
termcat.term.Fragment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3998__auto__,k__3999__auto__){var self__ = this;
var this__3998__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$19,null], null), null),k__3999__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3998__auto____$1),self__.__meta),k__3999__auto__);
} else
{return (new termcat.term.Fragment(self__.terms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3999__auto__)),null));
}
});
termcat.term.Fragment.cljs$lang$type = true;
termcat.term.Fragment.cljs$lang$ctorPrSeq = (function (this__4023__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"termcat.term/Fragment");
});
termcat.term.Fragment.cljs$lang$ctorPrWriter = (function (this__4023__auto__,writer__4024__auto__){return cljs.core._write(writer__4024__auto__,"termcat.term/Fragment");
});
termcat.term.__GT_Fragment = (function __GT_Fragment(terms){return (new termcat.term.Fragment(terms));
});
termcat.term.map__GT_Fragment = (function map__GT_Fragment(G__10474){return (new termcat.term.Fragment(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__10474),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__10474,cljs.core.constant$keyword$19)));
});

/**
* @constructor
* @param {*} left
* @param {*} center
* @param {*} right
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
termcat.term.Block = (function (left,center,right,__meta,__extmap){
this.left = left;
this.center = center;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
termcat.term.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;var h__3814__auto__ = self__.__hash;if(!((h__3814__auto__ == null)))
{return h__3814__auto__;
} else
{var h__3814__auto____$1 = cljs.core.hash_imap(this__3984__auto____$1);self__.__hash = h__3814__auto____$1;
return h__3814__auto____$1;
}
});
termcat.term.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3989__auto__,k__3990__auto__){var self__ = this;
var this__3989__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3989__auto____$1,k__3990__auto__,null);
});
termcat.term.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3991__auto__,k10479,else__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k10479,cljs.core.constant$keyword$20))
{return self__.left;
} else
{if(cljs.core.keyword_identical_QMARK_(k10479,cljs.core.constant$keyword$21))
{return self__.center;
} else
{if(cljs.core.keyword_identical_QMARK_(k10479,cljs.core.constant$keyword$22))
{return self__.right;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10479,else__3992__auto__);
} else
{return null;
}
}
}
}
});
termcat.term.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3996__auto__,k__3997__auto__,G__10478){var self__ = this;
var this__3996__auto____$1 = this;var pred__10481 = cljs.core.keyword_identical_QMARK_;var expr__10482 = k__3997__auto__;if(cljs.core.truth_((pred__10481.cljs$core$IFn$_invoke$arity$2 ? pred__10481.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20,expr__10482) : pred__10481.call(null,cljs.core.constant$keyword$20,expr__10482))))
{return (new termcat.term.Block(G__10478,self__.center,self__.right,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10481.cljs$core$IFn$_invoke$arity$2 ? pred__10481.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21,expr__10482) : pred__10481.call(null,cljs.core.constant$keyword$21,expr__10482))))
{return (new termcat.term.Block(self__.left,G__10478,self__.right,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10481.cljs$core$IFn$_invoke$arity$2 ? pred__10481.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22,expr__10482) : pred__10481.call(null,cljs.core.constant$keyword$22,expr__10482))))
{return (new termcat.term.Block(self__.left,self__.center,G__10478,self__.__meta,self__.__extmap,null));
} else
{return (new termcat.term.Block(self__.left,self__.center,self__.right,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3997__auto__,G__10478),null));
}
}
}
});
termcat.term.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4003__auto__,writer__4004__auto__,opts__4005__auto__){var self__ = this;
var this__4003__auto____$1 = this;var pr_pair__4006__auto__ = (function (keyval__4007__auto__){return cljs.core.pr_sequential_writer(writer__4004__auto__,cljs.core.pr_writer,""," ","",opts__4005__auto__,keyval__4007__auto__);
});return cljs.core.pr_sequential_writer(writer__4004__auto__,pr_pair__4006__auto__,"#termcat.term.Block{",", ","}",opts__4005__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.left],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.center],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.right],null))], null),self__.__extmap));
});
termcat.term.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3994__auto__,entry__3995__auto__){var self__ = this;
var this__3994__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3995__auto__))
{return cljs.core._assoc(this__3994__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3995__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3994__auto____$1,entry__3995__auto__);
}
});
termcat.term.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4001__auto__){var self__ = this;
var this__4001__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.left],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.center],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.right],null))], null),self__.__extmap));
});
termcat.term.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3993__auto__){var self__ = this;
var this__3993__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
termcat.term.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3985__auto__,other__3986__auto__){var self__ = this;
var this__3985__auto____$1 = this;if(cljs.core.truth_((function (){var and__3391__auto__ = other__3986__auto__;if(cljs.core.truth_(and__3391__auto__))
{return ((this__3985__auto____$1.constructor === other__3986__auto__.constructor)) && (cljs.core.equiv_map(this__3985__auto____$1,other__3986__auto__));
} else
{return and__3391__auto__;
}
})()))
{return true;
} else
{return false;
}
});
termcat.term.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3988__auto__,G__10478){var self__ = this;
var this__3988__auto____$1 = this;return (new termcat.term.Block(self__.left,self__.center,self__.right,G__10478,self__.__extmap,self__.__hash));
});
termcat.term.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;return (new termcat.term.Block(self__.left,self__.center,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});
termcat.term.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3987__auto__){var self__ = this;
var this__3987__auto____$1 = this;return self__.__meta;
});
termcat.term.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3998__auto__,k__3999__auto__){var self__ = this;
var this__3998__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$20,null], null), null),k__3999__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3998__auto____$1),self__.__meta),k__3999__auto__);
} else
{return (new termcat.term.Block(self__.left,self__.center,self__.right,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3999__auto__)),null));
}
});
termcat.term.Block.cljs$lang$type = true;
termcat.term.Block.cljs$lang$ctorPrSeq = (function (this__4023__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"termcat.term/Block");
});
termcat.term.Block.cljs$lang$ctorPrWriter = (function (this__4023__auto__,writer__4024__auto__){return cljs.core._write(writer__4024__auto__,"termcat.term/Block");
});
termcat.term.__GT_Block = (function __GT_Block(left,center,right){return (new termcat.term.Block(left,center,right));
});
termcat.term.map__GT_Block = (function map__GT_Block(G__10480){return (new termcat.term.Block(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__10480),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__10480),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__10480),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10480,cljs.core.constant$keyword$20,cljs.core.array_seq([cljs.core.constant$keyword$21,cljs.core.constant$keyword$22], 0))));
});
termcat.term.token_QMARK_ = (function token_QMARK_(x){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),termcat.term.Token);
});
termcat.term.ldelim_QMARK_ = (function ldelim_QMARK_(x){return (termcat.term.token_QMARK_(x)) && (cljs.core.vector_QMARK_(termcat.term.tt(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(termcat.term.tt(x)),cljs.core.constant$keyword$23));
});
termcat.term.rdelim_QMARK_ = (function rdelim_QMARK_(x){return (termcat.term.token_QMARK_(x)) && (cljs.core.vector_QMARK_(termcat.term.tt(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(termcat.term.tt(x)),cljs.core.constant$keyword$24));
});
termcat.term.delim_QMARK_ = (function delim_QMARK_(x){return (termcat.term.ldelim_QMARK_(x)) || (termcat.term.rdelim_QMARK_(x));
});
termcat.term.dt = (function dt(x){return cljs.core.second(termcat.term.tt(x));
});
termcat.term.delim_pair_QMARK_ = (function delim_pair_QMARK_(x,y){return (termcat.term.ldelim_QMARK_(x)) && (termcat.term.rdelim_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.dt(x),termcat.term.dt(y)));
});
termcat.term.fragment_QMARK_ = (function fragment_QMARK_(x){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),termcat.term.Fragment);
});
termcat.term.block_QMARK_ = (function block_QMARK_(x){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),termcat.term.Block);
});
termcat.term.token = (function() {
var token = null;
var token__1 = (function (tag){return token.cljs$core$IFn$_invoke$arity$2(tag,null);
});
var token__2 = (function (tag,payload){return (new termcat.term.Token(tag,payload));
});
token = function(tag,payload){
switch(arguments.length){
case 1:
return token__1.call(this,tag);
case 2:
return token__2.call(this,tag,payload);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
token.cljs$core$IFn$_invoke$arity$1 = token__1;
token.cljs$core$IFn$_invoke$arity$2 = token__2;
return token;
})()
;
termcat.term.ldelim_t = (function ldelim_t(tag){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,tag], null);
});
termcat.term.rdelim_t = (function rdelim_t(tag){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,tag], null);
});
termcat.term.ldelim = (function() {
var ldelim = null;
var ldelim__1 = (function (tag){return ldelim.cljs$core$IFn$_invoke$arity$2(tag,null);
});
var ldelim__2 = (function (tag,symb){return termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.ldelim_t(tag),symb);
});
ldelim = function(tag,symb){
switch(arguments.length){
case 1:
return ldelim__1.call(this,tag);
case 2:
return ldelim__2.call(this,tag,symb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ldelim.cljs$core$IFn$_invoke$arity$1 = ldelim__1;
ldelim.cljs$core$IFn$_invoke$arity$2 = ldelim__2;
return ldelim;
})()
;
termcat.term.rdelim = (function() {
var rdelim = null;
var rdelim__1 = (function (tag){return rdelim.cljs$core$IFn$_invoke$arity$2(tag,null);
});
var rdelim__2 = (function (tag,symb){return termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.rdelim_t(tag),symb);
});
rdelim = function(tag,symb){
switch(arguments.length){
case 1:
return rdelim__1.call(this,tag);
case 2:
return rdelim__2.call(this,tag,symb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rdelim.cljs$core$IFn$_invoke$arity$1 = rdelim__1;
rdelim.cljs$core$IFn$_invoke$arity$2 = rdelim__2;
return rdelim;
})()
;
/**
* @param {...*} var_args
*/
termcat.term.fragmentcat = (function() {
var fragmentcat = null;
var fragmentcat__1 = (function (terms){return (new termcat.term.Fragment(cljs.core.vec(terms)));
});
var fragmentcat__2 = (function() { 
var G__10484__delegate = function (x,xs){return fragmentcat.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,x,xs));
};
var G__10484 = function (x,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__10484__delegate.call(this,x,xs);};
G__10484.cljs$lang$maxFixedArity = 1;
G__10484.cljs$lang$applyTo = (function (arglist__10485){
var x = cljs.core.first(arglist__10485);
var xs = cljs.core.rest(arglist__10485);
return G__10484__delegate(x,xs);
});
G__10484.cljs$core$IFn$_invoke$arity$variadic = G__10484__delegate;
return G__10484;
})()
;
fragmentcat = function(x,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return fragmentcat__1.call(this,x);
default:
return fragmentcat__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fragmentcat.cljs$lang$maxFixedArity = 1;
fragmentcat.cljs$lang$applyTo = fragmentcat__2.cljs$lang$applyTo;
fragmentcat.cljs$core$IFn$_invoke$arity$1 = fragmentcat__1;
fragmentcat.cljs$core$IFn$_invoke$arity$variadic = fragmentcat__2.cljs$core$IFn$_invoke$arity$variadic;
return fragmentcat;
})()
;
/**
* @param {...*} var_args
*/
termcat.term.fragment = (function() { 
var fragment__delegate = function (terms){return termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(terms);
};
var fragment = function (var_args){
var terms = null;if (arguments.length > 0) {
  terms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fragment__delegate.call(this,terms);};
fragment.cljs$lang$maxFixedArity = 0;
fragment.cljs$lang$applyTo = (function (arglist__10486){
var terms = cljs.core.seq(arglist__10486);
return fragment__delegate(terms);
});
fragment.cljs$core$IFn$_invoke$arity$variadic = fragment__delegate;
return fragment;
})()
;
termcat.term.block = (function block(left,center,right){return (new termcat.term.Block(left,center,right));
});
(termcat.term.IToken["null"] = true);
(termcat.term.payload["null"] = (function (this$){return null;
}));
(termcat.term.ITerm["null"] = true);
(termcat.term.tt["null"] = (function (this$){return null;
}));
termcat.term.Token.prototype.termcat$term$IToken$ = true;
termcat.term.Token.prototype.termcat$term$IToken$payload$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.payload;
});
termcat.term.Token.prototype.termcat$term$ITerm$ = true;
termcat.term.Token.prototype.termcat$term$ITerm$tt$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.tag;
});
termcat.term.Fragment.prototype.termcat$term$IFragment$ = true;
termcat.term.Fragment.prototype.termcat$term$IFragment$ednval$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core.truth_(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.constantly(cljs.core.reduced(false)),true,clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(termcat.term.token_QMARK_),this$__$1.terms))))
{try{return cljs.reader.read_string(clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.payload,this$__$1.terms)));
}catch (e10487){var x = e10487;return null;
}} else
{return null;
}
});
termcat.term.Fragment.prototype.termcat$term$ITerm$ = true;
termcat.term.Fragment.prototype.termcat$term$ITerm$tt$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.constant$keyword$25;
});
termcat.term.Block.prototype.termcat$rewrite$IWrapped$ = true;
termcat.term.Block.prototype.termcat$rewrite$IWrapped$unwrap$arity$1 = (function (orig){var orig__$1 = this;return orig__$1.center.terms;
});
termcat.term.Block.prototype.termcat$rewrite$IWrapped$rewrap$arity$2 = (function (orig,result){var orig__$1 = this;return termcat.term.block(termcat.term.left(orig__$1),termcat.term.fragmentcat.cljs$core$IFn$_invoke$arity$1(result),termcat.term.right(orig__$1));
});
termcat.term.Block.prototype.termcat$term$IBlock$ = true;
termcat.term.Block.prototype.termcat$term$IBlock$left$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.left;
});
termcat.term.Block.prototype.termcat$term$IBlock$center$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.center;
});
termcat.term.Block.prototype.termcat$term$IBlock$right$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.right;
});
termcat.term.Block.prototype.termcat$term$ITerm$ = true;
termcat.term.Block.prototype.termcat$term$ITerm$tt$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$26,termcat.term.dt(this$__$1.left)], null);
});
