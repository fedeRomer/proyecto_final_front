import React, {useState, useEffect, forwardRef } from "react";
import MaterialTable from "material-table";
import CustomDatePicker from '../customdatepicker/CustomDatePicker';

export default function Choferes(){

    
  useEffect(() => {
    fetch("http://localhost:8080/api/chofer/all")
    .then(response => {
      if(!response.ok){
        alert('error')
      }else{
        return response.json()
      }
    })
    .then(response => {
      console.log(response)
      setData(response)
    })
}, [])


function refreshTable() {

  fetch("http://localhost:8080/api/chofer/all")
    .then(response => {
      if(!response.ok){
        alert('error')
      }else{
        return response.json()
      }
    })
    .then(response => {
      console.log(response)
      setData(response)
    })


}


  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Nombre", field: "nombre", validate: rowData => rowData.nombre === '' ? { isValid: false, helperText: 'nombre no puede ser vacio' } : true,},
    { title: "DNI", field: 'dni',type: "numeric",validate: rowData =>  rowData.dni > 1000000 && rowData.dni < 99999999},
  ]


  return (
    <div className="Choferes">
      <MaterialTable
        title="Choferes"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTimeout(() => {
            fetch('http://localhost:8080/api/chofer',{
              method:"POST",
              headers:{
                'Content-type':"application/json"
              },
              body:JSON.stringify(newRow)
            }).then(response=>response.json())
            .then(response=>{
              alert(response.response)
              console.log(response)
              refreshTable()
            }).catch((error) =>{
              console.log(error);
            })
            resolve()
          }, 500)}),
          onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {

              console.log(updatedRows);
              fetch('http://localhost:8080/api/chofer',{
                method:"PUT",
                headers:{
                  'Content-type':"application/json"
                },
                body:JSON.stringify(updatedRow)
              }).then(response=>response.json())
              .then(response=>{
                alert(response.response)
                console.log(response)
                refreshTable()
              }).catch((error) =>{
                console.log(error);
              })
              resolve()
            }, 500)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first",
          exportButton: true
        }}
        localization={{
          pagination: {
              labelDisplayedRows: '{from}-{to} of {count}'
          },
          pagination: {
              labelRowsSelect: 'Filas'
          },
          toolbar: {
              nRowsSelected: '{0} fila(s) seleccionadas',
              searchPlaceholder: 'Buscar',
              exportTitle: 'Exportar',
              exportName: 'Exportar como',
              exportAriaLabel: 'Exportar como'
          },
          header: {
              actions: 'Acciones'
          },
          body: {
              emptyDataSourceMessage: 'No hay registros para mostrar',
              filterRow: {
                  filterTooltip: 'Filtrar'
              },
              editRow: {
                  deleteText: '¿Está seguro de eliminar este registro?'  
              },
              addTooltip: 'Añadir'
          }
      }}
      />
    </div>
  );
}