Ext.data.JsonP['PyDev_Refactoring']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Refactoring</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083063\" class=\"content\">\n            <h1>PyDev Refactoring</h1>\n    <p>\nWell, let's see how refactoring works... and let's make it by example         <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/smile.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/smile.png\" class=\"emoticon emoticon-smile\"/>\n        </p>\n    <p>\nAs our 'base', we will use the example below:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_base.png\" alt=\"images/pydev.org/images/refactor/refactor_base.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\nFeatures:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\nKeybinding: <strong class=\" \">Alt+Shift+R</strong>    </p>\n</li><li class=\" \">    <p>\nSupports <strong class=\" \">preview</strong>    </p>\n</li><li class=\" \">    <p>\nIntegrated in the editor (but not in the package explorer, so, it can rename a module, but only through an import to that module)    </p>\n</li><li class=\" \">    <p>\nSupports <strong class=\" \">undo/redo</strong> in the workspace    </p>\n</li><li class=\" \">    <p>\nRename class    </p>\n</li><li class=\" \">    <p>\nRename method    </p>\n</li><li class=\" \">    <p>\nRename attribute    </p>\n</li><li class=\" \">    <p>\nRename imports    </p>\n</li><li class=\" \">    <p>\nRename local variable    </p>\n</li></ul>    <p>\nLet's say we want to rename our 'newVar', and call it 'renamedVar'. To do that, mark it and press <strong class=\" \">Alt+Shift+R</strong> and set the name to 'renamedVar'    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_rename1.png\" alt=\"images/pydev.org/images/refactor/refactor_rename1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/>That would give us the following result:    </p>\n    <div class=\"section section-2 \" id=\"30083063_PyDevRefactoring-\">\n        <h2 class=\"heading \"><span/></h2>\n    <p>\n<strong class=\" \">Extracting a method</strong>: Let's mark the '100+500' and press <strong class=\" \">Alt+Shift+M</strong> (alternatively, you could use a context menu: press the right button and select: refactoring &gt; Extract Method). And set the name of the new method to 'newMethod'.    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_extract_method1.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_method1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/>That would give us the following result:    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083063_PyDevRefactoring-.1\">\n        <h2 class=\"heading \"><span/></h2>\n    <p>\n<strong class=\" \">Inlining a variable</strong>: Let's say that we are still not satisfied with that, we wouldn't like that 'var' variable, so, we want to remove the reference to it and call the method directly. To do that, mark the 'var' and press <strong class=\" \">Alt+Shift+I</strong>.    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_inline1.png\" alt=\"images/pydev.org/images/refactor/refactor_inline1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/>That would give us the following result:    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083063_PyDevRefactoring-.2\">\n        <h2 class=\"heading \"><span/></h2>\n    <p>\n<strong class=\" \">Extracting a variable</strong>: Ok, it just wasn't what we wanted, so, let's make the opposite refactoring, let's extract a variable from the self.newMethod() call. Mark it and press <strong class=\" \">Alt+Shift+L</strong> and set the name to 'newVar'    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_extract_var1.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_var1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/>That would give us the following result:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/refactor/refactor_extract_var2.png\" alt=\"images/pydev.org/images/refactor/refactor_extract_var2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n        <br/>And that's it for the refactoring... hope you enjoy it.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083063\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"PyDev Refactoring"});