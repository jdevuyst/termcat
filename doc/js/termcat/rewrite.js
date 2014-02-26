// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rewrite');
goog.require('cljs.core');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
goog.require('cljs.core.match');
termcat.rewrite.IWrapped = (function (){var obj8820 = {};return obj8820;
})();
termcat.rewrite.unwrap = (function unwrap(orig){if((function (){var and__5645__auto__ = orig;if(and__5645__auto__)
{return orig.termcat$rewrite$IWrapped$unwrap$arity$1;
} else
{return and__5645__auto__;
}
})())
{return orig.termcat$rewrite$IWrapped$unwrap$arity$1(orig);
} else
{var x__6284__auto__ = (((orig == null))?null:orig);return (function (){var or__5657__auto__ = (termcat.rewrite.unwrap[goog.typeOf(x__6284__auto__)]);if(or__5657__auto__)
{return or__5657__auto__;
} else
{var or__5657__auto____$1 = (termcat.rewrite.unwrap["_"]);if(or__5657__auto____$1)
{return or__5657__auto____$1;
} else
{throw cljs.core.missing_protocol("IWrapped.unwrap",orig);
}
}
})().call(null,orig);
}
});
termcat.rewrite.rewrap = (function rewrap(orig,result){if((function (){var and__5645__auto__ = orig;if(and__5645__auto__)
{return orig.termcat$rewrite$IWrapped$rewrap$arity$2;
} else
{return and__5645__auto__;
}
})())
{return orig.termcat$rewrite$IWrapped$rewrap$arity$2(orig,result);
} else
{var x__6284__auto__ = (((orig == null))?null:orig);return (function (){var or__5657__auto__ = (termcat.rewrite.rewrap[goog.typeOf(x__6284__auto__)]);if(or__5657__auto__)
{return or__5657__auto__;
} else
{var or__5657__auto____$1 = (termcat.rewrite.rewrap["_"]);if(or__5657__auto____$1)
{return or__5657__auto____$1;
} else
{throw cljs.core.missing_protocol("IWrapped.rewrap",orig);
}
}
})().call(null,orig,result);
}
});
(termcat.rewrite.IWrapped["object"] = true);
(termcat.rewrite.unwrap["object"] = (function (orig){return orig;
}));
(termcat.rewrite.rewrap["object"] = (function (orig,result){return result;
}));
termcat.rewrite.cache = (function cache(){return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
goog.exportSymbol('termcat.rewrite.cache', termcat.rewrite.cache);
/**
* @param {...*} var_args
*/
termcat.rewrite.cache_update_BANG_ = (function() { 
var cache_update_BANG___delegate = function (f,args){return cljs.core.reset_BANG_(termcat.rewrite._BANG__STAR_cache_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.deref(termcat.rewrite._BANG__STAR_cache_STAR_),args));
};
var cache_update_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return cache_update_BANG___delegate.call(this,f,args);};
cache_update_BANG_.cljs$lang$maxFixedArity = 1;
cache_update_BANG_.cljs$lang$applyTo = (function (arglist__8821){
var f = cljs.core.first(arglist__8821);
var args = cljs.core.rest(arglist__8821);
return cache_update_BANG___delegate(f,args);
});
cache_update_BANG_.cljs$core$IFn$_invoke$arity$variadic = cache_update_BANG___delegate;
return cache_update_BANG_;
})()
;
termcat.rewrite.cache_get = (function cache_get(k){return cljs.core.deref(termcat.rewrite._BANG__STAR_cache_STAR_).call(null,k);
});
termcat.rewrite.memoize = (function memoize(f){return (function() { 
var G__8822__delegate = function (args){var temp__4090__auto__ = termcat.rewrite.cache_get(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,args], null));if(cljs.core.truth_(temp__4090__auto__))
{var result = temp__4090__auto__;return result;
} else
{var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);termcat.rewrite.cache_update_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,args], null),result], 0));
return result;
}
};
var G__8822 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8822__delegate.call(this,args);};
G__8822.cljs$lang$maxFixedArity = 0;
G__8822.cljs$lang$applyTo = (function (arglist__8823){
var args = cljs.core.seq(arglist__8823);
return G__8822__delegate(args);
});
G__8822.cljs$core$IFn$_invoke$arity$variadic = G__8822__delegate;
return G__8822;
})()
;
});
termcat.rewrite.pad_1 = (function pad_1(v){return cljs.core.cons(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,null));
});
termcat.rewrite.trim = (function() {
var trim = null;
var trim__1 = (function (v){return trim.cljs$core$IFn$_invoke$arity$3(v,0,(cljs.core.count(v) - 1));
});
var trim__3 = (function (v,lidx,ridx){while(true){
var lnil_QMARK_ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,lidx) == null);var rnil_QMARK_ = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,ridx) == null);if((lidx > ridx))
{return cljs.core.PersistentVector.EMPTY;
} else
{if((lnil_QMARK_) || (rnil_QMARK_))
{{
var G__8824 = v;
var G__8825 = ((lnil_QMARK_)?(lidx + 1):lidx);
var G__8826 = ((rnil_QMARK_)?(ridx - 1):ridx);
v = G__8824;
lidx = G__8825;
ridx = G__8826;
continue;
}
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,lidx,(ridx + 1));
} else
{return null;
}
}
}
break;
}
});
trim = function(v,lidx,ridx){
switch(arguments.length){
case 1:
return trim__1.call(this,v);
case 3:
return trim__3.call(this,v,lidx,ridx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trim.cljs$core$IFn$_invoke$arity$1 = trim__1;
trim.cljs$core$IFn$_invoke$arity$3 = trim__3;
return trim;
})()
;
termcat.rewrite.apply_rule_STAR_ = (function apply_rule_STAR_(rule,state,input){var or__5657__auto__ = (rule.cljs$core$IFn$_invoke$arity$2 ? rule.cljs$core$IFn$_invoke$arity$2(state,input) : rule.call(null,state,input));if(cljs.core.truth_(or__5657__auto__))
{return or__5657__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,input], null);
}
});
termcat.rewrite.apply_rule = termcat.rewrite.memoize((function() {
var G__8828 = null;
var G__8828__2 = (function (rule,input){return (termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$3 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$3(rule,(rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null)),input) : termcat.rewrite.apply_rule.call(null,rule,(rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null)),input));
});
var G__8828__3 = (function (rule,state,input){var vec__8827 = termcat.rewrite.apply_rule_STAR_(rule,state,termcat.rewrite.unwrap(input));var state2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827,0,null);var input2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8827,1,null);return cljs.core.with_meta(termcat.rewrite.rewrap(input,input2),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$16,state2], null));
});
G__8828 = function(rule,state,input){
switch(arguments.length){
case 2:
return G__8828__2.call(this,rule,state);
case 3:
return G__8828__3.call(this,rule,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8828;
})()
);
/**
* @param {...*} var_args
*/
termcat.rewrite.disjunction = (function() { 
var disjunction__delegate = function (orig_rules){var init_state = cljs.core.persistent_BANG_(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__8829_SHARP_){return (p1__8829_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__8829_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__8829_SHARP_.call(null));
}),orig_rules)));return (function() {
var G__8838 = null;
var G__8838__0 = (function (){return init_state;
});
var G__8838__2 = (function (orig_state,orig_input){var next_rules = orig_rules;var G__8835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_state,orig_input], null);var vec__8836 = G__8835;var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8836,0,null);var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8836,1,null);var next_rules__$1 = next_rules;var G__8835__$1 = G__8835;while(true){
var next_rules__$2 = next_rules__$1;var vec__8837 = G__8835__$1;var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,0,null);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837,1,null);if(cljs.core.empty_QMARK_(next_rules__$2))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,input__$1], null);
} else
{var result = termcat.rewrite.apply_rule_STAR_(cljs.core.first(next_rules__$2),state__$1,input__$1);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(result),input__$1)))
{return result;
} else
{{
var G__8839 = cljs.core.next(next_rules__$2);
var G__8840 = result;
next_rules__$1 = G__8839;
G__8835__$1 = G__8840;
continue;
}
}
}
break;
}
});
G__8838 = function(orig_state,orig_input){
switch(arguments.length){
case 0:
return G__8838__0.call(this);
case 2:
return G__8838__2.call(this,orig_state,orig_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8838;
})()
};
var disjunction = function (var_args){
var orig_rules = null;if (arguments.length > 0) {
  orig_rules = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return disjunction__delegate.call(this,orig_rules);};
disjunction.cljs$lang$maxFixedArity = 0;
disjunction.cljs$lang$applyTo = (function (arglist__8841){
var orig_rules = cljs.core.seq(arglist__8841);
return disjunction__delegate(orig_rules);
});
disjunction.cljs$core$IFn$_invoke$arity$variadic = disjunction__delegate;
return disjunction;
})()
;
/**
* @param {...*} var_args
*/
termcat.rewrite.sequence = (function() { 
var sequence__delegate = function (orig_rules){var init_state = cljs.core.persistent_BANG_(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__8842_SHARP_){return (p1__8842_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__8842_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__8842_SHARP_.call(null));
}),orig_rules)));return (function() {
var G__8851 = null;
var G__8851__0 = (function (){return init_state;
});
var G__8851__2 = (function (orig_state,orig_input){var next_rules = orig_rules;var G__8848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orig_state,orig_input], null);var vec__8849 = G__8848;var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8849,0,null);var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8849,1,null);var next_rules__$1 = next_rules;var G__8848__$1 = G__8848;while(true){
var next_rules__$2 = next_rules__$1;var vec__8850 = G__8848__$1;var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8850,0,null);var input__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8850,1,null);if(cljs.core.empty_QMARK_(next_rules__$2))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,input__$1], null);
} else
{{
var G__8852 = cljs.core.next(next_rules__$2);
var G__8853 = termcat.rewrite.apply_rule_STAR_(cljs.core.first(next_rules__$2),state__$1,input__$1);
next_rules__$1 = G__8852;
G__8848__$1 = G__8853;
continue;
}
}
break;
}
});
G__8851 = function(orig_state,orig_input){
switch(arguments.length){
case 0:
return G__8851__0.call(this);
case 2:
return G__8851__2.call(this,orig_state,orig_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8851;
})()
};
var sequence = function (var_args){
var orig_rules = null;if (arguments.length > 0) {
  orig_rules = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sequence__delegate.call(this,orig_rules);};
sequence.cljs$lang$maxFixedArity = 0;
sequence.cljs$lang$applyTo = (function (arglist__8854){
var orig_rules = cljs.core.seq(arglist__8854);
return sequence__delegate(orig_rules);
});
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__delegate;
return sequence;
})()
;
termcat.rewrite.fixpoint = (function fixpoint(rule){return (function() {
var G__8857 = null;
var G__8857__0 = (function (){return (rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null));
});
var G__8857__2 = (function (state,input){while(true){
var vec__8856 = termcat.rewrite.apply_rule_STAR_(rule,state,input);var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,0,null);var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8856,1,null);if((cljs.core.empty_QMARK_(new_input)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,new_input)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_state,new_input], null);
} else
{{
var G__8858 = new_state;
var G__8859 = new_input;
state = G__8858;
input = G__8859;
continue;
}
}
break;
}
});
G__8857 = function(state,input){
switch(arguments.length){
case 0:
return G__8857__0.call(this);
case 2:
return G__8857__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8857;
})()
});
termcat.rewrite.recursion = (function recursion(rule,pred){var f = (function() {
var f = null;
var f__0 = (function (){return (rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null));
});
var f__2 = (function (state,input){return termcat.rewrite.apply_rule_STAR_(rule,state,cljs.core.persistent_BANG_(clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((function (p1__8860_SHARP_){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__8860_SHARP_) : pred.call(null,p1__8860_SHARP_))))
{return (termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$2(f,p1__8860_SHARP_) : termcat.rewrite.apply_rule.call(null,f,p1__8860_SHARP_));
} else
{return p1__8860_SHARP_;
}
}),input))));
});
f = function(state,input){
switch(arguments.length){
case 0:
return f__0.call(this);
case 2:
return f__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
f.cljs$core$IFn$_invoke$arity$0 = f__0;
f.cljs$core$IFn$_invoke$arity$2 = f__2;
return f;
})()
;
return f;
});
termcat.rewrite.abstraction = (function abstraction(rule){return (function() {
var G__8861 = null;
var G__8861__0 = (function (){return new cljs.core.PersistentArrayMap.fromArray([rule,(rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null))], true, false);
});
var G__8861__2 = (function (state,input){var temp__4090__auto__ = (rule.cljs$core$IFn$_invoke$arity$2 ? rule.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,rule),input) : rule.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,rule),input));if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,rule,cljs.core.first(r)),cljs.core.second(r)], null);
} else
{return null;
}
});
G__8861 = function(state,input){
switch(arguments.length){
case 0:
return G__8861__0.call(this);
case 2:
return G__8861__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8861;
})()
});
termcat.rewrite.procedure = (function procedure(rule){return (function() {
var G__8864 = null;
var G__8864__0 = (function (){return (rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null));
});
var G__8864__2 = (function (orig_state,orig_input){var state = orig_state;var input = termcat.rewrite.pad_1(orig_input);var output = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.empty_QMARK_(input))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,termcat.rewrite.trim.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(output))], null);
} else
{var vec__8863 = termcat.rewrite.apply_rule_STAR_(rule,state,input);var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8863,0,null);var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8863,1,null);{
var G__8865 = new_state;
var G__8866 = cljs.core.next(new_input);
var G__8867 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(output,cljs.core.first(new_input));
state = G__8865;
input = G__8866;
output = G__8867;
continue;
}
}
break;
}
});
G__8864 = function(orig_state,orig_input){
switch(arguments.length){
case 0:
return G__8864__0.call(this);
case 2:
return G__8864__2.call(this,orig_state,orig_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8864;
})()
});
termcat.rewrite.lexical_scope = (function() {
var lexical_scope = null;
var lexical_scope__1 = (function (prev_level_state){return prev_level_state;
});
var lexical_scope__2 = (function (left_state,returned_state){return left_state;
});
lexical_scope = function(left_state,returned_state){
switch(arguments.length){
case 1:
return lexical_scope__1.call(this,left_state);
case 2:
return lexical_scope__2.call(this,left_state,returned_state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lexical_scope.cljs$core$IFn$_invoke$arity$1 = lexical_scope__1;
lexical_scope.cljs$core$IFn$_invoke$arity$2 = lexical_scope__2;
return lexical_scope;
})()
;
termcat.rewrite.flat_scope = (function() {
var flat_scope = null;
var flat_scope__1 = (function (prev_level_state){return prev_level_state;
});
var flat_scope__2 = (function (left_state,returned_state){return returned_state;
});
flat_scope = function(left_state,returned_state){
switch(arguments.length){
case 1:
return flat_scope__1.call(this,left_state);
case 2:
return flat_scope__2.call(this,left_state,returned_state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flat_scope.cljs$core$IFn$_invoke$arity$1 = flat_scope__1;
flat_scope.cljs$core$IFn$_invoke$arity$2 = flat_scope__2;
return flat_scope;
})()
;
termcat.rewrite.recursive_procedure = (function recursive_procedure(rule,pred,scope){var f = (function() {
var f = null;
var f__0 = (function (){return (rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null));
});
var f__2 = (function (orig_state,orig_input){var state = orig_state;var input = termcat.rewrite.pad_1(orig_input);var output = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.empty_QMARK_(input))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,termcat.rewrite.trim.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(output))], null);
} else
{var el1 = cljs.core.first(input);var input__$1 = (cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(el1) : pred.call(null,el1)))?cljs.core.cons((termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$3 ? termcat.rewrite.apply_rule.cljs$core$IFn$_invoke$arity$3(f,(scope.cljs$core$IFn$_invoke$arity$1 ? scope.cljs$core$IFn$_invoke$arity$1(state) : scope.call(null,state)),el1) : termcat.rewrite.apply_rule.call(null,f,(scope.cljs$core$IFn$_invoke$arity$1 ? scope.cljs$core$IFn$_invoke$arity$1(state) : scope.call(null,state)),el1)),cljs.core.next(input)):input);var vec__8875 = termcat.rewrite.apply_rule_STAR_(rule,state,input__$1);var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8875,0,null);var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8875,1,null);{
var G__8876 = new_state;
var G__8877 = cljs.core.next(new_input);
var G__8878 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(output,cljs.core.first(new_input));
state = G__8876;
input = G__8877;
output = G__8878;
continue;
}
}
break;
}
});
f = function(orig_state,orig_input){
switch(arguments.length){
case 0:
return f__0.call(this);
case 2:
return f__2.call(this,orig_state,orig_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
f.cljs$core$IFn$_invoke$arity$0 = f__0;
f.cljs$core$IFn$_invoke$arity$2 = f__2;
return f;
})()
;
return f;
});
termcat.rewrite.reduction = (function reduction(rule){return (function() {
var G__8879 = null;
var G__8879__0 = (function (){return (rule.cljs$core$IFn$_invoke$arity$0 ? rule.cljs$core$IFn$_invoke$arity$0() : rule.call(null));
});
var G__8879__2 = (function (state,input){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(rule,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.PersistentVector.EMPTY], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(input,null));
});
G__8879 = function(state,input){
switch(arguments.length){
case 0:
return G__8879__0.call(this);
case 2:
return G__8879__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__8879;
})()
});
