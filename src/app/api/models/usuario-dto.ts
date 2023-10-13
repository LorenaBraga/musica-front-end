/* tslint:disable */
/* eslint-disable */
import { UsuarioFuncionalidadeDto } from './usuario-funcionalidade-dto';
export interface UsuarioDto {
  email?: string;
  funcionalidades?: Array<UsuarioFuncionalidadeDto>;
  id?: number;
  login?: string;
  nome?: string;
  senha?: string;
}
