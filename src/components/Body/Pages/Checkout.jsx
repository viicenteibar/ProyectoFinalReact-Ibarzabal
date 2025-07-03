import { useState } from 'react';
import { useCart } from '../../context/CartContext';
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
    setStep(3);
    setCart([]);
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

  if (step === 3) {
    return (
      <div className="carrito-detalle">
        <h2>¡Gracias por tu compra!</h2>
        <p>Recibirás un email con los detalles.</p>
      </div>
    );
  }
}

export default Checkout;