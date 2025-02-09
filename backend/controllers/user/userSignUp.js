import bcrypt from 'bcrypt';
import userModel from '../../models/user.model.js';


const userSignUpController= async (req,res)=>{
    try{
        const { email, password, username} = req.body

        const user = await userModel.findOne({email})

        console.log("user",user)

        if(user){
            throw new Error("Already user exits.");
        }

        if(!email){
           throw new Error("Please provide email");
        }
        if(!password){
            throw new Error("Please provide password");
        }
        if(!username){
            throw new Error("Please provide username");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong");
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload);
        const saveUser = await userData.save();



        res.status(200).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        });
    }catch(err){
        res.status(400).json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

export default userSignUpController;