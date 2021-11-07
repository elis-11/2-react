import {useState} from "react";
import "./News.scss";

const News = () => {
const [suppliers, setSuppliers] = useState([
  {_id: 's1', company:'SU GmbH', contact: 'Albert', phone: '+496328642'},
  {_id: 's2', company:'SE GmbH', contact: 'Bob', phone: '+496328642'},
])
const jsxSuppliers =suppliers.map((supplier) =>(
  <div key={supplier._id}>
<form>
  <div>
  <label>Company: </label><input type="text" name="company" value={ supplier.company } />
  <label>Contact: </label><input type="text" name="contact" value={ supplier.contact } />
  </div>
</form>
  </div>
))
  return (
    <div className="News content">
      <header className='News-header'>
      <h2>News</h2>
      <h2>UseState with Objects</h2>
      {jsxSuppliers}
      </header>
    </div>
  );
};

export default News;
