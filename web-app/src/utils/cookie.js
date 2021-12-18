import UniversalCookie from 'universal-cookie';

export default class Cookie{
    static cookie = new UniversalCookie();

    static setCookie(key, value){
        cookie.set(key, value, { path: '/' });
    }

    static getCookie(key){
        cookie.get(key, { path: '/' });
    }

    static isUserCookieSet(){
        return this.isKeySet('user-token');
    }

    static isKeySet(key){
        return !!this.getCookie(key);
    }


}