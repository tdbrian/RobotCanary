import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const expandableAnimation = [
  trigger('openClose', [
    state('true', style({
      height: '*',
      backgroundColor: '#e6e6e6',
      paddingBottom: '20px'
    })),
    state('false', style({
      height: '0px',
      backgroundColor: '*',
      padding: '*'
    })),
    transition('false <=> true', animate('.3s ease-out'))
  ])
];
