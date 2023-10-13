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

import { GeneroDto } from '../models/genero-dto';

@Injectable({
  providedIn: 'root',
})
export class GeneroControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation alterar1
   */
  static readonly Alterar1Path = '/api/v1/genero/alterar/{id}';

  /**
   * Método utilizado para alterar os dados de um genero
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar1$Response(params: {
    id: number;
    body: GeneroDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GeneroControllerService.Alterar1Path, 'put');
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
   * Método utilizado para alterar os dados de um genero
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar1(params: {
    id: number;
    body: GeneroDto
  },
  context?: HttpContext

): Observable<any> {

    return this.alterar1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation incluir2
   */
  static readonly Incluir2Path = '/api/v1/genero/incluir';

  /**
   * Método utilizado para realizar a inclusão de um genero
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir2$Response(params: {
    body: GeneroDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GeneroControllerService.Incluir2Path, 'post');
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
   * Método utilizado para realizar a inclusão de um genero
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir2(params: {
    body: GeneroDto
  },
  context?: HttpContext

): Observable<any> {

    return this.incluir2$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listAll1
   */
  static readonly ListAll1Path = '/api/v1/genero/listar';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GeneroControllerService.ListAll1Path, 'get');
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
   * To access the full response (for headers, for example), `listAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll1(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation buscarPorId1
   */
  static readonly BuscarPorId1Path = '/api/v1/genero/getbyID/{id}';

  /**
   * Método utilizado para buscar um genero pelo id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buscarPorId1()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPorId1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GeneroControllerService.BuscarPorId1Path, 'get');
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
   * Método utilizado para buscar um genero pelo id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buscarPorId1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buscarPorId1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.buscarPorId1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation excluir1
   */
  static readonly Excluir1Path = '/api/v1/genero/excluir/{id}';

  /**
   * Método utilizado para remover um genero pelo id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `excluir1()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluir1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, GeneroControllerService.Excluir1Path, 'delete');
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
   * Método utilizado para remover um genero pelo id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `excluir1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  excluir1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.excluir1$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
