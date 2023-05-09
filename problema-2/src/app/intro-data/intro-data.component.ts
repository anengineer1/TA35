import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataToSend } from './data-to-send';

@Component({
	selector: 'app-intro-data',
	templateUrl: './intro-data.component.html',
	styleUrls: ['./intro-data.component.css']
})
export class IntroDataComponent implements OnInit {

	sum1: number = 0;
	sum2: number = 0;
	answer: number = 0;
	usercaptcha: string = '';

	nomapels: string = '';
	email: string = '';
	message: string = '';

	captchamessage: string = '';

	@Output() dataEmitterParam = new EventEmitter<DataToSend>();

	ngOnInit(): void {
		this.calculateNumbers();
	}

	calculateNumbers(): void {
		this.sum1 = Math.floor(Math.random() * 10);
		this.sum2 = Math.floor(Math.random() * 10);

		this.answer = this.sum1 + this.sum2;
		console.log(this.answer);
	}

	sendDataToParent(): void {

	    if (Number(this.usercaptcha) == Number(this.answer)) {
			let local_data = new DataToSend();
			local_data.eemail = this.email;
			local_data.emessage = this.message;
			local_data.ename = this.nomapels;
			this.dataEmitterParam.emit(local_data);
			this.captchamessage = '';
		} else {
			this.captchamessage = 'Validación anti-spam incorrecta';
		}
		this.calculateNumbers();
	}


}
