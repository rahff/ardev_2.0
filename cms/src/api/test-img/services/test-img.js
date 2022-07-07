'use strict';

/**
 * test-img service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-img.test-img');
