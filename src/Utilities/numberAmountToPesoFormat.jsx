//format number to $ ARG (get number and return a string)
export function numberAmountToPesoFormat(amount) {
    const formatPeso = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(amount);
    return formatPeso;
}