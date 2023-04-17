"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sheets";
exports.ids = ["pages/api/sheets"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/sheets.js":
/*!*****************************!*\
  !*** ./pages/api/sheets.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secrets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../secrets.json */ \"(api)/./secrets.json\");\n\n\nfunction handler(req, res) {\n    try {\n        const client = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.JWT(_secrets_json__WEBPACK_IMPORTED_MODULE_1__.client_email, null, _secrets_json__WEBPACK_IMPORTED_MODULE_1__.private_key, [\n            \"https://www.googleapis.com/auth/spreadsheets\"\n        ]);\n        client.authorize(async function(err, tokens) {\n            if (err) {\n                return res.status(400).send(JSON.stringify({\n                    error: true\n                }));\n            }\n            const gsapi = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n                version: \"v4\",\n                auth: client\n            });\n            //CUSTOMIZATION FROM HERE\n            const opt = {\n                spreadsheetId: process.env.SPREADSHEET_ID,\n                range: \"Sheet1!A:C\"\n            };\n            let data = await gsapi.spreadsheets.values.get(opt);\n            // console.log(data, 'sheets');\n            return res.status(400).send(JSON.stringify({\n                error: false,\n                data: data.data.values\n            }));\n        });\n    } catch (e) {\n        return res.status(400).send(JSON.stringify({\n            error: true,\n            message: e.message\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hlZXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDRTtBQUV2QixTQUFTRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxJQUFJTCx1REFBZSxDQUNoQ0MsdURBQWlCLEVBQ2pCLElBQUksRUFDSkEsc0RBQWdCLEVBQ2hCO1lBQUM7U0FBK0M7UUFHbERJLE9BQU9LLFNBQVMsQ0FBQyxlQUFnQkMsR0FBRyxFQUFFQyxNQUFNLEVBQUU7WUFDNUMsSUFBSUQsS0FBSztnQkFDUCxPQUFPUCxJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU8sSUFBSTtnQkFBQztZQUMzRCxDQUFDO1lBRUQsTUFBTUMsUUFBUWxCLHFEQUFhLENBQUM7Z0JBQUVvQixTQUFTO2dCQUFNZCxNQUFNRDtZQUFPO1lBRTFELHlCQUF5QjtZQUN6QixNQUFNZ0IsTUFBTTtnQkFDVkMsZUFBZUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO2dCQUN6Q0MsT0FBTztZQUNUO1lBRUEsSUFBSUMsT0FBTyxNQUFNVCxNQUFNVSxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDVDtZQUMvQywrQkFBK0I7WUFDL0IsT0FBT2pCLElBQ0pTLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUNDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTyxLQUFLO2dCQUFFVSxNQUFNQSxLQUFLQSxJQUFJLENBQUNFLE1BQU07WUFBQztRQUNoRTtJQUNGLEVBQUUsT0FBT0UsR0FBRztRQUNWLE9BQU8zQixJQUNKUyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTyxJQUFJO1lBQUVlLFNBQVNELEVBQUVDLE9BQU87UUFBQztJQUMzRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXNzYWdlLXNoZWV0cy8uL3BhZ2VzL2FwaS9zaGVldHMuanM/MDYwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xyXG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4vc2VjcmV0cy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBnb29nbGUuYXV0aC5KV1QoXHJcbiAgICAgIGtleXMuY2xpZW50X2VtYWlsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBrZXlzLnByaXZhdGVfa2V5LFxyXG4gICAgICBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiXVxyXG4gICAgKTtcclxuXHJcbiAgICBjbGllbnQuYXV0aG9yaXplKGFzeW5jIGZ1bmN0aW9uIChlcnIsIHRva2Vucykge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IHRydWUgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBnc2FwaSA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiBcInY0XCIsIGF1dGg6IGNsaWVudCB9KTtcclxuXHJcbiAgICAgIC8vQ1VTVE9NSVpBVElPTiBGUk9NIEhFUkVcclxuICAgICAgY29uc3Qgb3B0ID0ge1xyXG4gICAgICAgIHNwcmVhZHNoZWV0SWQ6IHByb2Nlc3MuZW52LlNQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgIHJhbmdlOiBcIlNoZWV0MSFBOkNcIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZ3NhcGkuc3ByZWFkc2hlZXRzLnZhbHVlcy5nZXQob3B0KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgJ3NoZWV0cycpO1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZmFsc2UsIGRhdGE6IGRhdGEuZGF0YS52YWx1ZXMgfSkpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMClcclxuICAgICAgLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogdHJ1ZSwgbWVzc2FnZTogZS5tZXNzYWdlIH0pKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdvb2dsZSIsImtleXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiYXV0aCIsIkpXVCIsImNsaWVudF9lbWFpbCIsInByaXZhdGVfa2V5IiwiYXV0aG9yaXplIiwiZXJyIiwidG9rZW5zIiwic3RhdHVzIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImdzYXBpIiwic2hlZXRzIiwidmVyc2lvbiIsIm9wdCIsInNwcmVhZHNoZWV0SWQiLCJwcm9jZXNzIiwiZW52IiwiU1BSRUFEU0hFRVRfSUQiLCJyYW5nZSIsImRhdGEiLCJzcHJlYWRzaGVldHMiLCJ2YWx1ZXMiLCJnZXQiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sheets.js\n");

