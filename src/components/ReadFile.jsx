import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { read, utils } from "xlsx";
import { useDataContext } from "../context/DataContext.jsx";
import { Link } from "react-router-dom";
import { formatColumnsToTable } from "../Utilities/formatColumnsToTable.jsx";
import { FormatDataToTable } from "../Utilities/formatDataToTable.jsx";
import { getItemsArray } from "../Utilities/getItemsArray.jsx";
import { FormatDataToCartesianChart } from "../Utilities/formatDataToCartesianChart.jsx";

const ReadFile = () => {
  const {
    setJsonData,
    setTableColumns,
    setTableData,
    setChartData,
    setCartesianChartData,
  } = useDataContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFile = async (e) => {
    const file = e.target.files[0]; //guardamos el evento en una constante
    const data = await file.arrayBuffer(); //creamos un array buffer para leerlo
    const workbook = read(data);

    const workSheet = workbook.Sheets[workbook.SheetNames[0]]; //determinamos como key de cada atributo del objeto Json a la primera fila de la planilla
    const dataJson = utils.sheet_to_json(workSheet); //convertimos a json la planilla

    //console.log('DATA', dataJson)
    setJsonData(dataJson);
    //console.log('DATAJSON', dataJson);
    setTableColumns(formatColumnsToTable(dataJson));
    setTableData(FormatDataToTable(dataJson));
    const arrays = getItemsArray(FormatDataToTable(dataJson));
    setChartData(arrays);
    const dataCartesianChart = FormatDataToCartesianChart(dataJson);
    setCartesianChartData(dataCartesianChart);
    console.log("DATA FORMATED TO CARTESIAN", dataCartesianChart);
    //console.log('DATA CHART', arrays);
  };
  return (
    <HStack justifyContent={"center"} alignItems={"center"}>
      <ButtonGroup
        gap={"4"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Button
          onClick={onOpen}
          size={"lg"}
          boxShadow={
            "rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;"
          }
          p="3"
          rounded="md"
          bg="teal.900"
          _hover={{
            background: "yellow.600",
            color: "yellow.400",
          }}
        >
          <Text>Instrucciones</Text>
        </Button>
        <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="rgba(11,7,3,1)" color="yellow.500">
            <DrawerCloseButton />
            <DrawerHeader fontSize={"xl"}>Instrucciones de uso</DrawerHeader>
            <DrawerBody px={"6"} fontSize={"lg"}>
              <Text>
                La app esta optimizada para el archivo xlsx "Listado de registro
                de ventas de productos en Excel" que lo
                pueden descargar desde:{" "}
                <a
                  href="https://buscarv.com/plantillas/listados-con-datos-de-ejemplo-para-descargar/#Listado_de_registro_de_ventas_de_productos_en_Excel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://buscarv.com/plantillas/listados-con-datos-de-ejemplo-para-descargar/#Listado_de_registro_de_ventas_de_productos_en_Excel
                </a>
              </Text>
              <Text>
                Una vez descargado, lo suben desde el boton "Cargar archivo xlsx".
                Se despliega la tabla en el navegador donde pueden navegar entre
                las páginas de la tabla, o buscar datos específicos con el
                buscador. Si van al boton "Gráficos" pueden ver comparaciones
                gráficas de los datos cargados.
              </Text>
              <Text>
                Mientras se respeten los encabezados de la tabla, la app
                funciona correctamente. Por lo tanto pueden tabular datos reales
                de su empresa con esos encabezados y verlos en el browser.
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box
          position={"relative"}
          boxShadow={
            "rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;"
          }
          p="3"
          rounded="md"
          bg="teal.900"
          _hover={{
            background: "yellow.600",
            color: "yellow.400",
          }}
        >
          <label className="load--label" for="file-upload">
            Cargar archivo xlsx
          </label>
          <input
            className="load--file"
            type="file"
            id="file-upload"
            onChange={(e) => handleFile(e)}
            position={"absolute"}
          ></input>
        </Box>
        <Link to="charts">
          <Button
            size={"lg"}
            boxShadow={
              "rgba(0, 0, 0, 0.4) 4px 4px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -6px, rgba(0, 0, 0, 0.4) -2px -2px 0px inset;"
            }
            p="3"
            rounded="md"
            bg="teal.900"
            _hover={{
              background: "yellow.600",
              color: "yellow.400",
            }}
          >
            Gráficos
          </Button>
        </Link>
      </ButtonGroup>
    </HStack>
  );
};

export default ReadFile;
