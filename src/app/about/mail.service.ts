import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class MailService {
    
    constructor(private http: HttpClient, private _notfication: NotificationsService ) {}

    public sendMail(props) {
        const urlDev = "http://localhost:61155/api/mail/sendmail";
        const urlProd = "https://www.niklas-grieger.de/api/api/mail/sendmail";
        console.log("Send Mail...");
        this.http.post(urlProd, props)
            .subscribe((response) => {
                console.log(response);
                this._notfication.success("Erfolg!", "Die Nachricht wurde erfolgreich übermittelt!");
            },
            error => {
                console.log(error);
                this._notfication.error("Fehler!", "Die Nachricht konnte nicht übermittelt werden");
            },
            () => {
                console.log("Email wurde gesendet!");
            }
            );
    }        
}
