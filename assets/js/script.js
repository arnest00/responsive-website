const menu = [
  {
    id: 1,
    name: 'Kimbap',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 3.99,
    img: 'https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80'
  },
  {
    id: 2,
    name: 'Tuna Kimbap',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80'
  },
  {
    id: 3,
    name: 'Kimchi Kimbap',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1864&q=80'
  },
  {
    id: 4,
    name: 'Fried Mandu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1583224994076-ae951d019af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 5,
    name: 'Steamed Mandu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 4.99,
    img: 'https://images.unsplash.com/photo-1583224994076-ae951d019af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 5,
    name: 'Naengmyeon',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 5.99,
    img: 'https://images.unsplash.com/photo-1540138279543-b3728f037467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1850&q=80'
  }
];
let menuLooped = '';
for (let i = 0; i < menu.length; i++) {
  menuLooped = menuLooped +
    '<div class="item-container">' +
      '<div class="item-header">' +
        '<span class="item-name">' + menu[i].name + '</span>' +
        '<span class="item-price">$' + menu[i].price + '</span>' +
      '</div>' +
      '<img class="item-image" src=' + menu[i].img + '/>' +
      '<span class="item-desc">' + menu[i].desc + '</span>' +
    '</div>';
};
const itemsContainer = document.getElementById('items-container');
itemsContainer.innerHTML = menuLooped;