Ext.data.JsonP['Appcelerator_Test_CLI_Reference']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator Test CLI Reference</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298734\" class=\"content\">\n            <h1>Appcelerator Test CLI Reference</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n        \n    <p>\nThis Appcelerator Platform feature requires an Enterprise Subscription.    </p>\n    </div>\n    \n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Introduction\">Introduction</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-SetuptheUtility\">Setup the Utility</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-DynamicvsStaticInstrumentation\">Dynamic vs Static Instrumentation </a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Examples\">Examples</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-StaticInstrumentation\">Static Instrumentation</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-AndroidProject\">Android Project</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-iOSProject\">iOS Project</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-DynamicInstrumentation\">Dynamic Instrumentation</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-APKFile\">APK File</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-IPAFile\">IPA File</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Options\">Options</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-RequiredOptions\">Required Options</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-ProjectOptions\">Project Options</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-APKFileOptions\">APK File Options</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-APPorIPAFileOptions\">APP or IPA File Options</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-OtherOptions\">Other Options</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Troubleshooting\">Troubleshooting</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-ApplicationdoesnotSpecifyaCFBundleExecutable\">Application does not Specify a CFBundleExecutable</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-ResourceNotFound\">Resource Not Found</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Appcelerator_Test_CLI_Reference-section-43298734_AppceleratorTestCLIReference-Failswith&quot;java.lang.OutOfMemoryError:Javaheapspace&quot;whentargetinganAPKfile\">Fails with &quot;java.lang.OutOfMemoryError: Java heap space&quot; when targeting an APK file</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"43298734_AppceleratorTestCLIReference-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThe <tt class=\" \">appcelerator-test</tt> command-line interface utility prepares your project or compiled package to use the <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a>.    </p>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-Requirements\">\n        <h3 class=\"heading \"><span>Requirements</span></h3>\n    <p>\nThe <tt class=\" \">appcelerator-test</tt> CLI requires Java 1.6 SE or greater.    </p>\n    <p>\nFor Android projects, the project must support either an Eclipse or Ant build process.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-SetuptheUtility\">\n        <h3 class=\"heading \"><span>Setup the Utility</span></h3>\n    <p>\nDownload the <tt class=\" \">appcelerator-test</tt> Utility from the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.  Once the download completes, unpack the file to a common location.  You will need to use this utility to enable Appcelerator Test for each of your applications.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-DynamicvsStaticInstrumentation\">\n        <h3 class=\"heading \"><span>Dynamic vs Static Instrumentation</span></h3>\n    <p>\nThe <tt class=\" \">appcelerator-test</tt> utility supports two instrumentation methods&amp;ndash;static and dynamic&amp;ndash;and hence, two different build processes.    </p>\n    <p>\n<strong class=\" \">Dynamic instrumentation</strong> prepares a compiled &#xFB01;le, that is, an APK &#xFB01;le for Android, or an APP bundle or IPA file for iOS, to use Appcelerator Test. This method requires that you compile your project &#xFB01;rst to create a package, then it can be instrumented with the <tt class=\" \">appcelerator-test</tt> utility.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nBuild your project to create a compiled package.    </p>\n</li><li class=\" \">    <p>\nRun the <tt class=\" \">appcelerator-test</tt> utility against the package.    </p>\n</li><li class=\" \">    <p>\nInstall the package to your application.    </p>\n</li><li class=\" \">    <p>\nStart the TouchTest agent on the device.    </p>\n</li><li class=\" \">    <p>\nStart recording or playing test clips from the Appcelerator Dashboard.    </p>\n</li></ol>    <p>\n<strong class=\" \">Static instrumentation</strong> prepares an Android Eclipse or Xcode project to use Appcelerator Test.  Run the <tt class=\" \">appcelerator-test</tt> utility against the project.  For Android Eclipse projects, the utility installs extra libraries and modifies the project&apos;s <tt class=\" \">AndroidManifest.xml</tt> file. For Xcode projects, the utility creates a new target with an <tt class=\" \">-TouchTest</tt> suffix, installs an extra library and modifies the project&apos;s <tt class=\" \">project.pbxproj</tt> and <tt class=\" \">Info.plist</tt> files.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRun the <tt class=\" \">appcelerator-test</tt> utility against the project.    </p>\n</li><li class=\" \">    <p>\nBuild the project, targeting either a simulator, emulator or device, or create a package.  For Xcode projects, select the project with the <tt class=\" \">-TouchTest</tt> suffix from the <strong class=\" \">Scheme</strong> drop-down.    </p>\n</li><li class=\" \">    <p>\nInstall the package if needed.    </p>\n</li><li class=\" \">    <p>\nStart the TouchTest agent on the device.    </p>\n</li><li class=\" \">    <p>\nStart recording or playing test clips from the Appcelerator Dashboard.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298734_AppceleratorTestCLIReference-Examples\">\n        <h2 class=\"heading \"><span>Examples</span></h2>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-StaticInstrumentation\">\n        <h3 class=\"heading \"><span>Static Instrumentation</span></h3>\n    <div class=\"section section-4 \" id=\"43298734_AppceleratorTestCLIReference-AndroidProject\">\n        <h4 class=\"heading \"><span>Android Project</span></h4>\n    <p>\nThe following example prepares an Eclipse project to use Appcelerator Test using static instrumentation:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">java -jar appcelerator-test.jar -project ~/Documents/Eclipse_Workspace/SampleProject/ -appkey </code><code class=\"string\">&quot;11111111-2222-3333-4444-555555555555&quot;</code><code class=\"plain\"> -dashboardurl https:</code><code class=\"comments\">//platform.appcelerator.com -username user@appcelerator.com -password secret</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-4 \" id=\"43298734_AppceleratorTestCLIReference-iOSProject\">\n        <h4 class=\"heading \"><span>iOS Project</span></h4>\n    <p>\nThe following example prepares an Xcode project to use Appcelerator Test using static instrumentation:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">java -jar appcelerator-test.jar -project ~/Documents/Xcode_Workspace/SampleProject/SampleProject.xcodeproj/ -target SampleProject -appkey </code><code class=\"string\">&quot;11111111-2222-3333-4444-555555555555&quot;</code><code class=\"plain\"> -dashboardurl https:</code><code class=\"comments\">//platform.appcelerator.com -username user@appcelerator.com -password secret -useforceloadlinkerflag -removelibraryfrombuildphase</code></div>\n</div>\n</div>    <p>\nWhen building a project to run with Appcelerator Test, in Xcode, select the project with the <tt class=\" \">-TouchTest</tt> suffix from the <strong class=\" \">Scheme</strong> drop-down.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-DynamicInstrumentation\">\n        <h3 class=\"heading \"><span>Dynamic Instrumentation</span></h3>\n    <div class=\"section section-4 \" id=\"43298734_AppceleratorTestCLIReference-APKFile\">\n        <h4 class=\"heading \"><span>APK File</span></h4>\n    <p>\nThe following example prepares an APK file to use Appcelerator Test using dynamic instrumentation. If needed, add the keystore options.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">java -jar appcelerator-test.jar -apk ~/Documents/Eclipse_Workspace/SampleProject/SampleProject.apk -androidsdk ~/opts/android-sdk/ -appkey </code><code class=\"string\">&quot;11111111-2222-3333-4444-555555555555&quot;</code><code class=\"plain\"> -dashboardurl https:</code><code class=\"comments\">//platform.appcelerator.com -username user@appcelerator.com -password secret</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-4 \" id=\"43298734_AppceleratorTestCLIReference-IPAFile\">\n        <h4 class=\"heading \"><span>IPA File</span></h4>\n    <p>\nThe following example prepares an IPA file to use Appcelerator Test using dynamic instrumentation. You may not need the <tt class=\" \">-provisioningprofile</tt> or <tt class=\" \">-signingidentity</tt> options.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">java -jar appcelerator-test.jar -ipa ~/Documents/Xcode_Workspace/SampleProject.ipa -provisioningprofile ~/Downloads/BluthCo.mobileprovision -signingidentity </code><code class=\"string\">&quot;iPhone Distribution: Joe User (XX1111XXXX)&quot;</code><code class=\"plain\"> -appkey </code><code class=\"string\">&quot;11111111-2222-3333-4444-555555555555&quot;</code><code class=\"plain\"> -dashboardurl https:</code><code class=\"comments\">//platform.appcelerator.com -username user@appcelerator.com -password secret</code></div>\n</div>\n</div>    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n        \n    <p>\nCurrently, dynamically instrumented iOS applications cannot successfully be installed to iOS devices. You must instead statically instrument your Xcode project as shown in the <a class=\"document-link unresolved\" href=\"#!/guide/Appcelerator_Test_CLI_Reference\">iOS Project</a> example.    </p>\n    </div>\n    \n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298734_AppceleratorTestCLIReference-Options\">\n        <h2 class=\"heading \"><span>Options</span></h2>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-RequiredOptions\">\n        <h3 class=\"heading \"><span>Required Options</span></h3>\n    <p>\nThe following options are required to use the <tt class=\" \">appcelerator-test</tt> CLI, plus either <tt class=\" \">-project</tt>, <tt class=\" \">-apk</tt>, <tt class=\" \">-appbundle</tt> or <tt class=\" \">-ipa</tt>.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOption    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-appkey &lt;APP_GUID&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nApplication GUID.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-dashboardurl &lt;DASHBOARD_URL&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAppcelerator Dashboard URL, for example, &quot;https://platform.appcelerator.com&quot;.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-password &lt;APPC_PASSWORD&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAppcelerator Platform password.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-username &lt;APPC_USERNAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAppcelerator Platform user name, for example, &quot;user@appcelerator.com&quot;.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-ProjectOptions\">\n        <h3 class=\"heading \"><span>Project Options</span></h3>\n    <p>\nThe following options prepare an Eclipse or Xcode project to use Appcelerator Test.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOption    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-project &lt;PATH_TO_PROJECT&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Required. </strong>Path to the project. For iOS, include the <tt class=\" \">&lt;ProjectName&gt;.xcodeproj</tt> folder.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-target</tt> <tt class=\" \">&lt;TARGET_NAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Required for iOS. </strong>Name of the target project <strong class=\" \">(iOS only)</strong>. Xcode projects usually contain more than one target.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-APKFileOptions\">\n        <h3 class=\"heading \"><span>APK File Options</span></h3>\n    <p>\nThe following options prepare an APK file to use Appcelerator Test.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOption    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-androidsdk</tt> <tt class=\" \">&lt;PATH_TO_ANDROID_SDK&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Required. </strong>Path to the Android SDK that compiled the APK file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-apk</tt> <tt class=\" \">&lt;APK_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Required. </strong>APK file with the path.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-keystore &lt;KEYSTORE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKeystore, with the path, which will be used to sign the APK file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-storepass &lt;KEYSTORE_PASSWORD&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPassword of the keystore which will be used to sign the APK file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-keypass &lt;PRIVATE_KEY_PASSWORD&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPassword of the private key (if different from the keystore password) which will be used to sign the APK file.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-alias &lt;ALIAS_NAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAlias for the key which will be used to sign the APK file. Only the first 8 characters of the alias are used.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-APPorIPAFileOptions\">\n        <h3 class=\"heading \"><span>APP or IPA File Options</span></h3>\n    <p>\nThe following options prepare an APP bundle or IPA file to use Appcelerator Test.  Use either the <tt class=\" \">-appbundle</tt> or the <tt class=\" \">-ipa</tt> option, but not both simultaneously.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOption    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescriptions    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-appbundle &lt;APP_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAPP bundle with the path.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-ipa</tt> <tt class=\" \">&lt;IPA_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nIPA file with the path.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-provisioningprofile &lt;PROVISIONING_PROFILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProvisioning pro&#xFB01;le, with the path, to be used for building IPA &#xFB01;le. The provisioning pro&#xFB01;le you input MUST be a Distribution pro&#xFB01;le.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-signingidentity &lt;SIGNING_IDENTITY_NAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nName of the signing identity to be used for code signing the application, for example, &quot;iOS Distribution: Developer Name&quot;.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-entitlementsfile &lt;ENTITLEMENTS_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nEntitlements &#xFB01;le, with the path, to be used for code signing the application.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-OtherOptions\">\n        <h3 class=\"heading \"><span>Other Options</span></h3>\n    <p>\nThe following parameters are optional.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOption    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-infoplistfile &lt;INFO_PLIST_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nXcode project&apos;s <tt class=\" \">Info.plist</tt> file with path (<strong class=\" \">iOS only</strong>). If this parameter is not included, the utility will try to automatically locate it.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-customrulesfile &lt;CUSTOM_RULES_FILE&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAndroid project&apos;s <tt class=\" \">custom_rules.xml</tt> file with path (<strong class=\" \">Android only</strong>). If this parameter is not included, the utility will try to automatically locate it.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-launchurl &lt;APP_NAME&gt;://&lt;PARAMETERS&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLaunch URL to start the app (<strong class=\" \">Android only</strong>). Avoid spaces and underscores. If this parameter is not included, the utility will try to automatically locate it. Example: &quot;my-app://launch&quot;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-appobjectname &lt;APP_OBJECT_NAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nName of the Mobile App object created in the Appcelerator Test server. By default, the name is <tt class=\" \">&lt;APP_NAME&gt;_&lt;APP_GUID&gt;</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-donotcreateapp</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDo not create a Mobile App object in the Appcelerator Test server.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-universalapp</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nCreate a Mobile App object compatible with both iOS and Android.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-overwriteapp</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nReplace the Mobile App object if it already exists.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-previewmode</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nRun in Preview mode to examine the console output for these parameters. If this option is not included, then the utility runs in full mode and the project is changed.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-proxyserver &lt;PROXY_SERVER&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP proxy server name.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-proxyport &lt;PROXY_PORT&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP proxy port number.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-proxyusername &lt;PROXY_USERNAME&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP proxy user name (if any).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-proxypassword &lt;PROXY_PASSWORD&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP proxy password (if any).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-version</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPrint Utility Version.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-reporterrors</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUtility will automatically report errors to Appcelerator Test along with any relevant files.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-donotreporterrors</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUtility will not report any errors to Appcelerator Test.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-addheadersearchpath</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAdd Appcelerator Test header files to &quot;Header Search Paths&quot; build setting (<strong class=\" \">iOS only</strong>).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-useforceloadlinkerflag</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAdd <tt class=\" \">-force_load flag</tt> to &quot;Other Linker Flags&quot; build setting (<strong class=\" \">iOS only</strong>).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">-removelibraryfrombuildphase</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPrevents the library to be added to &quot;Link Binary With Libraries&quot; step of Build Phases (<strong class=\" \">iOS only</strong>).    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298734_AppceleratorTestCLIReference-Troubleshooting\">\n        <h2 class=\"heading \"><span>Troubleshooting</span></h2>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-ApplicationdoesnotSpecifyaCFBundleExecutable\">\n        <h3 class=\"heading \"><span>Application does not Specify a CFBundleExecutable</span></h3>\n    <p>\nThis error can occur when installing an iOS app bundle that has been dynamically instrumented for testing after compilation.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298734/error-cfbundleexec.png\" alt=\"images/download/attachments/43298734/error-cfbundleexec.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"392\"/>\n            </p>\n    <p>\nAs a workaround you can &quot;statically&quot; instrument the Xcode project, compile the project, and then install app bundle to the device. For steps on statically instrumenting an Xcode project, see the <a class=\"document-link unresolved\" href=\"#!/guide/Appcelerator_Test_CLI_Reference\">iOS Project</a>   example.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-ResourceNotFound\">\n        <h3 class=\"heading \"><span>Resource Not Found</span></h3>\n    <p>\nIf you receive the following error:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">com.appcelerator.mattwrapper.rest.RESTException: Error executing GET request! Received error code: </code><code class=\"value\">404</code></div>\n<div class=\"line\"><code class=\"plain\">{</code><code class=\"string\">&quot;success&quot;</code><code class=\"plain\">:</code><code class=\"keyword\">false</code><code class=\"plain\">,</code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;Resource Not Found&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">:</code><code class=\"value\">404</code><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nMake sure the <tt class=\" \">appkey</tt> parameter is correct.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298734_AppceleratorTestCLIReference-Failswith&quot;java.lang.OutOfMemoryError:Javaheapspace&quot;whentargetinganAPKfile\">\n        <h3 class=\"heading \"><span>Fails with &quot;java.lang.OutOfMemoryError: Java heap space&quot; when targeting an APK file</span></h3>\n    <p>\nAdd the <tt class=\" \">-Xmx2g</tt> option to the Java command to increase the JVM heap size.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">java -Xmx2g -jar appcelerator-test.jar -apk ~/Documents/Eclipse_Workspace/SampleProject/SampleProject.apk -androidsdk ~/opts/android-sdk/ -appkey </code><code class=\"string\">&quot;11111111-2222-3333-4444-555555555555&quot;</code><code class=\"plain\"> -dashboardurl https:</code><code class=\"comments\">//platform.appcelerator.com -username user@appcelerator.com -password secret</code></div>\n</div>\n</div>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298734\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Appcelerator Test CLI Reference"});