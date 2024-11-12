import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
