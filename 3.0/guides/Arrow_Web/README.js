Ext.data.JsonP['Arrow_Web']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Web</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43299023\" class=\"content\">\n            <h1>Arrow Web</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Team Subscription Required!</div>\n        \n    <p>\nThis Appcelerator Platform feature requires a Team Subscription.    </p>\n    </div>\n    \n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Web-section-43299023_ArrowWeb-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Web-section-43299023_ArrowWeb-RouteDefinition\">Route Definition</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Web-section-43299023_ArrowWeb-TemplateFiles\">Template Files</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Web-section-43299023_ArrowWeb-Example\">Example</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43299023_ArrowWeb-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThis guide covers the basics for creating Arrow Web interfaces.  An Arrow Web interface is a custom endpoint that renders HTML content to a client application.  An Arrow Web interface is made up of:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nassets (images, CSS, HTML and JavaScript files) located in the <tt class=\" \">web/public</tt> folder    </p>\n</li><li class=\" \">    <p>\ntemplates (EJS, Handelbars, Markdown or ReactJS) located in the <tt class=\" \">web/views</tt> folder    </p>\n</li><li class=\" \">    <p>\nArrow Routes (endpoint definitions) located in the <tt class=\" \">web/routes</tt> folder    </p>\n</li></ul>    <p>\nYou can create custom logic in your Arrow Routes, which can internally access your application&apos;s models and APIs.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299023_ArrowWeb-RouteDefinition\">\n        <h2 class=\"heading \"><span>Route Definition</span></h2>\n    <p>\nPlace all Arrow Route definition files in the project&apos;s <tt class=\" \">web/routes</tt> folder.  You can only declare one endpoint definition per file.  An Arrow Route definition file is a JavaScript file, which:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLoads the <tt class=\" \">arrow</tt> module    </p>\n</li><li class=\" \">    <p>\nCalls the module&apos;s <tt class=\" \">Router.extend()</tt> method, passing in an object defining the API endpoint and logic    </p>\n</li><li class=\" \">    <p>\nExports the defined endpoint using the <tt class=\" \">module.exports</tt> variable    </p>\n</li></ol>    <p>\nSet the following keys in the object passed to the <tt class=\" \">Router.extend()</tt> method to define the API endpoint:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nName    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nRequired    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nname    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe name of your route.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\npath    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe endpoint/path for your route    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nmethod    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP verb (&amp;lsquo;GET&amp;rsquo;, &amp;lsquo;POST&amp;rsquo;, &amp;lsquo;PUT&amp;rsquo;, or &amp;lsquo;DELETE&amp;rsquo;).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndescription    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA description for your route. This is used for documentation purposes.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\naction    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFunction that allows you to interact with Arrow APIs and Models and send data to your template engine.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43299023_ArrowWeb-TemplateFiles\">\n        <h2 class=\"heading \"><span>Template Files</span></h2>\n    <p>\nArrow Web supports the EJS, Handlebars, Markdown and ReactJS template engines.  Place all template files with the appropriate extension in the <tt class=\" \">web/templates</tt> folder.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTemplate Engine    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFile Extension    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nEJS    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n.ejs    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHandlebars    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n.hbs    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMarkdown    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n.md    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReactJS    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n.jsx    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nTo use a template in the Arrow Route&apos;s logic, reference its filename without the extension.  Because the template is referenced using the filename, you cannot have the same filename with multiple extensions.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43299023_ArrowWeb-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <p>\nThe following Route file defines an endpoint the client can access using <tt class=\" \">GET &lt;SERVER_ADDRESS&gt;/car</tt>.  When accessed, the application retrieves all car models and renders them using the <tt class=\" \">web/views/car.hbs</tt> template.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">web/routes/car.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Arrow = require(</code><code class=\"string\">&apos;arrow&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var TestRoute = Arrow.Router.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">    name: </code><code class=\"string\">&apos;car&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    path: </code><code class=\"string\">&apos;/car&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    method: </code><code class=\"string\">&apos;GET&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    description: </code><code class=\"string\">&apos;get some cars&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    action: function (req, res, next) {</code></div>\n<div class=\"line\"><code class=\"plain\">        req.server.getModel(</code><code class=\"string\">&apos;car&apos;</code><code class=\"plain\">).findAll(function(err, results) {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">if</code><code class=\"plain\"> (err) {</code></div>\n<div class=\"line\"><code class=\"plain\">                next(err);</code></div>\n<div class=\"line\"><code class=\"plain\">            } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">                req.log.info(</code><code class=\"string\">&apos;got cars &apos;</code><code class=\"plain\"> + JSON.stringify(results));</code></div>\n<div class=\"line\"><code class=\"plain\">                res.render(</code><code class=\"string\">&apos;car&apos;</code><code class=\"plain\">, results);</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = TestRoute;</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">web/views/car.hbs</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;html&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;head&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/head&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;body&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    {{#each cars}}</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;div&gt;{{make}} {{model}} {{year}}&lt;/div&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    {{/each}}</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/body&gt;    </code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/html&gt;&#xA0;</code></div>\n</div>\n</div>    <p>\n    </p>\n    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43299023\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Web"});