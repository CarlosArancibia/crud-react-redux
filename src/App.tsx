import { ListUsers, AddUserButton } from './components/'
import { UserForm } from './components/UserForm'

function App() {
  return (
    <>
      <div className='m-auto max-w-[900px] relative py-10 min-h-screen'>
        <ListUsers />
        <AddUserButton />
        <UserForm />
      </div>
    </>
  )
}

export default App
