import { FaShoppingCart } from 'react-icons/fa';
function CartWidget() {
  return (
    <div className='carrito'>
        <FaShoppingCart size='30px' color='#9aacb5'/>
        <span className='badge'>5</span>
    </div>
  )
}

export default CartWidget