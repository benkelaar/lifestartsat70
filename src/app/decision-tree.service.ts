import { Injectable } from '@angular/core';

export class GraphNode {
  parent: GraphNode | null = null;

  constructor(
    readonly title: string,
    readonly question: string,
    readonly left: GraphNode | null = null,
    readonly right: GraphNode | null = null,
    readonly photo: string = 'herma',
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
  'Iets actiefs', 'Wil je dat binnen of buiten?',
      new GraphNode('Binnen', 'Wil je dat uit of thuis doen?',
        new GraphNode('Uit', 'Ga lekker uit eten met Gap en Wolfie!', null, null, 'uit-eten-wolfie'),
        new GraphNode('Thuis', 'Lekker gezellig of lekker uitdagend?',
          new GraphNode('Gezellig', 'Ga lekker knuffelen met Douwe op de bank', null, null, 'knuffelen-douwe'),
          new GraphNode('Uitdagend', 'Gaaf racen op de racebaan met de boys!', null, null, 'racebaan-wolfie'),
        ),
      ),
      new GraphNode('Buiten', 'Wil je verdieping of verkenning?',
        new GraphNode('Verdieping', 'Dierenliefde of opfrisser?',
          new GraphNode('Dierenliefde', 'Ren met Wolfie achter de schaapjes aan!', null, null, 'spelen-met-dieren'),
          new GraphNode('Opfrisser', 'Ga lekker uitwaaien op het strand!', null, null, 'uitwaaien'),
        ),
        new GraphNode('Verkenning', 'Rustig aan of energiek?',
          new GraphNode('Rustig aan', 'Ga lekker wandelen met je familie', null, null, 'wandelen-familie'),
          new GraphNode('Energiek', 'Ga flink rennen met Gap', null, null, 'rennen-gap'),
        )
      ),
    ),
    new GraphNode('Iets creatiefs', 'Met Wolfie of met iemand anders?',
      new GraphNode('Wolfie', 'Family time of quality time?',
        new GraphNode('Family time', 'Er op uit of fantasierijk?',
          new GraphNode('Er op uit', 'Ga lekker naar de dierentuin!', null, null, 'dierentuin'),
          new GraphNode('Fantasierijk', 'Verkleed je en doe eens anders!', null, null, 'verkleedpartij'),
        ),
        new GraphNode('Quality time', 'Door de maag of voor de geest',
          new GraphNode('Door de maag', 'Geniet van culinair genot!', null, null, 'ijsje-eten'),
          new GraphNode('Voor de geest', 'Bouw een paleis van blokken', null, null, 'blokken'),
        )
      ),
      new GraphNode('De rest', 'Lekker ravotten of lekker creatief?',
        new GraphNode('Lekker ravotten', 'Op het strand of in de speeltuin?',
          new GraphNode('Op het strand', 'Bouw een kasteel op het strand!', null, null, 'spelen-strand'),
          new GraphNode('In de speeltuin', 'Losgaan in de speeltuin!', null, null, 'spelen-speeltuin'),
        ),
        new GraphNode('Creatief', 'Iets bouwen of muzikaal aan de slag?',
          new GraphNode('Iets bouwen', 'Bouw een wereld van Duplo!', null, null, 'duploen-familie'),
          new GraphNode('Muzikaal', 'Muzikaal genieten met Gap!', null, null, 'concert-gap'),
        )
      )
    )
  )
}
