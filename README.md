# Plans

- [X]  Upgrade to webpack 2.
- [X]  Use treeshaking to make bundle size smaller
- [ ]  Use DLL to cut down the re-building time
- [ ]  Use multi entry chunks to cut down the loading time
- [ ]  Anything else?


## HOW-TO Upgrade to webpack 2

1. Use webpack `v2.1.0-beta.25`
2. `resolve` now cannot accept `''` as an valid value => update resolve
3. `loader` options cannot accept multiple, array-like option(e.g. `PluginA(option1, option2)`), must be an object(e.g. `PluginA({optionA: valueA, optionB: valueB})`.  => update ExtractTextPlugin to version `2.00-beta.4` and also update configuation


## HOW-TO Use treeshaking

> Treeshaking only remove the unused code in minification phase

The example shows that I have `WidgetOne` and `WidgetTwo` in `WidgetModule`, but `WidgetTwo` is not used. So if you run `npm run build`, the generated `app.[hash].js` will not include anything related to `WidgetTwo`.

However the `vendor.js` is still very large due to the reason I've include everything from the libs. I will figure out how to reduce this in a later time

 -  Cannot make it work with `DedupePlugin`. So remove it.
