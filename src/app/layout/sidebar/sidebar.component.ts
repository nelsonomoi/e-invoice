import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private Opened: ElementRef){}

  toggleOpen(event: any){
    const parent = event.target.parentNode as HTMLElement;
    const dropdownMenu = parent.closest('li') 

    const openedElement = this.Opened.nativeElement.querySelector('open')

    openedElement?.classList.remove('open')
    

    if (dropdownMenu?.classList.contains('open')) {
      dropdownMenu?.classList.remove('open')
    } else {
      dropdownMenu?.classList.add('open')
    }
  }

}
