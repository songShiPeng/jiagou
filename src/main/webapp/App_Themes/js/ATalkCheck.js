	//检测是否存在本地程序预设组件ID
	function aTalkCheckTool(y,m){
		var downLoadPath = "http://szezupdate.ztbong.cc:6789/setup.exe";		
		var realPath = "hqq://" + y +"&" + m;
		 
		var toolStr = "EBOARD.eBoardCtrl.1";

		if(!testActiveX(toolStr)){
			if(confirm("您可能还没有安装点e通PC客户端,点击确定开始下载!")){
				openInBlankWindow(downLoadPath);
			}else{
				 
			}
		}else{
			window.location.href =realPath;	
		}
	}
	
	//浏览器版本为IE时通过检测activeX的方式测试是否安装了本地程序预设组件
	function testActiveX(str){
		try{
			var obj;   
	  		//obj=new ActiveXObject(str);
			
	  		return true; 
	  	}catch(e){
	  		return false;	
	  	}
		//alert('您已经安装了插件')
		return false;
	}
	
 
	//在新窗口打开页面
	function openInBlankWindow(_url){
     		var obj=document.createElement('form');
     		obj.action=_url;
     		obj.target="_blank";
     		document.documentElement.appendChild(obj);
     		obj.submit();                                
  }