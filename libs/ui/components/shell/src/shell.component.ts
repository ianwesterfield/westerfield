import { HeaderComponent } from '../../header';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: "wui-shell",
  standalone: true,
  imports: [HeaderComponent],
  providers: [MatIconRegistry],
  templateUrl: "./shell.component.html",
  styleUrl: "./shell.component.scss",
})
export class ShellComponent { }
