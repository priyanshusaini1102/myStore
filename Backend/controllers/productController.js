const Product = require("../models/productModel");

//Create Product -- Admin
exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product:product
    });
}

//Get all product
exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        success:true,
        product:products
    });
}

//Get Product Details
exports.getProductDetails = async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:true,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"Product fetch successfully",
        product
    })
}

//Update product - Admin
exports.updateProduct = async(req,res,next)=> {
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        product
    })
}

//Delete a Product 
exports.deleteProduct = async(req,res,next)=> {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Prodcut not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
}

