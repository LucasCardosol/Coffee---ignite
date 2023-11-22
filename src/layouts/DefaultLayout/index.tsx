import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import ModalMessage from '../../components/ModalMessage'

export function DefaultLayout() {

  return (
    <>
      <Header />
      <Outlet />
      <ModalMessage />
    </>
  )
}
