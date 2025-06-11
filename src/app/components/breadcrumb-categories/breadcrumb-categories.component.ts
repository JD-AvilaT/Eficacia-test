import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb-categories.component.html',
  styleUrls: ['./breadcrumb-categories.component.scss'],
})
export class BreadcrumbCategoriesComponent {
  @Input() items: string[] = [
    'Categoría',
    'Sub-Cat 1',
    'Sub-sub-Cat 1',
    'Sub-sub-sub-Cat 1',
  ];
}
