import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { 
  ArrowRight, 
  Mic, 
  Sparkles, 
  Shield, 
  Timer,
  Volume2,
  Wand2
} from 'lucide-angular';

interface HeroStat {
  label: string;
  icon: any;
  color: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() isDarkTheme = true;

  isHovered$ = new BehaviorSubject<boolean>(false);
  showComingSoon$ = new BehaviorSubject<boolean>(false);
  particles: any[] = [];

  readonly HERO_STATS: HeroStat[] = [
    { label: 'Privacy Protected', icon: Shield, color: '#38BDF8' },
    { label: 'Real-time Enhancement', icon: Sparkles, color: '#34D399' },
    { label: 'Edge AI Powered', icon: Wand2, color: '#22D3EE' }
  ];

  // Icons
  ArrowRightIcon = ArrowRight;
  MicIcon = Mic;
  SparklesIcon = Sparkles;
  TimerIcon = Timer;
  VolumeIcon = Volume2;

  theme = {
    bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
    bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
    text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: this.isDarkTheme ? 'text-gray-300' : 'text-gray-600'
  };

  gridBackground = `bg-[linear-gradient(to_right,${
    this.isDarkTheme ? '#0EA5E9/5' : '#0EA5E9/10'
  }_1px,transparent_1px),linear-gradient(to_bottom,${
    this.isDarkTheme ? '#0EA5E9/5' : '#0EA5E9/10'
  }_1px,transparent_1px)] bg-[size:24px_24px]`;

  gradientOverlay = `bg-gradient-to-b from-${
    this.isDarkTheme ? '[#030711]' : 'white'
  } via-transparent to-${this.isDarkTheme ? '[#030711]' : 'white'}`;

  ngOnInit() {
    this.generateParticles();
  }

  private generateParticles() {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const seed = 12345;
    this.particles = Array.from({ length: 20 }, (_, i) => ({
      left: `${seededRandom(seed + i) * 100}%`,
      top: `${seededRandom(seed + i + 20) * 100}%`,
      delay: `${seededRandom(seed + i + 40) * 5}s`,
      duration: `${5 + seededRandom(seed + i + 60) * 5}s`
    }));
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}