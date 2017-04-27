# xvelopers

[xvelopers](http://xvelopers.org) is a project made to support the Dominican software development community; it showcases developers who support, contribute and influence the community.

Like other community projects, this one holds an implicit invitation to hop in, look around, ask questions, and contribute. Other community projects include [emplea.do](http://www.emplea.do) ([repo](https://github.com/developersdo/empleo-dot-net)) and [meta.do](http://meta.do) [repo](https://github.com/xpostudio4/metacommunity).

# Setup and installation

The installation can be divided in two phases: Environment Setup and Project Setup. The Environment Setup requires administration privileges on the computer, as it installs software that can be used throughout the system. The Project Setup doesn't, as it only deals with the project at hand.

## Environment Setup
These steps can be performed from any directory in your computer, as they have a global effect in the system.

### Install nodejs
[Here](https://goo.gl/YcOsZP) you can check how to do so. There's an issue when installing Node in Ubuntu, check it out how to solve it [here](https://goo.gl/uSfZXo)

### Update npm
	npm install -g npm

### Install bower and grunt-cli
	npm install -g bower
	npm install -g grunt-cli

## Project Setup

These steps only affect the project. You need to execute them, then, from the project's root directory.

### Install the backend dependencies
	npm install

### Install the frontend dependencies
	bower install

### Install uikit's dependencies
*this step also generates uikit's html, css and javscript output*

	cd bower_components/uikit && npm install && cd ../..

### Build the project
	grunt build

At this point you should have a working project; all the final files for the website should be located in the `build` directory.

## Running
	npm start

Executes the "node server.js"  command and serves the content of the `build` directory via the port 8000. You will then be able to visit the site at http://localhost:8000
