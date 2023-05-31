"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Once = void 0;
const generator_1 = require("../../generator");
const Once = () => {
    return (0, generator_1.generate)((fn) => {
        let ready = false;
        let result;
        return function (...args) {
            if (ready) {
                return result;
            }
            ready = true;
            // @ts-ignore
            result = fn.apply(this, args);
            return result;
        };
    });
};
exports.Once = Once;
//# sourceMappingURL=index.js.map