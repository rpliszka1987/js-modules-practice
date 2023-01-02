# Modules JavaScript

## Table of Content

- [Introduction](#introduction)
- [Runtime Environment](#runtime-environment)
- [sites](#sites)
- [WorkAround Explorer](#workaround-explorer)

## Introduction

This is a Code Academy course which covers the Modules in JS. Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. This is also called Separation of Concern.

## Runtime Environment

Runtime Environment is where your program will be executed. There are 2 runtime environments in JS:

- 1 - Runtime Environment of Browser (Chrome, Safari, Firefox)
  - Used for Frot-end Development
  - Executed in a Browser
- 2 - Node Runtime Environment
  - Used for Back-end Development
  - Executed in the terminal or powershell

## Secret Message

This is an example of using modules to have JS code run from 2 different files which work together.

secret-message.html - Is HTML file which is the structure of the page.
secret-message.js - Is JS file which hold JS code which is being used in the secret-message.html.

## Sites

This is a directory made up of 3 directories: modules, secretImageSite, and secretMessageSite. The secretImageSite and secretMessageSite are 2 directories containing a HTML file and a JS file. HTML file is used to structure the site with buttons which perform call a function to make changes to the site. This makes the sites interactive. Due to both sites using the same functions for simmilar purposes there is a directory called modules which contain a JS file with the functions which can be used in both sites. These two functions toggleHiddenElement() and changeToFunkyColor() are exported and then imported to both JS files in each of the sites directories. This is to show the use of different modules in more then one file. It is used to prevent duplication of code and it can be shared by as many directories as needed. This was a great example of using modules to resuse the functionality of each function in different sites.

## WorkAround Explorer

This is a Code Academy assignment which is called WorkAround Explorer.
