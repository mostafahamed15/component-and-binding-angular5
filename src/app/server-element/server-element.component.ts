import { 
  Component,
   OnInit,
    Input,
     OnChanges, 
     SimpleChanges,
     DoCheck,
     AfterContentChecked,
     AfterContentInit,
     AfterViewInit,
     OnDestroy,
     ElementRef,
     ViewChild,
     ContentChild
    } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
OnChanges,
 DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy {
 @Input('srvElement') element: { type: string, name: string, content: string};
 @Input() name: string;
@ViewChild('heading') header: ElementRef;
@ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { 
    console.log(' constructor called!');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(' ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('textContent' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }
 ngDoCheck(){
  console.log('ngDoCheck called!');
 }
 ngAfterContentInit(){
  console.log('AfterContentInit called!');
  console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
}
 ngAfterContentChecked(){
   console.log('ngAfterContentChecked called!');
 }
 ngAfterViewInit(){
  console.log('AfterViewtInit called!');
  console.log('textContent' + this.header.nativeElement.textContent);
     console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
}
 ngAfterViewChecked(){
   console.log('ngAfterViewChecked called!');
 }
 ngOnDestroy(){

 }

}
