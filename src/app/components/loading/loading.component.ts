import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Loadingstate } from 'src/store/loading/Loading.state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent  implements OnInit {

  loadingState$!: Observable<Loadingstate>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadingState$ = this.store.select('loading');
  }

}
