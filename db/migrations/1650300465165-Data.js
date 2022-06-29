module.exports = class Data1650300465165 {
  name = 'Data1650300465165'

  async up(db) {
    await db.query(`CREATE TABLE "vote" ("id" character varying NOT NULL, "voter" text NOT NULL, "created_at" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "decision" character varying(7), "balance" jsonb, "lock_period" integer, "proposal_id" character varying NOT NULL, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_db85a3f8526cbaa2865faf8637" ON "vote" ("proposal_id") `)
    await db.query(`CREATE TABLE "proposal_group" ("id" character varying NOT NULL, "preimage_hash" text, "treasury_index" integer, "bounty_index" integer, "tip_hash" text, CONSTRAINT "PK_a55a5b4a31bbfc52ae411bdc438" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "proposal" ("id" character varying NOT NULL, "type" character varying(21) NOT NULL, "hash" text, "index" integer, "proposer" text, "deposit" numeric, "threshold" jsonb, "proposed_call" jsonb, "curator" text, "payee" text, "reward" numeric, "status" character varying(11) NOT NULL, "status_history" jsonb NOT NULL, "created_at" integer NOT NULL, "ended_at" integer, "updated_at" integer NOT NULL, "group_id" character varying, CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_a55a5b4a31bbfc52ae411bdc43" ON "proposal" ("group_id") `)
    await db.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_db85a3f8526cbaa2865faf8637f" FOREIGN KEY ("proposal_id") REFERENCES "proposal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "proposal" ADD CONSTRAINT "FK_a55a5b4a31bbfc52ae411bdc438" FOREIGN KEY ("group_id") REFERENCES "proposal_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "vote"`)
    await db.query(`DROP INDEX "public"."IDX_db85a3f8526cbaa2865faf8637"`)
    await db.query(`DROP TABLE "proposal_group"`)
    await db.query(`DROP TABLE "proposal"`)
    await db.query(`DROP INDEX "public"."IDX_a55a5b4a31bbfc52ae411bdc43"`)
    await db.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_db85a3f8526cbaa2865faf8637f"`)
    await db.query(`ALTER TABLE "proposal" DROP CONSTRAINT "FK_a55a5b4a31bbfc52ae411bdc438"`)
  }
}
