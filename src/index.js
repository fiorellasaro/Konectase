const { Pool } = require('pg');

const config = {

    user: 'andreamonroy',
    // host: '161.132.208.106',
    host: 'localhost',
    password: '',
    database: 'konectase',
    port: 5432,

}

const pool = new Pool(config);

const familiar1 = {
    parentesco: 'Esposa',
    edad: 28,
    trabaja: true,
}

const familiar2 = {
    parentesco: 'hij@',
    edad: 6,
    trabaja: false,
}


const experienciaUno ={
    flag_se: 0,
    flag_ec: 1,
    flag_eo: 0,

    se_p_redes: '',
    se_p_ventas: '',
    se_p_atc: '',
    se_p_crosselling: '',
    se_p_backof: '',
    se_expect_salarial: [,],

    ec_empresa: 'ATENTO',
    ec_cliente: 'Movistar',
    ec_rubro_cliente: 'TELECOMUNICACIONES',
    ec_segmento: 'ATENCION AL CLIENTE',
    ec_tiempo_exp: 6,
    ec_retribucion_basico: 1000,
    ec_retribucion_comisiones: 300,

    eo_empresa: '',
    eo_rubro_empresa: '',
    eo_puesto: '',
    eo_tiempo_exp: 0,
    eo_retribucion_basico: 0,
    eo_retribucion_comisiones: 0


}

const experienciaDos ={
    flag_se: 0,
    flag_ec: 0,
    flag_eo: 1,

    se_p_redes: '',
    se_p_ventas: '',
    se_p_atc: '',
    se_p_crosselling: '',
    se_p_backof: '',
    se_expect_salarial: [,],

    ec_empresa: '',
    ec_cliente: '',
    ec_rubro_cliente: '',
    ec_segmento: '',
    ec_tiempo_exp: 0,
    ec_retribucion_basico: 0,
    ec_retribucion_comisiones: 0,

    eo_empresa: 'Chilis',
    eo_rubro_empresa: 'restaurant',
    eo_puesto: 'Atencion al cliente',
    eo_tiempo_exp: 8,
    eo_retribucion_basico: 800,
    eo_retribucion_comisiones: 300
}




const form = {

    //postulante
    tipodoc: 'DNI',
    numdoc: '11111111',
    nombres: 'Andrea',
    apellido_p: 'Monroy',
    apellido_m: 'Carrillo',
    nombre_social: '',
    nacionalidad: 'Peruana',
    estado_civil: 'Soltera',
    fecha_nac: '1995-01-08',
    genero: 'Femenino',
    correo: 'andrea@kambista.com',
    telefono: 921130144,
    coordenadas_direccion: [1.23254,-2.00655],
    text_direccion: 'Av. Guardia Republica, Rimac',
    n_hijos: 0,
    como_konecta: 'Referidos',
    referidos: 'Fiorella Sanchez',

    //datos profesionales
    grado_formacion: 'Universidad',
    institucion: 'Universidad de Lima',
    estado_estudios: 'Incompleta',
    rubro_carrera: '',
    coord_estudio: [,], //PASAR UNDEFINED SI NO TIENE QUE LLENAR ESTE DATO
    text_dir_estudio: '',
    horario_estudio: 'TARDE',

    //datos experiencia
    experienciaPostulante: [experienciaUno, experienciaDos],

    //datos rotacion
    actividades: 'Musica',
    coord_actividad: [1.342,2.332],
    text_dir_actividad: 'Jr. tarantula 889',
    horario_actividad: 'Noche',
    fam_postulante: 2,
    motivacion: 'Viajar',
    actividad_tiempo_libre: ["Cine", "Comer", "Familia"],
    sede_preferencia: ["Fenix", "Sudameris", "Crillon"],


    //datos familiares
    familiares: [familiar1, familiar2],

}


