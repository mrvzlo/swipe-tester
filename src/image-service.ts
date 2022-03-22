export default class ImageService {
   fs = require('fs');

   getAll(): string[] {
      return require
         .context('@/assets/test-images', false)
         .keys()
         .map((x) => x.replace('./', ''))
         .map((x) => require(`@/assets/test-images/${x}`));
   }
}
