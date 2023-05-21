const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const conn = require("../db/conection");
const admin = require('../middleware/admin');
const upload = require("../middleware/uploadImages")
const util = require("util");
const fs = require("fs");


// get all product
router.get('/',async (req, res) => {
    try {
        const query = util.promisify(conn.query).bind(conn); // for multiple query 
        const {token} = req.headers ;
        const product = await query("select  product.id ,product.name  ,product.discription , product.stock , product.warehouseId ,product.photo from product join warehouse on product.warehouseId = warehouse.id join user on user.id = warehouse.supervisorId  where user.token = ? ", [token]);
        if (!product[0]) {
            res.status(404).json({
                errors : [
                    {
                        msg:"product not found",
                    },
                ],
            })
        }
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({
            err : err,
        }) 
    }
    
}); 

module.exports = router;