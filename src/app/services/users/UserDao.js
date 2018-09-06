const config = require('config')

const log = require('../../util/logger')
const User = require('./User')
const BaseDao = require('../common/BaseDao')

class UserDao extends BaseDao {
  entityClass() {
    return User
  }
}

module.exports = UserDao