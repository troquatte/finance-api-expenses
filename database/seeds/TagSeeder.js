'use strict'

/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Tags = use('App/Models/Tag');


class TagSeeder {
  async run () {

    const create = await Tags.createMany([
      { tag: "Gastos Fixo" , categoria: "despesa"},
      { tag: "Alimentação" , categoria: "despesa" },
      { tag: "Saúde" , categoria: "despesa" },
      { tag: "Educação" , categoria: "despesa" },
      { tag: "Transporte" , categoria: "despesa" },
      { tag: "Outros" , categoria: "despesa" },
      { tag: "Salário" , categoria: "receita"},
      { tag: "Emprestimo" , categoria: "receita"},
      { tag: "Investimento" , categoria: "receita"},
      { tag: "Outras Receitas" , categoria: "receita"},
    ]);

    console.log(create)
  }
}

module.exports = TagSeeder
