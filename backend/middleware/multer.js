// import multer from "multer";

// const storage = multer.diskStorage({
//     filename:function(req , file , callback){
//         callback(null , file.originalname)
//     }
// })

// const upload = multer({storage})

// export default upload


import multer from "multer";
import path from "path";
import fs from "fs";

// Make sure the upload folder exists
const uploadPath = "uploads";
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath); // Save files to "uploads" folder
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

export default upload;


