import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      // headers: req.headers.set('responseType', 'blob').set('Content-Type', 'application/download')
      // headers: req.headers.set('responseType', ResponseContentType.Blob)
    });
    return next.handle(req);
  }

  //  intercept(res: HttpResponse<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const authReq = res.clone({
  //     // headers: req.headers.set('Authorization', 'token ...')
  //     // headers: req.headers.set('responseType', ResponseContentType.Blob)
  //   });
  //   return next.handle(req);
  // }

}
