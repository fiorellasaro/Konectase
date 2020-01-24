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

//getDNI();
//getPrueba();
//insertPrueba();
jeje();