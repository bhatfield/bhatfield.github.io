Ext.data.JsonP['Gradient']({"tagname":"class","name":"Gradient","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 1.8.0","ipad 1.8.0","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/View.yml"},"private":null,"id":"class-Gradient","members":{"cfg":[],"property":[{"name":"backfillEnd","tagname":"property","owner":"Gradient","meta":{"platform":["iphone 1.8.0","ipad 1.8.0"]},"id":"property-backfillEnd"},{"name":"backfillStart","tagname":"property","owner":"Gradient","meta":{"platform":["iphone 1.8.0","ipad 1.8.0"]},"id":"property-backfillStart"},{"name":"colors","tagname":"property","owner":"Gradient","meta":{"description":["<p>For information about color values, see the \"Colors\" section of {@link Titanium.UI}. </p>"]},"id":"property-colors"},{"name":"endPoint","tagname":"property","owner":"Gradient","meta":{},"id":"property-endPoint"},{"name":"endRadius","tagname":"property","owner":"Gradient","meta":{},"id":"property-endRadius"},{"name":"startPoint","tagname":"property","owner":"Gradient","meta":{},"id":"property-startPoint"},{"name":"startRadius","tagname":"property","owner":"Gradient","meta":{},"id":"property-startRadius"},{"name":"type","tagname":"property","owner":"Gradient","meta":{},"id":"property-type"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":143043,"files":[{"filename":"titanium.js","href":"titanium.html#Gradient"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.8.0</li><li class='platform-ipad'\n        title='iPad'>1.8.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 1.8.0'>iPhone 1.8.0</li><li class='platform-ipad' title='iPad since Titanium SDK 1.8.0'>iPad 1.8.0</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>A simple object defining a color gradient.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.8.0</li><li class='platform-ipad'\n        title='iPad'>1.8.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-backfillEnd' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-backfillEnd' class='name not-expandable'>backfillEnd</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Set to <code>true</code> to continue filling with the final color beyond the <code>endPoint</code>.</p>\n\n</div><div class='long'><p>Set to <code>true</code> to continue filling with the final color beyond the <code>endPoint</code>.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.8.0</li><li class='platform-ipad'\n        title='iPad'>1.8.0</li></ul></div></div></div><div id='property-backfillStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-backfillStart' class='name not-expandable'>backfillStart</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Set to <code>true</code> to continue filling with the starting color beyond the <code>startPoint</code>.</p>\n\n</div><div class='long'><p>Set to <code>true</code> to continue filling with the starting color beyond the <code>startPoint</code>.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.8.0</li><li class='platform-ipad'\n        title='iPad'>1.8.0</li></ul></div></div></div><div id='property-colors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-colors' class='name not-expandable'>colors</a><span> : String[]/<a href=\"#!/api/GradientColorRef\" rel=\"GradientColorRef\" class=\"docClass\">GradientColorRef</a>[]</span></div><div class='description'><div class='short'><p>An array of colors, as a color name or hex triplet.</p>\n\n</div><div class='long'><p>An array of colors, as a color name or hex triplet.</p>\n\n<p><p>For information about color values, see the \"Colors\" section of <a href=\"#!/api/Titanium.UI\" rel=\"Titanium.UI\" class=\"docClass\">Titanium.UI</a>. </p>\n\n</p></div></div></div><div id='property-endPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-endPoint' class='name expandable'>endPoint</a><span> : <a href=\"#!/api/Point\" rel=\"Point\" class=\"docClass\">Point</a></span></div><div class='description'><div class='short'>End point for the gradient. ...</div><div class='long'><p>End point for the gradient.</p>\n\n<p>Default: [object Object]</p></div></div></div><div id='property-endRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-endRadius' class='name not-expandable'>endRadius</a><span> : Number</span></div><div class='description'><div class='short'><p>For a radial gradient, the radius at the <code>endPoint</code>.</p>\n\n</div><div class='long'><p>For a radial gradient, the radius at the <code>endPoint</code>.</p>\n\n</div></div></div><div id='property-startPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-startPoint' class='name expandable'>startPoint</a><span> : <a href=\"#!/api/Point\" rel=\"Point\" class=\"docClass\">Point</a></span></div><div class='description'><div class='short'>Start point for the gradient. ...</div><div class='long'><p>Start point for the gradient.</p>\n\n<p>Default: [object Object]</p></div></div></div><div id='property-startRadius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-startRadius' class='name not-expandable'>startRadius</a><span> : Number</span></div><div class='description'><div class='short'><p>For a radial gradient, the radius at the <code>startPoint</code>.</p>\n\n</div><div class='long'><p>For a radial gradient, the radius at the <code>startPoint</code>.</p>\n\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gradient'>Gradient</span></div><a href='#!/api/Gradient-property-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>Type of gradient, either 'linear' or 'radial'. ...</div><div class='long'><p>Type of gradient, either 'linear' or 'radial'.</p>\n\n<p>Default: linear</p></div></div></div></div></div></div></div>"});