import { ExcelDateToJSDate } from "./ReadFile"

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

export function countDuplicates(data) {
    const itemsCount = {}
    data.forEach(item => {
        itemsCount[item] = itemsCount[item] +1 || 1 
    });
    return itemsCount
}
