type Props = {
  onOpenModal: () => void
}

export const AddUserButton = ({ onOpenModal }: Props) => {
  return (
    <button
      className='absolute bottom-16 right-0 bg-gray-400 rounded-full p-3 cursor-pointer'
      onClick={onOpenModal}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-6 text-white'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
      </svg>
    </button>
  )
}
