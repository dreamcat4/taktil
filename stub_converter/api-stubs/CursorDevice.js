/* API Version - 1.3.1 */

/**
 * A special kind of selection cursor used for devices.
 *
 * @since Bitwig Studio 1.1
 */
function CursorDevice() {}

CursorDevice.prototype = new Cursor();
CursorDevice.prototype.constructor = CursorDevice;

/**
 * Returns the channel that this cursor device was created on.
 * Currently this will always be a track or cursor track instance.
 *
 * @return {Channel} the track or cursor track object that was used for creation of this cursor device.
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.getChannel = function() {};

/**
 * Selects the parent device if there is any.
 *
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectParent = function() {};

/**
 * Moves this cursor to the given device.
 *
 * @param {Device} device the device that this cursor should point to
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectDevice = function(device) {};

/**
 * Selects the first device in the given channel.
 *
 * @param {Channel} channel the channel in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectFirstInChannel = function(channel) {};

/**
 * Selects the last device in the given channel.
 *
 * @param {Channel} channel the channel in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectLastInChannel = function(channel) {};

/**
 * Selects the first device in the nested FX slot with the given name.
 *
 * @param {string} chain the name of the FX slot in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectFirstInSlot = function(chain) {};

/**
 * Selects the last device in the nested FX slot with the given name.
 *
 * @param {string} chain the name of the FX slot in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectLastInSlot = function(chain) {};

/**
 * Selects the first device in the drum pad associated with the given key.
 *
 * @param {int} key the key associated with the drum pad in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectFirstInKeyPad = function(key) {};

/**
 * Selects the last device in the drum pad associated with the given key.
 *
 * @param {int} key the key associated with the drum pad in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectLastInKeyPad = function(key) {};

/**
 * Selects the first device in the nested layer with the given index.
 *
 * @param {int} index the index of the nested layer in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectFirstInLayer = function(index) {};

/**
 * Selects the last device in the nested layer with the given index.
 *
 * @param {int} index the index of the nested layer in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectLastInLayer = function(index) {};

/**
 * Selects the first device in the nested layer with the given name.
 *
 * @param {string} name the name of the nested layer in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectFirstInLayer = function(name) {};

/**
 * Selects the last device in the nested layer with the given name.
 *
 * @param {string} name the name of the nested layer in which the device should be selected
 * @since Bitwig Studio 1.1
 */
CursorDevice.prototype.selectLastInLayer = function(name) {};
