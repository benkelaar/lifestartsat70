import { Component, OnInit } from '@angular/core';
import { DecisionTreeService } from '../decision-tree.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeLogo = "/assets/icons/home-icon.png";

  constructor(readonly treeService: DecisionTreeService) { }

  ngOnInit(): void {
  }

}
