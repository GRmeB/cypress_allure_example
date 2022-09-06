# Cypress Allure Example Project

## Prepare

```
pnpm install
```

## Exexute tests

### Execute Mocha test

```
pnpm run cy:run --env USE_MOCHA=true,allure=true --config-file config/cypress_prod_github_com.ts
```

### Execute Cucumber test

```
pnpm run cy:run --env USE_MOCHA=false,allure=true --config-file config/cypress_prod_github_com.ts
```

## Generate Allure reports

```
pnpm run allure:report
```

The created screenshots on failed tests are located under `/cypress/screenshots`.

Reports are located under `/cypress/reports/allure`

## Cleanup

```
pnpm run clean
```
