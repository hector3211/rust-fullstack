#!/usr/bin/env bash
 RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev
cargo install diesel_cli --no-default-features --features postgres
cargo build --release
