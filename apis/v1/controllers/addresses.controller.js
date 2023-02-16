// ---------------
// Based Imports
// ---------------
const Address = require('../../../schemas/address.schema');
const { JSONResponse } = require('../../../utilities/response.utility');

const User = require('../../../schemas/user.schema');

const mongoose = require('mongoose');
// ---------------



// get all Address
exports.getAllAddress = async (req, res, next) => {
    try {
        const addresses = await Address.find();
        
        JSONResponse.success(res, 'Success.', addresses, 200);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}


// get address by id
exports.getAddressById = async (req, res, next) => {
    try {
        const address = await Address.findById(req.params.id);

        if(!address) throw new Error('Address not found');

        JSONResponse.success(res, 'Success.', address, 200);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}



// create address
exports.createAddress = async (req, res, next) => {
    try {
        const address = await Address.create(req.body)
        
        if(!address) throw new Error('Address not created');

        // check if the user_id is of the ObjectID type
         if(!mongoose.Types.ObjectId.isValid(user_id)) {
            throw new Error('User id is not valid');
         }
         

        JSONResponse.success(res, 'Success.', address, 201);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}




// update address
exports.updateAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true})

        if(!address) throw new Error('Address not updated');
        
        JSONResponse.success(res, 'Success.', address, 200);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}



// soft delete address
exports.softDeleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, {
            status: 'INACTIVE',
            deletedAt: Date.now(),
        })
        

        if(!address) throw new Error('Address not deleted');

        JSONResponse.success(res, 'Success.', address, 200);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}





// destroy address
exports.destroyAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);

        if(!address) throw new Error('Address not destroyed');

        JSONResponse.success(res, 'Success.', address, 200);
    } catch (error) {
        JSONResponse.error(res, 'Error.', error, 404);
    }
}








// delete address
// exports.deleteAddress = async (req, res) => {
//     let address;
//     try {
//         if (req.query.force){
//             address = await Address.findByIdAndDelete(req.params.id);
//         } else {
//             address = await Address.findByIdAndUpdate(req.params.id, {isDeleted : true});
//         }

//         if(!address) throw new Error('Address not deleted');

//         JSONResponse.success(res, 'Success.', address, 200);
//     } catch (error) {
//         JSONResponse.error(res, 'Error.', error, 404);
//     }
// }














