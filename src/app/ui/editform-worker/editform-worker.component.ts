import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';


@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css'],
})
export class EditformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() editWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onEditWorker() {
    this.editWorker.emit({
      name: this.name,
      surname: this.surname,
      type: this.type,
    });
  }

  
}
