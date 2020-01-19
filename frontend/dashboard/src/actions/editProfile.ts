import gql from 'graphql-tag'
import * as actions from '../constants/me'

interface UserProfile {
  firstName: string
  lastName: string
}

export const editProfile = ({ firstName, lastName }: UserProfile) => async (
  dispatch,
  getState,
  client,
) => {
  try {
    const { data } = await client.mutate({
      mutation: gql`
        mutation Update($input: UpdateProfileInput!) {
          updateProfile(input: $input) {
            errors {
              firstName
              lastName
            }
          }
        }
      `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })
  } catch (e) {
    dispatch({
      type: actions.edit,
      user: {
        profile: { firstName, lastName, errors: {} },
      },
    })
  }
}
