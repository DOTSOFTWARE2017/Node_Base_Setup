const allUsers=require('../model/user.model')

exports.getCUsers=(err,response)=>{
    allUsers.getUsers((res)=>{
        if(res)
        {
            response.status(200).send({status:true,message:"User data fecthed sucessfully",data:res})
        }
        if(err)
        {
            response.status(500).send({status:false,message:"error",data:err})
        }
        
    })
}   