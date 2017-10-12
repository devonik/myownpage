import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class MailService {

    constructor(private http: Http, private _notfication: NotificationsService ) {}

    public sendMail(props){
        console.log("Send Mail...");
        //var headers = new Headers();
        var params = '/' + props.name + '/' + props.adress + '/' + props.message + '/' + props.phone;

        //headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http.get('https://www.niklas-grieger.de/api/api/mail/sendmail' + params)
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
