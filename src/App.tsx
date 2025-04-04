import { useState } from 'react'
import { ListUsers, AddUserButton } from './components/'
import { CreateUserForm } from './components/CreateUserForm'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenModal = () => {
    setIsOpen(true)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className='m-auto max-w-[900px] relative py-10 min-h-screen'>
        <ListUsers />
        <AddUserButton onOpenModal={onOpenModal} />
        <CreateUserForm isOpen={isOpen} onCloseModal={onCloseModal} />
      </div>
    </>
  )
}

export default App
