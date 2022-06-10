create table genre_user (id bigint not null, genreid bigint not null, userid bigint not null, primary key (id, genreid)) engine=InnoDB;
create table user (id bigint not null auto_increment, password_hash varchar(255) not null, salt varchar(255) not null, user_name varchar(100) not null, primary key (id)) engine=InnoDB;
alter table genre_user add constraint FK24kvfo879iwhs2kk1pnsabn34 foreign key (userid) references user (id);
