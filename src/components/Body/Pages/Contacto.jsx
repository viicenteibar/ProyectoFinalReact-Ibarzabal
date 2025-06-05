import './pagesstyle.css';

function Contacto() {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>

      <p>
        ¿Tenés dudas, sugerencias o querés hacer un pedido personalizado?
        Escribinos, ¡nos encanta hablar de mates!
      </p>

      <ul>
        <li><strong>Correo:</strong> contacto@mateinastore.com</li>
        <li><strong>WhatsApp:</strong> +54 9 261 XXX XXXX</li>
        <li><strong>Ubicación:</strong> Godoy Cruz, Mendoza</li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/MateinaStore" target="_blank" rel="noopener noreferrer">@MateinaStore</a></li>
      </ul>

      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Asunto" />
        <textarea placeholder="Mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Contacto