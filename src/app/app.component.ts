import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';
interface Step {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

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
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.emailForm.valid) {
      this.mail = this.emailForm.value.email;
      this.sendMail();
      this.showWaitlistModal = false;
    }
  }
  howItWorksSteps: Step[] = [
    {
      icon: 'mic',
      title: 'Record Your Voice',
      description: 'Speak naturally in your native language to create your unique voice profile.'
    },
    {
      icon: 'sparkles',
      title: 'AI Transformation',
      description: 'Our Edge AI technology transforms your voice to speak perfectly in your target language.'
    },
    {
      icon: 'message-circle',
      title: 'Practice & Improve',
      description: 'Get instant feedback and hear yourself speaking fluently, building confidence naturally.'
    }
  ];

  features: Feature[] = [
    {
      icon: 'zap',
      title: 'Edge AI Technology',
      description: 'Real-time voice transformation with ultra-low latency, all processed securely on your device.'
    },
    {
      icon: 'globe',
      title: 'Learn Anywhere',
      description: 'Practice online or offline. Your personal language coach is always available.'
    },
    {
      icon: 'trophy',
      title: 'Research-Backed',
      description: 'Built on proven research showing the benefits of learning with your own voice.'
    },
    {
      icon: 'users',
      title: 'Personalized Learning',
      description: 'Your unique voice profile ensures a natural, personalized learning experience.'
    }
  ];

  chatDemo = {
    originalText: "The weather is absolutely beautiful today. I think I'll go for a walk in the park.",
    userAttempt: "Ze wezzer is absolootly byootiful today. I sink I'll go for a valk in ze park.",
    pronounciationScore: 72,
    feedback: [
      'Focus on the "th" sound in "weather"',
      'Practice "absolutely" - stress on the first syllable',
      'The "w" sound in "walk" needs attention'
    ]
  };

  showWaitlistModal = false;
  readonly primaryColor = '#FA6927';
  readonly secondaryColor = '#70B8B5';
  mail: string = '';
  sendMail() {
    const publicKey = 'K3RqH1B-ZBrMFdElA';
    // emailjs
    emailjs.send("service_spo0gzx", "template_n97f3fj",
      {
        email: this.mail
      },
      {
        publicKey: publicKey
      }
    );
  }
  isSubmit = false;
}
