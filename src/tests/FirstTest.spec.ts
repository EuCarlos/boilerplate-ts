import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Carlos alves'

  expect(user.name).toEqual('Carlos alves')
})
