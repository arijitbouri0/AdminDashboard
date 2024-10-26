const RevenueService=require("../Service/revenue.service")


const getRevenue=async(req,res)=>{
    try{
        const revenue=await RevenueService.getRevenueFromOrders(req.body);
        return res.status(201).send(revenue);
    } catch(error){
        return res.status(500).send({error:error.message});
    }

}

module.exports={
    getRevenue,
}