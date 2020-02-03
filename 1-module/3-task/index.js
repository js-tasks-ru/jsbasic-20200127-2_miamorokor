/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    let newstr =str.charAt(0).toUpperCase()+str.slice(1);
    return newstr;
}
alert (ucFirst('ckjd'));