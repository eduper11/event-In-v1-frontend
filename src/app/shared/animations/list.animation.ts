import {
  state,
  transition,
  trigger,
  animate,
  style,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const LIST_ANIMATION = trigger('list', [
  transition(':enter', [
    // Skip child selection of listItems in sn-post-comment
    query('@listItems:not(sn-post-comment)', stagger(300, animateChild()), {
      optional: true
    })
  ])
]);

export const LIST_ITEMS_ANIMATION = trigger('listItems', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate(
      '.5s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 })
    )
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1, height: '*' }),
    animate(
      '1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({
        transform: 'scale(0.5)',
        opacity: 0,
        height: '0px',
        margin: '0px'
      })
    )
  ])
]);

// export const POP_OVER_ANIMATION = trigger('popOverState', [
//   state(
//     'show',
//     style({
//       opacity: 1
//     })
//   ),
//   state(
//     'hide',
//     style({
//       opacity: 0
//     })
//   ),
//   transition('show => hide', animate('600ms ease-out')),
//   transition('hide => show', animate('1000ms ease-in'))
// ]);
