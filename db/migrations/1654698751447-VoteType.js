module.exports = class VoteType1654698751447 {
  name = 'VoteType1654698751447'

  async up(db) {
    await db.query(`ALTER TABLE "vote" ADD "type" character varying(10)`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "vote" DROP COLUMN "type"`)
  }
}
