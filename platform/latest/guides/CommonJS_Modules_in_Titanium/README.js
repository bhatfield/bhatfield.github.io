Ext.data.JsonP['CommonJS_Modules_in_Titanium']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>CommonJS Modules in Titanium</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004791\" class=\"content\">\n            <h1>CommonJS Modules in Titanium</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-29004791_CommonJSModulesinTitanium-Native/CompiledModules\">Native/Compiled Modules</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-29004791_CommonJSModulesinTitanium-JavaScriptModules\">JavaScript Modules</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-29004791_CommonJSModulesinTitanium-AntipatternsandUnsupportedBehavior\">Antipatterns and Unsupported Behavior</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-29004791_CommonJSModulesinTitanium-StatefulModules\">Stateful Modules</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-29004791_CommonJSModulesinTitanium-GlobalVariables\">Global Variables</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"29004791_CommonJSModulesinTitanium-Synopsis\">\n        <h2 class=\"heading \"><span>Synopsis</span></h2>\n    <p>\nTitanium Mobile is moving toward the adoption of the CommonJS module specification as the way in which end users of the platform structure their JavaScript code. While CommonJS Modules are a &quot;standard&quot; <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">specification</a>, there are differences in implementation across multiple technology stacks. The aim of this specification is to delineate what is and is not supported by the Titanium Mobile implementation of this spec, starting in 1.8 and moving forward.    </p>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-Definitions\">\n        <h3 class=\"heading \"><span>Definitions</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Module</strong> - Any CommonJS-compliant module which will be consumed in a Titanium Mobile application. This can be a JavaScript file included with an application, or a native extension to Titanium which exposes a JavaScript API.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Resources</strong> - The Resources directory of a Titanium application, where the user's source code lives before any processing by our build system.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">exports</tt> - a free variable within a module, to which multiple properties may be added to create a public interface    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">module.exports</tt> - an object within a module, which may be REPLACED by an object representing the public interface to the module    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004791_CommonJSModulesinTitanium-CommonJSModuleSpecImplementation\">\n        <h2 class=\"heading \"><span>CommonJS Module Spec Implementation</span></h2>\n    <p>\nOur specific implementation of the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module Specification</a> is based on (and the early implementation on Android taken directly from) that of <a class=\"external-link external-link\" href=\"http://nodejs.org/docs/v0.6.0/api/modules.html\" target=\"_blank\">node.js</a>. While we should not consider our implementation a direct clone of node, we should favor node conventions where possible to foster reuse of modules across both environments.    </p>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-SimpleUsage\">\n        <h3 class=\"heading \"><span>Simple Usage</span></h3>\n    <p>\nIn order to use a module within Titanium, you must use the <tt class=\" \">require</tt> function, which is built in to the global scope in every JavaScript context.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">'MyModule'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\nThe string passed to <tt class=\" \">require</tt> must be resolvable to either a native/compiled module that Titanium Mobile has access to, or a JavaScript module provided in the Resources directory of the Titanium Mobile application. The <tt class=\" \">require</tt> function returns an JavaScript object, with properties, functions, and other data assigned to it which form the public interface to the module. If the module we loaded into the application above exposed a function <tt class=\" \">sayHello</tt>, which would print a name and a welcome message to the console, it would be accessed in this way:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">'MyModule'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">myModule.sayHello(</code><code class=\"string\">'Kevin'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">//console output is \"Hello Kevin!\"</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-Native/CompiledversusJavaScriptModules\">\n        <h3 class=\"heading \"><span>Native/Compiled versus JavaScript Modules</span></h3>\n    <p>\nWhen a module is required, Titanium must first determine whether or not to load a native/compiled module or a JavaScript module shipped within the Resources directory of a Titanium Mobile application. Titanium will prefer to load a native module first. The deployment and processing of native modules is beyond the scope of this specification, but at the time of this writing, native modules can be deployed globally on a developer machine, or inside a <strong class=\" \">modules</strong> directory in the top-level Titanium Mobile project directory.    </p>\n    <div class=\"section section-4 \" id=\"29004791_CommonJSModulesinTitanium-Native/CompiledModules\">\n        <h4 class=\"heading \"><span>Native/Compiled Modules</span></h4>\n    <p>\nNative/compiled modules are identified by a single string, specified within the global app configuration in tiapp.xml. Given the following configuration for a native/compiled module in tiapp.xml:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;module version=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\">&gt;ti.paypal&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/modules&gt;</code></div>\n</div>\n</div>    <p>\nand the following code within a Titanium Mobile application:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var paypal = require(</code><code class=\"string\">'ti.paypal'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\nTitanium will load the <tt class=\" \">ti.paypal</tt> native module, and will NOT attempt to look for or load a module from Resources. If a native module is not found for the string passed to <tt class=\" \">require</tt>, Titanium will look for a JavaScript module in the Resources.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004791_CommonJSModulesinTitanium-JavaScriptModules\">\n        <h4 class=\"heading \"><span>JavaScript Modules</span></h4>\n    <p>\nModules may also be loaded as JavaScript files from the Resources directory of the application. In Titanium Mobile, a JavaScript module is associated with a single JavaScript file. When the module is loaded, the JavaScript file will be evaluated and the public interface of the module will be populated.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-JavaScriptModulePathResolution\">\n        <h3 class=\"heading \"><span>JavaScript Module Path Resolution</span></h3>\n    <p>\nWhen dealing with JavaScript modules from Resources, the string passed to <tt class=\" \">require</tt> is considered to be a path to the JavaScript file, minus the &quot;.js&quot; extension. If the path string is not prefixed by a <tt class=\" \">./</tt>, <tt class=\" \">../</tt>, or similar, it is assumed that the module is being referenced relative to the Resources directory. In a Titanium project with a CommonJS module file located in <tt class=\" \">Resources/app/lib/myModule.js</tt>, that module could be loaded as such: <tt class=\" \">var myModule = require('app/lib/myModule');</tt>.    </p>\n    <p>\nSimilarly, if the path is prefixed with a <tt class=\" \">/</tt>, the module path is also resolved relative to the Resources directory. For the module above, another valid loading syntax would be <tt class=\" \">var myModule = require('/app/lib/myModule');</tt>.    </p>\n    <p>\nRelative paths may be specified as well. Assume we have modules located in the following locations:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">Resources/app/ui/SomeCustomView.js</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Resources/app/ui/widgets/SomeOtherCustomView.js</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Resources/app/lib/myModule.js</tt>    </p>\n</li></ul>    <p>\nNow assume we are writing code inside the <tt class=\" \">SomeCustomView.js</tt> module file. The following are valid <tt class=\" \">require</tt> statements:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">SomeCustomView.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">'../lib/myModule'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var SomeOtherCustomView = require(</code><code class=\"string\">'./widgets/SomeOtherCustomView'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-JavaScriptModuleComposition\">\n        <h3 class=\"heading \"><span>JavaScript Module Composition</span></h3>\n    <p>\nAs in the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module specification</a>, inside the module JavaScript file, there will be a special variable called <tt class=\" \">exports</tt> to which properties may be added for the public interface of the module.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.sayHello = function(name) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">'Hello '</code><code class=\"plain\">+name+</code><code class=\"string\">'!'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.version = </code><code class=\"value\">1.4</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.author = </code><code class=\"string\">'Don Thorp'</code><code class=\"plain\">;</code></div>\n</div>\n</div>    <p>\nAs many properties as desired can be added to the exports object.    </p>\n    <p>\nAlternately, if the module author wishes to make the exported value from the module an object of their own design and choosing, there is a non-standard (but common, as with node.js) extension to the Module specification which allows for this. The <tt class=\" \">module.exports</tt> object is available within the module file, and may be assigned any value which the developer would like to return from the <tt class=\" \">require</tt> function for their module. This is most commonly used for functions which act as object constructors. The following would be a typical use case for this:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">Person.prototype.fullName = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName+</code><code class=\"string\">' '</code><code class=\"plain\">+</code><code class=\"keyword\">this</code><code class=\"plain\">.lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person;</code></div>\n</div>\n</div>    <p>\nUsage:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Resources/app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Person = require(</code><code class=\"string\">'Person'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var don = </code><code class=\"keyword\">new</code><code class=\"plain\"> Person(</code><code class=\"string\">'Don'</code><code class=\"plain\">,</code><code class=\"string\">'Thorp'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var donsName = don.fullName(); </code><code class=\"comments\">// \"Don Thorp\"</code></div>\n</div>\n</div>    <div class=\"section section-4 \" id=\"29004791_CommonJSModulesinTitanium-AntipatternsandUnsupportedBehavior\">\n        <h4 class=\"heading \"><span>Antipatterns and Unsupported Behavior</span></h4>\n    <p>\nNo direct assignments may be made to the exports object:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">exports = Person; </code><code class=\"comments\">//THIS IS NOT OK AND PROBABLY WON'T WORK</code></div>\n</div>\n</div>    <p>\nSimilarly, you should not mix and match usage of <tt class=\" \">module.exports</tt> and <tt class=\" \">exports.*</tt>:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person; </code><code class=\"comments\">//This is okay, but...</code></div>\n<div class=\"line\"><code class=\"plain\">exports.foo = </code><code class=\"string\">'bar'</code><code class=\"plain\">; </code><code class=\"comments\">//This is discouraged - use one or the other</code></div>\n</div>\n</div>    <p>\nAlso, it is recommended that you not mix and match assignments to <tt class=\" \">module.exports</tt> and <tt class=\" \">exports</tt> - use one or the other:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.foo = </code><code class=\"string\">'bar'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports.fooToo = </code><code class=\"string\">'something else'</code><code class=\"plain\">; </code><code class=\"comments\">// Not good style - use one or the other.</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-Caching\">\n        <h3 class=\"heading \"><span>Caching</span></h3>\n    <p>\nWhen a JavaScript module is loaded, the object returned by <tt class=\" \">require</tt> should be cached by Titanium and provided again to consumers without evaluating the module's JavaScript code multiple times. If a developer thinks they want their module code evaluated multiple times, they should really be creating a module with a function that can be called multiple times. There's no valid use case for re-evaluating JavaScript in a module over and over.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-SecurityandSandboxing\">\n        <h3 class=\"heading \"><span>Security and Sandboxing</span></h3>\n    <p>\nAs in the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module specification</a>, all modules have their own private scope. Variables declared within the module file are private - anything that needs to be made public should be added to the exports object. For more information on sandboxing, refer to the CommonJS module spec.    </p>\n    <div class=\"section section-4 \" id=\"29004791_CommonJSModulesinTitanium-StatefulModules\">\n        <h4 class=\"heading \"><span>Stateful Modules</span></h4>\n    <p>\nAll modules in Titanium are created once, and then passed by reference on subsequent occasions when the module is required. Because of this, modules themselves may have state variables, which are properties of the &quot;singleton&quot; object represented by the module.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var stateful = require(</code><code class=\"string\">'statefulModule'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var score = require(</code><code class=\"string\">'scoreModule'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var window = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">  backgroundColor:</code><code class=\"string\">'white'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  fullscreen:</code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  title:</code><code class=\"string\">'Click window to score'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">window.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"The latest score is \"</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"Adding \"</code><code class=\"plain\"> + stateful.getPointStep() + </code><code class=\"string\">\" points to score...\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    score.pointsWon();</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"The latest score is \"</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"Setting points per win to 10\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    stateful.setPointStep(</code><code class=\"value\">10</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"Adding \"</code><code class=\"plain\"> + stateful.getPointStep() + </code><code class=\"string\">\" points to score...\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    score.pointsWon();</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"The latest score is \"</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"---------- Info ----------\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"stateful.getPointStep() returns: \"</code><code class=\"plain\"> + stateful.getPointStep());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"stateful.stepVal value is: \"</code><code class=\"plain\"> + stateful.stepVal); </code><code class=\"comments\">// will always return default of 5</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">\"**************************\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">  } </code><code class=\"keyword\">catch</code><code class=\"plain\">(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">\"An error has occurred: \"</code><code class=\"plain\"> + e);</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">window.open();</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">scoreModule.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var appStateful = require(</code><code class=\"string\">'statefulModule'</code><code class=\"plain\">); </code><code class=\"comments\">// a reference to the \"stateful\" variable in app.js that contains the stateful module</code></div>\n<div class=\"line\"><code class=\"plain\">var _score = </code><code class=\"value\">0</code><code class=\"plain\">; </code><code class=\"comments\">// default</code></div>\n<div class=\"line\"><code class=\"plain\">exports.pointsWon = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  _score += appStateful.getPointStep();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.pointsLost = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  _score -= appStateful.getPointStep();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.latestScore = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">return</code><code class=\"plain\"> _score;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">statefulModule.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var _stepVal = </code><code class=\"value\">5</code><code class=\"plain\">; </code><code class=\"comments\">// default</code></div>\n<div class=\"line\"><code class=\"plain\">exports.setPointStep = function(value) {</code></div>\n<div class=\"line\"><code class=\"plain\">  _stepVal = value;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.getPointStep = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">return</code><code class=\"plain\"> _stepVal;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.stepVal = _stepVal;</code></div>\n</div>\n</div>    <p>\n<strong class=\" \">NOTE:</strong> A module is created once per Titanium JavaScript context, so if additional contexts are created, new module objects will be created. For more on JavaScript contexts, <a class=\"document-link \" href=\"#!/guide/Coding_Strategies-section-29004891_CodingStrategies-Executioncontexts\">see here</a>.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004791_CommonJSModulesinTitanium-GlobalVariables\">\n        <h4 class=\"heading \"><span>Global Variables</span></h4>\n    <p>\nThere shall not be ANY global variables in a Titanium application shared across all modules. Any data a module or any objects exposed by a module require should be passed in during construction or initialization.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004791_CommonJSModulesinTitanium-JavaScriptModuleExamples\">\n        <h2 class=\"heading \"><span>JavaScript Module Examples</span></h2>\n    <p>\nHere are some examples of modules we expect developers to implement:    </p>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-UtilityLibraries\">\n        <h3 class=\"heading \"><span>Utility Libraries</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">logger.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.info = function(str) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Titanium.API.info(</code><code class=\"keyword\">new</code><code class=\"plain\"> Date()+</code><code class=\"string\">': '</code><code class=\"plain\">+str);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.debug = function(str) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Titanium.API.debug(</code><code class=\"keyword\">new</code><code class=\"plain\"> Date()+</code><code class=\"string\">': '</code><code class=\"plain\">+str);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nUsage:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var logger = require(</code><code class=\"string\">'logger'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">logger.info(</code><code class=\"string\">'some log statement I wanted with a timestamp'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-PackagesofRelatedFunctionality\">\n        <h3 class=\"heading \"><span>Packages of Related Functionality</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">geo.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function Point(x,y) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.x = x;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.y = y;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">function Line(start,end) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.start = start;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.end = end;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">Line.prototype.slope = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> (</code><code class=\"keyword\">this</code><code class=\"plain\">.end.y - </code><code class=\"keyword\">this</code><code class=\"plain\">.start.y) / (</code><code class=\"keyword\">this</code><code class=\"plain\">.end.x - </code><code class=\"keyword\">this</code><code class=\"plain\">.start.x);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">Line.prototype.yIntercept = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.start.y - (</code><code class=\"keyword\">this</code><code class=\"plain\">.slope()*</code><code class=\"keyword\">this</code><code class=\"plain\">.start.x);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">//create public interface</code></div>\n<div class=\"line\"><code class=\"plain\">exports.Point = Point;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.Line = Line;</code></div>\n</div>\n</div>    <p>\nUsage:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var geo = require(</code><code class=\"string\">'lib/geo'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var startPoint = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Point(</code><code class=\"value\">1</code><code class=\"plain\">,-</code><code class=\"value\">5</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var endPoint = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Point(</code><code class=\"value\">10</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var line = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Line(startPoint,endPoint);</code></div>\n<div class=\"line\"><code class=\"plain\">var slopeValue = line.slope();</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004791_CommonJSModulesinTitanium-InstantiableObjects\">\n        <h3 class=\"heading \"><span>Instantiable Objects</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Person.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">Person.prototype.fullName = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName+</code><code class=\"string\">' '</code><code class=\"plain\">+</code><code class=\"keyword\">this</code><code class=\"plain\">.lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person;</code></div>\n</div>\n</div>    <p>\nUsage:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Person = require(</code><code class=\"string\">'Person'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var don = </code><code class=\"keyword\">new</code><code class=\"plain\"> Person(</code><code class=\"string\">'Don'</code><code class=\"plain\">,</code><code class=\"string\">'Thorp'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var donsName = don.fullName(); </code><code class=\"comments\">// \"Don Thorp\"</code></div>\n</div>\n</div>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004791\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"CommonJS Modules in Titanium"});