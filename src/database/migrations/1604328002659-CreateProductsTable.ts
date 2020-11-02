import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1604328002659 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns:[
        {
          name: 'id',
          type: 'integer',
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name_product',
          type: 'varchar'
        },
        {
          name: 'price',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'text'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }

}
