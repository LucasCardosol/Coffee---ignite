import { NavLink } from 'react-router-dom'
import { ShoppingCart , MapPin } from 'phosphor-react'

import { HeaderContainer } from './style'
import { defaultTheme } from '../../styles/themes/default'
import logo from '../../assets/images/structure/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

function Header() {

  const { listCoffes } = useContext(CartContext)
  const numberOfItens = listCoffes.length
  
  return (
    <HeaderContainer>
      <div className='container'>
        <nav>
          <NavLink to='/' title="home">
            <img src={logo} alt='logo'/>
          </NavLink>
          <div className='kart'>
            <div>
            <MapPin size={22} weight="fill" color={defaultTheme['purple']}/>
              <p className='text-s'>Porto Alegre, Rs</p>
            </div>
            <NavLink to='/cart' title='cart'>
              {numberOfItens !== 0 && <span><p className='text-xs'>{numberOfItens}</p></span>}
              <ShoppingCart size={22}  color={defaultTheme['yellow-dark']} weight="fill" />
            </NavLink>
          </div>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
