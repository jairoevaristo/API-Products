import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
class Products { 
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name_product: string;

  @Column()
  price: string;

  @Column()
  description: string;
};

export default Products;