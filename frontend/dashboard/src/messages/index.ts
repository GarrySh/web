import { defineMessages } from 'react-intl'

export const namespace = '@frontend/dashboard'

export default defineMessages({
  exit: {
    id: `${namespace}.exit`,
    defaultMessage: 'Выйти',
  },
  copyright: {
    id: `${namespace}.copyright`,
    defaultMessage: 'Atlantis United',
  },
  userProfile: {
    id: `${namespace}.userProfile`,
    defaultMessage: 'Профиль пользователя',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  saveProfile: {
    id: `${namespace}.saveProfile`,
    defaultMessage: 'Сохранить профиль',
  },
  cancel: {
    id: `${namespace}.cancel`,
    defaultMessage: 'Отмена',
  },
})
