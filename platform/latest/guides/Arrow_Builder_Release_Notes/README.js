Ext.data.JsonP['Arrow_Builder_Release_Notes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Builder Release Notes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43299747\" class=\"content\">\n            <h1>Arrow Builder Release Notes</h1>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder1.3.13\">\n        <h2 class=\"heading \"><span>Arrow Builder 1.3.13</span></h2>\n    <p>\nArrow Builder 1.3.13 is a minor release that includes new feature, improvement and bug fixes.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-BehaviorChanges\">\n        <h3 class=\"heading \"><span>Behavior Changes</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWhen using the guided connector development, after adding a new capability, the Arrow application will stop running and output instructions on what to do next.  Previously, the Arrow application would restart, which could cause a crash.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-NewFeaturesandImprovements\">\n        <h3 class=\"heading \"><span>New Features and Improvements</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAdd ability to set descriptions for auto-generated APIs. For details, see the <i class=\" \">Model Properties</i> section in the Arrow Admin console.    </p>\n</li><li class=\" \">    <p>\nAllow Arrow client sessions to end when the browser session ends    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nFixed an issue where adding '\\n' to the description moves the content out of the table    </p>\n</li><li class=\" \">    <p>\nFixed an issue where an bizarre stack trace would outputted after restarting the Arrow project    </p>\n</li><li class=\" \">    <p>\nFixed an issue using the Photo sync images parameter with Arrow.  Use the following syntax to pass the parameter:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"string\">'photo_sizes'</code><code class=\"plain\">: {preview: </code><code class=\"string\">'120x120#'</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"string\">'photo_sync_sizes[]'</code><code class=\"plain\">: </code><code class=\"string\">'preview'</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nFixed an issue where the Arrow application now throws a 504 error code if the request takes more than 60 seconds    </p>\n</li><li class=\" \">    <p>\nFixed an issue where the MSSQL connector would throw an error on run    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder1.2.62-18September2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 1.2.62 - 18 September 2015</span></h2>\n    <p>\nArrow Builder 1.2.62 is a patch release, addressing high-priority issues from previous releases.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-NewFeatures\">\n        <h3 class=\"heading \"><span>New Features</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nCreate a Swagger Interface as part of the API documentation. For details, see <a class=\"document-link \" href=\"#!/guide/Arrow_API_Docs\">Arrow API Docs</a>.    </p>\n</li><li class=\" \">    <p>\nSupport clearing local logs in the Admin Console.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues.1\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\"p1 \">    <p>\nAPI-1013: Logs in the root directory causing server to reload    </p>\n</li><li class=\"p1 \">    <p>\nAPI-1015: Server should not restart on certain file/directory changes, such as web/public, web/views/ and package.json    </p>\n</li><li class=\"p1 \">    <p>\nAPI-1026: Cannot set model fields during a POST in a pre-block on an ArrowDB model    </p>\n</li><li class=\"p1 \">    <p>\nAPI-1027: Transaction logs still have too much unnecessary data in them    </p>\n</li><li class=\"p1 \">    <p>\nAPI-1030: Server size was not being applied using appc 5.0.0-30    </p>\n</li><li class=\"p1 \">    <p>\nAPI-1033: Disable memwatch    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder1.2.48-09September2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 1.2.48 - 09 September 2015</span></h2>\n    <p>\nArrow Builder 1.2.48 is a minor release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-NewFeaturesandImprovements.1\">\n        <h3 class=\"heading \"><span>New Features and Improvements</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAdd ability to customize the styling of the API Docs page.  For details, see the ArrowWeb tab in the Admin console and <a class=\"document-link \" href=\"#!/guide/Arrow_API_Docs\">Arrow API Docs</a>.    </p>\n</li><li class=\" \">    <p>\nHide overridden APIs in the API Docs page.    </p>\n</li><li class=\" \">    <p>\nMap missing methods, such as cookie, vary, etc. to the common Express method in the response object.    </p>\n</li><li class=\" \">    <p>\nImplement new LDAP plugin for Arrow client authentication.  For details, see <a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes-section-43302486_ArrowAuthenticationSchemes-LDAP\">Arrow Authentication Schemes: LDAP</a>.    </p>\n</li><li class=\" \">    <p>\nImprove support of loading and overriding configuration from the environment.  Prefix environment variables with <tt class=\" \">ARROW_</tt> to override the value from the configuration file.  For example, if you have <tt class=\" \">apikey</tt> defined in the configuration file, you can override the value with the environment variable <tt class=\" \">ARROW_APIKEY</tt>.    </p>\n</li><li class=\" \">    <p>\nAdd default health-check API endpoint <tt class=\" \">arrowPing.json</tt>.    </p>\n</li><li class=\" \">    <p>\nAdd ability to hide APIs in the API Docs. To hide documentation, set the <tt class=\" \">documented</tt> property to <tt class=\" \">false</tt> for Connectors, Models, APIs or Blocks.    </p>\n</li><li class=\" \">    <p>\nExposed the <tt class=\" \">connectionTimeout</tt> property in the MSSQL connector.    </p>\n</li><li class=\" \">    <p>\nAdd ability to specify the models to generate from a connector. In the connector's configuration file, set the <tt class=\" \">generateModels</tt> key to an array of model names you want to include.    </p>\n</li><li class=\" \">    <p>\nExposed the <tt class=\" \">schemaRefresh</tt> property in the SalesForce connector and added a If-Modified-Since check to update the schema only when needed.    </p>\n</li><li class=\" \">    <p>\nPrint out application version in Arrow console log during startup.    </p>\n</li><li class=\" \">    <p>\nNew guided development flow for creating an Arrow Connector.    </p>\n</li><li class=\" \">    <p>\nImproved server start time by skipping appc install when possible.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues.2\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\"p1 \">    <p>\nAPI-580: Model Data View: Tabular data layout scrolls, but Table header doesn't follow it    </p>\n</li><li class=\"p1 \">    <p>\nAPI-655: Generated API Docs source has to be manually deleted to be refreshed    </p>\n</li><li class=\"p1 \">    <p>\nAPI-738: Marketplace formatting is not right    </p>\n</li><li class=\"p1 \">    <p>\nAPI-750: actions: ['read'] set on a model still creates a PUT API endpoint    </p>\n</li><li class=\"p1 \">    <p>\nAPI-752: Multiple Instances of one connector overwrite generated models    </p>\n</li><li class=\"p1 \">    <p>\nAPI-809: Setting model actions to read includes write API    </p>\n</li><li class=\"p1 \">    <p>\nAPI-825: Unable to set 201 response with object location in custom API    </p>\n</li><li class=\"p1 \">    <p>\nAPI-837: Blocks after{Action} and after are mutually exclusive    </p>\n</li><li class=\"p1 \">    <p>\nAPI-861: Investigate if there is memory leak with registry server    </p>\n</li><li class=\"p1 \">    <p>\nAPI-896: In the Arrow admin page, modelAutogen is documented incorrectly    </p>\n</li><li class=\"p1 \">    <p>\nAPI-905: Error using two different databases with alias    </p>\n</li><li class=\"p1 \">    <p>\nAPI-910: ArrowDB: Session Collisions in Connector    </p>\n</li><li class=\"p1 \">    <p>\nAPI-927: Process signal events for shutdown aren't correctly being handled    </p>\n</li><li class=\"p1 \">    <p>\nAPI-928: Publishing with multiple servers with the same name doesn't properly pass the correct org    </p>\n</li><li class=\"p1 \">    <p>\nAPI-931: Arrow: NO show() API for ACLs    </p>\n</li><li class=\"p1 \">    <p>\nAPI-934: Creating a new model in console does not reload properly so i cannot test the API without restarting the server    </p>\n</li><li class=\"p1 \">    <p>\nAPI-949: Regression: API code examples are not laying out properly    </p>\n</li><li class=\"p1 \">    <p>\nAPI-950: Regression: Performance Log Tab now showing all the data correctly    </p>\n</li><li class=\"p1 \">    <p>\nAPI-954: Data Editor: Updating a field that is type Number results in a return type of String    </p>\n</li><li class=\"p1 \">    <p>\nAPI-956: Memory leak detected related to handling HTTP requests    </p>\n</li><li class=\"p1 \">    <p>\nAPI-960: Regression: performance log view is missing last server step    </p>\n</li><li class=\"p1 \">    <p>\nAPI-963: In preproduction, cannot create an Arrow project    </p>\n</li><li class=\"p1 \">    <p>\nAPI-966: Regression on import arrow app    </p>\n</li><li class=\"p1 \">    <p>\nAPI-968: If you update a model while your Arrow app is running locally, then the local Arrow app will not restart itself    </p>\n</li><li class=\"p1 \">    <p>\nAPI-971: After unpublish, if you try and republish, you get an error    </p>\n</li><li class=\"p1 \">    <p>\nAPI-972: Regression: hitting /api/testapi from API Doc causes exception    </p>\n</li><li class=\"p1 \">    <p>\nAPI-978: In production, cannot publish an Arrow app with 4.1.1 stack    </p>\n</li><li class=\"p1 \">    <p>\nAPI-982: If you make any API requests, then no activity will appear in the Logs tab    </p>\n</li><li class=\"p1 \">    <p>\nAPI-987: If you create a different connector alias in default.js, different errors are returned for 4.1.X stack and 5.0.0 stack    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder1.1.2-20July2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 1.1.2 - 20 July 2015</span></h2>\n    <p>\nArrow Builder 1.1.2 is a patch release, addressing high-priority issues from previous releases.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues.3\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAPI-914: After block runs on generated models before API finishes    </p>\n</li><li class=\" \">    <p>\nAPI-917: The styling of the code examples in the Admin console is skewed for both local builds and published Arrow applications.    </p>\n</li><li class=\" \">    <p>\nAPI-920: If you make a DELETE or PUT request, then &quot;TypeError: object is not a function&quot; error is returned back    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder1.1.0-08July2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 1.1.0 - 08 July 2015</span></h2>\n    <p>\nArrow Builder 1.1.0 is a feature release, including new features, improvements and bug fixes.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-BehaviorChanges.1\">\n        <h3 class=\"heading \"><span>Behavior Changes</span></h3>\n    <p>\nConnectors no longer automatically generate APIs for their models.  To automatically generate the APIs for a connector's model, add the <tt class=\" \">modelAutogen</tt> key to the connector's configuration file and set it to <tt class=\" \">true</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssuesandImprovements\">\n        <h3 class=\"heading \"><span>Fixed Issues and Improvements</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAPI-526: MySQL Connector: If you use sel/unsel in a query, null values are being returned    </p>\n</li><li class=\" \">    <p>\nAPI-556: While running locally, if you update a local model's name, then the previous auto-generated API docs do not get deleted    </p>\n</li><li class=\" \">    <p>\nAPI-600: Connector models should not generate API's automatically    </p>\n</li><li class=\" \">    <p>\nAPI-646: ArrowDB: Show an error when trying to query with $like and a wildcard prefix    </p>\n</li><li class=\" \">    <p>\nAPI-690: ArrowDB Connector: if you use the distinct endpoint with a $like query, a stack trace is thrown in the terminal    </p>\n</li><li class=\" \">    <p>\nAPI-803: Conflict with auto-generated &quot;/api/user/:id&quot; API endpoint when creating an &quot;/api/user/me&quot; API endpoint    </p>\n</li><li class=\" \">    <p>\nAPI-851: Defer batch requests to connectors if applicable    </p>\n</li><li class=\" \">    <p>\nAPI-866: Export express so user can access included middleware    </p>\n</li><li class=\" \">    <p>\nAPI-876: If you make a PUT API call, you will get a 404 on the first request    </p>\n</li><li class=\" \">    <p>\nAPI-879: Fixed request logging    </p>\n</li><li class=\" \">    <p>\nAPI-884: Fixed access log capabilities    </p>\n</li><li class=\" \">    <p>\nAPI-894: If you create a new model while running locally, the local admin page becomes blank after you refresh    </p>\n</li><li class=\" \">    <p>\nAPI-906: Latest arrow is returning 404 for PUT request (update) using arrowdb    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-KnownIssues\">\n        <h3 class=\"heading \"><span>Known Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAPI-905: Arrow application throws an error when trying to use two different MySQL databases.    </p>\n</li><li class=\" \">    <p>\nAPI-917: The styling of the code examples in the Admin console is skewed for both local builds and published Arrow applications.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-APIChanges\">\n        <h3 class=\"heading \"><span>API Changes</span></h3>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nName    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArrow.express    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ninstance property    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nExpress module instance.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder0.4.3-11June2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 0.4.3 - 11 June 2015</span></h2>\n    <p>\nArrow Builder 0.4.3 is a patch release, addressing high-priority issues from previous releases.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-NewFeature\">\n        <h3 class=\"heading \"><span>New Feature</span></h3>\n    <p>\nAdd ability to return response results in a specific format by adding the format extension as a suffix to the response.  Supported extensions are <tt class=\" \">json</tt>, <tt class=\" \">xml</tt>, <tt class=\" \">csv</tt>, <tt class=\" \">yaml</tt>, <tt class=\" \">yml</tt>, <tt class=\" \">txt</tt> and <tt class=\" \">js</tt>.  For example, if the API call is the the <tt class=\" \">/api/foo</tt> path, to retrieve results as XML, use <tt class=\" \">/api/foo.xml</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues.4\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAPI-455: Model: Query - Specified order of data is not correctly returned    </p>\n</li><li class=\" \">    <p>\nAPI-785: Azure connector causes crash on start-up when wiring up Models    </p>\n</li><li class=\" \">    <p>\nAPI-831: Arrow apps in VPCs always use the public ACS environment    </p>\n</li><li class=\" \">    <p>\nAPI-832: Arrow apps in VPCs created with a default user named &quot;undefined&quot;    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder0.4.1-29May2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 0.4.1 - 29 May 2015</span></h2>\n    <p>\nArrow Builder 0.4.1 is a patch release, addressing high-priority issues from previous releases.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-FixedIssues.5\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nAPI-812: When using SSL via api doc, browser security exception is received    </p>\n</li><li class=\" \">    <p>\nAPI-813: Using Count which matches 0 records should not return 404, but 200 with result of 0    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299747_ArrowBuilderReleaseNotes-ArrowBuilder0.4.0-21May2015\">\n        <h2 class=\"heading \"><span>Arrow Builder 0.4.0 - 21 May 2015</span></h2>\n    <p>\nInitial release.    </p>\n    <div class=\"section section-3 \" id=\"43299747_ArrowBuilderReleaseNotes-KnownIssues.1\">\n        <h3 class=\"heading \"><span>Known Issues</span></h3>\n    <div class=\"section section-4 \" id=\"43299747_ArrowBuilderReleaseNotes-ETIMEDOUTisreturnedwhenyoupublishanArrowapp\">\n        <h4 class=\"heading \"><span>ETIMEDOUT is returned when you publish an Arrow app</span></h4>\n    <p>\nOccasionally, when publishing an Arrow application, the CLI may return an ETIMEOUT error (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-654\" target=\"_blank\">CLI-654</a>).  To workaround this issue, try republishing the application again.    </p>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299747\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Builder Release Notes"});