// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.tokenize');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('cljs.core.match');
termcat.rules.tokenize.letters = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 52, ["A",null,"a",null,"B",null,"b",null,"C",null,"c",null,"D",null,"d",null,"E",null,"e",null,"F",null,"f",null,"G",null,"g",null,"H",null,"h",null,"I",null,"i",null,"J",null,"j",null,"K",null,"k",null,"L",null,"l",null,"M",null,"m",null,"N",null,"n",null,"O",null,"o",null,"P",null,"p",null,"Q",null,"q",null,"R",null,"r",null,"S",null,"s",null,"T",null,"t",null,"U",null,"u",null,"V",null,"v",null,"W",null,"w",null,"X",null,"x",null,"Y",null,"y",null,"Z",null,"z",null], null), null);
termcat.rules.tokenize.letter_QMARK_ = (function letter_QMARK_(x){return cljs.core.contains_QMARK_(termcat.rules.tokenize.letters,x);
});
termcat.rules.tokenize.digit_QMARK_ = (function digit_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),x);
});
termcat.rules.tokenize.hexdigit_QMARK_ = (function hexdigit_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, ["A",null,"a",null,"B",null,"b",null,"C",null,"c",null,"D",null,"d",null,"E",null,"e",null,"0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),x);
});
termcat.rules.tokenize.escape_html = (function() {
var escape_html = null;
var escape_html__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,cljs.core.PersistentVector.EMPTY], null);
});
var escape_html__2 = (function (p__10094,tok){var vec__10157 = p__10094;var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10157,1,null);var segue = (function segue(new_stage){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$110,new_stage,cljs.core.constant$keyword$109,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(state),tok)], null),result], null);
});
var accept = (function accept(whitespace_QMARK_){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,cljs.core.PersistentVector.EMPTY], null),(function (){var r = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(termcat.term.token,cljs.core.constant$keyword$56),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(termcat.term.payload,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(state),tok))));if(cljs.core.truth_(whitespace_QMARK_))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40)),r),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40));
} else
{return cljs.core.into(result,r);
}
})()], null);
});
var reject = (function reject(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,cljs.core.PersistentVector.EMPTY], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into(result,cljs.core.constant$keyword$109.cljs$core$IFn$_invoke$arity$1(state)),tok)], null);
});
var ocr_10158 = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(state);var ocr_10159 = termcat.term.payload(tok);try{if((ocr_10158 === null))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"\\"))
{return segue(cljs.core.constant$keyword$103);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10218){if((e10218 instanceof Error))
{var e__3769__auto__ = e10218;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10218;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$103))
{return reject();
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10170){if((e10170 instanceof Error))
{var e__3769__auto__ = e10170;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{if((ocr_10158 === null))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"&"))
{return segue(cljs.core.constant$keyword$127);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10215){if((e10215 instanceof Error))
{var e__3769__auto____$1 = e10215;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10215;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$127))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$126);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10216){if((e10216 instanceof Error))
{var e__3769__auto____$1 = e10216;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10216;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$126))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$126);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10217){if((e10217 instanceof Error))
{var e__3769__auto____$1 = e10217;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10217;
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
}catch (e10171){if((e10171 instanceof Error))
{var e__3769__auto____$1 = e10171;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$127))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"#"))
{return segue(cljs.core.constant$keyword$124);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10213){if((e10213 instanceof Error))
{var e__3769__auto____$2 = e10213;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10213;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$124))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"x"))
{return segue(cljs.core.constant$keyword$125);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10214){if((e10214 instanceof Error))
{var e__3769__auto____$2 = e10214;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10214;
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
}catch (e10172){if((e10172 instanceof Error))
{var e__3769__auto____$2 = e10172;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$124))
{try{if(termcat.rules.tokenize.digit_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$122);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10208){if((e10208 instanceof Error))
{var e__3769__auto____$3 = e10208;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10208;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$122))
{try{if(termcat.rules.tokenize.digit_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$122);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10209){if((e10209 instanceof Error))
{var e__3769__auto____$3 = e10209;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10209;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$125))
{try{if(termcat.rules.tokenize.hexdigit_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$123);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10210){if((e10210 instanceof Error))
{var e__3769__auto____$3 = e10210;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10210;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$123))
{try{if(termcat.rules.tokenize.hexdigit_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$123);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10211){if((e10211 instanceof Error))
{var e__3769__auto____$3 = e10211;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10211;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$126))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,";"))
{return accept(false);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10212){if((e10212 instanceof Error))
{var e__3769__auto____$3 = e10212;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10212;
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
}
}catch (e10173){if((e10173 instanceof Error))
{var e__3769__auto____$3 = e10173;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$122))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,";"))
{return accept(false);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10204){if((e10204 instanceof Error))
{var e__3769__auto____$4 = e10204;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10204;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$123))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,";"))
{return accept(false);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10205){if((e10205 instanceof Error))
{var e__3769__auto____$4 = e10205;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10205;
} else
{return null;
}
}
}} else
{if((ocr_10158 === null))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"<"))
{return segue(cljs.core.constant$keyword$121);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10206){if((e10206 instanceof Error))
{var e__3769__auto____$4 = e10206;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10206;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$121))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"/"))
{return segue(cljs.core.constant$keyword$120);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10207){if((e10207 instanceof Error))
{var e__3769__auto____$4 = e10207;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10207;
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
}catch (e10174){if((e10174 instanceof Error))
{var e__3769__auto____$4 = e10174;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$121))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$112);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10201){if((e10201 instanceof Error))
{var e__3769__auto____$5 = e10201;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10201;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$120))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$112);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10202){if((e10202 instanceof Error))
{var e__3769__auto____$5 = e10202;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10202;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$112))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$112);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10203){if((e10203 instanceof Error))
{var e__3769__auto____$5 = e10203;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10203;
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
}catch (e10175){if((e10175 instanceof Error))
{var e__3769__auto____$5 = e10175;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$112))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"-"))
{return segue(cljs.core.constant$keyword$120);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10200){if((e10200 instanceof Error))
{var e__3769__auto____$6 = e10200;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10200;
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
}catch (e10176){if((e10176 instanceof Error))
{var e__3769__auto____$6 = e10176;if((e__3769__auto____$6 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$112))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159," "))
{return segue(cljs.core.constant$keyword$119);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10197){if((e10197 instanceof Error))
{var e__3769__auto____$7 = e10197;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10197;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$119))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159," "))
{return segue(cljs.core.constant$keyword$119);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10198){if((e10198 instanceof Error))
{var e__3769__auto____$7 = e10198;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10198;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$114))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159," "))
{return segue(cljs.core.constant$keyword$119);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10199){if((e10199 instanceof Error))
{var e__3769__auto____$7 = e10199;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10199;
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
}catch (e10177){if((e10177 instanceof Error))
{var e__3769__auto____$7 = e10177;if((e__3769__auto____$7 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$119))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$117);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10194){if((e10194 instanceof Error))
{var e__3769__auto____$8 = e10194;if((e__3769__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$8;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10194;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$118))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$117);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10195){if((e10195 instanceof Error))
{var e__3769__auto____$8 = e10195;if((e__3769__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$8;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10195;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$117))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$117);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10196){if((e10196 instanceof Error))
{var e__3769__auto____$8 = e10196;if((e__3769__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$8;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10196;
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
}catch (e10178){if((e10178 instanceof Error))
{var e__3769__auto____$8 = e10178;if((e__3769__auto____$8 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$117))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"-"))
{return segue(cljs.core.constant$keyword$118);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10193){if((e10193 instanceof Error))
{var e__3769__auto____$9 = e10193;if((e__3769__auto____$9 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$9;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10193;
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
}catch (e10179){if((e10179 instanceof Error))
{var e__3769__auto____$9 = e10179;if((e__3769__auto____$9 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$117))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"="))
{return segue(cljs.core.constant$keyword$116);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10189){if((e10189 instanceof Error))
{var e__3769__auto____$10 = e10189;if((e__3769__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$10;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10189;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$116))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$113);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10190){if((e10190 instanceof Error))
{var e__3769__auto____$10 = e10190;if((e__3769__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$10;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10190;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$115))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$113);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10191){if((e10191 instanceof Error))
{var e__3769__auto____$10 = e10191;if((e__3769__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$10;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10191;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$113))
{try{if(termcat.rules.tokenize.letter_QMARK_(ocr_10159))
{return segue(cljs.core.constant$keyword$113);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10192){if((e10192 instanceof Error))
{var e__3769__auto____$10 = e10192;if((e__3769__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$10;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10192;
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
}catch (e10180){if((e10180 instanceof Error))
{var e__3769__auto____$10 = e10180;if((e__3769__auto____$10 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$113))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"-"))
{return segue(cljs.core.constant$keyword$115);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10186){if((e10186 instanceof Error))
{var e__3769__auto____$11 = e10186;if((e__3769__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$11;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10186;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$116))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"\""))
{return segue(cljs.core.constant$keyword$111);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10187){if((e10187 instanceof Error))
{var e__3769__auto____$11 = e10187;if((e__3769__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$11;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10187;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$111))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,"\""))
{return segue(cljs.core.constant$keyword$114);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10188){if((e10188 instanceof Error))
{var e__3769__auto____$11 = e10188;if((e__3769__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$11;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10188;
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
}catch (e10181){if((e10181 instanceof Error))
{var e__3769__auto____$11 = e10181;if((e__3769__auto____$11 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$111))
{return segue(cljs.core.constant$keyword$111);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$112))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,">"))
{return accept(true);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10183){if((e10183 instanceof Error))
{var e__3769__auto____$12 = e10183;if((e__3769__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$12;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10183;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$113))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,">"))
{return accept(true);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10184){if((e10184 instanceof Error))
{var e__3769__auto____$12 = e10184;if((e__3769__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$12;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10184;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10158,cljs.core.constant$keyword$114))
{try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_10159,">"))
{return accept(true);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10185){if((e10185 instanceof Error))
{var e__3769__auto____$12 = e10185;if((e__3769__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$12;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10185;
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
}catch (e10182){if((e10182 instanceof Error))
{var e__3769__auto____$12 = e10182;if((e__3769__auto____$12 === cljs.core.match.backtrack))
{return reject();
} else
{throw e__3769__auto____$12;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10182;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$11;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10181;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$10;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10180;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$9;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10179;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$8;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10178;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10177;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10176;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10175;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10174;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10173;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10172;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10171;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10170;
} else
{return null;
}
}
}});
escape_html = function(p__10094,tok){
switch(arguments.length){
case 0:
return escape_html__0.call(this);
case 2:
return escape_html__2.call(this,p__10094,tok);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
escape_html.cljs$core$IFn$_invoke$arity$0 = escape_html__0;
escape_html.cljs$core$IFn$_invoke$arity$2 = escape_html__2;
return escape_html;
})()
;
/**
* 
*/
termcat.rules.tokenize.remove_escape_tokens = termcat.rewrite.abstraction((function() {
var G__10229 = null;
var G__10229__0 = (function (){return null;
});
var G__10229__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10219 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219,2,null);var temp__4090__auto__ = (function (){var ocr_10220 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10220)) && ((cljs.core.count(ocr_10220) === 3)))
{try{var ocr_10220_1__10225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10220,1);if(cljs.core.keyword_identical_QMARK_(ocr_10220_1__10225,cljs.core.constant$keyword$103))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,termcat.term.payload(t2))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10228){if((e10228 instanceof Error))
{var e__3769__auto__ = e10228;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10228;
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
}catch (e10227){if((e10227 instanceof Error))
{var e__3769__auto__ = e10227;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10227;
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
G__10229 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10229__0.call(this);
case 2:
return G__10229__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10229;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_annotated_tokens = termcat.rewrite.abstraction((function() {
var G__10258 = null;
var G__10258__0 = (function (){return null;
});
var G__10258__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10230 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,2,null);var temp__4090__auto__ = (function (){var ocr_10231 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10231)) && ((cljs.core.count(ocr_10231) === 3)))
{try{var ocr_10231_1__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,1);if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$44))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10257){if((e10257 instanceof Error))
{var e__3769__auto__ = e10257;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10257;
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
}catch (e10246){if((e10246 instanceof Error))
{var e__3769__auto__ = e10246;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10231_1__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,1);if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$44))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$40))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$99))
{return null;
} else
{if((ocr_10231_2__10244 === null))
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
}catch (e10253){if((e10253 instanceof Error))
{var e__3769__auto____$1 = e10253;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10253;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$40))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10254){if((e10254 instanceof Error))
{var e__3769__auto____$1 = e10254;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10254;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$99))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10255){if((e10255 instanceof Error))
{var e__3769__auto____$1 = e10255;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10255;
} else
{return null;
}
}
}} else
{if((ocr_10231_1__10243 === null))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10256){if((e10256 instanceof Error))
{var e__3769__auto____$1 = e10256;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10256;
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
}catch (e10247){if((e10247 instanceof Error))
{var e__3769__auto____$1 = e10247;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10231_1__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,1);if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$44))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$104))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u27E9")], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10251){if((e10251 instanceof Error))
{var e__3769__auto____$2 = e10251;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10251;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$102))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u27E8"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10252){if((e10252 instanceof Error))
{var e__3769__auto____$2 = e10252;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10252;
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
}catch (e10248){if((e10248 instanceof Error))
{var e__3769__auto____$2 = e10248;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10231_1__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,1);if(cljs.core.keyword_identical_QMARK_(ocr_10231_1__10243,cljs.core.constant$keyword$44))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,termcat.term.payload(t2))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10249){if((e10249 instanceof Error))
{var e__3769__auto____$3 = e10249;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10231_2__10244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10231,2);if(cljs.core.keyword_identical_QMARK_(ocr_10231_2__10244,cljs.core.constant$keyword$44))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,termcat.term.payload(t1)),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10250){if((e10250 instanceof Error))
{var e__3769__auto____$4 = e10250;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10250;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10249;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10248;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10247;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10246;
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
}catch (e10245){if((e10245 instanceof Error))
{var e__3769__auto__ = e10245;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10245;
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
G__10258 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10258__0.call(this);
case 2:
return G__10258__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10258;
})()
);
/**
* 
*/
termcat.rules.tokenize.merge_tokens = termcat.rewrite.abstraction((function() {
var G__10269 = null;
var G__10269__0 = (function (){return null;
});
var G__10269__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10259 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,2,null);var temp__4090__auto__ = (function (){var ocr_10260 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10260)) && ((cljs.core.count(ocr_10260) === 3)))
{try{var ocr_10260_2__10266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10260,2);if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$7))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$40))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$44))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$31))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$60))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$35))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$97))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10260_2__10266,cljs.core.constant$keyword$56))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),termcat.term.tt(t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),((cljs.core.not(termcat.term.payload(t1)))?termcat.term.payload(t2):((cljs.core.not(termcat.term.payload(t2)))?termcat.term.payload(t1):((cljs.core.constant$keyword$6)?[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2))].join(''):null)))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(t1),cljs.core.constant$keyword$80,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(t2))))], null);
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
}
}
}
}
}
}
}
}catch (e10268){if((e10268 instanceof Error))
{var e__3769__auto__ = e10268;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10268;
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
}catch (e10267){if((e10267 instanceof Error))
{var e__3769__auto__ = e10267;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10267;
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
G__10269 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10269__0.call(this);
case 2:
return G__10269__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10269;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_magic_tokens = termcat.rewrite.abstraction((function() {
var G__10294 = null;
var G__10294__0 = (function (){return null;
});
var G__10294__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10270 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,3,null);var temp__4090__auto__ = (function (){var ocr_10271 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10271)) && ((cljs.core.count(ocr_10271) === 4)))
{try{var ocr_10271_2__10283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271,2);if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$40))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$99))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$43))
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
}catch (e10288){if((e10288 instanceof Error))
{var e__3769__auto__ = e10288;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10271_2__10283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271,2);if((cljs.core.vector_QMARK_(ocr_10271_2__10283)) && ((cljs.core.count(ocr_10271_2__10283) === 2)))
{try{var ocr_10271_2__10283_0__10285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271_2__10283,0);if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283_0__10285,cljs.core.constant$keyword$26))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283_0__10285,cljs.core.constant$keyword$23))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283_0__10285,cljs.core.constant$keyword$24))
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
}catch (e10293){if((e10293 instanceof Error))
{var e__3769__auto____$1 = e10293;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10293;
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
}catch (e10289){if((e10289 instanceof Error))
{var e__3769__auto____$1 = e10289;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10271_2__10283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271,2);if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$98))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$50))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$51))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$44))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$60))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10271_2__10283,cljs.core.constant$keyword$35))
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
}
}
}catch (e10290){if((e10290 instanceof Error))
{var e__3769__auto____$2 = e10290;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10271_1__10282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271,1);if(cljs.core.keyword_identical_QMARK_(ocr_10271_1__10282,cljs.core.constant$keyword$7))
{try{var ocr_10271_3__10284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10271,3);if(cljs.core.keyword_identical_QMARK_(ocr_10271_3__10284,cljs.core.constant$keyword$7))
{if(!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$31)) && (typeof termcat.term.payload(t2) === 'string') && ((cljs.core.count(termcat.term.payload(t2)) > 1))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(termcat.term.payload(t1)),cljs.core.str(termcat.term.payload(t2)),cljs.core.str(termcat.term.payload(t3))].join(''))], null);
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
}catch (e10292){if((e10292 instanceof Error))
{var e__3769__auto____$3 = e10292;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10292;
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
}catch (e10291){if((e10291 instanceof Error))
{var e__3769__auto____$3 = e10291;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10291;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10290;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10289;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10288;
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
}catch (e10287){if((e10287 instanceof Error))
{var e__3769__auto__ = e10287;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10287;
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
G__10294 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10294__0.call(this);
case 2:
return G__10294__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10294;
})()
);
termcat.rules.tokenize.css_length_QMARK_ = (function css_length_QMARK_(s){var and__5645__auto__ = typeof s === 'string';if(and__5645__auto__)
{return cljs.core.re_matches(/[0-9]*\.?[0-9]+(?:px|em|ex|pt)/,s);
} else
{return and__5645__auto__;
}
});
/**
* 
*/
termcat.rules.tokenize.introduce_emptyline_tokens = termcat.rewrite.abstraction((function() {
var G__10307 = null;
var G__10307__0 = (function (){return null;
});
var G__10307__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10295 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10295,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10295,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10295,2,null);var temp__4090__auto__ = (function (){var ocr_10296 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10296)) && ((cljs.core.count(ocr_10296) === 3)))
{try{var ocr_10296_1__10301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10296,1);if(cljs.core.keyword_identical_QMARK_(ocr_10296_1__10301,cljs.core.constant$keyword$43))
{try{var ocr_10296_2__10302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10296,2);if(cljs.core.keyword_identical_QMARK_(ocr_10296_2__10302,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10305){if((e10305 instanceof Error))
{var e__3769__auto__ = e10305;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10305;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10296_1__10301,cljs.core.constant$keyword$99))
{try{var ocr_10296_2__10302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10296,2);if(cljs.core.keyword_identical_QMARK_(ocr_10296_2__10302,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta(termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$43),cljs.core.meta(t1))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10306){if((e10306 instanceof Error))
{var e__3769__auto__ = e10306;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10306;
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
}catch (e10304){if((e10304 instanceof Error))
{var e__3769__auto__ = e10304;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10304;
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
}catch (e10303){if((e10303 instanceof Error))
{var e__3769__auto__ = e10303;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10303;
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
G__10307 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10307__0.call(this);
case 2:
return G__10307__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10307;
})()
);
/**
* 
*/
termcat.rules.tokenize.introduce_indent_tokens = termcat.rewrite.abstraction((function() {
var G__10342 = null;
var G__10342__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,0], null);
});
var G__10342__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10308 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10308,2,null);var temp__4090__auto__ = (function (){var ocr_10309 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10309)) && ((cljs.core.count(ocr_10309) === 3)))
{try{var ocr_10309_1__10314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10309,1);if((ocr_10309_1__10314 === null))
{var indent = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$40)) && (typeof termcat.term.payload(t2) === 'string'))?((cljs.core.count(termcat.term.payload(t2)) / 2) | 0):0);var diff = (indent - cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,indent], null)], null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10318(s__10319){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10319__$1 = s__10319;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10319__$1);if(temp__4092__auto__)
{var s__10319__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10319__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10319__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10321 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10320 = 0;while(true){
if((i__10320 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10320);cljs.core.chunk_append(b__10321,cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10343 = (i__10320 + 1);
i__10320 = G__10343;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10321),iter__10318(cljs.core.chunk_rest(s__10319__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10321),null);
}
} else
{var x = cljs.core.first(s__10319__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10318(cljs.core.rest(s__10319__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((- diff)));
})(),cljs.core.array_seq([(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10322(s__10323){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10323__$1 = s__10323;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10323__$1);if(temp__4092__auto__)
{var s__10323__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10323__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10323__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10325 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10324 = 0;while(true){
if((i__10324 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10324);cljs.core.chunk_append(b__10325,cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10344 = (i__10324 + 1);
i__10324 = G__10344;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10325),iter__10322(cljs.core.chunk_rest(s__10323__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10325),null);
}
} else
{var x = cljs.core.first(s__10323__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10322(cljs.core.rest(s__10323__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10309_1__10314,cljs.core.constant$keyword$99))
{var indent = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$40)) && (typeof termcat.term.payload(t2) === 'string'))?((cljs.core.count(termcat.term.payload(t2)) / 2) | 0):0);var diff = (indent - cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,indent], null)], null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10326(s__10327){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10327__$1 = s__10327;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10327__$1);if(temp__4092__auto__)
{var s__10327__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10327__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10327__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10329 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10328 = 0;while(true){
if((i__10328 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10328);cljs.core.chunk_append(b__10329,cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10345 = (i__10328 + 1);
i__10328 = G__10345;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10329),iter__10326(cljs.core.chunk_rest(s__10327__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10329),null);
}
} else
{var x = cljs.core.first(s__10327__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10326(cljs.core.rest(s__10327__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((- diff)));
})(),cljs.core.array_seq([(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10330(s__10331){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10331__$1 = s__10331;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10331__$1);if(temp__4092__auto__)
{var s__10331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10331__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10331__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10333 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10332 = 0;while(true){
if((i__10332 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10332);cljs.core.chunk_append(b__10333,cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10346 = (i__10332 + 1);
i__10332 = G__10346;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10333),iter__10330(cljs.core.chunk_rest(s__10331__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10333),null);
}
} else
{var x = cljs.core.first(s__10331__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10330(cljs.core.rest(s__10331__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10309_1__10314,cljs.core.constant$keyword$43))
{var indent = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$40)) && (typeof termcat.term.payload(t2) === 'string'))?((cljs.core.count(termcat.term.payload(t2)) / 2) | 0):0);var diff = (indent - cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,indent], null)], null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10334(s__10335){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10335__$1 = s__10335;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10335__$1);if(temp__4092__auto__)
{var s__10335__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10335__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10335__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10337 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10336 = 0;while(true){
if((i__10336 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10336);cljs.core.chunk_append(b__10337,cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10347 = (i__10336 + 1);
i__10336 = G__10347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10337),iter__10334(cljs.core.chunk_rest(s__10335__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10337),null);
}
} else
{var x = cljs.core.first(s__10335__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.rdelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10334(cljs.core.rest(s__10335__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((- diff)));
})(),cljs.core.array_seq([(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__6374__auto__ = ((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function iter__10338(s__10339){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10309_1__10314,ocr_10309){
return (function (){var s__10339__$1 = s__10339;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10339__$1);if(temp__4092__auto__)
{var s__10339__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__10339__$2))
{var c__6372__auto__ = cljs.core.chunk_first(s__10339__$2);var size__6373__auto__ = cljs.core.count(c__6372__auto__);var b__10341 = cljs.core.chunk_buffer(size__6373__auto__);if((function (){var i__10340 = 0;while(true){
if((i__10340 < size__6373__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6372__auto__,i__10340);cljs.core.chunk_append(b__10341,cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)));
{
var G__10348 = (i__10340 + 1);
i__10340 = G__10348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10341),iter__10338(cljs.core.chunk_rest(s__10339__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10341),null);
}
} else
{var x = cljs.core.first(s__10339__$2);return cljs.core.cons(cljs.core.with_meta(termcat.term.ldelim.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$93),cljs.core.meta(t1)),iter__10338(cljs.core.rest(s__10339__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
,null,null));
});})(indent,diff,ocr_10309_1__10314,ocr_10309))
;return iter__6374__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10317){if((e10317 instanceof Error))
{var e__3769__auto__ = e10317;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10317;
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
}catch (e10316){if((e10316 instanceof Error))
{var e__3769__auto__ = e10316;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10316;
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
G__10342 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10342__0.call(this);
case 2:
return G__10342__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10342;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__10376 = null;
var G__10376__0 = (function (){return null;
});
var G__10376__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10349 = cljs.core.cons(state__5495__auto__,cljs.core.take(2,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10349,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10349,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10349,2,null);var temp__4090__auto__ = (function (){var ocr_10350 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10350)) && ((cljs.core.count(ocr_10350) === 3)))
{try{var ocr_10350_1__10355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,1);if((cljs.core.vector_QMARK_(ocr_10350_1__10355)) && ((cljs.core.count(ocr_10350_1__10355) === 2)))
{try{var ocr_10350_1__10355_0__10357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_1__10355,0);if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355_0__10357,cljs.core.constant$keyword$23))
{try{var ocr_10350_1__10355_1__10358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_1__10355,1);if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355_1__10358,cljs.core.constant$keyword$93))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10373){if((e10373 instanceof Error))
{var e__3769__auto__ = e10373;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10373;
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
}catch (e10372){if((e10372 instanceof Error))
{var e__3769__auto__ = e10372;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10372;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355_0__10357,cljs.core.constant$keyword$24))
{try{var ocr_10350_1__10355_1__10358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_1__10355,1);if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355_1__10358,cljs.core.constant$keyword$93))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10375){if((e10375 instanceof Error))
{var e__3769__auto__ = e10375;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10375;
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
}catch (e10374){if((e10374 instanceof Error))
{var e__3769__auto__ = e10374;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10374;
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
}catch (e10371){if((e10371 instanceof Error))
{var e__3769__auto__ = e10371;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10371;
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
}catch (e10362){if((e10362 instanceof Error))
{var e__3769__auto__ = e10362;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10350_1__10355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,1);if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355,cljs.core.constant$keyword$99))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10364){if((e10364 instanceof Error))
{var e__3769__auto____$1 = e10364;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10364;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355,cljs.core.constant$keyword$43))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10365){if((e10365 instanceof Error))
{var e__3769__auto____$1 = e10365;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10365;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10350_1__10355,cljs.core.constant$keyword$40))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if((cljs.core.vector_QMARK_(ocr_10350_2__10356)) && ((cljs.core.count(ocr_10350_2__10356) === 2)))
{try{var ocr_10350_2__10356_0__10359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_2__10356,0);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356_0__10359,cljs.core.constant$keyword$23))
{try{var ocr_10350_2__10356_1__10360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_2__10356,1);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356_1__10360,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10369){if((e10369 instanceof Error))
{var e__3769__auto____$1 = e10369;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10369;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356_0__10359,cljs.core.constant$keyword$24))
{try{var ocr_10350_2__10356_1__10360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350_2__10356,1);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356_1__10360,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10370){if((e10370 instanceof Error))
{var e__3769__auto____$1 = e10370;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10370;
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
}catch (e10368){if((e10368 instanceof Error))
{var e__3769__auto____$1 = e10368;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10368;
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
}catch (e10366){if((e10366 instanceof Error))
{var e__3769__auto____$1 = e10366;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10350_2__10356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10350,2);if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10350_2__10356,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10367){if((e10367 instanceof Error))
{var e__3769__auto____$2 = e10367;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10367;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10366;
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
}catch (e10363){if((e10363 instanceof Error))
{var e__3769__auto____$1 = e10363;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10363;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10362;
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
}catch (e10361){if((e10361 instanceof Error))
{var e__3769__auto__ = e10361;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10361;
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
G__10376 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10376__0.call(this);
case 2:
return G__10376__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10376;
})()
);
termcat.rules.tokenize.item_type = (function item_type(tok){var G__10378 = termcat.term.payload(tok);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("######",G__10378))
{return cljs.core.constant$keyword$86;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#####",G__10378))
{return cljs.core.constant$keyword$87;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("####",G__10378))
{return cljs.core.constant$keyword$88;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("###",G__10378))
{return cljs.core.constant$keyword$89;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("##",G__10378))
{return cljs.core.constant$keyword$90;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__10378))
{return cljs.core.constant$keyword$91;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",G__10378))
{return cljs.core.constant$keyword$94;
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
});
/**
* 
*/
termcat.rules.tokenize.introduce_item_tokens = termcat.rewrite.abstraction((function() {
var G__10455 = null;
var G__10455__0 = (function (){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,false,cljs.core.constant$keyword$129,null,cljs.core.constant$keyword$130,null], null);
});
var G__10455__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10379 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10379,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10379,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10379,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10379,3,null);var temp__4090__auto__ = (function (){var ocr_10380 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10380)) && ((cljs.core.count(ocr_10380) === 4)))
{try{var ocr_10380_1__10393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393,cljs.core.constant$keyword$99))
{try{var ocr_10380_0__10392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,0);if((function (){var G__10450 = ocr_10380_0__10392;if(G__10450)
{var bit__6307__auto__ = (G__10450.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__10450.cljs$core$ILookup$))
{return true;
} else
{if((!G__10450.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10450);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10450);
}
})())
{try{var ocr_10380_0__10392_in_bullet__10398 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_10380_0__10392,cljs.core.constant$keyword$128,cljs.core.constant$keyword$72);if((ocr_10380_0__10392_in_bullet__10398 === true))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10453){if((e10453 instanceof Error))
{var e__3769__auto__ = e10453;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10453;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type(t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2)),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10454){if((e10454 instanceof Error))
{var e__3769__auto__ = e10454;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10454;
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
}catch (e10452){if((e10452 instanceof Error))
{var e__3769__auto__ = e10452;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10452;
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
}catch (e10451){if((e10451 instanceof Error))
{var e__3769__auto__ = e10451;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10451;
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
}catch (e10449){if((e10449 instanceof Error))
{var e__3769__auto__ = e10449;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10449;
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
}catch (e10413){if((e10413 instanceof Error))
{var e__3769__auto__ = e10413;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10380_1__10393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393,cljs.core.constant$keyword$99))
{try{var ocr_10380_0__10392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,0);if((function (){var G__10444 = ocr_10380_0__10392;if(G__10444)
{var bit__6307__auto__ = (G__10444.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__10444.cljs$core$ILookup$))
{return true;
} else
{if((!G__10444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10444);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10444);
}
})())
{try{var ocr_10380_0__10392_in_bullet__10401 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_10380_0__10392,cljs.core.constant$keyword$128,cljs.core.constant$keyword$72);if((ocr_10380_0__10392_in_bullet__10401 === true))
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
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
}catch (e10445){if((e10445 instanceof Error))
{var e__3769__auto____$1 = e10445;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10445;
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
}catch (e10443){if((e10443 instanceof Error))
{var e__3769__auto____$1 = e10443;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10443;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393,cljs.core.constant$keyword$43))
{try{var ocr_10380_0__10392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,0);if((function (){var G__10447 = ocr_10380_0__10392;if(G__10447)
{var bit__6307__auto__ = (G__10447.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__10447.cljs$core$ILookup$))
{return true;
} else
{if((!G__10447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10447);
}
})())
{try{var ocr_10380_0__10392_in_bullet__10404 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_10380_0__10392,cljs.core.constant$keyword$128,cljs.core.constant$keyword$72);if((ocr_10380_0__10392_in_bullet__10404 === true))
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
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
}catch (e10448){if((e10448 instanceof Error))
{var e__3769__auto____$1 = e10448;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10448;
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
}catch (e10446){if((e10446 instanceof Error))
{var e__3769__auto____$1 = e10446;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10446;
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
}catch (e10414){if((e10414 instanceof Error))
{var e__3769__auto____$1 = e10414;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10380_1__10393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,1);if((cljs.core.vector_QMARK_(ocr_10380_1__10393)) && ((cljs.core.count(ocr_10380_1__10393) === 2)))
{try{var ocr_10380_1__10393_0__10405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,0);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_0__10405,cljs.core.constant$keyword$24))
{try{var ocr_10380_1__10393_1__10406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_1__10406,cljs.core.constant$keyword$93))
{try{var ocr_10380_0__10392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,0);if((function (){var G__10441 = ocr_10380_0__10392;if(G__10441)
{var bit__6307__auto__ = (G__10441.cljs$lang$protocol_mask$partition0$ & 256);if((bit__6307__auto__) || (G__10441.cljs$core$ILookup$))
{return true;
} else
{if((!G__10441.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10441);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__10441);
}
})())
{try{var ocr_10380_0__10392_in_bullet__10409 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_10380_0__10392,cljs.core.constant$keyword$128,cljs.core.constant$keyword$72);if((ocr_10380_0__10392_in_bullet__10409 === true))
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
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
}catch (e10442){if((e10442 instanceof Error))
{var e__3769__auto____$2 = e10442;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10442;
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
}catch (e10440){if((e10440 instanceof Error))
{var e__3769__auto____$2 = e10440;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10440;
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
}catch (e10439){if((e10439 instanceof Error))
{var e__3769__auto____$2 = e10439;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10439;
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
}catch (e10438){if((e10438 instanceof Error))
{var e__3769__auto____$2 = e10438;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10438;
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
}catch (e10415){if((e10415 instanceof Error))
{var e__3769__auto____$2 = e10415;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10380_1__10393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,1);if((ocr_10380_1__10393 === null))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10430){if((e10430 instanceof Error))
{var e__3769__auto____$3 = e10430;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10430;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10431){if((e10431 instanceof Error))
{var e__3769__auto____$3 = e10431;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10431;
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
}catch (e10429){if((e10429 instanceof Error))
{var e__3769__auto____$3 = e10429;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10429;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393,cljs.core.constant$keyword$99))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10433){if((e10433 instanceof Error))
{var e__3769__auto____$3 = e10433;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10433;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10434){if((e10434 instanceof Error))
{var e__3769__auto____$3 = e10434;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10434;
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
}catch (e10432){if((e10432 instanceof Error))
{var e__3769__auto____$3 = e10432;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10432;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393,cljs.core.constant$keyword$43))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10436){if((e10436 instanceof Error))
{var e__3769__auto____$3 = e10436;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10436;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10437){if((e10437 instanceof Error))
{var e__3769__auto____$3 = e10437;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10437;
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
}catch (e10435){if((e10435 instanceof Error))
{var e__3769__auto____$3 = e10435;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10435;
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
}catch (e10416){if((e10416 instanceof Error))
{var e__3769__auto____$3 = e10416;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10380_1__10393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,1);if((cljs.core.vector_QMARK_(ocr_10380_1__10393)) && ((cljs.core.count(ocr_10380_1__10393) === 2)))
{try{var ocr_10380_1__10393_0__10410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,0);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_0__10410,cljs.core.constant$keyword$23))
{try{var ocr_10380_1__10393_1__10411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_1__10411,cljs.core.constant$keyword$93))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10424){if((e10424 instanceof Error))
{var e__3769__auto____$4 = e10424;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10424;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10425){if((e10425 instanceof Error))
{var e__3769__auto____$4 = e10425;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10425;
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
}catch (e10423){if((e10423 instanceof Error))
{var e__3769__auto____$4 = e10423;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10423;
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
}catch (e10422){if((e10422 instanceof Error))
{var e__3769__auto____$4 = e10422;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10422;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_0__10410,cljs.core.constant$keyword$24))
{try{var ocr_10380_2__10394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,2);if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$97))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10427){if((e10427 instanceof Error))
{var e__3769__auto____$4 = e10427;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10427;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_2__10394,cljs.core.constant$keyword$31))
{try{var ocr_10380_3__10395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380,3);if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$99))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_3__10395,cljs.core.constant$keyword$43))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10380_3__10395 === null))
{if(cljs.core.truth_((function (){var and__5645__auto__ = (function (){var or__5657__auto__ = cljs.core.complement(termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return termcat.rules.tokenize.item_type(t1);
}
})();if(cljs.core.truth_(and__5645__auto__))
{var and__5645__auto____$1 = termcat.rules.tokenize.item_type(t2);if(cljs.core.truth_(and__5645__auto____$1))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24,termcat.rules.tokenize.item_type(t2)], null));
} else
{return and__5645__auto____$1;
}
} else
{return and__5645__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$128,true,cljs.core.constant$keyword$129,termcat.rules.tokenize.item_type(t2),cljs.core.constant$keyword$130,state], null),t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23,termcat.rules.tokenize.item_type(t2)], null),termcat.term.payload(t2)),t3], null);
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
}
}
}
}catch (e10428){if((e10428 instanceof Error))
{var e__3769__auto____$4 = e10428;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10428;
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
}catch (e10426){if((e10426 instanceof Error))
{var e__3769__auto____$4 = e10426;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10426;
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
}catch (e10418){if((e10418 instanceof Error))
{var e__3769__auto____$4 = e10418;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_10380_1__10393_0__10410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,0);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_0__10410,cljs.core.constant$keyword$23))
{try{var ocr_10380_1__10393_1__10411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_1__10411,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$128,false,cljs.core.constant$keyword$130,state], null),t1,t2,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10420){if((e10420 instanceof Error))
{var e__3769__auto____$5 = e10420;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10420;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_0__10410,cljs.core.constant$keyword$24))
{try{var ocr_10380_1__10393_1__10411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10380_1__10393,1);if(cljs.core.keyword_identical_QMARK_(ocr_10380_1__10393_1__10411,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(state),t1,t2,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10421){if((e10421 instanceof Error))
{var e__3769__auto____$5 = e10421;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10421;
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
}catch (e10419){if((e10419 instanceof Error))
{var e__3769__auto____$5 = e10419;if((e__3769__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10419;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10418;
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
}catch (e10417){if((e10417 instanceof Error))
{var e__3769__auto____$4 = e10417;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10417;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10416;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10415;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10414;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10413;
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
}catch (e10412){if((e10412 instanceof Error))
{var e__3769__auto__ = e10412;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10412;
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
G__10455 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10455__0.call(this);
case 2:
return G__10455__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10455;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_percent_tokens = termcat.rewrite.abstraction((function() {
var G__10509 = null;
var G__10509__0 = (function (){return null;
});
var G__10509__2 = (function (state__5495__auto__,input__5496__auto__){var padded_input__5497__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__5496__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__10456 = cljs.core.cons(state__5495__auto__,cljs.core.take(3,padded_input__5497__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10456,3,null);var temp__4090__auto__ = (function (){var ocr_10457 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__5495__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__5497__auto__)));try{if((cljs.core.vector_QMARK_(ocr_10457)) && ((cljs.core.count(ocr_10457) === 4)))
{try{var ocr_10457_1__10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_1__10469,cljs.core.constant$keyword$98))
{try{var ocr_10457_2__10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,2);if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$98))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471,cljs.core.constant$keyword$99))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10500){if((e10500 instanceof Error))
{var e__3769__auto__ = e10500;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if((cljs.core.vector_QMARK_(ocr_10457_3__10471)) && ((cljs.core.count(ocr_10457_3__10471) === 2)))
{try{var ocr_10457_3__10471_0__10472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,0);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_0__10472,cljs.core.constant$keyword$23))
{try{var ocr_10457_3__10471_1__10473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_1__10473,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10507){if((e10507 instanceof Error))
{var e__3769__auto____$1 = e10507;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10507;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_0__10472,cljs.core.constant$keyword$24))
{try{var ocr_10457_3__10471_1__10473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_1__10473,cljs.core.constant$keyword$93))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10508){if((e10508 instanceof Error))
{var e__3769__auto____$1 = e10508;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10508;
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
}catch (e10503){if((e10503 instanceof Error))
{var e__3769__auto____$1 = e10503;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10457_3__10471_0__10472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,0);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_0__10472,cljs.core.constant$keyword$23))
{try{var ocr_10457_3__10471_1__10473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_1__10473,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10505){if((e10505 instanceof Error))
{var e__3769__auto____$2 = e10505;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10505;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_0__10472,cljs.core.constant$keyword$24))
{try{var ocr_10457_3__10471_1__10473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457_3__10471,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471_1__10473,cljs.core.constant$keyword$94))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10506){if((e10506 instanceof Error))
{var e__3769__auto____$2 = e10506;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10506;
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
}catch (e10504){if((e10504 instanceof Error))
{var e__3769__auto____$2 = e10504;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10504;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10503;
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
}catch (e10501){if((e10501 instanceof Error))
{var e__3769__auto____$1 = e10501;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if((ocr_10457_3__10471 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10502){if((e10502 instanceof Error))
{var e__3769__auto____$2 = e10502;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10502;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10501;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10500;
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
}catch (e10499){if((e10499 instanceof Error))
{var e__3769__auto__ = e10499;if((e__3769__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10499;
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
}catch (e10475){if((e10475 instanceof Error))
{var e__3769__auto__ = e10475;if((e__3769__auto__ === cljs.core.match.backtrack))
{try{var ocr_10457_1__10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_1__10469,cljs.core.constant$keyword$98))
{try{var ocr_10457_2__10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,2);if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$98))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10498){if((e10498 instanceof Error))
{var e__3769__auto____$1 = e10498;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10498;
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
}catch (e10476){if((e10476 instanceof Error))
{var e__3769__auto____$1 = e10476;if((e__3769__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10457_1__10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_1__10469,cljs.core.constant$keyword$98))
{try{var ocr_10457_2__10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,2);if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$38))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471,cljs.core.constant$keyword$7))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_(termcat.term.payload(t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span style='"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,(function (){var G__10493 = termcat.term.payload(t2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__10493))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",G__10493))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+",G__10493))
{return "margin-left: ";
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload(t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$51))?termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'> </span>"):termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10492){if((e10492 instanceof Error))
{var e__3769__auto____$2 = e10492;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10492;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$51))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471,cljs.core.constant$keyword$7))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_(termcat.term.payload(t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span style='"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,(function (){var G__10495 = termcat.term.payload(t2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__10495))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",G__10495))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+",G__10495))
{return "margin-left: ";
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload(t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$51))?termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'> </span>"):termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10494){if((e10494 instanceof Error))
{var e__3769__auto____$2 = e10494;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10494;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$31))
{try{var ocr_10457_3__10471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,3);if(cljs.core.keyword_identical_QMARK_(ocr_10457_3__10471,cljs.core.constant$keyword$7))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_(termcat.term.payload(t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span style='"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,(function (){var G__10497 = termcat.term.payload(t2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__10497))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",G__10497))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+",G__10497))
{return "margin-left: ";
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload(t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$51))?termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'> </span>"):termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10496){if((e10496 instanceof Error))
{var e__3769__auto____$2 = e10496;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10496;
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
}catch (e10491){if((e10491 instanceof Error))
{var e__3769__auto____$2 = e10491;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10491;
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
}catch (e10477){if((e10477 instanceof Error))
{var e__3769__auto____$2 = e10477;if((e__3769__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10457_1__10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_1__10469,cljs.core.constant$keyword$98))
{try{var ocr_10457_2__10470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,2);if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$60))
{var vec__10481 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$7)) && (typeof termcat.term.payload(t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.term.payload(t2)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload(t2),[cljs.core.str(termcat.term.payload(t3))].join(''),null], null));var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,0,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,1,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,2,null);var temp__4090__auto__ = (function (){var G__10482 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3",G__10482))
{return cljs.core.char$(780);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10482))
{return cljs.core.char$(776);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",G__10482))
{return cljs.core.char$(772);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10482))
{return cljs.core.char$(770);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2",G__10482))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10482))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("4",G__10482))
{return cljs.core.char$(768);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10482))
{return cljs.core.char$(768);
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(cljs.core.first(r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$35))
{var vec__10483 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$7)) && (typeof termcat.term.payload(t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.term.payload(t2)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload(t2),[cljs.core.str(termcat.term.payload(t3))].join(''),null], null));var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,0,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,1,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10483,2,null);var temp__4090__auto__ = (function (){var G__10484 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3",G__10484))
{return cljs.core.char$(780);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10484))
{return cljs.core.char$(776);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",G__10484))
{return cljs.core.char$(772);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10484))
{return cljs.core.char$(770);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2",G__10484))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10484))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("4",G__10484))
{return cljs.core.char$(768);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10484))
{return cljs.core.char$(768);
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(cljs.core.first(r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$42))
{var vec__10485 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$7)) && (typeof termcat.term.payload(t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.term.payload(t2)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload(t2),[cljs.core.str(termcat.term.payload(t3))].join(''),null], null));var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,0,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,1,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10485,2,null);var temp__4090__auto__ = (function (){var G__10486 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3",G__10486))
{return cljs.core.char$(780);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10486))
{return cljs.core.char$(776);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",G__10486))
{return cljs.core.char$(772);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10486))
{return cljs.core.char$(770);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2",G__10486))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10486))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("4",G__10486))
{return cljs.core.char$(768);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10486))
{return cljs.core.char$(768);
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(cljs.core.first(r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$50))
{var vec__10487 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$7)) && (typeof termcat.term.payload(t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.term.payload(t2)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload(t2),[cljs.core.str(termcat.term.payload(t3))].join(''),null], null));var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,0,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,1,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10487,2,null);var temp__4090__auto__ = (function (){var G__10488 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3",G__10488))
{return cljs.core.char$(780);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10488))
{return cljs.core.char$(776);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",G__10488))
{return cljs.core.char$(772);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10488))
{return cljs.core.char$(770);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2",G__10488))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10488))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("4",G__10488))
{return cljs.core.char$(768);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10488))
{return cljs.core.char$(768);
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(cljs.core.first(r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_10457_2__10470,cljs.core.constant$keyword$7))
{var vec__10489 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.tt(t2),cljs.core.constant$keyword$7)) && (typeof termcat.term.payload(t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(termcat.term.payload(t2)),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload(t2),[cljs.core.str(termcat.term.payload(t3))].join(''),null], null));var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,0,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,1,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10489,2,null);var temp__4090__auto__ = (function (){var G__10490 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3",G__10490))
{return cljs.core.char$(780);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__10490))
{return cljs.core.char$(776);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",G__10490))
{return cljs.core.char$(772);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__10490))
{return cljs.core.char$(770);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("2",G__10490))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__10490))
{return cljs.core.char$(769);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("4",G__10490))
{return cljs.core.char$(768);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__10490))
{return cljs.core.char$(768);
} else
{if(cljs.core.constant$keyword$6)
{return null;
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
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,[cljs.core.str(cljs.core.first(r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
}
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
}
}catch (e10480){if((e10480 instanceof Error))
{var e__3769__auto____$3 = e10480;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10480;
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
}catch (e10478){if((e10478 instanceof Error))
{var e__3769__auto____$3 = e10478;if((e__3769__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10457_1__10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_10457,1);if(cljs.core.keyword_identical_QMARK_(ocr_10457_1__10469,cljs.core.constant$keyword$98))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$40),t2,t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10479){if((e10479 instanceof Error))
{var e__3769__auto____$4 = e10479;if((e__3769__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__3769__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10479;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10478;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10477;
} else
{return null;
}
}
}} else
{throw e__3769__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10476;
} else
{return null;
}
}
}} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10475;
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
}catch (e10474){if((e10474 instanceof Error))
{var e__3769__auto__ = e10474;if((e__3769__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__3769__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e10474;
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
G__10509 = function(state__5495__auto__,input__5496__auto__){
switch(arguments.length){
case 0:
return G__10509__0.call(this);
case 2:
return G__10509__2.call(this,state__5495__auto__,input__5496__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10509;
})()
);
