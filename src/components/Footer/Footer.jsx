import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>&copy; {new Date().getFullYear()} Mateina Store. Todos los derechos reservados.</p>
      </div>
      <div className="footer-section">
        <a href="/contacto">Contacto</a>
        <a href="/preguntas-frecuentes">FAQs</a>
        <a href="/tips-y-cuidados">Tips & Cuidados</a>
      </div>
    </footer>
  );
}

export default Footer;