Ext.data.JsonP['Errors_While_Publishing']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Errors While Publishing</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083284\" class=\"content\">\n            <h1>Errors While Publishing</h1>\n    <div class=\"section section-2 \" id=\"30083284_ErrorsWhilePublishing-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Errors_While_Publishing-section-30083284_ErrorsWhilePublishing-PasswordsNotSavedforFTPConnections\">Passwords Not Saved for FTP Connections</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083284_ErrorsWhilePublishing-PasswordsNotSavedforFTPConnections\">\n        <h2 class=\"heading \"><span>Passwords Not Saved for FTP Connections</span></h2>\n    <p>\nIf you run into an issue where the FTP connection continues to prompt for password even after you checked &quot;Save Password&quot; option, try the following:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen <strong class=\" \">Window &gt; Preferences &gt; General &gt; Security &gt; Secure Storage</strong> preference page.    </p>\n</li><li class=\" \">    <p>\nClick on <strong class=\" \">Contents</strong> tab and select <strong class=\" \">[Default Secure Storage]</strong> node.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Delete</strong>.    </p>\n</li><li class=\" \">    <p>\nStudio will ask to restart; after restart, browse into the FTP connection again to trigger the login dialog.    </p>\n</li><li class=\" \">    <p>\nCheck &quot;Save Password&quot; option and click <strong class=\" \">OK</strong>.    </p>\n</li><li class=\" \">    <p>\nA message about password recovery for a new master password will appear, and you could choose to set up questions and answers for future password recovery.    </p>\n</li></ol>    <p>\nNow the FTP connection should no longer prompt for password after restarting Studio.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083284\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Errors While Publishing"});