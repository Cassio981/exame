import bcrypt from 'bcryptjs';

export const hashPassword = (senha: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(senha, salt);
};
