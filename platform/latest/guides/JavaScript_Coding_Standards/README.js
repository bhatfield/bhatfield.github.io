Ext.data.JsonP['JavaScript_Coding_Standards']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>JavaScript Coding Standards</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30869180\" class=\"content\">\n            <h1>JavaScript Coding Standards</h1>\n    <div class=\"confbox panel panel\">\n            <div class=\"title\">Contents</div>\n    <ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-General\">General</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Files\">Files</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Variables\">Variables</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Functions\">Functions</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Objects\">Objects</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Modules\">Modules</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Whitespace\">Whitespace</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Braces\">Braces</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Semicolons\">Semicolons</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Loops\">Loops</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Conditionals\">Conditionals</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-DataTypes\">Data Types</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-AllowedConstructs\">Allowed Constructs</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-DisallowedConstructs\">Disallowed Constructs</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Comments\">Comments</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-Documentation\">Documentation</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/JavaScript_Coding_Standards-section-30869180_JavaScriptCodingStandards-ExceptionHandling\">Exception Handling</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-General\">\n        <h2 class=\"heading \"><span>General</span></h2>\n    <p>\nAny violation to these standards is allowed if it enhances readability.    </p>\n    <p>\nThis guide serves as the coding standard for all Appcelerator JavaScript code including the Mobile Web platform, Titanium Mobile project templates, KitchenSink, and all other sample code.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nAll variables, functions, methods, class names, and comments SHOULD be written in English.    </p>\n</li><li class=\" \">    <p>\nLine length SHOULD be limited to a &quot;screen width&quot; which can vary between 100 and 200 characters.    </p>\n</li><li class=\" \">    <p>\nBE CONSISTENT.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Files\">\n        <h2 class=\"heading \"><span>Files</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nFilenames SHOULD be all lower case if the file does not contain any instantiable objects (classes).    </p>\n</li><li class=\" \">    <p>\nFilenames SHOULD be CamelCase if the file contains an instantiable object (class).    </p>\n</li><li class=\" \">    <p>\nDirectories SHOULD be all lower case and unless the directory serves as a part of a module path (i.e. /path/to/Ti/Filesystem).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Variables\">\n        <h2 class=\"heading \"><span>Variables</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nPublic variables SHOULD be mixedCase (i.e. containerNode, firstItem, etc).    </p>\n</li><li class=\" \">    <p>\nPrivate variables SHOULD be _underscoreMixedCase (i.e. _position, _layerIdx).    </p>\n</li><li class=\" \">    <p>\nConstants SHOULD be UPPER_CASE.    </p>\n</li><li class=\" \">    <p>\nAll variables SHOULD be defined at the top of the function with a single &quot;var&quot; keyword.    </p>\n</li><li class=\" \">    <p>\nGlobal variables SHOULD be kept to a minimum to avoid naming collisions and scope lookups.    </p>\n</li><li class=\" \">    <p>\nVariables SHOULD be descriptive, but short names are acceptable in small functions.    </p>\n</li><li class=\" \">    <p>\nVariable names MUST NOT be reserved words or web browser built-in objects: window, document, etc..    </p>\n</li><li class=\" \">    <p>\nComplementary names MUST be used for complementary entities (i.e. get/set, add/remove, create/destroy, start/stop, etc).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Functions\">\n        <h2 class=\"heading \"><span>Functions</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nPublic functions and methods SHOULD be mixedCase (i.e. myFunction, doSomething, etc).    </p>\n</li><li class=\" \">    <p>\nPrivate functions and methods SHOULD be _underscoreMixedCase (i.e. _init, _destroyUI, etc).    </p>\n</li><li class=\" \">    <p>\nAnonymous functions SHOULD be named for easier debugging (names would be removed during minification).    </p>\n</li><li class=\" \">    <p>\nNested functions ARE permitted.    </p>\n</li><li class=\" \">    <p>\nClosures ARE permitted, but caution is advised to avoid memory leaks.    </p>\n</li><li class=\" \">    <p>\nMethod names SHOULD be verbs or verb phrases (i.e. getValue(), isEnabled()).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Objects\">\n        <h2 class=\"heading \"><span>Objects</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nMethods SHOULD be defined on the object's prototype, not via &quot;this&quot; in the constructor.    </p>\n</li><li class=\" \">    <p>\nArray and object properties SHOULD be initialized in the constructor, not in the prototype.    </p>\n</li><li class=\" \">    <p>\nArray and object properties MUST NOT be added to the prototype.    </p>\n</li><li class=\" \">    <p>\nProperties that are boolean-ish and default to falsey (false, null, undefined, 0) do not NEED to be defined before use.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Modules\">\n        <h2 class=\"heading \"><span>Modules</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nModules MUST follow the CommonJS modules or AMD (asynchronous module definition) specification.    </p>\n</li><li class=\" \">    <p>\nModule IDs MUST NOT start with a forward slash.    </p>\n</li><li class=\" \">    <p>\nModule IDs MAY contain periods.    </p>\n</li><li class=\" \">    <p>\nModule IDs MUST NOT be named &quot;require&quot;, &quot;exports&quot;, or &quot;module&quot;.    </p>\n</li><li class=\" \">    <p>\nModule names SHOULD NOT begin with a number.    </p>\n</li><li class=\" \">    <p>\nAMD modules SHOULD NOT provide a name to define() and let the loader automatically detect it.    </p>\n</li><li class=\" \">    <p>\nAMD modules SHOULD NOT contain more than one module definition, though it is possible.    </p>\n</li><li class=\" \">    <p>\nAMD modules MUST NOT contain more than one anonymous module definition.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Whitespace\">\n        <h2 class=\"heading \"><span>Whitespace</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nTabs (set to 4 spaces) MUST be used for indentation rather than spaces.    </p>\n</li><li class=\" \">    <p>\nBlank lines SHOULD NOT contain any tabs or spaces.    </p>\n</li><li class=\" \">    <p>\nBlank lines SHOULD be used to separate blocks of logic.    </p>\n</li><li class=\" \">    <p>\nCommas SHOULD be followed by a space.    </p>\n</li><li class=\" \">    <p>\nTernary operators (inline-ifs) SHOULD have spaces around both the ? and : operators.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">drink = (location == </code><code class=\"string\">\"scotland\"</code><code class=\"plain\">) ? </code><code class=\"string\">\"whisky\"</code><code class=\"plain\"> : </code><code class=\"string\">\"whiskey\"</code><code class=\"plain\">;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nSemi-colons in for loops SHOULD be followed by a space.    </p>\n</li><li class=\" \">    <p>\nThere SHOULD be a space around the outside of the parentheses in if, switch, catch, while, and for constructs.    </p>\n</li><li class=\" \">    <p>\nOperands and operators SHOULD be separated by spaces.    </p>\n</li><li class=\" \">    <p>\nStatements MAY be aligned wherever it improves readability.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Braces\">\n        <h2 class=\"heading \"><span>Braces</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nAll block structures including if, else, switch, try, catch, function, while, for, and so on MUST use braces around body.    </p>\n</li><li class=\" \">    <p>\nOpening braces SHOULD be at the end of the first line of the block statement.    </p>\n</li><li class=\" \">    <p>\nClosing braces SHOULD be on a separate line and indented to match indentation of the opening brace's line.    </p>\n</li></ol><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (error) {</code></div>\n<div class=\"line\"><code class=\"plain\">   crashAndBurn();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Semicolons\">\n        <h2 class=\"heading \"><span>Semicolons</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nAll lines of code MUST end with one and only one semicolon.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nA compile-time JavaScript minifier may remove semicolons to reduce file size.    </p>\n</li></ol></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Loops\">\n        <h2 class=\"heading \"><span>Loops</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nGenerally, index variables SHOULD be defined with all other variables at the top of the function.    </p>\n</li><li class=\" \">    <p>\nEmpty for and while loops SHOULD have empty braces or a semicolon at the end of the line.    </p>\n</li><li class=\" \">    <p>\nWhen looping over arrays, for loops SHOULD pre-determine the length (i.e. for (var i = 0, len = arr.length; i &lt; len; i++) {}).    </p>\n</li><li class=\" \">    <p>\nfor loops SHOULD be used instead of for-in loops when looping over arrays.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nfor-in is acceptable for looping over objects, though it is preferred to use the ECMAScript 5 Object.keys() method.    </p>\n</li></ol></li><li class=\" \">    <p>\nYou SHOULD use a for loop instead of Array.forEach().    </p>\n<ol class=\" \"><li class=\" \">    <p>\nThe overhead of calling a function for each items is significant.    </p>\n</li></ol></li><li class=\" \">    <p>\nIterator variables SHOULD be named i, j, k, etc.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Conditionals\">\n        <h2 class=\"heading \"><span>Conditionals</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nShort circuiting conditionals are acceptable (i.e. hasX &amp;&amp; doSomething()).    </p>\n</li><li class=\" \">    <p>\nThe last statements in a switch SHOULD NOT end with a break statement.    </p>\n</li><li class=\" \">    <p>\nswitch cases MAY be broken with either a break or return.    </p>\n</li><li class=\" \">    <p>\nTernary operators should be used for simple code conditions (i.e. var y = x ? 1 : 2; isEnabled() ? doSomething() : doSomethingElse();).    </p>\n</li><li class=\" \">    <p>\nUse !~ with an indexOf() to check if it contains a value.    </p>\n</li><li class=\" \">    <p>\nUse !(a&lt;b || b&lt;a) to check if two dates or arrays are equal.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-DataTypes\">\n        <h2 class=\"heading \"><span>Data Types</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nNon-boolean variables SHOULD be cast to boolean using !! or ! operators.    </p>\n</li><li class=\" \">    <p>\nNon-integer variables SHOULD be cast to integer using |0 (i.e. &quot;123.4&quot;|0 outputs 123).    </p>\n</li><li class=\" \">    <p>\nNon-string variables SHOULD be cast to strings using ''+ (i.e. ''+123 outputs &quot;123&quot;).    </p>\n</li><li class=\" \">    <p>\nMultiline strings SHOULD be broken up into separate concatenated strings instead of using backslashes at the end of lines.    </p>\n</li><li class=\" \">    <p>\nStrings SHOULD generally use single quotes, though double quotes are acceptable unless the string contains zero or one characters or contains HTML/XML/JSON codes.    </p>\n</li><li class=\" \">    <p>\nLiterals SHOULD be used instead of constructors (i.e. use [] instead of Array(), {} instead of Object(), '' instead of String()).    </p>\n</li><li class=\" \">    <p>\nObject literal keys SHOULD only use quotes if the key is a reserved word or contains a space.    </p>\n</li><li class=\" \">    <p>\nCustom object MAY have toString() methods as long as they return a string without error.    </p>\n</li><li class=\" \">    <p>\nArrays and objects SHOULD NOT have hanging commas.    </p>\n</li><li class=\" \">    <p>\nFloating point constants SHOULD be written with a digit, followed by a decimal point, and at least one decimal (i.e. 1.0).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-AllowedConstructs\">\n        <h2 class=\"heading \"><span>Allowed Constructs</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nUse built-in standard functions (i.e. string.charAt(3) instead of string[pe:3]).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-DisallowedConstructs\">\n        <h2 class=\"heading \"><span>Disallowed Constructs</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nwith statements ARE NOT permitted.    </p>\n</li><li class=\" \">    <p>\nYou SHOULD NOT modify prototypes of internal objects.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nPossible exception when trying to shim a standardized function that is missing in the given implementation.    </p>\n</li></ol></li><li class=\" \">    <p>\nYou SHOULD NOT use parenthesis when using delete, typeof, void or calling return, throw, case, in, or new.    </p>\n</li><li class=\" \">    <p>\nYou SHOULD NOT use commas at the beginning of a line; they should be at the end of the line.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Comments\">\n        <h2 class=\"heading \"><span>Comments</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nSingle line comments MUST use C++ style single-line comments, introduced by two slashes:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// my comment</code></div>\n</div>\n</div></li></ol><ol class=\" \"><li class=\" \">    <p>\nMulti-line comments MUST use C-style comments, beginning with /* and ending with */:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">/* my multi-</code></div>\n<div class=\"line\"><code class=\"comments\">line comment */</code></div>\n</div>\n</div></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-Documentation\">\n        <h2 class=\"heading \"><span>Documentation</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nCode SHOULD be documented using JSDoc annotations (<a class=\"external-link external-link\" href=\"https://github.com/jsdoc3/jsdoc\" target=\"_blank\">https://github.com/jsdoc3/jsdoc</a>).    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30869180_JavaScriptCodingStandards-ExceptionHandling\">\n        <h2 class=\"heading \"><span>Exception Handling</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\ntry/catch SHOULD be used instead of return codes for complex routines.    </p>\n</li><li class=\" \">    <p>\nThrown exceptions SHOULD use built-in exception types: a string, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCustom exceptions are acceptable as long as they define their own toString() function.    </p>\n</li></ol></li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30869180\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"JavaScript Coding Standards"});