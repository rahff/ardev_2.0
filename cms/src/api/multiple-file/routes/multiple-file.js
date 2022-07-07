'use strict';

/**
 * multiple-file router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::multiple-file.multiple-file');
