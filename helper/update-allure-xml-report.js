const fs = require('fs');
const xml2js = require('xml2js');
var glob = require('glob');

var parserJs = new xml2js.Parser();

glob('allure-results/*.xml', function (err, files) {
    if (err) {
        console.log(
            `Error while reading the Allure result XML report (${err})`
        );
    }

    files.forEach((filename) => {
        fs.readFile(filename, function (err, data) {
            if (err) {
                console.log(
                    `Error while reading the Allure result XML report (${err})`
                );
            }
            try {
                parserJs.parseString(data, function (err, result) {
                    if (!result['ns2:test-suite'].name[0].includes('(')) {
                        result['ns2:test-suite'].name =
                            result['ns2:test-suite'].name +
                            ` (${process.env.SHOP_TYPE})`;

                        result['ns2:test-suite'].title =
                            result['ns2:test-suite'].title +
                            ` (${process.env.SHOP_TYPE})`;
                    }

                    result['ns2:test-suite']['test-cases'][0][
                        'test-case'
                    ].forEach((testcase, index) => {
                        if (testcase['$'].status === 'undefined') {
                            delete result['ns2:test-suite']['test-cases'][0][
                                'test-case'
                            ][index];
                        }
                    });

                    var builder = new xml2js.Builder();
                    var newXml = builder.buildObject(result);

                    fs.writeFile(filename, newXml, (err) => {
                        if (err) {
                            console.log(
                                `Error while writing the updated Allure result XML report (${err})`
                            );
                        }
                    });

                    //fs.unlinkSync(filename);
                });
            } catch (err) {
                console.log(
                    `Error while parsing the Allure result XML report (${err})`
                );
            }
        });
    });
});
