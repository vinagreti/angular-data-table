import {Component} from '@angular/core';

@Component({
    selector: 'angular-x-data-table',
    styles: [`/* DEFAULT COLORS */
$text-light: white;
$text-dark: #484848;
$selected-color: blue;
$red-color: red;
$yellow-color: yellow;

/* DEFAULT STYLES */
md-list{
	@include list-default;
}

table{
	border-collapse: collapse;
	width: 100%;

	a{
		text-decoration: none;
	}

	md-icon.checkin_received{
		color: $selected-color;
	}
	md-icon.checkin_rejected{
		color: $red-color;
	}

	.nowrap{
		white-space: nowrap;
	}

	.fit-text{
		width: 1px;
		text-align: left;
	}

	.processed-icon{
		color: $yellow-color;
	}

	thead{
		background-color: $selected-color;
		color: $text-light;
		a{
			color: $text-light;
		}

		tr{
			height: 50px;
		}
	}

	td, th{
		padding: 0px 6px;
	}

	tbody{
		color: $text-dark;
		a{
			color: $selected-color;
			font-weight: 800;
		}

		tr{
			font-size: 12px;
			&:hover{
				background-color: rgba($selected-color, 0.2);
			}

			&:nth-child(even) {
				background-color: rgba($selected-color, 0.1);

				&:hover{
					background-color: rgba($selected-color, 0.2);
				}
			}
		}
	}


	/deep/ md-checkbox .md-checkbox-inner-container{
		margin: 4px 0px 0px 0px;
	}
}`],
    template:'<div>With external scss and html<h1 (click)="onClick()">{{message}}</h1></div>'
})
export class AngularXDataTableComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);
    }

}
