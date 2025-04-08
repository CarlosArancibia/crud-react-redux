import { closeModal, openModal } from '../store/ui/uiSlice'
import { useDispatchApp } from './store'

export const useUiActions = () => {
  const dispatch = useDispatchApp()

  const onOpenModal = () => {
    dispatch(openModal())
  }

  const onCloseModal = () => {
    dispatch(closeModal())
  }

  return { onOpenModal, onCloseModal }
}
