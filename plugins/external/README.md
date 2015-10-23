## External plugin approach
* The plugin code doesn't need to be written in [ES6](http://www.ecma-international.org/ecma-262/6.0/),
* Your class has to extend the [BasePlugin](https://github.com/handsontable/handsontable/blob/master/src/plugins/_base.js) class,
* Your plugin files need to be included to your site, see the following example:
```html
<script src="./handsontable.full.js"></script>
<script src="./yourPluginFile.js"></script>
```

## Quick start step by step tutorial
* Copy the [externalPluginSkeleton.js](externalPluginSkeleton.js) file and rename it to describe your plugin. Let's use `myPlugin.js` for this example.
* Change the class name to fit the filename, in our case:
```js
function MyPlugin(hotInstance) {
```
and in the method definitions:
```js
// for example
MyPlugin.prototype.isEnabled = function() {
}
```
* Implement your functionality using the guidelines from the comments,
* Include the `handsontable.full.js` and `myPlugin.js` files on your website, and you're good to go! 
```html
<script src="./handsontable.full.js"></script>
<script src="./myPlugin.js"></script>
```