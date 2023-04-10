//filter data according to year
export function dataForChartAccordingToYear(dataBase, yearSelected) {
    let data = dataBase.filter((item) => item["Año"] === yearSelected)
    return data
  }