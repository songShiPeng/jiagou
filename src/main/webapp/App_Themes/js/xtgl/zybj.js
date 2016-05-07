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
		var resName = document.getElementById("resName");
		var resLink = document.getElementById("resLink");
		var description = document.getElementById("description");		

		$("#resName").blur( function () { 
		if(null == resName || resName.value.trim() == ""){
			document.getElementById("divresName").innerHTML="资源名称不可以为空";
			document.getElementById("divresName").className='STYLEcheck';
			return;
		}else{
			document.getElementById("divresName").innerHTML="";
			document.getElementById("divresName").className='';
		}		
		});
		
		$("#resLink").blur( function () { 
		if(null == resLink || resLink.value.trim() == ""){
			document.getElementById("divresLink").innerHTML="资源链接不可以为空";
			document.getElementById("divresLink").className='STYLEcheck';
			return;
		}else{
			document.getElementById("divresLink").innerHTML="";
			document.getElementById("divresLink").className='';
		}		
		});	
		
		
		$("#description").blur( function () { 
		if(null != description && description.value.length > 200){
			document.getElementById("divdescription").innerHTML="描述不能超过200个字符";
			document.getElementById("divdescription").className='STYLEcheck';
			return;
		}else{
			document.getElementById("divdescription").innerHTML="";
			document.getElementById("divdescription").className='';
		}	
		});	
				
	});
	
	function check() {
		var havevalidate = true;
		var resName = document.getElementById("resName");
		var resLink = document.getElementById("resLink");
		var description = document.getElementById("description");		
		
		if(null == resName || resName.value.trim() == ""){
			document.getElementById("divresName").innerHTML="资源名称不可以为空";
			document.getElementById("divresName").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("divresName").innerHTML="";
			document.getElementById("divresName").className='';
		}
		if(null == resLink || resLink.value.trim() == ""){
			document.getElementById("divresLink").innerHTML="资源链接不可以为空";
			document.getElementById("divresLink").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("divresLink").innerHTML="";
			document.getElementById("divresLink").className='';
		}		
		if(null != description && description.value.length > 200){
			document.getElementById("divdescription").innerHTML="描述不能超过200个字符";
			document.getElementById("divdescription").className='STYLEcheck';
			havevalidate = false;
		}else{
			document.getElementById("divdescription").innerHTML="";
			document.getElementById("divdescription").className='';
		}
		
   		return havevalidate; 

	}