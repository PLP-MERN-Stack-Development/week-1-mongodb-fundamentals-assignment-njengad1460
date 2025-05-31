// ### Task 2: Basic CRUD Operations


// command to find books by their genre
// db.books.find({genre:"genre name"}) ie
db.books.find({genre:"Fiction"})

// finding books from a specific year ie from specic year ex
db.books.find({published_year:{$gt:1950}})
///finding books published in the a given lange of years ex
db.books.find({published_year:{$gt:1950}|| {$lt:2000}})


// finding book for a specific author 
db.books.find({author:"author name"})

// updating book based on specific title
db.books.updateOne({title:"Wuthering Heights"},{$set:{price:9.99}})

//deleating a book based on it's title
db.books.deleteOne({title:"Wuthering Heights"})

//### Task 3: Advanced Queries



