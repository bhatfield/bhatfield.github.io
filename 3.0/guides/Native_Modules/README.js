Ext.data.JsonP['Native_Modules']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Native Modules</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845669\" class=\"content\">\n            <h1>Native Modules</h1>\n    <p>\nDemonstrates using a native module in an Alloy application, in this case the Paint module provided by Appcelerator.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n        \n    <p>\n<i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/native_modules</strong>    </p>\n    </div>\n    \n    <p>\n        <img src=\"images/download/attachments/41845669/ti.paint.png\" alt=\"images/download/attachments/41845669/ti.paint.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nThe native_module sample app is configured to use the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_modules/tree/master/paint/mobile\" target=\"_blank\">P</a><a class=\"external-link external-link\" href=\"https://marketplace.appcelerator.com/apps/4977#!overview\" target=\"_blank\">aint</a><a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_modules/tree/master/paint/mobile\" target=\"_blank\"> module provided by Appcelerator. To use a module in an Alloy project, simply add it to an existing Alloy view using a <tt class=\" \">&lt;Module/&gt;</tt> element, specifying the module&apos;s ID. The element&apos;s <tt class=\" \">method</tt> parameter specifies the method that will be invoked on the module to initialize it. If no method is specified the module&apos;s <tt class=\" \">createView()</tt> method will be invoked, by default. The ti.paint module&apos;s create method is called <tt class=\" \">createPaintView()</tt>.</a>    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Module id=</code><code class=\"string\">&quot;paint&quot;</code><code class=\"plain\"> module=</code><code class=\"string\">&quot;ti.paint&quot;</code><code class=\"plain\"> method=</code><code class=\"string\">&quot;createPaintView&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nOnce you&apos;ve <a class=\"document-link unresolved\" href=\"#!/guide/Native_Modules\">imported</a> sample app, you next to need to download and install the ti.paint module, and modify the application&apos;s tiapp.xml file to include it.    </p>\n    <p>\n<strong class=\" \">Download and install the ti.paint module</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nDownload the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_modules/blob/master/paint/mobile/ios/ti.paint-iphone-1.3.zip\" target=\"_blank\">ti.paint module</a> ZIP from GitHub.    </p>\n</li><li class=\" \">    <p>\nTo manually install the module, copy the ZIP file to the root of the Titanium SDK folder (for example, <strong class=\" \">~/</strong> <strong class=\" \">Library/Application Support/Titanium</strong> on OS X). See <a class=\"document-link unresolved\" href=\"#!/guide/Native_Modules\">Module install locations</a> for other platforms.     <span style=\"color: #222222;\">\nIn Appcelerator Studio, you can also install the module by selecting     </span>\n<strong class=\" \">Help &gt; Install Mobile Module</strong> and locating the ZIP file.    </p>\n</li><li class=\" \">    <p>\nOpen the project&apos;s tiapp.xml file and insert <strong class=\" \"> <tt class=\" \">&lt;module&gt;ti.paint&lt;/module&gt;</tt> </strong> into the existing <tt class=\" \">&lt;modules&gt;&lt;/modules&gt;</tt> element, as shown below.      </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app xmlns:ti=</code><code class=\"string\">&quot;http://ti.appcelerator.org&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;module&gt;ti.paint&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/xml&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nSave tiapp.xml and build the application for iOS simulator or device. (The Paint module does not currently work on Android.)    </p>\n</li></ol>    <div class=\"section section-2 \" id=\"41845669_NativeModules-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Native_Modules\">Using Titanium Modules</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Native_Modules\">Module Element</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://marketplace.appcelerator.com/apps/4977#!overview\" target=\"_blank\">Paint Module</a>    </p>\n</li></ul>    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845669\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Native Modules"});