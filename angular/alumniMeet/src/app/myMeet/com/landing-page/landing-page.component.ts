import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DalService } from '../../services/dal.service';

import { environment } from '../../../../environments/environment';
import { ValidationsService } from '../../services/validations.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  stats = {}
  constructor(private router: Router, private dal: DalService, private validation: ValidationsService) { }

  ngOnInit() {

  }


}
