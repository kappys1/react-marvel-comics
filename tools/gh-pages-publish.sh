#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# build (CHANGE THIS)

# deploy
cd build
git init
git add .

# config
git config --global user.email "alexsbd1@gmail.com"
git config --global user.name "alex marcos"

git commit -m "docs(docs): Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/kappys1/react-marvel-comics.git" master:gh-pages
cd -