const postPostulante = async (form) => {
    try{
        const text = 'INSERT INTO POSTULANTE(TIPODOC, NUMDOC, NOMBRES, APELLIDO_P, APELLIDO_M, NOMBRE_SOCIAL, NACIONALIDAD, ESTADO_CIVIL, FECHA_NAC, GENERO, CORREO, TELEFONO, COORD_DIRECCION, TEXT_DIRECCION, N_HIJOS, COMO_KONECTA, REFERIDOS) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *'
        const values = [form.tipodoc, form.numdoc, form.nombres, form.apellido_p, form.apellido_m, form.nombre_social, form.nacionalidad, form.estado_civil, form.fecha_nac, form.genero, form.correo,form.telefono ,'('+form.coordenadas_direccion[0]+','+form.coordenadas_direccion[1]+')',form.text_direccion ,form.n_hijos, form.como_konecta, form.referidos]
        const res = await pool.query(text, values);
        console.log(res.rows[0].id_postulante);
        await postDatosProfesionales(form, res.rows[0].id_postulante);
        await postDatosExperiencia(form.experienciaPostulante, res.rows[0].id_postulante);
        await postDatosRotacion(form, res.rows[0].id_postulante);
        await postFamiliares(form.familiares, res.rows[0].id_postulante);
    }catch(e){
        console.log(e);
    }
}


const postDatosProfesionales = (form, id) => {
    try{
        if(form.coord_estudio[0]==undefined || form.coord_estudio[1]==undefined){
            const text = 'INSERT INTO DATOS_PROFESIONALES(GRADO_FORMACION, INSTITUCION, ESTADO_ESTUDIOS, RUBRO_CARRERA, TEXT_DIR_ESTUDIO, HORARIO_ESTUDIO, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6,$7)'
            const values = [form.grado_formacion, form.institucion, form.estado_estudios, form.rubro_carrera,form.text_dir_estudio, form.horario_estudio, id]
            const res = pool.query(text, values);
            console.log(res.rows);

        }else{
            const text = 'INSERT INTO DATOS_PROFESIONALES(GRADO_FORMACION, INSTITUCION, ESTADO_ESTUDIOS, RUBRO_CARRERA, COORD_ESTUDIO, TEXT_DIR_ESTUDIO, HORARIO_ESTUDIO, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
            const values = [form.grado_formacion, form.institucion, form.estado_estudios, form.rubro_carrera,'('+form.coord_estudio[0]+','+form.coord_estudio[1]+')',form.text_dir_estudio, form.horario_estudio, id]
            const res =  pool.query(text, values);
            console.log(res.rows);

        }        
        
    }catch(e){
        console.log(e);
    }
}


const postDatosExperiencia = (experiencia, id) => {
    try{

        for(i=0; i<experiencia.length; i++){
            
            if(experiencia[i].flag_se==1){
                console.log('hola sin experiencia');
                const text = 'INSERT INTO DATOS_EXPERIENCIA(FLAG_SE, FLAG_EC, FLAG_EO, SE_P_REDES, SE_P_VENTAS, SE_P_ATC, SE_P_CROSSELLING, SE_P_BACKOF, SE_EXPECT_SALARIAL, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10)'
                const values = [experiencia[i].flag_se, experiencia[i].flag_ec, experiencia[i].flag_eo, experiencia[i].se_p_redes, experiencia[i].se_p_ventas, experiencia[i].se_p_atc, experiencia[i].se_p_crosselling, experiencia[i].se_p_backof, '{'+experiencia[i].se_expect_salarial[0]+ ','+experiencia[i].se_expect_salarial[1]+ '}', id]
                const res = pool.query(text, values);
                console.log(res.rows);

            } 
            else {
                if(experiencia[i].flag_ec==1){
                    console.log('hola con experiencia call');
                    const text = 'INSERT INTO DATOS_EXPERIENCIA(FLAG_SE, FLAG_EC, FLAG_EO, EC_EMPRESA, EC_CLIENTE, EC_RUBRO_CLIENTE, EC_SEGMENTO, EC_TIEMPO_EXP, EC_RETRIBUCION_BASICO, EC_RETRIBUCION_COMISIONES, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10, $11)'
                    const values = [experiencia[i].flag_se, experiencia[i].flag_ec, experiencia[i].flag_eo, experiencia[i].ec_empresa , experiencia[i].ec_cliente, experiencia[i].ec_rubro_cliente, experiencia[i].ec_segmento, experiencia[i].ec_tiempo_exp, experiencia[i].ec_retribucion_basico, experiencia[i].ec_retribucion_comisiones, id]
                    const res =  pool.query(text, values);
                    console.log(res.rows);
                }
                else{
                    console.log('hola con experiencia otros');
                    const text = 'INSERT INTO DATOS_EXPERIENCIA(FLAG_SE, FLAG_EC, FLAG_EO, EO_EMPRESA, EO_RUBRO_EMPRESA, EO_PUESTO, EO_TIEMPO_EXP, EO_RETRIBUCION_BASICO, EO_RETRIBUCION_COMISIONES, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10)'
                    const values = [experiencia[i].flag_se, experiencia[i].flag_ec, experiencia[i].flag_eo, experiencia[i].eo_empresa, experiencia[i].eo_rubro_empresa, experiencia[i].eo_puesto, experiencia[i].eo_tiempo_exp, experiencia[i].eo_retribucion_basico, experiencia[i].eo_retribucion_comisiones, id]
                    const res = pool.query(text, values);
                    console.log(res.rows);
                }
            }

        }     
        
    }catch(e){
        console.log(e);
    }
}


