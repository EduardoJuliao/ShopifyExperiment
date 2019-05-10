import { Component, OnInit, Input } from '@angular/core';
import { Sortable, Draggable } from '@shopify/draggable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private sortable: any;

  ngOnInit() {
    let containers = document.querySelectorAll('#MultipleContainers .list');

    this.sortable = new Sortable(containers, {
      draggable: `.listItem`,
      mirror: {
        constrainDimensions: false
      }
    });

    this.sortable.on('drag:start', ev => {
      console.log(ev);
      console.log(this.getSource(ev));
    });
  }

  private getSource(ev: any): any {
    return {
      sourceId: ev.data.source.childNodes[0].dataset['id'],
      sourceContainerId: ev.data.sourceContainer.dataset['id']
    };
  }

  private getDestination(ev: any): any {
    return {};
  }
}
