import PropTypes from 'prop-types';

const TuMenuLateral = ({ onMenuClick }) => {
  const handleClick = (opcion) => {
    // Llamar a la función onMenuClick pasando la opción
    if (onMenuClick) {
      onMenuClick(opcion);
    }
  };

  return (
    <ul className="list-group TuMenuLateral_ULprincipal">
      <li className="list-group-item" onClick={() => handleClick('inicio')} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-house"></i> Inicio
      </li>
      <li className="list-group-item" onClick={() => handleClick('creacionEncuestas')} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-plus"></i> Creación de encuestas
      </li>
      <li className="list-group-item" onClick={() => handleClick('resultados')} style={{ cursor: 'pointer' }}>
        <i className="fa-regular fa-folder"></i> Resultados
      </li>
      <li className="list-group-item" onClick={() => handleClick('informacion')} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-circle-info"></i> Información
      </li>
      <li className="list-group-item list-group-item-danger" onClick={() => handleClick('salir')} style={{ cursor: 'pointer' }}>
        <i className="fa-solid fa-xmark"></i> Salir
      </li>
    </ul>
  );
};

TuMenuLateral.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
};

export default TuMenuLateral;
