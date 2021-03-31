// let arrowUp= ''
let getArrowUpObj = {
    arrowUp: '',
    on: function () {
    },
    off: function () {
    },
    set getArrowUp(value) {
        this.arrowUp = value;
        this.onScroll();
    },
    onScroll: function () {
        console.log(this.arrowUp);
    },
    toUp: function () {
    },
};
// document.addEventListener('DOMContentLoaded', getArrowUpObj.getArrowUp)
getArrowUpObj.getArrowUp = 'newValue';
//# sourceMappingURL=test.js.map