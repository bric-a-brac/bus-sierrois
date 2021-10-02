(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["stops.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n<!--\n";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
output += "\n-->\n\n<ul class=\"stops\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "features");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("feature", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<li>\n\t\t<b>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"properties")),"name"), env.opts.autoescape);
output += "</b> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"geometry")),"coordinates")),0), env.opts.autoescape);
output += ", ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"geometry")),"coordinates")),1), env.opts.autoescape);
output += ")\n\t</li>\n";
;
}
}
frame = frame.pop();
output += "\n</ul>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

