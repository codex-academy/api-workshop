# API introduction

## Setup

Fork & clone this repository from GitHub

In the project folder do:

* `npm install`
* `npm start`

The app should be available at : `http://localhost:3010`


## todo

Using the data available via the API at: https://github.com/avermeulen/api-tutor


  Library to use                       | URL to use for script tag
---------------------------------------|------------------------------------------------
clientside HandlebarJS templates       | `<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.4.2/handlebars.js" integrity="sha256-hSzapznWRy/aOZkctlN03an9DxCLlN8ZCQS0lxntiHg=" crossorigin="anonymous"></script>`
axios to call the APIs to get the data | `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script>`

## Show some data

Create a page that displays three lists:

* all the available cars
* all the available colors
* all the available brands 

## A car filter widget

Once done with the above create a widget where the user can select a brand and/or a color from dropdowns and press a button to display a list of cars for the selected color & or brand.
