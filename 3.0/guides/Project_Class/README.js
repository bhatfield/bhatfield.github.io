Ext.data.JsonP['Project_Class']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Project Class</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083242\" class=\"content\">\n            <h1>Project Class</h1>\n    <p>\nThe Project class contains methods and properties for interacting with a project inside Studio    </p>\n    <div class=\"section section-2 \" id=\"30083242_ProjectClass-Usage\">\n        <h2 class=\"heading \"><span>Usage</span></h2>\n    <p>\nExamples of how you might interact with instance and static methods of the project class.    </p>\n    <div class=\"section section-3 \" id=\"30083242_ProjectClass-Instance:\">\n        <h3 class=\"heading \"><span>Instance:</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">cmd.invoke {|context|  Ruble::Terminal.open(</code><code class=\"string\">&quot;rake test&quot;</code><code class=\"plain\">, context.project.to_dir.path) }</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"30083242_ProjectClass-Static\">\n        <h3 class=\"heading \"><span>Static</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\"># Also generate a project </code><code class=\"keyword\">for</code><code class=\"plain\"> the bundle and add it in the workspace?</code></div>\n<div class=\"line\"><code class=\"plain\">proj = Ruble::Project.create(base_name, :location =&gt; converted_bundle_path)</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083242_ProjectClass-ProjectMethods\">\n        <h2 class=\"heading \"><span>Project Methods</span></h2>\n    <p>\nProject objects have the following properties and methods:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProperty    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">name</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe name of the project. Usually the basename of the root project directory.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">exists?</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTrue if the project exists on disk.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">to_dir</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReturns the <tt class=\" \">Dir</tt> corresponding to the project&apos;s root    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">refresh(shallow = false)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nForces a refresh of the project. Pass in true to force only a shallow refresh of the project and direct members    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">is_open?</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReturns true if the project is open.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">is_closed?</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOpposite of <tt class=\" \">is_open?</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">open</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nIf the project isn&apos;t currently open, open it.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">close</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nClose the project    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">make_current</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMake the project the current/active one highlighted by the App Explorer    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">rails?</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nQuery method to tell if a project has a rails nature    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\nThere are also a number of useful static methods defined on the Ruble::Project class that can be useful in ruby code outside of a command:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMethod    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">find(name)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFind the named project in the workspace    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">all</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReturn all projects in an array    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">create(name, PROJECT_OPTIONS = {})</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nCreate a new project with the given name and PROJECT_OPTIONS    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">current</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReturns the &quot;current&quot;/&quot;active&quot; project    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083242\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Project Class"});