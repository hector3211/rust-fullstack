use diesel::pg::PgConnection;
use diesel::prelude::*;
// env
use dotenvy::dotenv;
use std::env;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("Database url in .env must be set dude!");
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to - {}",database_url))
}
