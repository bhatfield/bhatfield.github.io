Ext.data.JsonP['Localization']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Localization</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845663\" class=\"content\">\n            <h1>Localization</h1>\n    <p>\nDemonstrates how to use localized strings in your Alloy project.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App folder location</div>\n        \n    <p>\n<i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/localization</strong>    </p>\n    </div>\n    \n    <p>\n    </p>\n    <p>\n        <img src=\"images/download/attachments/41845663/local.png\" alt=\"images/download/attachments/41845663/local.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n            </p>\n    <p>\nThe global  <tt class=\" \">L()</tt>  function, which maps  <tt class=\" \">Titanium.Locale.getString()</tt>, can be invoked from a Alloy controller, XML view, or TSS file. Below is the sample application&apos;s main index.xml view.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">Alloy</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">Window</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- Localization via XML attribute --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;header&quot;</code><code class=\"plain\">&gt;via XML attribute:&lt;/</code><code class=\"keyword\">Label</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">text</code><code class=\"plain\">=</code><code class=\"string\">&quot;L(&apos;hello_world&apos;)&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- Localization via TSS --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;header&quot;</code><code class=\"plain\">&gt;via TSS:&lt;/</code><code class=\"keyword\">Label</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">&quot;viaTss&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- Localization via JS code in controller --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;header&quot;</code><code class=\"plain\">&gt;via controller:&lt;/</code><code class=\"keyword\">Label</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;</code><code class=\"keyword\">Label</code><code class=\"plain\"> </code><code class=\"color1\">id</code><code class=\"plain\">=</code><code class=\"string\">&quot;viaController&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/</code><code class=\"keyword\">Window</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">Alloy</code><code class=\"plain\">&gt;</code></div>\n</div>\n</div>    <p>\nNotice that in the XML view the second Label element&apos;s <tt class=\" \">text</tt> property is assigned the value <tt class=\" \">L(&apos;hello_world&apos;)</tt>. Similarly, the JavaScript controller and TSS file contain the same function call:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/index.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$.viaController.text = L(</code><code class=\"string\">&apos;hello_world&apos;</code><code class=\"plain\">);</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/styles/index.css</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">&apos;#viaTss&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">  text: L(</code><code class=\"string\">&apos;hello_world&apos;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nTo test the application with localized strings, you need to create the localized strings in the Titanium project, as described in the <a class=\"document-link \" href=\"#!/guide/Internationalization\">Internationalization</a> guide. You will also need to change the language on your device or simulator to see the results (see <a class=\"document-link \" href=\"#!/guide/Internationalization-section-29004892_Internationalization-TestingLanguages\">Internationalization - Testing Languages</a>).    </p>\n    <p>\n<strong class=\" \">To create localized strings for testing</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCreate a folder named <strong class=\" \">i18n </strong>in the root of the Titanium project folder, not the Alloy project&apos;s <strong class=\" \">app/</strong> folder).    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">i18n</strong> folder create two folders named <strong class=\" \">en</strong> and <strong class=\" \">es</strong>. These will contain localized strings for English and Spanish, respectively.    </p>\n</li><li class=\" \">    <p>\nIn the i18n/en folder, create a file named <strong class=\" \">strings.xml</strong> with the following content and save it:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;string name=</code><code class=\"string\">&quot;hello_world&quot;</code><code class=\"plain\">&gt;Hello, world!&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/resources&gt;</code></div>\n</div>\n</div>    <p>\nNote that the value of the <tt class=\" \">&lt;string&gt;</tt> element&apos;s <strong class=\" \">name</strong> attribute, hello_world, corresponds to the name passed as parameter to the <tt class=\" \">L()</tt> function in the XML, TSS, and JavaScript files.    </p>\n</li><li class=\" \">    <p>\nIn the i18n/es folder, create another strings.xml file with the following content and save it:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;resources&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;string name=</code><code class=\"string\">&quot;hello_world&quot;</code><code class=\"plain\">&gt;Hola, mundo!&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/resources&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nBuild and run the application on a device or simulator/emulator whose language setting is set to either English or Spanish. You should see proper localized language strings. Quit the application, switch the language setting on the device and run the application again. You should see the localized strings for the alternate language, as shown below.    </p>\n        <img src=\"images/download/attachments/41845663/local.png\" alt=\"images/download/attachments/41845663/local.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n        </li></ol>    <div class=\"section section-2 \" id=\"41845663_Localization-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Internationalization\">Internationalization</a>    </p>\n</li></ul>    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845663\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Localization"});