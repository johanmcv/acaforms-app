import './assets/css/style.css'
import FormControl from './include/FormControl';

const ModuloComponent = () => (
  <div className="col-md-12">
    <div className="row justify-content-center">
      <FormControl />
      <div className="col-md-12">
        <div className="card">
          <div className="d-grid d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button"><i className="fa-solid fa-plus"></i> Agregar Pregunta</button>
            <button className="btn btn-danger" type="button"><i className="fa-solid fa-trash"></i> Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModuloComponent;
