import Cookies from 'js-cookie'

export default class UserUtils {
    constructor() {
    }
    static getInfo() {
        var userinfo = Cookies.get('userinfo')
        if (userinfo != null) {
            userinfo = JSON.parse(atob(userinfo))
            return userinfo
        } else {
            return null
        }
        //Test userinfo
        // eyJ1aWQiOjEsInVzZXJuYW1lIjoid2hpdGVyb29tZWxpdGUiLCJlbWFpbCI6IndoaXRlcm9vbWVsaXRlQHByb3Rvbm1haWwuY29tIiwiZXhwIjoxMDB9=
        //Cookies.set('userinfo','eyJ1aWQiOjEsInVzZXJuYW1lIjoid2hpdGVyb29tZWxpdGUiLCJlbWFpbCI6IndoaXRlcm9vbWVsaXRlQHByb3Rvbm1haWwuY29tIiwiZXhwIjoxMDB9')
    }

}