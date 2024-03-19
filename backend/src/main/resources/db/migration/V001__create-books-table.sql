create table users
(
    id       serial unique       not null,
    name     varchar(100)        not null,
    username varchar(100) unique not null,
    password varchar(255)        not null,

    primary key (id)
);

create table books
(
    id              serial unique not null,
    user_id          bigint        not null,
    title           varchar(100)  not null,
    author          varchar(100)  not null,
    genre           varchar(100)  not null,
    publication_year varchar(4)    not null,
    description     varchar(255),
    status          varchar(10)   not null,
    reading_month    varchar(50),
    reading_year     varchar(10),
    score           varchar(10),

    primary key (id)
);

alter table books
    add constraint fk_books_user_id foreign key (user_id) references users (id);
