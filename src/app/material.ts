import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatListModule} from '@angular/material/list'; 

@NgModule({
    imports:[
        MatSliderModule,
        MatRadioModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatListModule,
    ],
    exports:[ MatSliderModule,
        MatRadioModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatProgressBarModule,
        MatListModule,
    ],
})

export class MaterialModule{}