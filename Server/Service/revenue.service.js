const Order=require("../Models/order.model");

const getRevenueFromOrders = async ({ startDate, endDate, filterOption }) => {
    try {
        startDate = new Date(startDate);
        endDate = new Date(endDate);


        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error("Invalid date format");
        }

        let query = {};
        if (filterOption === "year") {
            const startYear = new Date(startDate.getFullYear(), 0, 1);
            const endYear = new Date(startDate.getFullYear(), 11, 31, 23, 59, 59);
            query = { createdAt: { $gte: startYear, $lte: endYear } };
        } else if (filterOption === "month") {
            const startMonth = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
            const endMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0, 23, 59, 59);
            query = { createdAt: { $gte: startMonth, $lte: endMonth } };
        } else if (filterOption === "week") {
            const startOfWeek = new Date(startDate.setDate(startDate.getDate() - startDate.getDay()));
            const endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(endOfWeek.getDate() + 6);
            endOfWeek.setHours(23, 59, 59);
            query = { createdAt: { $gte: startOfWeek, $lte: endOfWeek } };
        } else if (filterOption === "day") {
            query = {
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate),
                },
            };
        }
        const orders = await Order.find(query)
            .populate("user")
            .populate({ path: "orderItems", populate: { path: "product" } })
            .lean();
            
        let totalRevenue = 0;
        orders.forEach(order => {
            totalRevenue+=order.totalPrice;
        });

        return {
            success: true,
            totalRevenue: totalRevenue.toFixed(2),
            ordersCount: orders.length,
        };
    } catch (error) {
        console.error("Error calculating revenue:", error);
        return { success: false, message: "Error calculating revenue" };
    }
};



module.exports={
    getRevenueFromOrders,
}