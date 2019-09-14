(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("var cars = ['honda', 'bmw'];\nvar userInfo = {\n  name: 'Patrick',\n  lastName: 'Ly',\n  age: 28,\n  // cars: cars\n  cars\n}; // var { name, lastName, age } = userInfo;\n// console.log(name, age, lastName);\n\nconsole.log(userInfo.cars);\n/* \nvar userData = (data) => {\n\tvar name = data.name;\n\tvar lastName = data.lastName;\n\tvar age = data.age;\n\tconsole.log(`User: ${name} ${lastName} is ${age} years old`);\n}; */\n\nvar userData = (_ref) => {\n  let {\n    name,\n    lastName,\n    age\n  } = _ref;\n  console.log(\"User: \".concat(name, \" \").concat(lastName, \" is \").concat(age, \" years old\")); // console.log(name, age);\n}; // userData(userInfo);\n\n\nuserData(userInfo);\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});