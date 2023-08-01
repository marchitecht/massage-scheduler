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
exports.id = "pages/api/submit";
exports.ids = ["pages/api/submit"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/submit.js":
/*!*****************************!*\
  !*** ./pages/api/submit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secrets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../secrets.json */ \"(api)/./secrets.json\");\n\n\nconst handler = async (req, res)=>{\n    const { id , startDateTime , endDateTime , service , name , tel , email  } = req.body.form;\n    try {\n        const client = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.JWT(_secrets_json__WEBPACK_IMPORTED_MODULE_1__.client_email, null, _secrets_json__WEBPACK_IMPORTED_MODULE_1__.private_key, [\n            \"https://www.googleapis.com/auth/spreadsheets\"\n        ]);\n        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n            version: \"v4\",\n            auth: client\n        });\n        const requestOptions = {\n            spreadsheetId: process.env.SPREADSHEET_ID,\n            range: \"meetings!A:G\",\n            valueInputOption: \"USER_ENTERED\",\n            requestBody: {\n                values: [\n                    [\n                        id,\n                        startDateTime,\n                        endDateTime,\n                        service,\n                        name,\n                        tel,\n                        email\n                    ]\n                ]\n            }\n        };\n        const response = await sheets.spreadsheets.values.append(requestOptions);\n        return res.status(200).json({\n            data: response.config.data.values[0]\n        });\n    } catch (error) {\n        return res.status(500).json({\n            message: \"Something went wrong\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFDRTtBQUV0QyxNQUFNRSxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsTUFBTSxFQUFFQyxHQUFFLEVBQUVDLGNBQWEsRUFBRUMsWUFBVyxFQUFFQyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsSUFBRyxFQUFFQyxNQUFLLEVBQUUsR0FDbkVSLElBQUlTLElBQUksQ0FBQ0MsSUFBSTtJQUNiLElBQUk7UUFDRixNQUFNQyxTQUFTLElBQUlkLHVEQUFlLENBQ2hDQyx1REFBaUIsRUFDakIsSUFBSSxFQUNKQSxzREFBZ0IsRUFDaEI7WUFBQztTQUErQztRQUVsRCxNQUFNa0IsU0FBU25CLHFEQUFhLENBQUM7WUFBRW9CLFNBQVM7WUFBTUwsTUFBTUQ7UUFBTztRQUUzRCxNQUFNTyxpQkFBaUI7WUFDckJDLGVBQWVDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztZQUN6Q0MsT0FBTztZQUNQQyxrQkFBa0I7WUFDbEJDLGFBQWE7Z0JBQ1hDLFFBQVE7b0JBQUM7d0JBQUN4Qjt3QkFBSUM7d0JBQWVDO3dCQUFhQzt3QkFBU0M7d0JBQU1DO3dCQUFLQztxQkFBTTtpQkFBQztZQUN2RTtRQUNGO1FBRUEsTUFBTW1CLFdBQVcsTUFBTVgsT0FBT1ksWUFBWSxDQUFDRixNQUFNLENBQUNHLE1BQU0sQ0FBQ1g7UUFDekQsT0FBT2pCLElBQUk2QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU1MLFNBQVNNLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDTixNQUFNLENBQUMsRUFBRTtRQUFDO0lBQ3JFLEVBQUUsT0FBT1EsT0FBTztRQUNkLE9BQU9qQyxJQUFJNkIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQXVCO0lBQ2hFO0FBQ0Y7QUFFQSxpRUFBZXBDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXNzYWdlLXNoZWV0cy8uL3BhZ2VzL2FwaS9zdWJtaXQuanM/MjU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xyXG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4vc2VjcmV0cy5qc29uXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgc3RhcnREYXRlVGltZSwgZW5kRGF0ZVRpbWUsIHNlcnZpY2UsIG5hbWUsIHRlbCwgZW1haWwgfSA9XHJcbiAgcmVxLmJvZHkuZm9ybTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IGdvb2dsZS5hdXRoLkpXVChcclxuICAgICAga2V5cy5jbGllbnRfZW1haWwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIGtleXMucHJpdmF0ZV9rZXksXHJcbiAgICAgIFtcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzXCJdXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2hlZXRzID0gZ29vZ2xlLnNoZWV0cyh7IHZlcnNpb246IFwidjRcIiwgYXV0aDogY2xpZW50IH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICBzcHJlYWRzaGVldElkOiBwcm9jZXNzLmVudi5TUFJFQURTSEVFVF9JRCxcclxuICAgICAgcmFuZ2U6IFwibWVldGluZ3MhQTpHXCIsXHJcbiAgICAgIHZhbHVlSW5wdXRPcHRpb246IFwiVVNFUl9FTlRFUkVEXCIsXHJcbiAgICAgIHJlcXVlc3RCb2R5OiB7XHJcbiAgICAgICAgdmFsdWVzOiBbW2lkLCBzdGFydERhdGVUaW1lLCBlbmREYXRlVGltZSwgc2VydmljZSwgbmFtZSwgdGVsLCBlbWFpbF1dLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNoZWV0cy5zcHJlYWRzaGVldHMudmFsdWVzLmFwcGVuZChyZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5jb25maWcuZGF0YS52YWx1ZXNbMF0gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiZ29vZ2xlIiwia2V5cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInN0YXJ0RGF0ZVRpbWUiLCJlbmREYXRlVGltZSIsInNlcnZpY2UiLCJuYW1lIiwidGVsIiwiZW1haWwiLCJib2R5IiwiZm9ybSIsImNsaWVudCIsImF1dGgiLCJKV1QiLCJjbGllbnRfZW1haWwiLCJwcml2YXRlX2tleSIsInNoZWV0cyIsInZlcnNpb24iLCJyZXF1ZXN0T3B0aW9ucyIsInNwcmVhZHNoZWV0SWQiLCJwcm9jZXNzIiwiZW52IiwiU1BSRUFEU0hFRVRfSUQiLCJyYW5nZSIsInZhbHVlSW5wdXRPcHRpb24iLCJyZXF1ZXN0Qm9keSIsInZhbHVlcyIsInJlc3BvbnNlIiwic3ByZWFkc2hlZXRzIiwiYXBwZW5kIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb25maWciLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/submit.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submit.js"));
module.exports = __webpack_exports__;

})();