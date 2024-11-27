import { Component, Input } from '@angular/core';
import {
    Mail,
    Github,
    Twitter,
    Globe,
    ChevronRight
} from 'lucide-angular';

interface FooterSection {
    title: string;
    links: Array<{
        label: string;
        href: string;
        badge?: string;
    }>;
}

interface SocialLink {
    icon: any;
    href: string;
    label: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    @Input() isDarkTheme = true;

    footerLinks: Record<string, FooterSection> = {
        product: {
            title: 'Product',
            links: [
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'Privacy & Security', href: '#privacy' },
                { label: 'Beta Access', href: '#beta' }
            ]
        }
    };

    socialLinks: SocialLink[] = [
        { icon: Mail, href: 'mailto:soulingo.me@gmail.com', label: 'Email' },
        { icon: Github, href: 'https://github.com/soulingo', label: 'GitHub' },
        { icon: Twitter, href: 'https://twitter.com/soulingo', label: 'Twitter' }
    ];

    // Icons
    GlobeIcon = Globe;
    ChevronRightIcon = ChevronRight;

    theme = {
        bg: this.isDarkTheme ? 'bg-[#0F172A]' : 'bg-gray-50',
        bgSecondary: this.isDarkTheme ? 'bg-[#1E293B]' : 'bg-white',
        text: this.isDarkTheme ? 'text-white' : 'text-gray-900',
        textSecondary: this.isDarkTheme ? 'text-gray-400' : 'text-gray-500',
        border: this.isDarkTheme ? 'border-gray-800' : 'border-gray-200'
    };

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId?.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}