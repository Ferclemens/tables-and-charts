import { excelDateToJSDate } from "./excelDateToJSDate"
import { getMonth } from "./getMonth"
import { getYear } from "./getYear"

// format data to be render in carteasin charts (area and bar charts)
export function FormatDataToCartesianChart(data) {
    const dataJsonFormated = []
    data.map((item) => {
        const dateSendFormated = excelDateToJSDate(item["Fecha envío"])
        const dateRequestFormated = excelDateToJSDate(item["Fecha pedido"])
        const yearSell = getYear(item["Fecha envío"])
        const monthSell = getMonth(item["Fecha envío"])
            
        return dataJsonFormated.push({
            ...item,
            ["Fecha envío"] : dateSendFormated,
            ["Fecha pedido"] : dateRequestFormated,
            ["Año"] : yearSell,
            ["Mes"] : monthSell
        })

    })
    return dataJsonFormated
}