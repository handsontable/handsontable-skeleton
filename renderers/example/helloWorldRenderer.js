/**
 * Hello world renderer. It renders "Hello World!" in a cell, when it's value equals "hello" and "Handsontable is awesome!",
 * when it's value is "handsontable". It also changes the cell's background color.
 *
 * @param {Object} instance Currently processed Handsontable instance.
 * @param {HTMLElement} td Currently rendered cell TD element.
 * @param {Number} row Row index.
 * @param {Number} col Column index.
 * @param {String|Number} prop Column index or property name.
 * @param {String} value Cell contents.
 * @param {Object} cellProperties Currently processed cell properties object, containing the cell's metadata.
 */
function helloWorldRenderer(instance, td, row, col, prop, value, cellProperties) {
  var changed = false;

  if (value && value.toString().toLowerCase() === 'hello') {
    td.textContent = 'Hello World!';
    changed = true;

  } else if (value && value.toString().toLowerCase() === 'handsontable') {
    td.textContent = 'Handsontable is awesome!';
    changed = true;

  } else {
    td.textContent = value;
  }

  if (changed) {
    td.style.background = '#E5EDEF';
  } else {
    td.style.background = '';
  }
}
