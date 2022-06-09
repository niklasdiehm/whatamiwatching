USE whatamiwatching;
create table user (id bigint not null auto_increment, password_hash varchar(255) not null, salt varchar(255) not null, user_name varchar(100) not null, primary key (id)) engine=InnoDB;
INSERT INTO user (ID, user_name, password_hash, salt) VALUES (1, 'Affenkopf', 'lN2Cxkwy5+V1KQrMTt6FTbi05ru5SW9bgD0u5kkNx8GoObJ9LouXMPFl55eiQEXRx+5f1y3oPyZ75ldD2mmM8g==', 'N+GOzK8Jq0Jk4D9t'); /*plaintext: password*/;
INSERT INTO user (ID, user_name, password_hash, salt) VALUES (2, 'Glatzkopf', 'm/Jg6W1zaWHF4foVpi2wI0d6e67mXB7SNYHbJpfdpXKYCoRXPuU/XSfLoS6oqrr8AkOP3AFemKAX6YzccA7dAA==', 'PFdT3S/E59PxHR3U'); /*plaintext: 1234*/;
INSERT INTO user (ID, user_name, password_hash, salt) VALUES (3, 'Pandabär123', 'VSgf98RfRpINjruU3Urh/+mElGGb0LQO9BlO9v56rDTcjgM1D0sW+1mLCmn9dqWFD/6RnYkvXKGsuFgXEgiqUg==', 'zgkECmXz7xBK50hS'); /*plaintext: FlaschenHals!*/;
