"use strict";
(self["webpackChunksnake"] = self["webpackChunksnake"] || []).push([[993],{

/***/ 2993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/page/login.vue?vue&type=template&id=7ca4b2b5


const _hoisted_1 = { class: "\n      w-full\n      min-h-screen\n      flex\n      items-center\n      justify-center\n      bg-gray-50\n      py-12\n      px-4\n      sm:px-6\n      lg:px-8\n    " }
const _hoisted_2 = { class: "max-w-md w-full space-y-8" }
const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
    class: "mx-auto h-12 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: "Workflow"
  }),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("h2", { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, " Sign in to your account ")
], -1)
const _hoisted_4 = {
  class: "mt-8 space-y-6",
  action: "#",
  method: "POST"
}
const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)("<input type=\"hidden\" name=\"remember\" value=\"true\"><div class=\"rounded-md shadow-sm -space-y-px\"><div><label for=\"email-address\" class=\"sr-only\">Email address</label><input id=\"email-address\" name=\"email\" type=\"email\" autocomplete=\"email\" required=\"true\" class=\"\n                appearance-none\n                rounded-none\n                relative\n                block\n                w-full\n                px-3\n                py-2\n                border border-gray-300\n                placeholder-gray-500\n                text-gray-900\n                rounded-t-md\n                focus:outline-none\n                focus:ring-indigo-500\n                focus:border-indigo-500\n                focus:z-10\n                sm:text-sm\n              \" placeholder=\"账号\"></div><div><label for=\"password\" class=\"sr-only\">Password</label><input id=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" required=\"true\" class=\"\n                appearance-none\n                rounded-none\n                relative\n                block\n                w-full\n                px-3\n                py-2\n                border border-gray-300\n                placeholder-gray-500\n                text-gray-900\n                rounded-b-md\n                focus:outline-none\n                focus:ring-indigo-500\n                focus:border-indigo-500\n                focus:z-10\n                sm:text-sm\n              \" placeholder=\"密码\"></div></div>", 2)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [
      _hoisted_3,
      (0,runtime_core_esm_bundler/* createElementVNode */._)("form", _hoisted_4, [
        _hoisted_5,
        (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [
          (0,runtime_core_esm_bundler/* createElementVNode */._)("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.login && _ctx.login(...args))),
            type: "submit",
            class: "\n              group\n              relative\n              w-full\n              flex\n              justify-center\n              py-2\n              px-4\n              border border-transparent\n              text-sm\n              font-medium\n              rounded-md\n              text-white\n              bg-indigo-600\n              hover:bg-indigo-700\n              focus:outline-none\n              focus:ring-2\n              focus:ring-offset-2\n              focus:ring-indigo-500\n            "
          }, " 登录 ")
        ])
      ])
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/page/login.vue?vue&type=template&id=7ca4b2b5

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm-bundler.js + 3 modules
var vue_router_esm_bundler = __webpack_require__(8761);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/page/login.vue?vue&type=script&lang=ts


/* harmony default export */ const loginvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  setup: function setup() {
    var router = (0,vue_router_esm_bundler/* useRouter */.tv)();

    var login = function login() {
      window.sessionStorage.setItem("login", "1");
      router.push({
        path: "/"
      });
    };

    return {
      login: login
    };
  }
}));
;// CONCATENATED MODULE: ./src/page/login.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/page/login.vue



loginvue_type_script_lang_ts.render = render

/* harmony default export */ const login = (loginvue_type_script_lang_ts);

/***/ })

}]);