# Plugins

## What is a plugin?
Basically, a plugin is a class which extends the original functionality of Handsontable.

## Internal or external?
If you wish to make your own Handsontable build, it's a good idea to choose the internal approach. 
This way you'll simply need to include a customized `handsontable.js` (or `handsontable.full.js`, [see the difference](https://github.com/handsontable/handsontable/tree/master/dist)) to your website.

However, if you want to add a new functionality to the Handsontable without making your own build, and you don't mind linking more files to your site, you can go with the external approach.

* [Internal plugin details](internal)
* [External plugin details](external)

Regardless of the chosen approach, you can access any plugin's instance by calling:
```js
handsontableInstance.getPlugin('nameOfThePlugin');
```