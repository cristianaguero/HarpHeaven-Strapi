'use strict';

/**
 * harp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::harp.harp');
