### Description

Our backend in short will allow users to call GET,POST,PUT,DELETE to our actix
server that connects to our docker postgres DB instance.

### Dependencies

```toml
actix-web = "4.2.1"
anyhow = "1.0.68"
diesel = {version = "2.0.0", features = ["postgres"]}
dotenvy = "0.15.6"
serde = { version = "1.0", features = ["derive"]}
```

### How to run

Set/Start database

- make a .env file and fill it up like the .env.example

```console
docker compose up -d
```

Start Sever

```console
disel migration run
cargo watch -x run
```
