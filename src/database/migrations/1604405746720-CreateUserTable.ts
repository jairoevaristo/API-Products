import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1604405746720 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isGenerated: true,
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'increment',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,          
        },
        {
          name: 'password',
          type: 'varchar',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
