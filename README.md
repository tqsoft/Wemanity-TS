# Gilded Rose - Shai Dayan Exam

This is the Gilded Rose kata in TypeScript.
Writing tests is a crucial part of software development, especially when refactoring code. Let's go through the steps to write tests for your TypeScript project, specifically for the Gilded Rose Refactoring Kata.




## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python




## shai's notes and changes 

i noticed that `line 16` in `gilded-rose.ts` is not covered by tests. I want to review this to see if an additional test case is needed. - done can be tested by running 

```sh
npm run test:jest
```