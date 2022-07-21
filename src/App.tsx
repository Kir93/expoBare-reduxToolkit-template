import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import {
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

import customTheme from '@styles/theme';
import store from '@configs/configureStore';

import MainNav from '@navigators/MainNav';

import Logo from '@assets/logo.jpg';

export default function App(): React.ReactElement {
  const [loading, setLoading] = useState(true);
  const preload = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      const fontsToLoad = [Ionicons.font];
      const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
      const imagesToLoad = [Logo];
      const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
      await Promise.all<void | Asset[]>([
        ...fontPromises,
        ...imagePromises,
        Font.loadAsync({
          NotoSansKR_100Thin,
          NotoSansKR_300Light,
          NotoSansKR_400Regular,
          NotoSansKR_500Medium,
          NotoSansKR_700Bold,
          NotoSansKR_900Black,
        }),
      ]);
    } catch (error) {
      alert(error);
    } finally {
      await SplashScreen.hideAsync();
      setLoading(false);
    }
  };

  useEffect(() => {
    preload();
  }, []);

  if (loading) return <></>;

  return (
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
