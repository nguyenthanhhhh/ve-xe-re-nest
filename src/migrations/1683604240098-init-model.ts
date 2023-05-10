import { MigrationInterface, QueryRunner } from "typeorm";

export class InitModel1683604240098 implements MigrationInterface {
    name = 'InitModel1683604240098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stations" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "province" character varying NOT NULL, "avatar" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_f047974bd453c85b08bab349367" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trips" ("id" integer NOT NULL, "startTime" TIMESTAMP NOT NULL, "price" integer NOT NULL, "avatar" character varying, "slug" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fromStationId" integer, "toStationId" integer, CONSTRAINT "PK_f71c231dee9c05a9522f9e840f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "tripIdId" integer, CONSTRAINT "REL_59f0eff1ce5562f811bef48028" UNIQUE ("tripIdId"), CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company_vehicle" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vehicleIdId" integer, "companyIdId" integer, CONSTRAINT "PK_d8b03516a272a63caea65cbb48d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_8a764d76b739999b99f30009499" FOREIGN KEY ("fromStationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_f615c4d466aee4233d07ed9fd15" FOREIGN KEY ("toStationId") REFERENCES "stations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_59f0eff1ce5562f811bef480282" FOREIGN KEY ("tripIdId") REFERENCES "trips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company_vehicle" ADD CONSTRAINT "FK_98894c87f17fdef7f4fcb53c0f6" FOREIGN KEY ("vehicleIdId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "company_vehicle" ADD CONSTRAINT "FK_58435244983ea53a5da4b8b589a" FOREIGN KEY ("companyIdId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "company_vehicle" DROP CONSTRAINT "FK_58435244983ea53a5da4b8b589a"`);
        await queryRunner.query(`ALTER TABLE "company_vehicle" DROP CONSTRAINT "FK_98894c87f17fdef7f4fcb53c0f6"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_59f0eff1ce5562f811bef480282"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_f615c4d466aee4233d07ed9fd15"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_8a764d76b739999b99f30009499"`);
        await queryRunner.query(`DROP TABLE "company_vehicle"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "trips"`);
        await queryRunner.query(`DROP TABLE "stations"`);
    }

}
