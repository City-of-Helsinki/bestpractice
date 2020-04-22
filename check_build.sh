#!/usr/bin/env bash
set -eo pipefail

if [ ! -f ./public/index.html ]; then
    echo "Site root not found!"
    exit 1
fi
