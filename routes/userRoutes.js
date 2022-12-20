const router =require('express').Router()

const getControllerUsers=require('../controller/users.controller')

router.get('/',getControllerUsers.getCUsers)    

module.exports=router