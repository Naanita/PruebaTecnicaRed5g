import React from "react";
import swal from "sweetalert2"
import "../styles/login.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function rectangle1_svg() {
    window.addEventListener('load', function () {
        var svgContainer = document.getElementById('rectangles1');
        var svg = svgContainer.querySelector('svg');



        var containerWidth = svgContainer.offsetWidth;
        var svgWidth = svg.offsetWidth;
        var containerHeight = svgContainer.offsetHeight;
        var svgHeight = svg.offsetHeight;
        svg.style.left = ((containerWidth - svgWidth) / 2) + 'px';
        svg.style.top = ((containerHeight - svgHeight) / 2) + 'px';
        svg.style.opacity = 1;
        setTimeout(function () {
            svg.style.left = '30%';
            svg.style.top = '10%';
            svg.style.top = '0';

        }, 1000);

        svg.style.transition = 'all 2s ease-in-out';
    });
}
export function point1_svg() {
    window.addEventListener('load', function () {
        var svgContainer = document.getElementById('point1');
        var svg = svgContainer.querySelector('svg');



        var containerWidth = svgContainer.offsetWidth;
        var svgWidth = svg.offsetWidth;
        var containerHeight = svgContainer.offsetHeight;
        var svgHeight = svg.offsetHeight;
        svg.style.left = ((containerWidth - svgWidth) / 2) + 'px';
        svg.style.top = ((containerHeight - svgHeight) / 2) + 'px';
        svg.style.opacity = 1;
        setTimeout(function () {
            svg.style.left = '12%';
            svg.style.top = '16%';
            svg.style.top = '0';

        }, 1000);

        svg.style.transition = 'all 2s ease-in-out';
    });
}
export function rectangle2_svg() {
    window.addEventListener('load', function () {
        var svgContainer = document.getElementById('rectangles2');
        var svg = svgContainer.querySelector('svg');



        var containerWidth = svgContainer.offsetWidth;
        var svgWidth = svg.offsetWidth;
        var containerHeight = svgContainer.offsetHeight;
        var svgHeight = svg.offsetHeight;
        svg.style.right = ((containerWidth - svgWidth) / 2) + 'px';
        svg.style.top = ((containerHeight - svgHeight) / 2) + 'px';
        svg.style.opacity = 1;
        setTimeout(function () {
            svg.style.right = '30%';
            svg.style.top = '70%';
            svg.style.top = '0';

        }, 1000);

        svg.style.transition = 'all 2s ease-in-out';
    });
}
export function point2_svg() {
    window.addEventListener('load', function () {
        var svgContainer = document.getElementById('point2');
        var svg = svgContainer.querySelector('svg');



        var containerWidth = svgContainer.offsetWidth;
        var svgWidth = svg.offsetWidth;
        var containerHeight = svgContainer.offsetHeight;
        var svgHeight = svg.offsetHeight;
        svg.style.right = ((containerWidth - svgWidth) / 2) + 'px';
        svg.style.top = ((containerHeight - svgHeight) / 2) + 'px';
        svg.style.opacity = 1;
        setTimeout(function () {
            svg.style.right = '0%';
            svg.style.top = '20%';
            svg.style.top = '0';

        }, 1000);

        svg.style.transition = 'all 2s ease-in-out';
    });
}
export function redpoint1() {
    window.addEventListener("load", function () {
        let redpoint1 = document.getElementById("redpoint1");
        redpoint1.style.opacity = 1; /* establecemos la opacidad en 1 para mostrar el SVG */
    });
}
export function redpoint2() {
    window.addEventListener("load", function () {
        let redpoint1 = document.getElementById("redpoint2");
        redpoint1.style.opacity = 1; /* establecemos la opacidad en 1 para mostrar el SVG */
    });
}


export default function Login() {
    rectangle1_svg();
    point1_svg();
    rectangle2_svg();
    point2_svg();
    redpoint1();
    redpoint2();
    const history = useNavigate();
    const [error, setError] = useState({});
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
    })

    const expcorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;


    const handlerChange = (e) => {
        e.preventDefault();
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    
        // Agregar esta condición
        if (e.target.value !== '' && e.target.value.length < 10) {
            setError(
                validation({
                    ...formData,
                    [e.target.name]: e.target.value,
                })
            );
        }
    }
    
const handlerSubmit = (e) =>{
    e.preventDefault();

  // Verificar si hay errores en el objeto "errors"
  const hasErrors = Object.keys(error).some((key) => error[key] !== undefined);
if(hasErrors){
    new swal("Ups!", "Revisa tus datos, tienes errores", "error");
}
  // Si no hay errores, continuar con el siguiente paso
  else {
    new swal ("Estupendo!", "disfruta", "success") && history("/table")
  }
};

function validation(formData) {
    let errors = {};
  
    // Verificar si el campo de correo electrónico está vacío
    if (!formData.email) {
      errors.email = new swal("Ups!", "Para ingresar escribe un correo", "warning");
    } else if (formData.email.length < 10) {
      errors.email = new swal("Ups!", "El correo electrónico debe tener al menos 10 caracteres", "warning");
    } else if (!expcorreo.test(formData.email)) {
      errors.email = new swal("Ups!", "Eso no parece un correo", "warning");
    }
  
    // Verificar si el campo de contraseña está vacío
    if (!formData.password) {
      errors.password = new swal("Ups!", "Escribe tu contraseña", "warning");
    }
  
    return errors;
  }
    return (

        <div className="pageLogin">
            <div id="rectangles1">
                <svg />
            </div>
            <div id="rectangles2">
                <svg />
            </div>
            <div className="login">
                <div id="point1">
                    <svg />
                </div>
                <div id="point1">
                    <svg />

                </div>

                <div className="info">
                    <a href="/"><svg className="logo" /></a>
                    
                    <h1 className="txt1">Sufipay</h1>
                    <p className="txt2">Administrador comercial</p>
                </div>

                <form  onSubmit={(e) => handlerSubmit(e)}>
                    <div className="form">
                    <input
                        className="input"
                        type="email"
                        placeholder="Usuario"
                        required
                        value={formData.email}
                        name="email"
                        onChange={(e)=> handlerChange(e)}
                    ></input>
                    <input
                        className="input2"
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        required
                        name="password"
                        onChange={(e) => handlerChange(e)}
                    ></input>
                </div>
                <button
                    className="btn"
                    type="submit"
                  disabled={error.email || error.password}
                >
                    INGRESAR
                </button>
                <div id="point2">
                    <svg />
                </div>
                <p className="forget">
                    <a href="/" className="forgetLink">
                        No recuerdo tu contraseña
                    </a>
                </p>
                
                </form>
                <div id="redpoint1">
                    <svg />
                </div>
                <div id="redpoint2">
                    <svg />
                </div>
            </div>
        </div>
    );
}
