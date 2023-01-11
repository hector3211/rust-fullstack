## Rusty Movie App

# Description

This rust application is a movie app that uses [Actix](https://actix.rs/),
[Diesel](https://https://diesel.rs/) with postgres DB for the backend which is
in progres,and will be adding leptos or svelt kit for the frontend (can't decide right now).

---

# Dependencies

```toml
actix-web = "4.2.1"
anyhow = "1.0.68" ("optional")
diesel = {version = "2.0.0", features = ["postgres"]}
dotenvy = "0.15.6"
serde = { version = "1.0", features = ["derive"]}
```
