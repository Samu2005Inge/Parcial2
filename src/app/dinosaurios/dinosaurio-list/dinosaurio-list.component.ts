import { Component, OnInit } from '@angular/core';
import { DinosaurioService } from '../dinosaurio.service';
import { Dinosaurio } from '../dinosaurio';

@Component({
  selector: 'app-dinosaurio-list',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {
  dinosaurios: Array<Dinosaurio> = [];

  constructor(private dinosaurioService: DinosaurioService) { }

  ngOnInit() {
    this.getDinosaurios();
  }

  getDinosaurios(): void{
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }

}
