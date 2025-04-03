import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

interface User {
  name: string
  email: string
  github: string
}

interface UserWithId extends User {
  id: string
}

const DEFAULT_STATE: UserWithId[] = [
  {
    id: '1',
    name: 'Carlos Arancibia',
    email: 'carlosarancibia@gmail.com',
    github: 'CarlosArancibia',
  },
  {
    id: '2',
    name: 'Lucia Mendoza',
    email: 'luciamendoza@gmail.com',
    github: 'luciamendoza',
  },
  {
    id: '3',
    name: 'Nathan Saucedo',
    email: 'nasa10@gmail.com',
    github: 'NathanSaucedo',
  },
]

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
  },
})

export const { deleteUserById } = usersSlice.actions
