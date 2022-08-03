# Maintainers
A fullstack practice project.

## Technologies
Project created with:
Front End
  * Axios: 0.27.2,
  * Classnames: 2.3.1,
  * React": 18.0.0,
  * React-dom: 18.0.0,
  * React-redux: 8.0.2,
  * React-router-dom: 6.3.0,
  * Sass: 1.53.0
  * Typescript: 4.6.3,
  * Vite: 2.9.9
  
Back End
    * Bcrypt: 5.0.1,
    * Cors: 2.8.5,
    * Dotenv: 16.0.1,
    * Express: 4.18.1,
    * Jsonwebtoken: 8.5.1,
    * Pg: 8.7.3
    * Node: 18.0.0
    
## Setup

To run this project: install PostgreSql locally and use in PgAdmin the following commands: 

Database: 
```
CREATE DATABASE "yourName"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

Tables: cream, dough, extra, filling, flavor, shape:
```
CREATE TABLE IF NOT EXISTS public.yourTableName
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    enable boolean NOT NULL DEFAULT true,
    CONSTRAINT yourTableName_pkey PRIMARY KEY (id)
)
```

Table: size:
```
CREATE TABLE IF NOT EXISTS public.size
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    enable boolean NOT NULL DEFAULT true,
    "number" character varying COLLATE pg_catalog."default",
    quantity integer NOT NULL,
    CONSTRAINT size_pkey PRIMARY KEY (id)
)
```

Table: user:
```
CREATE TABLE IF NOT EXISTS public."user"
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    email character varying COLLATE pg_catalog."default" NOT NULL,
    rut character varying COLLATE pg_catalog."default" NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    paternallastname character varying COLLATE pg_catalog."default" NOT NULL,
    maternallastname character varying COLLATE pg_catalog."default" NOT NULL,
    hash character varying COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
```

    




    
    
    
    
    
