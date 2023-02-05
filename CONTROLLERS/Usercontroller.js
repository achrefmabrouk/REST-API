
const User= require('../Models/User')




//@POST
const AddUser = async(req,res)=>{
    try {
      const  newUser=await User.create(req.body)
        res.json({newUser,msg:'DONE'})
    } catch (error) {
        console.log(error)
    }
}


//@GET
const GetUser = async(req,res)=>{
    try {
        const userr=  await User.find({})
        res.json(userr)
    } catch (error) {
        console.log(error)
        
    }
}

//@PUT
const UpdateUser=async(req,res)=>{
    try {
        const updatedUser= await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
}

//@DELETE
const DeleteUser = async (req,res)=>{
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        res.json({msg:'DELETED'})
    } catch (error) {
        console.log(error)
    }
}


module.exports={AddUser,GetUser,UpdateUser,DeleteUser }


