# SauceDemo Playwright Automation Framework

## Overview

This project is a reusable end-to-end UI automation framework built using **Playwright Test and JavaScript** to test the [SauceDemo](https://www.saucedemo.com/) demo e-commerce application.

The framework follows the **Page Object Model (POM)** design pattern and uses reusable fixtures and separate test data to improve maintainability, readability, and reusability.

It covers login, product listings, shopping cart operations, and checkout workflows.

## Tech Stack

- JavaScript
- Playwright Test (`@playwright/test`)
- Chromium
- Node.js v24.19.0
- npm 12.0.2
- HTML test reports
- Git and GitHub
- GitHub Actions

## Project Structure

```text
QaTask/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── evidence/
│   └── playwright-test-results.png
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
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

**Note:** Add the `evidence/playwright-test-results.png` entry after you create and save the screenshot in that location. The generated test reports, failure artifacts, and `node_modules/` are excluded from version control through `.gitignore`.

## Features

- Reusable Page Object Model implementations.
- Data-driven login tests using separate test data.
- Custom Playwright fixtures for reusable setup.
- Product listing and price verification.
- Add-to-cart and remove-from-cart functionality.
- Checkout completion and missing-information validation.
- Playwright web-first assertions and automatic waiting.
- Screenshots and traces for failed tests.
- HTML test reports.
- Chromium browser execution.
- GitHub Actions workflow configuration.

## Test Scenarios

| Test file | Scenarios |
|---|---|
| `login.spec.js` | Valid login, invalid credentials, incorrect password, empty password, and empty credentials |
| `products.spec.js` | Verify product names and prices |
| `cart.spec.js` | Add a product to the cart and remove a product |
| `checkout.spec.js` | Complete checkout and validate missing customer information |

The suite contains **10 test cases** covering login, product listing, cart, and checkout functionality.

## Parameterized Login Tests

Login scenarios use a dedicated test-data file to separate credentials and expected outcomes from test implementation.

The scenarios cover:

- Valid username and password.
- Invalid username and password.
- Valid username with an invalid password.

## Prerequisites

Install Node.js and npm before running the tests.

Versions used during development:

- Node.js: `v24.19.0`
- npm: `12.0.2`
- Playwright Test: `^1.64.0`

## Installation

Clone the repository:

```bash
git clone https://github.com/UbaisAd/saucedemo-playwright-automation.git
```

Navigate to the project directory:

```bash
cd saucedemo-playwright-automation
```

Install the dependencies:

```bash
npm ci
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

On Linux, if browser system dependencies are missing, run:

```bash
npx playwright install --with-deps chromium
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

Run tests using a single worker for easier-to-read console output:

```bash
npx playwright test --workers=1
```

## HTML Test Report

After test execution, open the HTML report:

```bash
npx playwright show-report
```

The HTML report provides an overview of passed and failed tests and details for individual test cases.

## Proof of Execution

The `evidence/` directory contains screenshots demonstrating successful test execution.

The test suite was executed successfully with **10 passed tests** during development.

Example evidence file:

```text
evidence/playwright-test-results.png
```

The screenshot should show the final Playwright test summary. Add this file to the repository after capturing it.

## Failure Debugging

The Playwright configuration is set to capture screenshots on failure and retain traces for failed tests. Generated artifacts are written to the configured `FailureScreenshots/` output directory.

### Locate Failure Artifacts

In PowerShell, list the generated files:

```powershell
Get-ChildItem .\FailureScreenshots -Recurse -File
```

To locate trace files specifically:

```powershell
Get-ChildItem .\FailureScreenshots -Filter trace.zip -Recurse
```

Use the actual path returned by the command to open a trace:

```bash
npx playwright show-trace "path/to/trace.zip"
```

The Playwright Trace Viewer helps inspect recorded actions, page snapshots, network activity, and errors to investigate failures.

Screenshots provide visual evidence of the page state when a failure occurs, while traces help identify the sequence of actions leading to the failure.

## Framework Design

### Page Object Model

The `pages/` directory contains reusable page classes for login, products, cart, and checkout. Each page class encapsulates its relevant locators and interactions.

### Test Data

The `test-data/` directory separates login credentials, product data, and checkout information from test implementation.

### Custom Fixtures

The `fixtures/testFixtures.js` file provides reusable Playwright fixtures to reduce repeated setup code in test files.

### Configuration

The `playwright.config.js` file defines the test directory, application base URL, timeouts, HTML reporter, Chromium browser configuration, screenshot and trace settings, and test artifact output directory.

## Test Independence and Repeatability

Tests should prepare their own required application state and must not depend on the execution order of other tests. Cart tests should establish their own cart contents, and checkout tests should prepare the required products before starting checkout.

Run the test suite multiple times to check for inconsistent results and identify potential flaky tests.

## Application Under Test

[SauceDemo](https://www.saucedemo.com/)

## Author

**Ubais Ahamed**

## GitHub Repository

[View SauceDemo Playwright Automation Framework](https://github.com/UbaisAd/saucedemo-playwright-automation)