"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var signup_component_1 = require("./signup/signup.component");
var login_component_1 = require("./login/login.component");
var transaction_component_1 = require("./transaction/transaction.component");
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'my-transactions',
        component: transaction_component_1.TransactionComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map