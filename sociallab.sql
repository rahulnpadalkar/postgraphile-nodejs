drop schema if exists sociallab_public cascade;
drop type if exists loadstatus;
create schema sociallab_public;
create type loadstatus as enum ('pending','rejected','accepted');

create table sociallab_public.organization(
    id serial primary key,
    name text not null unique,
    address text not null check(char_length(address) > 10)
);

create table sociallab_public.supplyload (
    id serial primary key,
    orgname text check(char_length(orgname) > 10) references sociallab_public.organization(name) on update cascade,
    plastic_type text not null,
    collection_start_date date not null default current_date,
    collection_end_date date not null,
    load_status loadstatus
);