import { Component } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';
import { DownloadPdfService } from '../app/service/download-pdf.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  page = 1;
  totalPages: number;
  isLoaded = false;
  progressData: string;
  constructor(private service: DownloadPdfService) {

  }
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

  onProgress(progressData: PDFProgressData) {
    this.progressData = Math.round(progressData.loaded/progressData.total)*100 + ' %';
  }

  download() {
    this.service.downloadFile('pdf-test.pdf');
  }
}
