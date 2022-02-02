"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-color: #8b6000;\n    width: 100%;\n   \n    & .form-list {\n        width: 90%;\n        margin: 0 auto;\n        border-radius: 30px 30px 0px 0px;\n        background-color: white;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeStyle = _styledComponents["default"].header(_templateObject());

exports.HomeStyle = HomeStyle;