import { ImagekitService } from './service';

const IMAGE_URL =
  'https://ik.imagekit.io/hzd8q2tzb/1_pgOk5R30LWFLn81DQqzN-w.webp?updatedAt=1690529031460';

const testingFunction = async () => {
  try {
    const service = new ImagekitService();
    console.log('\n SDK initialised 🚀 =====> \n', service);

    const imageUrl = service.client.url({
      src: IMAGE_URL,
      transformation: [
        {
          height: '300',
          width: '400',
        },
        {
          rotation: '90',
        },
      ],
    });

    console.log('\n URL Generated 🚀 =====> \n', imageUrl);
  } catch (error: any) {
    console.log('Error encountered :- ', error.message);
  }
};

testingFunction();
