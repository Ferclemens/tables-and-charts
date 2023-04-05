import { useState } from "react"
import { ExcelDateToJSDate } from "./ReadFile"

//create object with arrays of values table items
export function getItemsArray(data) {
    const arrays = {
        clients : [],
        zona : [],
        pais : [],
        producto : [],
        canalDeVenta : [],
        prioridad : [],
        fechaPedido : [],
        idPedido : [],
        fechaEnvio : [],
        unidades : [],
        precioUnitario : [],
        costeUnitario : [],
        importeVentaTotal : [],
        importeCosteTotal : [],
        año : [],
        mes : []
    }
    
    data.map((item) => {
        arrays.clients.push(item["ID Cliente"])
        arrays.zona.push(item["Zona"])
        arrays.pais.push(item["País"])
        arrays.producto.push(item["Tipo de producto"])
        arrays.canalDeVenta.push(item["Canal de venta"])
        arrays.prioridad.push(item["Prioridad"])
        arrays.fechaPedido.push(item["Fecha pedido"])
        arrays.idPedido.push(item["ID Pedido"])
        arrays.fechaEnvio.push(item["Fecha envío"])
        arrays.unidades.push(item["Unidades"])
        arrays.precioUnitario.push(item[" Precio Unitario "])
        arrays.costeUnitario.push(item[" Coste unitario "])
        arrays.importeVentaTotal.push(item[" Importe venta total "])
        arrays.importeCosteTotal.push(item[" Importe Coste total "])
        arrays.año.push(item["Año"])
        arrays.mes.push(item["Mes"])
    })
    return arrays
}

// create objet of items (key) and units (value) like a count
export function countDuplicates(data) {
    const itemsCount = {}
    data.forEach(item => {
        itemsCount[item] = itemsCount[item] +1 || 1 
    });
    return itemsCount
}

// get data array according to selected option
export function selectLabel(data, select) {
    if(select === 'options'){
        return countDuplicates(data.clients)
      }
      else if(select === 'clients') {
        return countDuplicates(data.clients)
      }  
      else if(select === 'zona') {
        return countDuplicates(data.zona)
      } 
      else if(select === 'pais') {
        return countDuplicates(data.pais)
      }
      else if(select === 'producto') {
        return countDuplicates(data.producto)
      }
      else if(select === 'canalDeVenta') {
        return countDuplicates(data.canalDeVenta)
      }  
      else if(select === 'prioridad') {
        return countDuplicates(data.prioridad)
      }  
      else if(select === 'fechaPedido') {
        return countDuplicates(data.fechaPedido)
      }  
      else if(select === 'idPedido') {
        return countDuplicates(data.idPedido)
      }  
      else if(select === 'fechaEnvio') {
        return countDuplicates(data.fechaEnvio)
      }  
      else if(select === 'unidades') {
        return countDuplicates(data.unidades)
      }  
      else if(select === 'precioUnitario') {
        return countDuplicates(data.precioUnitario)
      }  
      else if(select === 'costeUnitario') {
        return countDuplicates(data.costeUnitario)
      }  
      else if(select === 'importeVentaTotal') {
        return countDuplicates(data.importeVentaTotal)
      }  
      else if(select === 'importeCosteTotal') {
        return countDuplicates(data.importeCosteTotal)
      }
      else if(select === 'año') {
        return countDuplicates(data.año)
      }
      else if(select === 'mes') {
        return countDuplicates(data.mes)
      }  else {
        return console.log('can\'t find label :( - selectLabel()');
      }  
}

export function getMonth(serial) {
  let utc_days  = Math.floor(serial - 25568);
  let utc_value = utc_days * 86400;                                        
  let date_info = new Date(utc_value * 1000);
  
  let fractional_day = serial - Math.floor(serial) + 0.0000001;
  let total_seconds = Math.floor(86400 * fractional_day);
  let seconds = total_seconds % 60;
  total_seconds -= seconds;
  
  let dateMonth = `${date_info.getMonth()+1}`
  return dateMonth
}

export function getYear(serial) {
  let utc_days  = Math.floor(serial - 25568);
  let utc_value = utc_days * 86400;                                        
  let date_info = new Date(utc_value * 1000);
  
  let fractional_day = serial - Math.floor(serial) + 0.0000001;
  let total_seconds = Math.floor(86400 * fractional_day);
  let seconds = total_seconds % 60;
  total_seconds -= seconds;
  
  let dateYear = `${date_info.getFullYear()}` 
  return dateYear
}
