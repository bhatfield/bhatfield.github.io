Ext.data.JsonP['Arrow_Quick_Start']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Quick Start</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43299399\" class=\"content\">\n            <h1>Arrow Quick Start</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Team Subscription Required!</div>\n        \n    <p>\nThis Appcelerator Platform feature requires a Team Subscription.    </p>\n    </div>\n    \n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-Setup\">Setup</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-CreateaProject\">Create a Project</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-RuntheProject\">Run the Project</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-AccesstheAdminSite\">Access the Admin Site</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-CreateaNewModel\">Create a New Model</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-AddModelData\">Add Model Data</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-AccessModelData\">Access Model Data</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-TestOtherEndpoints\">Test Other Endpoints</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-DeploytheProject\">Deploy the Project</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-ViewAnalytics\">View Analytics</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Quick_Start-section-43299399_ArrowQuickStart-NextSteps\">Next Steps</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThis guide walks through the steps to create, run and deploy an Arrow application. An Arrow application allows you to build and deploy API endpoints to the cloud that can be consumed by a client application.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-Setup\">\n        <h2 class=\"heading \"><span>Setup</span></h2>\n    <p>\nTo create an Arrow application, you need the Appcelerator CLI. If you are using Appcelerator Studio 4.0 or greater, the Appcelerator CLI is automatically installed for you. To manually install the CLI:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nDownload and install Node.js from <a class=\"external-link external-link\" href=\"http://nodejs.org/#download\" target=\"_blank\">http://nodejs.org/#download</a>, which includes the npm package manager needed to install the Appcelerator CLI.    </p>\n</li><li class=\" \">    <p>\nFrom a console window, run the following command to install the CLI:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">[sudo] npm install appcelerator -g</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nAfter installation, run the setup command to install required components:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc setup</code></div>\n</div>\n</div>    <p>\nAfter the CLI downloads and installs the required components, you will be prompted to login and authorize your computer.  The CLI will ask to send an authorization token to your e-mail account or a text to your mobile phone.  Enter the authorization token once you receive it to complete the registration process.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-CreateaProject\">\n        <h2 class=\"heading \"><span>Create a Project</span></h2>\n    <p>\nTo create a new project, go to your workspace directory and execute the following command:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t arrow</code></div>\n</div>\n</div>    <p>\nThe CLI will prompt you for a project name. After entering a name for your project, the CLI will create a new skeleton Arrow project for you.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-RuntheProject\">\n        <h2 class=\"heading \"><span>Run the Project</span></h2>\n    <p>\nTo run the project locally, from the project directory, execute the following command:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc run</code></div>\n</div>\n</div>    <p>\nThe CLI will download and install any dependencies for the project, then start the application. The application will launch a server instance that you can access from a web browser or another client. Look at the console output for the address. Typically, it should be <tt class=\" \">http://localhost:8080/</tt>. Open a browser and navigate to the application. You should see the Arrow logo.    </p>\n    <div class=\"section section-3 \" id=\"43299399_ArrowQuickStart-AccesstheAdminSite\">\n        <h3 class=\"heading \"><span>Access the Admin Site</span></h3>\n    <p>\nBy default, when you create a new project, the admin console is enabled by default, available using the <tt class=\" \">arrow</tt> path, that is, <tt class=\" \">http://localhost:8080/arrow</tt>. Navigate to the admin console in your web browser.    </p>\n    <p>\nLook at the top navigation bar. Use the following items in the navigation bar:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Arrow</strong> &amp;ndash; provides a getting started guide to help you start building API endpoints    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">API Docs</strong> &amp;ndash; auto-generated documentation about your API endpoints. Provides help for the client application to access your application.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Build</strong> &amp;ndash; interface to help you build models. A model represents data stored from another source.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Data</strong> &amp;ndash; interface to help you manage your models similar to a content management system.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Logs</strong> &amp;ndash; lists of access logs, clients trying to access your application.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Registry</strong> &amp;ndash; lists components that your application can install and use.    </p>\n</li></ul>    <p>\nYou can disable the admin console by changing the configuration settings in the <tt class=\" \">conf/default.js</tt> file. For now, let&apos;s explore some of the features of the admin console.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299399_ArrowQuickStart-CreateaNewModel\">\n        <h3 class=\"heading \"><span>Create a New Model</span></h3>\n    <p>\nLet&apos;s create a new model using the admin console. In the admin console:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nClick the <strong class=\" \">Build</strong> tab.    </p>\n</li><li class=\" \">    <p>\nIn Step 1: Model Type    </p>\n<ol class=\" \"><li class=\" \">    <p>\nIn <strong class=\" \">Model Name</strong> text box, enter &quot;simpleuser&quot;.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Model Type</strong> drop-down, select <strong class=\" \">Reduce an existing model.</strong>    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Source Model</strong>, enter &quot;testuser&quot;.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Next</strong>.    </p>\n        <img src=\"images/download/attachments/43299399/step1.png\" alt=\"images/download/attachments/43299399/step1.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\"/>\n            <p>\n    </p>\n</li></ol></li><li class=\" \">    <p>\nIn Step 2: Model Fields    </p>\n<ol class=\" \"><li class=\" \">    <p>\nClick <strong class=\" \">View Fields</strong>. The <i class=\" \">Select Inherited Fields</i> dialog appears.    </p>\n</li><li class=\" \">    <p>\nSelect the <strong class=\" \">first_name </strong>and<strong class=\" \"> last_name </strong>fields.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Add Fields</strong>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Next</strong>.    </p>\n        <img src=\"images/download/attachments/43299399/step2.png\" alt=\"images/download/attachments/43299399/step2.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            <p>\n    </p>\n</li></ol></li><li class=\" \">    <p>\nIn Step 3: Optional Parameters    </p>\n<ol class=\" \"><li class=\" \">    <p>\nUnder <strong class=\" \">Generate API endpoints for these methods</strong>, select only <strong class=\" \">Create, Read, Update</strong> and <strong class=\" \">Delete</strong>. Since <strong class=\" \">Delete All</strong> is not checked, the <tt class=\" \">DELETE api/simpleuse</tt>r endpoint will not be generated, but all other default endpoints for models will be generated.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Next.<br/>         <img src=\"images/download/attachments/43299399/step3.png\" alt=\"images/download/attachments/43299399/step3.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n     </strong>    </p>\n</li></ol></li><li class=\" \">    <p>\nIn Step 4: Review &amp; Test    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLook over the code that will be generated.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Save Model</strong>.    </p>\n</li></ol></li></ol>    <p>\nIf you look in your project&apos;s <tt class=\" \">models</tt> folder, notice you have a new file called <tt class=\" \">simpleuser.js</tt>. This file was just created by the admin console. Instead of creating a model using the admin console, you can define one using JavaScript files in the project&apos;s <tt class=\" \">models</tt> directory.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299399_ArrowQuickStart-AddModelData\">\n        <h3 class=\"heading \"><span>Add Model Data</span></h3>\n    <p>\nLet&apos;s add some data using our new model. In the admin console:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nClick the <strong class=\" \">Data</strong> tab.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">simpleuser</strong> in the left navigation bar.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">New</strong>, which opens a new input dialog.    </p>\n</li><li class=\" \">    <p>\nEnter a first and last name for the model.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Save</strong>.    </p>\n</li><li class=\" \">    <p>\nRepeat step 3 - 5 to add more users.    </p>\n</li></ol>    <p>\n        <img src=\"images/download/attachments/43299399/inputdialog.png\" alt=\"images/download/attachments/43299399/inputdialog.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    <p>\nAs data is added to the model, the page is updated.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299399_ArrowQuickStart-AccessModelData\">\n        <h3 class=\"heading \"><span>Access Model Data</span></h3>\n    <p>\nNow that you have created a few <strong class=\" \">simpleuser</strong> models, let&apos;s try to retrieve the model data from the application. In the admin console:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nClick the <strong class=\" \">API Doc</strong><strong class=\" \">s</strong> tab.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">APIs</strong> in the left navigation bar. The admin console presents a list of all API endpoints that your application exposes.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">simpleuser</strong> in the left navigation bar. The admin console presents all the API endpoints that can be used to access the simpleuser model.    </p>\n</li><li class=\" \">    <p>\nIn the <tt class=\" \">GET api/simpleuser/query</tt> method, click the <strong class=\" \">CURL</strong> label to see the curl example.    </p>\n</li><li class=\" \">    <p>\nCopy the curl command and paste it in a new terminal command window.    </p>\n</li></ol>    <p>\n        <img src=\"images/download/attachments/43299399/apidocs.png\" alt=\"images/download/attachments/43299399/apidocs.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    <p>\nThe command will return the first ten users (if you have ten users).    </p>\n    <p>\nClick the <strong class=\" \">Logs</strong> tab in the admin console to see information about your requests.<br/>        <img src=\"images/download/attachments/43299399/logs.png\" alt=\"images/download/attachments/43299399/logs.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43299399_ArrowQuickStart-TestOtherEndpoints\">\n        <h3 class=\"heading \"><span>Test Other Endpoints</span></h3>\n    <p>\nBy default, in a new Arrow project, you can navigate to the <tt class=\" \">apidoc</tt> and <tt class=\" \">example</tt> paths, that is, <tt class=\" \">http://localhost:8080/apidoc</tt> and <tt class=\" \">http://localhost:8080/example</tt>.    </p>\n    <p>\nThe <tt class=\" \">apidoc</tt> path presents the same information as the <strong class=\" \">API Docs</strong> tab in the admin console, except it only displays the <i class=\" \">Introduction</i> and <i class=\" \">APIs</i> sections.    </p>\n    <p>\nThe <tt class=\" \">example</tt> path shows a simple example of an Arrow Web interface.  An Arrow Web interface creates an API endpoint with access to a render engine and your Model data that displays HTML content.    </p>\n    <p>\nAfter locally testing the application, let&apos;s try it out in the cloud. To stop the server, hit <strong class=\" \">control</strong> + <strong class=\" \">C</strong> on your keyboard in the terminal.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-DeploytheProject\">\n        <h2 class=\"heading \"><span>Deploy the Project</span></h2>\n    <p>\nTo deploy the project to the cloud, from the project directory, execute the following command:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc publish</code></div>\n</div>\n</div>    <p>\nIt will take a few minutes for your application to be deployed to Arrow Cloud. After the command completes, the URL to your application will be outputted in the console.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version </code><code class=\"value\">0.2</code><code class=\"plain\">.</code><code class=\"value\">194</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2014</code><code class=\"plain\">-</code><code class=\"value\">2015</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"plain\">Installing dependencies... ArrowProject</code></div>\n<div class=\"line\"><code class=\"plain\">Deploying the application to the Appcelerator Cloud. One moment...</code></div>\n<div class=\"line\"><code class=\"plain\">App published, waiting </code><code class=\"keyword\">for</code><code class=\"plain\"> deployment to complete</code></div>\n<div class=\"line\"><code class=\"plain\">Application deployed to https:</code><code class=\"comments\">//&lt;SUB_DOMAIN_TOKEN&gt;.cloudapp-enterprise-preprod.appctest.com</code></div>\n<div class=\"line\"><code class=\"plain\">Published ArrowProject</code></div>\n</div>\n</div>    <p>\nLet&apos;s quickly test the published application. In your browser, navigate to your published cloud application. You should see the Arrow Logo.    </p>\n    <p>\nNext, go to the project&apos;s documentation. Add the <tt class=\" \">/apidoc</tt> path to the end of the URL to retrieve the application documentation and endpoints. Retrieve the curl example of the query endpoint and paste it in the terminal. The command should return the same results when you tested the project locally.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-ViewAnalytics\">\n        <h2 class=\"heading \"><span>View Analytics</span></h2>\n    <p>\nTo view analytics about your project, go to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nIn a browser, navigate to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com\" target=\"_blank\">https://platform.appcelerator.com</a>.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Apps</strong> menu and select <strong class=\" \">All Projects</strong>. You will be presented with a list of all your applications.    </p>\n</li><li class=\" \">    <p>\nLocate your new Arrow application. There will be two entry types for your application: <strong class=\" \">Arrow</strong> and <strong class=\" \">Arrow DB</strong>. The <strong class=\" \">Arrow</strong> application is the published application that you interact with. The <strong class=\" \">Arrow DB</strong> application is essentially cloud storage where all your model data (at least for this example) is stored. All the simpleuser model data you entered previously is stored here.    </p>\n</li><li class=\" \">    <p>\nClick the Arrow type of your application. You will be presented with an analytics overview of your application with data about API calls and the server(s) your application is running on.    </p>\n</li><li class=\" \">    <p>\nClick the tab in the left navigation to view more detailed information about your application.    </p>\n</li></ol>    <p>\n        <img src=\"images/download/attachments/43299399/analyticsoverview.png\" alt=\"images/download/attachments/43299399/analyticsoverview.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299399_ArrowQuickStart-NextSteps\">\n        <h2 class=\"heading \"><span>Next Steps</span></h2>\n    <p>\nReview the <a class=\"document-link \" href=\"#!/guide/Arrow_Project\">Arrow Project</a> page to learn more about Arrow projects, then review the other subtopics in the <a class=\"document-link \" href=\"#!/guide/Arrow_Builder\">Arrow Builder</a> page to learn how to build the components for your Arrow project.    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299399\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Quick Start"});