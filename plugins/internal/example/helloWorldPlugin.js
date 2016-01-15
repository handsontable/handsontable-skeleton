import BasePlugin from './../_base';
import {arrayEach} from './../../helpers/array';
import {registerPlugin} from './../../plugins';

/**
 * @plugin HelloWorldPlugin
 *
 * @description
 * Every time you type "Hello" in a cell, HelloWorldPlugins adds "World!" in the next cell.
 * Also, when you type "Handsontable", it adds "is awesome!" in the next cell.
 */
class HelloWorldPlugin extends BasePlugin {
  constructor(hotInstance) {
    super(hotInstance);

    /**
     * Array containing the vocabulary used in the plugin.
     *
     * @type {Array}
     */
    this.vocabularyArray = [];
  }

  /**
   * Check if the plugin is enabled in the settings.
   */
  isEnabled() {
    return !!this.hot.getSettings().helloWorldPlugin;
  }

  /**
   * Enable the plugin.
   */
  enablePlugin() {
    this.vocabularyArray = [
      ['Hello', 'World!'],
      ['Handsontable', 'is awesome!']
    ];

    this.addHook('afterChange', this.onAfterChange.bind(this));

    super.enablePlugin();
  }

  /**
   * Disable the plugin.
   */
  disablePlugin() {
    this.vocabularyArray = [];

    super.disablePlugin();
  }

  /**
   * Update the plugin.
   */
  updatePlugin() {
    this.disablePlugin();
    this.enablePlugin();

    super.updatePlugin();
  }

  /**
   * The afterChange hook callback.
   *
   * @param {Array} changes Array of changes.
   * @param {String} source Describes the source of the change.
   */
  onAfterChange(changes, source) {

    // Check wheter the changes weren't blank or the hook wasn't triggered inside this callback.
    if (!changes || source === 'helloWorldPlugin') {
      return;
    }

    arrayEach(changes, function(change, i) {
      arrayEach(this.vocabularyArray, function(entry, j) {

        if (change[3] && change[3].toString().toLowerCase() === entry[0].toString().toLowerCase()) {
          this.hot.setDataAtCell(change[0], change[1] + 1, entry[1], 'helloWorldPlugin');
        }

      });
    });
  }

  /**
   * Destroy the plugin.
   */
  destroy() {
    super.destroy();
  }
}

export {HelloWorldPlugin};

registerPlugin('helloWorldPlugin', HelloWorldPlugin);
