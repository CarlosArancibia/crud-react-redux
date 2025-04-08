import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpenModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpenModal = true
    },
    closeModal: (state) => {
      state.isOpenModal = false
    },
  },
})

export const { openModal, closeModal } = uiSlice.actions
