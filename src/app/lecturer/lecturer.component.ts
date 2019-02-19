import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';

import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  //////////////
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  themeCtrl = new FormControl();
  filteredThemes: Observable<string[]>;
  themes: string[] = ['Angular'];
  allThemes: string[] = ['Angular', 'JavaScript', 'Node.js', '.NET', 'Java'];

  @ViewChild('themeInput') themeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  ///////////////////////



  
  constructor() {
    //////////
    this.filteredThemes = this.themeCtrl.valueChanges.pipe(
      startWith(null),
      map((theme: string | null) => theme ? this._filter(theme) : this.allThemes.slice()));
      /////
   }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

  ////
  add(event: MatChipInputEvent): void {
    // Add theme only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our theme
      if ((value || '').trim()) {
        this.themes.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.themeCtrl.setValue(null);
    }
  }

  remove(theme: string): void {
    const index = this.themes.indexOf(theme);

    if (index >= 0) {
      this.themes.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.themes.push(event.option.viewValue);
    this.themeInput.nativeElement.value = '';
    this.themeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allThemes.filter(theme => theme.toLowerCase().indexOf(filterValue) === 0);
  }
  ///////

}


