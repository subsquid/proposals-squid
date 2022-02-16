module.exports = class Data1644848902159 {
  name = 'Data1644848902159'

  async up(db) {
    await db.query(`CREATE TABLE "chain_info" ("id" character varying NOT NULL, "name" text NOT NULL, "token" jsonb NOT NULL, CONSTRAINT "PK_1b82ce2acbc16bfc7f84bfdc8ff" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "chain_state" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE, "token_balance" numeric, "token_holders" numeric, "council_members" integer, "democracy_proposals" integer, "council_proposals" integer, "chain_id" character varying, CONSTRAINT "PK_e28e46a238ada7cbbcf711b3f6c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_65fadac04beb5fa4f5a4e4066c" ON "chain_state" ("chain_id") `)
    await db.query(`CREATE INDEX "IDX_b15977afb801d90143ea51cdec" ON "chain_state" ("timestamp") `)
    await db.query(`ALTER TABLE "chain_state" ADD CONSTRAINT "FK_65fadac04beb5fa4f5a4e4066c0" FOREIGN KEY ("chain_id") REFERENCES "chain_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "chain_info"`)
    await db.query(`DROP TABLE "chain_state"`)
    await db.query(`DROP INDEX "public"."IDX_65fadac04beb5fa4f5a4e4066c"`)
    await db.query(`DROP INDEX "public"."IDX_b15977afb801d90143ea51cdec"`)
    await db.query(`ALTER TABLE "chain_state" DROP CONSTRAINT "FK_65fadac04beb5fa4f5a4e4066c0"`)
  }
}
