//// JavaScript Document
//function senfe(o,a,b,c,d,e){
//	var t=document.getElementById(o).getElementsByTagName("tr");
//	for(var i=0;i<t.length;i++){
//		t[i].style.backgroundColor=(t[i].sectionRowIndex%2==0)?a:b;
//		t[i].onclick=function(){
//			if(this.x!="1"){
//				this.x="1";//本来打算直接用背景色判断，FF获取到的背景是RGB值，不好判断
//				this.style.backgroundColor=d;
//			}else{
//				this.x="0";
//				this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
//			}
//		}
//		t[i].onmouseover=function(){
//			if(this.x!="1")this.style.backgroundColor=c;
//		}
//		t[i].onmouseout=function(){
//			if(this.x!="1")this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
//		}
//	}
//}

// JavaScript Document
function senfe(o) {
    var a = "#fff";  //濂囨暟琛岃儗鏅?
    var b = "#f4f4f4";     //鍋舵暟琛岃儗鏅?
    var c = "#fffde5";  //榧犳爣缁忚繃鑳屾櫙
    var d = "#ffef6a";  //鐐瑰嚮鍚庤儗鏅?
   var obj= document.getElementById(o);
    if(obj!=null){
	    var tr=obj.getElementsByTagName("tr");
	    if(tr!=null)
	    for(var i=0;i<tr.length;i++){
		    tr[i].style.backgroundColor=(tr[i].sectionRowIndex%2==0)?a:b;
    //		t[i].onclick=function(){
    //			if(this.x!="1"){
    //				this.x="1";//鏈潵鎵撶畻鐩存帴鐢ㄨ儗鏅壊鍒ゆ柇锛孎F鑾峰彇鍒扮殑鑳屾櫙鏄疪GB鍊硷紝涓嶅ソ鍒ゆ柇
    //				this.style.backgroundColor=d;
    //			}else{
    //				this.x="0";
    //				this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
    //			}
    //		}
		    tr[i].onmouseover=function(){
			    if(this.x!="1")this.style.backgroundColor=c;
		    }
		    tr[i].onmouseout=function(){
			    if(this.x!="1")this.style.backgroundColor=(this.sectionRowIndex%2==0)?a:b;
		    }
	    }
	}
}