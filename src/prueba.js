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


const getPrueba = async () => {

    try {
        const res = await pool.query('select * from prueba');
        // id del primer elemento console.log(res.rows[0].id);
        console.log(res.rows);

        //usar cuando terminas de usar la base de datos
        pool.end();
    } catch (e) {
        console.log(e);
    }
}



const insertdatos = async (idprueba) => {

    try {
        const text = 'INSERT INTO datos_prueba(id,tipodoc) VALUES ($1, $2)'
        const values = [idprueba, 'Perro']
        const res = await pool.query(text, values);
        console.log(idprueba);
        console.log(res);

        // pool.end();

    } catch (e) {
        console.log(e);
    }

}




const jeje = async () => {

    try {
        const text = 'INSERT INTO prueba(doctype, numdoc) VALUES ($1, $2) RETURNING *'
        const values = ['DNI', '00000000']
        const res = await pool.query(text, values);
        console.log(res.rows[0].id);
        insertdatos(res.rows[0].id);
    } catch (e) {
        console.log(e);
    }
}


const form = {
    tipodoc: 'CE',
    numdoc: 72722297,
    nombres: 'Fiorella',
    apellido_p: 'Sanchez',
    apellido_m: 'Rodriguez',
    nombre_social: '',
    nacionalidad: 'Peruana',
    estado_civil: 'Soltera',
    fecha_nac: '1991-01-08',
    genero: 'Femenino',
    correo: 'fiorellasaro27@gmail.com',
    telefono: 921130144,
    coordenadas_direccion: [1.23254,-2.00655],
    text_direccion: 'Av. Jin 567, Breña',
    n_hijos: 0,
    como_konecta: 'Otros',

}


const postPostulante = async (form) => {
    try{
        const text = 'INSERT INTO POSTULANTE(TIPODOC, NUMDOC, NOMBRES, APELLIDO_P, APELLIDO_M, NOMBRE_SOCIAL, NACIONALIDAD, ESTADO_CIVIL, FECHA_NAC, GENERO, CORREO, TELEFONO, COORD_DIRECCION, TEXT_DIRECCION, N_HIJOS, COMO_KONECTA) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *'
        const values = [form.tipodoc, form.numdoc, form.nombres, form.apellido_p, form.apellido_m, form.nombre_social, form.nacionalidad, form.estado_civil, form.fecha_nac, form.genero, form.correo,form.telefono ,'('+form.coordenadas_direccion[0]+','+form.coordenadas_direccion[1]+')',form.text_direccion ,form.n_hijos, form.como_konecta]
        const res = await pool.query(text, values);
        console.log(res.rows[0].ID_POSTULANTE);

    }catch(e){
        console.log(e);
    }
}


// "\'{"+hola+ ','+chau+ "}\'"
const postDatosExperiencia = async () => {
    try{

        
            const hola = "fenix";
            const chau = "crillon";
        
                console.log('hola prueba array');
                const text = 'INSERT INTO datos_prueba(llanta) VALUES ($1)'
                const values = ['{'+hola+ ','+chau+ '}']
                const res = await pool.query(text, values);
                console.log(res.rows[0]);     
        
    }catch(e){
        console.log(e);
    }
}


//getDNI();
//getPrueba();
//insertPrueba();
// jeje();

//postPostulante(form);

postDatosExperiencia();