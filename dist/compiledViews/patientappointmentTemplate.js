function patientappointmentTemplate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (department, docname, period, time) {
buf.push("<div class=\"row\"><div class=\"col-md-8 col-md-offset-2\"><div class=\"panel panel-default\"><div class=\"row\"><div id=\"appane\" style=\"margin: 0 0 0 20;\" class=\"panel-body col-sm-8\"><div style=\"margin: 0 0 0 10;\" class=\"row\"><div class=\"col-md-2\">เวลา</div><div class=\"col-xs-1\">:</div><div id=\"time\" class=\"col-md-5 color-grey\">" + (jade.escape((jade_interp = period) == null ? '' : jade_interp)) + "</div></div><div style=\"margin: 0 0 0 10;\" class=\"row\"><div class=\"col-md-2\">วันที่</div><div class=\"col-xs-1\">:</div><div id=\"date\" class=\"col-md-5 color-grey\"> " + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "</div></div><div style=\"margin: 0 0 0 10;\" class=\"row\"><div class=\"col-md-2\">แผนก</div><div class=\"col-xs-1\">:</div><div id=\"department\" class=\"col-md-5 color-grey\">" + (jade.escape((jade_interp = department) == null ? '' : jade_interp)) + "</div></div><div style=\"margin: 0 0 0 10;\" class=\"row\"><div class=\"col-md-2\">แพทย์</div><div class=\"col-xs-1\">:</div><div id=\"doctor\" class=\"col-md-5 color-grey\"> " + (jade.escape((jade_interp = docname) == null ? '' : jade_interp)) + "</div></div></div><div class=\"col-sm-3\"><div class=\"row\"><div id=\"postpone\" type=\"button\" data-toggle=\"modal\" data-target=\"#PostponeModal\" class=\"button btn btn-postpone btn-pc btn-md\">Postpone</div><!--#postpone.btn.btn-success.btn-pc.col Postpone--></div><div class=\"row\"><!--#cancel.btn.btn-warning.btn-pc Cancel--><div id=\"cancel\" type=\"button\" data-toggle=\"modal\" data-target=\"#CancelModal\" class=\"button btn btn-cancel btn-pc btn-md\">Cancel</div></div></div></div></div></div></div>");}.call(this,"department" in locals_for_with?locals_for_with.department:typeof department!=="undefined"?department:undefined,"docname" in locals_for_with?locals_for_with.docname:typeof docname!=="undefined"?docname:undefined,"period" in locals_for_with?locals_for_with.period:typeof period!=="undefined"?period:undefined,"time" in locals_for_with?locals_for_with.time:typeof time!=="undefined"?time:undefined));;return buf.join("");
}