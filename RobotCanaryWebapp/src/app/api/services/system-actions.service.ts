/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SystemActionEntity } from '../models/system-action-entity';
@Injectable()
class SystemActionsService extends BaseService {
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
  ApiV1SystemActionsOrganizationByOrganizationIdGetResponse(organizationId: string): Observable<HttpResponse<Array<SystemActionEntity>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/systemActions/organization/${organizationId}`,
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
        let _body: Array<SystemActionEntity> = null;
        _body = _resp.body as Array<SystemActionEntity>;
        return _resp.clone({body: _body}) as HttpResponse<Array<SystemActionEntity>>;
      })
    );
  }

  /**
   * @param organizationId undefined
   * @return Success
   */
  ApiV1SystemActionsOrganizationByOrganizationIdGet(organizationId: string): Observable<Array<SystemActionEntity>> {
    return this.ApiV1SystemActionsOrganizationByOrganizationIdGetResponse(organizationId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param systemAction undefined
   */
  ApiV1SystemActionsPutResponse(systemAction?: SystemActionEntity): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = systemAction;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/systemActions`,
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
   * @param systemAction undefined
   */
  ApiV1SystemActionsPut(systemAction?: SystemActionEntity): Observable<void> {
    return this.ApiV1SystemActionsPutResponse(systemAction).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param systemAction undefined
   */
  ApiV1SystemActionsPostResponse(systemAction?: SystemActionEntity): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = systemAction;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/systemActions`,
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
   * @param systemAction undefined
   */
  ApiV1SystemActionsPost(systemAction?: SystemActionEntity): Observable<void> {
    return this.ApiV1SystemActionsPostResponse(systemAction).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param ids undefined
   */
  ApiV1SystemActionsDeletePostResponse(ids?: Array<string>): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ids;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/systemActions/delete`,
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
   * @param ids undefined
   */
  ApiV1SystemActionsDeletePost(ids?: Array<string>): Observable<void> {
    return this.ApiV1SystemActionsDeletePostResponse(ids).pipe(
      map(_r => _r.body)
    );
  }
}

module SystemActionsService {
}

export { SystemActionsService }
