import { useEffect, useState } from 'react'
import { useUserActions } from '../hooks/useUserActions'
import { Modal } from './Modal'
import { useSelectorApp } from '../hooks/store'
import { useUiActions } from '../hooks/useUiActions'

export const UserForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    github: '',
  })

  const { onAddUser, onUpdateUser, onSetActiveUser } = useUserActions()
  const [isOk, setIsOk] = useState(true)

  const { isOpenModal } = useSelectorApp((state) => state.ui)
  const { activeUser } = useSelectorApp((state) => state.users)
  const { onCloseModal } = useUiActions()

  useEffect(() => {
    if (activeUser) {
      setFormValues({ ...activeUser })
    }
  }, [activeUser])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleClose = () => {
    onCloseModal()
    setFormValues({ name: '', email: '', github: '' })
    onSetActiveUser(null)
  }

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // const form = event.target as HTMLFormElement
    // const userFormData = new FormData(form)

    // const name = userFormData.get('name') as string
    // const email = userFormData.get('email') as string
    // const github = userFormData.get('github') as string

    const { name, email, github } = formValues

    if (!name || !email || !github) return setIsOk(false)

    if (activeUser) {
      onUpdateUser({ ...activeUser, name, email, github })
    } else {
      onAddUser({ name, email, github })
    }

    handleClose()
    setIsOk(true)
  }

  return (
    <Modal isOpen={isOpenModal} onCloseModal={handleClose} title='Create User'>
      <form action='' className='flex flex-col gap-2' onSubmit={onSubmitForm}>
        <input
          type='text'
          name='name'
          placeholder='Enter the name'
          className='border w-full p-2 rounded-lg'
          value={formValues.name}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Enter the email'
          className='border w-full p-2 rounded-lg'
          value={formValues.email}
          onChange={onInputChange}
        />
        <input
          type='text'
          name='github'
          placeholder='Enter the github'
          className='border w-full p-2 rounded-lg'
          value={formValues.github}
          onChange={onInputChange}
        />
        {!isOk && (
          <span className='bg-red-500 rounded-lg px-2 p-1 text-white font-semibold'>
            Form data is required!
          </span>
        )}
        <button className='bg-blue-500 rounded-lg p-2 text-white font-semibold mt-2 cursor-pointer'>
          Save
        </button>
      </form>
    </Modal>
  )
}
