extern crate diesel;
pub mod db;
pub mod controllers;
pub mod models;
pub mod schema;
pub mod actions;

use std::env;
// use db::establish_connection;

use actix_cors::Cors;
use controllers::routes::{
    get_all_movies,
    make_a_test_movies,
    create_movie,
    delete_movie
    // update_movie,
};
use actix_web::{
    web, 
    App, 
    HttpResponse, 
    HttpServer, 
    Responder, 
    middleware::Logger,
};
use diesel::{
    prelude::*,
    r2d2::{self,ConnectionManager}
};
use dotenvy::dotenv;

pub type DbPool = r2d2::Pool<ConnectionManager<PgConnection>>;

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // let pool = establish_connection();
    dotenv().ok();
    let database_url = env::var("DATABASE_URL")
        .expect("Database url in .env must be set dude!");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    let pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create pool");

    HttpServer::new(move|| {
        App::new()
            .app_data(web::Data::new(pool.clone()))
                .wrap(Cors::permissive())
                .wrap(Logger::default())
                .service(get_all_movies)
                // .service(get_movie)
                .service(make_a_test_movies)
                .service(create_movie)
                // .service(update_movie)
                .service(delete_movie)
                // .service(
                // Delete route is protected by our guard header
                //     web::resource("/delete/{movie_id}")
                //         .route(
                //             web::delete()
                //                 .guard(guard::Header("token", "098"))
                //                 .to(delete_movie)
                //         )
                // )
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
