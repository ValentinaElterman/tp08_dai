--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2026-06-05 09:52:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4782 (class 1262 OID 16398)
-- Name: dai-events; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "dai-events" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';


ALTER DATABASE "dai-events" OWNER TO postgres;

\connect -reuse-previous=on "dbname='dai-events'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    id integer NOT NULL,
    name character varying NOT NULL,
    full_name character varying NOT NULL,
    latitude numeric NOT NULL,
    longitude numeric NOT NULL,
    display_order integer NOT NULL
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 4776 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provinces VALUES (2, 'Córdoba', 'Provincia de Córdoba', -31.420083, -64.188774, 2);
INSERT INTO public.provinces VALUES (1, 'Buenos Aires', 'Provincia de Buenos Aires', -34.603722, -58.381592, 1);


-- Completed on 2026-06-05 09:52:33

--
-- PostgreSQL database dump complete
--

