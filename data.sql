insert into item (id, name, description, type, brand, price, quantity, image)
values 
(1, "iPhone10", "a good phone","iPhone", "Apple", 1000, 50, 'https://m.media-amazon.com/images/I/51wsxfxXb7L._AC_UL320_.jpg'),
(2, "S22", "an expensive phone", "Android", "Samsung", 1500, 40,'https://m.media-amazon.com/images/I/51ISw7jKORL._AC_UL320_.jpg'),
(3, "Ipad3", "a medium tablet","iPad", "Apple", 800, 30,'https://m.media-amazon.com/images/I/61aeen0K1NL._AC_UL320_.jpg'),
(412, "banana", "a banana","Fruits", "BigInc", 1000, 4,'https://m.media-amazon.com/images/I/61j9WGBRJEL._AC_UL320_.jpg'),
(20, "apple", "an apple","Fruits", "BigInc",800, 5,'https://m.media-amazon.com/images/I/61N6GttGioL._AC_UL320_.jpg'),
(291, "orange", "an orange", "Fruits", "SmallInc", 1500, 4,'https://m.media-amazon.com/images/I/61-OyIzzTyL._AC_UL320_.jpg'),
(481, "watermelon", "a watermelon", "Fruits", "SmallInc", 1500, 6,'https://m.media-amazon.com/images/I/81Ty8m47gsL._AC_UL320_.jpg'),
(8192, "Toshiba 55\" Tv", "55\" TV", "Television", "Toshiba", 1500, 60,'https://m.media-amazon.com/images/I/71eFNsFwMnS._AC_UL320_.jpg'),
(482, "Ipad4", "The all-new Ipad", "iPad", "Apple", 900, 75,'https://m.media-amazon.com/images/I/61Tt3fiFVAS._AC_UL320_.jpg')
;

insert into review (id, rating, text, item_id)
values
(1,1,"<img onerror='alert(\"Hacked!\")' src='invalid-image' />", 1),
(2,4,"<script>alert(123)</script>",2)
;

insert into users (id, email, password)
value (2,"fakee@gmail.com","$10$pVjfbal55bsQR7A6CfTB8uEFXV51KgEtzTSCAL4HjfC2NY.DssGZ2");

insert into po (id, status, user_id, total_price)
value (1,"finished",2,4000)

insert into poitem (id, price, quantity, item_id, order_id)
values
(1,1000,1,1,1),
(2,1500,2,2,1)
;
