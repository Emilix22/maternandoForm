import { useState } from 'react'
import Logo from "../src/assets/Logo.png"
import Img_insta from "../src/assets/Img_insta.png"
import './App.css'
import { Link, useNavigate } from "react-router-dom";

function App() {

  const [datosFormu, setDatosFormu] = useState({
    nombre: "",
    edad: "",
    ocupacion: "",
    motivo: "",
    disponibilidad: "",
    telefono: "",
    email: "",
    comentarios: ""
  })

  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,60}$/,
    edad: /^\d{2,2}$/,
    ocupacion: /^[a-zA-ZÀ-ÿ\s]{3,60}$/,
    motivo: /^[a-zA-ZÀ-ÿ0-9\s]{10,300}$/,
    disponibilidad: /^[a-zA-ZÀ-ÿ0-9:\s]{3,60}$/,
    telefono: /^\d{8,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    comentarios: /^.{0,300}$/
  }

  const validations = {
    nombre: () => {
      if (expressions.nombre.test(datosFormu.nombre) && datosFormu.nombre != "") {
        setErrors({ ...errors, nombre: "" });
      } else {
        setErrors({ ...errors, nombre: "Requerido - sólo letras, mínimo 5 caracteres" });
      }
    },
    edad: () => {
      if (expressions.edad.test(datosFormu.edad) && datosFormu.edad != "") {
        setErrors({ ...errors, edad: "" });
      } else {
        setErrors({ ...errors, edad: "Requerido - sólo números, 2 caracteres" });
      }
    },
    ocupacion: () => {
      if (expressions.ocupacion.test(datosFormu.ocupacion) && datosFormu.ocupacion != "") {
        setErrors({ ...errors, ocupacion: "" });
      } else {
        setErrors({ ...errors, ocupacion: "Requerido - sólo letras, mínimo 3 caracteres" });
      }
    },
    motivo: () => {
      if (expressions.motivo.test(datosFormu.motivo) && datosFormu.motivo != "") {
        setErrors({ ...errors, motivo: "" });
      } else {
        setErrors({ ...errors, motivo: "Requerido - entre 10 y 300 caracteres" });
      }
    },
    disponibilidad: () => {
      if (expressions.disponibilidad.test(datosFormu.disponibilidad) && datosFormu.disponibilidad != "") {
        setErrors({ ...errors, disponibilidad: "" });
      } else {
        setErrors({ ...errors, disponibilidad: "Requerido - mínimo 3 caracteres" });
      }
    },
    telefono: () => {
      if (expressions.telefono.test(datosFormu.telefono) && datosFormu.telefono != "") {
        setErrors({ ...errors, telefono: "" });
      } else {
        setErrors({ ...errors, telefono: "Requerido - sólo números, entre 8 y 20 caracteres " });
      }
    },
    email: () => {
      if (expressions.email.test(datosFormu.email) && datosFormu.email != "") {
        setErrors({ ...errors, email: "" });
      } else {
        setErrors({ ...errors, email: "Requerido - sólo formato de email" });
      }
    },
    comentarios: () => {
      if (expressions.comentarios.test(datosFormu.comentarios)) {
        setErrors({ ...errors, comentarios: "" });
      } else {
        setErrors({ ...errors, comentarios: "Hasta 300 caracteres" });
      }
    }
  }

  const handleSend = (event) => {

    event.preventDefault()

    if (datosFormu.nombre === "") {
      return setErrors({ ...errors, nombre: "Requerido - sólo letras, mínimo 5 caracteres" });
    } 
    if (datosFormu.edad === "") {
      return setErrors({ ...errors, edad: "Requerido - sólo números, 2 caracteres" });
    } 
    if (datosFormu.ocupacion === "") {
      return setErrors({ ...errors, ocupacion: "Requerido - sólo letras, mínimo 3 caracteres" });
    } 
    if (datosFormu.motivo === "") {
      return setErrors({ ...errors, motivo: "Requerido - entre 10 y 300 caracteres" });
    } 
    if (datosFormu.disponibilidad === "") {
      return setErrors({ ...errors, disponibilidad: "Requerido - mínimo 3 caracteres" });
    } 
    if (datosFormu.telefono === "") {
      return setErrors({ ...errors, telefono: "Requerido - sólo números, entre 8 y 20 caracteres " });
    } 
    if (datosFormu.email === "") {
      return setErrors({ ...errors, email: "Requerido - sólo formato de email" });
    }

    console.log(datosFormu) // mandar el mail
    setDatosFormu({
      nombre: "",
      edad: "",
      ocupacion: "",
      motivo: "",
      disponibilidad: "",
      telefono: "",
      email: "",
      comentarios: ""
    })
    history('/confirmEnvio')
  }

  function convertirATitulo(cadena) {
    var palabras = cadena.toLowerCase().split(' ');
    for (var i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(' ');
  }

  return (
    <>
      <header>
        <img className='logo' src={Logo} alt="logo" />
      </header>

      <h3>Formulario de Contacto</h3>

      <form>
        <div className="form-group-1 form-group-2">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ej: Juana Pérez"
            value={datosFormu.nombre}
            onChange={(e) => setDatosFormu({ ...datosFormu, nombre: convertirATitulo(e.target.value) })}
            onKeyUp={validations.nombre}
            onBlur={validations.nombre}
          />
          {errors.nombre ? <span className="msg-error">{errors.nombre}</span> : ""} 
        </div>

        <div className="form-group-1 form-group-4">
          <label htmlFor="edad">Edad</label>
          <input
            type="text"
            name="edad"
            id="edad"
            placeholder="Ej: 35"
            value={datosFormu.edad}
            onChange={(e) => setDatosFormu({ ...datosFormu, edad: e.target.value })}
            onKeyUp={validations.edad}
            onBlur={validations.edad}
          />
          {errors.edad ? <span className="msg-error">{errors.edad}</span> : ""} 
        </div>

        <div className="form-group-1 form-group-4">
          <label htmlFor="ocupacion">Ocupación</label>
          <input
            type="text"
            name="ocupacion"
            id="ocupacion"
            placeholder="Ej: Psicóloga"
            value={datosFormu.ocupacion}
            onChange={(e) => setDatosFormu({ ...datosFormu, ocupacion: e.target.value })}
            onKeyUp={validations.ocupacion}
            onBlur={validations.ocupacion}
          />
          {errors.ocupacion ? <span className="msg-error">{errors.ocupacion}</span> : ""} 
        </div>

        <div className="form-group-1">
          <label htmlFor="motivo">Motivo de Consulta</label>
          <textarea 
            name="motivo" 
            id="motivo" 
            cols="30" 
            rows="10" 
            value={datosFormu.motivo}
            onChange={(e) => setDatosFormu({ ...datosFormu, motivo: e.target.value })}
            onKeyUp={validations.motivo}
            onBlur={validations.motivo}
          />  
          {errors.motivo ? <span className="msg-error">{errors.motivo}</span> : ""} 
        </div>

        <div className="form-group-1 form-group-3">
          <label htmlFor="disponibilidad">Disponibilidad Horaria</label>
          <input
            type="text"
            name="disponibilidad"
            id="disponibilidad"
            placeholder="Ej: de 9 a 15hs."
            value={datosFormu.disponibilidad}
            onChange={(e) => setDatosFormu({ ...datosFormu, disponibilidad: e.target.value })}
            onKeyUp={validations.disponibilidad}
            onBlur={validations.disponibilidad}
          />
          {errors.disponibilidad ? <span className="msg-error">{errors.disponibilidad}</span> : ""} 
        </div>

        <div className="form-group-1 form-group-3">
          <label htmlFor="telefono">Teléfono de Contacto</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            placeholder="Ej: 113 123-4458"
            value={datosFormu.telefono}
            onChange={(e) => setDatosFormu({ ...datosFormu, telefono: e.target.value })}
            onKeyUp={validations.telefono}
            onBlur={validations.telefono}
          />
          {errors.telefono ? <span className="msg-error">{errors.telefono}</span> : ""} 
        </div>

        <div className="form-group-1 form-group-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ej: juana@jmail.com"
            value={datosFormu.email}
            onChange={(e) => setDatosFormu({ ...datosFormu, email: e.target.value })}
            onKeyUp={validations.email}
            onBlur={validations.email}
          />
          {errors.email ? <span className="msg-error">{errors.email}</span> : ""} 
        </div>

        <div className="form-group-1">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea 
            name="comentarios" 
            id="comentarios" 
            cols="30" 
            rows="10" 
            value={datosFormu.comentarios}
            onChange={(e) => setDatosFormu({ ...datosFormu, comentarios: e.target.value })}
            onKeyUp={validations.comentarios}
            onBlur={validations.comentarios}
          />  
          {errors.comentarios ? <span className="msg-error">{errors.comentarios}</span> : ""} 
        </div>
      </form>

      <div className='botones'>
        <button className='btn_enviar' onClick={handleSend}>Enviar</button>
        
        <Link to="https://www.instagram.com/maternandojuntasyenred/" className='btn_volver'>
          Volver <img width="20" src={Img_insta} alt="img_insta" />
        </Link> 
      </div>
    </>
  )
}

export default App
