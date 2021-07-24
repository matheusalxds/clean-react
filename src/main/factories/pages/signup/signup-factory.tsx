import React, { FC } from 'react'
import { SignUp } from '@/presentation/pages'
import { makeLocalUpdateCurrentAccountFactory } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUp: FC = () =>
  <SignUp
    addAccount={makeRemoteAddAccount()}
    validation={makeSignUpValidation()}
    updateCurrentAccount={makeLocalUpdateCurrentAccountFactory()}
  />
