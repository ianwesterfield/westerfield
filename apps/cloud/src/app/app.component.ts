import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@westerfield/ui/components/shell';

@Component({
  imports: [RouterModule, ShellComponent],
  selector: 'cloud-root',
  templateUrl: './app.component.html',
})
export class AppComponent { }
