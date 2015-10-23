# Internal plugin approach

## General guidelines
* The plugin code should be written in [ES6](http://www.ecma-international.org/ecma-262/6.0/). The currently supported ES6 features are (listed in our documentation)[http://docs.handsontable.com/tutorial-seven-principles.html],
* Your class has to extend the [BasePlugin](https://github.com/handsontable/handsontable/blob/master/src/plugins/_base.js) class,
* Your plugin files need to be places under `src/plugins/nameOfYourPlugin/` directory to be properly recognized by our builder,
* You need to make your own Handsontable build to incorporate your changes into the Handsontable source. (Learn how to do it in our documentation)[http://docs.handsontable.com/tutorial-custom-build.html].

## Quick start step by step tutorial
* Copy the [internalPluginSkeleton.js](internalPluginSkeleton.js) file and rename it to describe your plugin. Let's use `myPlugin.js` for this example.
* Change the class name to fit the filename, in our case:
```js
class MyPlugin extends BasePlugin
```
* Implement your functionality using the guidelines from the comments,
* Put your plugin in the `src/plugins/myPlugin` Handsontable's subdirectory,
* Open the terminal, navigate to your Handsontable location,
* [Follow this steps to run your build](http://docs.handsontable.com/tutorial-custom-build.html#page-running) 
* Include the `handsontable.full.js` file on your website, and you're good to go! 