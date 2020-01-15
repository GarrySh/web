import gql from 'graphql-tag'
import { auth } from '@frontend/common/src/constants/security'
import * as actions from '../constants'
import stub from '@frontend/auth/src/helpers/stub'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const register = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.registration

  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Register($input: RegisterUserInput!) {
          register(input: $input) {
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })
  
    if (data.register.errors) {
      dispatch({
        type: actions.setErrors,
        errors: data.register.errors,
      })
    } else {
      dispatch({
        type: actions.clear,
      })
    }
  } catch (e) {
    dispatch({
      type: auth,
      token: stub.token,
      expiresIn: stub.expiresIn,
    })

    dispatch({
      type: actions.clear,
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
