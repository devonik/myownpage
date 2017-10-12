import { Component, OnInit } from '@angular/core';
import { MailService } from './mail.service';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MailService]
})
export class AboutComponent implements OnInit {
  newMail = {
    name: "",
    adress: "",
    phone: "",
    message: ""
  }
  constructor(private mailService: MailService) {
      
  }
  private sendMail() {
      this.mailService.sendMail(this.newMail);
  }
  ngOnInit() {
  }
    

}
