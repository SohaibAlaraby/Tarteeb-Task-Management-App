create table if not exists users(
	id bigserial primary key,
	public_id uuid default gen_random_uuid() unique not null,
	name varchar(100) not null,
	email varchar(150) not null unique,
	password varchar(255) not null,
	avatar_url TEXT,
	is_email_verified boolean default false,
	role varchar(20) default 'user',
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

create table if not exists categories(
	id bigserial primary key,
	public_id uuid default gen_random_uuid() unique not null,
	user_id bigint not null references users(id) on delete cascade,
	name varchar(50) not null,
	created_at timestamp default current_timestamp,
	constraint unique_user_category unique (user_id, name)
);

create table if not exists categories_attributes(
	id bigserial primary key,
	category_id bigint not null references categories(id) on delete cascade,
	value_name varchar(50) not null,
	color_code varchar(9) default '#000000FF',
	sort_order int default 0,
	created_at timestamp default current_timestamp,
	constraint unique_category_attribute_value unique (category_id, value_name)
);

create table if not exists tasks(
	id bigserial primary key,
	public_id uuid default gen_random_uuid() unique not null,
	user_id bigint not null references users(id) on delete cascade,
	title varchar(150) not null,
	description text,
	created_at timestamp default current_timestamp,
	due_date timestamp,
	constraint check_due_date_after_created check (due_date is null or due_date >= created_at)
);

create table if not exists task_has_attributes(
	task_id bigint not null references tasks(id) on delete cascade,
	attribute_id bigint not null references categories_attributes(id) on delete cascade,
	primary key (task_id, attribute_id)
);

-- Indexing Optimization
create index if not exists idx_categories_user_id on categories(user_id);
create index if not exists idx_tasks_user_id on tasks(user_id);
create index if not exists idx_categories_attributes_category_id on categories_attributes(category_id);
create index if not exists idx_users_role on users(role);

