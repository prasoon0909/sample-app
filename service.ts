import ImageKitJs from 'imagekit-javascript';

export class ImagekitService {
  imagekit: ImageKitJs;

  constructor() {
    this.imagekit = this.client;
  }

  get client() {
    return new ImageKitJs({
      publicKey: "public_*****",
      urlEndpoint: "https://ik.imagekit.io/*****",
    });
  }

  upload(file: File): Promise<string> {
    const self = this;
    const fileName = file.name;
    const uploadOptions = {
      file,
      fileName,
      tags: ["tag1"],
    };
    return new Promise((resolve, reject) => {
      this.imagekit.upload(uploadOptions, function (err: any, result: any) {
        console.log(`🚀 => ImagekitService => upload => arguments:`, arguments);
        
        // error
        if (err) {
          console.log(`🚀 => ImagekitService => upload => err:`, err);
          return reject(err);
        }

        // get download url
        const url = self.imagekit.url({
          src: result.url,
          transformation: [{ height: "300", width: "400" }],
        });
        console.log(`🚀 => ImagekitService => upload => url:`, url);

        // return download url
        return resolve(url);
      });
    });
  }
}

