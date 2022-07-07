'use strict';

/**
 * multiple-file service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multiple-file.multiple-file');
