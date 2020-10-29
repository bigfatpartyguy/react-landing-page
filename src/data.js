import {v4 as uuidv4} from 'uuid';
import img01 from './assets/images/Img_01.png';
import img02 from './assets/images/Img_02.png';
import img03 from './assets/images/Img_03.png';
import img04 from './assets/images/Img_04.png';
import img05 from './assets/images/Img_05.png';
import img06 from './assets/images/Img_06.png';
import img07 from './assets/images/Img_07.png';
import img08 from './assets/images/Img_08.png';
import img09 from './assets/images/Img_09.png';
import img10 from './assets/images/Img_10.png';
import img11 from './assets/images/Img_11.png';
import img12 from './assets/images/Img_12.png';
import img13 from './assets/images/Img_13.png';
import img14 from './assets/images/Img_14.png';
import img15 from './assets/images/Img_15.png';

export const cardsData = [
  {img: img01, filename: 'dropbox logo.jpg', date: 'Jul 22', size: '110.2 KB'},
  {img: img02, filename: 'contact.jpg', date: 'Jun 14', size: '245.35 KB'},
  {img: img03, filename: 'Olimp-006.psd', date: 'Apr 11', size: '7.2 MB'},
  {
    img: img04,
    filename: 'Sweet pixels icon.jpg',
    date: 'Mar 5',
    size: '500.76 KB',
  },
  {
    img: img05,
    filename: 'boxing glove icon .jpg',
    date: 'May 20',
    size: '70 KB',
  },
  {img: img06, filename: 'Icon Set.jpg', date: 'Sep 26', size: '222.02 KB'},
  {img: img07, filename: 'instagram.jpg', date: 'Aug 14', size: '260 KB'},
  {img: img08, filename: 'Pin Art Dribble.jpg', date: 'Dec 13', size: '450 KB'},
  {img: img09, filename: 'Iron-Man-Mask.jpg', date: 'Feb 23', size: '245.2 KB'},
  {
    img: img10,
    filename: 'Warehouse design.png',
    date: 'Oct 05',
    size: '1.2 MB',
  },
  {
    img: img11,
    filename: 'Magic Bacon Ride.jpg',
    date: 'Sep 06',
    size: '150 KB',
  },
  {
    img: img12,
    filename: 'Mobile Portfolio.jpg',
    date: 'Dec 14',
    size: '500.65 KB',
  },
  {
    img: img13,
    filename: 'Facebook Button.jpg',
    date: 'Dec 19',
    size: '245.2 KB',
  },
  {img: img14, filename: 'Web Design.jpg', date: 'Jun 23', size: '982.2 KB'},
  {img: img15, filename: 'dribble fun.jpg', date: 'Oct 05', size: '50.2 KB'},
];

cardsData.forEach(card => {
  // eslint-disable-next-line
  card.id = uuidv4();
});
