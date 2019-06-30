/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It is a utility module that performs processing related to Axios.
 * This module does <strong>not control</strong> Axios processing.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript array utils
 * @license Open-source license 1.0
 * 
 * @information
 */

import axios       from 'axios'
import objectUtils from './ObjectUtils';

/** 서버측 경로를 설정 한다.*/
const host       = 'http://localhost';
const port       = '9090'       //routing to JSON Server

const serverHTTP = host+':'+port;

console.dir(serverHTTP);


/**
 * <pre>
 * Axis의 기본 설정 작업을 하며 이곳에서 <strong>기본 경로</strong>를 설정
 * 추후 CSRF토큰 및 보안과 공통 인자와 관련 된 설정을 추가하여 공통적으로 적용
 * </pre>
 */
const instanse = axios.create({
    baseURL: serverHTTP
});

var axiosUtils = ((e) => {

    
    /**
     * <pre>
     * 후 처리를 위한 이벤트 처리 항목
     * </pre>
     * @param {Object} o 후 처리를 위한 판정 객체
     */
    function _axiosEventHandler (o){
        
    };

    /**
     * <pre>
     * 에러 처리를 위한 에러 이벤트 함수
     * </pre>
     * @param {Error} error 에러 처리를 할 객체
     * @param {Function} c 사용자 콜백 이벤트 핸들러
     */
    function _handlerError(error, c) {

        // Axios의 공통 이벤트 핸들링 처리
        _axiosEventHandler(c);

        if(c) c(error);

        console.debug(error);
    }

    /**
     * 
     * @param {Object} data 데이터 처리를 위한 데이터 객체
     * @param {Function} c 사용자 콜백 이벤트 핸들러
     */
    function _handlerSuccess (data, c) {

        // Axios의 공통 이벤트 핸들링 처리
        _axiosEventHandler(c);

        if(c) c(data);
    }

    /**
    * <pre>
    * GET 메서드를 호출 하여 통신을 처리 한다.
    * </pre>
    * options
    * @member {String} url 서버와 매핑할 url
    * @member {Object} option XMLHttpRequests 통신 시에 사용할 옵션 값 (head 처리) 
    */
    function _get (options, param, callback) {

        if(objectUtils.isObject(options)) {
            var { url, option } = options;

        } else {

            var url = options;
            option  = {};
        }

        // 기본 값을 매핑한다
        url    = url    ||'/';
        param  = param  || {};
        option = option || {};

        // 동기화 처리를 위한 동기화 변수를 할당 (작업 중)
        var dialogTimer = option.sync == null ? false : option.sync;

        // 데이터 통신 처리
        instanse.get(url, {params : param}).then( data => {

            _handlerSuccess(data, callback);
            dialogTimer = false;
        }).catch( e =>{

            _handlerError(e, callback);
            dialogTimer = false;
        });

        // 동기 통신을 위한 wait 처리
        while(dialogTimer) {
            setTimeout(()=>{console.dir('wait...')}, 500);
        }

    }

    function _post (e, t, v) {

    }

    return {
        $get  : _get,
        $post : _post
    }
})();


/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return instanse(options)
            .then(onSuccess)
            .catch(onError);
}

//export default axiosUtils;