Ext.data.JsonP['Titanium_API_Doc_Style_Guide']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium API Doc Style Guide</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"27595540\" class=\"content\">\n            <h1>Titanium API Doc Style Guide</h1>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-Guidelines\">Guidelines</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-Formatting\">Formatting</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-Links\">Links</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-InlineHTML\">Inline HTML</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-DeprecatingandRemovingAPIs\">Deprecating and Removing APIs</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide-section-27595540_TitaniumAPIDocStyleGuide-TipsandTricks\">Tips and Tricks</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nThe following style proposals are inspired by a number of sources, most notably the JavaDoc style guide in <a class=\"external-link external-link\" href=\"http://www.oracle.com/technetwork/java/javase/documentation/index-137868.html\" target=\"_blank\">How to Write Doc Comments for the Javadoc Tool</a>. The <i class=\" \">Microsoft Guide to Technical Publications</i> is also a useful reference for general documentation style questions.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-Guidelines\">\n        <h2 class=\"heading \"><span>Guidelines</span></h2>\n    <p>\nAlways use initial capital and end punctuation, even if the doc string is a fragment:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">An object describing the font properties for the label.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">an object describing the font properties for the label</tt> (avoid)    </p>\n</li></ul>    <p>\nObject and module summaries should describe the object or module. The creator method should be listed in the description, not the summary.    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">A switch control with on and off states.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">A Switch is created by the method `Titanium.UI.createSwitch.`</tt> (avoid)    </p>\n</li></ul>    <p>\nStart method summaries with an active verb:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">Pours the whisky.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">This method pours the whisky.</tt> (avoid)    </p>\n</li></ul>    <p>\nUse 3rd person declarative instead of 2nd person imperative:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">Adds a child to this view.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Add a child to this view.</tt> (avoid)    </p>\n</li></ul>    <p>\nWhen referring to the present object, use &quot;this&quot; not &quot;the.&quot;    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">Multiplies this matrix by the supplied matrix, `m1`.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Multiplies the matrix by the supplied matrix, `m1`.</tt> (avoid)    </p>\n</li></ul>    <p>\nWhen methods or properties can take a constant value, identify the set of constant values and where they are defined. If the set of possible values is small, the values can be enumerated.    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\n<tt class=\" \">Specify one of the `TEXT_ALIGNMENT` constants from &lt;Titanium.UI&gt;.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Specify one of `SERVED_ROCKS` or `SERVED_NEAT` from &lt;Titanium.Beverage&gt;.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Specify one of [pe:SERVED_ROCKS](Titanium.Beverage.SERVED_ROCKS) or [pe:SERVED_NEAT] (Titanium.Beverage.SERVED_NEAT).</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Specify using a constant from &lt;Titanium.UI&gt;.</tt>(avoid)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Specify one of `SERVED_ROCKS` or `SERVED_NEAT`.</tt> (avoid, unless the constants are defined in the same object/module)    </p>\n</li></ul>    <p>\nUse code font for keywords and names. This includes:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\nJavaScript keywords    </p>\n</li><li class=\" \">    <p>\nmethod names    </p>\n</li><li class=\" \">    <p>\nproperty names    </p>\n</li><li class=\" \">    <p>\nparameter names    </p>\n</li><li class=\" \">    <p>\nmodule and object names    </p>\n</li><li class=\" \">    <p>\nvariable names    </p>\n</li><li class=\" \">    <p>\nconstants    </p>\n</li><li class=\" \">    <p>\ncode samples<br/><br/>When used inline, use `backticks` for objects that should be in code font. (When you add inline links to Titanium types, they are automatically set in code font.) For code samples, indent the entire code sample 4 spaces to format as a Markdown code block.    </p>\n</li></ul>    <p>\nDefining a constant: Need a consistent style here. We should describe both what the constant does, and (if possible) where it's used. We don't include a special annotation for constants, but we do use a consistent style for them (ALL_CAPS). It is not necessary to include the term &quot;constant&quot; in the summary unless it makes the description more clear.    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\nsummary: <tt class=\" \">Ease-in to the animation. See &lt;Titanium.UI.Animation&gt; for a discussion of animation curves.</tt> (preferred)    </p>\n</li><li class=\" \">    <p>\nsummary: <tt class=\" \">Constant value representing an &quot;ease-in&quot; animation curve.</tt> (ok)    </p>\n</li><li class=\" \">    <p>\nsummary: <tt class=\" \">animation curve constant</tt>  (avoid)    </p>\n</li></ul>    <p>\nUsing inline links: Inline links are very useful, but excessive use detracts from readability. Use them where they add information not already supplied by the YAML markup. For example, if the return type of a method is Titanium.Blob, the description text can just use code style &ndash; `Blob` &ndash; instead of an inline link.    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>summary: Returns the image as a `Blob`.\nreturns: \n    type: Titanium.Blob</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nWhen referring to a given type multiple times in the same description, only one reference (usually the first) should be an inline link.    </p>\n    <p>\nUsing external links: Make sure that the linked content is useful. When linking to content outside of the API docs, introduce<br/>the link so users know why they should follow the link. Avoid anonymous inline links.    </p>\n    <p>\nPreferred:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>Titanium binding for an Android activity. For more information on Android activities, see the \n[Activity Reference Page](http://developer.android.com/reference/android/app/Activity.html) on the Android Developer site.</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nPreferred:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>For more information on Android Activity, see: \n\n-  [developer.android.com/reference/android/app/Activity.html](http://developer.android.com/reference/android/app/Activity.html)}} (preferred)</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nAvoid:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>Titanium binding for an an [Android Activity](http://developer.android.com/reference/android/app/Activity.html).</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-Formatting\">\n        <h2 class=\"heading \"><span>Formatting</span></h2>\n    <p>\nFor ease of reviewing pull requests on GitHub, TDoc files should be line-wrapped at 100 characters.    </p>\n    <p>\nFor legibility, vertical whitespace may be added before a YAML key that introduces a YAML array, and before each array element:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code> \n\nproperties:\n  \n  - name: backgroundColor\n    summary: Background color for this view.\n    type: String\n\n  - name: enabled\n    summary: Indicates whether the view is enabled.\n    type: Boolean</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nVertical whitespace should not be used <i class=\" \">inside</i> a YAML array element:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code> \n  # Avoid this format\n  - name: enabled                     \n\n    summary: Indicates whether the view is enabled.\n    type: Boolean</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nJSON-style arrays. Where JSON-style arrays are used (for example, in &quot;platforms:&quot; or when listing multiple types a property can hold), whitespace between items is desirable for ease of reading:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code> \nplatforms: [android, iphone, ipad]</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-Links\">\n        <h2 class=\"heading \"><span>Links</span></h2>\n    <p>\nWhen linking to guides or videos on docs.appcelerator.com from the API docs, use the full URL for the doc site, with the version replaced with `latest` and `index.html` removed from the path. When generating the JSDuck version of the docs for the doc site, these links are translated to local links. For other formats, the link will work as written. Entering the URL in a browser should redirect you to the latest version of the guide.    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code> \n[Quick Start](http://docs.appcelerator.com/titanium/latest/#!/guide/Quick_Start)</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\n    </p>\n    <p>\nDo not use the versioned link, which will get outdated, or include `index.html`, which breaks the redirection mechanism.    </p>\n    <p>\nAvoid:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code> \n[Quick Start](http://docs.appcelerator.com/titanium/2.1/index.html#!/guide/Quick_Start)\n[Quick Start](http://docs.appcelerator.com/titanium/latest/index.html#!/guide/Quick_Start)</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-InlineHTML\">\n        <h2 class=\"heading \"><span>Inline HTML</span></h2>\n    <p>\nMarkdown format allows you to use inline HTML. This is especially useful for adding tables, which Markdown doesn't support itself. When adding inline HTML:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAlways use <strong class=\" \">lowercase</strong> tag names. So use <tt class=\" \">&lt;table&gt;</tt>, <tt class=\" \">&lt;code&gt;</tt>, not <tt class=\" \">&lt;TABLE&gt;</tt>, <tt class=\" \">&lt;CODE&gt;</tt>.    </p>\n</li><li class=\" \">    <p>\nAll tags must be closed, XHTML style. So use <tt class=\" \">&lt;br /&gt;</tt>, <tt class=\" \">&lt;td&gt;A Table Cell&lt;/a&gt;</tt>.    </p>\n</li><li class=\" \">    <p>\nWhen adding an inline table, much formatting is overridden by JSDuck. Use the <tt class=\" \">doc-table</tt> CSS class to get some reasonable default formatting (<tt class=\" \">&lt;table class=&quot;doc-table&quot;&gt;</tt>).    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-DeprecatingandRemovingAPIs\">\n        <h2 class=\"heading \"><span>Deprecating and Removing APIs</span></h2>\n    <p>\nWhen deprecating an API, add the <tt class=\" \">deprecated</tt> tag. You must specify a <tt class=\" \">since</tt> version. You should specify a <tt class=\" \">notes</tt> field directing the user to the replacement API or APIs.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">deprecated:</code></div>\n<div class=\"line\"><code class=\"plain\">    since: </code><code class=\"string\">\"3.0\"</code></div>\n<div class=\"line\"><code class=\"plain\">    notes: Use [SOMETHING_ELSE](Titanium.UI.SOMETHING_ELSE) instead.</code></div>\n</div>\n</div>    <p>\nThe <tt class=\" \">removed</tt> version should <strong class=\" \">NOT</strong> be specified until the API is actually removed.    </p>\n    <p>\nWhen the API is removed, add the <tt class=\" \">removed</tt> version to the <tt class=\" \">deprecated</tt> tag. <strong class=\" \">DO NOT</strong> remove the API from the docs.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">deprecated:</code></div>\n<div class=\"line\"><code class=\"plain\">    since: </code><code class=\"string\">\"3.0\"</code></div>\n<div class=\"line\"><code class=\"plain\">    notes: Use [SOMETHING_ELSE](Titanium.UI.SOMETHING_ELSE) instead.</code></div>\n<div class=\"line\"><code class=\"plain\">    removed: </code><code class=\"string\">\"4.0\"</code></div>\n</div>\n</div>    <p>\nRemoved APIs should stay in the docs (marked as removed) for a full deprecation cycle. That is, if APIs deprecated in release A are <i class=\" \">removed</i> in release B, the APIs <i class=\" \">removed</i> in release A can be removed from the doc in release B.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"27595540_TitaniumAPIDocStyleGuide-TipsandTricks\">\n        <h2 class=\"heading \"><span>Tips and Tricks</span></h2>\n    <p>\nColon (:) characters won't pass validation in normal YAML text fields, and YAML text fields can't start with a backtick (`) character. To include one of these characters in a summary or description field, use the YAML chunking operator (|) to add free-form markdown text:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>- description: |\n      Specify one of: &lt;Titanium.Beverage.WHISKY_ISLAY&gt;, &lt;Titanium.Beverage.WHISKY_HIGHLAND&gt;, &lt;Titanium.Beverage.WHISKY_LOWLAND&gt;.\n\n- summary: |\n      `true` if the current view is awesome.</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nOptional parameters: specify optional method parameters by specifying &quot;optional: true&quot; and adding a default value.    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>parameters:\n  - name: cubes\n    summary: Number of ice cubes.\n    type: Number\n    optional: true\n    default: 0</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    <p>\nPlatform-specific parameters: TDoc (and JSCA) don't allow for a parameter to be platform-specific. If one platform adds a parameter,<br/>other platforms must accept or ignore that parameter. Describe platform limitations in the summary.    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>  - name: glass\n    summary: Glass type, one of &lt;Titanium.Beverage.GLASS_ROCKS&gt; or &lt;Titanium.Beverage.GLASS_COCKTAIL&gt;. Only used on Android.\n    optional: true\n    default: Titanium.Beverage.GLASS_ROCKS</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=27595540\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Titanium API Doc Style Guide"});