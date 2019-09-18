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
        eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// async await\nconst getUser = fname => {\n  var user = {\n    id: 6,\n    fname: 'Jane'\n  };\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('getting user');\n\n      if (fname == user.fname) {\n        resolve(user);\n      } else {\n        reject('user not found');\n      }\n    }, 2000);\n  });\n};\n\nconst getTweet = id => {\n  var tweet = {\n    user_id: 6,\n    post: 'Love star wars'\n  };\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('getting tweet');\n\n      if (tweet.user_id === id) {\n        resolve(tweet);\n      } else {\n        reject('no tweets found for this user');\n      }\n    }, 2000);\n  });\n};\n\nconst printUserTweet =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(function* (fname) {\n    try {\n      const tweet = yield getTweet(user.id);\n      const user = yield getUser(fname);\n      console.log(\"\".concat(user.fname, \" \").concat(tweet.post));\n      return \"\".concat(user.fname, \" \").concat(tweet.post);\n    } catch (error) {\n      console.log(\"Error: \".concat(error));\n    }\n  });\n\n  return function printUserTweet(_x) {\n    return _ref.apply(this, arguments);\n  };\n}(); // printUserTweet('Jane')\n// \t.then(value => {\n// \t\tconsole.log(value);\n// \t})\n// \t.catch(error => {\n// \t\tconsole.log(`Error: ${error}`);\n//     });\n\n\nprintUserTweet('Jane');\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});