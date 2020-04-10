'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
  static get visible() {
    return ["id", "tag", "categoria"];
  }


}

module.exports = Tag
