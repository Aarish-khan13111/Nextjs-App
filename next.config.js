/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://arish13111:Aarish13111@cluster0.c6dtpxr.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
