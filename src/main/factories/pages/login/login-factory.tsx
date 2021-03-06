import React, { FC } from 'react'
import { makeLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: FC = () =>
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
  />
