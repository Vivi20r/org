import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

    const [nombre, setnombre] = useState ("")
    const [puesto, setpuesto] = useState ("")
    const [foto, setfoto] = useState ("")
    const [equipo, setEquipo] = useState ("")

    const [titulo, setTitulo] = useState ("")
    const [color, setColor] = useState ("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) => {//e=event simplificado
        e.preventDefault()//se usa para manejar formularios, no deja que la pagina se recargue
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre : nombre,
            puesto: puesto,
            foto:   foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                setValor={setnombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                setValor={setpuesto}
                />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                setValor={setfoto}
                />
            <ListaOpciones 
                valor ={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                setValor={setTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                setValor={setColor}
                type="color"
                />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}


export default Formulario