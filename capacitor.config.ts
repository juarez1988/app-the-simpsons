import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thesimpsons.app',
  appName: 'app-the-simpsons',
  webDir: 'dist/app-the-simpsons',
  server: {
    androidScheme: 'https'
  }
};

export default config;
