module.exports = class VoteVoterNull1654697620272 {
  name = 'VoteVoterNull1654697620272'

  async up(db) {
    await db.query(`ALTER TABLE "vote" ALTER COLUMN "voter" DROP NOT NULL`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "vote" ALTER COLUMN "voter" SET NOT NULL`)
  }
}
