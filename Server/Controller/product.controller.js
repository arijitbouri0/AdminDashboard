const productService=require("../Service/product.service")


const createProduct=async(req,res)=>{
    try{
        const product=await productService.createProduct(req.body);
        return res.status(201).send(product);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const deletProduct=async(req,res)=>{
    const productId=req.params.id;
    try{
        const product=await productService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const updateProduct=async(req,res)=>{
    const productId=req.params.id;
    try{
        const product=await productService.updateProduct(productId,req.body);
        return res.status(201).send(product);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const findProductById=async(req,res)=>{
    const productId=req.params.id;
    try{
        const product=await productService.findProductById(productId);
        return res.status(201).send(product);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const getAllProducts = async (req, res) => {
    try {
        const { page, category, minPrice, maxPrice, sort, rowsPerPage } = req.query;
        const products = await productService.getAllProducts({ page, category, minPrice, maxPrice, sort ,rowsPerPage});
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};


const createMultipleProducts=async(req,res)=>{
    const productId=req.params.id;
    try{
        const product=await productService.createMultipleProduct(req.body);
        return res.status(201).send({message:"Products Created Succesfully"});
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const getTopProducts = async (req, res) => {
    try {
        const topProducts = await productService.getTopProducts();
        return res.status(200).json(topProducts);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports={
    createProduct,
    createMultipleProducts,
    deletProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    getTopProducts,
}