Ext.data.JsonP['SSL_Certificate_Store_Support_for_HTTP_Clients']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>SSL Certificate Store Support for HTTP Clients</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"36740081\" class=\"content\">\n            <h1>SSL Certificate Store Support for HTTP Clients</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n        \n    <p>\n<u class=\" \"><strong class=\" \">Since Release 3.3.0</strong></u>, the mechanisms described in this document to support SSL Certificate Stores for HTTP Clients are no longer supported. You should instead use the HTTPClient's <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient-property-securityManager\">securityManager</a> property to implement support for SSL Certificate Stores.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nThe Android-specific <tt class=\" \">Titanium.Network.HTTPClient</tt> <tt class=\" \">addKeyManager</tt> and <tt class=\" \">addTrustManager</tt> methods are deprecated and removed in Release 3.4.0.    </p>\n</li><li class=\" \">    <p>\nThe iOS-specific <tt class=\" \">Titanium.Network.HTTPClient</tt> <tt class=\" \">clientCertificateIdentity</tt> and <tt class=\" \">clientCertificates</tt> properties are no longer supported.    </p>\n</li></ul>    </div>\n    \n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/SSL_Certificate_Store_Support_for_HTTP_Clients-section-36740081_SSLCertificateStoreSupportforHTTPClients-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/SSL_Certificate_Store_Support_for_HTTP_Clients-section-36740081_SSLCertificateStoreSupportforHTTPClients-iOSPlatformNotes\">iOS Platform Notes</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/SSL_Certificate_Store_Support_for_HTTP_Clients-section-36740081_SSLCertificateStoreSupportforHTTPClients-iOSExample\">iOS Example</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/SSL_Certificate_Store_Support_for_HTTP_Clients-section-36740081_SSLCertificateStoreSupportforHTTPClients-AndroidPlatformNotes\">Android Platform Notes</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/SSL_Certificate_Store_Support_for_HTTP_Clients-section-36740081_SSLCertificateStoreSupportforHTTPClients-AndroidExample\">Android Example</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"36740081_SSLCertificateStoreSupportforHTTPClients-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nStarting with Release 3.1.0, the Android and iOS platforms have added functionality to support SSL Certificate Stores with the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\">Titanium.Network.HTTPClient</a>. This document provides information on the changes made to the platforms and the related functionality.    </p>\n    <p>\nPlease note that neither platform includes functionality to actually parse certificates. This functionality can be implemented by developers in native modules to extend the HTTPClient.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"36740081_SSLCertificateStoreSupportforHTTPClients-iOSPlatformNotes\">\n        <h2 class=\"heading \"><span>iOS Platform Notes</span></h2>\n    <p>\nThe HTTPClient on iOS exposes two properties:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">clientCertificateIdentity</tt> - sets a <tt class=\" \">SecIdentityRef</tt>, which is a C structure containing a private key and certificate    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">clientCertificates</tt> - sets an array whose elements are of type <tt class=\" \">SecCertificateRef</tt>    </p>\n</li></ul>    <p>\nThese are concrete C structures of the native iOS SDK and cannot be exposed on the JavaScript side. Modules must set these properties on the HTTPClient object in native code. These properties must be set before calling <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient-method-open\">open</a> on the HTTPClient.    </p>\n    <p>\nThe <tt class=\" \">clientCertificateIdentity</tt> property must be set for the <tt class=\" \">clientCertificates</tt> to be honored.    </p>\n    <p>\nThese two properties can be used to set client-side certificates for secure HTTP connections. These are useful for environments where the server requires the client to present valid certificates as part of the SSL handshake.    </p>\n    <p>\nValidation of server certificates is controlled by the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient-property-validatesSecureCertificate\">validatesSecureCertificate</a> property of the HTTPClient and must be set to true validate the secure certificate.    </p>\n    <p>\nFor more information about using the native iOS SDK APIs for authentication processes, see <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/mac/#documentation/security/conceptual/CertKeyTrustProgGuide/iPhone_Tasks/iPhone_Tasks.html#//apple_ref/doc/uid/TP40001358-CH208-SW13\" target=\"_blank\">Mac Developer Guide: Certificate, Key, and Trust Services Tasks for iOS</a> and <a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/technotes/tn2232/_index.html\" target=\"_blank\">iOS Developer Library: HTTPS Server Trust Evaluation</a>.    </p>\n    <div class=\"section section-3 \" id=\"36740081_SSLCertificateStoreSupportforHTTPClients-iOSExample\">\n        <h3 class=\"heading \"><span>iOS Example</span></h3>\n    <p>\nThe following example code shows how to load an external PKCS #12 file and use it with an HTTP client.  This example contains two separate pieces: the Titanium application written in JavaScript and the iOS module written in Objective-C and using some of the native iOS SDK APIs.  The Titanium application needs to use the iOS module to perform necessary functions as mentioned earlier.    </p>\n    <p>\nIn the Titanium application:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRequire in the module.    </p>\n</li><li class=\" \">    <p>\nCreate an <tt class=\" \">HTTPClient</tt> with the <tt class=\" \">validatesSecureCertificate</tt> property set to true.    </p>\n</li><li class=\" \">    <p>\nCall the module method to parse the PKCS #12 file and set the <tt class=\" \">clientCertificateIdentity</tt> property.    </p>\n</li><li class=\" \">    <p>\nCall the <tt class=\" \">open</tt> and <tt class=\" \">send</tt> methods to initiate the HTTP request.    </p>\n</li></ol><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Require the module</code></div>\n<div class=\"line\"><code class=\"plain\">var certificateStore = require(</code><code class=\"string\">'com.certtest'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var url = </code><code class=\"string\">\"https://some.url\"</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var httpClient = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonload : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.API.info(</code><code class=\"string\">\"Received text: \"</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\talert(</code><code class=\"string\">'success'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\tonerror : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tTi.API.info(</code><code class=\"string\">\"Error: \"</code><code class=\"plain\"> + e.error);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\talert(</code><code class=\"string\">'error'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\ttimeout : </code><code class=\"value\">5000</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// this property must be set to true</code></div>\n<div class=\"line\"><code class=\"plain\">\tvalidatesSecureCertificate: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// References a file called server.p12 in the Resources directory</code></div>\n<div class=\"line\"><code class=\"plain\">var cert = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, </code><code class=\"string\">\"server.p12\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// Call the module method and send the HTTPClient object</code></div>\n<div class=\"line\"><code class=\"comments\">// to set the clientCertificateIdentity property</code></div>\n<div class=\"line\"><code class=\"plain\">certificateStore.loadP12Cert(httpClient, cert, </code><code class=\"string\">'password'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">httpClient.open(</code><code class=\"string\">\"GET\"</code><code class=\"plain\">, url);</code></div>\n<div class=\"line\"><code class=\"plain\">httpClient.send();</code></div>\n</div>\n</div>    <p>\nIn an iOS module, the <tt class=\" \">loadP12Cert</tt> method receives the HTTPClient object, the PKCS #12 file and the password to the file, then it:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLoads the external PKCS #12 file.    </p>\n</li><li class=\" \">    <p>\nParses it with the native <tt class=\" \">SecPKCS12Import</tt> method.    </p>\n</li><li class=\" \">    <p>\nSets the <tt class=\" \">clientCertificateIdentity</tt> of the HTTPClient object.    </p>\n</li></ol><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Omitted boiler plate code created for a new module</code></div>\n<div class=\"line\"><code class=\"comments\">// Note that this example does not perform type or error checking</code></div>\n<div class=\"line\"><code class=\"plain\">-(id)loadP12Cert:(id)args</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Parse the arguments</code></div>\n<div class=\"line\"><code class=\"plain\">    NSArray* theArg = args;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Titanium.Network.HTTPClient object</code></div>\n<div class=\"line\"><code class=\"plain\">    TiProxy* theClient = [theArg objectAtIndex:</code><code class=\"value\">0</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Titanium.Filesystem.File object (p12 file)</code></div>\n<div class=\"line\"><code class=\"plain\">    TiFile *theFile = [theArg objectAtIndex:</code><code class=\"value\">1</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Password of the file</code></div>\n<div class=\"line\"><code class=\"plain\">    NSString* thePassword = [theArg objectAtIndex:</code><code class=\"value\">2</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">    NSString* path = [theFile path];</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Load the file data</code></div>\n<div class=\"line\"><code class=\"plain\">    NSData *PKCS12Data = [[NSData alloc] initWithContentsOfFile:path];</code></div>\n<div class=\"line\"><code class=\"plain\">    CFDataRef inPKCS12Data = (CFDataRef)PKCS12Data;</code></div>\n<div class=\"line\"><code class=\"plain\">    SecIdentityRef myIdentity;</code></div>\n<div class=\"line\"><code class=\"plain\">    SecTrustRef myTrust;</code></div>\n<div class=\"line\"><code class=\"plain\">    OSStatus securityError = noErr;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Parse the file data</code></div>\n<div class=\"line\"><code class=\"plain\">    securityError = extractIdentityAndTrust(inPKCS12Data, &amp;myIdentity, &amp;myTrust, thePass);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (securityError == </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Set the clientCertificateIdentity property </code></div>\n<div class=\"line\"><code class=\"plain\">        [theClient setValue:(id)myIdentity forUndefinedKey:@</code><code class=\"string\">\"clientCertificateIdentity\"</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    [PKCS12Data release];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> securityError;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Example code taken from the Mac Developer Guide: Certificate, Key, and Trust Services Tasks</code></div>\n<div class=\"line\"><code class=\"plain\">OSStatus extractIdentityAndTrust(CFDataRef inPKCS12Data, SecIdentityRef *outIdentity, SecTrustRef *outTrust, NSString* thePass)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    OSStatus securityError = errSecSuccess;</code></div>\n<div class=\"line\"><code class=\"plain\">    CFStringRef password = (CFStringRef)thePass;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">const</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> *keys[] =   { kSecImportExportPassphrase };</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">const</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> *values[] = { password };</code></div>\n<div class=\"line\"><code class=\"plain\">    CFDictionaryRef optionsDictionary = CFDictionaryCreate(NULL, keys, values, </code><code class=\"value\">1</code><code class=\"plain\">, NULL, NULL);</code></div>\n<div class=\"line\"><code class=\"plain\">    CFArrayRef items = CFArrayCreate(NULL, </code><code class=\"value\">0</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">, NULL);</code></div>\n<div class=\"line\"><code class=\"plain\">    securityError = SecPKCS12Import(inPKCS12Data, optionsDictionary, &amp;items);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (securityError == </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        CFDictionaryRef myIdentityAndTrust = CFArrayGetValueAtIndex (items, </code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">const</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> *tempIdentity = NULL;</code></div>\n<div class=\"line\"><code class=\"plain\">        tempIdentity = CFDictionaryGetValue (myIdentityAndTrust, kSecImportItemIdentity);</code></div>\n<div class=\"line\"><code class=\"plain\">        *outIdentity = (SecIdentityRef)tempIdentity;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">const</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> *tempTrust = NULL;</code></div>\n<div class=\"line\"><code class=\"plain\">        tempTrust = CFDictionaryGetValue (myIdentityAndTrust, kSecImportItemTrust);</code></div>\n<div class=\"line\"><code class=\"plain\">        *outTrust = (SecTrustRef)tempTrust;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (optionsDictionary)</code></div>\n<div class=\"line\"><code class=\"plain\">        CFRelease(optionsDictionary);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> securityError;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"36740081_SSLCertificateStoreSupportforHTTPClients-AndroidPlatformNotes\">\n        <h2 class=\"heading \"><span>Android Platform Notes</span></h2>\n    <p>\nThe HTTPClient on Android has exposed two new methods:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">addKeyManager(X509KeyManager)</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">addTrustManager(X509TrustManager)</tt>    </p>\n</li></ul>    <p>\nUsers can add custom KeyManager and TrustManager implementations to use with the HTTPClient connection.  These methods must be called before calling <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient-method-open\">open</a> on the HTTPClient.    </p>\n    <p>\nYou need to use an Android module to implement the <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/javax/net/ssl/X509KeyManager.html\" target=\"_blank\">X509KeyManager</a> or <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/javax/net/ssl/X509TrustManager.html\" target=\"_blank\">X509TrustManager</a> interface and return these objects to the Titanium application. The application uses the <tt class=\" \">addKeyManager</tt> and <tt class=\" \">addTrustManager</tt> methods to add support for these objects.    </p>\n    <p>\nWhen either of these methods are used to initialize a custom SSLContext, the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient-property-validatesSecureCertificate\">validatesSecureCertificate</a> property of the HTTPClient is ignored.  For more information about custom SSL, see <a class=\"external-link external-link\" href=\"https://www.ibm.com/developerworks/java/library/j-customssl/\" target=\"_blank\">Custom SSL for advanced JSSE developers</a>.    </p>\n    <div class=\"section section-3 \" id=\"36740081_SSLCertificateStoreSupportforHTTPClients-AndroidExample\">\n        <h3 class=\"heading \"><span>Android Example</span></h3>\n    <p>\nFor an example of writing an Android module that implements and returns an X509TrustManager interface, see <a class=\"external-link external-link\" href=\"https://github.com/appcelerator-modules/ti.certificatestore\" target=\"_blank\">https://github.com/appcelerator-modules/ti.certificatestore</a>.  This module receives an external PKCS #12 file, parses it, then creates an X509TrustManager instance.    </p>\n    <p>\nTo use the module, in the Titanium application:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRequire in the module.    </p>\n</li><li class=\" \">    <p>\nCreate an <tt class=\" \">HTTPClient</tt>.    </p>\n</li><li class=\" \">    <p>\nMake a call to the module by providing it a PKCS#12 file, which is used to create the X509TrustManager.    </p>\n</li><li class=\" \">    <p>\nRetrieve the X509TrustManager interface from the module and add it to the HTTP client with the <tt class=\" \">addTrustManager</tt> method.    </p>\n</li><li class=\" \">    <p>\nCall the <tt class=\" \">open</tt> and <tt class=\" \">send</tt> methods to initiate the HTTP request.    </p>\n</li></ol><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var certificateStore = require(</code><code class=\"string\">'ti.certificatestore'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var url = </code><code class=\"string\">\"https://some.url\"</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var httpClient = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">\"Received text: \"</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">'success'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    onerror : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">\"Error: \"</code><code class=\"plain\"> + e.error);</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">'error'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    timeout : </code><code class=\"value\">5000</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// this property must be set to true</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// unless you are using a custom SSLContext</code></div>\n<div class=\"line\"><code class=\"plain\">\tvalidatesSecureCertificate: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Add the certificate to the certificate store</code></div>\n<div class=\"line\"><code class=\"plain\">certificateStore.addCertificate(</code><code class=\"string\">'server.p12'</code><code class=\"plain\">, </code><code class=\"string\">'password'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// Add the trust manager to the HTTP client</code></div>\n<div class=\"line\"><code class=\"plain\">httpClient.addTrustManager(certificateStore.getTrustManager());</code></div>\n<div class=\"line\"><code class=\"plain\">httpClient.open(</code><code class=\"string\">\"GET\"</code><code class=\"plain\">, url);</code></div>\n<div class=\"line\"><code class=\"plain\">httpClient.send();</code></div>\n</div>\n</div>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=36740081\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"SSL Certificate Store Support for HTTP Clients"});