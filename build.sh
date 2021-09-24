#!/bin/sh

# ! / usr/bin/env sh

#wget --post-data="input=`public/distance.js`" --output-document=public/distance.min.js https://javascript-minifier.com/raw

nunjucks-precompile templates/stops.njk > scripts/templates.min.js
