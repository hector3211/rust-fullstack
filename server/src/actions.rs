use diesel::prelude::*;
use crate::models::{Movie,NewMovie};
use diesel::PgConnection;

pub type DbError = Box<dyn std::error::Error + Send + Sync>;

pub fn get_all_moives(conn: &mut PgConnection) -> Result<Option<Vec<Movie>>,DbError> {
    use crate::schema::movies::dsl::*;
    let all_movies: Vec<Movie> =  movies
        .load(conn)
        .expect("Error getting all Movies!");
    Ok(Some(all_movies))
}

pub fn add_movie(
    conn: &mut PgConnection,
    tl:String,
    cv:String,
    rg:i32,
) -> Result<(), DbError> {
    use crate::schema::movies::dsl::*;
    let new_movie = NewMovie {
        title: &tl,
        cover: &cv,
        rating: &rg,
    };

    diesel::insert_into(movies)
        .values(&new_movie)
        .execute(conn)
        .expect("Error creating movie");

    Ok(())
}

pub fn add_fake_movie(
    conn: &mut PgConnection,
) -> Result<(), DbError> {
    use crate::schema::movies::dsl::*;
    let new_movie = NewMovie {
        title: "Ready Player One",
        cover: "Ready Player One",
        rating: &7,
    };

    diesel::insert_into(movies)
        .values(&new_movie)
        .execute(conn)
        .expect("Error creating movie");

    Ok(())
}

pub fn delete_movie_by_id(
    conn: &mut PgConnection,
    movie_id: i32
) -> Result<(), DbError> {
    use crate::schema::movies::dsl::*;
    diesel::delete(movies.filter(id.eq(movie_id)))
        .execute(conn)
        .expect("Error deleting movie");
    Ok(())

}

