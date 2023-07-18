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
exports.id = "pages/api/services";
exports.ids = ["pages/api/services"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/services.js":
/*!*******************************!*\
  !*** ./pages/api/services.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secrets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../secrets.json */ \"(api)/./secrets.json\");\n\n\nfunction handler(req, res) {\n    try {\n        const client = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.JWT(_secrets_json__WEBPACK_IMPORTED_MODULE_1__.client_email, null, _secrets_json__WEBPACK_IMPORTED_MODULE_1__.private_key, [\n            \"https://www.googleapis.com/auth/spreadsheets\"\n        ]);\n        client.authorize(async function(err, tokens) {\n            if (err) {\n                return res.status(400).send(JSON.stringify({\n                    error: true\n                }));\n            }\n            const gsapi = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n                version: \"v4\",\n                auth: client\n            });\n            //CUSTOMIZATION FROM HERE\n            const opt = {\n                spreadsheetId: process.env.SPREADSHEET_ID,\n                range: \"services!A:E\"\n            };\n            let data = await gsapi.spreadsheets.values.get(opt);\n            // console.log(data, 'sheets');\n            const services = data.data.values.map(([id, title, description, minutes, price])=>({\n                    id: Number(id),\n                    title,\n                    description,\n                    minutes: Number(minutes),\n                    price: Number(price)\n                })).slice(1);\n            // console.log(services);\n            return res.status(200).send(JSON.stringify(services));\n        });\n    } catch (e) {\n        return res.status(400).send(JSON.stringify({\n            error: true,\n            message: e.message\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUNFO0FBRXZCLFNBQVNFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxTQUFTLElBQUlMLHVEQUFlLENBQ2hDQyx1REFBaUIsRUFDakIsSUFBSSxFQUNKQSxzREFBZ0IsRUFDaEI7WUFBQztTQUErQztRQUdsREksT0FBT0ssU0FBUyxDQUFDLGVBQWdCQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtZQUM1QyxJQUFJRCxLQUFLO2dCQUNQLE9BQU9QLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsT0FBTyxJQUFJO2dCQUFDO1lBQzNELENBQUM7WUFFRCxNQUFNQyxRQUFRbEIscURBQWEsQ0FBQztnQkFBRW9CLFNBQVM7Z0JBQU1kLE1BQU1EO1lBQU87WUFFMUQseUJBQXlCO1lBQ3pCLE1BQU1nQixNQUFNO2dCQUNWQyxlQUFlQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7Z0JBQ3pDQyxPQUFPO1lBQ1Q7WUFFQSxJQUFJQyxPQUFPLE1BQU1ULE1BQU1VLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUNUO1lBQy9DLCtCQUErQjtZQUMvQixNQUFNVSxXQUFXSixLQUFLQSxJQUFJLENBQUNFLE1BQU0sQ0FDOUJHLEdBQUcsQ0FBQyxDQUFDLENBQUNDLElBQUlDLE9BQU9DLGFBQWFDLFNBQVNDLE1BQU0sR0FBTTtvQkFDbERKLElBQUlLLE9BQU9MO29CQUNYQztvQkFDQUM7b0JBQ0FDLFNBQVNFLE9BQU9GO29CQUNoQkMsT0FBT0MsT0FBT0Q7Z0JBQ2hCLElBQ0NFLEtBQUssQ0FBQztZQUNULHlCQUF5QjtZQUl6QixPQUFPbkMsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDZTtRQUM3QztJQUNGLEVBQUUsT0FBT1MsR0FBRztRQUNWLE9BQU9wQyxJQUNKUyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBTyxJQUFJO1lBQUV3QixTQUFTRCxFQUFFQyxPQUFPO1FBQUM7SUFDM0Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFzc2FnZS1zaGVldHMvLi9wYWdlcy9hcGkvc2VydmljZXMuanM/MTU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xyXG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vLi4vc2VjcmV0cy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBnb29nbGUuYXV0aC5KV1QoXHJcbiAgICAgIGtleXMuY2xpZW50X2VtYWlsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBrZXlzLnByaXZhdGVfa2V5LFxyXG4gICAgICBbXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiXVxyXG4gICAgKTtcclxuXHJcbiAgICBjbGllbnQuYXV0aG9yaXplKGFzeW5jIGZ1bmN0aW9uIChlcnIsIHRva2Vucykge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IHRydWUgfSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBnc2FwaSA9IGdvb2dsZS5zaGVldHMoeyB2ZXJzaW9uOiBcInY0XCIsIGF1dGg6IGNsaWVudCB9KTtcclxuXHJcbiAgICAgIC8vQ1VTVE9NSVpBVElPTiBGUk9NIEhFUkVcclxuICAgICAgY29uc3Qgb3B0ID0ge1xyXG4gICAgICAgIHNwcmVhZHNoZWV0SWQ6IHByb2Nlc3MuZW52LlNQUkVBRFNIRUVUX0lELFxyXG4gICAgICAgIHJhbmdlOiBcInNlcnZpY2VzIUE6RVwiLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBnc2FwaS5zcHJlYWRzaGVldHMudmFsdWVzLmdldChvcHQpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCAnc2hlZXRzJyk7XHJcbiAgICAgIGNvbnN0IHNlcnZpY2VzID0gZGF0YS5kYXRhLnZhbHVlc1xyXG4gICAgICAgIC5tYXAoKFtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBtaW51dGVzLCBwcmljZV0pID0+ICh7XHJcbiAgICAgICAgICBpZDogTnVtYmVyKGlkKSxcclxuICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBtaW51dGVzOiBOdW1iZXIobWludXRlcyksXHJcbiAgICAgICAgICBwcmljZTogTnVtYmVyKHByaWNlKSxcclxuICAgICAgICB9KSlcclxuICAgICAgICAuc2xpY2UoMSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlcnZpY2VzKTtcclxuXHJcblxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNlcnZpY2VzKSk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoNDAwKVxyXG4gICAgICAuc2VuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiB0cnVlLCBtZXNzYWdlOiBlLm1lc3NhZ2UgfSkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ29vZ2xlIiwia2V5cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJhdXRoIiwiSldUIiwiY2xpZW50X2VtYWlsIiwicHJpdmF0ZV9rZXkiLCJhdXRob3JpemUiLCJlcnIiLCJ0b2tlbnMiLCJzdGF0dXMiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZ3NhcGkiLCJzaGVldHMiLCJ2ZXJzaW9uIiwib3B0Iiwic3ByZWFkc2hlZXRJZCIsInByb2Nlc3MiLCJlbnYiLCJTUFJFQURTSEVFVF9JRCIsInJhbmdlIiwiZGF0YSIsInNwcmVhZHNoZWV0cyIsInZhbHVlcyIsImdldCIsInNlcnZpY2VzIiwibWFwIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWludXRlcyIsInByaWNlIiwiTnVtYmVyIiwic2xpY2UiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/services.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services.js"));
module.exports = __webpack_exports__;

})();