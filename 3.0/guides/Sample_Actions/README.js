Ext.data.JsonP['Sample_Actions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Sample Actions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083161\" class=\"content\">\n            <h1>Sample Actions</h1>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-Description\">Description</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-Invocation\">Invocation</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-ListtheavailableSamples\">List the available Samples</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-ImportaSample\">Import a Sample</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Sample_Actions-section-30083161_SampleActions-ListeningtoSampleChanges\">Listening to Sample Changes</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>\nThe examples in this page use the <i class=\" \"><strong class=\" \">Prototype</strong></i> library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-Description\">\n        <h2 class=\"heading \"><span>Description</span></h2>\n    <p>\nThese set of actions can retrieve a list of available <i class=\" \">Sample</i> projects, and import a specific sample into the workspace.<br/>Samples are contributed to the Studio via extensions, or via the scripting mechanism (<i class=\" \">Rubles</i>).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-Invocation\">\n        <h2 class=\"heading \"><span>Invocation</span></h2>\n    <p>\nThis command is executed immediately in a synchronous way.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-ListtheavailableSamples\">\n        <h2 class=\"heading \"><span>List the available Samples</span></h2>\n    <p>\nTo get the JSON list of samples, <i class=\" \">dispatch</i> this call:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">samples = dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller : </code><code class=\"string\">&apos;portal.samples&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action : </code><code class=\"string\">&quot;getSamples&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON()).evalJSON();</code></div>\n</div>\n</div>    <p>\nThe returned JSON holds this information:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nkey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ncategory    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe sample&apos;s category    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nname    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe name of the sample    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nid    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA unique sample identifier which should also be used when importing a sample    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndescription    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA description of the sample    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nimage    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n(currently empty for all samples) Will hold an image URL for the sample    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-ImportaSample\">\n        <h2 class=\"heading \"><span>Import a Sample</span></h2>\n    <p>\nWhen importing a sample, the <i class=\" \">dispatch</i> call should use a <i class=\" \">sample id</i> that was retrieved via the <i class=\" \">getSamples</i> action.<br/>Here is a <i class=\" \">dispatch</i> example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller : </code><code class=\"string\">&apos;portal.samples&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action : </code><code class=\"string\">&quot;importSample&quot;</code><code class=\"plain\">, </code></div>\n<div class=\"line\"><code class=\"plain\">  args: [sampleID].toJSON()</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON());</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"30083161_SampleActions-ListeningtoSampleChanges\">\n        <h2 class=\"heading \"><span>Listening to Sample Changes</span></h2>\n    <p>\nIt is possible that some of the samples are loaded or removed after the portal is opened. In this case, the Studio fires events that indicate a Sample addition or removal.<br/>Here is a sample of a way you can listen to such events (based on the <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk\" target=\"_blank\">studio3-sdk</a> sample):    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">eventsDispatcher.addObserver(</code><code class=\"string\">&apos;samples&apos;</code><code class=\"plain\">, function(e) { portal.samples.update(e); });</code></div>\n</div>\n</div>    <p>\nThe <i class=\" \">update</i> call receives an event object that holds the following information, and can be used to update the UI:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nkey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nvalue    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nevent    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe event identifier (in this case, always &apos;samples&apos;)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\neventType    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&apos;added&apos; or &apos;deleted&apos;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndata    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA JSON representation of the Sample-Info (as described above)    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083161\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Sample Actions"});