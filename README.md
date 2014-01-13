KidoZen Sencha Sample Application

## Overview

This sample application serves uses [sencha](http://sencha.com/) to generate an Android Application. It was created using [Sencha Cmd](http://docs.sencha.com/cmd/3.1.2/#!/guide/command) to generate the Views, models and controllers and [Apache Cordova 3.3](http://cordova.apache.org/) 

_This sample is not an Sencha Tutorial. It shows how you can add the KidoZen support to your Sencha applications._

### Building and running the sample

*Install Sencha and Sencha Cmd 3.1.2

*Install Apache Cordova. In order to install it you can do:

	npm install -g cordova

Note: npm is the package manager of node.js.

*Clone the solution in a local folder

	git clone https://github.com/kidozen/kido-sencha-tasks

*Build and Run the application using following command. This will launch the sample application in your emulator or device

	sencha app build -run native

* Get your KidoZen account and enter the required information in the application's login screen


## Code Structure

The Application is located in the `app` folder. It uses the default __sencha cmd__ configuration and folder structure to separate the View (DOM manipulation) from the business rules Model which uses __KidoZen__ to Autenticate the user and manipulate the tasks.

You can find the related `model` javascript files in the `resources/js` folder.
ls
