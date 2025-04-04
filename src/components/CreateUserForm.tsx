import { useUserActions } from '../hooks/useUserActions'
import { Modal } from './Modal'

interface Props {
  isOpen: boolean
  onCloseModal: () => void
}

export const CreateUserForm = ({ isOpen, onCloseModal }: Props) => {
  const { onAddUser } = useUserActions()

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const userFormData = new FormData(form)

    const name = userFormData.get('name') as string
    const email = userFormData.get('email') as string
    const github = userFormData.get('github') as string

    // if (!name || !email || !github) return

    onAddUser({ name, email, github })
    onCloseModal()
  }

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal} title='Create User'>
      <form action='' className='flex flex-col gap-2' onSubmit={onSubmitForm}>
        <input
          type='text'
          name='name'
          placeholder='Enter the name'
          className='border w-full p-2 rounded-lg'
        />
        <input
          type='text'
          name='email'
          placeholder='Enter the email'
          className='border w-full p-2 rounded-lg'
        />
        <input
          type='text'
          name='github'
          placeholder='Enter the github'
          className='border w-full p-2 rounded-lg'
        />
        <button className='bg-green-700 rounded-lg p-2 text-white font-semibold mt-2 cursor-pointer'>
          Save
        </button>
      </form>
    </Modal>
  )
}
