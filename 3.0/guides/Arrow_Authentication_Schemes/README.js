Ext.data.JsonP['Arrow_Authentication_Schemes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Authentication Schemes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43302486\" class=\"content\">\n            <h1>Arrow Authentication Schemes</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes-section-43302486_ArrowAuthenticationSchemes-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes-section-43302486_ArrowAuthenticationSchemes-HTTPBasicAuthentication\">HTTP Basic Authentication</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes-section-43302486_ArrowAuthenticationSchemes-HTTPHeaderAuthentication\">HTTP Header Authentication</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes-section-43302486_ArrowAuthenticationSchemes-CustomAuthentication\">Custom Authentication</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43302486_ArrowAuthenticationSchemes-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nAn Arrow project provides different types of security mechanisms to authenticate requests.  Typically, you want to restrict which client applications have access to your APIs, and you want the client to prove it has permission to access your Arrow application&apos;s APIs.    </p>\n    <p>\nBy default, a new Arrow project uses HTTP basic authentication, where the client must pass the API key in the Authorization header for each request.  A new Arrow project contains two generated API keys, <tt class=\" \">apikey_development</tt> and <tt class=\" \">apikey_production</tt>, located in the <tt class=\" \">conf/default.js</tt> file.  The <tt class=\" \">apikey_development</tt> key contains the key used to test your project locally, while <tt class=\" \">apikey_production</tt> is used to make requests to your project when it is published.  You may change the values for these keys but make sure you generate a sufficiently unique value and do not share these keys with other API projects as they control access to your APIs.  These keys should only be used by one Arrow project.    </p>\n    <p>\nTo change the authentication mechanism, open the <tt class=\" \">conf/default.js</tt> file and change the <tt class=\" \">APIKeyAuthType</tt> key to one of the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \"><tt class=\" \">none</tt></strong>: No authentication    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \"><tt class=\" \">basic</tt></strong>: Use HTTP basic authentication (default)    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \"><tt class=\" \">apikey</tt></strong>: Use HTTP header authentication    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">plugin</strong>: Use a custom or third-party authentication mechanism.  You must also set the     <span style=\"color: #343438;\">\n<tt class=\" \">APIKeyAuthPlugin</tt> key to the location of the plugin file or to the name of the node module if you specify it as a dependency in the <tt class=\" \">package.json</tt> file.    </span>\n    </p>\n</li></ul>    <p>\nThe authentication mechanisms are described below.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43302486_ArrowAuthenticationSchemes-HTTPBasicAuthentication\">\n        <h2 class=\"heading \"><span>HTTP Basic Authentication</span></h2>\n    <p>\nIn HTTP basic access authentication, the client needs to send a username and password, sent as a base64-encoded string &quot;<tt class=\" \">&lt;username&gt;:&lt;password&gt;</tt>&quot;, in the Authorization header of the HTTP request, for example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">GET api/model HTTP/</code><code class=\"value\">1.0</code></div>\n<div class=\"line\"><code class=\"plain\">Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code></div>\n</div>\n</div>    <p>\nFor Arrow applications, the user name is the API key and the password field is left blank.  For a Titanium application, you can construct the header and request as follows:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function onLoad() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Loaded: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    onerror: function onError() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Error: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&quot;GET&quot;</code><code class=\"plain\">, REQUEST_URL);</code></div>\n<div class=\"line\"><code class=\"plain\">var authstr = </code><code class=\"string\">&apos;Basic &apos;</code><code class=\"plain\"> + Ti.Utils.base64encode(API_KEY + </code><code class=\"string\">&apos;:&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.setRequestHeader(</code><code class=\"string\">&quot;Authorization&quot;</code><code class=\"plain\">, authstr);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43302486_ArrowAuthenticationSchemes-HTTPHeaderAuthentication\">\n        <h2 class=\"heading \"><span>HTTP Header Authentication</span></h2>\n    <p>\nIn HTTP header authentication, the client sends the API key in a custom APIKey header.  The server must only support HTTPS requests, so the key is not sent as plain text (unencrypted).    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function onLoad() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Loaded: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    onerror: function onError() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Error: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&quot;GET&quot;</code><code class=\"plain\">, REQUEST_URL);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.setRequestHeader(</code><code class=\"string\">&quot;APIKey&quot;</code><code class=\"plain\">, API_KEY);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43302486_ArrowAuthenticationSchemes-CustomAuthentication\">\n        <h2 class=\"heading \"><span>Custom Authentication</span></h2>\n    <p>\nTo use a custom authentication mechanism, you need to create a CommonJS module that exposes a plugin class and implements the following methods.  All methods are optional, but to validate requests, you need to implement the <tt class=\" \">validateRequest</tt> method, either the synchronous version or asynchronous version.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMethod Signature    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">Plugin(server)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nConstructor. Passed the server instance. The passed server instance has not registered any models or connectors, and has not been started.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.matchURL(request): Boolean</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDetermines if the URL should be authenticated by the plugin. Return true if the plugin should handle the validation else return false.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.validateRequest(request, response): Boolean</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nValidates the request synchronously. Return a Boolean value indicating if the request passed validation (true) or not (false). Do not implement if you implemented the asynchronous version of this method.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.validateRequest(request, response, callback): void</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nValidates the request asynchronously. Pass the callback an Error as its first argument (or null if successful) and a Boolean indicating if validation was a successful or not as its second argument. Do not implement if you implemented the synchronous version of this method.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.applyCredentialsForTest(options): void</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUsed by the API Doc tab in the Arrow Admin console to allow the plugin to apply any authentication headers to the request before it is made. The <tt class=\" \">options</tt> object is the same <tt class=\" \">options</tt> object passed to the <a class=\"external-link external-link\" href=\"https://www.npmjs.com/package/request\" target=\"_blank\">request library</a>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.applyRequestsForTest(response, body): Object</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nUsed by the API Doc tab in the Arrow Admin console to allow the plugin to modify the authentication response headers, body, etc.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nIn the <tt class=\" \">conf/default.js</tt> file, set the     <span style=\"color: #343438;\">\n<tt class=\" \">APIKeyAuthPlugin</tt> key to the location of the plugin file or to the name of the node module if you specify it as a dependency in the <tt class=\" \">package.json</tt> file.    </span>\n    </p>\n    <p>\nFor example, if your client applications send a custom header, called <tt class=\" \">X-Secret</tt>, for each request and you want to check the value sent with the request against one stored in your configuration file, you can use the plugin below.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">conf/default.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthType: </code><code class=\"string\">&apos;plugin&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthPlugin: </code><code class=\"string\">&apos;./lib/plugin.js&apos;</code><code class=\"plain\">,    </code></div>\n<div class=\"line\"><code class=\"plain\">    secret: </code><code class=\"string\">&apos;secret&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">lib/plugin.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Constructor to get a reference to the config object</code></div>\n<div class=\"line\"><code class=\"plain\">function Plugin(server) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.config = server.config || {secret: </code><code class=\"keyword\">null</code><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Only validate requests to /api/foo</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.matchURL = function(request) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> request.url.indexOf(</code><code class=\"string\">&apos;/api/foo&apos;</code><code class=\"plain\">) !== </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">// Check if the request has the X-Secret header and its value matches the config file</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.validateRequest = function(request, response) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (request.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] &amp;&amp; request.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] === </code><code class=\"keyword\">this</code><code class=\"plain\">.config.secret) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">// Add the X-Secret header for internal requests</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.applyCredentialsForTest = function(options) {</code></div>\n<div class=\"line\"><code class=\"plain\">    options.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] = </code><code class=\"keyword\">this</code><code class=\"plain\">.config.secret;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">// Do not process the response</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.applyResponseForTest = function(response, body) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> body;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = Plugin;</code></div>\n</div>\n</div>    <p>\nTo test the plugin, add the <tt class=\" \">-H &apos;X-Secret: secret&apos;</tt> command-line option to the cURL request.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$ curl </code><code class=\"string\">&quot;http://127.0.0.1:8080/api/foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;com.appcelerator.api.unauthorized&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;message&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;Unauthorized&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;success&quot;</code><code class=\"plain\">:</code><code class=\"keyword\">false</code><code class=\"plain\">} </code></div>\n<div class=\"line\"><code class=\"plain\">$ curl </code><code class=\"string\">&quot;http://127.0.0.1:8080/api/foo&quot;</code><code class=\"plain\"> -H </code><code class=\"string\">&apos;X-Secret: secret&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code><code class=\"string\">&quot;success&quot;</code><code class=\"plain\">:</code><code class=\"keyword\">true</code><code class=\"plain\">,</code><code class=\"string\">&quot;request-id&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;0d2141f7-57ea-4c78-82cf-b6fa9497c16a&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;bar&quot;</code><code class=\"plain\">}</code></div>\n</div>\n</div>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43302486\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Authentication Schemes"});