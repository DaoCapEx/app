import UniversalCookie from 'universal-cookie';

export default class Cookie{

    static cookie = new UniversalCookie();

    static setCookie(key, value){
        cookie.set(key, value, { path: '/' });
    }

    static getCookie(key){
        cookie.get(key, { path: '/' });
    }

    static isUserTokenSet(){
        return this.isKeySet('user-token');
    }

    static getUserToken(){
        return this.getCookie('user-token');
    }

    static isKeySet(key){
        return !!this.getCookie(key);
    }


}