import { useState } from "react";
import "./News.scss";

const News = () => {

  const supplierDefault = {
    company: "",
    contact: "",
    phone: ""
  };
  const [supplierNew, setSupplierNew] = useState( supplierDefault );

  const [suppliers, setSuppliers] = useState([
    { _id: "s1", company: "SU GmbH", contact: "Albert", phone: "+496328642" },
    { _id: "s2", company: "SE GmbH", contact: "Bob", phone: "+496328642" },
  ]);

  // add new supliers
  const addSupplier = (e) => {
    e.preventDefault(); // prevent that page is reloaded
    console.log("New Supplier to add:", supplierNew);

    // create copy of OLD entries and merge with NEW entry
    const suppliersNew = [...suppliers, supplierNew];
    setSuppliers(suppliersNew);
    setSupplierNew({...supplierDefault});
  };

  const jsxSuppliers = suppliers.map((supplier) => (
    <div key={supplier._id}>
      <form>
        <div>
          <label>Company: </label>
          <input type="text" name="company" value={supplier.company} />
          <label>Contact: </label>
          <input type="text" name="contact" value={supplier.contact} />
        </div>
      </form>
    </div>
  ));
  return (
    <div className="News content">
      <header className="header">
        <h2>News</h2>
        <h2>UseState with Objects</h2>
        {jsxSuppliers}
        <div style={{ padding: "10px" }}>
          {/*ADD NEW SUPPLIER FORM */}
          <form onSubmit={addSupplier}>
            <label>New Supplier: </label>
            <input
              type="text"
              placeholder="Company... "
              onChange={(e) =>
                setSupplierNew({ ...setSupplierNew, company: e.target.value })
              }
              value={supplierNew.company}
            />
            <input
              type="text"
              placeholder="Contact... "
              onChange={(e) =>
                setSupplierNew({ ...setSupplierNew, contact: e.target.value })
              }
              value={supplierNew.contact}
            />
            <input
              type="text"
              placeholder="Phone... "
              onChange={(e) =>
                setSupplierNew({ ...setSupplierNew, phone: e.target.value })
              }
              value={supplierNew.phone}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default News;
