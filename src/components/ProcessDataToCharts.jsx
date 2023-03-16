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
    }
    
    data.map((item) => {
        arrays.clients.push(item.ID_cliente)
        arrays.zona.push(item.Zona)
        arrays.pais.push(item.Pais)
        arrays.producto.push(item.Producto)
        arrays.canalDeVenta.push(item.Canal_de_venta)
        arrays.prioridad.push(item.Prioridad)
        arrays.fechaPedido.push(ExcelDateToJSDate(item.Fecha_pedido))
        arrays.idPedido.push(item.ID_pedido)
        arrays.fechaEnvio.push(ExcelDateToJSDate(item.Fecha_envio))
        arrays.unidades.push(item.Unidades)
        arrays.precioUnitario.push(item.Precio_unitario)
        arrays.costeUnitario.push(item.Coste_unitario)
        arrays.importeVentaTotal.push(item.Importe_venta_total)
        arrays.importeCosteTotal.push(item.Importe_coste_total)
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
      }  else {
        return console.log('can\'t find label :( - selectLabel()');
      }  
}
