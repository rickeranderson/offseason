import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CreateEditDialogComponent } from './create-edit-dialog/create-edit-dialog.component';
import { DeleteDialogComponent } from '../../../core/shared/delete-dialog/delete-dialog.component';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { UpdateUser, CreateUser, DeleteUser } from '../../../store/user-store/user.actions';

@Component({
  selector: 'app-manage-players',
  templateUrl: './manage-players.component.html',
  styleUrls: ['./manage-players.component.scss']
})
export class ManagePlayersComponent implements OnInit, OnChanges {
  @Input() players: User[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['firstName', 'lastName', 'actions'];

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.players);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.players);
  }

  addPlayer() {
    const dialogRef = this.dialog.open(CreateEditDialogComponent, {
      width: '350px',
      data: {mode: 'Create', player: {id: '', firstName: '', lastName: '', role: '', activityList: [] } as User}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new CreateUser({firstName: result.player.firstName, lastName: result.player.lastName}));
      }
    });
  }

  editPlayer(player: User) {
    const dialogRef = this.dialog.open(CreateEditDialogComponent, {
      width: '350px',
      data: {mode: 'Edit', player: player as User}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new UpdateUser(result.player));
      }
    });
  }

  deletePlayer(player: User) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new DeleteUser(player.id));
      }
    });
  }
}
