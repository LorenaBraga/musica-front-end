/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MusicaDto } from '../models/musica-dto';

@Injectable({
  providedIn: 'root',
})
export class MusicaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation alterar
   */
  static readonly AlterarPath = '/api/v1/alterar/{id}';

  /**
   * Método utilizado para alterar os dados de uma música
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar$Response(params: {
    id: number;
    body: MusicaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.AlterarPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para alterar os dados de uma música
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar(params: {
    id: number;
    body: MusicaDto
  },
  context?: HttpContext

): Observable<any> {

    return this.alterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation incluir
   */
  static readonly IncluirPath = '/api/v1/incluir';

  /**
   * Método utilizado para realizar a inclusão de uma música
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir$Response(params: {
    body: MusicaDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.IncluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de uma música
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir(params: {
    body: MusicaDto
  },
  context?: HttpContext

): Observable<any> {

    return this.incluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/api/v1/listar';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Listagem Geral
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation buscarPorId
   */
  static readonly BuscarPorIdPath = '/api/v1/getbyID/{id}';

  /**
   * Método utilizado para buscar uma música pelo id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buscarPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.BuscarPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para buscar uma música pelo id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buscarPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.buscarPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation favoritarMusica
   */
  static readonly FavoritarMusicaPath = '/api/v1/favoritar/{id}';

  /**
   * Método utilizado para favoritar uma música pelo id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `favoritarMusica()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritarMusica$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.FavoritarMusicaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para favoritar uma música pelo id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `favoritarMusica$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  favoritarMusica(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.favoritarMusica$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation excluir
   */
  static readonly ExcluirPath = '/api/v1/excluir/{id}';

  /**
   * Método utilizado para remover uma música pelo id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `excluir()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluir$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, MusicaControllerService.ExcluirPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para remover uma música pelo id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `excluir$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluir(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.excluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
