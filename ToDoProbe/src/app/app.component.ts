import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
  authors: string[] = ['William Shakespeare', 'Bill Gates'];
  monologueHamlet = 'To be or not to be';
  monologueGates: string[] = [
    'If you think your teacher is tough, wait till you get a boss',
    'Life is not fair — get used to it!',
    'Success is a lousy teacher. It seduces smart people into thinking they can’t lose',
    'Be nice to nerds. Chances are you’ll end up working for one'
  ];
  titles: string[] = [
    'Born',
    'Education',
    'Occupations',
    'Years active',
    'Known for',
    'Title',
    'Board member of',
    'Spouse',
    'Children',
    'Parents'
  ];
  infos: string[] = [
    'William Henry Gates III October 28, 1955 (age 67) Seattle, Washington, U.S.',
    'Harvard University (dropped out)',
    'Businessman philanthropist programmer investor writer',
    '1972–present',
    'Co-founder of Microsoft and Bill & Melinda Gates Foundation',
    'Partial list of founded and chaired companies',
    'Berkshire Hathaway Microsoft (former, both)',
    'Melinda French ​(m. 1994; div. 2021)',
    '3',
    'Bill Gates Sr. (father) Mary Maxwell (mother)'
  ];
  values: number[] = [0,1,2,3,4,5,6,7,8,9]
}
