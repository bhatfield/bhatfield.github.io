Ext.data.JsonP['Code_Analyzer']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Code Analyzer</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298673\" class=\"content\">\n            <h1>Code Analyzer</h1>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-AnalyzinganApplication\">Analyzing an Application</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-StartingCodeAnalysis\">Starting Code Analysis</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-DisplayingtheResults\">Displaying the Results</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-SavingtheResults\">Saving the Results</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-InterpretingtheResultsintheProjectFiles\">Interpreting the Results in the Project Files</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-InterpretingtheResultsintheHTMLPage\">Interpreting the Results in the HTML Page</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-ErrorandWarningInterpretation\">Error and Warning Interpretation</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-ConfiguringtheCodeAnalyzer\">Configuring the Code Analyzer</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-Troubleshooting\">Troubleshooting</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Code_Analyzer-section-43298673_CodeAnalyzer-Failswiththemessage:node.jsmaximumcallstacksizeexceeded\">Fails with the message: node.js maximum call stack size exceeded</a>    </p>\n</li></ul></li></ul>    <p>\nThis page describes how to use the Appcelerator Studio Code Analyzer to analyze JavaScript code in your mobile projects.    </p>\n    <div class=\"section section-2 \" id=\"43298673_CodeAnalyzer-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThe Appcelerator Studio Code Analyzer uses the Titanium Code Processor tool to analyze the JavaScript code in mobile projects. It provides a wide variety of useful functionality, including runtime-error detection, Titanium API deprecation warnings, platform-specific API validation, etc.  The code analyzer reads the API documentation for the Titanium SDK used by the project to check API usage. As such, the SDK specified in the project&apos;s <tt class=\" \">tiapp.xml</tt> file must be installed.    </p>\n    <p>\nThe Titanium Code Processor must be installed to use this option in Appcelerator Studio.  The code processor should already be automatically installed with Appcelerator Studio if you chose to install additional Appcelerator updates.  If not, from the menu, select <strong class=\" \">Help</strong> &gt; <strong class=\" \">Check for Appcelerator Updates</strong>.    </p>\n    <p>\nThe analyzer works with classic mobile and Alloy projects.  For Alloy projects, the analyzer processes the Titanium files generated by the Alloy compiler (inside the <tt class=\" \">Resources</tt> directory), then maps the errors and warnings back to the files in the <tt class=\" \">app</tt> folder if it can.  Not all errors and warnings will map back to the files in the <tt class=\" \">app</tt> folder.  Some files are generated from the Alloy CLI and not based on any files created in the <tt class=\" \">app</tt> directory.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43298673_CodeAnalyzer-AnalyzinganApplication\">\n        <h2 class=\"heading \"><span>Analyzing an Application</span></h2>\n    <p>\nTo use the code analyzer, run the code analyzer from the right-click context menu on your mobile project to start code analysis for a specific platform or platforms.  Once it is done, a pop-up appears for you to click on to display the results, and the code analyzer indicates in your code any deprecated APIs or misused platform-specific APIs.    </p>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-StartingCodeAnalysis\">\n        <h3 class=\"heading \"><span>Starting Code Analysis</span></h3>\n    <p>\nIn the <strong class=\" \">Project Explorer<i class=\" \"> </i></strong>view, either:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nRight-click your project, select <strong class=\" \">Code </strong><strong class=\" \">Analysis</strong>, then select an option, or    </p>\n</li><li class=\" \">    <p>\nSelect your project, and from the menu bar, select <strong class=\" \">Run &gt; Code Analysis</strong>, then select an option.    </p>\n</li></ul>    <p>\nYou can choose to either run code analysis for a single platform or for multiple platforms:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFor a single platform, select one of the first set of options, which correspond to the deploy targets in the <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>\nFor multiple platforms, select <strong class=\" \">Multiple...</strong>. A dialog appears.  Select the platforms to analyze, then click <strong class=\" \">Analyze</strong>.    </p>\n</li></ul>    <p>\nA dialog appears or progress indicator starts indicating the code analysis has started.  The speed of the code analyzer depends on the complexity of your code.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298673/CodeAnalysisRightContextMenu.png\" alt=\"images/download/attachments/43298673/CodeAnalysisRightContextMenu.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-DisplayingtheResults\">\n        <h3 class=\"heading \"><span>Displaying the Results</span></h3>\n    <p>\nOnce the code analyzer is done, a <strong class=\" \">Code Analysis<i class=\" \"> </i></strong>pop-up appears in the bottom-right corner indicating that the code analysis is done (see image below).  Click on the pop-up to display the results, which opens a new view.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nYou may receive an error stating &quot;Page load failed with error: The requested URL was not found on this server.&quot; Rerun the code analyzer.    </p>\n    </div>\n    \n    <p>\n        <img src=\"images/download/attachments/43298673/CodeAnalysisPopup.png\" alt=\"images/download/attachments/43298673/CodeAnalysisPopup.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nTo view the results of the last analysis, in the <strong class=\" \">Project Explorer<i class=\" \"> </i></strong>view, right-click your project, select <strong class=\" \">Code</strong> <strong class=\" \">Analysis</strong>, then select <strong class=\" \">View Current Results</strong>.  A new view opens with the results of the last run of the code analyzer.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298673/CodeAnalysisLiveView.png\" alt=\"images/download/attachments/43298673/CodeAnalysisLiveView.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-SavingtheResults\">\n        <h3 class=\"heading \"><span>Saving the Results</span></h3>\n    <p>\nTo save the currently displayed results:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRight-click on the results in the Editor, which open a right-context menu.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Export...</strong>. A dialog appears.    </p>\n</li><li class=\" \">    <p>\nNavigate to and select and location to save the results.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Open</strong>.    </p>\n</li></ol>    <p>\nStudio saves the results in the location you chose in a folder called <tt class=\" \">&lt;Project_Name&gt; (&lt;platform&gt;)</tt>.    </p>\n    <p>\nTo export results for multiple platforms:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nIn the <strong class=\" \">Project Explorer</strong> view, right-click your project and select <strong class=\" \">Code Analysis &gt; Export Results...</strong>. A dialog appears.    </p>\n</li><li class=\" \">    <p>\nSelect the platforms to export results for.    </p>\n</li><li class=\" \">    <p>\nEnter a directory to export the results to in the <strong class=\" \">Export Location</strong> textbox.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Export</strong><strong class=\" \">.</strong>    </p>\n</li></ol>    <p>\nStudio saves the results in the location you chose in a folder called <tt class=\" \">&lt;Project_Name&gt; (&lt;platform&gt;)</tt>.<strong class=\" \"><br/></strong>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-InterpretingtheResultsintheProjectFiles\">\n        <h3 class=\"heading \"><span>Interpreting the Results in the Project Files</span></h3>\n    <p>\nThe code analyzer displays icons in your code to indicate errors or warnings that might need to be addressed.  In the <strong class=\" \">Project Explorer</strong> view, any file that displays a red box with a white &apos;x&apos; icon indicates that the file contains an error or warning found by the code analyzer.  Open the file to see the errors or warnings.  In the left margin to the left of the line numbers, a yellow triangle with a black exclamation point indicates a warning and a red circle with a white &apos;x&apos; indicates an error.  Hovering over one of these icons displays a pop-up with more information.    </p>\n    <p>\nIn the example below, the <tt class=\" \">app.js</tt> file contains code for the wrong platform (line 8), indicated with a warning icon, and which does not exist (line 11), indicated with an error icon.  The mouse cursor is hovering over the warning icon, displaying a message saying why this code is not supported.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298673/CodeAnalysisWarnings.png\" alt=\"images/download/attachments/43298673/CodeAnalysisWarnings.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nWhen running the code analyzer on multiple platforms, only the results for the last platform ran are shown in the project files. For example, if the code analyzer is ran for the Android and iPad platforms, since iPad was the last platform ran, the warning message in the previous example will not be shown.    </p>\n    </div>\n    \n    <p>\nThese results are also shown in the <strong class=\" \">Problems<i class=\" \"> </i></strong>view, which displays an aggregated list of warnings and errors across all files and projects.  To display the <strong class=\" \">Problems</strong> view, in the menu, select <strong class=\" \">Window &gt; Show View &gt; Other<i class=\" \">. </i></strong> The <strong class=\" \">Show View</strong> dialog appears.  Navigate to <strong class=\" \">General &gt; Problems</strong> and click the <strong class=\" \">OK </strong>button.  The <strong class=\" \">Problems</strong> view opens below the <strong class=\" \">Editor</strong><strong class=\" \">.  </strong>Using the <strong class=\" \">Problems</strong> view shows all of the errors and warnings for running the code analyzer against multiple platforms.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-InterpretingtheResultsintheHTMLPage\">\n        <h3 class=\"heading \"><span>Interpreting the Results in the HTML Page</span></h3>\n    <p>\nStudio opens a new view to display an HTML page with different tabs of results from the code analyzer and its plugins:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTab Section    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Summary</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvides a summary of the API warnings and errors, and code processor options and plugins used.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">API Usage Finder</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvides a breakdown of the APIs by usage and by file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Project Score</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThis score is a <u class=\" \">work in progress</u> and is only an estimate based on Appcelerator best practices and the code analyzer&apos;s interpretation of the JavaScript specification. This score should <u class=\" \">not</u> be used to evaluate personal performance. This score is generated based on the errors and warnings found by the code analyzer.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Analysis Coverage</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvides coverage statistics about the files and how much code the code analyzer was able to visit and process. Results can vary depending on the configuration settings.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Platform Validator</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvides detailed results of any invalid platform-specific API usage.  Lists each occurrence of a misused API and its location (filename and line number).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">API Deprecation Finder</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvides detailed results of any deprecated API usage.  Lists each occurrence of a deprecated API and its location (filename and line number).    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-4 \" id=\"43298673_CodeAnalyzer-ErrorandWarningInterpretation\">\n        <h4 class=\"heading \"><span>Error and Warning Interpretation</span></h4>\n    <p>\nThe table below lists some of the common errors and warnings, how to interpret them and how to resolve them.  This is not an exhaustive list of warning and errors generated by the code analyzer.  You may receive some false positives based on your code analyzer configuration settings (see the &quot;Configuring Code Analyzer&quot; section).  Additionally, your code may run fine but the code analyzer was unable to evaluate the context for some of your code.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nError/Warning    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReason for Error/Warning    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSuggested Resolution    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;Maximum callstack exceeded&quot; or &quot;Maximum recursion depth reached&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nYou have a recursive call where the context could not be definitively evaluated, so the code analyzer processed as deep as it could until it ran out of stack space or its internal limit was reached. For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Since the initial value cannot be definitively evaluated,</code></div>\n<div class=\"line\"><code class=\"comments\">// the code analyzer continually processes the function</code></div>\n<div class=\"line\"><code class=\"comments\">// until its stack space runs out</code></div>\n<div class=\"line\"><code class=\"plain\">function factorial (value) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (value == </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"value\">1</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> value * factorial(value - </code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">factorial(Date.now());</code></div>\n</div>\n</div>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMay be a false positive.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;Null value has no property &lt;X&gt;&quot; or &quot;undefined value has no property &lt;X&gt;&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nYou are referencing a property of an object that does not exist or does not have a value.    </p>\n    <p>\nThis <u class=\" \">may</u> be caused by using<tt class=\" \"> Ti.include</tt> calls that could not be resolved.    </p>\n    <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nIt is recommended to change your <tt class=\" \">Ti.include</tt> calls to <tt class=\" \">require</tt> calls.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;A value that could not be evaluated was passed to require&quot; or<br/>&quot;A value that could not be evaluated was passed to Ti.include&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nYou are passing a variable and not a hard-coded value to your <tt class=\" \">require</tt> or <tt class=\" \">Ti.include</tt> method and the code analyzer could not process it. As a side effect, this may generate other errors or the code analyzer may skip parts of the application. For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// If getPath was not defined or Invoke Methods was disabled,</code></div>\n<div class=\"line\"><code class=\"comments\">// the code analyzer cannot resolve the following path</code></div>\n<div class=\"line\"><code class=\"plain\">var path = getPath(Ti.Platform.osname);</code></div>\n<div class=\"line\"><code class=\"plain\">require(path + </code><code class=\"string\">&quot;/foo&quot;</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHard code the module you want to load in to your <tt class=\" \">require</tt> or <tt class=\" \">Ti.include</tt> call.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;Property &lt;X&gt; is not supported on &lt;platform&gt;&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAccording to the documentation file inside the Titanium SDK, this API does not exist for the platform you are running the code analyzer for.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMay be a false positive if <strong class=\" \">Process Univisited Code</strong> is enabled in your Code Analyzer settings since it visits all code.    </p>\n    <p>\nMay need to place conditional code around this API call.    </p>\n    <p>\nMay be a bug in the documentation file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;&lt;X&gt; has been deprecated&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAccording to the documentation file inside the Titanium SDK, this API has been marked deprecated and will be removed in a future SDK version.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUpdate your code to the non-deprecated API.    </p>\n    <p>\nMay be a bug in the documentation file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;&lt;X&gt; is not defined&quot;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe code analyzer could not find this API reference.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nCheck your spelling and that the API exist.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298673_CodeAnalyzer-ConfiguringtheCodeAnalyzer\">\n        <h2 class=\"heading \"><span>Configuring the Code Analyzer</span></h2>\n    <p>\nTo configure the Code Analyzer:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen <strong class=\" \">Appcelerator Studio Preferences</strong>.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nOn Mac OS X, in the menu, select <strong class=\" \">Appcelerator Studio &gt; Preferences</strong>.    </p>\n</li><li class=\" \">    <p>\nOn Linux and Windows, in the menu, select <strong class=\" \">Window &gt; Preferences</strong>.    </p>\n</li></ul></li><li class=\" \">    <p>\nNavigate to <strong class=\" \">Studio &gt; Code Analyzer</strong>.    </p>\n</li><li class=\" \">    <p>\nEnable or disable the following behavior by checking and unchecking the item checkboxes, respectively:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Invoke Methods</strong> &amp;ndash; Indicates whether or not to invoke methods.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Evaluate Loops</strong> &amp;ndash; Indicates whether or not to evaluate loops. Disabling this option only evaluates the loop once and increases the speed performance of the analyzer.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Process Unvisited Code</strong> &amp;ndash; Indicates whether or not to process unvisited code.    </p>\n</li></ul></li></ol>    <p>\nFor accuracy, it is recommended to keep the default values, where <strong class=\" \">Invoke Methods </strong>and <strong class=\" \">Evaluate Loops </strong>are enabled, and <strong class=\" \">Process Univisited Code</strong> is disabled.    </p>\n    <p>\nFor faster performance, reverse the default settings, that is, <u class=\" \">disable</u> <strong class=\" \">Invoke Methods </strong>and <strong class=\" \">Evaluate Loops, </strong>and <u class=\" \">enable</u> <strong class=\" \">Process Univisited Code.</strong>    </p>\n    <p>\nIf all of these options are disabled, the code analyzer does not cover most of the code resulting in inaccurate results.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nIf <strong class=\" \">Process Univisited Code </strong>is enabled, you may receive a lot of false positives and inaccurate results due to platform-specific code being visited and functions being called that do not exist.    </p>\n    <p>\nFor example, if enabling this option for an Alloy project, errors will be reported as a result of processing files like <tt class=\" \">Resources/alloy/backbone.js</tt>, which is generated by the Alloy compiler, not by the user.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"43298673_CodeAnalyzer-Troubleshooting\">\n        <h2 class=\"heading \"><span>Troubleshooting</span></h2>\n    <div class=\"section section-3 \" id=\"43298673_CodeAnalyzer-Failswiththemessage:node.jsmaximumcallstacksizeexceeded\">\n        <h3 class=\"heading \"><span>Fails with the message: node.js maximum call stack size exceeded</span></h3>\n    <p>\nTo increase the stack size of the node command for the Code Analyzer:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen the Code Analyzer preferences.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Max Stack Size</strong> field, enter <strong class=\" \">10000 </strong>or a value greater than the default, which is usually 1000.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">OK</strong> and rerun the Code Analyzer.    </p>\n</li></ol>    <p>\nFinding the correct size is a bit of an art. Too low and you get this exception, but too high and node.js itself will segfault. Note that a correct value may not exist for this app, meaning that it is possible that this app cannot be analyzed using the code analyzer.    </p>\n    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298673\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Code Analyzer"});