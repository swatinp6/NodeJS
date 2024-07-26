import mongoose  from "mongoose";

let ProductSchema=mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    qty:{type:Number,require:true},
    info:{type:String,require:true}
});

let Product=mongoose.model("product",ProductSchema)

export default Product;