import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'wair-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {}
