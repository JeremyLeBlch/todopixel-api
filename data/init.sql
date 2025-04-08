CREATE DATABASE todolistNextNest;

CREATE TABLE users
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    email      VARCHAR(255) UNIQUE,
    created_at TIMESTAMP        DEFAULT now(),
    updated_at TIMESTAMP        DEFAULT now()
);

CREATE TABLE lists
(
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       VARCHAR(255) NOT NULL,
    user_id    UUID         NOT NULL,
    created_at TIMESTAMP        DEFAULT now(),
    updated_at TIMESTAMP        DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE tasks
(
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    list_id     UUID NOT NULL,
    description TEXT NOT NULL,
    completed   BOOLEAN          DEFAULT FALSE,
    created_at  TIMESTAMP        DEFAULT now(),
    updated_at  TIMESTAMP        DEFAULT now(),
    FOREIGN KEY (list_id) REFERENCES lists (id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION set_updated_at()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_updated_at_users
    BEFORE UPDATE
    ON users
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trigger_set_updated_at_lists
    BEFORE UPDATE
    ON lists
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trigger_set_updated_at_tasks
    BEFORE UPDATE
    ON tasks
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();