# SauceDemo Playwright Automation Framework

## Overview

This project is a UI automation framework built using **Playwright Test with JavaScript** to test the SauceDemo web application.

It follows the Page Object Model (POM) design pattern to keep page locators, actions, test cases, and test data organized and reusable.

## Tech Stack

- JavaScript
- Playwright Test
- Chromium
- Node.js v24.19.0
- npm 12.0.2
- HTML test reports

## Project Structure

```text
QaTask/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── testFixtures.js
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── test-data/
│   ├── loginData.js
│   ├── productData.js
│   └── checkoutData.js
├── tests/
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── FailureScreenshots/
├── playwright-report/
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*Note: `node_modules/` and generated test artifacts are excluded from the repository.*

## Features

- Page Object Model for reusable page interactions.
- Data-driven login tests using a separate test-data file.
- Custom Playwright fixture for reusable page setup.
- Automated product listing verification.
- Add-to-cart and remove-from-cart testing.
- Checkout success and missing-information validation.
- HTML test reports.
- Screenshots and traces for failed tests.
- Chromium browser execution.
- CI workflow configuration.

## Test Scenarios

| Test file | Scenarios |
|---|---|
| `login.spec.js` | Valid login, invalid credentials, incorrect password, empty password, and empty credentials |
| `products.spec.js` | Verify product names and prices |
| `cart.spec.js` | Add a product to the cart and remove a product |
| `checkout.spec.js` | Complete checkout and validate missing customer information |

The suite contains 10 test cases covering login, product listing, cart, and checkout functionality.

## Prerequisites

Install Node.js and npm before running the tests.

Versions used during development:

- Node.js: `v24.19.0`
- npm: `12.0.2`
- Playwright Test: `^1.64.0`

## Installation

Clone or download this repository and open a terminal in the project directory.

Install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

## Running Tests

Run the complete test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run the suite again to check repeatability:

```bash
npx playwright test
```

## HTML Test Report

After test execution, open the HTML report:

```bash
npx playwright show-report
```

The report provides an overview of test results and details for individual test cases.

## Failure Debugging

The Playwright configuration is set to capture screenshots on failure and retain traces for failed tests. Test artifacts are written to the configured `FailureScreenshots/` output directory.

To list generated artifacts in PowerShell:

```powershell
Get-ChildItem .\FailureScreenshots -Recurse -File
```

To open a trace, replace the example folder with the actual test-specific folder name:

```bash
npx playwright show-trace "FailureScreenshots/<test-specific-folder>/trace.zip"
```

The Trace Viewer can help inspect test actions, page snapshots, and errors to understand why a test failed.

## Framework Design

### Page Object Model

The `pages/` directory contains page classes that encapsulate locators and interactions for login, products, cart, and checkout.

### Test Data

The `test-data/` directory separates login, product, and checkout data from the test logic.

### Custom Fixtures

The `fixtures/testFixtures.js` file defines a reusable login page fixture for tests that need it.

### Configuration

The `playwright.config.js` file defines the test directory, base URL, timeouts, HTML reporter, Chromium project, screenshot and trace settings, and artifact output directory.

## Application Under Test

SauceDemo: https://www.saucedemo.com/

## Author

**Ubais Ahamed**

**GitHub repository:** https://github.com/UbaisAd/saucedemo-playwright-automation
