import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from "../authentication.service";
import { CategoryService } from "../category.service";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category = ""
  categoryList = []
  display = "none";
  constructor(private category_service: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  
  createCategory (){
    this.category_service.CreateCategory(this.category).subscribe(
      category => {
        this.getAllCategories()
        this.onCloseHandled()
        this.category = ""
      },
      err => {
        console.error(err);
      }
    );
  }

  getAllCategories() {
    this.category_service.GetAllCategory().subscribe(
      list => {
        this.categoryList = list;
      },
      err => {
        console.error(err);
      }
    );
  }
  deleteCategory(id) {
    this.category_service.DeleteCategory(id).subscribe(
      list => {
        this.getAllCategories()
      },
      err => {
        console.error(err);
      }
    );

  }


}
