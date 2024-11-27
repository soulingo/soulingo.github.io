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
import emailjs from '@emailjs/browser';
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
  successMessage = '';

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
      const email = this.waitlistForm.value.email;
      
      // Check if email already submitted
      if (localStorage.getItem(`waitlist_${email}`)) {
        this.error = 'You have already joined the waitlist!';
        return;
      }

      this.loading = true;
      this.error = '';
      this.successMessage = '';

      try {
        await this.simulateApiCall(email);
        localStorage.setItem(`waitlist_${email}`, 'true');
        this.successMessage = "We can't wait to have you on board! We'll be in touch soon.";
        this.waitlistForm.reset();
      } catch (err) {
        this.error = 'Something went wrong. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }

  private simulateApiCall(email: string): Promise<void> {
    this.sendMail();
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  sendMail() {
    const publicKey = 'K3RqH1B-ZBrMFdElA';
    // emailjs
    emailjs.send("service_spo0gzx", "template_n97f3fj",
      {
        email: this.waitlistForm.value.email
      },
      {
        publicKey: publicKey
      }
    );
  }
}
