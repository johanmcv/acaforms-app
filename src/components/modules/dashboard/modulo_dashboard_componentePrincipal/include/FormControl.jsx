const FormControl = () => (
    <div className="col-md-12">
        <div className="card">
            <form>
                <input className="form-control form-control-lg" type="text" placeholder="Título pregunta"></input><br />
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Descripción"></textarea>
            </form>
            <div className="col-md-12 form-barra">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-grid d-md-flex justify-content-md-start">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Respuesta abierta</label>
                            </div>                
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccion Multiple</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-grid d-md-flex justify-content-md-end">
                            <button className="btn btn-success me-md-2" type="button"><i className="fa-solid fa-floppy-disk"></i> Guardar</button>
                            <button className="btn btn-danger" type="button"><i className="fa-solid fa-close"></i> Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default FormControl;