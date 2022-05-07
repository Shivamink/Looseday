import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faGlobe = faGlobe;
  faPhoneVolume = faPhoneVolume;
  faLocationDot = faLocationDot;

  constructor() {}

  ngOnInit(): void {}
}
