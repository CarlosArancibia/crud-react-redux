import { useSelectorApp } from '../hooks/store'
import { useUiActions } from '../hooks/useUiActions'
import { useUserActions } from '../hooks/useUserActions'
import { UserWithId } from '../store/users/usersSlice'

export const ListUsers = () => {
  const { users } = useSelectorApp((state) => state.users)

  const { onDeleteUser, onSetActiveUser } = useUserActions()
  const { onOpenModal } = useUiActions()

  const onEditUser = (user: UserWithId) => {
    onSetActiveUser(user)
    onOpenModal()
  }

  return (
    <>
      <div className='flex-auto py-8 pt-6 px-9 shadow-md rounded-xl'>
        <div className='overflow-x-auto'>
          <div className='flex text-gray-500 items-center'>
            <h2 className='font-bold text-lg'>Users</h2>
            <span className='font-semibold bg-blue-100 rounded-full w-6 h-6 ml-3 text-sm flex'>
              <p className='m-auto'>{users.length}</p>
            </span>
          </div>
          <table className='w-full my-0 align-middle text-dark mt-8 border-neutral-200 text-gray-500'>
            <thead className='align-bottom text-gray-500'>
              <tr className='font-semibold text-[0.95rem]'>
                <th className='pb-3 text-start min-w-[50px]'>Id</th>
                <th className='pb-3 text-start min-w-[200px]'>Name</th>
                <th className='pb-3 text-start min-w-[200px]'>Email</th>
                <th className='pb-3 pr-12 text-end min-w-[100px]'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className='border-b border-gray-300 last:border-b-0'>
                  <td className='p-3 pl-0 pr-10 overflow-hidden text-ellipsis whitespace-nowrap max-w-[100px]'>
                    {user.id}
                  </td>
                  <td className='p-3 pl-0 text-start flex items-center'>
                    <img
                      src={`https://unavatar.io/github/${user.github}`}
                      className='rounded-full w-8'
                      alt='avatar github'
                    />
                    <span className=' text-md/normal ml-3'>{user.name}</span>
                  </td>
                  <td className='p-3 pl-0 text-start '>{user.email}</td>
                  <td className='p-3 pr-12 text-end'>
                    <button className='cursor-pointer' onClick={() => onEditUser(user)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                        />
                      </svg>
                    </button>
                    <button className='cursor-pointer' onClick={() => onDeleteUser(user.id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
