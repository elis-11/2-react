import { useState, useEffect } from "react";

const SupplierCard = ({ supplier, suppliers, setSuppliers }) => {
  //state for storing edits
  const [supplierEdit, setsupplierEdit] = useState({ ...supplier });

  // sneak out on some state => watch all the changes!
  //   useEffect(() => {
  // console.log({ supplierEdit });
  //   }, [supplierEdit])

  //delete existing supplier
  const deleteSupplier = () => {
    console.log("We wanna delete ID: ", supplier._id);
    // delete item by filtering it out!
    const suppliersKeep = suppliers.filter((sup) => sup._id !== supplier._id);

    //owerwrire list of suppliers with those we wanna keep / without delete
    setSuppliers(suppliersKeep);
  };

  // update existing supplier
  const updateSupplier = () => {
    console.log("Updating supplier...", supplierEdit);

    // take supplierEdit object => find entry in supplier list => and replace / update values
    // suppliers => []
    // supplierEdit => {}

    // UPDATE METHODE-3--MAP
    const suppliersUpdated = suppliers.map((supplier) => {
      return supplier._id !== supplierEdit._id ? supplier : { ...supplierEdit };
    });
    setSuppliers(suppliersUpdated);
    console.log({ suppliersUpdated });
  };

  return (
    <div key={supplier._id}>
      <form>
        <div className="card">
          <div>
            <label>Company </label>
            <input
              type="text"
              value={supplierEdit.company}
              onChange={(e) =>
                setsupplierEdit({ ...supplierEdit, company: e.target.value })
              }
            />
          </div>
          <div>
            <label>Contact </label>
            <input
              type="text"
              defaultValue={supplierEdit.contact}
              onChange={(e) =>
                setsupplierEdit({ ...supplierEdit, contact: e.target.value })
              }
            />
          </div>
          <div className="actions">
            <button type="button" onClick={() => updateSupplier()}>
              Save
            </button>
            <button type="button" onClick={() => deleteSupplier(supplier._id)}>
              {/* <button type="button" onClick={ deleteSupplier(supplier._id) }> */}
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SupplierCard;
