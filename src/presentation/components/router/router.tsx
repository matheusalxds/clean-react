import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { SignUp } from '@/presentation/pages'

type Props = {
  makeLogin: FC
}

const Router: FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={makeLogin}/>
      <Route path="/signup" exact component={SignUp}/>
    </Switch>
  </BrowserRouter>
)

export default Router
