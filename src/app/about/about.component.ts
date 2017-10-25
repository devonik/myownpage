import { Component, OnInit } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MailService]
})
export class AboutComponent implements OnInit {
  //https://www.froala.com/wysiwyg-editor/docs/options
  public options: Object = {
      placeholderText: "Geben Sie hier Ihre Nachricht ein...",
      heightMin: 300,
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo']//,
      //events: {
      //    'froalaEditor.focus': function (e, editor) {
      //        console.log(editor.selection.get());
      //    }
      //}
  }
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
  ngOnInit() {
  }
    

}
