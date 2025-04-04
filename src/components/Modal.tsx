import ReactDOM from 'react-dom'

interface Props {
  isOpen: boolean
  onCloseModal: () => void
  title: string
  children: React.ReactNode
}

export const Modal = ({ isOpen, onCloseModal, title, children }: Props) => {
  if (!isOpen) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className='absolute inset-0 bg-black/50  flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-80 relative'>
        <header className='mb-3'>
          <h2 className='text-xl font-semibold text-gray-500 text-center'>{title}</h2>
          <button className='absolute right-4 top-2 cursor-pointer text-2xl' onClick={onCloseModal}>
            X
          </button>
        </header>
        {children}
      </div>
    </div>,
    modalRoot
  )
}
