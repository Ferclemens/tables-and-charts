//create object with array of values from head table
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