// You need to import the BasePlugin class in order to inherit from it.
import BasePlugin from './../../_base';
import {registerPlugin} from './../../../plugins';

/**
 * @plugin InternalPluginSkeleton
 *
 * @description
 * Blank plugin template. It needs to inherit from the BasePlugin class.
 */
class InternalPluginSkeleton extends BasePlugin {

  // The argument passed to the constructor is the currently processed Handsontable instance object.
  constructor(hotInstance) {
    super(hotInstance);

    // Initialize all your public properties in the class' constructor.
    /**
     * yourProperty description.
     *
     * @type {String}
     */
    this.yourProperty = '';
    /**
     * anotherProperty description.
     * @type {Array}
     */
    this.anotherProperty = [];
  }

  /**
   * Checks if the plugin is enabled in the settings.
   */
  isEnabled() {
    return !!this.hot.getSettings().internalPluginSkeleton;
  }

  /**
   * The enablePlugin method is triggered on the beforeInit hook. It should contain your initial plugin setup, along with
   * the hook connections.
   * Note, that this method is run only if the statement in the isEnabled method is true.
   */
  enablePlugin() {
    this.yourProperty = 'Your Value';

    // Add all your plugin hooks here. It's a good idea to make use of the arrow functions to keep the context consistent.
    this.addHook('afterChange', (changes, source) => this.onAfterChange(changes, source));

    // The super method assigns the this.enabled property to true, which can be later used to check if plugin is already enabled.
    super.enablePlugin();
  }

  /**
   * The disablePlugin method is used to disable the plugin. Reset all of your classes properties to their default values here.
   */
  disablePlugin() {
    this.yourProperty = '';
    this.anotherProperty = [];

    // The super method takes care of clearing the hook connections and assigning the 'false' value to the 'this.enabled' property.
    super.disablePlugin();
  }

  /**
   * The updatePlugin method is called on the afterUpdateSettings hook (unless the updateSettings method turned the plugin off).
   * It should contain all the stuff your plugin needs to do to work properly after the Handsontable instance settings were modified.
   */
  updatePlugin() {

    // The updatePlugin method needs to contain all the code needed to properly re-enable the plugin. In most cases simply disabling and enabling the plugin should do the trick.
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
    // afterChange callback goes here.
  }

  /**
   * The destroy method should de-assign all of your properties.
   */
  destroy() {
    // The super method takes care of de-assigning the event callbacks, plugin hooks and clearing all the plugin properties.
    super.destroy();
  }
}

export {InternalPluginSkeleton};

// You need to register your plugin in order to use it within Handsontable.
registerPlugin('internalPluginSkeleton', InternalPluginSkeleton);
