import { Component, OnDestroy } from '@angular/core';

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
  lights: LightItem[] = [
    { color: 'red', label: 'Rojo' },
    { color: 'yellow', label: 'Ámbar' },
    { color: 'green', label: 'Verde' }
  ];

  activeLight: LightColor = 'red';
  isAuto = false;
  private intervalId: any = null;

  setLight(color: LightColor) {
    this.activeLight = color;
  }

  nextLight() {
    switch (this.activeLight) {
      case 'red':
        this.activeLight = 'green';
        break;
      case 'green':
        this.activeLight = 'yellow';
        break;
      case 'yellow':
        this.activeLight = 'red';
        break;
    }
  }

  toggleAuto() {
    this.isAuto = !this.isAuto;
    if (this.isAuto) {
      this.intervalId = setInterval(() => {
        this.nextLight();
      }, 2000);
    } else {
      this.stopAuto();
    }
  }

  private stopAuto() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.stopAuto();
  }
}