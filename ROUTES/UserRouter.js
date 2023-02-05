
const express=require('express')
const router = express.Router()

const {AddUser,GetUser,UpdateUser,DeleteUser } =require('../CONTROLLERS/Usercontroller')


//@POST
router.post('/',AddUser)

//@GET
router.get('/',GetUser)

//@PUT
router.put('/:id',UpdateUser)

//@DELETE
router.delete('/:id',DeleteUser )





module.exports = router
