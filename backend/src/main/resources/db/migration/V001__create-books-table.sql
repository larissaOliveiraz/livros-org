create table users (
    id serial unique not null,
    name varchar(100) not null,
    username varchar(100) unique not null,
    password varchar(255) not null,

    primary key (id)
);

create table books

(
    id              serial unique not null,
    userId          bigint        not null,
    title           varchar(100)  not null,
    author          varchar(100)  not null,
    genre           varchar(100)  not null,
    publicationYear varchar(4),
    description     varchar(255),

    primary key (id)
);

alter table books add constraint fk_books_user_id foreign key (userId) references users (id);
