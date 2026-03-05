/*
 * @Author: your name
 * @Date: 2021-04-21 18:04:34
 * @LastEditTime: 2021-04-21 18:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-docs/docs/index.js
 */



const dom = `<div class="jsx-324272986 window-controls"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg><div class="jsx-324272986 window-title-container"></div></div>`;

function parseDom(arg) {
    var objE = document.createElement("div");
    objE.innerHTML = arg;
    return objE.childNodes;
};

setTimeout(() => {
    const preDom = document.getElementsByTagName('pre');
    const preList = [...preDom];
    preList.forEach(el => {
        const code = el.childNodes[0];
        el.insertBefore(parseDom(dom)[0], code)
    })
}, 200);

window.onhashchange = function (params) {
    setTimeout(() => {
        const preDom = document.getElementsByTagName('pre');
        const preList = [...preDom];
        preList.forEach(el => {
            const code = el.childNodes[0];
            if (code.tagName === 'CODE') {
                el.insertBefore(parseDom(dom)[0], code)
            }
        })
    }, 200);
}

