# jest-framework-starter
(As per the Jest website) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

I have created this project as a starting point for those who want to use Jest for functional test automation. 

If you are planning to use Jest in your testing work, this project will surely give you a good head-start.

# So, what is jest-framework-starter?
This is a Test Automation Framework with a lot of important features already built-in.
## It's preconfigured
It comes with a jest config file that has a lot of settings already configured. This means, you can use it as-is or  customize it further as per your needs. see the central jest config file [here](https://github.com/dineshvelhal/jest-framework-starter/blob/master/jest.config.js).

## Global Setup & Teardown scripts
Under the [testconfig](https://github.com/dineshvelhal/jest-framework-starter/tree/master/testconfig) folder, there are `global_setup` and `global_teardown` scripts. They run only once for entire set of tests that get executed. You may add global-level setup and teardown code here. To begin with, these scripts only print the colorful messages on the console.

## Global Variables
[Jest Config](https://github.com/dineshvelhal/jest-framework-starter/blob/master/jest.config.js) file has a section where global variables can be defined. See a sample Global variables section below.
```javascript
   globals: {
      __APP_NAME__: 'MATH',
   }
```
The variable `__APP_NAME__` can be directly used in the test script as shown below.

```javascript
// __APP_NAME__ value is set in the jest.config.js under the Globals section
let appName = __APP_NAME__;

// parent test suite
describe(`${appName} - Main Suite`, () => { 

...

});
```
One use of global variables is to store application and environment details like application URLs, port numbers, API end points.

## HTML Reports
I have configured 3 different HTML reports in the framework. The configuraton is available in the [Jest Config](https://github.com/dineshvelhal/jest-framework-starter/blob/master/jest.config.js) file under the `reporters` key. Based on your liking you may choose to use any one of them (or all, if you are inclined to do so 😊).
### Reports screenshots
#### JEST-HTML-Reporter
![JEST-HTML-Reporter](JEST-HTML-Reporter.png)
#### JEST-HTML-Reporters
![JEST-HTML-Reporters_1](JEST-HTML-Reporters_1.png)
![JEST-HTML-Reporters_2](JEST-HTML-Reporters_2.png)


## References
- [Jest Home](https://jestjs.io/en/)
- [Jest on Wikipedia](https://en.wikipedia.org/wiki/Jest_(JavaScript_framework))
