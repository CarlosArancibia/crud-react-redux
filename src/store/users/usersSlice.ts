import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

interface UsersState {
  users: UserWithId[]
  activeUser: UserWithId | null
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

const users: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).users.users : DEFAULT_STATE
})()

const initialState: UsersState = {
  users,
  activeUser: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      state.users = state.users.filter((user) => user.id !== id)
    },
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.users.push({ id, ...action.payload })
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload
    },
    updateUser: (state, action: PayloadAction<UserWithId>) => {
      const { id, ...dataToUpdate } = action.payload
      state.users = state.users.map((user) => {
        return user.id === id ? { ...user, ...dataToUpdate } : user
      })
    },
  },
})

export const { deleteUserById, addUser, setActiveUser, updateUser } = usersSlice.actions
