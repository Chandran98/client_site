/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.investopedia.com',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'themezinho.net',
              pathname: '**',
            },
          ],
        
    }
};

export default nextConfig;
