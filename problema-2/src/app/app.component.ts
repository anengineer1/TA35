import { Component, EventEmitter } from '@angular/core';
import { DataToSend } from './intro-data/data-to-send';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'problema-2';
	test = 'test';
	p_nomapels: string = '';
	p_email: string = '';
	p_message: string = '';


	handleData(data: DataToSend): void {
		console.log(data);
		this.p_nomapels = data.ename;
		this.p_email = data.eemail;
		this.p_message = data.emessage;
	}
}
