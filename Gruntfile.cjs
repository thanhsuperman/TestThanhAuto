module.exports = async function (grunt) {
    "use strict";

    grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");

    var obfuscationOptions = {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        debugProtectionInterval: 0,
        disableConsoleOutput: true,
        identifierNamesGenerator: 'hexadecimal',
        log: true,
        numbersToExpressions: false,
        renameGlobals: false,
        selfDefending: true,
        simplify: true,
        splitStrings: false,
        stringArray: true,
        stringArrayCallsTransform: false,
        stringArrayEncoding: [],
        stringArrayIndexShift: true,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayWrappersCount: 1,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersParametersMaxCount: 2,
        stringArrayWrappersType: 'variable',
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false
    }
    var gruntConfig = grunt.config.data;

    //remove generation of dbg files
    // delete gruntConfig.openui5_preload.preloadDbg;
    // gruntConfig.copy.copyToDbg.files[0].src = [];
    // gruntConfig.copy.copyDbgToDist.files[0].src = [];
    // gruntConfig.copy.copyProjectFilesToDist.files[0].src = [];
    // gruntConfig.copy.copyToTmp.files[0].src = [];
    // delete gruntConfig.dir.tmpDirDbg;


    var gruntNewConfigs = {
        javascript_obfuscator: {
            options: obfuscationOptions,
            obfuscateAll: {
                src: ["dist/ext/controller/*.js", "!webapp/ext/controller/*.js", "!Gruntfile.js", '!**/node_modules/**/*.js'
                    ,'dist/Component-preload.js','dist/Component-preload.js.map'
                    // , "!webapp/**/*.js", "!Gruntfile.js", '!**/node_modules/**/*.js'
                ]
            }
        },
        removeFileNotNeed: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        }
    };


    var combinedConfigs = Object.assign({}, gruntConfig, gruntNewConfigs);

    grunt.initConfig(combinedConfigs);

    grunt.loadNpmTasks('grunt-javascript-obfuscator');
    grunt.loadNpmTasks('grunt-available-tasks');

    // var tasks = ["clean", "lint", "build", "javascript_obfuscator"];
    var tasks = ["lint", "build", "javascript_obfuscator", "removeFileNotNeed"];

    // grunt.registerTask("default", tasks);
    grunt.registerTask("default", tasks);

    grunt.registerTask('removeFileNotNeed', 'My "default" task description.', function () {
        const fs = require('fs');

        // const filePath = ['dist/Component-preload.js', 'dist/Component-preload.js.map']; // Replace with the actual path to your file
        // Remove the file
        // filePath.forEach(filePath => {
        //     fs.unlink(filePath, function (err) {
        //         if (err) { return console.log(err) }
        //     });
        // })
    });



};