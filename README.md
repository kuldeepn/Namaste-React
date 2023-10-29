# Assignment-02-Igniting Our App

## What is NPM?

It does not stand as 'Node Package Manager', but it does manages all packages which are required for a project. It is kind of repository where all packages are there.

## What is 'Parcel/Webpack'? Why do we need it?

'Parcel/Webpack' are bundlers where they provide a super power to app like there core job is to bundles the files and make it production ready.

## What is '.parcel-cache'?

This is the folder created when we execute the parcel command where binary files of project kept which will help for faster execution of project.

## What is 'npx'?

NPX is the package runner tool which comes with the NPM. npx is command will help to execute the command for particular package.

## What is difference between 'dependencies' vs 'Devdependencies'?

'dependencies' are needs to be run on production environment to maintain the efficient working of an app. Where Devdependencies are needs to be run on dev environment because it contains the testing libraries and dev packages which are not required on production and these packages are big in size compare to prod dependencies.

## What is Tree Shaking?

Tree Shaking comes with parcel/bundler which will remove the unused code from the app to maintain the smooth working of an app.

## What is Hot Module Replacement?

HMR is one of feature of parcel/bundler which allows dynamic reload of code whithout reloading the full page of an app.

## List down any 5 superpower of parcel?

1. Tree Shaking
2. HMR - Hot Module Replacement
3. File Watching Algorithm
4. Minimizing
5. Dev build

## What is .gitignore? What should we add and not add into it?

.gitignore is github file where we can mention whichever file we don't want to push on github. The packages or files that we can regenerate that file we should mention in .gitignore.

## What is difference between 'package.json' and 'package-lock.json'

package.json is a config file of packages where it maintains the versions of all packages but in package-lock.json keeps actual versions of all packages.

## Why should I not modify 'package-lock.json?'

It maintains the actual version of all packages. It can lead to consistency issue within team members all dependencies are based on whatever versions are there in package-lock.json

## What is 'node_modules'? Is it a good idea to push that on git?

node_modules folder contains all the depencies which are required to run a project. No it is not recommended to push it.

## What is the 'dist' folder?

'dist' folder contains the build of your application which is optimized and ready for production.

