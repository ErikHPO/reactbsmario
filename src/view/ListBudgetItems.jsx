import React, { useEffect, useState } from 'react';
import api from "../components/api";

function BuildItemList (props) {
  // console.log("BUILDITEM_>",props.item);
  return(
    
       <div class="card text-center">
       <div class="card-header">
         ORÇAMENTO: {props.budget.Key}
       </div>
       <div class="card-body">
       <table class="table">
       <thead>
         <tr>
           <th scope="col">ItemCod</th>
           <th scope="col">Desc.</th>
           <th scope="col">UM</th>
           <th scope="col">Prec. Unit.</th>
           <th scope="col">Quant.</th>
           <th scope="col">Val. Total</th>
         </tr>
       </thead>
     
       
       <tbody>
      {props.item.map( item => 
      <>
         <tr>
           <th scope="row">{item.itemCod}</th>
           <td>{item.itemDesc}</td>
           <td>{item.itemUnid}</td>
           <td> R$ {item.itemPrecUnit} </td>
           <td> {item.itemQuant} </td>
           <td> R$ {item.itemVlrTotalBDI} </td>
         </tr>    
      </>
      )}
      </tbody>
      </table>
      
       <div class="card-footer text-muted">
         STATUS: {props.budget.Record.Status}
      </div>
       </div>
      </div>
  )
  
}

const ListAllItems = (props) => {
    const [ itemList , setItemList] = useState([]);
    useEffect( () => {
        api.get('/items/')
        .then(function (response) {
        setItemList(response.data)
        // console.log("ITEMLIST>",itemList);
          
        })
        .catch(function (error) {
          console.log("GET ITEM ERROR->",error);
        })     
      }, [])


      if(itemList){
        
        return <BuildItemList {...props} item={itemList}/>
      } 


      return( 
        <div>Não foi possível buscar no banco de dados.</div>
      )
}
    

export default ListAllItems;