const accountReg = /^[\w_-]{4,16}$/;
const passwordReg = /^[\w_-]{6,16}$/;
const trueNameReg = /[^\u4E00-\u9FA5]/g;
const phone = /^1[3456789]\d{9}$/;

export {
    accountReg,
    passwordReg,
    trueNameReg,
    phone
}