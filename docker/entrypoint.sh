#!/usr/bin/env bash
set -eu

yarn install
exec yarn run "$@"
