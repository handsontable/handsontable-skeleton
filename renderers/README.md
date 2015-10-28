# Renderers

## What is a renderer?
Renderer is basically a function run every time a cell is being rendered.

## Sample renderer step by step tutorial
* Write a function based on the guidelines provided in the [rendererSkeleton.js](rendererSkeleton.js) file,
* Define the renderer in your Handsontable configuration:

To apply it to every cell in Handsontable:
```js
var hot = new Handsontable(container1, {
    data: data,
    renderer: yourRendererFunction
  });
```

To apply it only to certain columns:
```js
// This setup would apply your custom renderer only to the second table column.

var hot = new Handsontable(container1, {
    data: data,
    columns: [
      {},
      {renderer: yourRendererFunction}
    ]
  });
```

To apply it to certain cells:
```js
// This setup would apply your custom renderer only to the cell at coordinates (1,1).

var hot = new Handsontable(container1, {
    data: data,
    cells: function(row, col, prop) {
      if (row === 1 && col === 1) {
        var cellProperties = {};
        cellProperties.renderer = yourRendererFunction;
        
        return cellProperties;
      }
    }
  });
```

To read more about custom renderers, see our documentation: http://docs.handsontable.com/demo-custom-renderers.html.
