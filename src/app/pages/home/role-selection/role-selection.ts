import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-role-selection',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule, NzTypographyModule, NzIconModule],
  templateUrl: './role-selection.html',
  styles: [`
    .role-grid { padding: 80px 20px; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .header-container { text-align: center; margin-bottom: 50px; }
    .main-title { font-size: 42px; font-weight: 800; color: var(--text-main); margin-bottom: 12px; letter-spacing: -1px; }
    .sub-title { font-size: 18px; color: var(--text-muted); }
    
    .cards-wrapper { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 650px; }
    .h-card { display: flex; align-items: center; padding: 24px 32px; border-radius: 16px; background: white; border: 1px solid #e2e8f0; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
    .h-card:hover { transform: translateX(10px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: var(--primary-color); }
    
    .h-icon-box { width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin-right: 24px; flex-shrink: 0; background: #f1f5f9; color: #64748b; transition: all 0.3s ease; }
    .designer-card:hover .h-icon-box { background: #ffe4e6; color: #e11d48; }
    .staff-card:hover .h-icon-box { background: #e0f2fe; color: #0284c7; }
    
    .h-content { flex: 1; text-align: left; }
    .h-content h3 { margin: 0 0 8px; font-size: 20px; font-weight: 700; color: var(--text-main); }
    .h-content p { margin: 0; font-size: 14px; color: var(--text-muted); line-height: 1.5; }
    
    .h-arrow { color: #cbd5e1; font-size: 24px; transition: all 0.3s ease; margin-left: 16px; }
    .h-card:hover .h-arrow { color: var(--primary-color); transform: translateX(5px); }
  `]
})
export class RoleSelectionComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    if (role === 'designer') {
      this.router.navigate(['/designer/projects']);
    } else if (role === 'staff') {
      this.router.navigate(['/funcionario']);
    }
  }
}
