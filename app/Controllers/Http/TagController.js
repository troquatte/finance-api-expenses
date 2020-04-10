'use strict'
const Tag = use('App/Models/Tag');

class TagController {
  async tags({request, response}){
    const find = await Tag.all();

    //Return Json
    return response.status(200).json({
      status: 200,
      response: find
    });
  }
}

module.exports = TagController
