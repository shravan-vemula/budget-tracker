CREATE TABLE bank_details(
id SERIAL  PRIMARY KEY,
name VARCHAR(50) NOT NULL,
url VARCHAR(100) ,
redirect_status BOOLEAN NOT NULL,
image_source varchar(50) NOT NULL
);
CREATE TABLE users_details(
id SERIAL PRIMARY KEY,
user_id VARCHAR(255) ,
name VARCHAR(50),
email VARCHAR(50) ,
phone VARCHAR(10),
country VARCHAR(50),
is_deleted BOOLEAN,
created_at TIMESTAMP DEFAULT NOW(),
created_by VARCHAR(150) ,
modified_at TIMESTAMP DEFAULT NOW() ,
modified_by VARCHAR(150)
);


CREATE TABLE user_profile_settings(
id SERIAL PRIMARY KEY,
user_id VARCHAR(255) ,
remind_adding_expenses_income BOOLEAN ,
monthly_weekly_summary BOOLEAN ,
calculator_enabled BOOLEAN ,
default_time_period VARCHAR(50) ,
default_date VARCHAR(50) ,
remind_due_bills VARCHAR(50) ,
notify_expense_exceeded BOOLEAN ,
new_bill_added BOOLEAN ,
amount_debited_credited BOOLEAN ,
notify_goal_period_exceeded BOOLEAN ,
notify_goal_reached BOOLEAN ,
recurring_expenses_due BOOLEAN ,
manage_uncategorized BOOLEAN ,
email BOOLEAN ,
text_messages BOOLEAN,
FOREIGN KEY (id) REFERENCES users_details(id)
);

insert into bank_details(id,name,url,redirect_status,image_source) values (1,'Axis Bank','www.axisbank.com',true,'images/Axis.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (2,'Andhra bank','',false,'images/Union.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (3,'Bank of America','',false,'images/BankofAmerica.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (4,'Chase Bank','',false,'images/chase.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (5,'HDFC Bank','',false,'images/hdfc.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (6,'RBS Bank','https://www.rbsdigital.com/Default.aspx?CookieCheck=2020-07-01T04:47:34',true,'images/RBS.jpg');
insert into bank_details(id,name,url,redirect_status,image_source) values (7,'State Bank of India','https://retail.onlinesbi.com/retail/login.htm',true,'images/sbi.jpg');
insert into bank_details(id,name,url,redirect_status,image_source) values (8,'Union Bank','',false,'images/Union.png');
insert into bank_details(id,name,url,redirect_status,image_source) values (9,'PayTm','',false,'images/paytm.jpeg');
insert into bank_details(id,name,url,redirect_status,image_source) values (10,'Icici Bank','',false,'images/icici.png');



