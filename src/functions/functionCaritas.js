const functionCaritas = (filas) => {
    let intentosTotales = 0;
    let anotacionesTotales = 0;
    let erroresTotales = 0;
    let omisionesTotales = 0;

    let objetoPruebaCaritas = {};
    let counter = 0;
    let temp ='';

    filas.forEach((fila) => {
        const filaTemp = {anotations: 0, errors: 0, omitions: 0};
        fila.forEach((imagen) => {
            if (imagen.anotacion === true) {
                intentosTotales = imagen.imagenIndex;
                filaTemp.anotations++;
                anotacionesTotales++;
            }
            else if (imagen.error === true) {
                intentosTotales = imagen.imagenIndex;
                filaTemp.errors++;
                erroresTotales++;
            }
        });
        if (intentosTotales > fila[3].imagenIndex) {
            filaTemp.omitions = 4 - (filaTemp.anotations + filaTemp.errors);
        }
        else {
            fila.forEach(img => {
                if (intentosTotales === img.imagenIndex) {
                    filaTemp.omitions = (img.imagenIndex % 4) - (filaTemp.anotations + filaTemp.errors);
                }
            })
        }
        counter++;
        temp = 'fila'+counter.toString();
        objetoPruebaCaritas[temp] = filaTemp;
    });
    omisionesTotales = intentosTotales - (anotacionesTotales + erroresTotales)
objetoPruebaCaritas = {intentosTotales,anotacionesTotales,erroresTotales,omisionesTotales,...objetoPruebaCaritas};
return objetoPruebaCaritas;
}

export { functionCaritas };
//export default functionCaritas