import { Asset } from 'expo-asset';

const front = Asset.fromModule(
  require('../../assets/test-images/IMG_1676.jpg')
).uri;
const back = Asset.fromModule(
  require('../../assets/test-images/IMG_1677.jpg')
).uri;

const data = [
  {
    title: 'Bam Adebayo (Front)',
    body: 'Rookie Auto Patch',
    imgUrl: front,
  },
  {
    title: 'Bam Adebayo (Back)',
    body: 'Rookie Auto Patch',
    imgUrl: back,
  },
];

export default data;
