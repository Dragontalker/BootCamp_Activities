/* 
In mysql workbench:
===================
CREATE DATABASE favourites_db;
USE favourites_db;  
CREATE TABLE favourite_songs (
	title VARCHAR(100),
	artist VARCHAR(100),
	genre VARCHAR(100),
	rating INTEGER
);
==================
*/
  

// module to connect to database (db-name, db-password)
const db = require( './app/connection' )('favourites_db','r00tr00t')

async function main(){
    let result
    // create an entry
    result = await db.query( "INSERT INTO favourite_songs VALUES('99 Luftballoon','Nena','Pop',10)" )
    console.log( `-- INSERT Nena result: --\n`, result.affectedRows, "\n\n" )

    // create an entry with parameters
    const data = [ 'Santeria','Sublime','Reggae',10 ]
    result = await db.query( "INSERT INTO favourite_songs VALUES(?,?,?,?)", data )
    console.log( `-- INSERT Santeria result: --\n`, result.affectedRows, "\n\n" )

    // show data
    result = await db.query( 'SELECT * FROM favourite_songs' )
    console.log( `-- SELECT * result: --\n`, result, "\n\n" )

    // delete data
    result = await db.query( "DELETE FROM favourite_songs WHERE title='Santeria'" )
    console.log( `-- DELETE result: --\n`, result.affectedRows, "\n\n" )

    // quite database connection
    await db.close()
}
main()