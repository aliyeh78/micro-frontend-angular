import { Component ,OnInit} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  navItems:any[] | undefined
  imgAddress:any="../images/Logo.svg"
  ngOnInit() {
    this.navItems = [
        {
            label: 'Home',
            // icon: 'pi pi-fw pi-file',
            // items: [
            //     {
            //         label: 'New',
            //         icon: 'pi pi-fw pi-plus',
            //         items: [
            //             {
            //                 label: 'Bookmark',
            //                 icon: 'pi pi-fw pi-bookmark'
            //             },
            //             {
            //                 label: 'Video',
            //                 icon: 'pi pi-fw pi-video'
            //             }
            //         ]
            //     },
            //     {
            //         label: 'Delete',
            //         icon: 'pi pi-fw pi-trash'
            //     },
            //     {
            //         separator: true
            //     },
            //     {
            //         label: 'Export',
            //         icon: 'pi pi-fw pi-external-link'
            //     }
            // ]
        },
        {
            label: 'Services',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Test',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                }

            ]
        },
        {
            label: 'Gallery',
            // icon: 'pi pi-fw pi-user',
            // items: [
            //     {
            //         label: 'New',
            //         icon: 'pi pi-fw pi-user-plus'
            //     },
            //     {
            //         label: 'Delete',
            //         icon: 'pi pi-fw pi-user-minus'
            //     },
            //     {
            //         label: 'Search',
            //         icon: 'pi pi-fw pi-users',
            //         items: [
            //             {
            //                 label: 'Filter',
            //                 icon: 'pi pi-fw pi-filter',
            //                 items: [
            //                     {
            //                         label: 'Print',
            //                         icon: 'pi pi-fw pi-print'
            //                     }
            //                 ]
            //             },
            //             {
            //                 icon: 'pi pi-fw pi-bars',
            //                 label: 'List'
            //             }
            //         ]
            //     }
            // ]
        },
        {
            label: 'Booking',
            // icon: 'pi pi-fw pi-calendar',
            // items: [
            //     {
            //         label: 'Edit',
            //         icon: 'pi pi-fw pi-pencil',
            //         items: [
            //             {
            //                 label: 'Save',
            //                 icon: 'pi pi-fw pi-calendar-plus'
            //             },
            //             {
            //                 label: 'Delete',
            //                 icon: 'pi pi-fw pi-calendar-minus'
            //             }
            //         ]
            //     },
            //     {
            //         label: 'Archieve',
            //         icon: 'pi pi-fw pi-calendar-times',
            //         items: [
            //             {
            //                 label: 'Remove',
            //                 icon: 'pi pi-fw pi-calendar-minus'
            //             }
            //         ]
            //     }
            // ]
        },
        {
            label: 'Contact us',
            // icon: 'pi pi-fw pi-power-off'
        },
        {
          label: 'About us',
          // icon: 'pi pi-fw pi-power-off'
      }
    ];
}
}
