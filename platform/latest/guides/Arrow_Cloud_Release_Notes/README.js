Ext.data.JsonP['Arrow_Cloud_Release_Notes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Cloud Release Notes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43299726\" class=\"content\">\n            <h1>Arrow Cloud Release Notes</h1>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.3.2-23November2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.3.2 - 23 November 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.32 of the CLI and 1.3.2 of the server.    </p>\n    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Publish command</strong>: Now you can ask ArrowCloud to delete the oldest archived version by passing <tt class=\" \">--delete_oldest</tt> at publish time. The max version is 10.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Enable/Disable high memory/cpu USAGE and app crash </strong><strong class=\" \">stack trace</strong>: acs config --usagenotice will enable or disable notification on high memory/cpu or app crash.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.3.1\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.3.1</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.28 of the CLI and 1.3.1 of the server.    </p>\n    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">List command</strong>:  The list command now displays two sublists for active deployments (current running applications) and pending deployments (applications in the process of being published or when the application is being scaled up or down to another server container).  For pending deployments, an error will be displayed if there was an issue with deployment.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Make a request to a specific server container</strong>: If your application is running on more than one server container, you can make a request to a specific server container by passing the <tt class=\" \">_serverid</tt> parameter with the request and set it to the ID of the server container.  See <a class=\"document-link \" href=\"#!/guide/Arrow_Project-section-43298987_ArrowProject-AccessaSpecificContainer\">Arrow Project: Access a Specific Container</a>.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Timestamps</strong>: The usage command now displays timestamps in local time.  Previously, the timestamp was in UTC.    </p>\n</li></ul>    <p>\n<strong class=\" \">Bug Fixes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFixed an issue where a project could not run locally if the <tt class=\" \">main</tt> field in the <tt class=\" \">package.json</tt> file points to a directory.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.3.0-17September2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.3.0 - 17 September 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.27 of the CLI and 1.3.0 of the server, and includes behavior changes.    </p>\n    <p>\n<strong class=\" \">Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nThe scripts specified by the <tt class=\" \">scripts.preinstall</tt> and <tt class=\" \">scripts.postinstall</tt> fields in the <tt class=\" \">package.json</tt> file no longer support installing custom binaries outside the project directory.  Instead, create a script called <tt class=\" \">install.sh</tt> located at the root level of the project folder to install the custom binaries.  You can still use the <tt class=\" \">scripts.preinstall</tt> and <tt class=\" \">scripts.postinstall</tt> scripts to install binaries inside the project folder.    </p>\n</li></ul>    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Build logs</strong>: To view the application build logs, pass the <tt class=\" \">--build_log</tt> flag to the <a class=\"document-link \" href=\"#!/guide/Arrow_Cloud_Command-Line_Interface_Reference-section-43299782_ArrowCloudCommand-LineInterfaceReference-loglist\"><tt class=\" \">loglist</tt> command</a>.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Install custom binaries</strong>: To install custom binaries, create a script called <tt class=\" \">install.sh</tt> located at the root level of the project to install the custom binaries. See <a class=\"document-link \" href=\"#!/guide/Arrow_Project-section-43298987_ArrowProject-InstallCustomBinaries\">Arrow Project: Install Custom Binaries</a>.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Restart command</strong>: To restart a server, pass the <tt class=\" \">--restart &lt;SERVER_ID&gt;</tt> option to the <a class=\"document-link \" href=\"#!/guide/Arrow_Cloud_Command-Line_Interface_Reference-section-43299782_ArrowCloudCommand-LineInterfaceReference-server\"><tt class=\" \">server</tt> command</a>.  You many want to restart the server if the memory or CPU usage becomes too high.  To get the server ID the application is running on, use the <tt class=\" \">list</tt> command.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Timestamps</strong>: The <tt class=\" \">loglist</tt> and <tt class=\" \">logcat</tt> commands now display a timestamp next to the log output.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.2.0-05August2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.2.0 - 05 August 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.26 of the CLI and 1.2.0 of the server, and includes behavior changes due to the transition from OpenVZ to Docker for container support.    </p>\n    <p>\nFor complete information on migrating the application and new features, see the <a class=\"document-link \" href=\"#!/guide/Migrate_an_Application_to_Arrow_Cloud_1.2.0\">Migrate an Application to Arrow Cloud 1.2.0 guide</a>.    </p>\n    <p>\nTo publish an application to Arrow Cloud 1.2.0, you must use at least version 4.1.2 of the Appcelerator CLI Core package  Run <tt class=\" \">appc use</tt> to check or change the core package version.    </p>\n    <p>\n<strong class=\" \">Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nThe Node.ACS logger module is deprecated in favor of the <tt class=\" \">appc-logger</tt> module.  To continue collecting application and transaction log data, update your application to use the <tt class=\" \">appc-logger</tt> module.    </p>\n</li><li class=\" \">    <p>\nNode version 0.8.x is no longer supported for Node.ACS MVC applications.  Set the <tt class=\" \">engines.node</tt> field in the <tt class=\" \">package.json</tt> file to version 0.10.x or greater.    </p>\n</li></ul>    <p>\n<strong class=\" \">New Features</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Node version</strong>: specify any version of Node for the application to use in the <tt class=\" \">package.json</tt> file.  Previously, only versions 0.8.26 and 0.10.22 were supported.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Optional healthcheck</strong>: define an optional <tt class=\" \">healthCheck.json</tt> endpoint that Arrow Cloud can check to see if your application is running.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Port binding</strong>: define the <tt class=\" \">PORT</tt> environment variable to explicitly set the listening port of your application.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Provision the container</strong>: install any third-party tool or package on your server container using the <tt class=\" \">scripts.preinstall</tt> or <tt class=\" \">scripts.postinstall</tt> fields in the <tt class=\" \">package.json</tt> file.    </p>\n</li></ul>    <p>\n<strong class=\" \">Known Issues</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nWhen setting the Node version, you can no longer specify a range.  You must set the <tt class=\" \">engines.node</tt> field to a specific version.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.1.13-12June2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.1.13 - 12 June 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.25 of the CLI and version 1.1.13 of the server.    </p>\n    <p>\n<strong class=\" \">Improvements</strong>    </p>\n    <p>\nUpdated the styling of the placeholder HTML page when the application is being deployed.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.1.12-05May2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.1.12 - 05 May 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.24 of the CLI and version 1.1.12 of the server.    </p>\n    <p>\n<strong class=\" \">Bug Fixes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFixed an issue where specifying an invalid path for the <tt class=\" \">main</tt> field in the <tt class=\" \">package.json</tt> file would throw an error when trying to run the application.  Now the CLI outputs an error message and will not deploy the application.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.1.11-21April2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.1.11 - 21 April 2015</span></h2>\n    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAdd ability to publish a project from Github to Arrow Cloud.  Use the <tt class=\" \">appc cloud publish --git &lt;options&gt;</tt> command.  For details, see the <a class=\"external-link external-link\" href=\"#!/guide/Arrow_Cloud_Command-Line_Interface_Reference-section-43299782_ArrowCloudCommand-LineInterfaceReference-publish\">CLI publish command</a>.    </p>\n</li><li class=\" \">    <p>\nAdd support for sticky sessions.  If the application uses more than one server container, user sessions will be bound to the same application instance, allowing all requests to be sent to the same instance.    </p>\n</li><li class=\" \">    <p>\nBefore republishing the application, Arrow Cloud sends the <tt class=\" \">SIGTERM</tt> signal to the currently deployed application to let it shutdown gracefully. If the app does not shutdown in time, Arrow Cloud will kill the application.  Previously, Arrow Cloud would immediately kill the application before republishing.    </p>\n</li></ul>    <p>\n<strong class=\" \">Bug Fixes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFixed an issue where setting environment variables did not take affect when the previous publish command failed.    </p>\n</li><li class=\" \">    <p>\nInstalled missing bzip2 dependecy for Phantom support.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.1.10-23March2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.1.10 - 23 March 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.23 of the CLI and version 1.1.10 of the server.    </p>\n    <div class=\"section section-3 \" id=\"43299726_ArrowCloudReleaseNotes-CLI1.0.23\">\n        <h3 class=\"heading \"><span>CLI 1.0.23</span></h3>\n    <p>\n<strong class=\" \">Notice of Feature and Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nChanged the permission of the <tt class=\" \">appc cloud config --maxsize</tt> parameter to allow anyone to set the maximum number of servers an application can be deployed to. Previously, only an application admin could set the maximum value.    </p>\n</li></ul>    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nNew <tt class=\" \">appc cloud server</tt> command to select the container size to run the application on.    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299726_ArrowCloudReleaseNotes-ArrowCloud1.1.9-05March2015\">\n        <h2 class=\"heading \"><span>Arrow Cloud 1.1.9 - 05 March 2015</span></h2>\n    <p>\nThis release of Arrow Cloud includes version 1.0.22 of the CLI and version 1.1.9 of the server.    </p>\n    <div class=\"section section-3 \" id=\"43299726_ArrowCloudReleaseNotes-CLI1.0.22\">\n        <h3 class=\"heading \"><span>CLI 1.0.22</span></h3>\n    <p>\n<strong class=\" \">Notice of Feature and Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nThe <tt class=\" \">appc cloud cname</tt> command has been deprecated in favor of the <tt class=\" \">appc cloud domain</tt> command, which can bind an application to an A record in addition to a CNAME record.    </p>\n</li><li class=\" \">    <p>\nThe <tt class=\" \">appc cloud config</tt> <tt class=\" \">--autoscale</tt> and <tt class=\" \">--setsize</tt> command options have been removed. To enable auto-scaling, use the <tt class=\" \">--autoscaleup</tt> and <tt class=\" \">--autoscaledown</tt> options. You can no longer set the current number of cloud servers to use with the <tt class=\" \">--setsize</tt> option, instead you can set the minium number with the <tt class=\" \">--minsize </tt>option.    </p>\n</li></ul>    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nNew <tt class=\" \">appc cloud domain</tt> command to bind either a CNAME or A record to an application. This command deprecates the <tt class=\" \">appc cloud cname</tt> command, which can only bind a CNAME record to an application.    </p>\n</li><li class=\" \">    <p>\nNew <tt class=\" \">appc cloud config</tt> <tt class=\" \">--minsize</tt> command option to set the minimum number of cloud servers the application can use.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"43299726_ArrowCloudReleaseNotes-Server1.1.9\">\n        <h3 class=\"heading \"><span>Server 1.1.9</span></h3>\n    <p>\n<strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>\nSupport for wildcard subdomain routing.    </p>\n</li><li class=\" \">    <p>\nSupport for binding the application to an A record in addition to a CNAME record.    </p>\n</li><li class=\" \">    <p>\nAdd support for <a class=\"external-link external-link\" href=\"https://github.com/expressjs/body-parser\" target=\"_blank\">body-parser middleware</a>, which makes the body of an HTTP request available as <tt class=\" \">req.body</tt> in the controller of an MVC application. To enable the body-parser middleware, add the following line to the <tt class=\" \">package.json</tt> file:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">\"bodyParser\"</code><code class=\"plain\">: </code><code class=\"keyword\">true</code></div>\n</div>\n</div></li></ul>    <p class=\"prettyprint prettyprinted\">\nFor legacy releases, see <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/guide/node_releasenotes\">http://docs.appcelerator.com/cloud/latest/#!/guide/node_releasenotes</a>.    </p>\n    <p>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299726\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Cloud Release Notes"});