
use actix_web::error::ErrorNotFound;
use actix_web::http::header::{HeaderValue, self};
use actix_web::web::Header;
use actix_web::{get, post, put, delete, HttpResponse, Responder, Result, Error, web, HttpRequest};
use diesel::prelude::*;
use dotenvy::dotenv;
use std::env;
use crate::models::{Movie,NewMovie};
use crate::db::establish_connection;

// Route that returns all movies from our database
#[get("/getmovies")]
pub async fn get_all_movies() 
-> Result<impl Responder, Error> {
    use crate::schema::movies::dsl::*;
   let connect = &mut establish_connection();

    let all_movies: Vec<Movie> = movies
        .load(connect)
        .expect("error loading movies");

    Ok(HttpResponse::Ok().json(all_movies))
}

// Route that makes a query to our DB and filters by our movie title param in path
#[get("/get/{movie_title}")]
pub async fn get_movie(path: web::Path<String>) 
-> Result<impl Responder, Error> {
    use crate::schema::movies::dsl::*;
    let movie_title = path.into_inner();
    let connect = &mut establish_connection();

    let movie: Movie = movies
        .filter(title.eq(movie_title))
        .first(connect)
        .expect("Error querying movie data");

    Ok(HttpResponse::Ok().json(movie))
}

// #[post("/makemovie")]
// pub async fn make_a_test_movies()
// -> Result<impl Responder, Error> {
//     use crate::schema::movies;
//     let test_movie = NewMovie {
//         title: "test movie one",
//         cover: "test movie one cover",
//         rating: &10,
//     };
//     let connect = &mut establish_connection();
//     diesel::insert_into(movies::table)
//         .values(&test_movie)
//         // .execute(connect) to not return anything
//         .get_result::<Movie>(connect)
//         .expect("Error inseting test movie data to DB");
//
//     Ok(HttpResponse::Ok().json(test_movie))
// }

// Route that creates a new movie
#[post("/newmovie/{movie_title}/{movie_cover}/{movie_ratign}")]
pub async fn create_movie(path: web::Path<(String,String,i32)>) 
-> Result<impl Responder, Error> {
    use crate::schema::movies;
    let (movie_title,movie_cover,movie_rating) = path.into_inner();
    let new_movie = NewMovie {
        title: &movie_title,
        cover: &movie_cover,
        rating: &movie_rating,
    };
    let connect = &mut establish_connection();

    diesel::insert_into(movies::table)
        .values(&new_movie)
        .execute(connect)
        .expect("Error inserting dynamic movie data to DB");

    Ok(HttpResponse::Ok())
}

// Route that updates a movie rating based on a movies ID
#[put("/update/{movie_id}/{movie_rating}")]
pub async fn update_movie(path: web::Path<(i32,i32)>)
-> Result<impl Responder, Error> {
    use crate::schema::movies::dsl::*;
    let (movie_id,movie_rating) = path.into_inner();
    let connect = &mut establish_connection();

    let updating_movie = diesel::update(movies.find(movie_id))
        .set(rating.eq(movie_rating))
        .execute(connect)
        .expect("Error updating movie!");

    Ok(HttpResponse::Ok().json(updating_movie))
}

// still got to clean this up, need to figure out what to return in to return 
// #[delete("/delete/{movie_id}")]
pub async fn delete_movie(path: web::Path<i32>, req: HttpRequest)
-> Result<impl Responder, Error> {
    dotenv().ok();
    let creds = env::var("TOKEN").expect("No Admin token prodvided");
    use crate::schema::movies::dsl::*;
    let movie_id = path.into_inner();
    let header = req.headers().get(&creds).expect("no token header was set");
    if header.eq(&creds) { 
        let connect = &mut establish_connection();
        let delete_selected_movie = diesel::delete(movies.filter(id.eq(movie_id)))
            .execute(connect)
            .expect("Error deleting movie");

        Ok(HttpResponse::Ok().json(delete_selected_movie))
    } else {
        Err(ErrorNotFound("Error not admin bud"))
    }
    // Ok(HttpResponse::Ok().body(format!("request header value is - {:?}",header)))

}
// #[delete("/delete/{movie_id}/{username}")]
// pub async fn delete_movie(path: web::Path<(i32,String)>)
// -> Result<impl Responder, Error> {
//     use crate::schema::movies::dsl::*;
//     let (movie_id,username) = path.into_inner();
//     let connect = &mut establish_connection();
//     dotenv().ok();
//
//     if username == env::var("ADMIN").expect("Error admin variable not set") {
//         let delete_selected_movie = diesel::delete(movies.filter(id.eq(movie_id)))
//             .execute(connect)
//             .expect("Error deleting movie");
//         Ok(HttpResponse::Ok().json(delete_selected_movie))
//
//     } else {
//         Err(ErrorNotFound("Error not admin bud"))
//     }
// }

