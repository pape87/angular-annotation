import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Annotation } from "../services/text.service";

@Pipe({
  name: "highlight"
})
export class HighlightRangePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string, args: { annotations: Annotation[], type: string }): any {
    if (!args) {
      return value;
    }

    args.annotations.sort((a, b) => b.offset.start_char - a.offset.start_char).forEach((x) => {
      value =
        value.slice(0, x.offset.start_char) +
        "<span style='background-color: #ffe524;'>" +
        value.slice(x.offset.start_char, x.offset.end_char) +
        "<span style='font-size: 11px; padding-right: 5px;'>" + args.type + "</span>" +
        "</span>" +
        value.slice(x.offset.end_char, value.length);
    });

    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
