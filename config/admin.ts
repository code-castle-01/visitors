export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  locales: ["fr", "es"],
  theme: {
    colors: {
      primary100: "#f6ecfc",
      primary200: "#e0c1f4",
      primary500: "#ac73e6",
      primary600: "#9736e8",
      primary700: "#8312d1",
      danger700: "#b72b1a",
    },
  },
  // Extend the translations
  translations: {
    fr: {
      "Auth.form.email.label": "test",
      Users: "Utilisateurs",
      City: "CITY (FRENCH)",
      Id: "ID french",
    },
  },
  tutorials: false,
  notifications: { releases: false },
  bootstrap() {},
});
