import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Item } from './../../model/item';

import { ItemService } from './../../services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  item: Item = {
    name: '',
    imgUrl: '',
    price: 0,
    description: ''
  };

  id: any;
  updatForm: FormGroup;

  selectedFile: File = null;
  upLoadedFile: any;

  constructor(
            private fb: FormBuilder,
            private itemService: ItemService,
            private activatedRoute: ActivatedRoute,
            private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.itemService.getItem(this.id).subscribe(res => {
        this.item = res;
        this.updatForm.controls['name'].setValue(this.item.name);
        this.updatForm.controls['imgUrl'].setValue(this.item.imgUrl);
        this.updatForm.controls['price'].setValue(this.item.price);
        this.updatForm.controls['description'].setValue(this.item.description);
      });
    }

    this.loadUpdateProduct();
  }

  loadUpdateProduct(){
    this.updatForm = this.fb.group({
      name: ['', Validators.required],
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (p) => {
      console.log(p);
    };
    reader.onloadend = (e) => {
      console.log(e.target);
      this.upLoadedFile = reader.result;
      this.updatForm.get('imgUrl').setValue(this.upLoadedFile);
      //console.log(this.upLoadedFile);
    };
  }

  update_Product(){
    if(this.updatForm.valid){
      this.itemService.updateItem(this.updatForm.value).then(() => {
        this.router.navigate([''])
        console.log(this.updatForm.value)
      })
    }
  }

}
