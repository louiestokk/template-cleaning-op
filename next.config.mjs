/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
      experimental: {
        serverComponentsExternalPackages: ["mongoose"],
        cpus:6
      },
      images: {
        domains: ['lh3.googleusercontent.com','https://i.ibb.co','https://imgbb.com/','i.ibb.co','https://images.pexels.com','https://randomuser.me/','https://www.stadsmissionen.org','https://img.freepik.com'],
      },
      webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      }
    }

export default nextConfig;
