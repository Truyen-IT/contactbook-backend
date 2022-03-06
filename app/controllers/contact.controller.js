//tao va save 1 contact
const Contact=require("../models/contact.model");
const {BadRequestError}=require("../errors");
const handLePromise=require("../helpers/promise.helper");
const mongoose=require("mongoose");
exports.create = async(req, res, next) => {
    if (!req.body.name) {
        return next(new BadRequestError(400, "Name can not be mpty"));
    }
    //tao 1 ket noi
    const contact= new Contact({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        favorite: req.body.favorite === true,
    });
    const[error,document]=await handLePromise(contact.save());
    if(error) {
        return next(
            new BadRequestError(500,
                 "An error occurred while creating the contact") );
    } return res.send(document);
};

exports.findALL= async(req, res, next) => {
    const condition = {  };
    const { name } = req.query;
    if (name) {
        condition.name = {
            $regex: new RegExp(name),
            $options: "i"
        };
    }
    const[error,document]=await handLePromise(Contact.find(condition));
    if(error) {
        return next(
            new BadRequestError(500,
                 "An error occurred while creating the contact") );
    } return res.send(document);
};

//exports.ƒindOne = async(req, res, next) => {
  // const { id } = req.params;
    //const condition = {_id: id && mongoose.isValidObjectId(id) ? id : nuLL,
        
    //};
    //const[error,document]=await handLePromise(Contact.findOne(condition));
    //if(error) {
      //  return next(new BadRequestError( 500,
        //        `Error retrieving contact with id = ${req.params.id}`
         //   ));}
        //if (!document) {
          //return next(new BadRequestError(404, "Contact not found"));

        
       
    
        
  // }return res.send(document);
//};
exports.update = async(req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new BadRequestError(400,
             "Data to update can not be empty"));
    }
const { id } = req.params;
const condition = {
        _id: id && mongoose.isVaLidObjectId(id)? id : nuLL,

    }; 
    const[error,document]=await handLePromise(Contact.findOneAndUpdate(condition,req.body,{
        new:true,
    }));

   
    
    if(error) {
        return next(new BadRequestError( 500,
                `Error retrieving contact with id = ${req.params.id}`
            ));}
        if (!documents) {
            return next(new BadRequestError(404, "Contact not found"));

        }return res.send({message:"contact was update sucsec",});
};

exports.deLete = async(req, res, next) => {
    const { id } = req.params;
    const condition = {
        _id: id && mongoose.isValidObjectId(id) ? id : nuLL,
    };
    const[error,document]=await handLePromise(Contact.findOneAndDelete(condition));

    if(error) {
        return next(new BadRequestError( 500,
                `Error retrieving contact with id = ${req.params.id}`
            ));}
        if (!document) {
            return next(new BadRequestError(404, "Contact not found"));

        }return res.send({message:"contact will delete sucsec",});
};
exports.deleteALL = async(req, res, next) => {
    const [error,data]=await handLePromise(
        Contact.deleteMany({})
    );


    if(error) {
        return next(new BadRequestError( 500,
                "Error retrieving contact with id"
            ));}
        return res.send({
            message:`${data.deletedCount} con tactt were`,}
        );};
exports.findALLFavorite = async(req, res, next) => {
    const [error, document]=await handLePromise(Contact.find({ favorite: true,}));

    if(error) {
        return next(new BadRequestError( 500,
                "an error occurred while"));
        
        

        }return res.send(document);
};
    