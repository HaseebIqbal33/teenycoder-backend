'use strict';

/**
 * course-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-info.course-info');
