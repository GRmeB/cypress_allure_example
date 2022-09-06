const path = require('path');
const fs = require('fs');

const absoluteJsonPathSource = path.join(
    './cypress/reports/cucumber/cucumber-json',
    'cucumber-report.json'
);

const absoluteJsonPathDest = path.join(
    './cypress/reports/cucumber/cucumber-json',
    `cucumber-report-${process.env.SHOP_TYPE}.json`
);

fs.readFile(absoluteJsonPathSource, (err, json) => {
    if (err) {
        console.log(`Error while reading the Cucumber JSON report (${err})`);
    }
    try {
        let updatedJson = JSON.parse(json);
        updatedJson.forEach((feature) => {
            if (!feature.name.includes('(')) {
                feature.name = feature.name + ` (${process.env.SHOP_TYPE})`;
                feature.elements.forEach((step) => {
                    step.name = step.name + ` (${process.env.SHOP_TYPE})`;
                });
            }
        });

        fs.writeFile(
            absoluteJsonPathDest,
            JSON.stringify(updatedJson),
            (err) => {
                if (err) {
                    console.log(
                        `Error while writing the updated Cucumber JSON report (${err})`
                    );
                }
            }
        );

        fs.unlinkSync(absoluteJsonPathSource);
    } catch (err) {
        console.log(`Error while parsing the Cucumber JSON (${err})`);
    }
});
