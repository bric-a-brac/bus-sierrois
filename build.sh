#!/usr/bin/env sh

# wget ne fonctionne pas ??
# wget --post-data="input=`scripts/geo.mjs`" --output-document=scripts/geo.min.mjs https://www.toptal.com/developers/javascript-minifier/raw
# curl -X POST -s --data-urlencode 'input@scripts/geo.mjs' https://www.toptal.com/developers/javascript-minifier/raw > scripts/geo2.min.mjs

#curl -X POST -s --data-urlencode 'input@scripts/history.js' https://www.toptal.com/developers/javascript-minifier/raw > scripts/history.min.js
#curl -X POST -s --data-urlencode 'input@scripts/menu.js' https://www.toptal.com/developers/javascript-minifier/raw > scripts/menu.min.js
#cat scripts/history.min.js newline scripts/menu.min.js > scripts/scripts.min.js

# CSS

curl -X POST -s --data-urlencode 'input@docs/styles/layout-mobile.css' https://cssminifier.com/raw > temp/layout-mobile.min.css
curl -X POST -s --data-urlencode 'input@docs/styles/light.css' https://cssminifier.com/raw > temp/light.min.css

cat temp/layout-mobile.min.css newline temp/light.min.css > docs/styles/styles.min.css

#nunjucks-precompile templates/stops.njk > scripts/templates.min.js
#nunjucks-precompile templates/stops-dev.njk > scripts/templates-dev.min.js
