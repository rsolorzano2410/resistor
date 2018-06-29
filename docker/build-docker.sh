#!/bin/bash

set -e -x

VERSION=`cat package.json| grep version | awk -F':' '{print $2}'| tr -d "\", "`
COMMIT=`git rev-parse --short HEAD`

if [ ! -f dist/resistor-${VERSION}-${COMMIT}_${GOOS:-linux}_${GOARCH:-amd64}.tar.gz ]
then
    echo "building binary...."
    npm run build:static
    go run build.go pkg-min-tar
else
    echo "skiping build..."
fi

export VERSION
export COMMIT

cp dist/resistor-${VERSION}-${COMMIT}_${GOOS:-linux}_${GOARCH:-amd64}.tar.gz docker/resistor-last.tar.gz
cp conf/sample.resistor.toml docker/resistor.toml

cd docker

sudo docker build --label version="${VERSION}" --label commitid="${COMMIT}" -t tonimoreno/resistor:${VERSION} -t tonimoreno/resistor:latest .
rm resistor-last.tar.gz
rm resistor.toml

sudo docker push tonimoreno/resistor:${VERSION}
sudo docker push tonimoreno/resistor:latest
