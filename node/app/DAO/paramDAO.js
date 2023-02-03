import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    date: {type: String}
}, {
    collection: 'paramsMG'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('paramsMG', paramSchema);

async function query() {
    const result = await ParamModel.find({});
    if(result) {
        return result;
    }
}

async function post(item) {

}

export default {
    query: query,


    model: ParamModel
};
