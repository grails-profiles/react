#!/bin/bash
set -e
./gradlew clean
EXIT_STATUS=0
echo "Publishing docs for branch $TRAVIS_BRANCH"
if [[ $TRAVIS_PULL_REQUEST == 'false' ]]; then
    echo "Publishing docs"
    ./gradlew docs || EXIT_STATUS=$?

    git config --global user.name "$GIT_NAME"
    git config --global user.email "$GIT_EMAIL"
    git config --global credential.helper "store --file=~/.git-credentials"
    echo "https://$GH_TOKEN:@github.com" > ~/.git-credentials

    git clone https://${GH_TOKEN}@github.com/grails-profiles/react.git -b gh-pages gh-pages --single-branch > /dev/null
    cd gh-pages

    rm -rf latest
    mkdir -p latest
    cp -r ../build/docs/. ./latest/
    git add latest/*

    git commit -a -m "Updating React Profile Docs for Travis build: https://travis-ci.org/$TRAVIS_REPO_SLUG/builds/$TRAVIS_BUILD_ID"
    git push origin HEAD

    cd ..
    rm -rf gh-pages

fi

exit $EXIT_STATUS
