import { IMineralBase} from './imineralbase';

export class Mineral implements IMineralBase{
  id!: number;
  Name!: string;
  Formula!: string;
  Class!: string;
  Price!: string;
  Currency!: any;
  Quantity!: string;
  Units!: any;
  Details!: string;
  BuySell!: number;
  Image?: string | undefined;
  PostedOn!: string;

}
