import { Component, NgModule, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Item } from '../../item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  items: Item[] = [];
  newItem: Item = {id: '', name: '', description: '' };
  selectedItem: Item | null = null;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.crudService.getItems().subscribe(items => this.items = items);
  }

  addItem(): void {
    if (this.newItem.name && this.newItem.description) {
      this.crudService.addItem(this.newItem).subscribe(() => {
        this.newItem = {id: '', name: '', description: '' };
        this.getItems();
      });
    }
  }

  updateItem(): void {
    if (this.selectedItem) {
      console.log('Updating item:', this.selectedItem);
      this.crudService.updateItem(this.selectedItem).subscribe(response => {
        console.log('Update response:', response);
        this.selectedItem = null;
        this.getItems(); // Refresh the list
      });
    }
  }

  deleteItem(id: any): void {
    this.crudService.deleteItem(id).subscribe(() => {
      this.getItems(); // Refresh the list
    });
  }

  selectItem(item: Item): void {
    this.selectedItem = { ...item }; // Copy item to selectedItem
  }
}
