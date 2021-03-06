import {Component, View, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {AddressModel} from './addressModel';

@Component({
    selector: 'address-renderer'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="invoice-address">
            <input type="text" class="form-control plain-input text-bold" [(ng-model)]="model.name">
            <input type="text" class="form-control plain-input" [(ng-model)]="model.company">
            <input type="text" class="form-control plain-input" [(ng-model)]="model.line1">
            <input type="text" class="form-control plain-input" [(ng-model)]="model.line2">
            <input type="text" class="form-control plain-input" [(ng-model)]="model.zip">
        </div>
    `
})
export class AddressRenderer {
    @Input() model : AddressModel;
}