/***/ }),

/***/ "(api)/./secrets.json":
/*!**********************!*\
  !*** ./secrets.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"massage-373112","private_key_id":"56f306446fdd50bb30241839912a8da9118fa8e6","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDc9R6eMBBRGahg\\nMXDNaRUiZkHVQFr65hE3NH0yeIDqxOuIjGiCPxeF0fyZKLFyAaNQfBSjyHskVycO\\n4uaiCir9XMC971HFF/kN9uHqVFCRQFzov2YayPthwXcCFcKwvjYUihgGfaMlWS5G\\ncVyDMafD1WlJGCUyMMs5cHel2+R35MiWP4xkkkJdddrVgTebJUfItF6hyg1I2Tjw\\nTm6KvFUgsoRMOieI3bpX42F2n22Nmca9MwJSL41G06t9Z2JyOKG+xTReoetvnDei\\n57daSSEvNebtRce0yuInlqpMc8fQevGd6SDaIcrGLGW24NANpJB97PbXHPOvr8zM\\nx+/IZxyPAgMBAAECggEAWs3tgEr2Wa32sVmAJxp5UgK+KVpiSVwFVS+gB/7X1COL\\nPDmftW8iRp+OdI7xpY2gxTHI9aotWTjr10VOTOdq1Wap2ySf8SSx+JguLbPqzFas\\nGAaYeoeAL6NnOhchRKtW5EgAKaK2SmIFD3QE9fGRJXzt4NkoaCD/U6KxuRrOIKrE\\nMZstyRdGa8C7nSseE1UHynG42b0YS62DBUdHVoGEosV3S+cB3oWcEGsEj2TY0SLC\\nm9/6ZSJOlDyZmVZQ4/XeVZ8dxQm4d/3SSXvn3lP+gG0VccPxWeK/gBItN+wCAatk\\ny/dJzcSmdPYAWy1DvuLbLg85SAlmYxjfgxc23X9HGQKBgQD7OiFRvjofySLjWFOa\\nB+SU1iRBBAMArlDuOIo/IVqr/h5DqX993eEKEYtYRsxcAgHNpN7+zZlSORGQlVlm\\nb6lxKIpXd5WynW0BEmdlq0jy2acvdlepul2UeFgxnjswVCXCZswWqykQU2z711B+\\n8K2xDAlXvKrjLR1gdNIgZupH7QKBgQDhJ8UnRDHCHLhpLhbNEViQqIEMH2OgOqDK\\nDymgfthlirJYSk9kB1y9wLE9vIYuFtPxY8/VbUE16AV6hL8ZhUZ7k8Eb1/fRu1dL\\nGh0hXfsWgEIY+A/0O81ILs4b95kY7cMuoc6YvW3iuZM7IptJU7oRevjfIIDZsIk3\\nbeGo5cSu6wKBgFh+QHBXzoeVxQlJ+qDeOOFIkRqpvBkITg+rsN7N8+9zott4oCUI\\n/BUc2vWscp3SQypZ8gbVCzXQTmSchxIzMP9gJWLsB7oUA+qFvhAtBpQsoNxyFiz+\\nLap3vbE0qGq8qVRR+3/cqKlMia4oSP197+DWeZADMDq3kIqCe+XX+px9AoGACwHq\\nvZSz6g2FZn7+VmA2uDvEs1cFg9vZ6Ib9Pf91jOFO/soDP5ysiApXn/ELjk1HZ1G9\\n421H9t61Bdxfi1vcqkX69uWEFBjYl69bJTp3AA6dLKNUBFi4HINNSEi+j11wYWM/\\num/oY2E3NXjnppoVSq18ZUwtgHcE/lS854j0KKkCgYEA0MFWmo+B6cOzGhSWbBvA\\nD9fpfFfPwelHzKUM/bzTAlB+02Rzp0WXz8v5PU5LRmyLjsFT8b/6wh7WVUhtyp39\\n3difSjfMPIISHRJ9J9Rz2d/vOFpNFW/ezNSdo+tdrcLr7SjU4G5BF9wzaAxElgqi\\nxZN/qcvHKd0X7PKri25iUwA=\\n-----END PRIVATE KEY-----\\n","client_email":"marat-musin@massage-373112.iam.gserviceaccount.com","client_id":"104287742329382946140","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/marat-musin%40massage-373112.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sheets.js"));
module.exports = __webpack_exports__;

})();