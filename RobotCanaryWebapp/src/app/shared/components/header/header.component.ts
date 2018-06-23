import { Component, OnInit, Input } from '@angular/core';
import { UserAvatarService } from '../../../core/services/user-avatar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(public avatarSvc: UserAvatarService) { }

  ngOnInit() {
  }

}
