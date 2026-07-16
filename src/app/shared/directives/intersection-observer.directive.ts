import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
// https://medium.com/@devarshiroy/infinite-scrolling-in-angular-using-intersection-observer-api-175363a741b7
@Directive({
  selector: '[appIntersectionobserver]',
  standalone: true,
})
export class IntersectionobserverDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer: IntersectionObserver | null = null;

  @Output() readonly isIntersecting = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const areSomeEntriesIntersecting = entries.some(
          (entry) => entry.isIntersecting,
        );
        if (!areSomeEntriesIntersecting) {
          return;
        }

        this.isIntersecting.emit(true);
        this.disconnect();
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
