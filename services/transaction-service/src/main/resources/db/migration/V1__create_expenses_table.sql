CREATE TABLE expense (
   id SERIAL  PRIMARY KEY,
  user_id VARCHAR(150) ,
   title  VARCHAR(250) ,
  category VARCHAR(60) DEFAULT 'UNCATEGORY',
   type VARCHAR(10) ,
   amount double precision  DEFAULT 0.0,
  frequency  VARCHAR(10)  DEFAULT 'NONE',
   created_at TIMESTAMP DEFAULT NOW(),
  created_by VARCHAR(150) ,
  modified_at TIMESTAMP DEFAULT NOW() ,
  modified_by VARCHAR(150) ,
  is_active boolean);

