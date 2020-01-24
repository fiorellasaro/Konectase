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
    direccion: [1.23254, 2.00655],
    n_hijos: 0,
    como_konecta: 'Otros',

}


const postPostulante = async (form) => {

    try{
        const text = 'INSERT INTO postulante(tipodoc,numdoc, nombres, apellido_p, apellido_m, nombre_social, nacionalidad, estado_civil, fecha_nac, genero, correo, telefono, direccion, n_hijos, como_konecta) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *'
        const values = [form.tipodoc, form.numdoc, form.nombres, form.apellido_p, form.apellido_m, form.nombre_social, form.nacionalidad, form.estado_civil, '1991-01-08', form.genero, form.correo,form.telefono ,'('+form.direccion[0]+','+form.direccion[1]+')', form.n_hijos, form.como_konecta]
        const res = await pool.query(text, values);
        console.log(res);

    }catch(e){
        console.log(e);
    }
}



postPostulante(form);
