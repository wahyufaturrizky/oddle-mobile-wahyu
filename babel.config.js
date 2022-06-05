module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@context': './src/context',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@components': './src/components',
          '@demo-component': './src/demo-component',
          '@config': './src/config',
          '@layout': './src/layout',
          '@navigator': './src/navigator',
        },
      },
    ],
  ],
};
