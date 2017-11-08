import { Component, OnInit } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MailService]
})
export class AboutComponent {
    ckEditorConfig: {} =
    {
        
        "toolbarGroups": [
            { "name": "basicstyles", "groups": ["basicstyles"] },
            { "name": "links", "groups": ["links"] },
            { "name": "paragraph", "groups": ["list"] },
            { "name": "insert", "groups": ["insert"] },
            { "name": "styles", "groups": ["styles"] }
        ],
        
    };

  newMail = {
    username: "",
    mailAdress: "",
    phone: "",
    message: ""
  }
  constructor(private mailService: MailService) {
  }
  public sendMail() {
      this.mailService.sendMail(this.newMail);
  }

}
