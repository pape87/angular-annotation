import { TestBed } from "@angular/core/testing";

import { TextDocumentService } from "./text.service";

describe("TextService", () => {
  let service: TextDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextDocumentService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
