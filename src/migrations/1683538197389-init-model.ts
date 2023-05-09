import { MigrationInterface, QueryRunner } from "typeorm";

export class InitModel1683538197389 implements MigrationInterface {
    name = 'InitModel1683538197389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trips" ("id" integer NOT NULL, "startTime" TIMESTAMP NOT NULL, "price" integer NOT NULL, "avatar" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fromStationId" integer, "toStationId" integer, CONSTRAINT "PK_f71c231dee9c05a9522f9e840f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "province" character varying NOT NULL, "avatar" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_8a764d76b739999b99f30009499" FOREIGN KEY ("fromStationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_f615c4d466aee4233d07ed9fd15" FOREIGN KEY ("toStationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_f615c4d466aee4233d07ed9fd15"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_8a764d76b739999b99f30009499"`);
        await queryRunner.query(`DROP TABLE "stations"`);
        await queryRunner.query(`DROP TABLE "trips"`);
    }

}
