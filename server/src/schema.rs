// @generated automatically by Diesel CLI.

diesel::table! {
    movies (id) {
        id -> Int4,
        title -> Varchar,
        cover -> Varchar,
        rating -> Int4,
    }
}
