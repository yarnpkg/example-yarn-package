/*
 * Math functions on shapes
 */

'use strict';

// For package dependency demonstration purposes only
var multiply = require('lodash/multiply');

module.exports = {
  area_rectangle: function(width, height) {
    return multiply(height, width);
  }
}
