/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It is a utility module that performs processing related to Object.
 * This module does <strong>not control</strong> Object processing.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript object utils
 * @license Open-source license 1.0
 * 
 * @information
 */


var objectUtils = {

    /**
     * <pre>
     * 객체 생성과 관련 된 추가적인 기능을 제공하는 함수
     * </pre>
     * 
     * @param {String} id 객체의 고유 번호 (캐싱 값이 true일 경우 id별로 고유 객체 할당)
     * 
     * @constant {Boolean} syncMessage 객체 생성 메시지 출력 여부 ( true일 경우 메시지 출력 )
     * @constant {Boolean} cached 객체 캐싱 여부 ( true 일 경우 고유 아이디 캡쳐 )
     * @constant {Boolean} over 메서드 오버 라이딩 여부 ( true 일 경우 메서드 인자에 따른 오버라이딩 적용 )
     */
    factory : (() => {

        const CONST_TYPE   = 'browser';

        var closureStorage = {};

        /**
         * <pre>
         * 사용자 인터페이스로 출력
         * </pre>
         */
        function _print() {
            if(CONST_TYPE === 'browser') {
                console.debug(`serial - ${this.syncSerializeNumber}, cached - ${this.cached}, methodOverload - ${this.over}`);
            }
        }

        /**
         * <pre>
         * 객체에 관한 전반적인 생성 알고리즘
         * </pre>
         */
        function makeObject() {

            // 동기화 처리를 위하여 임시 변수 증가
            this.syncSerializeNumber++;

            // 메시지 여부에 따라 출력
            if(this.syncMessage) {
                _print.bind(this)()
            }

            // 함수 오버리이딩 여부에
            // 따라 반환할 객체 타입 설정
            if(this.over) {
                return new Proxy({},{
                    set(t,k,v,r){
                        if(typeof v === 'function'){
                            if(!t[k]) {
                                var tf = function (){};
                                    tf.key = k;
                                t[k] = new Proxy(tf,{
                                    apply(t, at, a){
                                        if(!t[a.length])
                                            if(t.__proto__[t.key])
                                                return t.__proto__[t.key].apply(this,a);
                                            else
                                                throw new Error('실행 할 함수가 없습니다.') 
                                        return t[a.length].apply(this,a);
                                    }
                                });
                            }
                            t.__proto__[k] = t[k][v.length] = v;
                        } else {
                            t[k] = v;
                        }
                    }
                });
            } else {

                return {};
            }
        }

        /**
         * <pre>
         * 사용자 인터페이스를 통한 객체 생성 및 반환 처리
         * </pre>
         * 
         * @param {String} id 고유 id
         */
        function __object__(id) {

            // 캐싱 여부를 확인 하여 캐싱 객체 반환
            // 캐싱 되지 않을 경우 신규 객체 반환
            if(this.cached) {

                // 캐싱 된 객체 일 경우 캐싱 객체 반환
                // 캐싱 되지 않았을 경우 객체 생성 후 캐싱 처리
                if(closureStorage.hasOwnProperty(id)) {

                    return closureStorage[id];
                } else {

                    return closureStorage[id] = makeObject.bind(this)();
                }
            } else {

                return makeObject.bind(this)();
            }
        }

        return {
            get         : __object__,
            syncMessage : false,
            cached      : false,
            over        : false,
            syncSerializeNumber : Number.MIN_SAFE_INTEGER,
        }
    })(),

    /**
     * <pre>
     * 인자로 넘어 온 객체가 함수 객체 인지를 판별
     * </pre>
     * @param {Object} 판정 할 객체
     */
    isFunction : function(e) {

        return Object.prototype.toString.call(e) == '[object Function]'; 
    },

    /**
     * <pre>
     * 인자로 넘어 온 객체가 배열 객체 인지를 판별
     * </pre>
     * @param {Object} 판정 할 객체
     */
    isArray : function(e) {

        return Object.prototype.toString.call(e) == '[object Array]'; 
    },

    /**
     * <pre>
     * 인자로 넘어 온 객체가 순수 객체 인지를 판별
     * </pre>
     * @param {Object} 판정 할 객체
     */
    isObject : function(e) {

        return typeof e == 'object';
    },
}


export default objectUtils;