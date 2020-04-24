//lazy and Suspense

//code splitting -- defer loading until later              splits into separate bundles
//first load be very quick, other pieces of code come later
//like, if you have different pages, you want the home page to load faster and the other page is not necessary at first
//so , in this example, Details is the other page and we want to load it later

import React, { lazy, Suspense } from 'react'
//vamos dizer que não quero mais carregar esse Details de primeira
//era assim
import Details from './Details'
//agora, isso vai ser deletado e vai virar assim          //splits into separate bundles.     //import Promise (it's a promise!)
const Details = lazy(() => import('./Details')) //Details is now a placeholder component. here uses a dynamic import
//it'll not load Details until later, when it's tried to be rendered for the first time

//then around the router use the Suspense component and give it a fallback
              //show this if code is not ready yet
<Suspense fallback={<h1> Loading route </h1>} >
  <Router>
      <SearchParams parth="/" />
      <Details path="/details/:id" />
  </Router>
</Suspense>
