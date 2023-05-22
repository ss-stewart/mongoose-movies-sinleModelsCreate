///////////////////////////////
// Import Dependencies
///////////////////////////////
require('dotenv').config()
const mongoose = require('../config/database')
const Movie = require('./movie')
mongoose.connect(process.env.DATABASE_URL)
///////////////////////////////
// Seed Script Code
///////////////////////////////
// save the connection in a variable
const db = mongoose.connection
// console.log('db in seed file', db)

db.on('open', () => {
    // start with an array of movies
    const startMovies = [
        {
            title: 'Star Wars - A New Hope', 
            releaseYear: 1977, 
            mpaaRating: 'PG', 
            nowShowing: true, 
            cast: ['Mark Hamill', 'Carrie Fischer', 'Harrison Ford']
        },
        {
            title: 'Jurassic Park', 
            releaseYear: 1993, 
            mpaaRating: 'PG', 
            nowShowing: true, 
            cast: ['Jeff Goldblum', 'Laura Dern', 'The kid that played Timmy']
        },
    ]
    // when we seed data, we want to delete everything in the database in that collection
    // this avoids duplicates
    Movie.deleteMany({})
        .then(deletedMovies => {
            console.log('this is what deleteMany returns', deletedMovies)
            // after that we run a create to insert those documents into the db
            Movie.create(startMovies)
                .then(data => {
                    console.log('this is what was created', data)
                    db.close()
                })
                .catch(err => {
                    console.log(err)
                    db.close()
                })
        })
        .catch(err => {
            console.log(err)
            db.close()
        })
})