import { useState } from "react";
import "./News.scss";

const News = () => {
  const supplierDefault = {
    company: "",
    contact: "",
    phone: "",
  };

  const [supplierNew, setSupplierNew] = useState(supplierDefault);

  // default dummy suppliers
  const [suppliers, setSuppliers] = useState([
    {
      _id: "s1",
      company: "Supply Unlimited GmbH",
      contact: "Albert",
      phone: "+4912345",
    },
    {
      _id: "s2",
      company: "Supply you as we can ltd",
      contact: "Rob",
      phone: "+496789",
    },
  ]);

  // add new supliers
  const addSupplier = (e) => {
    e.preventDefault(); // prevent that page is reloaded
    console.log("New Supplier to add:", supplierNew);

    // create copy of OLD entries and merge with NEW entry
    const suppliersNew = [...suppliers, supplierNew];

    //update supplier list and trigger re-render
    setSuppliers(suppliersNew);
    setSupplierNew({ supplierDefault }); //clear supplier add form
  };

  //delete existing supplier
  const deleteSupplier = (idSupplierToDelete) => {
    console.log("We wanna delete ID:", idSupplierToDelete);

    // delete item by filtering it out!
    const suppliersKeep = suppliers.filter(
      (supplier) => supplier._id !== idSupplierToDelete
    );

    //owerwrire list of suppliers with those we wanna keep / without delete
   setSuppliers (suppliersKeep)
  };

  // RENDER LIST of suppliers
  const jsxSuppliers = suppliers.map((supplier) => (
    <div key={supplier._id}>
      <form>
        <div className="card">
          <div>
            <label>Company: </label>
            <input type="text" value={supplier.company} />
          </div>
          <div>
            <label>Contact: </label>
            <input type="text" value={supplier.contact} />
          </div>
          <div className="actions">
            <button type="button" onClick={() => deleteSupplier(supplier._id)}>
            {/* <button type="button" onClick={ deleteSupplier(supplier._id) }> */}
              X
            </button>
          </div>
        </div>
      </form>
    </div>
  ));
  return (
    <div className="News content">
      <header className="header">
        <h2>News</h2>
        <h2>UseState with Objects</h2>
        <h2>Suppliers</h2>
        {jsxSuppliers}
        {/* {jsxSuppliers} */}
        <div>
          {/* ADD new supplier form */}
          <form className="frmAdd" onSubmit={addSupplier}>
          {/* <form className="frmAdd" onSubmit={ () => addSupplier() }> */}
            <label>New Supplier: </label>
            <div>
              <input
                type="text"
                placeholder="Company..."
                onChange={(e) =>
                  setSupplierNew({ ...supplierNew, company: e.target.value })
                }
                value={supplierNew.company}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Contact..."
                onChange={(e) =>
                  setSupplierNew({ ...supplierNew, contact: e.target.value })
                }
                value={supplierNew.contact}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone..."
                onChange={(e) =>
                  setSupplierNew({ ...supplierNew, phone: e.target.value })
                }
                value={supplierNew.phone}
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default News;
