use actix_web::{get, post, delete, HttpResponse, Responder, Result, Error, web, http::StatusCode};
use diesel::prelude::*;
use diesel::r2d2::ConnectionManager;
use r2d2::Pool;
// use crate::actions;

use crate::models::{Movie, NewMovie};

// Route that returns all movies from our database
#[get("/getmovies")]
pub async fn get_all_movies(
    pool: web::Data<Pool<ConnectionManager<PgConnection>>>
) 
-> Result<HttpResponse, Error> {
    use crate::schema::movies::dsl::*;
    let mut conn = pool.get().unwrap();
    let all_movies:Vec<Movie> = movies
        .load(&mut conn)
        .expect("failed getting movies!");

    // let movies = web::block(move || {
    //     let mut conn = pool.get()?;
    //     actions::get_all_moives(&mut conn)
    // })
    // .await?
    // .map_err(|err| ErrorInternalServerError(err))?;
    //
    //  if let Some(movies) = movies {
    //     Ok(HttpResponse::Ok().json(movies))
    // } else {
    //     let res = HttpResponse::NotFound().body(format!("No user found with uid: {user_uid}"));
    //     Ok(res)
    // }
    Ok(HttpResponse::Ok().json(all_movies))
}

// Route that makes a query to our DB and filters by our movie title param in path
#[get("/get/{movie_title}")]
pub async fn get_movie(
    path: web::Path<String>,
    pool: web::Data<Pool<ConnectionManager<PgConnection>>>
) 
-> Result<HttpResponse, Error> {
    use crate::schema::movies::dsl::*;
    let movie_title = path.into_inner();
    let mut conn = pool.get().unwrap();

    let movie: Movie = movies
        .filter(title.eq(movie_title))
        .first(&mut conn)
        .expect("Error querying movie data");

    Ok(HttpResponse::Ok().json(movie))
}
//
// #[post("/makemovie")]
// pub async fn make_a_test_movies(
//     pool: web::Data<Pool<ConnectionManager<PgConnection>>>
// )
// -> Result<impl Responder, Error> {
//     use crate::schema::movies;
//     let test_movie = NewMovie {
//         title: "test movie one",
//         cover: "test movie one cover",
//         rating: &10,
//     };
//     let mut conn = pool.get().unwrap();
//     diesel::insert_into(movies::table)
//         .values(&test_movie)
//         // .execute(connect) to not return anything
//         .get_result::<Movie>(&mut conn)
//         .expect("Error inseting test movie data to DB");
//
//     Ok(HttpResponse::Ok().json(test_movie))
// }
//
// Route that creates a new movie
#[post("/newmovie/{movie_title}/{movie_cover}/{movie_ratign}")]
pub async fn create_movie(
    path: web::Path<(String,String,i32)>,
    pool: web::Data<Pool<ConnectionManager<PgConnection>>>
) 
-> Result<impl Responder, Error> {
    use crate::schema::movies;
    let (movie_title,movie_cover,movie_rating) = path.into_inner();
    let new_movie = NewMovie {
        title: &movie_title,
        cover: &movie_cover,
        rating: &movie_rating,
    };
    let mut conn = pool.get().unwrap();

    diesel::insert_into(movies::table)
        .values(&new_movie)
        .execute(&mut conn)
        .expect("Error inserting dynamic movie data to DB");

    Ok(HttpResponse::Ok())
}
//
// // Route that updates a movie rating based on a movies ID
// #[put("/update/{movie_id}/{movie_rating}")]
// pub async fn update_movie(path: web::Path<(i32,i32)>)
// -> Result<impl Responder, Error> {
//     use crate::schema::movies::dsl::*;
//     let (movie_id,movie_rating) = path.into_inner();
//     let connect = &mut establish_connection();
//
//     let updating_movie = diesel::update(movies.find(movie_id))
//         .set(rating.eq(movie_rating))
//         .execute(connect)
//         .expect("Error updating movie!");
//
//     Ok(HttpResponse::Ok().json(updating_movie))
// }
//
//
//
#[delete("delete/{movie_id}")]
pub async fn delete_movie(
    path: web::Path<i32>,
    pool: web::Data<Pool<ConnectionManager<PgConnection>>>
)
-> Result<impl Responder, Error> {
    use crate::schema::movies::dsl::*;
    let movie_id = path.into_inner();
    let mut conn = pool.get().unwrap();
    let delete_selected_movie = diesel::delete(movies.filter(id.eq(movie_id)))
        .execute(&mut conn)
        .expect("Error deleting movie");

        Ok(HttpResponse::Ok().json(delete_selected_movie))
}

