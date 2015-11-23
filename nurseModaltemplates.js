function nurseModalTemplate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;





jade_mixins["nav"] = jade_interp = function(page){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\">" + (jade.escape(null == (jade_interp = page) ? "" : jade_interp)) + "</a></li></ul></div>");
};
jade_mixins["logout"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"container-fluid\"><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li></ul></div>");
};













jade_mixins["nurseinput"] = jade_interp = function(type,unit){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"basic-addon1\" class=\"input-group-addon\">" + (jade.escape((jade_interp = type) == null ? '' : jade_interp)) + "(" + (jade.escape((jade_interp = unit) == null ? '' : jade_interp)) + ")</span><li class=\"list-group-item\"><input" + (jade.attr("placeholder", 'Please Enter ' + (type) + '', true, false)) + (jade.attr("id", type, true, false)) + " class=\"name form-control\"/></li>");
};
buf.push("<div id=\"myModal\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><!-- Modal content--><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" class=\"close\">×</button><h4 class=\"modal-title head-doc2\">Patient Record</h4></div><div class=\"modal-body\"><div class=\"tab-content\"><div id=\"home\" class=\"tab-pane fade in active\"><h4 class=\"head-doc2\">Macro Polo</h4><ul class=\"list-group\">");
jade_mixins["nurseinput"]('Weight','kg');
jade_mixins["nurseinput"]('Height','m');
jade_mixins["nurseinput"]('Temperature','celcius');
jade_mixins["nurseinput"]('Pulse','bpm');
jade_mixins["nurseinput"]('Blood Pressure','mmHg');
buf.push("</ul></div></div></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" class=\"btn btn-success\">Submit</button></div></div></div></div>");;return buf.join("");
}