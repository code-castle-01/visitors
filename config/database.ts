export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");

  const connections = {
    // postgres: {
    //   connection: {
    //     host: env("DATABASE_HOST", "localhost"),
    //     port: env.int("DATABASE_PORT", 5432),
    //     database: env("POSTGRES_DATABASE", "strapi"),
    //     user: env("DATABASE_USERNAME", "postgres"),
    //     password: env("DATABASE_PASSWORD", "1234"),
    //   },
    //   pool: {
    //     min: env.int("DATABASE_POOL_MIN", 2),
    //     max: env.int("DATABASE_POOL_MAX", 10),
    //   },
    // },
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST"),
      port: env.int("POSTGRES_PORT"),
      database: env("POSTGRES_DATABASE"),
      user: env("POSTGRES_USERNAME"),
      password: env("POSTGRES_PASSWORD"),
      ssl: {
        rejectUnauthorized: true, // Asegúrate de permitir SSL sin verificar el certificado
      },
      debug: false,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
