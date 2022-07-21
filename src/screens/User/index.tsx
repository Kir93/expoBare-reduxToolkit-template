import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { useTypeDispatch } from '@utils/useTypeRedux';

import { logOut } from '@APIs/user';

import Logo from '@assets/svgs/logo.svg';

import { ButtonText, View } from './styles';

const User = (): React.ReactElement => {
  const navigation = useNavigation();
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(logOut());
  }, [useTypeDispatch]);

  const onPressNavigate = useCallback(() => navigation.navigate({ key: 'Post' }), []);
  return (
    <View>
      <Logo />
      <TouchableOpacity onPress={onPressNavigate}>
        <ButtonText>User</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

export default User;
