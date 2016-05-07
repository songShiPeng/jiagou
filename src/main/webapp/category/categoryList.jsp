<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://www.springframework.org/tags/form"  prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=8; IE=9; IE=10; IE=11" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="./App_Themes/css/base.css" />
<script type="text/javascript"
	src="./App_Themes/js/jquery-1.8.2.min.js"></script>
	<style type="text/css">
body {
	background:#FFF
}
</style>
<title>商品类别列表</title>

</head>
<body>

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
								class="STYLE1"> <a href="examList.action" title="角色管理">商品类别列表</a>
							</span> </strong>
						</td>
						<td width="14"><img src="./App_Themes/images/tab_07.gif"
							width="14" height="30" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="9" background="./App_Themes/images/tab_12.gif">
							</td>
						<td valign="top" bgcolor="#d3e7fc">
							<table width="100%">
								<tr>
									<td>
										<table class="listTb" cellpadding="0" cellspacing="1">
											<tr>
												<td height="26" background="./App_Themes/images/tab_14.gif"
													class="STYLE1"><img
													src="./App_Themes/images/(02,44).png" width="16"
													height="16" /> &nbsp;查询条件</td>
											</tr>
											
										</table>
									</td>
								</tr>
								<tr>
									<td valign="top">
										<table class="listTb" cellpadding="1" cellspacing="1">
											<tr>
												<td colspan="13" class="listTbTitle">&nbsp;&nbsp; <span
													class="STYLE1">商品类别列表</span>
												</td>
											</tr>

											<tr>
												<th width="5%">编号</th>
												<th width="60%">类别名称</th>
											      
											      <th width="15%">操作</th>
											      
											</tr>
											
												 <c:forEach items="${categoryList}" var="st">
    	<tr>
    <td><c:out value="${st.id}"/></td>
         <td><c:out value="${st.categoryName}"/></td>
        
       
        

														<td style="text-align: center;"><a
															href='categoryShow.html'
															class="ssusers">编辑</a>
															
														</td>
													</tr>

												</c:forEach>
											

										</table>
									</td>
								</tr>
							</table>
						</td>
						<td width="14" rowspan="3"
							background="./App_Themes/images/tab_16.gif">&nbsp;</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td height="29">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="15" height="29"><img
							src="./App_Themes/images/tab_20.gif" width="15" height="29" />
						</td>
						<td align="center" background="./App_Themes/images/tab_21.gif"
							class="STYLE1">
							
						</td>
						<td width="14"><img src="./App_Themes/images/tab_22.gif"
							width="14" height="29" />
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
