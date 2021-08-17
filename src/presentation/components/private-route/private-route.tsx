import React, { FC, useContext } from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts'

export const PrivateRoute: FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken ? <Route {...props} /> : <Route {...props} component={() => <Redirect to="/login" />} />
}
