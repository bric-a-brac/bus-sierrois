#!/usr/bin/env sh

# ! / bin/sh

# https://javascript-minifier.com/raw racheté ???!!!! ;-)
# wget ne fonctionne pas ??
# wget --post-data="input=`scripts/geo.mjs`" --output-document=scripts/geo.min.mjs https://www.toptal.com/developers/javascript-minifier/raw
# curl -X POST -s --data-urlencode 'input@scripts/geo.mjs' https://www.toptal.com/developers/javascript-minifier/raw > scripts/geo2.min.mjs

curl -X POST -s --data-urlencode 'input@scripts/history.js' https://www.toptal.com/developers/javascript-minifier/raw > scripts/history.min.js
curl -X POST -s --data-urlencode 'input@scripts/menu.js' https://www.toptal.com/developers/javascript-minifier/raw > scripts/menu.min.js

cat scripts/history.min.js newline scripts/menu.min.js > scripts/scripts.min.js



curl -X POST -s --data-urlencode 'input@styles/styles.css' https://cssminifier.com/raw > styles/styles.min.css
curl -X POST -s --data-urlencode 'input@styles/menu.css' https://cssminifier.com/raw > styles/menu.min.css
curl -X POST -s --data-urlencode 'input@styles/stops.css' https://cssminifier.com/raw > styles/stops.min.css

cat styles/styles.min.css newline styles/menu.min.css newline styles/stops.min.css > styles/bus-sierrois.min.css




nunjucks-precompile templates/stops.njk > scripts/templates.min.js



nunjucks-precompile templates/stops-dev.njk > scripts/templates-dev.min.js
