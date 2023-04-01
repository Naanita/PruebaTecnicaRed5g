import React, { useState, useEffect } from "react";
import Nabvar from "./Navbar";
import "../styles/table.css";



export function Notification() {
  useEffect(() => {
    const closeButton = document.querySelector('.notification-close');
    const notification = document.querySelector('.notification');

    closeButton.addEventListener('click', () => {
      notification.style.display = 'none';
    });

    return () => {
      closeButton.removeEventListener('click', () => {
        notification.style.display = 'none';
      });
    }
  }, []);

}

export default function Table() {
  Notification();


  const data = [];
  for (let i = 0; i < 20; i++) {
    const date = '00-00-0000 00:00:00';
    const desembolso = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
    const tipoDoc = Math.random() < 0.5 ? 'Cédula' : 'Tarjeta de Identidad';
    const numDoc = Math.floor(Math.random() * 100000000000).toString().padStart(11, '0');
    const monto = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    data.push({ date, desembolso, tipoDoc, numDoc, monto });
  }
  const [color] = useState("#FFFFFF")


  return (

    <>
      <Nabvar />
      <div class="container">
        <div className="infoT">
          <h1 className="titleT">Mis desembolsos</h1>
          <p className="pT" href="#">
            <button className="btnT">
              <svg />
              Descargar
            </button>
          </p>
        </div>
        <div class="row">
          <div class="col">
            <div >
              <select className="mySelect">
                <option value="">Tipo doc.</option>
                <option value="1">Cédula</option>
                <option value="2">Tarjeta identidad</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div >
              <input class="filter1" type="text" placeholder="Número de documento" />
            </div>
          </div>
          <div class="col">
            <div >
              <input type="text" class="filter2" placeholder="Número de desembolso" />
            </div>
          </div>
          <div class="col">
            <div class="filterDate">
              <input type="date" />
            </div>
          </div>
          <div class="col">
            <div class="filterDate">
              <input type="date"
              />
            </div>
          </div>
        </div>
        <table style={{ backgroundColor: color }}>
          <thead>
            <tr>
              <th className="fir1">Fecha y hora</th>
              <th>Número de desembolso</th>
              <th>Tipo de documento</th>
              <th>Número de documento</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F7F7F7' : '#FFFFFF' }}>
                <td>{row.date}</td>
                <td>{row.desembolso}</td>
                <td>{row.tipoDoc}</td>
                <td>{row.numDoc}</td>
                <td>{`$${row.monto}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination-controls">
            <svg class="arrow-left" />
            <span class="current-page">1</span>
            <span class="total-pages">de 10</span>
            <svg class="arrow-right" />
          </div>
          <div class="pagination-records">
            <label for="records-per-page">Registros por página</label>
            <select id="records-per-page">
              <option className="optionpagination" value="20">20</option>
            </select>
          </div>
        </div>
        <div class="notification">
          <div class="notification-text">
            Pedro Pérez ha hecho una compra por valor de <strong>$1.800.000</strong>
          </div>
          <button class="notification-close">
            X
          </button>
        </div>




      </div>
    </>
  )
}