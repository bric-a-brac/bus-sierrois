(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["stops.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<ul class=\"stops\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "stops");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("stop", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t<li id=\"stop-";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\" class=\"stop\">\n\t\t<b>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name"), env.opts.autoescape);
output += "</b>\n\t\t<span id=\"stop-";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "-distance\">aa ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"distance"), env.opts.autoescape);
output += "</span>\n\t</li>\n";
;
}
}
frame = frame.pop();
output += "\n</ul>\n\n\n<!--\n<ul class=\"stops\">\n";
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "features");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("feature", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n\t<li>\n\t\t<b>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"properties")),"name"), env.opts.autoescape);
output += "</b> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_8),"geometry")),"coordinates")),0), env.opts.autoescape);
output += ", ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_8),"geometry")),"coordinates")),1), env.opts.autoescape);
output += ")\n\t</li>\n";
;
}
}
frame = frame.pop();
output += "\n</ul>\n-->\n";
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

