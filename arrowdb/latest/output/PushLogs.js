Ext.data.JsonP['PushLogs']({"tagname":"class","name":"PushLogs","alternateClassNames":[],"mixins":[],"meta":{"pseudo":true},"aliases":{},"files":[{"filename":"PushLogs.yml","href":"/var/lib/jenkins/jobs/appc-docs/workspace/cloud_docs/apidoc/PushLogs/PushLogs.yml"}],"members":{"cfg":[],"property":[{"name":"_id","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-_id"},{"name":"app_id","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-app_id"},{"name":"channel","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-channel"},{"name":"created_at","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-created_at"},{"name":"payload","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-payload"},{"name":"push_schedule_id","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-push_schedule_id"},{"name":"scheduled_at","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-scheduled_at"},{"name":"to_ids","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-to_ids"},{"name":"updated_at","tagname":"property","owner":"PushLogs","meta":{"[:hide]":false},"id":"property-updated_at"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html_meta":{"pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>The data type for objects returned by <a href=\"#!/api/Logs-method-querypushlogs\" rel=\"Logs-method-querypushlogs\" class=\"docClass\">Logs.querypushlogs</a>. To get details about a specific\nnotifiction log item, call <a href=\"#!/api/Logs-method-querypushlogdetails\" rel=\"Logs-method-querypushlogdetails\" class=\"docClass\">Logs.querypushlogdetails</a> passing it the value of\n<a href=\"#!/api/PushLogs-property-_id\" rel=\"PushLogs-property-_id\" class=\"docClass\">PushLogs._id</a>.</p>\n<p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Fields</h3><div class='subsection'><div id='property-_id' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-_id' class='name not-expandable'>_id</a><span> : String</span></div><div class='description'><div class='short'><p>Log item ID.</p>\n</div><div class='long'><p>Log item ID.</p>\n</div></div></div><div id='property-app_id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-app_id' class='name not-expandable'>app_id</a><span> : String</span></div><div class='description'><div class='short'><p>Application ID.</p>\n</div><div class='long'><p>Application ID.</p>\n</div></div></div><div id='property-channel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-channel' class='name not-expandable'>channel</a><span> : String</span></div><div class='description'><div class='short'><p>Name of the channel to which the push notification was delivered.</p>\n</div><div class='long'><p>Name of the channel to which the push notification was delivered.</p>\n</div></div></div><div id='property-created_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-created_at' class='name not-expandable'>created_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Date that push notification was created.</p>\n</div><div class='long'><p>Date that push notification was created.</p>\n</div></div></div><div id='property-payload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-payload' class='name not-expandable'>payload</a><span> : String</span></div><div class='description'><div class='short'><p>Notification payload.</p>\n</div><div class='long'><p>Notification payload.</p>\n</div></div></div><div id='property-push_schedule_id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-push_schedule_id' class='name expandable'>push_schedule_id</a><span> : String</span></div><div class='description'><div class='short'>ID of the PushSchedules used to create the push notification (only present if the push notification\nwas created by a ...</div><div class='long'><p>ID of the <a href=\"#!/api/PushSchedules\" rel=\"PushSchedules\" class=\"docClass\">PushSchedules</a> used to create the push notification (only present if the push notification\nwas created by a PushSchedule).</p>\n</div></div></div><div id='property-scheduled_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-scheduled_at' class='name not-expandable'>scheduled_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Date that push notification was scheduled (only present if the push notification\nwas created by a schedule.)</p>\n</div><div class='long'><p>Date that push notification was scheduled (only present if the push notification\nwas created by a schedule.)</p>\n</div></div></div><div id='property-to_ids' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-to_ids' class='name not-expandable'>to_ids</a><span> : Array</span></div><div class='description'><div class='short'><p>Array of User IDs that push notification was delivered to.</p>\n</div><div class='long'><p>Array of User IDs that push notification was delivered to.</p>\n</div></div></div><div id='property-updated_at' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushLogs'>PushLogs</span></div><a href='#!/api/PushLogs-property-updated_at' class='name not-expandable'>updated_at</a><span> : Date</span></div><div class='description'><div class='short'><p>Date that push notification was updated.</p>\n</div><div class='long'><p>Date that push notification was updated.</p>\n</div></div></div></div></div></div></div>"});