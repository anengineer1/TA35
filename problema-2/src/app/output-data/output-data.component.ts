import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataToSend } from '../intro-data/data-to-send';

@Component({
	selector: 'app-output-data',
	templateUrl: './output-data.component.html',
	styleUrls: ['./output-data.component.css']
})
export class OutputDataComponent implements OnChanges {

	@Input() nomapels: string = '';
	@Input() email: string = '';
	@Input() message: string = '';


	ngOnChanges(changes: SimpleChanges): void {
		console.log("hey");
	}

}
