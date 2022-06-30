import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import config from './config'
import * as modules from './mappings'

const db = new TypeormDatabase()
const processor = new SubstrateProcessor(db)

processor.setTypesBundle(config.typesBundle)
processor.setBatchSize(config.batchSize || 100)
processor.setDataSource(config.dataSource)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addEventHandler('Democracy.Proposed', modules.democracy.events.handleProposed)
processor.addEventHandler('Democracy.Tabled', modules.democracy.events.handleTabled)
processor.addEventHandler('Democracy.Started', modules.democracy.events.handleStarted)
processor.addEventHandler('Democracy.Passed', modules.democracy.events.handlePassed)
processor.addEventHandler('Democracy.NotPassed', modules.democracy.events.handleNotPassed)
processor.addEventHandler('Democracy.Cancelled', modules.democracy.events.handleCancelled)
processor.addEventHandler('Democracy.Executed', modules.democracy.events.handleExecuted)
processor.addCallHandler('Democracy.vote', modules.democracy.extrinsics.handleVote)

processor.addEventHandler('Democracy.PreimageNoted', modules.democracy.events.handlePreimageNoted)
processor.addEventHandler('Democracy.PreimageUsed', modules.democracy.events.handlePreimageUsed)
processor.addEventHandler('Democracy.PreimageInvalid', modules.democracy.events.handlePreimageInvalid)
processor.addEventHandler('Democracy.PreimageMissing', modules.democracy.events.handlePreimageMissing)
processor.addEventHandler('Democracy.PreimageReaped', modules.democracy.events.handlePreimageReaped)

processor.addEventHandler('CouncilCollective.Proposed', modules.council.events.handleProposed)
processor.addEventHandler('CouncilCollective.Approved', modules.council.events.handleApproved)
processor.addEventHandler('CouncilCollective.Dissaproved', modules.council.events.handleDisapproved)
processor.addEventHandler('CouncilCollective.Closed', modules.council.events.handleClosed)
processor.addEventHandler('CouncilCollective.Voted', modules.council.events.handleVoted)
processor.addEventHandler('CouncilCollective.Executed', modules.council.events.handleExecuted)

processor.addEventHandler('TechCommitteeCollective.Proposed', modules.techComittee.events.handleProposed)
processor.addEventHandler('TechCommitteeCollective.Approved', modules.techComittee.events.handleApproved)
processor.addEventHandler('TechCommitteeCollective.Dissaproved', modules.techComittee.events.handleDisapproved)
processor.addEventHandler('TechCommitteeCollective.Closed', modules.techComittee.events.handleClosed)
processor.addEventHandler('TechCommitteeCollective.Voted', modules.techComittee.events.handleVoted)
processor.addEventHandler('TechCommitteeCollective.Executed', modules.techComittee.events.handleExecuted)

processor.addEventHandler('Treasury.Proposed', modules.treasury.events.handleProposed)
processor.addEventHandler('Treasury.Awarded', modules.treasury.events.handleAwarded)
processor.addEventHandler('Treasury.Rejected', modules.treasury.events.handleRejected)

processor.run()
