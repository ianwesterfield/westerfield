import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@westerfield/air/components/shell';

@Component({
  standalone: true,
  imports: [RouterModule, ShellComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
