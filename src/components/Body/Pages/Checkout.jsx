import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './pagesstyle.css';

function Checkout() {
  const { cart, setCart } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    envio: 'retiro',
    pago: 'tarjeta'
  });
  const navigate = useNavigate();

  if (cart.length === 0 && step !== 3) {
    return <div className="carrito-vacio">El carrito está vacío.</div>;
  }

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    setCart([]);
    Swal.fire({
      title: '¡Compra realizada!',
      text: 'Gracias por tu compra. Recibirás un email con los detalles.',
      icon: 'success',
      confirmButtonColor: '#457b9d',
      confirmButtonText: 'Aceptar',
      background: '#fff',
      color: '#457b9d'
    }).then(() => {
      navigate('/');
    });
  };

  if (step === 1) {
    return (
      <div className="carrito-detalle">
        <h2>Datos de contacto</h2>
        <form onSubmit={handleNext}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleFormChange}
            required
            style={{marginBottom: 8, width: "100%"}}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleFormChange}
            required
            style={{marginBottom: 8, width: "100%"}}
          />
          <button type="submit" className="boton-comprar" style={{marginTop: 8}}>Siguiente</button>
        </form>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="carrito-detalle">
        <h2>Envío y pago</h2>
        <form onSubmit={handleFinish}>
          <label>
            Tipo de envío:
            <select name="envio" value={form.envio} onChange={handleFormChange} style={{marginLeft: 8}}>
              <option value="retiro">Retiro en tienda</option>
              <option value="domicilio">Envío a domicilio</option>
            </select>
          </label>
          <br /><br />
          <label>
            Medio de pago:
            <select name="pago" value={form.pago} onChange={handleFormChange} style={{marginLeft: 8}}>
              <option value="tarjeta">Tarjeta</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
            </select>
          </label>
          <br /><br />
          <button type="submit" className="boton-comprar">Finalizar compra</button>
        </form>
      </div>
    );
  }

  // No renderiza nada en el paso 3, solo navega tras el SweetAlert
  return null;
}

export default Checkout;