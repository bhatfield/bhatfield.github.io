Ext.data.JsonP['Adding_Command-Line_Options']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Adding Command-Line Options</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083262\" class=\"content\">\n            <h1>Adding Command-Line Options</h1>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options-section-30083262_AddingCommand-LineOptions-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options-section-30083262_AddingCommand-LineOptions-FindingYourINIConfigurationFile\">Finding Your INI Configuration File</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options-section-30083262_AddingCommand-LineOptions-VMargsvs.LauncherArguments\">VM args vs. Launcher Arguments</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options-section-30083262_AddingCommand-LineOptions-SpecifyingLauncherArguments\">Specifying Launcher Arguments</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options-section-30083262_AddingCommand-LineOptions-SpecifyingVMArguments\">Specifying VM Arguments</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nA number of tools and techniques require you to either pass options on the command line or edit your .ini file. This gives you instructions for both techniques.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-FindingYourINIConfigurationFile\">\n        <h2 class=\"heading \"><span>Finding Your INI Configuration File</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nLocate the INI configuration file:    </p>\n<ol class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Mac OS X</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nNavigate to the <tt class=\" \">/Applications/Appcelerator Studio</tt> folder in Finder.    </p>\n</li><li class=\" \">    <p>\nRight-click (or control-click) on <tt class=\" \">AppceleratorStudio.app</tt> and choose Show package contents.    </p>\n</li><li class=\" \">    <p>\nIn the new Finder window navigate to <tt class=\" \">Contents/MacOS</tt>.    </p>\n</li></ol></li><li class=\" \">    <p>\n<strong class=\" \">Linux</strong>: Navigate to the location of your Studio application (it is wherever you unzipped the download)    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Windows</strong>: Navigate to the location of your Studio application (likely under <tt class=\" \">C:\\Users\\username\\AppData\\Local\\Appcelerator Studio</tt>)    </p>\n</li></ol></li><li class=\" \">    <p>\nOpen <tt class=\" \">AppceleratorStudio.ini</tt>    </p>\n</li><li class=\" \">    <p>\nEdit the options as desired    </p>\n</li><li class=\" \">    <p>\nSave and close the file    </p>\n</li></ol>    <p>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nYou can follow the same procedures on Eclipse. The folder structure will be identical but the file to edit is <strong class=\" \">eclipse.ini</strong>.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-VMargsvs.LauncherArguments\">\n        <h2 class=\"heading \"><span>VM args vs. Launcher Arguments</span></h2>\n    <p>\nWhen working with command-line arguments, they are generally split into two camps: launcher arguments and VM (virtual machine) arguments. Launcher arguments are arguments that come from the following <a class=\"external-link external-link\" href=\"http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html\" target=\"_blank\">list</a>. VM arguments are arguments that will be passed to Studio or to the Java virtual machine.    </p>\n    <p>\nIn general, launcher arguments control options about how Studio starts, and some initial configuration options. VM arguments control how Studio behaves when it is running.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-SpecifyingLauncherArguments\">\n        <h2 class=\"heading \"><span>Specifying Launcher Arguments</span></h2>\n    <p>\nLauncher arguments can be passed on the command line, like so:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TitaniumStudio.exe -debug</code></div>\n</div>\n</div>    <p>\nor they can appear in the .ini file:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">-debug</code></div>\n<div class=\"line\"><code class=\"plain\">--launcher.defaultAction</code></div>\n<div class=\"line\"><code class=\"plain\">openFile</code></div>\n<div class=\"line\"><code class=\"plain\">-vmargs</code></div>\n<div class=\"line\"><code class=\"plain\">-Xms40m</code></div>\n</div>\n</div>    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nNote that launcher arguments always appear first, before the vmargs section. No matter which type of item you are specifying, generally the value goes on the <i class=\" \">next</i> line (see launcher.defaultAction above)    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083262_AddingCommand-LineOptions-SpecifyingVMArguments\">\n        <h2 class=\"heading \"><span>Specifying VM Arguments</span></h2>\n    <p>\nVirtual machine arguments may be specified in one of two ways:    </p>\n    <p>\nUse -DpropName=propValue as an argument to the Java Virtual Machine on the command line, like:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">TitaniumStudio.exe -vmargs -DpropName=propValue</code></div>\n</div>\n</div>    <p>\nSet the property in question to the desired value in the config.ini file:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">--launcher.defaultAction</code></div>\n<div class=\"line\"><code class=\"plain\">openFile</code></div>\n<div class=\"line\"><code class=\"plain\">-vmargs</code></div>\n<div class=\"line\"><code class=\"plain\">-DpropName=propValue</code></div>\n</div>\n</div>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083262\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Adding Command-Line Options"});