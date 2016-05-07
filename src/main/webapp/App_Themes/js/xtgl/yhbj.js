String.prototype.trim=function(){  
return this.replace(/(^\s*)|(\s*$)/g, "");  
}  
String.prototype.ltrim=function(){  
 return this.replace(/(^\s*)/g,"");  
}  
String.prototype.rtrim=function(){  
return this.replace(/(\s*$)/g,"");  
} 


	
	$().ready(function() {
		var realName = document.getElementById("realName");
		var userName = document.getElementById("userName");
		var email = document.getElementById("email");		
		var mobilNo = document.getElementById("mobilNo");
		var description = document.getElementById("description");
		
		var companyName=document.getElementById("companyName");
		var departmentName=document.getElementById("departmentName");
		var b =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		
		$("#companyName").blur( function () { 
			if(null == companyName || companyName.value.trim() == ""){
				document.getElementById("div-companyName").innerHTML="单位不可以为空";
				document.getElementById("div-companyName").className='STYLEcheck';
				return;
			}else{
				document.getElementById("div-companyName").innerHTML="";
				document.getElementById("div-companyName").className='';
			}		
			});
		$("#departmentName").blur( function () { 
			if(null == departmentName || departmentName.value.trim() == ""){
				document.getElementById("div-departmentName").innerHTML="部门不可以为空";
				document.getElementById("div-departmentName").className='STYLEcheck';
				return;
			}else{
				document.getElementById("div-departmentName").innerHTML="";
				document.getElementById("div-departmentName").className='';
			}		
			});
		
		$("#realName").blur( function () { 
		if(null == realName || realName.value.trim() == ""){
			document.getElementById("lblrealName").innerHTML="姓名不可以为空";
			document.getElementById("lblrealName").className='STYLEcheck';
			return;
		}else{
			document.getElementById("lblrealName").innerHTML="";
			document.getElementById("lblrealName").className='';
		}		
		});
		
		$("#userName").blur( function () { 
		if(null == userName || userName.value.trim() == ""){
			document.getElementById("lbluserName").innerHTML="用户账号不可以为空";
			document.getElementById("lbluserName").className='STYLEcheck';
			return;
		}else{
			document.getElementById("lbluserName").innerHTML="";
			document.getElementById("lbluserName").className='';
		}		
		});	
		
		$("#mobilNo").blur( function () { 
		var myreg = /(^(((13[0-9]{1})|15[0-3]{1}|15[5-9]{1}|18[0-3]{1}|18[5-9]{1}|147)+\d{8})$)/;
		if(null == mobilNo || mobilNo.value.trim() == ""){				
           	document.getElementById("lblmobilNo").innerHTML="请输入有效手机号码"; 
            document.getElementById("lblmobilNo").className='STYLEcheck';
           	return;     	
        }else{
        	if (!myreg.test(mobilNo.value))
    		{ 
            	document.getElementById("lblmobilNo").innerHTML="请输入有效手机号码"; 
            	document.getElementById("lblmobilNo").className='STYLEcheck';
           	 	return;
        	}else{        	
        		document.getElementById("lblmobilNo").innerHTML=""; 
        		document.getElementById("lblmobilNo").className='';
        	}  
        }        	
		});
		
		$("#email").blur( function () { 
		if(null == email || email.value.trim() == ""){
			document.getElementById("lblemail").innerHTML="电子邮箱不可以为空";
			document.getElementById("lblemail").className='STYLEcheck';
			return;
		}else if(!b.test(email.value.trim())){
			document.getElementById("lblemail").innerHTML="电子邮箱格式不正确";
			document.getElementById("lblemail").className='STYLEcheck';
			return;
		}else{
			document.getElementById("lblemail").innerHTML="";
			document.getElementById("lblemail").className='';
		}		
		});		
		
		$("#description").blur( function () { 
		if(null != description && description.value.length > 1000){
			document.getElementById("lbldescription").innerHTML="教学研究方向不能超过1000个字符";
			document.getElementById("lbldescription").className='STYLEcheck';
			return;
		}else{
			document.getElementById("lbldescription").innerHTML="";
			document.getElementById("lbldescription").className='';
		}	
		});	
		
	});
	
	function check() {
		var havevalidate = true;
		var realName = document.getElementById("realName");
		var userName = document.getElementById("userName");
		var email = document.getElementById("email");
		var mobilNo = document.getElementById("mobilNo");
		var description = document.getElementById("description");			
		var b =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		var myreg = /(^(((13[0-9]{1})|15[0-3]{1}|15[5-9]{1}|18[0-3]{1}|18[5-9]{1}|147)+\d{8})$)/;
		if(null == realName || realName.value.trim() == ""){
			document.getElementById("lblrealName").innerHTML="姓名不可以为空";
			document.getElementById("lblrealName").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("lblrealName").innerHTML="";
			document.getElementById("lblrealName").className='';
		}	
   		if(null == userName || userName.value.trim() == ""){
			document.getElementById("lbluserName").innerHTML="用户账号不可以为空";
			document.getElementById("lbluserName").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("lbluserName").innerHTML="";
			document.getElementById("lbluserName").className='';
		}		
		if(null == mobilNo || mobilNo.value.trim() == ""){				
           	document.getElementById("lblmobilNo").innerHTML="请输入有效手机号码"; 
            document.getElementById("lblmobilNo").className='STYLEcheck';
            havevalidate = false; 	
        }else{
        	if (!myreg.test(mobilNo.value))
    		{
            	document.getElementById("lblmobilNo").innerHTML="请输入有效手机号码"; 
            	document.getElementById("lblmobilNo").className='STYLEcheck';
           	 	havevalidate = false;
        	}else{        	
        		document.getElementById("lblmobilNo").innerHTML=""; 
        		document.getElementById("lblmobilNo").className='';
        	} 
        }   
		if(null == email || email.value.trim() == ""){
			document.getElementById("lblemail").innerHTML="电子邮箱不可以为空";
			document.getElementById("lblemail").className='STYLEcheck';
			havevalidate = false;
		}else if(!b.test(email.value.trim())){
			document.getElementById("lblemail").innerHTML="电子邮箱格式不正确";
			document.getElementById("lblemail").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("lblemail").innerHTML="";
			document.getElementById("lblemail").className='';
		}		
		if(null != description && description.value.length > 1000){
			document.getElementById("lbldescription").innerHTML="教学研究方向不能超过1000个字符";
			document.getElementById("lbldescription").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("lbldescription").innerHTML="";
			document.getElementById("lbldescription").className='';
		}				
		
   		return havevalidate; 

	}