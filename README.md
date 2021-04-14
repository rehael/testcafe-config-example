# TestCafé – Configuration Example

You want to have configurable test scripts,
but don't know how to do it with TestCafé?

This small repository provides one of many possible approaches to that.

This repository doesn't deal with [TestCafé
Configuration](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html),
but is focused on making the tests configurable.

Such configuration might be needed when you have a suite of tests you would
like to use in different environments, like development, staging, UAT or
production.

## Usage

1. Define environment variable you will use to drive the choice of
   configuration with. By default it's `env`, but you can set your
   own in [`config.ts`](./config.ts).

2. Define your configuration in [`environments.json`](./environments.json) (or any other
   file – the file name is in [`config.ts`](./config.ts)).

3. In your test suite, import `getConfig` from `config`, call it,
   and you have access to your data in your tests now.

You can also use `--env=xxx` parameter - but it will work only when you state browsers
and scripts-src in the command line too, before using that unknown by TestCafé parameter.

Setting your CI/CD pipeline variables is not discussed here – roll it on your own.

## Example

```
> set ENV=dev
> yarn test
yarn run v1.22.5
$ testcafe
 Running tests in:
 - Chrome 89.0.4389.128 / Windows 10

 Example
Checking http://example.net/
 √ Should greet user with Example


 1 passed (1s)
Done in 8.29s.
```

## License

[Unlicense](LICENSE) – just take it and do whatever you need.
