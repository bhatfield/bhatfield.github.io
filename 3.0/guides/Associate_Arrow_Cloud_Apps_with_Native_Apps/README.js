Ext.data.JsonP['Associate_Arrow_Cloud_Apps_with_Native_Apps']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Associate Arrow Cloud Apps with Native Apps</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43299776\" class=\"content\">\n            <h1>Associate Arrow Cloud Apps with Native Apps</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Associate_Arrow_Cloud_Apps_with_Native_Apps-section-43299776_AssociateArrowCloudAppswithNativeApps-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Associate_Arrow_Cloud_Apps_with_Native_Apps-section-43299776_AssociateArrowCloudAppswithNativeApps-AddingacustomHTTPheaderoniOS\">Adding a custom HTTP header on iOS</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Associate_Arrow_Cloud_Apps_with_Native_Apps-section-43299776_AssociateArrowCloudAppswithNativeApps-AddingacustomHTTPcustomheaderonAndroid\">Adding a custom HTTP custom header on Android</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Associate_Arrow_Cloud_Apps_with_Native_Apps-section-43299776_AssociateArrowCloudAppswithNativeApps-Example\">Example</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Associate_Arrow_Cloud_Apps_with_Native_Apps-section-43299776_AssociateArrowCloudAppswithNativeApps-ViewingCustomServicesinDashboard\">Viewing Custom Services in Dashboard</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43299776_AssociateArrowCloudAppswithNativeApps-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nAppcelerator Dashboard can associate Arrow Cloud services used by a native iOS or Android application. This lets you see, for example, what Arrow Cloud services a given native application is using, or which service methods are being used the most.    </p>\n    <p>\nFor this correlation to occur, the native application must include a custom HTTP header named <strong class=\" \">x-native-id</strong> in each Arrow Cloud service method call it makes. The value of this header must be set to the GUID assigned to the application when you initially created it. The GUID for an existing native iOS or Android application can be found on the Overview tab in Dashboard, as shown below.    </p>\n    <p>\n    </p>\n    <p>\n        <img src=\"images/docs.appcelerator.com/cloud/latest/guides/native_sdk/guid.png\" alt=\"images/docs.appcelerator.com/cloud/latest/guides/native_sdk/guid.png\" class=\"confluence-embedded-image confluence-external-resource\" width=\"722\"/>\n            </p>\n    <p>\n    </p>\n    <p>\nThe following sections provide common approaches to adding custom HTTP headers to your iOS and Android network requests using well-known HTTP client libraries and frameworks.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299776_AssociateArrowCloudAppswithNativeApps-AddingacustomHTTPheaderoniOS\">\n        <h2 class=\"heading \"><span>Adding a custom HTTP header on iOS</span></h2>\n    <p>\nThe <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/nsmutableurlrequest_Class/Reference/Reference.html\" target=\"_blank\">NSMutableURLRequest</a> class provides the following helper methods for setting HTTP headers:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">addValue:(NSString \\*)value forHTTPHeaderField:(NSString *)</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">setValue:(NSString \\*)value forHTTPHeaderField:(NSString *)</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">setAllHTTPHeaderFields:(NSDictionary *)</tt>    </p>\n</li></ul>    <p>\nFor example, the following uses the <tt class=\" \">addValue</tt> method to add the <tt class=\" \">x-native-id</tt> header to a request object:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">NSURL *url = [NSURL URLWithString:@</code><code class=\"string\">&quot;http://yourappid.cloudapp-enterprise.appcelerator.com/service_name&quot;</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">NSMutableURLRequest* request = [[NSMutableURLRequest alloc] initWithURL:url];</code></div>\n<div class=\"line\"><code class=\"plain\">[request addValue:@</code><code class=\"string\">&quot;YOUR_APP_GUID&quot;</code><code class=\"plain\"> forHTTPHeaderField:@</code><code class=\"string\">&quot;x-native-id&quot;</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">[[NSURLConnection alloc] initWithRequest:request delegate:self];</code></div>\n</div>\n</div>    <p>\nIf you are using the CFNetwork framework, you can use the <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/prerelease/mac/documentation/CoreFoundation/Reference/CFMessageRef/index.html#//apple_ref/c/func/CFHTTPMessageSetHeaderFieldValue\" target=\"_blank\"> <tt class=\" \">CFHTTPMessageSetHeaderFieldValue</tt> </a> method of the <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/mac/documentation/CoreFoundation/Reference/CFMessageRef/Reference/reference.html\" target=\"_blank\">CFHTTPMessage</a> class. See the code listing in <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/mac/documentation/Networking/Conceptual/CFNetwork/CFHTTPTasks/CFHTTPTasks.html#//apple_ref/doc/uid/TP30001132-CH5-SW1\" target=\"_blank\">Creating a CFHTTP Request</a> in the CFNetwork Programming Guide for an example of this approach.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299776_AssociateArrowCloudAppswithNativeApps-AddingacustomHTTPcustomheaderonAndroid\">\n        <h2 class=\"heading \"><span>Adding a custom HTTP custom header on Android</span></h2>\n    <p>\nIf you are using <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/java/net/URLConnection.html\" target=\"_blank\">URLConnection</a>, or any of its subclasses (<tt class=\" \">HttpUrlConnection</tt>, <tt class=\" \">HttpsURLConnection</tt>), you can use its<a class=\"external-link external-link\" href=\"http://developer.android.com/reference/java/net/URLConnection.html#addRequestProperty&amp;28java.lang.String,+java.lang.String)\" target=\"_blank\"> <tt class=\" \">addRequestProperty(String field, String new Value)</tt> </a> method to add the HTTP header. The following example demonstrates adding the <tt class=\" \">x-native-id</tt> header using this method:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">URL url = </code><code class=\"keyword\">new</code><code class=\"plain\"> URL(</code><code class=\"string\">&quot;https://yourappid.cloudapp-enterprise.appcelerator.com/method_name&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">URLConnection method_nameConnection = url.openConnection();</code></div>\n<div class=\"line\"><code class=\"plain\">method_nameConnection.addRequestProperty(</code><code class=\"string\">&quot;x-native-id&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;&lt;YOUR_APP_GUID&gt;&quot;</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\nIf your application uses the Apache Stack (org.apache.http namespace), the <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/org/apache/http/message/AbstractHttpMessage.html#addHeader(java.lang.String,+java.lang.String)\" target=\"_blank\">addHeader(java.lang.String, java.lang.String)</a> is available to all classes that extend <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/org/apache/http/message/AbstractHttpMessage.html\" target=\"_blank\">AbstractHttpMessage</a>. The following example demonstrates adding the <tt class=\" \">x-native-id</tt> header using this method:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">DefaultHttpClient httpclient = </code><code class=\"keyword\">new</code><code class=\"plain\"> DefaultHttpClient();</code></div>\n<div class=\"line\"><code class=\"plain\">String url = </code><code class=\"string\">&quot;https://yourappid.cloudapp-enterprise.appcelerator.com/method_name&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">HttpPost httpPost = </code><code class=\"keyword\">new</code><code class=\"plain\"> HttpPost(url);</code></div>\n<div class=\"line\"><code class=\"plain\">httpPost.addHeader(</code><code class=\"string\">&quot;x-native-id&quot;</code><code class=\"plain\"> , </code><code class=\"string\">&quot;&lt;YOUR_APP_GUID&gt;&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">httpclient.execute(httpPost);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43299776_AssociateArrowCloudAppswithNativeApps-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <p>\nThis section shows how to create a new Arrow Cloud service and associate it with a native iOS or Android application. Before you continue:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIf you haven&apos;t yet, create a <a class=\"external-link external-link\" href=\"#!/guide/Managing_Native_Applications_in_Dashboard\">native iOS or Android application</a> in Dashboard.    </p>\n</li><li class=\" \">    <p>\nMake a note of the Application GUID (see above)    </p>\n</li></ul>    <p>\nTo create a new Arrow Cloud application, you call the <tt class=\" \">appc cloud new</tt> sub-command followed by the application name. If you are a member of more than one Appcelerator Platform organization, you are prompted to select the desired organization in which to create the application. (If you belong to only one organization, you will not see this prompt.)    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$ appc cloud </code><code class=\"keyword\">new</code><code class=\"plain\"> myproject</code></div>\n<div class=\"line\"><code class=\"plain\">ACS: Appcelerator Cloud Services Command-Line Interface, version </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">15</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2012</code><code class=\"plain\">-</code><code class=\"value\">2014</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"plain\">Admin Hostname: https:</code><code class=\"comments\">//admin.cloudapp-enterprise-preprod.appcelerator.com</code></div>\n<div class=\"line\"><code class=\"plain\">You belong to more than one organization. Please choose one to create the app </code><code class=\"keyword\">for</code><code class=\"plain\">.</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"value\">1</code><code class=\"plain\">) Appcelerator, Inc (</code><code class=\"value\">12345</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"value\">2</code><code class=\"plain\">) My Personal Org (</code><code class=\"value\">12302</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"value\">3</code><code class=\"plain\">) QA Org (</code><code class=\"value\">11269</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">  : </code></div>\n</div>\n</div>    <p>\nThis creates a basic Arrow Cloud application with a single endpoint. To publish the application to ACS, <tt class=\" \">cd</tt> to the newly created project and call<tt class=\" \">acs publish</tt>:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$ cd myproject</code></div>\n<div class=\"line\"><code class=\"plain\">$ appc cloud publish</code></div>\n</div>\n</div>    <p>\nThe output of the <tt class=\" \">appc cloud publish</tt> command includes the URL where the application will be available:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Publishing to cloud...</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">App helloworld version </code><code class=\"value\">0.1</code><code class=\"plain\">.</code><code class=\"value\">0</code><code class=\"plain\"> published.</code></div>\n<div class=\"line\"><code class=\"plain\">App will be available at https:</code><code class=\"comments\">//90b1c4ff046ba4cfe161fc9ff5e3b0b9e7719533.cloudapp-enterprise.appcelerator.com</code></div>\n</div>\n</div>    <p>\n    </p>\n    <p>\nYou can also find this URL on the Overview tab in Dashboard for your native iOS or Android application (see above).    </p>\n    <p>\nAdd the application URL to your network call. For example, on iOS:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">NSURL *serviceURL = [NSURL URLWithString:@</code><code class=\"string\">&quot;http://90a1c4bf046ba4cfe161fc9ff5e3b0b9e7719539.cloudapp-enterprise.appcelerator.com/&quot;</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">NSMutableURLRequest* request = [[NSMutableURLRequest alloc] initWithURL:serviceURL];</code></div>\n<div class=\"line\"><code class=\"plain\">[request addValue:@</code><code class=\"string\">&quot;f4ff70fd-be9b-419d-8c5e-e9b8fece57fe&quot;</code><code class=\"plain\"> forHTTPHeaderField:@</code><code class=\"string\">&quot;x-native-id&quot;</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">NSURLConnection *theConnection = [[NSURLConnection alloc] initWithRequest:request delegate:self];</code></div>\n</div>\n</div>    <p>\nOr, on Android:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">DefaultHttpClient httpclient = </code><code class=\"keyword\">new</code><code class=\"plain\"> DefaultHttpClient();</code></div>\n<div class=\"line\"><code class=\"plain\">String serviceURL = </code><code class=\"string\">&quot;http://90a1c4bf046ba4cfe161fc9ff5e3b0b9e7719539.cloudapp-enterprise.appcelerator.com/&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">HttpPost httpPost = </code><code class=\"keyword\">new</code><code class=\"plain\"> HttpPost(serviceURL);</code></div>\n<div class=\"line\"><code class=\"plain\">httpPost.addHeader(</code><code class=\"string\">&quot;x-native-id&quot;</code><code class=\"plain\"> , </code><code class=\"string\">&quot;f4ff70fd-be9b-419d-8c5e-e9b8fece57fe&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">httpclient.execute(httpPost);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43299776_AssociateArrowCloudAppswithNativeApps-ViewingCustomServicesinDashboard\">\n        <h2 class=\"heading \"><span>Viewing Custom Services in Dashboard</span></h2>\n    <p>\nOnce your native application has made a Arrow Cloud service request, you can use Dashboard to view the association between the application and the service. You can see which custom services are being used by a specific native application, get memory usage and CPU load data for each service, as well as view logs and metrics for individual service calls, such as response time, container ID, and IP addresses of connecting clients.    </p>\n    <p>\n<strong class=\" \">To view the custom services being used by an application in Dashboard</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nSelect the application from the Dashboard apps menu.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Arrow</strong> to view a table of custom Arrow Cloud services used by the application.    </p>\n</li><li class=\" \">    <p>\nSelect an Arrow application to view more details about the service.    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299776\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Associate Arrow Cloud Apps with Native Apps"});