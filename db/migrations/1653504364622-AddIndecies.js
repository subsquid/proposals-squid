module.exports = class AddIndecies1653504364622 {
  name = 'AddIndecies1653504364622'

  async up(db) {
    await db.query(`CREATE INDEX "IDX_41065267c13533592a24836335" ON "vote" ("created_at") `)
    await db.query(`CREATE INDEX "IDX_8d701dbd422ac5e3e1d7a9a0d1" ON "vote" ("timestamp") `)
    await db.query(`CREATE INDEX "IDX_393e9084128f7c3d63fcc9d870" ON "proposal_group" ("preimage_hash") `)
    await db.query(`CREATE INDEX "IDX_ddb0d81ba23a6f7ff9d49e6245" ON "proposal_group" ("treasury_index") `)
    await db.query(`CREATE INDEX "IDX_8f3e46a377e8eacffa6d4f229a" ON "proposal_group" ("bounty_index") `)
    await db.query(`CREATE INDEX "IDX_cbe8c0c53c2ea11a3d9135c0c8" ON "proposal_group" ("tip_hash") `)
    await db.query(`CREATE INDEX "IDX_8a5d128863df341f83f7ae4974" ON "proposal" ("hash") `)
    await db.query(`CREATE INDEX "IDX_081891a0598db72dd59758cfae" ON "proposal" ("index") `)
    await db.query(`CREATE INDEX "IDX_f165403894de704708157f7cdb" ON "proposal" ("created_at_block") `)
    await db.query(`CREATE INDEX "IDX_92d4592195fbffd27d2079c0d5" ON "proposal" ("created_at") `)
  }

  async down(db) {
    await db.query(`DROP INDEX "public"."IDX_41065267c13533592a24836335"`)
    await db.query(`DROP INDEX "public"."IDX_8d701dbd422ac5e3e1d7a9a0d1"`)
    await db.query(`DROP INDEX "public"."IDX_393e9084128f7c3d63fcc9d870"`)
    await db.query(`DROP INDEX "public"."IDX_ddb0d81ba23a6f7ff9d49e6245"`)
    await db.query(`DROP INDEX "public"."IDX_8f3e46a377e8eacffa6d4f229a"`)
    await db.query(`DROP INDEX "public"."IDX_cbe8c0c53c2ea11a3d9135c0c8"`)
    await db.query(`DROP INDEX "public"."IDX_8a5d128863df341f83f7ae4974"`)
    await db.query(`DROP INDEX "public"."IDX_081891a0598db72dd59758cfae"`)
    await db.query(`DROP INDEX "public"."IDX_f165403894de704708157f7cdb"`)
    await db.query(`DROP INDEX "public"."IDX_92d4592195fbffd27d2079c0d5"`)
  }
}
