module.exports = {
   verbose: true,

   displayName: {
      name: "BASIC TESTS",
      color: "blue" // This will be used in console reports
   },

   maxConcurrency: 5,

   // Test coverage settings
   collectCoverage: true,
   coverageDirectory: "./coverage",
   coverageReporters: ["lcov", , "text", "text-summary", "cobertura"],
   //coverageReporters: ["json", "lcov", "clover", "text", "text-summary"],

   // 4 different types of reporters are added (you may choose to keep the ones you like)
   reporters: [
      "default",
      [
         "./node_modules/jest-html-reporter",
         {
            pageTitle: "JEST-HTML-Reporter",
            outputPath: "./reports/jest-html-reporter/report.html",
            includeFailureMsg: true,
            includeConsoleLog: true
         }
      ],
      [
         "./node_modules/jest-html-reporters",
         {
            pageTitle: "JEST-HTML-Reporters",
            publicPath: "./reports/jest-html-reporters",
            filename: "report.html",
            expand: "true"
         }
      ],
      [
         "./node_modules/jest-stare",
         {
            resultDir: "./reports/jest-stare",
            reportTitle: "JEST-STARE-Report",
            coverageLink: "../../coverage/lcov-report/index.html",
            reportHeadline: "JEST-STARE-Report",
            reportSummary: true
         }
      ],
      [
         "./node_modules/jest-junit",
         {
            suiteName: "API Tests",
            outputDirectory: "./reports/jest-junit",
            outputName: "junit.xml",
            ancestorSeparator: " › ",
            usePathForSuiteName: true
         }
      ]
   ],

   // Global Setup and Teardown scripts (Run only once across all tests)
   globalSetup: './testconfig/global_setup.js',
   globalTeardown: './testconfig/global_teardown.js',

   // Globals
   // Global variables that can be set here (and can be accessed in all test scripts directly with variable names)
   globals: {
      __APP_NAME__: 'MATH',
   },
};