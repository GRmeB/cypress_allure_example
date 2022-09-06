#!/usr/bin/env sh
set -x
rm -R -f cypress/reports/ && mkdir cypress/reports && mkdir cypress/reports/cucumber && mkdir cypress/reports/cucumber/cucumber-json
rm -R -f allure-results/ || true
rm -R -f cypress/videos/ || true
rm -R -f cypress/screenshots/ || true
rm -R -f coverage/ || true
rm -R -f .nyc_output/ || true
rm -R -f config/coverage/ || true
rm -R -f config/.nyc_output/ || true
