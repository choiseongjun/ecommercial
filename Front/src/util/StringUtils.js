/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It is based on open source and does <strong>not have responsibility</strong>
 * for secondary processing.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript string utils
 * @license Open-source license 1.0
 * 
 * @information
 */

 
var stringUtils = {

    /**
     * <pre>
     * 인자로 넘어온 값의 공백을 제거
     * </pre>
     * @param {String} str 
     */
    trim : function (str) {
        return str.replace(/^\s+|\s+$/g,'');
    },

    /**
     * <pre>
     * 인자로 넘어온 값의 빈값을 검사
     * </pre>
     * @param {String} strValue 
     */
    isEmpty: function (strValue) {
        return strValue == undefined || strValue == null || strValue == '' || strValue == 'empty' ? true : false;
    },

    /**
     * <pre>
     * 인자로 넘어온 값의 값 존재 여부를 판별 한다.
     * </pre>
     * @param {String} strValue 
     */
    isNotEmpty: function (strValue) {
        return stringUtils.isEmpty(strValue) == false ? true : false;
    },

    /**
     * <pre>
     * 인자로 넘어온 값의 값이 빈 값일 경우 기본값을 표기
     * </pre>
     * @param {String} strValue  확인 할 값
     * @param {String} defaultValue 빈 값 일 경우 바인딩
     */
    defaultIfEmpty: function (strValue, defaultValue) {
        defaultValue = stringUtils.isEmpty(defaultValue) ? '' : defaultValue;
        return stringUtils.isEmpty(strValue) ? defaultValue : strValue;
    },

    /**
     * <pre>
     * 인자로 넘어온 문자열에서 구분자를 사용하여 왼쪽부터 추출
     * </pre>
     * 
     * @param {String} sourceStr 추출 할 문자열 
     * @param {Char} findStr 구분자
     */
    left : function (sourceStr, findStr) {
        var index = sourceStr.indexOf(findStr);
        if(index < 0) {	return ""; }
        else { return (sourceStr.substring(0, index)); }
    },

    /**
     * <pre>
     * 인자로 넘어온 문자열에서 구분자를 사용하여 오른쪽부터 추출
     * </pre>
     * 
     * @param {String} sourceStr 추출 할 문자열 
     * @param {Char} findStr 구분자
     */
    right : function (sourceStr, findStr) {
        var index = sourceStr.indexOf(findStr);
        if(index < 0) { return ""; }
        else { var len = sourceStr.length; return (sourceStr.substring(index+findStr.length, len)); }
    },

    /**
     * <pre>
     * 인자로 넘어온 문자열에서 구분자를 사용하여 왼쪽부터 역으로 추출
     * </pre>
     * 
     * @param {String} sourceStr 추출 할 문자열 
     * @param {Char} findStr 구분자
     */
    rightBack : function (sourceStr, findStr){
        var index = sourceStr.lastIndexOf(findStr);
        if (index < 0) { return ""; }
        else { return (sourceStr.substring(index+findStr.length, sourceStr.length)); }
    },

    /**
     * <pre>
     * 인자로 넘어온 문자열에서 인덱스를 사용하여 왼쪽 부터 추출
     * </pre>
     * 
     * @param {String} sourceStr 추출 할 문자열 
     * @param {int} idx 인덱스
     */
    leftIndex : function (sourceStr, idx) {
        if (idx <= 0) { return ""; }
        else if (idx > String(sourceStr).length) { return sourceStr; }
        else { return String(sourceStr).substring(0, idx); }
    },

    /**
     * <pre>
     * 인자로 넘어온 문자열에서 인덱스를 사용하여 오른쪽 부터 추출
     * </pre>
     * 
     * @param {String} sourceStr 추출 할 문자열 
     * @param {int} idx 인덱스
     */
    rightIndex : function (sourceStr, idx) {
        if (idx <= 0) { return ""; }
        else if (idx > String(sourceStr).length) { return sourceStr; }
        else { var len = String(sourceStr).length; return String(sourceStr).substring(len, len - idx); }
    },

    /**
     * <pre>
     * 자리 수 마다 표기법에 따른 콤마 기호를 생성하여 반환
     * </pre>
     * 
     * @param {String} m 기호 반영에 참여 할 문자열
     */
    fnCommaFormat : function (m){
        var a,b;
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = '.' + nums[1];
        } else {
            a = m; b = "";
        }
        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + b;
    },

    /**
     * <pre>
     * 빈 값일 경우 해당 두번째로 넘어온 인자를 반환 (nvl2 version ex)
     * </pre>
     * 
     * @param {String} str 확인 할 문자열
     * @param {String} def 기본 값
     */
    defaultString : function(str, def) {
        if(this.isEmpty(def)) {
            def = '';
        }
        return this.isEmpty(str) ? def : str;
    },

    /**
     * <pre>
     * 세자리수 마다 콤마처리 + 원을 추가 하여 처리
     * </pre>
     * 
     * @param {String} m 확인 할 문자열
     */
    fnWonFormat : function (m){
        return this.defaultString(this.fnCommaFormat(m), "0")+" 원";
    },

    /**
     * <pre>
     * 인자로 넘어온 값에 추가적으로 digits 숫자 만큼의 0을 추가 하여 처리
     * </pre>
     * 
     * @param {String} n 추가 할 값
     * @param {Number} digits 추가 할 가중치
     */
    leadingZeros : function (n, digits) {
        var zero = '';
        n = n.toString();
        if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++) {
                zero += '0';
            }
        }
        return zero + n;
    },

    /**
     * <pre>
     * 숫자 3째자리에 콤마붙이기, 소수점 기본 할당 또는 소수점 표현자리수 지정
     * </pre>
     * 
     * @param {Number:String} m 변환 할 값
     * @param {Number} s 소수 단위 처리 (기본값은 정수)
     */
    fnCommaDecimalFormat : function (m, s){
        if(m === undefined || m == null) {return "-";}
        if(s === undefined){
            s = 0;
        }
        m = Number(m).toFixed(s);
        var a,b;
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = '.' + nums[1];
        } else {
            a = m; b = "";
        }

        return a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + b;
    },

    /**
     * <pre>
     * 인자로 넘어온 값을 확인 하여 콤마(',') 처리 및
     * 추가적으로 <strong>원</strong> 단위 처리
     * </pre>
     * 
     * @param {Number:String} m 변환 할 값
     * @param {Number} s 소수 단위 처리 (기본값은 정수)
     */
    fnUnitChangeAndCommaFormat : function (m, s){
        if(m === undefined || m == null) 
        {
            var returnValue = new Array();
            returnValue.push("-");
            returnValue.push("원");
            return returnValue;
        }
        var a,b;
        var unit = '원';
        if (m.toString().indexOf('.') != -1) {
            var nums = m.toString().split('.');
            a = nums[0]; b = nums[1];
        } else {
            a = m; b = "";
        }
        if(unit == "원"){
            if(a.toString().length >= 7){
                a = Number(a) / Number(1000) / Number(1000);
                unit = "만원";
            }
            else if(a.toString().length >= 4){
                a = Number(a) / 1000;
                unit = "만원";
            }
        }

        var tempa; var tempb;
        if (a.toString().indexOf('.') != -1) {
            var tempnums = a.toString().split('.');
            tempa = tempnums[0]; tempb = tempnums[1];
        } else {
            tempa = a; tempb = "";
        }

        var value = tempa.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +"." +tempb+ b;
        if(s === undefined){
            s = 2;
        }
        //var returnValue = Number(value).toFixed(s);
        var tempValue = value.toString().split(".");    //.substr(0, s);
        if(tempValue[1].length < s){
            var createLength = s - tempValue[1].length
            var createzero = "";
            for(var i=0;i<createLength;i++){
                createzero += "0";
            }
            tempValue[1] = tempValue[1] + createzero;
        }
        var numberValue = tempValue[0] +  "." + tempValue[1].substr(0,s);
        
        var returnValue = new Array();
        returnValue.push(numberValue);
        returnValue.push(unit);
        return  returnValue;
    },

    /**
     * <pre>
     * 인자로 넘어온 값이 숫자인지를 판별
     * </pre>
     * @param {Number} s 확인 할 숫자 값
     */
    isNumber : function(s){
        var regExp = /^[0-9]+$/;
        if (!regExp.test(s)) {
            return false;
        } else {
            return true;
        }
    },

    /**
     * <pre>
     * 인자로 넘어온 값을 제이슨 타입으로 타입 치환
     * </pre>
     * 
     * @param {*} $form 
     */
    formDataToJsonStr: function($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        Array.map(unindexed_array, function(n, i){
            console.log("# formDataToJsonStr :["+i+"] - "+n['name']+":"+n['value'])
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    },

    /**
     * <pre>
     * 인자로 넘어온 전체 항목에 관하여 replace 처리
     * </pre>
     * 
     * @param {*} 수정 할 인자
     * @param {Char} 확인 할 문자
     * @param {Char} 수정 할 문자
     */
    replaceAll : function (str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
    }
}

export default stringUtils