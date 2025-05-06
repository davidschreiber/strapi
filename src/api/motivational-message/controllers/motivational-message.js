'use strict';

/**
 * motivational-message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::motivational-message.motivational-message', ({ strapi }) => ({
  async random(ctx) {
    const count = await strapi.entityService.count('api::motivational-message.motivational-message');
    const randomIndex = Math.floor(Math.random() * count);
    const randomMessage = await strapi.entityService.findMany('api::motivational-message.motivational-message', {
      start: randomIndex,
      limit: 1,
    });

    return randomMessage[0];
  } 

}));
