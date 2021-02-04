--create users table

CREATE TABLE users
(
    user_id serial PRIMARY KEY,
    firstname character varying(50)  NOT NULL,
    lastname character varying(50)  NOT NULL,
    email character varying(255)  NOT NULL,
    password character varying  NOT NULL,
    phone character varying  NOT NULL,
    
);



CREATE TABLE category
(
    category_id serial PRIMARY KEY,
    category_name character varying(50)  NOT NULL,
);


CREATE TABLE product
(
    product_id serial PRIMARY KEY,
    product_name character varying(50)  NOT NULL,
    category_id integer not null,
    quantity int not null,
    price int not null
);

--ALter statements for foreign keys
alter table product 
    add constraint fk_product_category
    foreign key (category_id) 
    REFERENCES category (category_id);


