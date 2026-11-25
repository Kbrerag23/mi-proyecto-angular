import { Component, OnDestroy, signal } from '@angular/core';

export type LightColor = 'red' | 'yellow' | 'green';

interface LightItem {
  color: LightColor;
  label: string;
}

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.html',
  styleUrl: './traffic-light.css'
})
export class TrafficLightComponent implements OnDestroy {
  semaforos = [1, 2, 3, 4, 5, 6];

  lights: LightItem[] = [
    { color: 'red', label: 'Rojo' },
    { color: 'yellow', label: 'Ámbar' },
    { color: 'green', label: 'Verde' }
  ];

  activeLight = signal<LightColor>('red');
  isAuto = signal<boolean>(false);

  private timer: ReturnType<typeof setInterval> | null = null;

  setLight(color: LightColor) {
    this.activeLight.set(color);
  }

  nextLight() {
    const current = this.activeLight();

    if (current === 'green') {
      this.activeLight.set('yellow');
    } else if (current === 'yellow') {
      this.activeLight.set('red');
    } else {
      this.activeLight.set('green');
    }
  }

  toggleAuto() {
    if (this.isAuto()) {
      this.stopAuto();
    } else {
      this.isAuto.set(true);
      this.nextLight();

      this.timer = setInterval(() => {
        this.nextLight();
      }, 2500);
    }
  }

  private stopAuto() {
    this.isAuto.set(false);
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy() {
    this.stopAuto();
  }
}