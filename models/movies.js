// 1st we bring in the mongoose model

const { AggregationCursor } = require('mongodb')
const mongoose = require('mongoose')

// opt. shortcut to mongoose.Schema class
const Schema = mongoose.Schema

// now we'll create a mongoose schema
// this schema will serve as the bluprint for our model
// we define properties(aka path) and assign data types to those properties
const movieSchema = new Schema({
    title; String;
    releaseYear: Number
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
}, {
    timestamp: true
})

// we want to compile our schema into a model
// we also wna export our model
// and we can do that in 1 this
// we call the model method from the mongoose Object 
// the model method takes 2 arguments the 1st is the name we want to use to refer to the model, capitalized
// the secons is the schema you use to create the model
module.exports = mongoose.model('movie', movieSchema)