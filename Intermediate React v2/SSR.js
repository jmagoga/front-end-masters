//usar node.js

//pre render everything, send user the complete mark up,then react takes over the page once it finishes loading

//ClientApp.js

import { hydrate } from 'react-dom'

//hydrate = i expect there to be markup already in this place, just takeover what's there don't rerender
hydrate(<App />, document.getElementById("root"))

//agora, em App.js

//remove all 'document' references, put them inside of an effect

//install babel cli and express          node doesn't speak jsx so we have to run it through babel.
//express is the most popular node framework

//*********************************************************************************************
https://frontendmasters.com/courses/intermediate-react-v2/server-side-rendering-to-strings/
//agora cria outra pasta server (fora do src, para manter separado)
//dentro faz um index.js

import express from 'express'
import React from 'react'
import renderToString from 'react-dom/server'
import { ServerLocation } from '@reach-router'
import 'fs' from 'fs'
import App from './App'

//indetificar em que porta isso vai rodar
const PORT = process.env.PORT || 3000 //if they don't set it to an env variable just set it to 3000
//... (https://frontendmasters.com/courses/intermediate-react-v2/server-side-rendering-to-strings/)



