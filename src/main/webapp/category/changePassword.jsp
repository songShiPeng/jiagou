<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=8; IE=9; IE=10; IE=11" />
<title>更改密码</title>
<link rel="stylesheet" type="text/css" href="./App_Themes/css/base.css" />

<script type="text/javascript" src="./App_Themes/js/testIE.js"></script>
<script language="javascript" type="text/javascript"
	src="./App_Themes/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="./App_Themes/js/checkHtml.js"></script>

<style type="text/css">
body {
	background:#FFF
}
ul.errorMessage {
	color: #FF3300;
}

ul.errorMessage {
	list-style-type: none;
	display: inline;
	margin: 0px;
	padding: 3px;
}

ul.errorMessage li {
	list-style-type: none;
	display: inline;
}
 
</style>
<script type="text/javascript">
var teacherNum=0;
function submitMe() { //提交表单
	
     if (check()) {
        document.getElementById('myForm').submit();
        document.getElementById('saveinfo').disabled=true; 
     }
     
}
function check(){
 	document.getElementById('newWord').innerHTML =  "";
	var new1 = document.getElementById('newWord').value;
	var new2 = document.getElementById('repeatWord').value;
	if(new1!=new2){
		 document.getElementById('div-newWord').innerHTML =  "两次输入不一致！";
		return false;
	}
	return true;
}
function load(){
<% String s=request.getParameter("isSuccess") ;%>;
var a=<s:property value="isSuccess"/>;
if(a==1)
	alert("更改成功，重新登录后生效");
else if(a==2)
	alert("密码不正确");
}
</script>
</head>

<body onload="load()">

	<s:form action="savePassword" namespace="/" id="myForm" method="post"
		enctype="multipart/form-data" theme="simple" cssClass="form_table">
		
		<table width="100%" border="0" align="center" cellpadding="0"
			cellspacing="0">
			<tr>
				<td height="30">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="15" height="30"><img
								src="./App_Themes/images/tab_03.gif" width="15" height="30" />
							</td>
							<td background="./App_Themes/images/tab_05.gif"><strong><img
									src="./App_Themes/images/311.gif" width="16" height="16" /> <span
									class="STYLE1">更改密码</span> </strong></td>
							<td width="14"><img src="./App_Themes/images/tab_07.gif"
								width="14" height="30" /></td>
						</tr>
					</table></td>
			</tr>
			<tr>
				<td>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="9" background="./App_Themes/images/tab_12.gif">
								&nbsp;</td>
							<td valign="top" bgcolor="#d3e7fc">
								<table width="100%">
									<tr>
										<td valign="top">
											<table width="100%" border="0" align="center" cellpadding="1"
												cellspacing="1" bgcolor="#CECECE">
												<tr>
													<td align="center" bgcolor="#FFFFFF" class="STYLE1"><br />
														<table width="80%" border="0" align="center"
															cellpadding="1" cellspacing="1" bgcolor="#CECECE">
															
															<tr>
																<td width="15%" height="26" align="right"
																	bgcolor="#FFFFFF" class="STYLE1">原密码：</td>
																<td width="35%" height="26" align="left"
																	bgcolor="#FFFFFF" class="STYLE23">
																	<s:password
																		name="password" id="password"
																		cssStyle="width:120px;" maxlength="30"></s:password>
																		
																	<span class="STYLE22">*</span>
																	<div id='div-password'
																		style="color:red;font-size:12px;font-weight:bold">
																		<s:fielderror
																			cssStyle="font-size:12px;color:red;text-align:left;font-weight:bold">
																			<s:param>password</s:param>
																		</s:fielderror>
																	</div></td>
																
																	
																
															</tr>
															<tr>
																<td width="15%" height="26" align="right"
																	bgcolor="#FFFFFF" class="STYLE1">新密码：</td>
																<td width="35%" height="26" align="left"
																	bgcolor="#FFFFFF" class="STYLE23">
																	<s:password name="newWord" id="newWord"
																		cssStyle="width:120px;" maxlength="30"></s:password>
																	
																		
																	<span class="STYLE22">*</span>
																	<div id='div-newWord'
																		style="color:red;font-size:12px;font-weight:bold">
																		<s:fielderror
																			cssStyle="font-size:12px;color:red;text-align:left;font-weight:bold">
																			<s:param>newWord</s:param>
																		</s:fielderror>
																	</div></td>
																
																	
																
															</tr>
															<tr>
																<td width="15%" height="26" align="right"
																	bgcolor="#FFFFFF" class="STYLE1">请再输一次：</td>
																<td width="35%" height="26" align="left"
																	bgcolor="#FFFFFF" class="STYLE23">
																	
																	<s:password
																		name="repeatWord" id="repeatWord"
																		cssStyle="width:120px;" maxlength="30" type="password"></s:password>
																		
																	<span class="STYLE22">*</span>
																	<div id='div-repeatWord'
																		style="color:red;font-size:12px;font-weight:bold">
																		<s:fielderror
																			cssStyle="font-size:12px;color:red;text-align:left;font-weight:bold">
																			<s:param>repeatWord</s:param>
																		</s:fielderror>
																	</div></td>
																
																	
																
															</tr>
																<tr>
																	<td height="40" colspan="6" align="center"
																		bgcolor="#FFFFFF" class="STYLE1">
																		
																		<input
																		type="button" id="saveinfo" value="保存"
																		onclick="javascript:submitMe();" /> <input
																		type="button" value="返回"
																		onclick="javascript:window.history.back();" /> 
																		</td>
																</tr>
																
																
														</table> </td>
												</tr>
											</table></td>
									</tr>
								</table></td>
							<td width="14" background="./App_Themes/images/tab_16.gif">
								&nbsp;</td>
						</tr>
					</table></td>
			</tr>
			<tr>
				<td height="29">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td width="15" height="29"><img
								src="./App_Themes/images/tab_20.gif" width="15" height="29" />
							</td>
							<td align="right" background="./App_Themes/images/tab_21.gif">
								&nbsp;</td>
							<td width="14"><img src="./App_Themes/images/tab_22.gif"
								width="14" height="29" /></td>
						</tr>
					</table></td>
			</tr>
		</table>
	
</s:form>
</body>
</html>
