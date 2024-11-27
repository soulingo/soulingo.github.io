import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wave-animation',
  template: `
    <div class="absolute inset-0 flex items-center mx-2">
      <div *ngFor="let bar of bars; let i = index"
           class="flex-1 mx-[0.5px] rounded-full transition-all duration-100"
           [ngClass]="getBarColor()"
           [style.height.%]="heights[i]">
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class WaveAnimationComponent implements OnInit, OnDestroy {
    @Input() isPlaying = false;
    @Input() type: 'original' | 'enhanced' = 'original';
    
    bars: number[] = Array(50).fill(0); // Bar sayısını azalttık
    heights: number[] = Array(50).fill(20);
    private animationFrame: number | null = null;
  
    getBarColor(): string {
      return this.type === 'original' 
        ? 'bg-blue-500/30'
        : 'bg-blue-400/50';
    }
  
    ngOnInit() {
      this.startAnimation();
    }
  
    ngOnDestroy() {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
    }
  
    startAnimation() {
      const animate = () => {
        if (this.isPlaying) {
          this.updateHeights();
        } else {
          // Durgun halde tüm barları eşit yükseklikte tut
          this.heights = this.heights.map(() => 20);
        }
        this.animationFrame = requestAnimationFrame(animate);
      };
      
      this.animationFrame = requestAnimationFrame(animate);
    }
  
    private updateHeights() {
      // Her bar için rastgele ama kademeli değişim
      this.heights = this.heights.map((height, index) => {
        // Önceki bar'ın yüksekliğine doğru kademelendir
        const targetHeight = this.getRandomHeight();
        const diff = targetHeight - height;
        
        // Yumuşak geçiş için kademeli değişim
        return height + (diff * 1.7);
      });
    }
  
    private getRandomHeight(): number {
      const minHeight = 15;
      const maxHeight = this.type === 'original' ? 40 : 50;
      return minHeight + Math.random() * (maxHeight - minHeight);
    }
}