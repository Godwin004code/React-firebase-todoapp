"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n    body {\n        background: white;\n        overflow-x: hidden;\n        font-family: sans-serif;\n    }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;