import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

    powers = ['A', 'B'];
    secPowersA = ['a1', 'a2'];
    secPowersB = ['b1', 'b2'];
    secPowers = [];

    model = new Hero(18, 'Dr IQ asd', this.powers[1]);

    submitted = false;

    onSubmit() { this.submitted = true; }


    onChange() {
        if (this.model.power === 'A') {
            this.model.secPower = '';
            this.secPowers = this.secPowersA;
        } else if (this.model.power === 'B') {
            this.model.secPower = '';
            this.secPowers = this.secPowersB;
        } else {
            this.model.secPower = '';
            this.secPowers = [];
        }
    }
}
