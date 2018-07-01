import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

export interface IExternalProfile {
  title: string;
  imgUrl: string;
}

@Injectable()
export class UserAvatarService {
  currentUserAvatar: IExternalProfile|undefined;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) { }

  async setCurrentUserAvatar() {
    const user = await this.oktaAuth.getUser();

    const url = `https://www.avatarapi.com/js.aspx?email=${user.email}&size=128`;
    const res = await this.http.get(url, { responseType: 'text' }).toPromise();

    if (res.indexOf('No profile information') > -1) {
      return undefined;
    }

    const link = res.match(/(?<=write\(")(.*?)(?="\))/g);
    const imgUrl = res.match(/(?<=src=')(.*?)(?='\stitle=)/g);
    const title = res.match(/(?<=title=')(.*?)(?='\sclass=)/g);

    if (!imgUrl) {
      return undefined;
    }

    if (!imgUrl.length || !title.length) {
      return undefined;
    }

    this.currentUserAvatar = {
      title: title[0],
      imgUrl: imgUrl[0]
    };
  }
}
