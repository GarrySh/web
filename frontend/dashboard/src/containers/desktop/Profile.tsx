import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editProfile } from '../../actions/editProfile'
import Profile from '../../components/desktop/Profile'

const getProfile = (state): string => state.me.profile

const initialState = {
  firstName: '',
  lastName: '',
  errors: {},
}

const localReducer = (state, action) => {
  switch (action.type) {
    case 'initial':
      return action.payload
    case 'firstName': {
      const firstName = action.payload
      const errors = { ...state.errors, firstName: '' }
      if (firstName.length < 10) {
        errors.firstName = 'Ошибка валидации имени, длина меньше 10 символов'
      }
      return { ...state, firstName, errors }
    }
    case 'lastName':
      return { ...state, lastName: action.payload }
    default:
      throw new Error('incorrect usage in local reducer')
  }
}

export default () => {
  const [state, localDispatch] = useReducer(localReducer, initialState)

  const initialProfileData = useSelector(getProfile)

  useEffect(() => {
    localDispatch({ type: 'initial', payload: initialProfileData })
  }, [initialProfileData])

  const onChangeInput = (inputType: string) => (value: string): void => {
    localDispatch({ type: inputType, payload: value })
  }

  const dispatch = useDispatch()
  const userProfile = {
    firstName: state.firstName,
    lastName: state.lastName,
  }
  const handleSave = () => dispatch(editProfile(userProfile))

  const history = useHistory()
  const handleCancel = () => history.replace('/')

  return (
    <Profile
      firstName={state.firstName}
      lastName={state.lastName}
      errors={state.errors}
      onChangeInput={onChangeInput}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  )
}
