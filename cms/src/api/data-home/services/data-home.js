'use strict';

/**
 * data-home service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-home.data-home');
