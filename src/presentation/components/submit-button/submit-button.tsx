import React, { FC, useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  title: string
}

const SubmitButton: FC<Props> = ({ title }: Props) => {
  const { state } = useContext(Context)
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">
      {title}
    </button>
  )
}
export default SubmitButton
