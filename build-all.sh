#!/bin/sh

lein clean
lein cljx || exit 1

lein uberjar &> /dev/null # Need to compile twice. First run fails.
 
lein uberjar
