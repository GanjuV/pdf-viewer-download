import { TestBed, inject } from '@angular/core/testing';

import { DownloadPdfService } from './download-pdf.service';

describe('DownloadPdfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadPdfService]
    });
  });

  it('should be created', inject([DownloadPdfService], (service: DownloadPdfService) => {
    expect(service).toBeTruthy();
  }));
});
