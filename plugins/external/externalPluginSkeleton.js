function ExternalPluginSkeleton(hotInstance) {

  // Call the BasePlugin constructor.
  Handsontable.plugins.BasePlugin.call(this, hotInstance);

  this._superClass = Handsontable.plugins.BasePlugin;

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

// Inherit the BasePlugin prototype.
ExternalPluginSkeleton.prototype = Object.create(Handsontable.plugins.BasePlugin.prototype, {
  constructor: {
    writable: true,
    configurable: true,
    value: ExternalPluginSkeleton
  },
});

/**
 * Checks if the plugin is enabled in the settings.
 */
ExternalPluginSkeleton.prototype.isEnabled = function() {
  return !!this.hot.getSettings().externalPluginSkeleton;
};

/**
 * The enablePlugin method is triggered on the beforeInit hook. It should contain your initial plugin setup, along with
 * the hook connections.
 * Note, that this method is run only if the statement in the isEnabled method is true.
 */
ExternalPluginSkeleton.prototype.enablePlugin = function() {
  this.yourProperty = 'Your Value';

  // Add all your plugin hooks here. It's a good idea to make use of the arrow functions to keep the context consistent.
  this.addHook('afterChange', this.onAfterChange.bind(this));

  // The super class' method assigns the this.enabled property to true, which can be later used to check if plugin is already enabled.
  this._superClass.prototype.enablePlugin.call(this);
};

/**
 * The disablePlugin method is used to disable the plugin. Reset all of your classes properties to their default values here.
 */
ExternalPluginSkeleton.prototype.disablePlugin = function() {
  this.yourProperty = '';
  this.anotherProperty = [];

  // The super class' method takes care of clearing the hook connections and assigning the 'false' value to the 'this.enabled' property.
  this._superClass.prototype.disablePlugin.call(this);
};

/**
 * The updatePlugin method is called on the afterUpdateSettings hook (unless the updateSettings method turned the plugin off).
 * It should contain all the stuff your plugin needs to do to work properly after the Handsontable instance settings were modified.
 */
ExternalPluginSkeleton.prototype.updatePlugin = function() {

  // The updatePlugin method needs to contain all the code needed to properly re-enable the plugin. In most cases simply disabling and enabling the plugin should do the trick.
  this.disablePlugin();
  this.enablePlugin();

  this._superClass.prototype.updatePlugin.call(this);
};

/**
 * The afterChange hook callback.
 *
 * @param {Array} changes Array of changes.
 * @param {String} source Describes the source of the change.
 */
ExternalPluginSkeleton.prototype.onAfterChange = function(changes, source) {
  // afterChange callback goes here.
};

/**
 * The destroy method should de-assign all of your properties.
 */
ExternalPluginSkeleton.prototype.destroy = function() {
  // The super method takes care of de-assigning the event callbacks, plugin hooks and clearing all the plugin properties.
  this._superClass.prototype.destroy.call(this);
};

// You need to register your plugin in order to use it within Handsontable.
Handsontable.plugins.registerPlugin('externalPluginSkeleton', ExternalPluginSkeleton);