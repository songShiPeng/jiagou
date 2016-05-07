/**
 * 表单提交的校验
 *
 * @param {checkType} 校验类型。
 *			整数:校验不为空的整数
 *          小数:校验不为空的浮点数
 *			固话:校验不为空的固定电话
 *          手机:校验不为空的手机号 
 *          邮箱:校验不为空的邮箱
 *          邮编:校验不为空的邮编 
 *          身份证:校验不为空的身份证    
 *          IP:校验不为空的IP 
 *          字符:校验不为空的字符
 *          校空:校验不为空
 *
 * @param {controlId} 被校验控件的id。
 * @param {divId} 错误信息显示的层的id。
 * @param {checkName} 校验项目的中文描述。
 * @param {strLen} 允许的字符串最大长度。
 *   
 * @return void
 */
function submitCheck(checkType, controlId, divId, checkName, strLen) {
    var Obj = document.getElementById(controlId);
    document.getElementById(divId).innerHTML = '';
    if (checkType == "整数" || checkType == "小数" || checkType == "固话" || checkType == "手机" || checkType == "邮箱" || checkType == "邮编" || checkType == "身份证" || checkType == "IP") {
        var reg;
        if (checkType == "整数") {
            reg = /^[1-9]\d*$/;
        } else if (checkType == "小数") {
            reg = /^(-?\d+)(\.\d+)?$/;
        } else if (checkType == "固话") {
            reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        } else if (checkType == "手机") {
            reg = /(^(((13[0-9]{1})|15[0-3]{1}|15[5-9]{1}|18[0-3]{1}|18[5-9]{1}|147)+\d{8})$)/;
        } else if (checkType == "邮箱") {
            reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        } else if (checkType == "邮编") {
            reg = /^\d{6}$/;
        } else if (checkType == "身份证") {
            reg = /^[0-9]{17}[0-9A-Za-z]{1}$|^[0-9]{14}[0-9A-Za-z]{1}$/;
        } else if (checkType == "IP") {
            reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        }

        if (Obj == null || Obj.value.trim() == "") {
            document.getElementById(divId).innerHTML = checkName + "不能为空!";
            return false;
        } else if (!reg.test(Obj.value.trim())) {
            document.getElementById(divId).innerHTML = checkName + "必须是格式正确的" + checkType + "!";
            return false;
        }
        return true;
    } else {
        if (checkType == "字符") {
            if (Obj == null || Obj.value.trim() == "") {
                document.getElementById(divId).innerHTML = checkName + "不能为空!";
                return false;
            } else if (len(Obj.value.trim()) > strLen) {
                document.getElementById(divId).innerHTML = checkName + "不能超过" + strLen + "个字符!";
                return false;
            }
            return true;
        }

        if (checkType == "校空") {
            if (Obj == null || Obj.value.trim() == "") {
                document.getElementById(divId).innerHTML = checkName + "不能为空!";
                document.getElementById(divId).className = 'STYLEcheck';
                return false;
            }
            return true;
        }
    }
}

/**
 * 控件丢失焦点的校验
 *
 * @param {checkType} 校验类型。
 *			整数:校验不为空的整数
 *          小数:校验不为空的浮点数
 *			固话:校验不为空的固定电话
 *          手机:校验不为空的手机号 
 *          邮箱:校验不为空的邮箱
 *          邮编:校验不为空的邮编 
 *          身份证:校验不为空的身份证    
 *          IP:校验不为空的IP 
 *          字符:校验不为空的字符
 *          校空:校验不为空
 *
 * @param {controlId} 被校验控件的id 。
 * @param {divId} 错误信息显示的层的id。
 * @param {checkName} 校验项目的中文描述。
 * @param {strLen} 允许的字符串最大长度。
 *   
 * @return void
 */
function focusCheck(checkType, controlId, divId, checkName, strLen) {
    var Obj = document.getElementById(controlId);

    if (checkType == "整数" || checkType == "小数" || checkType == "固话" || checkType == "手机" || checkType == "邮箱" || checkType == "邮编" || checkType == "身份证" || checkType == "IP") {
        var reg;
        if (checkType == "整数") {
            reg = /^[1-9]\d*$/;
        } else if (checkType == "小数") {
            reg = /^(-?\d+)(\.\d+)?$/;
        } else if (checkType == "固话") {
            reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        } else if (checkType == "手机") {
            reg = /(^(((13[0-9]{1})|15[0-3]{1}|15[5-9]{1}|18[0-3]{1}|18[5-9]{1}|147)+\d{8})$)/;
        } else if (checkType == "邮箱") {
            reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        } else if (checkType == "邮编") {
            reg = /^\d{6}$/;
        } else if (checkType == "身份证") {
            reg = /^[0-9]{17}[0-9A-Za-z]{1}$|^[0-9]{14}[0-9A-Za-z]{1}$/;
        } else if (checkType == "IP") {
            reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        }

        $("#" + controlId).blur(function() {
            if (null == Obj || Obj.value.trim() == "") {
                document.getElementById(divId).innerHTML = checkName + "不能为空!";
                document.getElementById(divId).className = 'STYLEcheck';
                return;
            } else if (!reg.test(Obj.value.trim())) {
                document.getElementById(divId).innerHTML = checkName + "必须是格式正确的" + checkType + "!";
                document.getElementById(divId).className = 'STYLEcheck';
                return;
            } else {
                document.getElementById(divId).innerHTML = "";
                document.getElementById(divId).className = '';
            }
        });

    } else {
        if (checkType == "字符") {
            $("#" + controlId).blur(function() {
                if (null == Obj || Obj.value.trim() == "") {
                    document.getElementById(divId).innerHTML = checkName + "不能为空!";
                    document.getElementById(divId).className = 'STYLEcheck';
                    return;
                } else if (len(Obj.value.trim()) > strLen) {
                    document.getElementById(divId).innerHTML = checkName + "不能超过" + strLen + "个字符!";
                    document.getElementById(divId).className = 'STYLEcheck';
                    return;
                } else {
                    document.getElementById(divId).innerHTML = "";
                    document.getElementById(divId).className = '';
                }
            });
        }

        if (checkType == "校空") {
            $("#" + controlId).blur(function() {
                if (null == Obj || Obj.value.trim() == "") {
                    document.getElementById(divId).innerHTML = checkName + "不能为空!";
                    document.getElementById(divId).className = 'STYLEcheck';
                    return;
                } else {
                    document.getElementById(divId).innerHTML = "";
                    document.getElementById(divId).className = '';
                }
            });
        }
    }
}
/**
 * 验证字符串长度（中英文混合）
 *
 * @param {str} 需要计算的字符串。
   
 * @return {strLength} 字符串长度
 */
function len(str) {
    var strLength = 0;
    var a = str.split("");
    for (var i = 0; i < a.length; i++) {
        if (a[i].charCodeAt(0) < 299) {
            strLength++;
        } else {
            strLength += 2;
        }
    }
    return strLength;
}


//替换特殊字符串
String.prototype.trim=function(){  
	return this.replace(/(^\s*)|(\s*$)/g, "");  
}
  
String.prototype.ltrim=function(){  
	return this.replace(/(^\s*)/g,"");  
}
  
String.prototype.rtrim=function(){  
	return this.replace(/(\s*$)/g,"");  
}