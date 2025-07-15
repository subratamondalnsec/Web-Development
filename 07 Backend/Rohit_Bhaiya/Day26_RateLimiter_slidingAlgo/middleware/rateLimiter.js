const redisClient= require("../config/redis")


const rateLimiter= async (req,res,next)=>{
        // Kya ye Ip exist karta hai

        // nahi karta
        // set method redisClient.set(ip,`1:${Date.now()/1000}`)
        // await redisClient.expire(3600);


        // Exist karta hga:
        // get

        const windowsize=3600;
        const MaxRequest=60;

    try{ 
        //fixed Window Algo
       /* const ip = req.ip;
        console.log(ip);

        const Number_of_request= await redisClient.incr(ip);
        console.log(Number_of_request);

        if(Number_of_request==1){
            await redisClient.expire(3600);
        }

        if(Number_of_request>60){
            throw new Error("Use Limit Exceeded")
        }
        */

        //sliding Algorithm 

        const key = `IP${req.ip}`;
        const current_time=Date.now()/1000 //second
        const window_Time=current_time-windowsize;

        await redisClient.zRemRangeByScore(key,0,window_Time);

        const Number_of_request=await redisClient.zCard(key);//Total number koto gulo ache amader same key return kore

        if(Number_of_request>=MaxRequest){
            throw new Error("User Number Limit Exceeded");
        }

        console.log(Number_of_request);
        await redisClient.zAdd(key,[{score:current_time, value:`${current_time}:${Math.random()}`}]); // Reequest is Add

        // key TTL hai usko increase karna

        await redisClient.expire(key,windowsize);


        next();
    }
    catch(err){
        res.send("Error: "+err);
    }

}

module.exports = rateLimiter;