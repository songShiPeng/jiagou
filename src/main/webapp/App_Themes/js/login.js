
if (top.location !== self.location) {
	top.location = self.location;
}
function loginsubmit() {
	if ($("input.userInput").val() == "" || $("input.passInput").val() == "") {
		alert("\u7528\u6237\u540d\u6216\u5bc6\u7801\u4e0d\u5141\u8bb8\u4e3a\u7a7a");
		return;
	} else {
		if ($("#login_hidden").val() == 0) {
			$("#login_hidden").val(1);
			$("#mylogin").submit();
		}
	}
}

