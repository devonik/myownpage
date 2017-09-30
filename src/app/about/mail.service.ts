import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class MailService {

    constructor(private http: Http) {}

    sendMail(props) {
        var headers = new Headers();
        var params = 'name=' + props.name + '&mailAdress=' + props.adress + '&phone=' +props.phone + '&message='+props.message;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        this.http.post('http://localhost:56364/api/Mail/sendmail', params, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                console.log('Sent successfully');
            }
        })
    }        
}