# webd17

# Task 17

## Overview

This task demonstrates how to use JavaScript `Promise` objects for asynchronous operations and error handling.

The example implements a `division(a, b)` function that:

- returns a Promise
- resolves with the division result after a short delay
- rejects if the denominator is `0`

The script then runs several division operations and handles results using `.then()`, `.catch()`, and `.finally()`.

## Files

- `index.html` - loads `script.js` in the browser
- `script.js` - contains the promise-based division logic and example function calls

## How to run

1. Open `index.html` in a web browser.
2. Open the browser developer console to view the output.

## What you should see

- successful division results for valid divisions
- an error message when dividing by zero
- a final completion message for every operation

## Notes

This task is useful for learning:

- creating and returning Promises
- using `resolve` and `reject`
- chaining `.then()`, `.catch()`, and `.finally()`
- handling asynchronous success and failure cases
