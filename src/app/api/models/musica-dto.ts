/* tslint:disable */
/* eslint-disable */
import { GeneroDto } from './genero-dto';
export interface MusicaDto {
  dataLancamento?: string;
  duracao?: number;
  favorito?: boolean;
  genero?: GeneroDto;
  id?: number;
  nomeAlbum?: string;
  nomeBanda?: string;
  nomeMusica?: string;
}
