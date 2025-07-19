import localFont from 'next/font/local';

export const overpass = localFont({
  src: [
    {
      path: '../app/fonts/Overpass-Thin.ttf',
      style: 'normal',
      weight: '100',
    },
    {
      path: '../app/fonts/Overpass-ExtraLight.ttf',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../app/fonts/Overpass-Light.ttf',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../app/fonts/Overpass-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/Overpass-Medium.ttf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../app/fonts/Overpass-SemiBold.ttf',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../app/fonts/Overpass-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../app/fonts/Overpass-ExtraBold.ttf',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../app/fonts/Overpass-Black.ttf',
      weight: '900',
      style: ' normal',
    },
  ],
  variable: '--font-overpass',
});
