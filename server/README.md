### Description

Our backend in short will allow users to call GET,POST,PUT,DELETE to our actix
server that connects to our local postgresQl DB instance.

### Dependencies

```toml
actix-web = "4.2.1"
anyhow = "1.0.68" ("optional")
diesel = {version = "2.0.0", features = ["postgres"]}
dotenvy = "0.15.6"
serde = { version = "1.0", features = ["derive"]}
```
