export default {
  rows: [
    {
      id: 1,
      email: 'yuval@gmail.com',
      profile: {
        firstName: 'Юваль',
        lastName: 'Ной',
      },
      registeredAt: new Date(),
      lastLogonAt: new Date(),
    },
    {
      id: 2,
      email: 'kharari@gmail.com',
      profile: {
        firstName: 'Харари',
        lastName: 'Ной',
      },
      registeredAt: new Date(),
      lastLogonAt: new Date(),
    },
    {
      id: 3,
      email: 'first@gmail.com',
      profile: {
        firstName: 'Пер',
        lastName: 'Вый',
      },
      registeredAt: new Date('2020-01-17'),
      lastLogonAt: new Date('2020-01-18'),
    },
    {
      id: 4,
      email: 'second@gmail.com',
      profile: {
        firstName: 'Вто',
        lastName: 'Рой',
      },
      registeredAt: new Date('2020-01-10'),
      lastLogonAt: new Date('2020-01-12'),
    },
  ],
  count: 4,
}
