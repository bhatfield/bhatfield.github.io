Ext.data.JsonP['Changing_Your_Project_Type']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Changing Your Project Type</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083315\" class=\"content\">\n            <h1>Changing Your Project Type</h1>\n    <p>\nIf you change the type or nature of your project (i.e. you decided to start using PHP in your Web project), you will want to change how Studio processes the files in your project.    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-ChangingProjectNatures\">Changing Project Natures</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-AssociatedNatures\">Associated Natures</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-Web\">Web</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-PHP\">PHP</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-Rails\">Rails</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-TitaniumMobile\">Titanium Mobile</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_Your_Project_Type-section-30083315_ChangingYourProjectType-TitaniumDesktop\">Titanium Desktop</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"30083315_ChangingYourProjectType-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nProject natures help identify the type of files that live inside. It affects a variety of items, but most notably content assist. It basically comes down to how the projects are indexed. Some project &quot;types&quot; are actually a combination of several others.    </p>\n    <p>\nA         <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check0.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check0.png\" class=\"emoticon emoticon-tick\"/>\n     means the file type is indexed. You may put files of any type in any project, but they only have certain meanings in certain projects.    </p>\n    <p>\n    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">File Types</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nCSS    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTML    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nJavaScript    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPython    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDjango    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nRuby    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nERB    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPHP    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Web Project</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Python Project</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Ruby Project</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Rails Project</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">PHP Project</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Titanium Desktop</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \">Titanium Mobile</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" alt=\"images/s/en_GB/5637/e1ef10868e8fe2f234a1a0b171b01cde1d9717c4.31/_/images/icons/emoticons/check.png\" class=\"emoticon emoticon-tick\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083315_ChangingYourProjectType-ChangingProjectNatures\">\n        <h2 class=\"heading \"><span>Changing Project Natures</span></h2>\n    <p>\nTo change the natures associated with a project:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRight-click on the project in question in the Project Explorer View.    </p>\n</li><li class=\" \">    <p>\nChoose <strong class=\" \">Properties &gt; Project Natures</strong>.    </p>\n</li><li class=\" \">    <p>\nSelect the natures most appropriate to your project.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">OK</strong>. It will ask to close and reopen your project.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"30083315_ChangingYourProjectType-AssociatedNatures\">\n        <h2 class=\"heading \"><span>Associated Natures</span></h2>\n    <p>\nBelow are the natures to associate with a project of a particular type:    </p>\n    <div class=\"section section-3 \" id=\"30083315_ChangingYourProjectType-Web\">\n        <h3 class=\"heading \"><span>Web</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWeb    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30083315_ChangingYourProjectType-PHP\">\n        <h3 class=\"heading \"><span>PHP</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWeb    </p>\n</li><li class=\" \">    <p>\nPHP    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30083315_ChangingYourProjectType-Rails\">\n        <h3 class=\"heading \"><span>Rails</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWeb    </p>\n</li><li class=\" \">    <p>\nRails    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30083315_ChangingYourProjectType-TitaniumMobile\">\n        <h3 class=\"heading \"><span>Titanium Mobile</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWeb    </p>\n</li><li class=\" \">    <p>\nTitanium Mobile    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30083315_ChangingYourProjectType-TitaniumDesktop\">\n        <h3 class=\"heading \"><span>Titanium Desktop</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nWeb    </p>\n</li><li class=\" \">    <p>\nTitanium Desktop    </p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083315\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Changing Your Project Type"});