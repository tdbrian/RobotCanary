/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserEntity } from '../models/user-entity';
import { RegisterUserRequest } from '../models/register-user-request';
@Injectable()
class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param organizationId undefined
   * @return Success
   */
  ApiV1UserOrganizationByOrganizationIdGetResponse(organizationId: string): Observable<HttpResponse<Array<UserEntity>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/user/organization/${organizationId}`,
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
        let _body: Array<UserEntity> = null;
        _body = _resp.body as Array<UserEntity>;
        return _resp.clone({body: _body}) as HttpResponse<Array<UserEntity>>;
      })
    );
  }

  /**
   * @param organizationId undefined
   * @return Success
   */
  ApiV1UserOrganizationByOrganizationIdGet(organizationId: string): Observable<Array<UserEntity>> {
    return this.ApiV1UserOrganizationByOrganizationIdGetResponse(organizationId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `UsersService.ApiV1UserEmailByEmailGetParams` containing the following parameters:
   *
   * - `email`:
   *
   * - `organizationId`:
   */
  ApiV1UserEmailByEmailGetResponse(params: UsersService.ApiV1UserEmailByEmailGetParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.organizationId != null) __params = __params.set('organizationId', params.organizationId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/user/email/${params.email}`,
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
   * @param params The `UsersService.ApiV1UserEmailByEmailGetParams` containing the following parameters:
   *
   * - `email`:
   *
   * - `organizationId`:
   */
  ApiV1UserEmailByEmailGet(params: UsersService.ApiV1UserEmailByEmailGetParams): Observable<void> {
    return this.ApiV1UserEmailByEmailGetResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param registerUser undefined
   */
  ApiV1UserRegisterPostResponse(registerUser?: RegisterUserRequest): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registerUser;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/user/register`,
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
   * @param registerUser undefined
   */
  ApiV1UserRegisterPost(registerUser?: RegisterUserRequest): Observable<void> {
    return this.ApiV1UserRegisterPostResponse(registerUser).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `UsersService.ApiV1UserByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiV1UserByIdPutResponse(params: UsersService.ApiV1UserByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.value;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/user/${params.id}`,
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
   * @param params The `UsersService.ApiV1UserByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `value`:
   */
  ApiV1UserByIdPut(params: UsersService.ApiV1UserByIdPutParams): Observable<void> {
    return this.ApiV1UserByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiV1UserByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/user/${id}`,
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
  ApiV1UserByIdDelete(id: number): Observable<void> {
    return this.ApiV1UserByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

module UsersService {

  /**
   * Parameters for ApiV1UserEmailByEmailGet
   */
  export interface ApiV1UserEmailByEmailGetParams {
    email: string;
    organizationId?: string;
  }

  /**
   * Parameters for ApiV1UserByIdPut
   */
  export interface ApiV1UserByIdPutParams {
    id: number;
    value?: string;
  }
}

export { UsersService }
