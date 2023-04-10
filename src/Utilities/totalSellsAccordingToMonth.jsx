export function totalSellsAccordingToMonth (array) {
    let january = 0
    let february = 0
    let march = 0
    let april = 0
    let may = 0
    let june = 0
    let july = 0
    let august = 0
    let september = 0
    let october = 0
    let november = 0
    let december = 0

    array.map((item) => {
      if(item["Mes"] === "1"){
        january += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "2"){
        february += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "3"){
        march += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "4"){
        april += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "5"){
        may += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "6"){
        june += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "7"){
        july += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "8"){
        august += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "9"){
        september += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "10"){
        october += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "11"){
        november += Math.floor(item[" Importe venta total "]) 
      }
      if(item["Mes"] === "12"){
        december += Math.floor(item[" Importe venta total "]) 
      }
    })
    let dataMonth = 
    {
      'January' : january,
      'February' : february,
      'March' : march,
      'April' : april,
      'May' : may,
      'June' : june,
      'July' : july,
      'August' : august,
      'September' : september,
      'October' : october,
      'November' : november,
      'December' : december,
    }
    return dataMonth
  }