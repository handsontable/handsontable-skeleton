/**
 * Sample renderer skeleton.
 *
 * @param {Object} instance Currently processed Handsontable instance.
 * @param {HTMLElement} td Currently rendered cell TD element.
 * @param {Number} row Row index.
 * @param {Number} col Column index.
 * @param {String|Number} prop Column index or property name.
 * @param {String} value Cell contents.
 * @param {Object} cellProperties Currently processed cell properties object, containing the cell's metadata.
 */
function rendererSkeleton(instance, td, row, col, prop, value, cellProperties) {

  // Sample operation on the cell.
  if (row === 0 && col === 0) {
    td.style.fontWeight = 'bold';
  }
}