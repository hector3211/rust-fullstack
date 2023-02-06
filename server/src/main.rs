extern crate diesel;
pub mod controllers;
pub mod models;
pub mod schema;
pub mod actions;
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
    HttpServer, 
    middleware::Logger,
};
use actix_cors::Cors;
use diesel::{
    prelude::*,
    r2d2::{self,ConnectionManager}
};
use dotenvy::dotenv;
use std::env;

pub type DbPool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
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
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
