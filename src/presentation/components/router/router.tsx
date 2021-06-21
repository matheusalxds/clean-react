import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: FC
  makeSignUp: FC
}

const Router: FC<Factory> = (factory: Factory) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={factory.makeLogin}/>
      <Route path="/signup" exact component={factory.makeSignUp}/>
    </Switch>
  </BrowserRouter>
)

export default Router
