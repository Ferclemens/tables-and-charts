import { countDuplicates } from "./countDuplicates"

// get data array according to selected option
export function selectLabelOption(data, select) {
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