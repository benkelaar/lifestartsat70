import { Injectable } from '@angular/core';

export class GraphNode {
  parent: GraphNode | null = null;

  constructor(
    readonly title: string,
    readonly question: string,
    readonly left: GraphNode | null = null,
    readonly right: GraphNode | null = null,
  ) {
    if (left) left.parent = this;
    if (right) right.parent = this;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DecisionTreeService {
  constructor() { }

  tree: GraphNode = new GraphNode(
    'Het leven begint', 'Wat gaan we doen vandaag?', 
    new GraphNode(
      'Iets actiefs', 'Wil je dat sociaal of mindful?',
      new GraphNode('Sociaal', 'Ga met Bart of Lotte bootcampen!'),
      new GraphNode('Mindful', 'Doe een Yoga sessie met Adrien!'),
    ),
    new GraphNode('Iets creatiefs', 'Wil je dat sociaal of mindful?')
  )
}
