Ext.data.JsonP['closeWindowParams']({"tagname":"class","name":"closeWindowParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Window.yml"},"private":null,"id":"class-closeWindowParams","members":{"cfg":[],"property":[{"name":"activityEnterAnimation","tagname":"property","owner":"closeWindowParams","meta":{"description":["<p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of Titanium.UI.Window\nfor more information.</p>"]},"id":"property-activityEnterAnimation"},{"name":"activityExitAnimation","tagname":"property","owner":"closeWindowParams","meta":{"description":["<p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of Titanium.UI.Window\nfor more information.</p> \n\n<h3>Examples</h3>\n<h4>Fading out a Window</h4>\n<pre><code>win2.close({\n    activityEnterAnimation: Ti.Android.R.anim.fade_in,\n    activityExitAnimation: Ti.Android.R.anim.fade_out\n});</code></pre>"]},"id":"property-activityExitAnimation"},{"name":"animated","tagname":"property","owner":"closeWindowParams","meta":{"description":["<p>This property supports animated transitions on heavyweight windows\nexcept for modal windows (<code>modal:true</code>).  See \"Android Heavyweight and Lightweight\nWindows\" in the main description of Titanium.UI.Window for more information. The\ntransitions are on by default, but you can disable this behavior by setting this value\nto <code>false</code>.</p>"]},"id":"property-animated"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":199067,"files":[{"filename":"titanium.js","href":"titanium.html#closeWindowParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.2.0'>Android 3.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary of options for the <a href=\"#!/api/Titanium.UI.Window-method-close\" rel=\"Titanium.UI.Window-method-close\" class=\"docClass\">Titanium.UI.Window.close</a> method.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activityEnterAnimation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='closeWindowParams'>closeWindowParams</span></div><a href='#!/api/closeWindowParams-property-activityEnterAnimation' class='name not-expandable'>activityEnterAnimation</a><span> : Number</span></div><div class='description'><div class='short'><p>Animation resource to use for the incoming activity.</p>\n\n</div><div class='long'><p>Animation resource to use for the incoming activity.</p>\n\n<p><p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>\nfor more information.</p>\n\n</p></div></div></div><div id='property-activityExitAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='closeWindowParams'>closeWindowParams</span></div><a href='#!/api/closeWindowParams-property-activityExitAnimation' class='name not-expandable'>activityExitAnimation</a><span> : Number</span></div><div class='description'><div class='short'><p>Animation resource to use for the outgoing activity (heavyweight window).</p>\n\n</div><div class='long'><p>Animation resource to use for the outgoing activity (heavyweight window).</p>\n\n<p><p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>\nfor more information.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Fading out a Window</h4>\n\n\n<pre><code>win2.close({\n    activityEnterAnimation: Ti.Android.R.anim.fade_in,\n    activityExitAnimation: Ti.Android.R.anim.fade_out\n});</code></pre>\n\n</p></div></div></div><div id='property-animated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='closeWindowParams'>closeWindowParams</span></div><a href='#!/api/closeWindowParams-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether to use an animated effect when the window is closed. ...</div><div class='long'><p>Determines whether to use an animated effect when the window is closed.</p>\n\n<p><p>This property supports animated transitions on heavyweight windows\nexcept for modal windows (<code>modal:true</code>).  See \"Android Heavyweight and Lightweight\nWindows\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information. The\ntransitions are on by default, but you can disable this behavior by setting this value\nto <code>false</code>.</p>\n\n</p><p>Default: true</p></div></div></div></div></div></div></div>"});