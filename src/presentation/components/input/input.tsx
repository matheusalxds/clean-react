import React, { FC, useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Styles.inputWrap} data-status={error ? 'invalid' : 'valid'} data-testid={`${props.name}-wrap`}>
      <input title={error} ref={inputRef} {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} placeholder=" " />
      <label data-testid={`${props.name}-label`} title={error} onClick={() => inputRef.current.focus()}>{props.placeholder}</label>
    </div>
  )
}

export default Input
