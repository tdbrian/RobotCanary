import { HttpClient } from '@angular/common/http';

export interface IExternalProfile {
  title: string;
  imgUrl: string;
}

export const getExternalInfo = async (http: HttpClient, email: string): Promise<IExternalProfile|undefined> => {
  const url = `https://www.avatarapi.com/js.aspx?email=${email}&size=128`;
  const res = await http.get(url, { responseType: 'text' }).toPromise();

  if (res.indexOf('No profile information') > -1) {
    return undefined;
  }

  const link = res.match(/(?<=write\(")(.*?)(?="\))/g);
  const imgUrl = res.match(/(?<=src=')(.*?)(?='\stitle=)/g);
  const title = res.match(/(?<=title=')(.*?)(?='\sclass=)/g);

  if (!imgUrl.length || !title.length) {
    return undefined;
  }

  return {
    title: title[0],
    imgUrl: imgUrl[0]
  };
};
