extern crate diesel;
extern crate dotenvy;
pub mod db;
pub mod controllers;
pub mod models;
pub mod schema;

use actix_cors::Cors;
use controllers::routes::{
    get_all_movies,
    get_movie,create_movie,
    update_movie,
    delete_movie
};
use actix_web::{
    web, 
    App, 
    HttpResponse, 
    HttpServer, 
    Responder, 
    // guard,
    middleware::Logger,
};

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
                .wrap(Cors::permissive())
                .wrap(Logger::default())
                .service(get_all_movies)
                .service(get_movie)
                // .service(make_a_test_movies)
                .service(create_movie)
                .service(update_movie)
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
