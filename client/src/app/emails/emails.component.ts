import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  selectedOption: string = "0";
  selectedCategory: string = "0";
  display= "none"
  email :any
  category:any
  categoryList = []
  emailList = []
  constructor(private category_service: CategoryService,private email_service: EmailService) { 
    this.getAllCategories()
  }

  ngOnInit(): void {
  }
  
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
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
  getEmailsByCategory(){
    if(this.selectedCategory != "0" ){
      this.email_service.GetAllEmail(this.selectedCategory).subscribe(
        list => {
          this.emailList = list;
        },
        err => {
          console.error(err);
        }
      );
    }
  
    
  }
  deleteEmail(id){
    this.email_service.DeleteEmail(id).subscribe(
      list => {
        this.getEmailsByCategory()
      },
      err => {
        console.error(err);
      }
    );

  }
  createEmail(){
    var emailDetails = {
      category : this.selectedOption,
      email : this.email
    }
    this.email_service.CreateEmail(emailDetails).subscribe(
      email => {
        this.getEmailsByCategory()
        this.onCloseHandled()
        this.category = "0"
        this.email = ""
      },
      err => {
        console.error(err);
      }
    );
    
  }
}
