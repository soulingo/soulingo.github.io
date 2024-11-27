import { Component, Input } from '@angular/core';
import {
    Fingerprint,
    Brain,
    BarChart2,
    CheckCircle2,
    Zap,
    ChevronRight,
    Users
} from 'lucide-angular';

interface Feature {
    icon: any;
    title: string;
    subtitle: string;
    stats: {
        value: string;
        label: string;
    };
    description: string;
    benefits: string[];
}

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
})
export class FeaturesComponent {
    @Input() isDarkTheme = true;

    activeFeature = 0;

    features: Feature[] = [
        {
            icon: Fingerprint,
            title: 'Self-Voice Technology',
            subtitle: 'Keep Your Identity While Perfecting Pronunciation',
            stats: { value: '40%', label: 'Increased Engagement' },
            description: 'Our patented technology preserves your unique voice characteristics while achieving perfect pronunciation, validated by MIT research.',
            benefits: [
                'Maintain natural voice qualities',
                'Build speaking confidence',
                'Reduce accent anxiety',
                'Express authentic self'
            ]
        },
        {
            icon: Brain,
            title: 'Edge AI Processing',
            subtitle: 'Private, Fast, and Always Available',
            stats: { value: '2ms', label: 'Processing Time' },
            description: 'Advanced AI runs directly on your device, ensuring privacy and enabling offline use with ultra-low latency.',
            benefits: [
                'Complete privacy protection',
                'Works without internet',
                'Real-time enhancement',
                'Consistent performance'
            ]
        },
        {
            icon: BarChart2,
            title: 'Proven Results',
            subtitle: 'Research-Backed Improvement',
            stats: { value: '8.4%', label: 'Learning Improvement' },
            description: 'Scientifically validated learning outcomes show significant improvements in pronunciation and confidence.',
            benefits: [
                'Validated by research',
                'Measurable progress',
                'Consistent results',
                'Backed by studies'
            ]
        }
    ];

    techStats = [
        { label: 'Accuracy Rate', value: '99.8%', icon: CheckCircle2 },
        { label: 'Processing Time', value: '2ms', icon: Zap },
        { label: 'MIT Research', value: 'Validated', icon: Brain }
    ];

    theme = {
        bg: this.isDarkTheme ? 'bg-[#030711]' : 'bg-gray-50',
        bgSecondary: this.isDarkTheme ? 'bg-[#0F1729]' : 'bg-white',
        text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
        textSecondary: this.isDarkTheme ? 'text-gray-300' : 'text-gray-600',
        border: this.isDarkTheme ? 'border-[#0EA5E9]' : 'border-[#0EA5E9]',
        borderLight: this.isDarkTheme ? 'border-[#0EA5E9]/20' : 'border-[#0EA5E9]/20'
    };

    // Icons
    ChevronRightIcon = ChevronRight;
    UsersIcon = Users;

    setActiveFeature(index: number): void {
        this.activeFeature = index;
    }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}