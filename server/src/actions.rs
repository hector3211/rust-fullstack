// use diesel::prelude::*;
// use crate::models::Movie;
//
// pub type DbError = Box<dyn std::error::Error + Send + Sync>;
//
// pub fn get_all_moives(conn: &mut PgConnection) -> Result<Option<Movie>,DbError> {
//     use crate::schema::movies::dsl::*;
//
//     let all_movies: Vec<_> =  movies.load(conn).optional()?;
//
//     Ok(all_movies);
// }
