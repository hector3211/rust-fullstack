use actix_web::{get, post, delete, HttpResponse, Responder, Result, Error, web, error::ErrorInternalServerError};


use crate::{actions, DbPool};

// Route that returns all movies from our database
#[get("/getmovies")]
pub async fn get_all_movies(
    pool: web::Data<DbPool>
) 
-> Result<HttpResponse, Error> {
    let movies = web::block(move || {
        let mut conn = pool.get()?;
        actions::get_all_moives(&mut conn)
    })
    .await?
    .map_err(|err| ErrorInternalServerError(err))?;
    //
     if let Some(movies) = movies {
        Ok(HttpResponse::Ok().json(movies))
    } else {
        let res = HttpResponse::NotFound().body(format!("Error getting movies from DB"));
        Ok(res)
    }
    // Ok(HttpResponse::Ok().json(movies))
}

// Route that makes a query to our DB and filters by our movie title param in path
// #[get("/get/{movie_title}")]
// pub async fn get_movie(
//     path: web::Path<String>,
//     pool: web::Data<DbPool>
// ) 
// -> Result<HttpResponse, Error> {
//     use crate::schema::movies::dsl::*;
//     let movie_title = path.into_inner();
//     let mut conn = pool.get().unwrap();
//
//     let movie: Movie = movies
//         .filter(title.eq(movie_title))
//         .first(&mut conn)
//         .expect("Error querying movie data");
//
//     Ok(HttpResponse::Ok().json(movie))
// }
//
#[post("/makemovie")]
pub async fn make_a_test_movies(
    pool: web::Data<DbPool>,
)
-> Result<impl Responder, Error> {
    web::block(move || {
        let mut conn = pool.get()?;
        actions::add_fake_movie(&mut conn)
    })
    .await?
    .map_err(|err| ErrorInternalServerError(err))?;


    Ok(HttpResponse::Ok())
}
//
// Route that creates a new movie
#[post("/newmovie/{movie_title}/{movie_cover}/{movie_ratign}")]
pub async fn create_movie(
    path: web::Path<(String,String,i32)>,
    pool: web::Data<DbPool>,
) -> Result<impl Responder, Error> {
    let (movie_title,movie_cover,movie_rating) = path.into_inner();
    web::block(move || {
        let mut conn = pool.get()?;
        actions::add_movie(&mut conn, movie_title, movie_cover, movie_rating)
    })
    .await?
    .map_err(|err| ErrorInternalServerError(err))?;
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
    pool: web::Data<DbPool>
)
-> Result<impl Responder, Error> {
    let id = path.into_inner();
    web::block(move || {
        let mut conn = pool.get()?;
        actions::delete_movie_by_id(&mut conn, id)
    })
    .await?
    .map_err(|err| ErrorInternalServerError(err))?;
        
    Ok(HttpResponse::Ok())
}

