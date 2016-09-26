# Plans

- [X]  Upgrade to webpack 2.
- [X]  Use treeshaking to make bundle size smaller
- [ ]  Use DLL to cut down the re-building time
- [ ]  Use multi entry chunks to cut down the loading time
- [ ]  Anything else?


## Upgrade to webpack 2

1. Use webpack `v2.1.0-beta.25`
2. `resolve` now cannot accept `''` as an valid value => update resovle
3. `loader` options cannot accept multiple, array-like option(e.g. `PluginA(option1, option2)`), must be an object(e.g. `PluginA({optionA: valueA, optionB: valueB})`.  => update ExtractTextPlugin to version `2.00-beta.4` and also update configuation
