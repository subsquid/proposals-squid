module.exports = class Data1645030927439 {
  name = 'Data1645030927439'

  async up(db) {
    await db.query(`ALTER TABLE "chain_state" DROP COLUMN "token_holders"`)
    await db.query(`ALTER TABLE "chain_state" ADD "token_holders" integer`)
  }

  async down(db) {
    await db.query(`ALTER TABLE "chain_state" ADD "token_holders" numeric`)
    await db.query(`ALTER TABLE "chain_state" DROP COLUMN "token_holders"`)
  }
}
