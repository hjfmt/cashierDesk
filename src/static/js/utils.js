const util = {
    isMobileNumber(phone) {
        let flag = false;
        let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
        if (phone == '') {
            flag = false;
        } else if (phone.length != 11) {
            flag = false;
        } else if (!myreg.test(phone)) {
            flag = false;
        } else {
            flag = true;
        }
        return flag;
    },

    //判断字符是否为空的方法
    isEmpty(obj) {
        if (typeof obj == "undefined" || obj == null || obj == "") {
            return true;
        } else {
            return false;
        }
    },

}

export default util;
