/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
class ValuesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  ApiValuesGetResponse(): Observable<HttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<string> = null;
        _body = _resp.body as Array<string>;
        return _resp.clone({body: _body}) as HttpResponse<Array<string>>;
      })
    );
  }

  /**
   * @return Success
   */
  ApiValuesGet(): Observable<Array<string>> {
    return this.ApiValuesGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param value undefined
   */
  ApiValuesPostResponse(value?: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param value undefined
   */
  ApiValuesPost(value?: string): Observable<void> {
    return this.ApiValuesPostResponse(value).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiValuesByIdGetResponse(id: number): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Values/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: string = null;
        _body = _resp.body as string;
        return _resp.clone({body: _body}) as HttpResponse<string>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiValuesByIdGet(id: number): Observable<string> {
    return this.ApiValuesByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ValuesService.ApiValuesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiValuesByIdPutResponse(params: ValuesService.ApiValuesByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.value;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Values/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param params The `ValuesService.ApiValuesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiValuesByIdPut(params: ValuesService.ApiValuesByIdPutParams): Observable<void> {
    return this.ApiValuesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiValuesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Values/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id undefined
   */
  ApiValuesByIdDelete(id: number): Observable<void> {
    return this.ApiValuesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

module ValuesService {

  /**
   * Parameters for ApiValuesByIdPut
   */
  export interface ApiValuesByIdPutParams {
    id: number;
    value?: string;
  }
}

export { ValuesService }
