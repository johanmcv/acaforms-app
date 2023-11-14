
export const fechasTiempo = (fecha) => {
  const dia = fecha.getDate();
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril',
    'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  
  return { dia, mes, año };
};