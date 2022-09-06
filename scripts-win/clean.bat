@ECHO OFF
rmdir /S /Q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\cucumber && mkdir cypress\\reports\\cucumber\\cucumber-json
rmdir /S /Q allure-results || true
rmdir /S /Q cypress\\videos || true
rmdir /S /Q cypress\\screenshots || true
rmdir /S /Q coverage || true
rmdir /S /Q .nyc_output || true
rmdir /S /Q config/coverage || true
rmdir /S /Q config/.nyc_output || true
