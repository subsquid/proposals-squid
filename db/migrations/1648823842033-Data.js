module.exports = class Data1648823842033 {
  name = 'Data1648823842033'

  async up(db) {
    await db.query(`CREATE TABLE "chain" ("id" character varying NOT NULL, "token" jsonb NOT NULL, "para_id" integer, "relay_chain" character varying(8), CONSTRAINT "PK_8e273aafae283b886672c952ecd" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "chain_state" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "token_balance" numeric NOT NULL, "token_holders" integer NOT NULL, "council_members" integer NOT NULL, "democracy_proposals" integer NOT NULL, "council_proposals" integer NOT NULL, "chain_id" character varying NOT NULL, CONSTRAINT "PK_e28e46a238ada7cbbcf711b3f6c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_65fadac04beb5fa4f5a4e4066c" ON "chain_state" ("chain_id") `)
    await db.query(`CREATE INDEX "IDX_b15977afb801d90143ea51cdec" ON "chain_state" ("timestamp") `)
    await db.query(`ALTER TABLE "chain_state" ADD CONSTRAINT "FK_65fadac04beb5fa4f5a4e4066c0" FOREIGN KEY ("chain_id") REFERENCES "chain"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "chain"`)
    await db.query(`DROP TABLE "chain_state"`)
    await db.query(`DROP INDEX "public"."IDX_65fadac04beb5fa4f5a4e4066c"`)
    await db.query(`DROP INDEX "public"."IDX_b15977afb801d90143ea51cdec"`)
    await db.query(`ALTER TABLE "chain_state" DROP CONSTRAINT "FK_65fadac04beb5fa4f5a4e4066c0"`)
  }
}
