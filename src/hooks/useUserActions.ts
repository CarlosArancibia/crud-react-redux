import { addUser, deleteUserById, User, UserId } from '../store/users/usersSlice'
import { useDispatchApp } from './store'

export const useUserActions = () => {
  const dispatch = useDispatchApp()

  const onDeleteUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  const onAddUser = ({ name, email, github }: User) => {
    dispatch(addUser({ name, email, github }))
  }

  return {
    onDeleteUser,
    onAddUser,
  }
}
