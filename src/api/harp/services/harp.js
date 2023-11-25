'use strict';

/**
 * harp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::harp.harp');
