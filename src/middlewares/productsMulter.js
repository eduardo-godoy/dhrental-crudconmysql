// MULTER DE PRODUCTOS

const path = require ('path');
const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        let folder = path.join(__dirname, '../../public/images/products');
        callback(null,folder);

    },
    filename: (req, file, callback) => {

        let imageName = 'product-' + Date.now() + path.extname(file.originalname);
        callback(null,imageName);

    }

});

let upload = multer ({ storage : storage });

module.exports = upload;


// fileFilter(req,file,cb){
//     if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif'){
//         cb(null,true)
//     }else{
//         cb(null,false)
//         return cb(new Error("Solo se admite archivos .jpg, jpeg, .png, gif"));
//     }
// } 