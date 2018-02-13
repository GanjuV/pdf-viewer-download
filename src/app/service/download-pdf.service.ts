import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { InterceptorService } from './interceptor.service';
import { Http } from '@angular/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { getFileNameFromResponseContentDisposition, saveFile } from '../helper/file-download-helper';

@Injectable()
export class DownloadPdfService {
  apiRoot = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/';
  // apiRoot = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(
    // private config: ConfigService,
    // private http: InterceptorService,
    private http: Http
) {}

downloadFile(fileId: string) {
    const url = `${this.apiRoot}${fileId}`;
    const options = new RequestOptions({responseType: ResponseContentType.Blob });
    // Process the file downloaded
    this.http.get(url, options).subscribe(res => {
        // const fileName = getFileNameFromResponseContentDisposition(res);
        saveFile(res.blob(), fileId);
    });
}
}
