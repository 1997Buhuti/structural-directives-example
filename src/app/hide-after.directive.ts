import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[hideAfter]",
})
export class HideAfterDirective implements OnInit {
  @Input("hideAfter") delay = 0;

  @Input("hideAfterThen")
  placeholder: TemplateRef<any> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  n;
  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder);
        console.log("this.angularSer");
      }
    }, this.delay);
  }
}
