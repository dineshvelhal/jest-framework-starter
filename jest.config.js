module.exports = {
   verbose: true,

   displayName: {
      name: "BASIC TESTS",
      color: "blue"
   },

   maxConcurrency: 1,

   collectCoverage: true,
   coverageDirectory: "./coverage",
   coverageReporters: ["lcov", , "text", "text-summary", "cobertura"],
   //coverageReporters: ["json", "lcov", "clover", "text", "text-summary"],

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
   ]
};