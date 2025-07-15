const redisClient= require("../config/redis")


const rateLimiter= async (req,res,next)=>{

    try{
        const ip = req.ip;
        console.log(ip);

        // Kya ye Ip exist karta hai

        // nahi karta
        // set method redisClient.set(ip,`1:${Date.now()/1000}`)
        // await redisClient.expire(3600);


        // Exist karta hga:
        // get

        const Number_of_request= await redisClient.incr(ip);
        console.log(Number_of_request);

        if(Number_of_request==1){
            await redisClient.expire(3600);
        }

        if(Number_of_request>60){
            throw new Error("Use Limit Exceeded")
        }

        next();
    }
    catch(err){
        res.send("Error: "+err);
    }

}

module.exports = rateLimiter;