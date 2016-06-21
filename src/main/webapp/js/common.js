/**
 * Created by zuohl on 2016/5/23.
 */
var RESULT_SUCCESS = 0;
var RESULT_BUSINESS_ERROR = 10;
var RESULT_EXCEPTION = 100;

function isNotEmpty(_str) {
    var tmp_str = jQuery.trim(_str);
    if (tmp_str && typeof(tmp_str)!="undefined" && tmp_str!="") {
        return true;
    }
    return false;
}

var setValue = function (key,value) {
    localStorage.setItem(key,value);
}

/**
 * 获取分页key值
 * @param key
 * @returns {number}
 */
var getValue = function (key) {
    var value = localStorage.getItem(key)
    return isNotEmpty(value)?value:"";
}

function getUrlParam(string) {
    var obj =  new Array();
    if (string.indexOf("?") != -1) {
        var string = string.substr(string.indexOf("?") + 1);
        var strs = string.split("&");
        for(var i = 0; i < strs.length; i ++) {
            var tempArr = strs[i].split("=");
            obj[i] = tempArr[1];
        }
    }
    return obj;
}
function getParameter(param)
{
    var query = window.location.search;
    var iLen = param.length;
    var iStart = query.indexOf(param);
    if (iStart == -1)
        return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);
    if (iEnd == -1)
        return query.substring(iStart);
    return query.substring(iStart, iEnd);
}

