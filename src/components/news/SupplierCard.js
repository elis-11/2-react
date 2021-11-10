import { useEffect, useState } from "react";

const SupplierCard = ({ supplier, suppliers, setSuppliers }) => {

  // state for storing temporary edits
  const [supplierEdit, setSupplierEdit] = useState({...supplier})

  // SNEAK OUT ON SOME STATE => watch all the changes!

  // useEffect(() => {
  //   console.log({ supplierEdit })
  //   console.log( {suppliers} )
  // }, [supplierEdit])

  // delete existing supplier
  const deleteSupplier = async () => {
    console.log('We wanna delete ID: ', supplier._id);

    // zuerst supplier in API updated und DANACH im React State?
    // zuerst React state updatend und DANACH API ?
    try {
      await fetch(`http://localhost:5000/suppliers/${supplier._id}`, { method: "DELETE" })
  
      // delete item by filtering it out!
      const suppliersKeep = suppliers.filter((sup) => sup._id !== supplier._id);
  
      // overwrite list of suppliers with those we wanna keep / without deleted
      setSuppliers(suppliersKeep);
    }
    // if delete failed => we will get here
    catch(error) {
      console.log( error )
    }
  };

  // update existing supplier
  const updateSupplier = async () => {
    console.log( "Updating supplier...", supplierEdit )

    // map() => find item by ID and overwrite
    const updateUrl = `http://localhost:5000/suppliers/${supplierEdit._id}`

    console.log( { updateUrl } )

    const res = await fetch(updateUrl, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( supplierEdit )
    })

    const supplierUpdatedApi = await res.json()

    // loop over all items, return all items, but with some item modified...
    const suppliersUpdated = suppliers.map(supplier =>  {
      return supplier._id === supplierEdit._id ? supplierUpdatedApi : supplier
    })

    setSuppliers( suppliersUpdated )
  };

  return (
    <div key={supplier._id}>
      <form>
        <div className="card">
          <div>
            <label>Company</label>
            <input type="text" 
              value={ supplierEdit.company } 
              onChange={ (e) => setSupplierEdit({ ...supplierEdit, company: e.target.value}) }
            />
          </div>
          <div>
            <label>Contact</label>
            <input type="text" 
              defaultValue={supplierEdit.contact}
              onChange={ (e) => setSupplierEdit({ ...supplierEdit, contact: e.target.value } )} 
            />
          </div>
          <div className="actions">
            <button type="button" onClick={ updateSupplier }>
              Save
            </button>
            <button type="button" onClick={ deleteSupplier}>
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierCard;
