import { excelDateToJSDate } from "./excelDateToJSDate";
import { getMonth } from "./getMonth";
import { getYear } from "./getYear";
import { numberAmountToPesoFormat } from "./numberAmountToPesoFormat";

//Format data for Print Table (add $ ARG and date formats)
export function FormatDataToTable(data) {
  const dataJsonFormated = [];
  data.map((item) => {
    const dateSendFormated = excelDateToJSDate(item["Fecha envío"]);
    const dateRequestFormated = excelDateToJSDate(item["Fecha pedido"]);
    const unitCostFormated = numberAmountToPesoFormat(item[" Coste unitario "]);
    const unitPriceFormated = numberAmountToPesoFormat(
      item[" Precio Unitario "]
    );
    const totalCostFormated = numberAmountToPesoFormat(
      item[" Importe Coste total "]
    );
    const totalSaleFormated = numberAmountToPesoFormat(
      item[" Importe venta total "]
    );
    //Fecha_envio because understand if send product, is a sell concreted.
    const yearSell = getYear(item["Fecha envío"]);
    const monthSell = getMonth(item["Fecha envío"]);

    return dataJsonFormated.push({
      ...item,
      [" Coste unitario "]: unitCostFormated,
      [" Precio Unitario "]: unitPriceFormated,
      [" Importe Coste total "]: totalCostFormated,
      [" Importe venta total "]: totalSaleFormated,
      ["Fecha envío"]: dateSendFormated,
      ["Fecha pedido"]: dateRequestFormated,
      ["Año"]: yearSell,
      ["Mes"]: monthSell,
    });
  });
  return dataJsonFormated;
}
