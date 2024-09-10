module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      providers: {
        google: {
          enabled: true,
          callback: "/api/connect/google/callback",
          icon: "google",
          key: env("GOOGLE_CLIENT_ID"),
          secret: env("GOOGLE_CLIENT_SECRET"),
          scope: ["email", "profile"],
        },
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_EMAIL"),
        defaultReplyTo: env("SENDGRID_EMAIL"),
      },
    },
  },
});
