"use strict";
(self["webpackChunksnake"] = self["webpackChunksnake"] || []).push([[67],{

/***/ 4768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dictionariesEdit)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/page/dictionariesEdit.vue?vue&type=template&id=f5d045f8


const _hoisted_1 = { class: "\n      pt-20\n      w-full\n      box-border\n      px-10\n      h-screen\n      max-h-screen\n      overflow-y-scroll\n    " }
const _hoisted_2 = { class: "mt-5 flex justify-end" }
const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("添加")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cascader = (0,runtime_core_esm_bundler/* resolveComponent */.up)("cascader")
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-button")

  return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_cascader, {
      class: "w-auto",
      data: _ctx.dictionariesType,
      label: "字典类别",
      labelId: "dictionaries"
    }, null, 8, ["data"]),
    (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, { type: "primary" }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ])
  ]))
}
;// CONCATENATED MODULE: ./src/page/dictionariesEdit.vue?vue&type=template&id=f5d045f8

// EXTERNAL MODULE: ./src/component/cascader.vue + 9 modules
var cascader = __webpack_require__(8087);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[14].use[0]!./src/page/dictionariesEdit.vue?vue&type=script&lang=ts


/* harmony default export */ const dictionariesEditvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
  components: {
    cascader: cascader/* default */.Z
  },
  setup: function setup() {
    var dictionariesType = [{
      label: "房屋类型",
      value: 0
    }, {
      label: "驱虫类型",
      value: 1
    }];
    var tableData = [{
      id: 0,
      text: "臭虫",
      value: 0
    }];

    var handleEdit = function handleEdit(index, row) {
      console.log(index, row);
    };

    var handleDelete = function handleDelete(index, row) {
      console.log(index, row);
    };

    return {
      tableData: tableData,
      dictionariesType: dictionariesType,
      handleEdit: handleEdit,
      handleDelete: handleDelete
    };
  }
}));
;// CONCATENATED MODULE: ./src/page/dictionariesEdit.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/page/dictionariesEdit.vue



dictionariesEditvue_type_script_lang_ts.render = render

/* harmony default export */ const dictionariesEdit = (dictionariesEditvue_type_script_lang_ts);

/***/ })

}]);