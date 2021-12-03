import { Component, Input, HostListener } from '@angular/core';

const nodeWidth = 320;
const textOffset = 60;

class Point {
  constructor(
    readonly x: number,
    readonly y: number
  ) {}

  offset(deltaX: number, deltaY: number) {
    return new Point(this.x + deltaX, this.y + deltaY)
  }
}

class NodeDimensions {
  readonly boxTopLeft: Point;
  readonly boxBottomRight: Point;
  readonly midPoint: Point

  readonly textLeft: number;

  constructor(
    readonly windowWidth: number,
    readonly windowHeight: number
    ) {
    this.midPoint = new Point(windowWidth / 2, windowHeight / 2)
    this.boxTopLeft = this.midPoint.offset(-nodeWidth/2, -nodeWidth/4)
    this.boxBottomRight = this.boxTopLeft.offset(nodeWidth, nodeWidth / 2);

    this.textLeft = this.boxTopLeft.x + textOffset;
  }
}

@Component({
  selector: 'graph-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input() text: string = '';

  dimensions = new NodeDimensions(window.innerWidth, window.innerHeight);

  constructor() {}

  @HostListener('window:resize')
  handleResize(): void {
    this.dimensions = new NodeDimensions(window.innerWidth, window.innerHeight);
  }

}
