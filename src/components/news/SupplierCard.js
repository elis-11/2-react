import React from "react";

const SupplierCard = () => {
  return (
    <div key={supplier._id}>
      <form>
        <div className="card">
          <div>
            <label>Company: </label>
            <input type="text" defaultValue={supplier.company} />
          </div>
          <div>
            <label>Contact: </label>
            <input type="text" defaultValue={supplier.contact} />
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
  );
};

export default SupplierCard;
