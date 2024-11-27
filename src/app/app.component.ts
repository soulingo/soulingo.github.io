
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, HostListener } from '@angular/core';
import { Menu, X, ChevronDown } from 'lucide-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px) scale(0.8)' }),
        animate('300ms cubic-bezier(.8,-0.6,0.2,1.5)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(.8,-0.6,0.2,1.5)', style({ opacity: 0, transform: 'translateY(50px) scale(0.8)' }))
      ])
    ]),
    trigger('bouncyScale', [
      transition(':enter', [
        style({ transform: 'scale(0.5)' }),
        animate('500ms cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'scale(0.5)' }))
      ])
    ])
  ]
})
export class AppComponent {


  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navItems = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Join Beta', href: '#beta', isButton: true }
  ];

  // Icons
  MenuIcon = Menu;
  XIcon = X;
  ChevronDownIcon = ChevronDown;
  isDarkTheme = true;
  theme = {
    bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
    bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
    text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: this.isDarkTheme ? 'text-gray-400' : 'text-gray-500',
    border: this.isDarkTheme ? 'border-gray-800' : 'border-gray-200'
  };

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId?.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMobileMenuOpen = false;
    }
  }
}
