import React, {useState, useEffect, forwardRef } from "react";
import MaterialTable from "material-table";
import CustomDatePicker from '../customdatepicker/CustomDatePicker';

export default function Alertas(){

    
  useEffect(() => {
    fetch("http://localhost:8080/api/alerta/getallactivealerts")
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

  fetch("http://localhost:8080/api/alerta/getallactivealerts")
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

    { title: "Patente", field: "camion",
    render: (rowData) => {
      return <div>{rowData.camion.patente}</div>;
    },},

    { title: "Nombre del Chofer", field: 'chofer',
    render: (rowData) => {
      return <div>{rowData.chofer.nombre}</div>;
    },},

    { title: "DNI", field: 'chofer',
    render: (rowData) => {
      return <div>{rowData.chofer.dni}</div>;
    },},

    { title: "tipo alerta", field: "tipoAlerta", validate: rowData => rowData.tipoAlerta === '' ? { isValid: false, helperText: 'alerta no puede ser vacio' } : true,},
    { title: "Detalle", field: 'detalle', validate: rowData => rowData.detalle === '' ? { isValid: false, helperText: 'detalle no puede ser vacio' } : true,}
  ]


  return (
    <div className="alertas">
      <MaterialTable
        title="alertas"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTimeout(() => {
            fetch('http://localhost:8080/api/alerta/addalerta',{
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
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            setTimeout(() => {

              fetch('http://localhost:8080/api/alerta/deletealerta',{
                method:"DELETE",
                headers:{
                  'Content-type':"application/json"
                },
                body:JSON.stringify(selectedRow)
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
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {

              console.log(updatedRows);
              fetch('http://localhost:8080/api/alerta/updatealerta',{
                method:"POST",
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
        detailPanel={rowData => {
          return (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13163.748201712648!2d-58.93005901862349!3d-34.42835406573307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc82cbdbf6e833%3A0x994122aeaa12657e!2sCampus%20%22Nuestra%20Se%C3%B1ora%20del%20Pilar%22%20-%20Universidad%20del%20Salvador%20(USAL)!5e0!3m2!1sen!2sar!4v1666450415100!5m2!1sen!2sar" 
            width="100%"
            height="315"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">  
            </iframe>
          )
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
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