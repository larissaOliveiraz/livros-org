delete from books;
delete from users;

insert into users (id, name, username, password) values (1, 'Larissa', 'lari97', '123');

alter sequence books_id_seq restart with 1;