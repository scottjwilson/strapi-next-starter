module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("PROVIDER_CLOUD_NAME"),
      api_key: env("PROVIDER_API_KEY"),
      api_secret: env("PROVIDER_API_SECRET"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
