import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { TextDocument } from "../services/text.service";

@Pipe({
  name: "highlight"
})
export class HighlightRangePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: TextDocument): any {
    if (!value || !value.text) {
      return value;
    }

    let result = value.text;
    value.annotations.slice().sort((a, b) => b.offset.start_char - a.offset.start_char).forEach((x) => {
      result =
        result.slice(0, x.offset.start_char) +
        "<span style='background-color: #ffe524;'>" +
        result.slice(x.offset.start_char, x.offset.end_char) +
        "<span style='font-size: 11px; padding-right: 5px;'>" + x.type + "</span>" +
        "</span>" +
        result.slice(x.offset.end_char, result.length);
    });

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
