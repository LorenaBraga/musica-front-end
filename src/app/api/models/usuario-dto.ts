/* tslint:disable */
/* eslint-disable */
import { UsuarioFuncionalidadeDto } from './usuario-funcionalidade-dto';
export interface UsuarioDto {
  email?: string;
  funcionalidades?: Array<UsuarioFuncionalidadeDto>;
  id?: string;
  login?: string;
  nome?: string;
  senha?: string;
}
