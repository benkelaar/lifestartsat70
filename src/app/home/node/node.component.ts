import { Component, Input, HostListener } from '@angular/core';
import { GraphNode } from 'src/app/decision-tree.service';

const nodeWidth = 320;
const textOffset = 60;

class Point {
  constructor(
    readonly x: number,
    readonly y: number
  ) {}

  offset(deltaX: number, deltaY: number) {
    return new Point(this.x + deltaX, this.y + deltaY);
  }

  boxOffSet(boxWidth: number = nodeWidth) {
    return this.offset(boxWidth, boxWidth / 2);
  }
}

class NodeDimensions {
  readonly nodeStart: Point;
  readonly nodeEnd: Point;
  readonly midPoint: Point;

  readonly textStart: number;
  readonly leftText: Point;
  readonly rightText: Point;

  constructor(
    readonly windowWidth: number,
    readonly windowHeight: number
    ) {
    this.midPoint = new Point(windowWidth / 2, windowHeight / 2);
    this.nodeStart = this.midPoint.boxOffSet(-nodeWidth/2);
    this.nodeEnd = this.nodeStart.boxOffSet();

    this.textStart = this.nodeStart.x + textOffset;

    let lineTextY = this.midPoint.y - textOffset / 4;
    this.leftText = new Point(this.nodeStart.x - 160, lineTextY);
    this.rightText = new Point(this.nodeEnd.x + textOffset, lineTextY);
  }
}

@Component({
  selector: 'graph-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent {
  @Input() selected: GraphNode | null = null;

  d = new NodeDimensions(window.innerWidth, window.innerHeight);

  constructor() {}

  @HostListener('window:resize')
  handleResize(): void {
    this.d = new NodeDimensions(window.innerWidth, window.innerHeight);
  }

  selectLeft(): void {
    this.selected = this.selected?.left!!
  }

  selectRight(): void {
    this.selected = this.selected?.right!!
  }

  graphStyle() {
    return {'background-image': 'url(/assets/photos/' + this.selected?.photo + ')' };
  }
}
