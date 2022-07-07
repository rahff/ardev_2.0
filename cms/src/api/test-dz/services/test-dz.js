'use strict';

/**
 * test-dz service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-dz.test-dz');
