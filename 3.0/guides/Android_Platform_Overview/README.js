Ext.data.JsonP['Android_Platform_Overview']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Android Platform Overview</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004888\" class=\"content\">\n            <h1>Android Platform Overview</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Userinterfaceconventions\">User interface conventions</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Hardwarebuttons\">Hardware buttons</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Screensizesanddensities\">Screen sizes and densities</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-ComparisonwithiOS\">Comparison with iOS</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-ApplicationComponents\">Application Components</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Activities\">Activities</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Services\">Services</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Intents\">Intents</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"29004888_AndroidPlatformOverview-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>\nIn order to build best-of-breed, native apps, it&apos;s critical that we understand the unique characteristics of each platform for which we plan to develop. In this section, you will examine the concepts, features, and components that identify Android apps.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004888_AndroidPlatformOverview-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\nAndroid has a multitude of platform specific features that we need to be aware of as Titanium developers. Everything from its user interface components to its low level interfaces for Services and Intents make Android stand apart from other mobile operating systems. While Titanium&apos;s Javascript API does the lion&apos;s share of the work in terms of abstracting away these details, it&apos;s still very important to understand them in order to build high quality apps. The following content in this section will address each of the most important features of the Android operating system, as well as discuss how they are handled from the perspective of the Titanium API.    </p>\n    <div class=\"section section-3 \" id=\"29004888_AndroidPlatformOverview-Userinterfaceconventions\">\n        <h3 class=\"heading \"><span>User interface conventions</span></h3>\n    <p>\nYou will find quickly when researching Android that the UI can vary significantly among devices. While there is a standard, &quot;vanilla&quot; UI common to all Android operating systems, this is rarely seen on device. This is because Android is an open source, and thus extensible, mobile operating system. Mobile device vendors, like Motorola and HTC, are free to take the base UI and enhance it as they see fit. Android seeks to enable each vendor&apos;s own vision of what Android should be on their device, not dictate it.    </p>\n    <p>\nThe following screens illustrate some of the common user interface components offered by the &quot;vanilla&quot; Android UI.    </p>\n    <p>\n        <img src=\"images/download/attachments/29004888/android_ui.png\" alt=\"images/download/attachments/29004888/android_ui.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-Hardwarebuttons\">\n        <h4 class=\"heading \"><span>Hardware buttons</span></h4>\n    <p>\nAndroid devices feature four dedicated-function &quot;hardware&quot; buttons: Back, Menu, Home, and Search. Depending on the device, these buttons can be physical buttons or touch-based user interface buttons. The location and order of those buttons varies between device vendors.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nBack &amp;ndash; tap to return to the previous activity in the stack; if none remain in the stack you&apos;re returned to the home screen.    </p>\n</li><li class=\" \">    <p>\nHome &amp;ndash; return immediately to the home screen, pausing any currently opened apps    </p>\n</li><li class=\" \">    <p>\nMenu &amp;ndash; display a menu of activity-specific options    </p>\n</li><li class=\" \">    <p>\nSearch &amp;ndash; display search functionality, either in-app or system-wide    </p>\n</li></ul>    <p>\nThe Home button behavior cannot be overridden, but you can interact with the Back, Search and Menu buttons.    </p>\n    <p>\nTo override the default behavior for the Back button, add an event listener for the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-event-androidback\">Window.androidback</a> event. (Prior to Release 3.0, this event was named <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-event-android:back\">Window.android:back</a>. The older name is now deprecated.)    </p>\n    <p>\nTo receive an event when the Search button is pressed, add an event listener for the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-event-androidsearch\">Window.androidsearch</a> event. (Prior to Release 3.0, this event was named <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window-event-android:search\">Window.android:search</a>. The older name is now deprecated.)    </p>\n    <p>\nYou cannot directly override the Menu button, but you can customize the menu displayed when the user presses the Menu button. See <a class=\"document-link \" href=\"#!/guide/Android_UI_Components_and_Conventions-section-29004929_AndroidUIComponentsandConventions-AndroidMenu\">Android Menus in the Android UI Components and Conventions section</a> for more information.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-Screensizesanddensities\">\n        <h4 class=\"heading \"><span>Screen sizes and densities</span></h4>\n    <p>\nAndroid devices vary greatly in screen size and density. <strong class=\" \">Screen size</strong> represents the physical size of the display. Measured diagonally, it can range from quite small (2.8 inches/71 mm) to large (4.3 inches/110mm) to tablet sizes (10.1 inches/256 mm). Android divides these into generally four categories: small, normal, large, and xlarge which are then denoted by their density-independent pixel measurements which Google labels &quot;dp.&quot; Each density-independent pixel is equivalent to one physical pixel on a 160 dpi screen.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nsmall screens are at least 426dp x 320dp    </p>\n</li><li class=\" \">    <p>\nnormal screens are at least 470dp x 320dp    </p>\n</li><li class=\" \">    <p>\nlarge screens are at least 640dp x 480dp    </p>\n</li><li class=\" \">    <p>\nxlarge screens are at least 960dp x 720dp    </p>\n</li></ul>    <p>\nAspect ratios vary as well, though Android generally lumps them into two buckets: long and &quot;notlong&quot; with the latter corresponding to devices with an aspect ratio not significantly different than the 320 x 470 &quot;normal&quot; screen.    </p>\n    <p>\nFinally, density describes the actual pixels (aka dots) per square inch resolution of the screen. These range between:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nldpi screens are roughly 120 dpi    </p>\n</li><li class=\" \">    <p>\nmdpi screens are roughly 160 dpi (this is the baseline &quot;normal&quot; density)    </p>\n</li><li class=\" \">    <p>\ntvdpi screens are roughly 213 dpi    </p>\n</li><li class=\" \">    <p>\nhdpi screens are roughly 240 dpi    </p>\n</li><li class=\" \">    <p>\nxhdpi screens are roughly 320 dpi    </p>\n</li><li class=\" \">    <p>\nxxhdpi screens are roughly 480 dpi    </p>\n</li></ul>    <p>\nTitanium enables you to simply scale your user interface to fit the device&apos;s screen. But it also offers convenient features for specifically handling assets and layout for various screen sizes. You should plan to test on multiple devices if you want your user interface to be &quot;pixel perfect&quot; on all devices.    </p>\n    <p>\nThere is also a nodpi option where your images will not be scaled by the system if you do not want to create various assets for each density.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-ComparisonwithiOS\">\n        <h4 class=\"heading \"><span>Comparison with iOS</span></h4>\n    <p>\nThe Android user interface features some key differences that iOS users should note.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nTabs are at the top rather than bottom.    </p>\n</li><li class=\" \">    <p>\nWindow title bars don&apos;t include navigation buttons. Navigation functionality is provided by the hardware Back and Menu buttons instead.    </p>\n</li><li class=\" \">    <p>\nThe Navigation bar does more than just give battery and signal-strength info. It is the common location for system and app notification messages. Likewise, Android doesn&apos;t use the &quot;badge&quot; indicator like iOS.    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004888_AndroidPlatformOverview-ApplicationComponents\">\n        <h3 class=\"heading \"><span>Application Components</span></h3>\n    <p>\nAndroid applications are built from the following components. Titanium shields you from some of the particulars, though it also gives you the tools to interact with these components when you want to.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nActivities    </p>\n</li><li class=\" \">    <p>\nServices    </p>\n</li><li class=\" \">    <p>\nIntents    </p>\n</li></ul>    <p>\n(We&apos;re simplifying things a bit here by ignoring content providers and broadcast receivers. Read Google&apos;s <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/fundamentals.html\" target=\"_blank\">Android Fundamentals</a> guide for more detailed information.)    </p>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-Activities\">\n        <h4 class=\"heading \"><span>Activities</span></h4>\n    <p>\nAn Android app is made up of one or more activities. Each activity represents a &quot;single screen with a user interface.&quot; For example, a window that lists messages in an inbox would be an activity. The window in which you read one of those messages would be a separate activity. The set of activities in an app work together to provide the functionality of that app.    </p>\n    <p>\nOn of the most powerful features of Android activities is that apps can start each other&apos;s activities. Let&apos;s say you want the user to be able to snap a photo within your app. You could write all the code to display the camera&apos;s live view along with the buttons that make up the photo-snapping experience. But with Android, you don&apos;t have to. The built-in Camera app has an activity that does all that already. All your app needs to do is launch the Camera app&apos;s activity and define what should happen with the data that&apos;s returned. Other apps can call on the activities that are defined within your app as well.    </p>\n    <p>\nThis shared-activity scheme is a key strength of the Android platform. Apps can share functionality, and they don&apos;t even need to know how those other apps work. Your app doesn&apos;t need to know how Camera&apos;s activity grabs the photo. You can just deal with the image that&apos;s returned. This activity sharing mechanism is what enables the &quot;Share&quot; button functionality included in many Android apps. This is discussed in more detail in the Intent section.    </p>\n    <p>\nEach activity is listed in the <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/manifest/manifest-intro.html\" target=\"_blank\">AndroidManifest.xml file</a>. Notations in that file describe which activities are published (and thus available for other apps to call on). Titanium let&apos;s you create activities &amp;ndash; a &quot;heavy weight&quot; window that corresponds to an Android activity. When the tiapp.xml file and your code is parsed by Titanium&apos;s compile scripts, appropriate entries are created in the AndroidManifest.xml file.    </p>\n    <p>\nAn Android Activity is not created until the &quot;heavy weight&quot; window is opened. Before the window is opened, the <tt class=\" \">activity</tt> property refers to a plain JS object, which can be used to setup <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android.Activity\">Ti.Android.Activity</a> properties. Once the window is opened, the Android Activity is created, then the <tt class=\" \">activity</tt> property can use the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android.Activity\">Ti.Android.Activity</a> methods.    </p>\n    <p>\nYou&apos;ll find more info on the Android developer&apos;s <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/app/Activity.html\" target=\"_blank\">Activity</a> guide.    </p>\n    <p>\n    <span id=\"29004888_AndroidPlatformOverview-heavyweightwindows\"><a class=\"confluence-anchor-link\" name=\"29004888_AndroidPlatformOverview-heavyweightwindows\"/></span>\n    </p>\n    <div class=\"section section-5 \" id=\"29004888_AndroidPlatformOverview-Heavyweightandlightweightwindows\">\n        <h5 class=\"heading \"><span>Heavyweight and lightweight windows</span></h5>\n    <p>\nHeavyweight windows are Titanium windows that correspond directly to Android activities. It&apos;s possible to create Titanium windows that are &quot;lightweight&quot; and don&apos;t correspond to activities. You should think of them more like fullscreen views. When you create a Titanium window, the API makes a few checks to decide if it should be heavyweight; a window is heavyweight if:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAny of these properties are set to either true or false: <tt class=\" \">fullscreen</tt>, <tt class=\" \">navBarHidden</tt>, or <tt class=\" \">modal</tt>;    </p>\n</li><li class=\" \">    <p>\nOr if the window&apos;s <tt class=\" \">windowSoftInputMode</tt> property is set to any of the Ti.UI.Android constants;    </p>\n</li><li class=\" \">    <p>\nOr if the <tt class=\" \">tabOpen</tt> property is <tt class=\" \">true</tt>.    </p>\n</li></ul>    <p>\nHeavyweight windows create a new Activity on the stack, and always create a new Javascript context for their window.    </p>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-Services\">\n        <h4 class=\"heading \"><span>Services</span></h4>\n    <p>\nServices are &quot;long running&quot; app components that run without user interaction. You might use a service to periodically check a network resource or you play music while your app is in the background. Services are not separate threads or processes. They&apos;re not a way to offload work from your main application. You can create services by calling on Titanium&apos;s <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android.Service\">Ti.Android.Service</a> module.    </p>\n    <p>\nMore information can be found at the Android developer&apos;s <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/app/Service.html\" target=\"_blank\">services</a> page or the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android.Service\">Ti.Android.Service</a> page.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004888_AndroidPlatformOverview-Intents\">\n        <h4 class=\"heading \"><span>Intents</span></h4>\n    <p>\nIntents are messaging objects that hold data passed between activities, sent to or from a background service, or sent by system broadcasts. Intents enable your app to interact with the activities available on the user&apos;s device without knowing which apps the user has installed.    </p>\n    <p>\nEarlier we stated that you can launch another app&apos;s activities. In truth, for security reasons your app can&apos;t directly start another app&apos;s activities. Instead, your app sends an Intent, which contains a URI to the content and instructions as to how it should be handled. You can create an <i class=\" \">explicit</i> iIntent, in which you request that a specific activity be launched. If it&apos;s available, Android launches it for on behalf of your app. The more powerful option is to use an <i class=\" \">implicit</i> intent, which will return a list of all apps available on a mobile device that are capable of handling your Intent.    </p>\n    <p>\nThink back to the &quot;Share&quot; button functionality described earlier. Your app might publish some text via an intent, thereby sending a request for a list of all the apps that could handle that data. The OS would present a list of suitable apps to the user, who would choose which app to use. The user could select a Twitter client, email app, or any other app that can handle text. With properly formatted Intents, you can add large amounts of functionality to your apps simply by leveraging apps already installed on the device.    </p>\n    <div class=\"section section-5 \" id=\"29004888_AndroidPlatformOverview-IntentFilters\">\n        <h5 class=\"heading \"><span>Intent Filters</span></h5>\n    <p>\nIntent filters are created through entries in the AndroidManifest.xml file. They are used to describe the types of Intents an Activity can accept. Android uses intent filters to determine which activities can respond to an intent. For example, this is how Android narrows the list of all possible apps to just those shown on a particular Share menu. See the <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/intents/intents-filters.html#ifs\" target=\"_blank\">Android docs</a> for more information.    </p>\n    <p>\nMore information about intents and intent filters are available from the <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/intents/intents-filters.html\" target=\"_blank\">Android docs</a> or the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium Android module</a> page.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004888_AndroidPlatformOverview-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nGoogle&apos;s <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/fundamentals.html\" target=\"_blank\">Android Fundamentals</a> document is recommended reading    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://developer.android.com/guide/practices/screens_support.html\" target=\"_blank\">Supporting Multiple Screens</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://developer.android.com/resources/dashboard/screens.html\" target=\"_blank\">Screen Sizes and Densities in use now</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004888_AndroidPlatformOverview-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>\nIn this chapter, you learned about some of the characteristics that define Android and Android apps. You looked at user interface components, device buttons, and application components, such as activities and intents. Next we&apos;ll learn what makes iOS unique from other mobile operating systems, and how we can leverage these features with Titanium.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004888\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Android Platform Overview"});