import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Sparkles,
  Shield,
  Zap,
  Users,
  Timer,
  ArrowRight,
  RefreshCw
} from 'lucide-angular';

interface Benefit {
  icon: any;
  text: string;
}

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
})
export class WaitlistComponent {
  @Input() isDarkTheme = true;

  waitlistForm: FormGroup;
  loading = false;
  error = '';

  readonly benefits: Benefit[] = [
    { icon: Sparkles, text: 'Early access to all premium features' },
    { icon: Shield, text: 'Lifetime discount on future plans' },
    { icon: Zap, text: 'Priority support and feature requests' },
    { icon: Users, text: 'Join exclusive beta community' }
  ];

  // Icons
  TimerIcon = Timer;
  ArrowRightIcon = ArrowRight;
  RefreshCwIcon = RefreshCw;

  theme = {
    bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
    bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
    text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: this.isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    border: this.isDarkTheme ? 'border-[#0EA5E9]' : 'border-[#0EA5E9]',
    borderLight: this.isDarkTheme ? 'border-[#0EA5E9]/20' : 'border-[#0EA5E9]/20'
  };

  constructor(private fb: FormBuilder) {
    this.waitlistForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async onSubmit() {
    if (this.waitlistForm.valid) {
      this.loading = true;
      this.error = '';

      try {
        // Burada gerçek API çağrısı yapılacak
        await this.simulateApiCall(this.waitlistForm.value.email);
        this.waitlistForm.reset();
      } catch (err) {
        this.error = 'Something went wrong. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }

  private simulateApiCall(email: string): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