const postDatosRotacion = (form, id) => {
    try{
        if(form.coord_actividad[0]==undefined || form.coord_actividad[1]==undefined){
            const text = 'INSERT INTO DATOS_ROTACION(ACTIVIDADES, FAM_POSTULANTE, MOTIVACION, ACTIVIDAD_TIEMPO_LIBRE, SEDE_PREFERENCIA, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6)'
            const values = [form.actividades, form.fam_postulante, form.motivacion, '{'+form.actividad_tiempo_libre[0]+ ','+form.actividad_tiempo_libre[1]+ ','+form.actividad_tiempo_libre[2]+'}', '{'+form.sede_preferencia[0]+ ','+form.sede_preferencia[1]+ ','+form.sede_preferencia[2]+'}', id]
            const res =  pool.query(text, values);
            console.log(res.rows);

        }else{
            const text = 'INSERT INTO DATOS_ROTACION(ACTIVIDADES, COORD_ACTIVIDAD, TEXT_DIR_ACTIVIDAD, HORARIO_ACTIVIDAD, FAM_POSTULANTE, MOTIVACION, ACTIVIDAD_TIEMPO_LIBRE, SEDE_PREFERENCIA, ID_POSTULANTE) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            const values = [form.actividades,'('+form.coord_actividad[0]+','+form.coord_actividad[1]+')',form.text_dir_actividad, form.horario_actividad,form.fam_postulante, form.motivacion, '{'+form.actividad_tiempo_libre[0]+ ','+form.actividad_tiempo_libre[1]+ ','+form.actividad_tiempo_libre[2]+'}', '{'+form.sede_preferencia[0]+ ','+form.sede_preferencia[1]+ ','+form.sede_preferencia[2]+'}', id]
            const res =  pool.query(text, values);
            console.log(res.rows);

        }        
        
    }catch(e){
        console.log(e);
    }
}

const postFamiliares = (familiares, id) => {
    try{
        for(i=0; i<familiares.length; i++){
            
                console.log('hola familiar: '+i);
                const text = 'INSERT INTO DATOS_FAMILIARES(PARENTESCO, EDAD, TRABAJA, ID_POSTULANTE) VALUES ($1, $2, $3, $4)'
                const values = [familiares[i].parentesco, familiares[i].edad,familiares[i].trabaja, id]
                const res = pool.query(text, values);
                console.log(res.rows);

        }     
        
    }catch(e){
        console.log(e);
    }
}

const getExperiencia = async () => {

    try {
        const res = await pool.query('select * from DATOS_FAMILIARES');
        // id del primer elemento console.log(res.rows[0].id);
        console.log(res.rows);

        //usar cuando terminas de usar la base de datos
        //pool.end();
    } catch (e) {
        console.log(e);
    }
}


//console.log(form.experienciaPostulante);
//postDatosExperiencia(form.experienciaPostulante, 2);
//postPostulante(form);


getExperiencia();