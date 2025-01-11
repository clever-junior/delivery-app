import api from './api';

export default async function userLogin({ email, password }: { email: string, password: string }) {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error;
  }
}
