import { Component, Input } from '@angular/core';
import {
  Shield,
  Cpu,
  WifiOff,
  Server,
  Wifi,
  Lock,
  XCircle,
  CheckCircle2
} from 'lucide-angular';

interface Tab {
  id: 'privacy' | 'edge' | 'offline';
  label: string;
  icon: any;
}

interface ComparisonPoint {
  title: string;
  icon: any;
  points: string[];
  negative: boolean;
}

@Component({
  selector: 'app-privacy-security',
  templateUrl: './privacy-security.component.html',
})
export class PrivacySecurityComponent {
  @Input() isDarkTheme = true;

  activeTab: 'privacy' | 'edge' | 'offline' = 'privacy';

  readonly tabs: Tab[] = [
    { id: 'privacy', label: 'Privacy First', icon: Shield },
    { id: 'edge', label: 'Edge Processing', icon: Cpu },
    { id: 'offline', label: 'Offline Capable', icon: WifiOff }
  ];

  readonly comparisons: Record<'privacy' | 'edge' | 'offline', ComparisonPoint[]> = {
    privacy: [
      {
        title: 'Traditional Apps',
        icon: Server,
        points: [
          'Voice data sent to cloud',
          'Privacy risks',
          'Data retention',
          'Third-party sharing'
        ],
        negative: true
      },
      {
        title: 'SouLingo',
        icon: Shield,
        points: [
          '100% on-device processing',
          'No data collection',
          'Complete privacy',
          'No cloud dependency'
        ],
        negative: false
      }
    ],
    edge: [
      {
        title: 'Cloud Processing',
        icon: Wifi,
        points: [
          'Internet required',
          'Variable latency',
          'Server costs',
          'Bandwidth dependent'
        ],
        negative: true
      },
      {
        title: 'Edge AI',
        icon: Cpu,
        points: [
          'Ultra-fast processing',
          'Consistent performance',
          'Cost-effective',
          'Resource efficient'
        ],
        negative: false
      }
    ],
    offline: [
      {
        title: 'Online Apps',
        icon: Wifi,
        points: [
          'Requires internet',
          'Limited offline use',
          'Connection issues',
          'Travel restrictions'
        ],
        negative: true
      },
      {
        title: 'SouLingo Offline',
        icon: WifiOff,
        points: [
          'Full offline support',
          'Learn anywhere',
          'No interruptions',
          'Travel friendly'
        ],
        negative: false
      }
    ]
  };

  // Icons
  XCircleIcon = XCircle;
  CheckCircle2Icon = CheckCircle2;
  LockIcon = Lock;

  theme = {
    bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
    bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
    text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: this.isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    border: this.isDarkTheme ? 'border-[#0EA5E9]' : 'border-[#0EA5E9]',
    borderLight: this.isDarkTheme ? 'border-[#0EA5E9]/20' : 'border-[#0EA5E9]/20'
  };

  setActiveTab(tabId: 'privacy' | 'edge' | 'offline'): void {
    this.activeTab = tabId;
  }
}
