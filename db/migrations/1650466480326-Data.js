module.exports = class Data1650466480326 {
  name = 'Data1650466480326'

  async up(db) {
    await db.query(`ALTER TABLE "proposal" ADD "created_at_block" integer NOT NULL`)
    await db.query(`ALTER TABLE "proposal" ADD "ended_at_block" integer`)
    await db.query(`ALTER TABLE "proposal" ADD "updated_at_block" integer`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "created_at"`)
    await db.query(`ALTER TABLE "proposal" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "ended_at"`)
    await db.query(`ALTER TABLE "proposal" ADD "ended_at" TIMESTAMP WITH TIME ZONE`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "updated_at"`)
    await db.query(`ALTER TABLE "proposal" ADD "updated_at" TIMESTAMP WITH TIME ZONE`)
    await db.query(`CREATE INDEX "IDX_788a2da76636d59b8803d21968" ON "proposal" ("type") `)
  }

  async down(db) {
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "created_at_block"`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "ended_at_block"`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "updated_at_block"`)
    await db.query(`ALTER TABLE "proposal" ADD "created_at" integer NOT NULL`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "created_at"`)
    await db.query(`ALTER TABLE "proposal" ADD "ended_at" integer`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "ended_at"`)
    await db.query(`ALTER TABLE "proposal" ADD "updated_at" integer NOT NULL`)
    await db.query(`ALTER TABLE "proposal" DROP COLUMN "updated_at"`)
    await db.query(`DROP INDEX "public"."IDX_788a2da76636d59b8803d21968"`)
  }
}
