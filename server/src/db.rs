use diesel::pg::PgConnection;
use diesel::r2d2::ConnectionManager;
// env
use dotenvy::dotenv;
use r2d2::Pool;
use std::env;

pub type DbPool = Pool<ConnectionManager<PgConnection>>;

pub fn establish_connection() -> DbPool {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("Database url in .env must be set dude!");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    let pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create pool");
    return pool;
}
