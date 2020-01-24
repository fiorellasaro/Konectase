CREATE TABLE postulante (
    -- GENERA UN ID AUTO INCREMENTO
    id_postulante SERIAL PRIMARY KEY, 

    tipodoc VARCHAR(5) NOT NULL,
    numdoc INT NOT NULL,
    nombres VARCHAR(40) NOT NULL,
    apellido_p VARCHAR(30) NOT NULL,
    apellido_m VARCHAR(30) NOT NULL,
    nombre_social VARCHAR(20),
    nacionalidad VARCHAR(30) NOT NULL,
    estado_civil VARCHAR(20) NOT NULL,
    fecha_nac DATE NOT NULL,
    genero VARCHAR(15) NOT NULL,
    correo VARCHAR(40) NOT NULL,
    telefono INT NOT NULL,
    direccion POINT NOT NULL,
    n_hijos INT NOT NULL,
    como_konecta VARCHAR(50) NOT NULL

);


CREATE TABLE datos_profesionales
(
    id_profesionales SERIAL,
    grado_formacion VARCHAR(30) NOT NULL,
    institucion VARCHAR(50) NOT NULL,
    estado_estudios VARCHAR(20) NOT NULL,
    rubro_carrera VARCHAR(40),
    dir_institucion POINT,
    horario_estudios VARCHAR(20),
    id_postulante INTEGER NOT NULL,
    PRIMARY KEY (id_profesionales, id_postulante),
    FOREIGN KEY (id_postulante) REFERENCES postulante (id_postulante) ON DELETE CASCADE


);




CREATE TABLE sin_experiencia
(
    id_s_experiencia SERIAL,
    p_redes BOOLEAN NOT NULL,
    p_ventas BOOLEAN NOT NULL,
    p_atc BOOLEAN NOT NULL,
    p_crosselling BOOLEAN NOT NULL,
    expect_salarial INTEGER[] NOT NULL,
    id_postulante INTEGER NOT NULL,
    PRIMARY KEY (id_s_experiencia, id_postulante),
    FOREIGN KEY (id_postulante) REFERENCES postulante (id_postulante) ON DELETE CASCADE


);


CREATE TABLE experiencia_call
(
    id_experiencia_call SERIAL,
    empresa VARCHAR(50) NOT NULL,
    cliente VARCHAR(50) NOT NULL,
    rubro_cliente VARCHAR(100) NOT NULL,
    segmento VARCHAR(30) NOT NULL,
    tiempo_exp INT NOT NULL,
    retribucion INT NOT NULL,
    id_postulante INTEGER NOT NULL,
    PRIMARY KEY(id_experiencia_call, id_postulante),
    FOREIGN KEY (id_postulante) REFERENCES postulante (id_postulante) ON DELETE CASCADE


);


CREATE TABLE experiencia_otros
(
    id_experiencia_otros SERIAL,
    empresa VARCHAR(50) NOT NULL,
    rubro_empr VARCHAR(100) NOT NULL,
    puesto VARCHAR(50) NOT NULL,
    funcion VARCHAR(50) NOT NULL,
    p_redes BOOLEAN NOT NULL,
    p_ventas BOOLEAN NOT NULL,
    p_atc BOOLEAN NOT NULL,
    p_crosselling BOOLEAN NOT NULL,
    tiempo_exp INT NOT NULL,
    retribucion INT NOT NULL,
    id_postulante INTEGER NOT NULL,
    PRIMARY KEY(id_experiencia_otros, id_postulante),
    FOREIGN KEY (id_postulante) REFERENCES postulante (id_postulante) ON DELETE CASCADE

);


CREATE TABLE datos_personales
(
    id_dp SERIAL,
    id INTEGER NOT NULL,
    tipodoc VARCHAR(30),
    PRIMARY KEY (id_dp, id),
    FOREIGN KEY(id) REFERENCES prueba(id)

);



CREATE TABLE datos_prueba
(
    id_dp SERIAL,
    id INTEGER NOT NULL,
    tipodoc VARCHAR(30),
    PRIMARY KEY (id_dp, id),
    FOREIGN KEY(id) REFERENCES prueba(id)

);


CREATE TABLE datos_point
(
    id_dp SERIAL PRIMARY KEY,
    id POINT NOT NULL, 
    fecha DATE NOT NULL

);


insert into datos_personales
    (tipodoc)
VALUES
    ('DNI');

insert into datos_personales
    (tipodoc, numdoc, nombres, apellido_p, apellido_m, nombre_social,sede_pref)
VALUES
    ('DNI', 72722297, 'Fiorella', 'Sanchez', 'Rodriguez', '', '{"surquillo","crillon","fenix"}');

SELECT sede_pref[1]
FROM datos_personales
WHERE numdoc = 72722297;
-- RESULT surquillo

-- ELIMINAR TABLA POSTULANTE Y TODOS LAS TABLAS HIJAS
DROP TABLE postulante CASCADE;

--SABER ELEMENTOS DE LA TABLA Y TIPO DE DATO
\d+ prueba



CREATE TABLE fruits
(
    id_fruits INTEGER,
    id INTEGER,
    tipo_fruta VARCHAR(30),
    PRIMARY KEY (id_fruits),
    FOREIGN KEY (id) REFERENCES prueba (id)
);