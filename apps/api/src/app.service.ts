import { Injectable } from '@nestjs/common';


interface Animal {
  tipo: string, 
  estado: string
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createAnimal(animal:Animal): Animal {
    
    return animal
  }
}
