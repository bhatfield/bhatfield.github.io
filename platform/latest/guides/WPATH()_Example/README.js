Ext.data.JsonP['WPATH()_Example']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>WPATH() Example</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845789\" class=\"content\">\n            <h1>WPATH() Example</h1>\n    <p>\nDemonstrates how to use the WPATH() macro to easily map image and library paths to the widget folder.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/<strong class=\" \">widgets/wpath</strong>    </p>\n    </div>\n    \n    <p>\nBy default, image paths and JavaScript libraries referenced by a widget are resolved relative to the Alloy project's app/ folder, rather than to the widget folder. To easily map paths relative to the widget's root folder, wrap the specified path in the <tt class=\" \">WPATH()</tt> macro.    </p>\n    <p>\nIn the sample application, the <tt class=\" \">WPATH()</tt> macro is used in widget's TSS file and controller file.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/widgets/com.test.hellobutton/styles/widget.tss</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">\"#helloButton\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundImage: WPATH(</code><code class=\"string\">'hello.png'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    height: </code><code class=\"value\">135</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    width: </code><code class=\"value\">233</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/widgets/com.test.hellobutton/controllers/widget.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function sayHello() {</code></div>\n<div class=\"line\"><code class=\"plain\">\trequire(WPATH(</code><code class=\"string\">'hello'</code><code class=\"plain\">)).sayHello();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nYou could accomplish the same things without using <tt class=\" \">WPATH()</tt> as shown below:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">\"#helloButton\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundImage: WPATH(</code><code class=\"string\">'com.test.hellobutton/hello.png'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    height: </code><code class=\"value\">135</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    width: </code><code class=\"value\">233</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/widgets/com.test.hellobutton/controllers/widget.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function sayHello() {</code></div>\n<div class=\"line\"><code class=\"plain\">\trequire(WPATH(</code><code class=\"string\">'com.test.hellobutton/hello'</code><code class=\"plain\">)).sayHello();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845789\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"WPATH() Example"});