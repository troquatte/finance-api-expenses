'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/create', "ExpenseController.create")
Route.get('/read', "ExpenseController.read")
Route.put('/update', "ExpenseController.update")
Route.delete('/delete/id/:id/user-id/:users_id', "ExpenseController.delete")

Route.get('/tag', "TagController.tags")

