Ext.data.JsonP['Contributing_Documentation']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Contributing Documentation</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083166\" class=\"content\">\n            <h1>Contributing Documentation</h1>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-Chapters\">\n        <h2 class=\"heading \"><span>Chapters</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-Keepitsimpleandconsistent\">Keep it simple and consistent</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-GiveitaTableOfContentsandaSummary\">Give it a Table Of Contents and a Summary</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-Structureyourdocumentusingheadingsh2toh5\">Structure your document using headings h2 to h5</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-Emphasizeimportantinformationusingpanels\">Emphasize important information using panels</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-Usethecodemacroforsyntaxhighlighting\">Use the code macro for syntax highlighting</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-WritingNavigationInstructions\">Writing Navigation Instructions</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Contributing_Documentation-section-30083166_ContributingDocumentation-EmbeddingImages\">Embedding Images</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-Keepitsimpleandconsistent\">\n        <h2 class=\"heading \"><span>Keep it simple and consistent</span></h2>\n    <p>\nTry and avoid complex formatting , and keep the tone simple and easy to understand, with a minimum of jargon.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-GiveitaTableOfContentsandaSummary\">\n        <h2 class=\"heading \"><span>Give it a Table Of Contents and a Summary</span></h2>\n    <p>\nPlacing a <strong class=\" \">Table Of Contents</strong> (toc) and a <strong class=\" \">Summary</strong> right at the top of the page makes the guide much more intuitive and easy to navigate. Thus, the following codeblock should be added to every guide.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">h6. Chapters</code></div>\n<div class=\"line\"><code class=\"plain\">{toc:style=circle|minLevel=</code><code class=\"value\">2</code><code class=\"plain\">|maxLevel=</code><code class=\"value\">5</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">h2. Summary</code></div>\n<div class=\"line\"><code class=\"plain\">This guide explains...</code></div>\n<div class=\"line\"><code class=\"plain\">In </code><code class=\"keyword\">this</code><code class=\"plain\"> guide you will learn:</code></div>\n<div class=\"line\"><code class=\"plain\">* how to </code><code class=\"value\">1</code><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">* how to </code><code class=\"value\">2</code><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">* how to </code><code class=\"value\">3</code><code class=\"plain\">...</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-Structureyourdocumentusingheadingsh2toh5\">\n        <h2 class=\"heading \"><span>Structure your document using headings h2 to h5</span></h2>\n    <p>\nGiving your documents a logical structure in the form of section headings makes them easier to follow. This is done using the <tt class=\" \">h2</tt> to <tt class=\" \">h5</tt> heading macro codes, which translate to their respective HTML tags. These headings are automatically used to update the Table Of Contents, which provides an essential navigation tool for the reader.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nAs an HTML <tt class=\" \">h1</tt> tag is already used for the page title, headings within the document should range from <tt class=\" \">h2</tt> to <tt class=\" \">h5</tt>.  Macro code <tt class=\" \">h6</tt> is reserved for the <i class=\" \">Chapters</i> heading, so that it does not appear in the Table of Contents.    </p>\n    </div>\n    \n    <p>\nHence, the following headings should be used:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">h2. : This is heading </code><code class=\"value\">2</code><code class=\"plain\">, used </code><code class=\"keyword\">for</code><code class=\"plain\"> the top-level section headings</code></div>\n<div class=\"line\"><code class=\"plain\">h3. : This is heading </code><code class=\"value\">3</code><code class=\"plain\">, used </code><code class=\"keyword\">for</code><code class=\"plain\"> first sub-section headings</code></div>\n<div class=\"line\"><code class=\"plain\">h4. : This is heading </code><code class=\"value\">4</code><code class=\"plain\">, used </code><code class=\"keyword\">for</code><code class=\"plain\"> second sub-section headings</code></div>\n<div class=\"line\"><code class=\"plain\">h5. : This is heading </code><code class=\"value\">5</code><code class=\"plain\">, used </code><code class=\"keyword\">for</code><code class=\"plain\"> third sub-section headings</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-Emphasizeimportantinformationusingpanels\">\n        <h2 class=\"heading \"><span>Emphasize important information using panels</span></h2>\n    <p>\nThe <tt class=\" \">info</tt>, <tt class=\" \">note</tt>, <tt class=\" \">tip</tt> and <tt class=\" \">warning</tt> panels are great for bringing the user&apos;s attention to something outside the main flow of the text.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nA tangental point, related to the main text, that the reader may find useful    </p>\n    </div>\n    \n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nA related point that should be noted or emphasized    </p>\n    </div>\n    \n    <div class=\"confbox admonition admonition-tip aui-message success shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nA relevant suggestion that may make life easier for the user    </p>\n    </div>\n    \n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nA related issue or gotcha that the user should be aware about    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-Usethecodemacroforsyntaxhighlighting\">\n        <h2 class=\"heading \"><span>Use the code macro for syntax highlighting</span></h2>\n    <p>\nSurrounding your code with the <tt class=\" \">code</tt> macro code escapes all of the content, meaning that it will not interfere with the rest of the page. Furthermore, you can set the language used for syntax highlighting, using the argument <tt class=\" \">code:lang=JavaScript</tt>, which makes it much easier to read:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var window = Titanium.UI.createWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">window.open();</code></div>\n</div>\n</div>    <p>\nIn addition to <tt class=\" \">JavaScript</tt>, the <tt class=\" \">XML</tt>, <tt class=\" \">HTML</tt> and <tt class=\" \">SQL</tt> values are also available. If the language you wish to display is not supported, use the <tt class=\" \">code</tt> macro without any arguments, or disable syntax highlighting altogether using <tt class=\" \">code:lang=none</tt>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-WritingNavigationInstructions\">\n        <h2 class=\"heading \"><span>Writing Navigation Instructions</span></h2>\n    <p>\nWhen writing about how to navigate the Studio user interface, bold terms that refer to menu options and buttons:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\"># In Firefox, select *Extensions* (called *Add-ons* in some Firefox configurations) from the *Tools* menu to open an *Extensions* pop-up window.</code></div>\n<div class=\"line\"><code class=\"plain\"># To the right of the path </code><code class=\"keyword\">for</code><code class=\"plain\"> the *Error Log*, click the *View* button to display the Error Log.</code></div>\n</div>\n</div>    <p>\ndisplays as:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nIn Firefox, select <strong class=\" \">Extensions</strong> (called <strong class=\" \">Add-ons</strong> in some Firefox configurations) from the <strong class=\" \">Tools</strong> menu to open an <strong class=\" \">Extensions</strong> pop-up window.    </p>\n</li><li class=\" \">    <p>\nTo the right of the path for the <strong class=\" \">Error Log</strong>, click the <strong class=\" \">View</strong> button to display the Error Log.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30083166_ContributingDocumentation-EmbeddingImages\">\n        <h2 class=\"heading \"><span>Embedding Images</span></h2>\n    <p>\nWhen formatting images, you can add a little extra space to make them separate visually on the page. This is especially useful if you wish to inline an image in a bulleted list    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">* Item </code><code class=\"value\">1</code></div>\n<div class=\"line\"><code class=\"plain\">* Item </code><code class=\"value\">2</code><code class=\"plain\"> \\\\ !Screen shot </code><code class=\"value\">2011</code><code class=\"plain\">-</code><code class=\"value\">03</code><code class=\"plain\">-</code><code class=\"value\">29</code><code class=\"plain\"> at </code><code class=\"value\">8.53</code><code class=\"plain\">.</code><code class=\"value\">25</code><code class=\"plain\"> AM.png|vspace=</code><code class=\"value\">10</code><code class=\"plain\">!</code></div>\n<div class=\"line\"><code class=\"plain\">* Item </code><code class=\"value\">3</code></div>\n</div>\n</div>    <p>\nWhich results in:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nItem 1    </p>\n</li><li class=\" \">    <p>\nItem 2    </p>\n        <img src=\"images/download/attachments/30083166/Screen_shot_2011-03-29_at_8.53.25_AM.png\" alt=\"images/download/attachments/30083166/Screen_shot_2011-03-29_at_8.53.25_AM.png\" class=\"confluence-embedded-image\"/>\n        </li><li class=\" \">    <p>\nItem 3    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083166\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Contributing Documentation"});