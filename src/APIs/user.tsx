import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk('/user/login', (data: string): string => data);

export const logOut = createAsyncThunk('/user/logout', (): void => {});
