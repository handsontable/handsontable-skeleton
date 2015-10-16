# Handsontable plugin skeletons
These directory includes two files:
* [internalPluginSkeleton.js](internal/internalPluginSkeleton.js)
* [externalPluginSkeleton.js](external/externalPluginSkeleton.js)

They contain a skeleton classes of a *internal* and *external* Handsontable plugins.

#### Internal Plugins
*Internal* plugin should meet the following guidelines:
* It should be written in ES6 (ES 2015),
* It should extends the BasePlugin class from `/plugins/_base.js`,
* Is needs to be compiled along with the Handsontable source (using hot-builder), by running the `grunt` command. (See more information about creating your own build at http://docs.handsontable.com/tutorial-custom-build.html)

#### External Plugins
*External* plugin is a component you can add to an already built Handsontable instance and is not considered an *internal* part of the build.

* It can be written in ES5,
* It should extend the BasePlugin class from `/plugins/_base.js`,
* It's imported to the website separately from Handsontable, for example:
```html
<script src="./handsontable.full.js"></script>
<script src="./externalPluginSkeleton.js"></script>
```