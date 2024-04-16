delete
from books;
delete
from users;

insert into users (id, name, username, password)
values (1, 'Larissa', 'lari97', '123');

insert into books (id, user_id, title, author, genre, publication_year, description, status, reading_month, reading_year,
                   score)
values (1, 1, 'Jade city', 'Fonda lee', 'Fantasia', '2018',
        'The Green Bone clans of honorable jade-wearing warriors once protected the island from foreign invasion--but nowadays, in a bustling post-war metropolis full of fast cars and foreign money, Green Bone families like the Kauls are primarily involved in commerce, construction, and the everyday upkeep of the districts under their protection.',
        'WANT', '', '', ''),
       (2, 1, 'The sword of Kaigen', 'M.L.Wang', 'Fantasia', '2023',
        'High on a mountainside at the edge of the Kaigenese Empire live the most powerful warriors in the world, superhumans capable of raising the sea and wielding blades of ice. For hundreds of years, the fighters of the Kusanagi Peninsula have held the Empire’s enemies at bay, earning their frozen spit of land the name ‘The Sword of Kaigen.’',
        'WANT', '', '', ''),
       (3, 1, 'The poppy war', 'R.F.Kuang', 'Fantasia', '2018',
        'Rin’s shamanic powers may be the only way to save her people. But as she finds out more about the god that has chosen her, the vengeful Phoenix, she fears that winning the war may cost her humanity . . . and that it may already be too late.',
        'READING', '', '', ''),
       (4, 1, 'Foundryside', 'Robert Bennet', 'Fantasia', '2021',
        'Now someone in those Houses wants Sancia dead, and the artifact for themselves. And in the city of Tevanne, there’s nobody with the power to stop them.',
        'READ', '01', '2023', '5');
alter sequence books_id_seq restart with 5;