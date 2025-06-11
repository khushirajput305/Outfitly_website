import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    console.log("➡️ Body Data Received:", req.body);
    console.log("➡️ Files Received:", req.files);

    // Extracting images
    const images = ["image1", "image2", "image3", "image4"]
      .map((key) => req.files[key]?.[0])
      .filter(Boolean);

    if (images.length === 0) {
      return res.status(400).json ({ success: false, message: "No images uploaded" });
    }

    // Upload to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (file) => {
        try {
          const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "image",
          });
          return result.secure_url;
        } catch (uploadErr) {
          console.error("Cloudinary Upload Error:", uploadErr);
          throw new Error("Image upload failed");
        }
      })
    );

    // Construct product data
    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    console.log("🛒 Product Data to Save:", productData);

    // Save to DB
    const product = new productModel(productData);
    try {
      await product.save();
      console.log("✅ Product Saved to DB");
    } catch (saveErr) {
      console.error("❌ MongoDB Save Error:", saveErr);
      return res.status(500).json({ success: false, message: "Failed to save product" });
    }

    res.status(200).json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error("❗ Controller Error:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};


//function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({success:true,products})
  } catch (error) {
    console.log(error)
    res.json({success:false , message : error.message})
  }
};

//function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true , message :"product removed"})
  } catch (error) {
    console.log(error)
    res.json({success:false , message : error.message})
  }
};

//function for singleproduct info
const singleProduct = async (req, res) => {
  try {
    const {id} = req.body
    const product = await productModel.findById(id)
    res.json({success:true , product})
  } catch (error) {
     console.log(error)
    res.json({success:false , message : error.message})
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
