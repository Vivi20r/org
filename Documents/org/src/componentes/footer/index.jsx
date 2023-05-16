import "./footer.css"
 
const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/Footer/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/Footer/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/Footer/twitter.png" alt="Twitter"/>
            </a>
        </div>
        <img src="/img/Footer/Logo.png" alt="Logo" />
        <strong>Desarrollado por Viviana Rojas</strong>
    </footer>
}

export default Footer
