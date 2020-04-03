(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <app-header></app-header>\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-md-4 col-lg-offset-1\">\n    <div class=\"fr\">\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <p>{{ error }}</p>\n      </div>\n      <div *ngIf=\"isLoading\" style=\"text-align: center; margin-top: 140px;\">\n        <app-loading-spinner></app-loading-spinner>\n      </div>\n      <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\n        <div class=\"form-group\">\n          <label for=\"email\">E-Mail</label>\n          <input\n            type=\"email\"\n            id=\"email\"\n            class=\"form-control\"\n            ngModel\n            name=\"email\"\n            required\n            email\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            id=\"password\"\n            class=\"form-control\"\n            ngModel\n            name=\"password\"\n            required\n            minlength=\"6\"\n          />\n        </div>\n        <div>\n          <button\n            class=\"btn btn-primary\"\n            type=\"submit\"\n            [disabled]=\"!authForm.valid\"\n          >\n            {{ isLoginMode ? 'Login' : 'Sign Up' }}\n          </button>\n          |\n          <button class=\"btn btn-primary\" (click)=\"onSwitchMode()\" type=\"button\">\n            Switch to {{ isLoginMode ? 'Sign Up' : 'Login' }}\n          </button>\n        </div>\n      </form>\n    </div>\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/diet-plan/diet-plan.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/diet-plan/diet-plan.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainRow\">\n  <div class=\"row\">\n  <div class=\"container\" *ngIf=\"!created\">\n    <div class=\"dispdiv\" >\n      <h3 id=\"strt3\">Your Personal Diet Planner</h3>\n      <h2 > <p id=\"strt2\"> Use Our Automatic Meal Planner to Serve up Recipes \n        for Your Personalized Meal Plan.Create Diet Plans for Weight Loss, Bodybuilding, Paleo, Vegan, Keto, Custom Macros and Much More!</p>\n      </h2>\n      <br><br>  \n      <button id=\"strtBt\" (click)=\"create()\">Click Here To Create Your Diet Plan Now</button>\n    </div>\n\n    <section class=\"overflow-hidden position-relative\">\n      <div class=\"container\">\n        <div class=\"text-center mb-5\">\n          <h3 style=\"color: white;\">Custom Diet Plans For Your Needs</h3>\n        </div>\n  <br>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-4 mb-4\">\n            <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/1.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Custom Nutritional Targets</h5>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">We take the hard work out of setting up your nutritional targets but in some cases you may want to make some adjustments. <br><br>\n                  Once your diet is set up we allow you to edit the nutritional targets for each individual day. <br><br>       \n                  Adjust a huge amount of criteria from calories, protein, fats, carbohydrates, sugar, fibre and much more.</p><br><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4\" >\n            <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/2.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Adjust Meal Preferences  </h5>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">Would you prefer your main meal of the day to be lunch?<br><br>\n                  Would you rather have your breakfast to be a meal replacement drink because you don’t have much time in the morning?<br><br>\n                  You can adapt our recipe finder settings to ensure that we find the most appropriate recipes..</p><br><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4\" >\n            <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/3.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Ingredient Filter</h5><br>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">Does your meal plan need to be Vegan, Gluten-free, Halal or is subject to any other form of dietary restriction?<br><br>\n                  By adjusting our Ingredient Filter you can program the automatic generator to only find foods suitable for your personal needs.</p><br><br><br><br><br>\n              </div>\n            </div>\n          </div>\n          <br><br>\n        </div>\n      </div>\n    </section>\n    <section class=\"overflow-hidden position-relative\">\n      <div class=\"container\">\n        <div class=\"text-center mb-5\">\n          <h3 style=\"color: white;\">Save Time & Eat Better</h3>\n        </div>\n  <br>\n        <div class=\"row\" >\n          <div class=\"col-md-6 col-lg-4 mb-4\">\n            <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/4.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Autogenerate Recipes</h5>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">This is where we make things much easier for you.. <br> <br>\n                  Calorie counting or setting yourself any other nutritional targets is no use if you don’t know what to eat. <br> <br>             \n                  We take this issue away by doing all the calculations for you and provide you with a full week’s worth of recipes tailored to both your nutritional and personal needs!</p><br><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4\" >\n            <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/5.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Powerful Recipe Search </h5>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">Instead of using our automatic recipe finder you may wish to enter recipes manually.<br> <br>\n                  We allow you to do this with the help of our powerful recipe search tool.<br> <br>\n                  You can set the criteria to return any type of recipe you wish, including only returning recipes that do or don’t contain a particular ingredient we also let you search recipes by all their nutritional values.</p><br><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-lg-4 mb-4\" >\n            <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n              <img src=\"../../assets/6.png\" style=\"padding: 10px;margin-left: 90px;\">\n              <div class=\"position-relative\">\n                <h5 class=\"fw-5\">Shopping Basket</h5>\n                <p class=\"m-0 fw-100\" style=\"color: rgb(182, 182, 182);\">After your meal plan has been created you can check out our shopping basket function which lets you know all the ingredients you need to make the recipes and how much of them. <br> <br>\n\n                  Once you are happy with the list and have removed any ingredients you don’t need you can then export the shopping list to a PDF for you to either print off or have on your phone when you go to do your shopping.</p><br><br>\n              </div>\n            </div>\n          </div>\n          <br><br>\n        </div>\n      </div>\n    </section>\n  </div>\n\n\n\n\n\n  \n\n\n\n  <div class=\"container\" style=\"margin-top: 0;\" *ngIf=\"created\">\n    <div class=\"dispdiv\" >\n      <h3 id=\"strt3\">Automatic Meal Planner</h3>\n      <h2 id=\"strt2\">Use Our Meal Plan Generator to Create Free Diet Plans for Weight Loss, Weight Gain or Simply for Healthy Meal Ideas. </h2>\n      <br>\n    </div>\n  </div>\n  <section class=\"overflow-hidden position-relative\" *ngIf=\"created\">\n    <div class=\"container\">\n      <div class=\"text-center mb-5\">\n        <h3 style=\"color: white;\">Follow the Simple Steps</h3>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-4 mb-4\">\n          <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n          <p style=\"margin-left: 8px; font-size: 19px;font-weight: 700;\" >Step 1 : Calculate your BMR </p>\n        <div class=\"container-fluid\" style=\"background-color: rgb(36, 35, 35);\">\n          <h2 style=\"font-size: 40px;\">BMR Calculator</h2>\n          <div class=\"calcDiv\">\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n              <input class=\"height\" [(ngModel)]=\"feet\" type=\"number\" placeholder=\"Feet\" name=\"feet\" required/>\n              <input class=\"height\" [(ngModel)]=\"inches\" type=\"number\" placeholder=\"Inches\" name=\"inches\" required/><br/>\n              <input class =\"wtag\" [(ngModel)]=\"weight\" type=\"number\" placeholder=\"Weight\" name=\"weight\" required/><br/>\n              <input class =\"wtag\" [(ngModel)]=\"age\" type=\"number\" placeholder=\"Age\" name=\"age\" required/><br/>\n              <div class=\"radioDiv\">\n                <label style=\"margin-left:0;margin-right: 10px;\">Male</label>\n                <input class=\"radio-inline\" [(ngModel)]=\"gender\" type=\"radio\" name=\"gender\" value=\"male\" required/>\n                <label style=\"margin-left:7px;margin-right: 7px;\">Female</label>\n                <input class=\"radio-inline\" [(ngModel)]=\"gender\" type=\"radio\" name=\"gender\" value=\"female\" required/>\n              </div>\n              <label class=\"selectLabel\">Activity Level</label><br/>\n              <select [(ngModel)]=\"activity\" name=\"activity\" style=\"color: black;text-align: center;\">\n                <option value=\"sedentary\" checked=\"checked\">Sedentary</option>\n                <option value=\"light\">Light Exercise</option>\n                <option value=\"moderate\">Moderate Exercise</option>\n                <option value=\"active\">Active</option>\n                <option value=\"extreme\">Extremely Active</option>\n              </select><br/>\n              <label class=\"selectLabel\">Goals</label><br/>\n              <select  [(ngModel)]=\"goals\" name =\"goals\" style=\"color: black;text-align: center;\">\n                <option value=\"lose2\">Lose 2 pounds per week</option>\n                <option value=\"lose1\">Lose 1 pound per week</option>\n                <option value=\"maintain\">Maintain weight</option>\n                <option value=\"gain1\">Gain 1 pound per week</option>\n                <option value=\"gain2\">Gain 2 pounds per week</option>\n              </select>\n              <br>\n              <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\" >Submit</button>\n            </form>\n            <!--  -->\n            <!-- *ngIf=\"calculated\" -->\n          </div>\n        </div>\n            \n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4 mb-4\" >\n          <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color:white;padding: 20px;\">\n          <p style=\"margin-left: 8px; font-size: 19px;font-weight: 700;\" >Step 2 : Add your diet preferences </p>\n          <div class=\"container-fluid\" style=\"background-color: rgb(36, 35, 35);\">\n            <h2 style=\"font-size: 40px;\">DIET Preferences</h2>\n              <p class=\"writeR\" style=\"text-align: center;\">What You Don't Like to Eat?</p>\n            <input class=\"wtag\" style=\"text-align: center;margin-left: 50px;\" [(ngModel)]=\"exclude\" type=\"text\" placeholder=\"Exclude\" name=\"exclude\" required/><br/>\n            <p class=\"writeR\" style=\"text-align: center;\">Vegetrian or Non-Vegetarian?</p>\n            <input class=\"wtag\" style=\"text-align: center;margin-left: 50px;\" [(ngModel)]=\"diet\" type=\"text\" placeholder=\"Veg/Non-Veg\" name=\"diet\" required/><br/>\n              <div>\n                <button class=\"btn btn-primary\" id=\"plan\" style=\"margin-left: 110px;\" (click)=\"plan()\"> Diet Plan</button>\n              </div> \n              <div>\n                <p class=\"writeR\" style=\"padding-top: 10px;text-align: center;\">Basic Metabolic Rate: {{ bmr }}</p>\n                <p class=\"writeR\" style=\"text-align: center;\">Mainatenance Calories: {{ maintenance }}</p>\n                <p class=\"writeR\" style=\"text-align: center;\">Goal calories are: {{ golCals }}</p>\n            </div>\n          </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4 mb-4\" >\n          <div class=\"card__grup overflow-hidden position-relative p-3\" style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n            <p style=\"margin-left: 8px; font-size: 19px;font-weight: 700;\">Step 3 : Select Week-Day</p>\n          <div class=\"container-fluid\" style=\"background-color: rgb(36, 35, 35);\">\n            <br>\n            <button class=\"btn btn-success\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0);\" (click)=\"bt1()\" value=\"mon\" id=\"bt\">Monday</button><br>\n            <button class=\"btn btn-success\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0);\" (click)=\"bt2()\" value=\"tue\" id=\"bt\">Tueday</button><br>\n            <button class=\"btn btn-success\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0); \" (click)=\"bt3()\" value=\"wed\" id=\"bt\">Wednesday</button><br>\n            <button class=\"btn btn-success\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0);\" (click)=\"bt4()\" value=\"thu\" id=\"bt\">Thursday</button>\n            <button class=\"btn btn-primary\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0);\" (click)=\"bt5()\" value=\"fri\" id=\"bt\">Friday</button>\n            <button class=\"btn btn-primary\" style=\"margin-left: 100px; background-color: rgb(255, 72, 0);\" (click)=\"bt6()\" value=\"sat\" id=\"bt\">Saturday</button>\n            <button class=\"btn btn-primary\" style=\"margin-left: 100px;background-color: rgb(255, 72, 0); margin-bottom: 26px;\" (click)=\"bt7()\" value=\"sun\" id=\"bt\">Sunday</button>\n            <br>\n          </div>\n          </div>\n        </div>\n        <br><br>\n      </div>\n    </div>\n  </section>\n\n\n     \n      <div class=\"col-xs-9 col-sm-9\" style=\"background-color: rgb(36, 35, 35);margin-left: 200px;\" *ngIf=\"created\">\n        <div *ngIf=\"btt1\">\n          <h3 style=\"font-weight: 600;color: white;\">MONDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.monday.meals[0].title}}</td>\n            <td>{{response2.week.monday.meals[1].title}}</td>\n            <td>{{response2.week.monday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a class=\"zoom\" href=\"{{response2.week.monday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.monday.meals[0].image}}\"></a></td>\n            <td><a class=\"zoom\" href=\"{{response2.week.monday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.monday.meals[1].image}}\"></a></td>\n            <td><a class=\"zoom\" href=\"{{response2.week.monday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.monday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.monday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.monday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.monday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.monday.nutrients.carbohydrates}}g</h3>\n         \n        </div>\n      <!-- Tue -->\n      <div *ngIf=\"btt2\">\n        <h3 style=\"font-weight: 600; color: white;\">TUEDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.tuesday.meals[0].title}}</td>\n            <td>{{response2.week.tuesday.meals[1].title}}</td>\n            <td>{{response2.week.tuesday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.tuesday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.tuesday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.tuesday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.tuesday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.tuesday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.tuesday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.tuesday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.tuesday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.tuesday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.tuesday.nutrients.carbohydrates}}g</h3>\n       \n        </div>\n      <!-- Wed -->\n      <div *ngIf=\"btt3\">\n        <h3 style=\"font-weight: 600;color: white;\">WEDNESDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.wednesday.meals[0].title}}</td>\n            <td>{{response2.week.wednesday.meals[1].title}}</td>\n            <td>{{response2.week.wednesday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.wednesday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.wednesday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.wednesday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.wednesday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.wednesday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.wednesday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.wednesday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.wednesday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.wednesday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.wednesday.nutrients.carbohydrates}}g</h3>\n        \n      </div>\n      <!-- Thu -->\n      <div *ngIf=\"btt4\">\n        <h3 style=\"font-weight: 600;color: white;\">THURSDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.thursday.meals[0].title}}</td>\n            <td>{{response2.week.thursday.meals[1].title}}</td>\n            <td>{{response2.week.thursday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.thursday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.thursday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.thursday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.thursday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.thursday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.thursday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.thursday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.thursday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.thursday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.thursday.nutrients.carbohydrates}}g</h3>\n          \n      </div>\n      <!-- Fri -->\n      <div *ngIf=\"btt5\">\n        <h3 style=\"font-weight: 600;color: white;\">FRIDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.friday.meals[0].title}}</td>\n            <td>{{response2.week.friday.meals[1].title}}</td>\n            <td>{{response2.week.friday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.friday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.friday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.friday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.friday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.friday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.friday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.friday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.friday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.friday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.friday.nutrients.carbohydrates}}g</h3>\n         \n        </div>\n      <!-- Sat -->\n      <div *ngIf=\"btt6\">\n        <h3 style=\"font-weight: 600;color: white;\">SATURDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.saturday.meals[0].title}}</td>\n            <td>{{response2.week.saturday.meals[1].title}}</td>\n            <td>{{response2.week.saturday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.saturday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.saturday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.saturday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.saturday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.saturday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.saturday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n        <h3 style=\"text-align: center;\">Calories : {{response2.week.saturday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;\">P : {{response2.week.saturday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.saturday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.saturday.nutrients.carbohydrates}}g</h3>\n          \n        </div>\n      <!-- Sun -->\n      <div *ngIf=\"btt7\">\n        <h3 style=\"font-weight: 600;color: white;\">SUNDAY</h3>\n        <table id=\"customers\" class=\"table\" style=\"border-radius: 20px;box-shadow: 0 0 5px #ccc;padding: 30px;\">\n          <tr>\n            <th>Breakfast</th>\n            <th>Lunch</th>\n            <th>Dinner</th>\n          </tr>\n          <tr>\n            <td>{{response2.week.sunday.meals[0].title}}</td>\n            <td>{{response2.week.sunday.meals[1].title}}</td>\n            <td>{{response2.week.sunday.meals[2].title}}</td>\n          </tr>\n          <tr>\n            <td><a href=\"{{response2.week.sunday.meals[0].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.sunday.meals[0].image}}\"></a></td>\n            <td><a href=\"{{response2.week.sunday.meals[1].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.sunday.meals[1].image}}\"></a></td>\n            <td><a href=\"{{response2.week.sunday.meals[2].link}}\"><img class=\"imag\" style=\"border-radius:10%;\" height=\"200px\" width=\"200px\" src=\"{{imagUrl + response2.week.sunday.meals[2].image}}\"></a></td>        \n          </tr>\n        </table>\n          <h3 style=\"text-align: center;color: white;\">Calories : {{response2.week.sunday.nutrients.calories}}  kCals </h3> \n          <h3 style=\"text-align: center;color: white;\">P : {{response2.week.sunday.nutrients.protein}}g   &nbsp;|&nbsp; F : {{response2.week.sunday.nutrients.fat}}g  &nbsp;|&nbsp; C : {{response2.week.sunday.nutrients.carbohydrates}}g</h3>\n      \n        </div>\n        <br *ngIf=\"planed\" style=\"background-color: transparent;\">\n        <br *ngIf=\"planed\" style=\"background-color: transparent;\">\n        <br *ngIf=\"planed\" style=\"background-color: transparent;\">\n        <br *ngIf=\"planed\" style=\"background-color: transparent;\">\n    </div>\n  </div>\n  <div class=\"footer\">\n    <p><strong>©2020 My Diet Meal Plan Ltd, </strong> All rights reserved &nbsp;|&nbsp; Terms and Conditions  &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Help </p>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-img\">\n  <div class=\"container\">\n    <div class=\"topnav\">\n      <a style=\"padding-top: 12px;margin-top: 0;\" routerLink=\"/diet-plan\"><img src=\"https://www.mydietmealplan.com/assets/images/01-logo.svg\" height=\"40px\"></a>\n      <a routerLink=\"/auth\" *ngIf=\"!isAuthenticated\">Authenticate</a>\n      <a routerLink=\"/diet-plan\">Home</a>\n      <a routerLink=\"/recipe-book\">Recipe Book</a>\n      <a routerLink=\"/recipes\" *ngIf=\"isAuthenticated\">Your Recipes</a>\n      <a routerLink=\"/shopping-list\" *ngIf=\"isAuthenticated\">Shopping List</a>\n      <a class=\"nav navbar-nav navbar-right\" *ngIf=\"isAuthenticated\" style=\"cursor: pointer; margin-right: 20px;\" (click)=\"onLogout()\">Logout</a>\n      <a class=\"nav navbar-nav navbar-right\" *ngIf=\"isAuthenticated\" style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a>\n      <a class=\"nav navbar-nav navbar-right\" *ngIf=\"isAuthenticated\" style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a>\n    </div>\n  </div>\n</div>\n<!-- <nav class=\"navbar navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/home\"><img src=\"https://www.mydietmealplan.com/assets/images/01-logo.svg\"></a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/home\">Home</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/diet-plan\">Diet Plan</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/recipe-book\">Recipe Book</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/recipes\">Your Recipes</a>\n        </li>\n        <li routerLinkActive=\"active\" >\n          <a routerLink=\"/auth\">Authenticate</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a routerLink=\"/shopping-list\">Shopping List</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"isAuthenticated\">\n          <a style=\"cursor: pointer;\" (click)=\"onLogout()\">Logout</a>\n        </li>\n        <li class=\"dropdown\" appDropdown *ngIf=\"isAuthenticated\">\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\"\n            >Manage <span class=\"caret\"></span\n          ></a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a>\n            </li>\n            <li>\n              <a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>  -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipe-book.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-book/recipe-book.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg\">\n<div class=\"row\">\n    <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\n\n      <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n        <app-loading-spinner></app-loading-spinner>\n      </div>\n        <div class=\"form-group\" style=\"margin-left: 70px;\">\n          <h2 style=\"margin-top: 50px;\">Find Your Recipe </h2>\n          <input \n          style=\"width: 500px;float: left;\"\n          class=\"form-control\" \n          type=\"text\" \n          [(ngModel)]=\"UserSearch\"\n          > \n          <button\n          class=\"btn btn-primary\"\n          (click) = \"search()\"\n          style=\"margin-left: 10px;\"\n        >\n          Search\n        </button>\n        </div>\n        <div>\n         \n        </div>\n    </div>\n</div>\n<div *ngIf=\"!searched\">\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n  <br><br><br><br><br>\n</div>\n<section class=\"overflow-hidden position-relative\" *ngIf=\"searched\" >\n  <div class=\"container\" style=\"background-color: rgb(36, 35, 35);\">\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[0].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[0].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[0].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[1].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[1].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[1].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p>{{response2.videos[2].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[2].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[2].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <br><br>\n    </div>\n    <hr style=\"width: 900px;\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p>{{response2.videos[3].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[3].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[3].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[4].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[4].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[4].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[5].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[5].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[5].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <br><br>\n    </div>\n    <hr style=\"width: 900px;\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p>{{response2.videos[6].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[6].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[6].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[7].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[7].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[7].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4 mb-4\">\n        <div class=\"card__grup overflow-hidden position-relative p-3\"  style=\"background-color: rgb(36, 35, 35); color: white;padding: 20px;\">\n        <p >{{response2.videos[8].title}}</p>\n      <div class=\"container-fluid\" style=\"background-color:transparent;\">\n      <a href=\"{{baseUri + response2.videos[8].youTubeId}}\"><img class=\"imag\" src=\"{{response2.videos[8].thumbnail}}\"></a> \n      </div>   \n        </div>\n      </div>\n      \n    </div>\n    <br><br>\n  </div>\n</section>\n\n\n\n\n\n\n<!-- <div class=\"row\" *ngIf=\"searched\">\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[0].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[0].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[0].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[1].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[1].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[1].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[2].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[2].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[2].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[3].image}}\" style=\"width:100%;height: 200px;\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{response.results[3].title}}</h4>\n            <p class=\"card-text\">Time To Prepare : {{response.results[3].readyInMinutes}}</p>\n          </div>\n        </div>\n      </div> \n  </div>\n\n  <div class=\"row\" *ngIf=\"searched\">\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[4].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[4].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[4].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[5].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[5].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[5].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[6].image}}\" style=\"width:100%;height: 200px;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{response.results[6].title}}</h4>\n          <p class=\"card-text\">Time To Prepare : {{response.results[6].readyInMinutes}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[7].image}}\" style=\"width:100%;height: 200px;\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">{{response.results[7].title}}</h4>\n            <p class=\"card-text\">Time To Prepare : {{response.results[7].readyInMinutes}}</p>\n          </div>\n        </div>\n      </div> \n  </div>\n <br><br><br><br><br><br><br><br><br><br>\n <br><br><br><br><br><br><br><br><br><br>\n <br><br><br><br><br><br> -->\n\n <div class=\"footer\">\n  <p><strong>©2020 My Diet Meal Plan Ltd,</strong> all rights reserved &nbsp;|&nbsp; Terms and Conditions  &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Help </p>\n</div>\n</div>\n    <!-- <div class=\"col-xs-12\"*ngIf=\"searched\">\n            <h3>Your Search Results</h3>\n            <div class=\"card-deck\">\n                <div class=\"card\" style=\"width:250px;height: 150px;float: left;\" >\n                    <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[0].image}}\" style=\"width:300px\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">{{response.results[0].title}}</h4>\n                      <p class=\"card-text\">Time To Prepare : {{response.results[0].readyInMinutes}}</p>\n                    </div>\n                  </div> -->\n              <!-- <div class=\"card\" style=\"width:250px;height: 150px;float: left;\">\n                <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[0].image}}\" style=\"width:300px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{response.results[0].title}}</h4>\n                  <p class=\"card-text\">Time To Prepare : {{response.results[0].readyInMinutes}}</p>\n                </div>\n              </div>\n              <div class=\"card\" style=\"width:250px;height: 150px;float: left;\">\n                <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[0].image}}\" style=\"width:300px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{response.results[0].title}}</h4>\n                  <p class=\"card-text\">Time To Prepare : {{response.results[0].readyInMinutes}}</p>\n                </div>\n              </div>\n              <div class=\"card\" style=\"width:250px;height: 150px;float: left;\">\n                <img class=\"card-img-top\" src=\"{{response.baseUri + response.results[0].image}}\" style=\"width:300ox\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{response.results[0].title}}</h4>\n                  <p class=\"card-text\">Time To Prepare : {{response.results[0].readyInMinutes}}</p>\n                </div>\n              </div> -->\n          <!-- </div>\n    </div>\n   -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img\n      [src]=\"recipe.imagePath\"\n      alt=\"{{ recipe.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 300px;\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{ recipe.name }}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div\n      class=\"btn-group\"\n      appDropdown>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary dropdown-toggle\">\n        Manage Recipe <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping List</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a></li>\n        <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-xs-10\">\n    {{ recipe.description }}\n  </div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <ul class=\"list-group\">\n      <li\n        style=\"color: black;\"\n        class=\"list-group-item\"\n        *ngFor=\"let ingredient of recipe.ingredients\">\n        {{ ingredient.name }} - {{ ingredient.amount }}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              formControlName=\"name\"\n              class=\"form-control\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"imagePath\">Image URL</label>\n            <input\n              type=\"text\"\n              id=\"imagePath\"\n              formControlName=\"imagePath\"\n              class=\"form-control\"\n              #imagePath>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <img [src]=\"imagePath.value\" class=\"img-responsive\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea\n              type=\"text\"\n              id=\"description\"\n              class=\"form-control\"\n              formControlName=\"description\"\n              rows=\"6\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\n\n          <div\n            class=\"row\"\n            *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\"\n            [formGroupName]=\"i\"\n            style=\"margin-top: 10px;\">\n            <div class=\"col-xs-8\">\n              <label for=\"description\">Ingredient</label>\n            </div>\n            <div class=\"col-xs-2\">\n              <label for=\"amount\" style=\"margin-top: 0;\">Amount</label>\n            </div>\n            <div class=\"col-xs-8\">\n              \n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"name\">\n            </div>\n            <div class=\"col-xs-2\">\n             \n              <input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"amount\">\n            </div>\n            <div class=\"col-xs-2\">\n              <button\n              \n                type=\"button\"\n                class=\"btn btn-danger\"\n                (click)=\"onDeleteIngredient(i)\">X</button>\n            </div>\n          </div>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <button\n                type=\"button\"\n                class=\"btn btn-success\"\n                (click)=\"onAddIngredient()\">Add Ingredient</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-success\"\n            [disabled]=\"!recipeForm.valid\"\n            style=\"margin-right: 8px;\">Save</button>\n          <button type=\"button\" \n          style=\"margin: 8px;\"\n          class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  style=\"cursor: pointer;\"\n  [routerLink]=\"[index]\"\n  routerLinkActive=\"active\"\n  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ recipe.name }}</h4>\n    <p class=\"list-group-item-text\">{{ recipe.description }}</p>\n  </div>\n  <span class=\"pull-right\">\n        <img\n          [src]=\"recipe.imagePath\"\n          alt=\"{{ recipe.name }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\"\n    style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;font-weight: 900;background-color: orangered;\">Create Your Own Recipe</button>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-recipe-item\n      *ngFor=\"let recipeEl of recipes; let i = index\"\n      [recipe]=\"recipeEl\"\n      [index]=\"i\"><br></app-recipe-item>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipe-start/recipe-start.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin-left: 140px; color: white; border: 2px solid white; text-align: center; padding: 10px;\">Please select a Recipe!</h2>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipes/recipes.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <div class=\"container1\">\n      <app-recipe-list></app-recipe-list>\n    </div>\n  </div>\n  <div class=\"col-md-7\">\n    <div class=\"container1\">\n    <router-outlet></router-outlet>\n  </div>\n  </div>\n  <br><br><br>\n<br><br><br>\n\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br><br>\n<br><br>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            name=\"name\"\n            ngModel\n            required\n          >\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input\n            type=\"number\"\n            id=\"amount\"\n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            class=\"btn btn-success\"\n            type=\"submit\"\n            style=\"background-color: rgb(14, 173, 14);\"\n            [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button> &nbsp;\n          <button\n            class=\"btn btn-danger\"\n            type=\"button\"\n            (click)=\"onDelete()\"\n            *ngIf=\"editMode\">Delete</button> &nbsp;\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-4\">\n    \n    <app-shopping-edit></app-shopping-edit>\n    <hr>\n    <h3 style=\"font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;font-weight: 600;\">Here is Your Shopping List</h3>\n    <ul class=\"list-group\">\n      <a\n        class=\"list-group-item\"\n        style=\"cursor: pointer;width: 500px;\"\n        *ngFor=\"let ingredient of ingredients; let i = index\"\n        (click)=\"onEditItem(i)\"\n      >\n      \n      {{ ingredient.name }} ({{ ingredient.amount }})\n      </a>\n    </ul>\n    \n<br><br><br><br><br><br><br><br>\n<br><br><br><br><br>\n\n  </div>\n\n  <div class=\"col-xs-4\">\n    <label for=\"labeling\">Do You Have a Query about Food Nutrition ?</label>\n    <br>\n    <input class=\"form-control\" style=\"float: left; width: 400px;margin-right: 20x;\" [(ngModel)]=\"question\" type=\"text\" placeholder=\"How much Vitamin C in 2 apples \" name=\"question\" required/>\n    &nbsp;&nbsp;<button class=\"btn btn-success\" (click)=\"askQ()\" id=\"bt\">Ask</button>\n    <br>\n    <div *ngIf=\"asked\">\n      <div class=\"col-xs-12\" style=\"text-align: center;\">\n        <br><br>\n        <img src=\"{{imagUrl+response2.image}}\" width=\"120px\" height=\"150px\" style=\"text-align: center;\">\n      </div>\n      <div class=\"col-xs-12\">\n        <br><br>\n      <h4 style=\"border: 1px solid white ; padding:19px;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\"> {{response2.answer}} </h4>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <p><strong>©2020 My Diet Meal Plan Ltd, </strong> All rights reserved &nbsp;|&nbsp; Terms and Conditions  &nbsp;|&nbsp; Privacy &nbsp;|&nbsp; Help </p>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipes-resolver.service */ "./src/app/recipes/recipes-resolver.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipe-book/recipe-book.component */ "./src/app/recipe-book/recipe-book.component.ts");
/* harmony import */ var _diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diet-plan/diet-plan.component */ "./src/app/diet-plan/diet-plan.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'diet-plan', component: _diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_12__["DietPlanComponent"] },
    {
        path: 'recipes',
        component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            { path: '', component: _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"] },
            { path: 'new', component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"] },
            {
                path: ':id',
                component: _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailComponent"],
                resolve: [_recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__["RecipesResolverService"]]
            },
            {
                path: ':id/edit',
                component: _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_7__["RecipeEditComponent"],
                resolve: [_recipes_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__["RecipesResolverService"]]
            }
        ]
    },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"] },
    { path: 'recipe-book', component: _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_11__["RecipeBookComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoLogin();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipes/recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipe-list/recipe-item/recipe-item.component */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-edit/shopping-edit.component */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./recipes/recipe-start/recipe-start.component */ "./src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recipes/recipe-edit/recipe-edit.component */ "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recipe-book/recipe-book.component */ "./src/app/recipe-book/recipe-book.component.ts");
/* harmony import */ var _diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./diet-plan/diet-plan.component */ "./src/app/diet-plan/diet-plan.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

























// import { PlanComponent } from './diet-plan/plan/plan.component';
// import { BmrCalcComponent } from './bmr-calc/bmr-calc.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__["RecipesComponent"],
                _recipes_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_8__["RecipeListComponent"],
                _recipes_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_9__["RecipeDetailComponent"],
                _recipes_recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_10__["RecipeItemComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingListComponent"],
                _shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingEditComponent"],
                _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_13__["DropdownDirective"],
                _recipes_recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_16__["RecipeStartComponent"],
                _recipes_recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_17__["RecipeEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"],
                _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_20__["LoadingSpinnerComponent"],
                _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_22__["RecipeBookComponent"],
                _diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_23__["DietPlanComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"]
            ],
            providers: [
                _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_14__["ShoppingListService"],
                _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_18__["RecipeService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(authService) {
        this.authService = authService;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (user) {
            if (!user) {
                return next.handle(req);
            }
            var modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    };
    AuthInterceptorService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fr{\r\n    margin-top: 140px;\r\n    border: 2px solid white;\r\n    border-radius: 30px;\r\n    padding: 20px;\r\n}\r\n.row\r\n{\r\n    background-image: url('https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/8pg4d-0NG3KRTWE8F-Full-Image_GalleryBackground-en-US-1554535973450._UR1920,1080_RI_.jpg');\r\n    background-size: cover;\r\n\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\nform\r\n{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksOExBQThMO0lBQzlMLHNCQUFzQjs7SUFFdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcntcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucm93XHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9TL3NncC1jYXRhbG9nLWltYWdlcy9yZWdpb25fVVMvOHBnNGQtME5HM0tSVFdFOEYtRnVsbC1JbWFnZV9HYWxsZXJ5QmFja2dyb3VuZC1lbi1VUy0xNTU0NTM1OTczNDUwLl9VUjE5MjAsMTA4MF9SSV8uanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbmZvcm1cclxue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    AuthComponent.prototype.onSwitchMode = function () {
        this.isLoginMode = !this.isLoginMode;
    };
    AuthComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        var email = form.value.email;
        var password = form.value.password;
        var authObs;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(function (resData) {
            console.log(resData);
            _this.isLoading = false;
            _this.router.navigate(['/recipes']);
        }, function (errorMessage) {
            console.log(errorMessage);
            _this.error = errorMessage;
            _this.isLoading = false;
        });
        form.reset();
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, router) {
        var _this = this;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            var isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return _this.router.createUrlTree(['/auth']);
        })
        // tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
        // })
        );
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");







var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        return this.http
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBKZigX6Y0vKS49pSpGl0EuFSf-1v3G2fE', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resData) {
            _this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBKZigX6Y0vKS49pSpGl0EuFSf-1v3G2fE', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (resData) {
            _this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    };
    AuthService.prototype.autoLogin = function () {
        var userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            var expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    };
    AuthService.prototype.logout = function () {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    };
    AuthService.prototype.autoLogout = function (expirationDuration) {
        var _this = this;
        this.tokenExpirationTimer = setTimeout(function () {
            _this.logout();
        }, expirationDuration);
    };
    AuthService.prototype.handleAuthentication = function (email, userId, token, expiresIn) {
        var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    };
    AuthService.prototype.handleError = function (errorRes) {
        var errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    Object.defineProperty(User.prototype, "token", {
        get: function () {
            if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                return null;
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    User.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Date }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/diet-plan/diet-plan.component.css":
/*!***************************************************!*\
  !*** ./src/app/diet-plan/diet-plan.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainRow{\r\n  background-image: url('bg2.jpeg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n}\r\n.container-fluid {\r\n    background-color: white;\r\n    width: 320px;\r\n    /* margin: 10px 10px 30px 0px; */\r\n    padding: 0px 0 10px 0;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 5px rgb(100, 100, 100);\r\n    margin-bottom: 0px;\r\n  }\r\nh2 {\r\n    font-weight: 400;\r\n    text-align: center;\r\n  }\r\n/* \r\n  input {\r\n   style=\" background-color: #fff;\"\r\n\r\n  } */\r\n.wtag\r\n  {\r\n    background-color: #fff;\r\n    border-radius: 7px;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    width: 210px;\r\n    margin: 6px 0px;\r\n    padding: 5px 10px;\r\n    height: 30px;\r\n    outline: none;\r\n    color: black;\r\n  }\r\n.height {\r\n    background-color: #fff;\r\n    border-radius: 7px;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    width: 100px;\r\n    margin: 6px 5px;\r\n    height: 30px;\r\n    outline: none;\r\n    color: black;\r\n  }\r\nselect {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    width: 210px;\r\n    height: 32px;\r\n    border: 1px solid #ccc;\r\n    margin: 1px 0 1px 0;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    font-weight: 300;\r\n    font-family: 'Open Sans', sans-serif;\r\n    outline: none;\r\n  }\r\n.selectLabel {\r\n    padding: 6px;\r\n    height: 0px;\r\n    margin-bottom: 15px;\r\n  }\r\n.radioDiv {\r\n    margin-top: 10px;\r\n    margin-bottom: 2px;;\r\n  }\r\n.radio-inline {\r\n    width: 15px;\r\n    margin: 0 auto auto 0 ;\r\n  }\r\nbutton\r\n  {\r\n      margin-top: 8px;\r\n      margin-bottom: 8px;\r\n      border-radius: 6px ;\r\n      text-align: center;\r\n      align-self: auto;\r\n  }\r\n#bt\r\n  {\r\n    width: 120px;\r\n    padding: 10px;\r\n    outline: medium;\r\n  }\r\n/* button {\r\n    margin-top: 15px;\r\n    padding: 10px 25px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    margin-bottom: -10px;\r\n  } */\r\nform {\r\n    text-align: center;\r\n  }\r\n.results {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    display: none;\r\n  }\r\n.height.ng-valid.ng-touched {\r\n    border: 1px solid blue;\r\n  }\r\n.wtag.ng-valid.ng-touched {\r\n    border: 1px solid blue;\r\n  }\r\n.selectLabel.ng-valid.ng-touched {\r\n    border: 1px solid blue;\r\n  }\r\nselect.ng-valid.ng-touched {\r\n    border: 1px solid blue;\r\n  }\r\n.form-control\r\n  {\r\n    width: 18%;\r\n  }\r\n.write\r\n  {\r\n    color: white;\r\n    margin-top: px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    margin-left: 85px;\r\n    font-family: 'Open Sans', sans-serif;\r\n  }\r\n.writeR\r\n  {\r\n    margin-top: 11px;\r\n    /* margin-left: 89px; */\r\n    font-size: 17px;\r\n    font-weight: 550;\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n#customers {\r\n    font-weight: 300;\r\n    font-family: 'Open Sans', sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n  }\r\n#customers td, #customers th {\r\n\r\n    padding: 8px;\r\n    max-width: 20px;\r\n    font-weight: 600;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    color: rgb(182, 182, 182);;\r\n  }\r\ntable\r\n  {\r\n    border-collapse: collapse;\r\n  }\r\n/* #customers tr:nth-child(even){background-color: #f2f2f2;} */\r\n/* #customers tr:hover {background-color: #ddd;} */\r\n#customers th {\r\n    font-size: 30px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color:transparent;\r\n    font-weight: 500;\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: white;\r\n  }\r\n.round\r\n  {\r\n    border-radius: 50%;\r\n  }\r\n.step2{\r\n    margin-left: 47px;\r\n  }\r\n#plan\r\n  {\r\n    margin-left: 70px;\r\n  }\r\nh3\r\n  {\r\n    font-weight: 500;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n.dispdiv{\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n#strt3\r\n  {\r\n    margin-top: 40px;\r\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    font-size: 63px;\r\n    font-weight: 400;\r\n    letter-spacing: 8px;\r\n  }\r\n#strt31\r\n  {\r\n    margin-top: 0px;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    font-size: 60px;\r\n    font-weight: 900;\r\n    letter-spacing: 10px;\r\n  }\r\n#strt2{\r\n    margin-top: 60px;\r\n    text-align: center;\r\n    font-size: 29px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n#strtBt\r\n  {\r\n    text-align: center;\r\n    border: 5px solid white;\r\n    background-color: rgb(255, 94, 0);\r\n    border-color: white;\r\n    border-radius: 30px;\r\n    padding: 10px 15px;\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n/* @import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap'); */\r\nsection{\r\n  padding: 80px 0;\r\n}\r\nimg{\r\n\tmax-width: 100%;\r\n}\r\n*{\r\n\tfont-size: 16px;\r\n\tfont-family: 'Noto Sans TC', sans-serif;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n}\r\na:hover{\r\n\ttext-decoration: none;\r\n}\r\n.uppercase__font{\r\n\ttext-transform: uppercase;\r\n}\r\n.capitalize__font{\r\n\ttext-transform: capitalize;\r\n}\r\n.justify{\r\n\ttext-align:justify;\r\n}\r\n.underline{\r\n\ttext-decoration: underline;\r\n}\r\nh1{\r\n\tfont-size: 70px;\r\n}\r\nh2{\r\n\tfont-size: 50px;\r\n\t@media screen and(max-width: 768px){\r\n\t\tfont-size: 35px;\r\n\t}\r\n}\r\nh3{\r\n\tfont-size: 40px;\r\n\t@media screen and(max-width: 768px){\r\n\t\tfont-size: 25px;\r\n\t}\r\n}\r\nh4{\r\n\tfont-size: 30px;\r\n\t@media screen and(max-width: 768px){\r\n\t\tfont-size: 20px;\r\n\t}\r\n}\r\nh5{\r\n\tfont-size: 24px;\r\n\t@media screen and(max-width: 768px){\r\n\t\tfont-size: 18px;\r\n\t}\r\n}\r\nh6{\r\n\tfont-size: 18px;\r\n\t@media screen and(max-width: 768px){\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\nh1, h2, h3, h4, h5{\r\n\tfont-weight: 900;\r\n}\r\n.normal{\r\n\tfont-weight:normal !important;\r\n}\r\n.no__outline{\r\n\toutline-style: none !important;\r\n}\r\n.pointer{\r\n\tcursor: pointer;\r\n}\r\nul\r\n.ul__list--inline{\r\n\tlist-style:none;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\r\n\t>li{\r\n\t\tdisplay:inline-block;\r\n\t}\r\n}\r\n.ul__list{\r\n\tlist-style:none;\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\n.sosmed__list{\r\n\tli{\r\n\t\ta{\r\n\t\t\twidth: 40px;\r\n\t\t\theight: 40px;\r\n\t\t\ttransition: .5s;\r\n\t\t\tborder-radius:50%;\r\n\t\t\tdisplay:inline-block;\r\n\t\t\tposition:relative;\r\n\t\t\tfont-size: 20px;\r\n\t\t\tcolor: black;\r\n\r\n\t\t\thover{\r\n\t\t\t\tcolor:white;\r\n\t\t\t\tbackground-color: black;\r\n\t\t\t\tbox-shadow: 0px 10px 40px #3e3c3c7a;\r\n\t\t\t}\r\n\r\n\t\t\ti{\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\t-webkit-transform: translate(-50%,-50%);\r\n\t\t\t\t        transform: translate(-50%,-50%);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// news card\r\n.card__grup{\r\n\theight:350px;\r\n\r\n\t>div{\r\n\t\t>p{\r\n\t\t\tfont-size: 14px;\r\n\t\t}\r\n\t}\r\n\r\n\t>div{\r\n\t\t>div{\r\n\t\t\t>div{\r\n\t\t\t\t>p{\r\n\t\t\t\t\tfont-size: 14px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t:before{\r\n\t\tcontent:\"\";\r\n\t\tposition:absolute;\r\n\t\tleft:0;\r\n\t\tright: 0;\r\n\t\ttop:0;\r\n\t\tbottom: 0;\r\n\t\tbackground-color: #ececec80;\r\n\t\ttransition: .5s;\r\n\t}\r\n\r\n\t:hover{\r\n\t\t&::before{\r\n\t\t\tbackground-color: #ecececd6;\r\n\t\t}\r\n\r\n\t\t>img{\r\n\t\t\t-webkit-transform: scale(1.2);\r\n\t\t\t        transform: scale(1.2);\r\n\t\t}\r\n\t}\r\n\r\n\t>img{\r\n\t\tposition:absolute;\r\n\t\tleft:0;\r\n\t\tright: 0;\r\n\t\ttop:0;\r\n\t\tbottom: 0;\r\n\t\tz-index: -1;\r\n\t\theight: 100%;\r\n\t\t-o-object-fit: cover;\r\n\t\t   object-fit: cover;\r\n\t\twidth: 100%;\r\n\t\ttransition: .5s;\r\n\t}\r\n}\r\n.like__wrapper{\r\n\tposition:absolute;\r\n\tbottom:15px;\r\n\tright:15px;\r\n\tz-index: 1;\r\n\r\n\tul{\r\n\t\tbackground-color: #8686868c;\r\n\t\tborder-radius: 30px;\r\n\r\n\t\tli{\r\n\t\t\ttransition: .5s;\r\n\t\t\t\r\n\t\t\t&:hover{\r\n\t\t\t\ti{\r\n\t\t\t\t\tcolor:white;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\ti{\r\n\t\t\t\tfont-size: 28px;\r\n\t\t\t\tcolor: #3e3e3e;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.footer {\r\n  position: absolute ;\r\n  height: 40px;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 10px;\r\n  margin-top: 40px;\r\n  width: 100%;\r\n  background-color: rgb(36, 35, 35);\r\n  color: rgb(182, 182, 182);\r\n  text-align: center;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.zoom {\r\n  padding: 50px;\r\n  background-color:transparent;\r\n  transition: -webkit-transform .2s;\r\n  transition: transform .2s;\r\n  transition: transform .2s, -webkit-transform .2s;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin: 0 auto;\r\n}\r\n.zoom:hover { /* IE 9 */\r\n  -webkit-transform: scale(1.5); /* Safari 3-8 */\r\n  transform: scale(1.5); \r\n}\r\n.imag\r\n{\r\n  max-width: 240px;\r\n  max-height: 180px;\r\n  margin-bottom: 30px;\r\n  transition: 0.3s;\r\n  opacity: 1;\r\n}\r\n.imag:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);}\r\np\r\n  {\r\n    line-height: 130%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlldC1wbGFuL2RpZXQtcGxhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQTRDO0VBQzVDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRjs7OztLQUlLO0FBQ0g7O0lBRUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxhQUFhO0VBQ2Y7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0FBRUE7O01BRUksZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjtBQUNGOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtFQUNqQjtBQUNBOzs7Ozs7Ozs7S0FTRztBQUNIO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUE7O0lBRUUsVUFBVTtFQUNaO0FBQ0E7O0lBRUUsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQ0FBb0M7RUFDdEM7QUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7QUFFQTs7SUFFRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzSEFBc0g7SUFDdEgsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7QUFDQTs7SUFFRSx5QkFBeUI7RUFDM0I7QUFDQSw4REFBOEQ7QUFFOUQsa0RBQWtEO0FBRWxEO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLFlBQVk7RUFDZDtBQUVBOztJQUVFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0E7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLHNIQUFzSDs7SUFFdEgsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7QUFDQTs7SUFFRSxnQkFBZ0I7SUFDaEIscUVBQXFFO0lBQ3JFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0E7O0lBRUUsZUFBZTtJQUNmLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0hBQXNIO0VBQ3hIO0FBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzSEFBc0g7RUFDeEg7QUFJQSw4R0FBOEc7QUFFaEg7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxlQUFlO0NBQ2Y7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFFQTtDQUNDLGVBQWU7Q0FDZjtFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUVBO0NBQ0MsZUFBZTtDQUNmO0VBQ0MsZUFBZTtDQUNoQjtBQUNEO0FBRUE7Q0FDQyxlQUFlO0NBQ2Y7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7QUFFQTtDQUNDLGVBQWU7Q0FDZjtFQUNDLGVBQWU7Q0FDaEI7QUFDRDtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBR0E7Q0FDQyw2QkFBNkI7QUFDOUI7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVDOztDQUVBLGVBQWU7Q0FDZixTQUFTO0NBQ1QsUUFBUTs7Q0FFUjtFQUNDLG9CQUFvQjtDQUNyQjtBQUNEO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFFBQVE7QUFDVDtBQUVBO0NBQ0M7RUFDQztHQUNDLFdBQVc7R0FDWCxZQUFZO0dBQ1osZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixvQkFBb0I7R0FDcEIsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixZQUFZOztHQUVaO0lBQ0MsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQ0FBbUM7R0FDcEM7O0dBRUE7SUFDQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUix1Q0FBK0I7WUFBL0IsK0JBQStCO0dBQ2hDO0VBQ0Q7Q0FDRDtBQUNEO0FBR0E7O0NBRUMsWUFBWTs7Q0FFWjtFQUNDO0dBQ0MsZUFBZTtFQUNoQjtDQUNEOztDQUVBO0VBQ0M7R0FDQztJQUNDO0tBQ0MsZUFBZTtJQUNoQjtHQUNEO0VBQ0Q7Q0FDRDs7Q0FFQTtFQUNDLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLFFBQVE7RUFDUixLQUFLO0VBQ0wsU0FBUztFQUNULDJCQUEyQjtFQUMzQixlQUFlO0NBQ2hCOztDQUVBO0VBQ0M7R0FDQywyQkFBMkI7RUFDNUI7O0VBRUE7R0FDQyw2QkFBcUI7V0FBckIscUJBQXFCO0VBQ3RCO0NBQ0Q7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsTUFBTTtFQUNOLFFBQVE7RUFDUixLQUFLO0VBQ0wsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtDQUNoQjtBQUNEO0FBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLFVBQVU7Q0FDVixVQUFVOztDQUVWO0VBQ0MsMkJBQTJCO0VBQzNCLG1CQUFtQjs7RUFFbkI7R0FDQyxlQUFlOztHQUVmO0lBQ0M7S0FDQyxXQUFXO0lBQ1o7R0FDRDs7R0FFQTtJQUNDLGVBQWU7SUFDZixjQUFjO0dBQ2Y7RUFDRDtDQUNEO0FBQ0Q7QUFNQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzSEFBc0g7QUFDeEg7QUFJQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsaUNBQXlCO0VBQXpCLHlCQUF5QjtFQUF6QixnREFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBRUEsY0FDNkIsU0FBUztFQUNwQyw2QkFBNkIsRUFBRSxlQUFlO0VBQzlDLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUIsQ0FBQztBQUV0Qjs7SUFFRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kaWV0LXBsYW4vZGlldC1wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpblJvd3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JnMi5qcGVnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IDEwcHggMzBweCAwcHg7ICovXHJcbiAgICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfSBcclxuICBoMiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLyogXHJcbiAgaW5wdXQge1xyXG4gICBzdHlsZT1cIiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1wiXHJcblxyXG4gIH0gKi9cclxuICAud3RhZ1xyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIG1hcmdpbjogNnB4IDBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmhlaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDZweCA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBzZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46IDFweCAwIDFweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLnNlbGVjdExhYmVsIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLnJhZGlvRGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7O1xyXG4gIH0gXHJcbiAgLnJhZGlvLWlubGluZSB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gMCA7XHJcbiAgfVxyXG5cclxuICBidXR0b25cclxuICB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHggO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLXNlbGY6IGF1dG87XHJcbiAgfVxyXG4jYnRcclxuICB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgb3V0bGluZTogbWVkaXVtO1xyXG4gIH1cclxuICAvKiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgfSAqL1xyXG4gIGZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmVzdWx0cyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5oZWlnaHQubmctdmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gIH1cclxuICAud3RhZy5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgfVxyXG4gIC5zZWxlY3RMYWJlbC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgfVxyXG4gIHNlbGVjdC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sXHJcbiAge1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICB9XHJcbiAgLndyaXRlXHJcbiAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC53cml0ZVJcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDg5cHg7ICovXHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2N1c3RvbWVycyB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcblxyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTs7XHJcbiAgfVxyXG4gIHRhYmxlXHJcbiAge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgLyogI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9ICovXHJcbiAgXHJcbiAgLyogI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9ICovXHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gXHJcbiAgLnJvdW5kXHJcbiAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuc3RlcDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDdweDtcclxuICB9XHJcbiAgI3BsYW5cclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcbiAgaDNcclxuICB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5kaXNwZGl2e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAjc3RydDNcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6SW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2M3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XHJcbiAgfVxyXG4gICNzdHJ0MzFcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIH1cclxuICAjc3RydDJ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgI3N0cnRCdFxyXG4gIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTQsIDApO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnMrVEM6MTAwLDMwMCw0MDAsNTAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7ICovXHJcblxyXG5zZWN0aW9ue1xyXG4gIHBhZGRpbmc6IDgwcHggMDtcclxufVxyXG5cclxuaW1ne1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuKntcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5he1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlcntcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51cHBlcmNhc2VfX2ZvbnR7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uY2FwaXRhbGl6ZV9fZm9udHtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmp1c3RpZnl7XHJcblx0dGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG59XHJcblxyXG4udW5kZXJsaW5le1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMXtcclxuXHRmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbmgye1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHRAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHRcdGZvbnQtc2l6ZTogMzVweDtcclxuXHR9XHJcbn1cclxuXHJcbmgze1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHRAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHRcdGZvbnQtc2l6ZTogMjVweDtcclxuXHR9XHJcbn1cclxuXHJcbmg0e1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbn1cclxuXHJcbmg1e1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcbn1cclxuXHJcbmg2e1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNXtcclxuXHRmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5cclxuLm5vcm1hbHtcclxuXHRmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vX19vdXRsaW5le1xyXG5cdG91dGxpbmUtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvaW50ZXJ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gdWxcclxuLnVsX19saXN0LS1pbmxpbmV7XHJcblx0bGlzdC1zdHlsZTpub25lO1xyXG5cdHBhZGRpbmc6MDtcclxuXHRtYXJnaW46MDtcclxuXHJcblx0Pmxpe1xyXG5cdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0fVxyXG59XHJcblxyXG4udWxfX2xpc3R7XHJcblx0bGlzdC1zdHlsZTpub25lO1xyXG5cdHBhZGRpbmc6MDtcclxuXHRtYXJnaW46MDtcclxufVxyXG5cclxuLnNvc21lZF9fbGlzdHtcclxuXHRsaXtcclxuXHRcdGF7XHJcblx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRjb2xvcjogYmxhY2s7XHJcblxyXG5cdFx0XHRob3ZlcntcclxuXHRcdFx0XHRjb2xvcjp3aGl0ZTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0XHRib3gtc2hhZG93OiAwcHggMTBweCA0MHB4ICMzZTNjM2M3YTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aXtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4vLyBuZXdzIGNhcmRcclxuLmNhcmRfX2dydXB7XHJcblx0aGVpZ2h0OjM1MHB4O1xyXG5cclxuXHQ+ZGl2e1xyXG5cdFx0PnB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdD5kaXZ7XHJcblx0XHQ+ZGl2e1xyXG5cdFx0XHQ+ZGl2e1xyXG5cdFx0XHRcdD5we1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0OmJlZm9yZXtcclxuXHRcdGNvbnRlbnQ6XCJcIjtcclxuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0bGVmdDowO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6MDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM4MDtcclxuXHRcdHRyYW5zaXRpb246IC41cztcclxuXHR9XHJcblxyXG5cdDpob3ZlcntcclxuXHRcdCY6OmJlZm9yZXtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlY2Q2O1xyXG5cdFx0fVxyXG5cclxuXHRcdD5pbWd7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdD5pbWd7XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOjA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiAtMTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR0cmFuc2l0aW9uOiAuNXM7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLmxpa2VfX3dyYXBwZXJ7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0Ym90dG9tOjE1cHg7XHJcblx0cmlnaHQ6MTVweDtcclxuXHR6LWluZGV4OiAxO1xyXG5cclxuXHR1bHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM4Njg2ODY4YztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblxyXG5cdFx0bGl7XHJcblx0XHRcdHRyYW5zaXRpb246IC41cztcclxuXHRcdFx0XHJcblx0XHRcdCY6aG92ZXJ7XHJcblx0XHRcdFx0aXtcclxuXHRcdFx0XHRcdGNvbG9yOndoaXRlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aXtcclxuXHRcdFx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRcdFx0Y29sb3I6ICMzZTNlM2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM2LCAzNSwgMzUpO1xyXG4gIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuLnpvb20ge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogSUUgOSAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBTYWZhcmkgMy04ICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyBcclxufVxyXG4uaW1hZ1xyXG57XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uaW1hZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO31cclxuXHJcbiAgcFxyXG4gIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/diet-plan/diet-plan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/diet-plan/diet-plan.component.ts ***!
  \**************************************************/
/*! exports provided: DietPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanComponent", function() { return DietPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DietPlanComponent = /** @class */ (function () {
    function DietPlanComponent(http) {
        this.http = http;
        // @ViewChild('f', { static: false }) signupForm: NgForm;
        this.planed = false;
        this.diet = "";
        this.exclude = "";
        this.calculated = false;
        this.gender = "";
        this.btt1 = false;
        this.btt2 = false;
        this.btt3 = false;
        this.btt4 = false;
        this.btt5 = false;
        this.btt6 = false;
        this.btt7 = false;
        this.created = false;
        this.imagUrl = "https://spoonacular.com/recipeImages/";
    }
    DietPlanComponent.prototype.ngOnInit = function () {
    };
    //https://api.spoonacular.com/mealplanner/generate?apiKey=0b07353eee4c49c1b14ef72cc3d1029b&targetCalories=2600
    //targetCaloreis=2000 || diet=vegetarian || exclude=eggs
    //Full Meal Plan for 1 week according to cals and diet
    DietPlanComponent.prototype.onSubmit = function (form) {
        this.height = (this.feet * 12) + this.inches;
        if (this.gender == 'female') {
            this.bmr = 655 + (4.35 * this.weight) + (4.7 * this.height) - (4.7 * this.age);
        }
        else {
            this.bmr = 66 + (6.23 * this.weight) + (12.7 * this.height) - (6.8 * this.age);
        }
        this.bmr = Math.floor(this.bmr);
        if (this.activity == 'sedentary') {
            this.cals = this.bmr * 1.2;
        }
        else if (this.activity == 'light') {
            this.cals = this.bmr * 1.375;
        }
        else if (this.activity == 'moderate') {
            this.cals = this.bmr * 1.55;
        }
        else if (this.activity == 'active') {
            this.cals = this.bmr * 1.725;
        }
        else {
            this.cals = this.bmr * 1.9;
        }
        this.maintenance = Math.floor(this.cals);
        if (this.goals == 'lose2') {
            this.golCals = this.maintenance - 1000;
        }
        else if (this.goals == 'lose1') {
            this.golCals = this.maintenance - 500;
        }
        else if (this.goals == 'maintain') {
            this.golCals = this.maintenance;
        }
        else if (this.goals == 'gain1') {
            this.golCals = this.maintenance + 500;
        }
        else {
            this.golCals = this.maintenance + 1000;
        }
        this.calculated = true;
    };
    DietPlanComponent.prototype.plan = function () {
        var _this = this;
        this.planed = true;
        var obss = this.http.get('https://api.spoonacular.com/mealplanner/generate?apiKey=2ffb8c83e1c6424fbf42c3510b64078f&targetCalories=' + this.golCals + '&diet=' + this.diet + '&exclude=' + this.exclude);
        obss.subscribe(function (response2) {
            _this.response2 = response2;
            console.log(_this.response2);
        });
    };
    DietPlanComponent.prototype.bt1 = function () { this.btt1 = true; };
    DietPlanComponent.prototype.bt2 = function () { this.btt2 = true; };
    DietPlanComponent.prototype.bt3 = function () { this.btt3 = true; };
    DietPlanComponent.prototype.bt4 = function () { this.btt4 = true; };
    DietPlanComponent.prototype.bt5 = function () { this.btt5 = true; };
    DietPlanComponent.prototype.bt6 = function () { this.btt6 = true; };
    DietPlanComponent.prototype.bt7 = function () { this.btt7 = true; };
    DietPlanComponent.prototype.create = function () {
        this.created = true;
    };
    DietPlanComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DietPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diet-plan',
            template: __webpack_require__(/*! raw-loader!./diet-plan.component.html */ "./node_modules/raw-loader/index.js!./src/app/diet-plan/diet-plan.component.html"),
            styles: [__webpack_require__(/*! ./diet-plan.component.css */ "./src/app/diet-plan/diet-plan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DietPlanComponent);
    return DietPlanComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\r\n    /* The image used */\r\n    /* background-image: url(\"../../assets/list.jpg\"); */\r\n  \r\n    min-height: 70px;\r\n  \r\n    /* Center and scale the image nicely */\r\n    background-color: black;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;\r\n    letter-spacing: 2px;\r\n    font-size: 20px;\r\n    /* Needed to position the navbar */\r\n    position: relative;\r\n  }\r\n  \r\n  /* Position the navbar container inside the image */\r\n  \r\n  .container {\r\n    /* position: absolute; */\r\n  /* margin: 3px; */\r\n    width:100%;\r\n  }\r\n  \r\n  /* The navbar */\r\n  \r\n  .topnav {\r\n    overflow: hidden;\r\n    /* background-color: black; */\r\n  }\r\n  \r\n  /* Navbar links */\r\n  \r\n  .topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 23px 30px;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9EQUFvRDs7SUFFcEQsZ0JBQWdCOztJQUVoQixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUVBQXVFO0lBQ3ZFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtFQUNwQjs7RUFFQSxtREFBbUQ7O0VBQ25EO0lBQ0Usd0JBQXdCO0VBQzFCLGlCQUFpQjtJQUNmLFVBQVU7RUFDWjs7RUFFQSxlQUFlOztFQUNmO0lBQ0UsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjs7RUFDQSxpQkFBaUI7O0VBQ2pCO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltZyB7XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2xpc3QuanBnXCIpOyAqL1xyXG4gIFxyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICBcclxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZiA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLyogTmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBuYXZiYXIgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogUG9zaXRpb24gdGhlIG5hdmJhciBjb250YWluZXIgaW5zaWRlIHRoZSBpbWFnZSAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIC8qIG1hcmdpbjogM3B4OyAqL1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIG5hdmJhciAqL1xyXG4gIC50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gIH1cclxuICAvKiBOYXZiYXIgbGlua3MgKi9cclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIzcHggMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.authService.user.subscribe(function (user) {
            _this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    };
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeRecipes();
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.fetchRecipes().subscribe();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/recipe-book/recipe-book.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recipe-book/recipe-book.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  /* Float four columns side by side */\r\n  \r\n  .column {\r\n    float: left;\r\n    width: 25%;\r\n    padding: 0 10px;\r\n  }\r\n  \r\n  /* Remove extra left and right margins, due to padding in columns */\r\n  \r\n  .row {margin: 0 -5px;}\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Style the counter cards */\r\n  \r\n  .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the \"card\" effect */\r\n    padding: 16px;\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    height: 300px;\r\n  }\r\n  \r\n  /* Responsive columns - one column layout (vertical) on small screens */\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .column {\r\n      width: 100%;\r\n      display: block;\r\n      margin-bottom: 20px;\r\n      \r\n    }\r\n  }\r\n  \r\n  .bgimg{\r\n    background-image: url('bg2.jpeg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n  }\r\n  \r\n  .footer {\r\n    position: relative ;\r\n    height: 40px;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding: 10px;\r\n    margin-top: 40px;\r\n    width: 100%;\r\n    background-color: rgb(36, 35, 35);\r\n    color: rgb(182, 182, 182);\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n  \r\n  h2\r\n  {\r\n    color: white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  section{\r\n    padding: 80px 0;\r\n  }\r\n  \r\n  img{\r\n    max-width: 100%;\r\n  }\r\n  \r\n  *{\r\n    font-size: 16px;\r\n    font-family: 'Noto Sans TC', sans-serif;\r\n  }\r\n  \r\n  a{\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a:hover{\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .uppercase__font{\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .capitalize__font{\r\n    text-transform: capitalize;\r\n  }\r\n  \r\n  .justify{\r\n    text-align:justify;\r\n  }\r\n  \r\n  .underline{\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  h1{\r\n    font-size: 70px;\r\n  }\r\n  \r\n  h2{\r\n    font-size: 50px;\r\n    @media screen and(max-width: 768px){\r\n      font-size: 35px;\r\n    }\r\n  }\r\n  \r\n  h3{\r\n    font-size: 40px;\r\n    @media screen and(max-width: 768px){\r\n      font-size: 25px;\r\n    }\r\n  }\r\n  \r\n  h4{\r\n    font-size: 30px;\r\n    @media screen and(max-width: 768px){\r\n      font-size: 20px;\r\n    }\r\n  }\r\n  \r\n  h5{\r\n    font-size: 24px;\r\n    @media screen and(max-width: 768px){\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  \r\n  h6{\r\n    font-size: 18px;\r\n    @media screen and(max-width: 768px){\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5{\r\n    font-weight: 900;\r\n  }\r\n  \r\n  .normal{\r\n    font-weight:normal !important;\r\n  }\r\n  \r\n  .no__outline{\r\n    outline-style: none !important;\r\n  }\r\n  \r\n  .pointer{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  ul\r\n  .ul__list--inline{\r\n    list-style:none;\r\n    padding:0;\r\n    margin:0;\r\n  \r\n    >li{\r\n      display:inline-block;\r\n    }\r\n  }\r\n  \r\n  .ul__list{\r\n    list-style:none;\r\n    padding:0;\r\n    margin:0;\r\n  }\r\n  \r\n  .sosmed__list{\r\n    li{\r\n      a{\r\n        width: 40px;\r\n        height: 40px;\r\n        transition: .5s;\r\n        border-radius:50%;\r\n        display:inline-block;\r\n        position:relative;\r\n        font-size: 20px;\r\n        color: black;\r\n  \r\n        hover{\r\n          color:white;\r\n          background-color: black;\r\n          box-shadow: 0px 10px 40px #3e3c3c7a;\r\n        }\r\n  \r\n        i{\r\n          position: absolute;\r\n          left: 50%;\r\n          top: 50%;\r\n          -webkit-transform: translate(-50%,-50%);\r\n                  transform: translate(-50%,-50%);\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n  // news card\r\n  .card__grup{\r\n    height:350px;\r\n  \r\n    >div{\r\n      >p{\r\n        font-size: 14px;\r\n      }\r\n    }\r\n  \r\n    >div{\r\n      >div{\r\n        >div{\r\n          >p{\r\n            font-size: 14px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  \r\n    &::before{\r\n      content:\"\";\r\n      position:absolute;\r\n      left:0;\r\n      right: 0;\r\n      top:0;\r\n      bottom: 0;\r\n      background-color: #ececec80;\r\n      transition: .5s;\r\n    }\r\n  \r\n    &:hover{\r\n      &::before{\r\n        background-color: #ecececd6;\r\n      }\r\n  \r\n      >img{\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n      }\r\n    }\r\n  \r\n    >img{\r\n      position:absolute;\r\n      left:0;\r\n      right: 0;\r\n      top:0;\r\n      bottom: 0;\r\n      z-index: -1;\r\n      height: 100%;\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\r\n      width: 100%;\r\n      transition: .5s;\r\n    }\r\n  }\r\n  \r\n  .like__wrapper{\r\n    position:absolute;\r\n    bottom:15px;\r\n    right:15px;\r\n    z-index: 1;\r\n  \r\n    ul{\r\n      background-color: #8686868c;\r\n      border-radius: 30px;\r\n  \r\n      li{\r\n        transition: .5s;\r\n        \r\n        &:hover{\r\n          i{\r\n            color:white;\r\n          }\r\n        }\r\n  \r\n        i{\r\n          font-size: 28px;\r\n          color: #3e3e3e;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n  .imag\r\n{\r\n  width: 150px;\r\n  height: 150px;\r\n  margin-bottom: 0px;\r\n  transition: 0.3s;\r\n  opacity: 1;\r\n  border-radius: 7px;\r\n  margin-left: 20px;\r\n}\r\n  \r\n  .imag:hover {\r\n  background-image: url('bg2.jpeg');\r\n  -webkit-transform: scale(1.25);\r\n          transform: scale(1.25);\r\n  opacity: 0.8;\r\n\r\n}\r\n  \r\n  p{\r\n  padding-left: 10px;\r\n  margin-left: 20px;\r\n  padding-bottom: 40px;\r\n  font-size: 20px;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    /* text-overflow: ellipsis;  */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7RUFFQSxvQ0FBb0M7O0VBQ3BDO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBLG1FQUFtRTs7RUFDbkUsTUFBTSxjQUFjLENBQUM7O0VBRXJCLG1DQUFtQzs7RUFDbkM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQSw0QkFBNEI7O0VBQzVCO0lBQ0UsMENBQTBDLEVBQUUsZ0NBQWdDO0lBQzVFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQSx1RUFBdUU7O0VBQ3ZFO0lBQ0U7TUFDRSxXQUFXO01BQ1gsY0FBYztNQUNkLG1CQUFtQjs7SUFFckI7RUFDRjs7RUFDQTtJQUNFLGlDQUE0QztJQUM1QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzSEFBc0g7RUFDeEg7O0VBQ0E7O0lBRUUsWUFBWTtJQUNaLHNIQUFzSDtJQUN0SCxnQkFBZ0I7RUFDbEI7O0VBT0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUdBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQzs7SUFFQyxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7O0lBRVI7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtFQUNWOztFQUVBO0lBQ0U7TUFDRTtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixZQUFZOztRQUVaO1VBQ0UsV0FBVztVQUNYLHVCQUF1QjtVQUN2QixtQ0FBbUM7UUFDckM7O1FBRUE7VUFDRSxrQkFBa0I7VUFDbEIsU0FBUztVQUNULFFBQVE7VUFDUix1Q0FBK0I7a0JBQS9CLCtCQUErQjtRQUNqQztNQUNGO0lBQ0Y7RUFDRjs7RUFHQTs7SUFFRSxZQUFZOztJQUVaO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7O0lBRUE7TUFDRTtRQUNFO1VBQ0U7WUFDRSxlQUFlO1VBQ2pCO1FBQ0Y7TUFDRjtJQUNGOztJQUVBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixNQUFNO01BQ04sUUFBUTtNQUNSLEtBQUs7TUFDTCxTQUFTO01BQ1QsMkJBQTJCO01BQzNCLGVBQWU7SUFDakI7O0lBRUE7TUFDRTtRQUNFLDJCQUEyQjtNQUM3Qjs7TUFFQTtRQUNFLDZCQUFxQjtnQkFBckIscUJBQXFCO01BQ3ZCO0lBQ0Y7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsTUFBTTtNQUNOLFFBQVE7TUFDUixLQUFLO01BQ0wsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsZUFBZTtJQUNqQjtFQUNGOztFQUdBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTs7SUFFVjtNQUNFLDJCQUEyQjtNQUMzQixtQkFBbUI7O01BRW5CO1FBQ0UsZUFBZTs7UUFFZjtVQUNFO1lBQ0UsV0FBVztVQUNiO1FBQ0Y7O1FBRUE7VUFDRSxlQUFlO1VBQ2YsY0FBYztRQUNoQjtNQUNGO0lBQ0Y7RUFDRjs7RUFFRjs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0VBQ0E7RUFDRSxpQ0FBNEM7RUFDNUMsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZOztBQUVkOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHNIQUFzSDtJQUNwSCw4QkFBOEI7RUFDaEMiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUtYm9vay9yZWNpcGUtYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKiBGbG9hdCBmb3VyIGNvbHVtbnMgc2lkZSBieSBzaWRlICovXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlbW92ZSBleHRyYSBsZWZ0IGFuZCByaWdodCBtYXJnaW5zLCBkdWUgdG8gcGFkZGluZyBpbiBjb2x1bW5zICovXHJcbiAgLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBjb3VudGVyIGNhcmRzICovXHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiB0aGlzIGFkZHMgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIGNvbHVtbnMgLSBvbmUgY29sdW1uIGxheW91dCAodmVydGljYWwpIG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZ2ltZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmcyLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM1LCAzNSk7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgaDJcclxuICB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAqe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgVEMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudXBwZXJjYXNlX19mb250e1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmNhcGl0YWxpemVfX2ZvbnR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgXHJcbiAgLmp1c3RpZnl7XHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDN7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoNHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGg1e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDZ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoMSwgaDIsIGgzLCBoNCwgaDV7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubm9ybWFse1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub19fb3V0bGluZXtcclxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICB1bFxyXG4gIC51bF9fbGlzdC0taW5saW5le1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgXHJcbiAgICA+bGl7XHJcbiAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudWxfX2xpc3R7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICB9XHJcbiAgXHJcbiAgLnNvc21lZF9fbGlzdHtcclxuICAgIGxpe1xyXG4gICAgICBhe1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICBcclxuICAgICAgICBob3ZlcntcclxuICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCA0MHB4ICMzZTNjM2M3YTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaXtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gbmV3cyBjYXJkXHJcbiAgLmNhcmRfX2dydXB7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgXHJcbiAgICA+ZGl2e1xyXG4gICAgICA+cHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgID5kaXZ7XHJcbiAgICAgID5kaXZ7XHJcbiAgICAgICAgPmRpdntcclxuICAgICAgICAgID5we1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM4MDtcclxuICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJjpob3ZlcntcclxuICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWNkNjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA+aW1ne1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgPmltZ3tcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICAubGlrZV9fd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjE1cHg7XHJcbiAgICByaWdodDoxNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICBcclxuICAgIHVse1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4Njg2OGM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgXHJcbiAgICAgIGxpe1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzNlM2UzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4uaW1hZ1xyXG57XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmltYWc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYmcyLmpwZWcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5cclxufVxyXG5cclxucHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgICovXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/recipe-book/recipe-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipe-book/recipe-book.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeBookComponent", function() { return RecipeBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RecipeBookComponent = /** @class */ (function () {
    // title:string="https://api.spoonacular.com/recipes/guessNutrition?apiKey=2ffb8c83e1c6424fbf42c3510b64078f&title=";
    function RecipeBookComponent(http) {
        this.http = http;
        this.searched = false;
        this.UserSearch = "";
        // response:any;
        this.baseUri = "https://www.youtube.com/embed/";
    }
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=1d92f0add4a74d61bc32b07093c184f8&query=pasta
    //This gives title cals & nutrition val & image 
    // https://api.spoonacular.com/food/trivia/random?apiKey=2ffb8c83e1c6424fbf42c3510b64078f
    // https://api.spoonacular.com/food/videos/search?apiKey=2ffb8c83e1c6424fbf42c3510b64078f&query=pasta&number=6
    // https://www.youtube.com/embed/YTZGPCCB2FU
    RecipeBookComponent.prototype.ngOnInit = function () {
    };
    RecipeBookComponent.prototype.search = function () {
        var _this = this;
        this.searched = true;
        // let obs = this.http.get('https://api.spoonacular.com/recipes/guessNutrition?apiKey=2ffb8c83e1c6424fbf42c3510b64078f&title='+this.title);
        // obs.subscribe((response)=>{
        //   this.response = response;
        //   console.log(this.response);
        // });
        var obs2 = this.http.get('https://api.spoonacular.com/food/videos/search?apiKey=9e884bd2d32e4b7eaddacc8fd183e824&query=' + this.UserSearch);
        obs2.subscribe(function (response2) {
            _this.response2 = response2;
            console.log(_this.response2);
        });
    };
    RecipeBookComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RecipeBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-book',
            template: __webpack_require__(/*! raw-loader!./recipe-book.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-book/recipe-book.component.html"),
            styles: [__webpack_require__(/*! ./recipe-book.component.css */ "./src/app/recipe-book/recipe-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecipeBookComponent);
    return RecipeBookComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    color: white;\r\n}\r\nli\r\n{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93XHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5saVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");




var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipes/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\nlabel\n{\n  color: white;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  font-size: 15px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLFlBQVk7RUFDWixzSEFBc0g7RUFDdEgsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbmxhYmVsXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function() { return RecipeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");





var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ingredients: recipeIngredients
        });
    };
    RecipeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-edit',
            template: __webpack_require__(/*! raw-loader!./recipe-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__(/*! ./recipe-edit.component.css */ "./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipe_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recipe.model */ "./src/app/recipes/recipe.model.ts");



var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _recipe_model__WEBPACK_IMPORTED_MODULE_2__["Recipe"])
    ], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.css */ "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe.service */ "./src/app/recipes/recipe.service.ts");




var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.recipeService.recipesChanged
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeListComponent.ctorParameters = function () { return [
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipes/recipe-list/recipe-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipe-start/recipe-start.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function() { return RecipeStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeStartComponent = /** @class */ (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-start',
            template: __webpack_require__(/*! raw-loader!./recipe-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipe-start/recipe-start.component.html"),
            styles: [__webpack_require__(/*! ./recipe-start.component.css */ "./src/app/recipes/recipe-start/recipe-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeStartComponent);
    return RecipeStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/*!*****************************************!*\
  !*** ./src/app/recipes/recipe.model.ts ***!
  \*****************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    Recipe.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/recipes/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shopping-list/shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");




var RecipeService = /** @class */ (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // private recipes: Recipe[] = [
        //   new Recipe(
        //     'Tasty Schnitzel',
        //     'A super-tasty Schnitzel - just awesome!',
        //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
        //   ),
        //   new Recipe(
        //     'Big Fat Burger',
        //     'What else you need to say?',
        //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
        //   )
        // ];
        this.recipes = [];
    }
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.ctorParameters = function () { return [
        { type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"] }
    ]; };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingListService"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes/recipes-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: RecipesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesResolverService", function() { return RecipesResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.service */ "./src/app/recipes/recipe.service.ts");




var RecipesResolverService = /** @class */ (function () {
    function RecipesResolverService(dataStorageService, recipesService) {
        this.dataStorageService = dataStorageService;
        this.recipesService = recipesService;
    }
    RecipesResolverService.prototype.resolve = function (route, state) {
        var recipes = this.recipesService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    };
    RecipesResolverService.ctorParameters = function () { return [
        { type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"] },
        { type: _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] }
    ]; };
    RecipesResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["DataStorageService"],
            _recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"]])
    ], RecipesResolverService);
    return RecipesResolverService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.row{\r\n    background-image: url('bg2.jpeg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .footer {\r\n    position: relative ;\r\n    height: 40px;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding: 10px;\r\n    margin-top: 40px;\r\n    width: 100%;\r\n    background-color: rgb(36, 35, 35);\r\n    color: rgb(182, 182, 182);\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n  .container1\r\n  {\r\n      /* margin-left:140px;\r\n      margin-top: 40px; */\r\n      padding: 60px;\r\n  }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUNBQThDO0lBQzlDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNIQUFzSDtFQUN4SDs7RUFDQTs7TUFFSTt5QkFDbUI7TUFDbkIsYUFBYTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZzIuanBlZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzYsIDM1LCAzNSk7XHJcbiAgICBjb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjFcclxuICB7XHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OjE0MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4OyAqL1xyXG4gICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! raw-loader!./recipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes/recipe.service */ "./src/app/recipes/recipe.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var recipes = this.recipeService.getRecipes();
        this.http
            .put('https://recepie-book-d8668.firebaseio.com/recipes.json', recipes)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    DataStorageService.prototype.fetchRecipes = function () {
        var _this = this;
        return this.http
            .get('https://recepie-book-d8668.firebaseio.com/recipes.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (recipes) {
            return recipes.map(function (recipe) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, recipe, { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        }));
    };
    DataStorageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    DataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _recipes_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/ingredient.model.ts ***!
  \********************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Ingredient.ctorParameters = function () { return [
        { type: String },
        { type: Number }
    ]; };
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #2102cf;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #2102cf transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzRUFBOEQ7VUFBOUQsOERBQThEO0VBQzlELHlEQUF5RDtBQUMzRDtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1yaW5nIGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDUxcHg7XG4gIG1hcmdpbjogNnB4O1xuICBib3JkZXI6IDZweCBzb2xpZCAjMjEwMmNmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICBib3JkZXItY29sb3I6ICMyMTAyY2YgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
            styles: [__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/shared/loading-spinner/loading-spinner.component.css")]
        })
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");





var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.slService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngredient = new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_3__["Ingredient"](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.slService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.slService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! raw-loader!./shopping-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.css */ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingListService"]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label\r\n{\r\n    margin-bottom: 10px;\r\n}  \r\n.row{\r\n    background-image: url('bg2.jpeg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    color: white;\r\n    font-size: 17px;\r\n    \r\n  }  \r\n.col-xs-4\r\n  {\r\n      margin-left: 175px;\r\n      margin-top: 50px;\r\n      /* background-color: green; */\r\n  }  \r\n.footer {\r\n    position: absolute ;\r\n    height: 40px;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding: 10px;\r\n    margin-top: 40px;\r\n    width: 100%;\r\n    background-color: rgb(36, 35, 35);\r\n    color: rgb(182, 182, 182);\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }  \r\nbutton\r\n  {\r\n      background-color: orangered;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQ0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7O0VBRWpCO0FBQ0E7O01BRUksa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQiw2QkFBNkI7RUFDakM7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzSEFBc0g7RUFDeEg7QUFDQTs7TUFFSSwyQkFBMkI7RUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsXHJcbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0gIFxyXG4ucm93e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9iZzIuanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLmNvbC14cy00XHJcbiAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTc1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xyXG4gIH1cclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNiwgMzUsIDM1KTtcclxuICAgIGNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBidXR0b25cclxuICB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService, http) {
        this.slService = slService;
        this.http = http;
        this.asked = false;
        this.myimage1 = "assets/list.jpg";
        this.imagUrl = "";
    }
    // https://api.spoonacular.com/recipes/quickAnswer?apiKey=24464097216b4550b40cec6ed1ae43e9&q=How+much+carbs+in+pasta
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.startedEditing.next(index);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent.prototype.askQ = function () {
        var _this = this;
        this.asked = true;
        var obss = this.http.get('https://api.spoonacular.com/recipes/quickAnswer?apiKey=2ffb8c83e1c6424fbf42c3510b64078f&q=' + this.question);
        obss.subscribe(function (response2) {
            _this.response2 = response2;
            console.log(_this.response2);
        });
    };
    ShoppingListComponent.ctorParameters = function () { return [
        { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ingredient.model */ "./src/app/shared/ingredient.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// import { HttpClient } from '@angular/common/http';
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingredients = [
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Apples', 5),
            new _shared_ingredient_model__WEBPACK_IMPORTED_MODULE_0__["Ingredient"]('Tomatoes', 10),
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TypeScriptNinja\auth-final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map