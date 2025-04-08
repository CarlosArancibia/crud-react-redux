import {
  addUser,
  deleteUserById,
  setActiveUser,
  updateUser,
  User,
  UserId,
  UserWithId,
} from '../store/users/usersSlice'
import { useDispatchApp } from './store'

export const useUserActions = () => {
  const dispatch = useDispatchApp()

  const onDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  const onAddUser = ({ name, email, github }: User) => {
    dispatch(addUser({ name, email, github }))
  }

  const onUpdateUser = (user: UserWithId) => {
    dispatch(updateUser(user))
  }

  const onSetActiveUser = (user: UserWithId | null) => {
    dispatch(setActiveUser(user))
  }

  return {
    onDeleteUser,
    onAddUser,
    onUpdateUser,
    onSetActiveUser,
  }
}
