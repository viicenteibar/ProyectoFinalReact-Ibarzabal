import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

function CartWidget() {
  const { cartCount } = useCart();

  return (
    <div className='carrito'>
        <FaShoppingCart size='30px' color='#9aacb5'/>
        <span className='badge'>{cartCount}</span>
    </div>
  )
}

export default CartWidget