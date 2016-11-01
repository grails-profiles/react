# Grails React Profile
A profile for creating Grails applications with a React frontend

[![Build Status](https://travis-ci.org/grails-profiles/react.svg?branch=master)](https://travis-ci.org/grails-profiles/react)

 - If you are looking for the webpack/monolith version of this profile, please see the 1.x branch: https://github.com/grails-profiles/react/tree/1.x

This profile provides a client/server multi-project build. The server Grails app is using the rest-api profile with CORS enabled. It can be started using 'grails run-app' or using the Gradle wrapper:

      ./gradlew server:bootRun

The React client app has been built using the create-react-app CLI. It can be started via `npm start` (in which case you will need to run `npm install` to install npm dependencies) or using the Gradle wrapper (which will install npm dependencies automatically if needed):

      ./gradlew client:start

The client app's build.gradle defines other tasks to test and build the app using react-scripts. Please see create-react-app's documentation for more information: https://github.com/facebookincubator/create-react-app

For support, please use the Groovy Community Slack (https://groovycommunity.slack.com/) or open an issue on Github: https://github.com/grails-profiles/react/issues
