import { Component, Input } from '@angular/core';
import { 
  Briefcase,
  PieChart,
  Coffee,
  RefreshCw, 
  Volume2,
  Zap,
  Play,
  Pause,
  Brain,
  CheckCircle2
} from 'lucide-angular';

interface Scenario {
  title: string;
  context: string;
  icon: any;
  samples: Array<{
    text: string;
    improvement: number;
    duration: string;
  }>;
}

interface Metric {
  icon: any;
  value: string;
  label: string;
}

@Component({
  selector: 'app-how-it-works',
  templateUrl: 'how-it-works.component.html',
  styleUrls: ['how-it-works.component.scss']
})
export class HowItWorksComponent {
  @Input() isDarkTheme = true;

  activeScenario = 0;
  activeSample = 0;
  isPlaying = false;
  playingType: 'original' | 'enhanced' | null = null;

  scenarios: Scenario[] = [
    {
      title: 'Job Interview',
      context: 'Interview with Tech Company',
      icon: Briefcase,
      samples: [
        {
          text: 'I have five years of experience in project management',
          improvement: 85,
          duration: '2.5s'
        }
      ]
    },
    {
      title: 'Client Presentation',
      context: 'Quarterly Results Meeting',
      icon: PieChart,
      samples: [
        {
          text: 'Our revenue increased by forty percent this quarter',
          improvement: 92,
          duration: '2.8s'
        }
      ]
    },
    {
      title: 'Daily Conversation',
      context: 'Team Coffee Chat',
      icon: Coffee,
      samples: [
        {
          text: 'Would you like to grab lunch and discuss the project?',
          improvement: 87,
          duration: '2.7s'
        }
      ]
    }
  ];

  get currentMetrics(): Metric[] {
    return [
      {
        icon: RefreshCw,
        value: `${this.scenarios[this.activeScenario].samples[this.activeSample].improvement}%`,
        label: 'Improvement'
      },
      {
        icon: Volume2,
        value: this.scenarios[this.activeScenario].samples[this.activeSample].duration,
        label: 'Duration'
      },
      {
        icon: Zap,
        value: '0.2s',
        label: 'Processing Time'
      }
    ];
  }

  theme = {
    bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
    bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
    bgSurface: this.isDarkTheme ? 'bg-[#1E293B]' : 'bg-gray-100',
    text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: this.isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    textMuted: this.isDarkTheme ? 'text-gray-400' : 'text-gray-500'
  };

  techStats = [
    { label: 'Accuracy Rate', value: '99.8%', icon: CheckCircle2 },
    { label: 'Processing Time', value: '2ms', icon: Zap },
    { label: 'MIT Research', value: 'Validated', icon: Brain }
  ];

  PlayIcon = Play;
  PauseIcon = Pause;

  selectScenario(index: number) {
    this.activeScenario = index;
    this.activeSample = 0;
  }

  selectSample(index: number) {
    this.activeSample = index;
  }

  handlePlay(type: 'original' | 'enhanced') {
    if (this.isPlaying && this.playingType === type) {
      this.isPlaying = false;
      this.playingType = null;
    } else {
      this.isPlaying = true;
      this.playingType = type;
      // Simüle edilmiş ses süresi
      setTimeout(() => {
        this.isPlaying = false;
        this.playingType = null;
      }, 5000);
    }
  }
}