import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: "wui-header",
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  private readonly matIconRegistry = inject(MatIconRegistry);

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon('mesosync-logo', 'assets/icons/mesosync-logo.svg');
  }
}
