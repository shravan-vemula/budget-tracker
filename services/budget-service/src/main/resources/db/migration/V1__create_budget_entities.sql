CREATE TABLE budget(
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP NOT NULL,
	created_by INTEGER,
	frequency INTEGER NOT NULL,
	is_active boolean,
	is_deleted boolean,
	modified_at TIMESTAMP,
	modified_by INTEGER,
	start_date TIMESTAMP NOT NULL,
	end_date TIMESTAMP NOT NULL,
	user_id VARCHAR(255) NOT NULL
);
CREATE TABLE budget_component(
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    created_at TIMESTAMP NOT NULL,
    created_by INTEGER NOT NULL,
    currency double precision NOT NULL,
    currency_format VARCHAR(255),
    frequency INTEGER NOT NULL,
    is_active boolean,
    is_deleted boolean,
    modified_at TIMESTAMP,
    modified_by INTEGER,
    budget_id INTEGER,
    FOREIGN KEY (budget_id) REFERENCES budget(id)
);

