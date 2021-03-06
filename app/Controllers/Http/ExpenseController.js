'use strict'
const Expense = use('App/Models/Expense');
const TagExpense = use('App/Models/TagExpense');

class ExpenseController {
  async create({request, response}){
    let {description, value, period, users_id, tags, type} = request.body.payload;
    const range = period.split("/").reverse().join("");

    value = value.toString().replace(",", ".");

    //Create Expense
    const create = await Expense.create({users_id, description, value, period, range, type});

    //Associate
    await create.tag().attach(tags);

    //Return Json
    return response.status(200).json({
      status: 200,
      response: create
    });
  }

  async read({request, response}){
    const { id, users_id} = request.body.payload;

    let find = await Expense.query()
                              .where({id: id, users_id: users_id})
                              .with('tag')
                              .first();

    //Return Json
    return response.status(200).json({
      status: 200,
      response: find
    });
  }

  async update({request, response, auth}){
    let { id, users_id } = request.body.payload;
    let { description, value, period, tags, type } = request.body.payload;

    value = value.toString().replace(",", ".");

    //Find and Update Expenses and Delete Tags
    await Expense.query().where({id: id, users_id: users_id}).update({description, value, period, type});
    await TagExpense.query().where({expense_id:id}).delete();

    //Find Expense and Attach Tags
    let findExpense = await Expense.query().where({id: id, users_id: users_id}).first();
    findExpense = await findExpense.tag().attach(tags);

    //Update Find
    const find = await Expense.query()
                            .where({id: id, users_id: users_id})
                            .with('tag')
                            .first();

    //Return Json
    return response.status(200).json({
      status: 200,
      response: find
    });
  }

  async delete({request, response, auth}){
    const { id, users_id } = request.params;

    //Update Find
    await Expense.query()
          .where({id: id, users_id: users_id})
          .delete();

    //Return Json
    return response.status(200).json({
      status: 200,
      response: "Deletado com Sucesso"
    });
  }
}

module.exports = ExpenseController
