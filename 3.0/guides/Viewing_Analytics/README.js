Ext.data.JsonP['Viewing_Analytics']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Viewing Analytics</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298794\" class=\"content\">\n            <h1>Viewing Analytics</h1>\n    <div class=\"section section-2 \" id=\"43298794_ViewingAnalytics-AnalyticsTab\">\n        <h2 class=\"heading \"><span>Analytics Tab</span></h2>\n    <p>\nThe Analytics tab lets you view detailed analytics for each application.  The Analytics tab contains several sub-tabs to view different metric categories and create event funnels. Each sub-tab is explained below.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298774/AnalyticsTab.png\" alt=\"images/download/attachments/43298774/AnalyticsTab.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"600\"/>\n            </p>\n    <div class=\"section section-3 \" id=\"43298794_ViewingAnalytics-Real-Time\">\n        <h3 class=\"heading \"><span>Real-Time</span></h3>\n    <p>\nThe Real-Time section displays the number of currently active sessions, as well as the number of installs, sessions, and the average session length over the last hour. Note that all times are in Coordinated Universal Time (UTC).    </p>\n    <p>\n<strong class=\" \">Active Sessions</strong>  displays the current number of people using your application at a specific moment, and an animated graph shows the number of sessions over time.  Each bar in the graph represents one second, and its height corresponds to the number of sessions at that moment. A short black bar appears every 20 seconds, and a tall black bar appears  every time the y-axis of the chart was re-evaluated.    </p>\n    <p>\n        <img src=\"images/download/attachments/37524837/image2014-1-6_15_9_21.png\" alt=\"images/download/attachments/37524837/image2014-1-6_15_9_21.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n            </p>\n    <p>\n<strong class=\" \">Installs</strong> displays the number of application installs over the past hour by platform type and geography.    </p>\n    <p>\n<strong class=\" \">Sessions</strong> displays the  number of application sessions that were completed in the past hour for each platform and by geography.    </p>\n    <p>\n<strong class=\" \">Avg. Session Length</strong> displays the average session length by platform over the past hour.    </p>\n    <p>\n        <img src=\"images/download/attachments/37524837/image2014-1-6_9_42_10.png\" alt=\"images/download/attachments/37524837/image2014-1-6_9_42_10.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298794_ViewingAnalytics-Users\">\n        <h3 class=\"heading \"><span>Users</span></h3>\n    <p>\nThe <strong class=\" \">Users</strong> section displays the number of installs of the application by platform, application version, and geography for the selected time period and environment. It also displays the maximum number of of unique    <span style=\"color: #484850;\">\n devices by platform and application version. Unique devices provide you with a measure of the number of real users using your app, normalizing for the fact that some users use the app multiple times a day.    </span>\n    </p>\n    <p>\n        <img src=\"images/download/attachments/37524837/image2014-1-6_10_28_54.png\" alt=\"images/download/attachments/37524837/image2014-1-6_10_28_54.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298794_ViewingAnalytics-Sessions\">\n        <h3 class=\"heading \"><span>Sessions</span></h3>\n    <p>\nThe Sessions section displays how many times your application was launched, and how long on average users spent using it.    </p>\n    <p>\n        <img src=\"images/download/attachments/37524837/sessions_tab.png\" alt=\"images/download/attachments/37524837/sessions_tab.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n            </p>\n    <p>\nSession length is calculated based on the following user actions:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nStarting and closing an application    </p>\n</li><li class=\" \">    <p>\nStarting an application and putting it to the background    </p>\n</li><li class=\" \">    <p>\nResuming an application that was in the background, and returning it to the background    </p>\n</li><li class=\" \">    <p>\nResuming an application that was in the background, and closing it    </p>\n</li></ul>    <p>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nIf the application was backgrounded and resumed within the timeout value (default is 30 seconds), both events are cancelled and the previous session remains active.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-3 \" id=\"43298794_ViewingAnalytics-Events\">\n        <h3 class=\"heading \"><span>Events</span></h3>\n    <p>\nThe Events section lists the name and number of each custom event generated by your application, as well as a timeline of when events were generated. To get custom events to appear in the list, you must build your application and trigger each event to ensure that the events are registered with the analytics engine.    </p>\n    <p>\n        <img src=\"images/download/attachments/37524837/image2014-1-24_11_10_43.png\" alt=\"images/download/attachments/37524837/image2014-1-24_11_10_43.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n            </p>\n    <p>\nThe Events tab also displays events generated by <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/arrowdb/latest/\" target=\"_blank\">Appcelerator Arrow DB</a> API calls. Arrow DB API events are named <tt class=\" \">cloud-class-method</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298794_ViewingAnalytics-EventFunnels\">\n        <h3 class=\"heading \"><span>Event Funnels</span></h3>\n    <p>\n    <span style=\"color: #000000;\">\nThe Event Funnels section lets you create new event funnels and view event funnel analytics.     </span>\nAn event funnel is     <span style=\"color: #000000;\">\na sequence of custom events you define that corresponds to a process you want to measure and analyze.      </span>\n    <span style=\"color: #000000;\">\nFor example, a shopping application would likely want to measure the flow of users through the process of searching for, viewing, and purchasing a product.     </span>\n     <span style=\"color: #000000;\">\nBy analyzing event funnel data you can identify, for example, where users drop out of the purchase process. For instructions on creating and viewing event funnels, see <a class=\"document-link unresolved\" href=\"#!/guide/Viewing_Analytics\">Analytics: Creating and Viewing Event Funnels</a>.    </span>\n    </p>\n    <p>\n    <span style=\"color: #000000;\">\n        <img src=\"images/download/attachments/37524837/image2014-1-1_19_12_14.png\" alt=\"images/download/attachments/37524837/image2014-1-1_19_12_14.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"500\"/>\n        </span>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298794\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Viewing Analytics"});