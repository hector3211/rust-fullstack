use serde::{Deserialize,Serialize};
use diesel::prelude::*;
use crate::schema::movies;

#[derive(Debug,Queryable,Deserialize,Serialize,Clone)]
pub struct Movie {
    pub id: i32,
    pub title: String,
    pub cover: String,
    pub rating: i32,
}

#[derive(Insertable,Serialize,Clone)]
#[diesel(table_name = movies)]
pub struct NewMovie<'a> {
    pub title: &'a str,
    pub cover: &'a str,
    pub rating: &'a i32,
}
