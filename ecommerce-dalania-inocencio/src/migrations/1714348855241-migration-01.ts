import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration011714348855241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `ALTER TABLE "users" RENAME COLUMN "name" to "fullname"`, 
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users" RENAME COLUMN "fullname" to "name"`, 
        );
    }

}
