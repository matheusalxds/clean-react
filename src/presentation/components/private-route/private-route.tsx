import React, { FC } from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

export const PrivateRoute: FC<RouteProps> = (props: RouteProps) => {
  return <Route {...props} component={() => <Redirect to="/login" />} />
}
