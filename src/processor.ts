import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { handleChainState } from './chainState'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import config from './config'
import * as modules from './mappings'

const db = new TypeormDatabase(`${config.chain.name}_processor`)

const processor = new SubstrateProcessor(db)

processor.setTypesBundle(config.typesBundle)
processor.setBatchSize(config.batchSize || 100)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || 3000)
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

processor.addEventHandler('Council.Proposed', modules.council.events.handleProposed)
processor.addEventHandler('Council.Approved', modules.council.events.handleApproved)
processor.addEventHandler('Council.Dissaproved', modules.council.events.handleDisapproved)
processor.addEventHandler('Council.Closed', modules.council.events.handleClosed)
processor.addEventHandler('Council.Voted', modules.council.events.handleVoted)
processor.addEventHandler('Council.Executed', modules.council.events.handleExecuted)

processor.addEventHandler('TechnicalCommittee.Proposed', modules.techComittee.events.handleProposed)
processor.addEventHandler('TechnicalCommittee.Approved', modules.techComittee.events.handleApproved)
processor.addEventHandler('TechnicalCommittee.Dissaproved', modules.techComittee.events.handleDisapproved)
processor.addEventHandler('TechnicalCommittee.Closed', modules.techComittee.events.handleClosed)
processor.addEventHandler('TechnicalCommittee.Voted', modules.techComittee.events.handleVoted)
processor.addEventHandler('TechnicalCommittee.Executed', modules.techComittee.events.handleExecuted)

processor.addEventHandler('Treasury.Proposed', modules.treasury.events.handleProposed)
processor.addEventHandler('Treasury.Awarded', modules.treasury.events.handleAwarded)
processor.addEventHandler('Treasury.Rejected', modules.treasury.events.handleRejected)
processor.addEventHandler('Treasury.BountyProposed', modules.bounties.events.handleProposed)
processor.addEventHandler('Treasury.BountyRejected', modules.bounties.events.handleRejected)
processor.addEventHandler('Treasury.BountyBecameActive', modules.bounties.events.handleBecameActive)
processor.addEventHandler('Treasury.BountyAwarded', modules.bounties.events.handleAwarded)
processor.addEventHandler('Treasury.BountyClaimed', modules.bounties.events.handleClaimed)
processor.addEventHandler('Treasury.BountyCanceled', modules.bounties.events.handleCanceled)
processor.addEventHandler('Treasury.BountyExtended', modules.bounties.events.handleExtended)
processor.addEventHandler('Treasury.NewTip', modules.tips.events.handleNewTip)
processor.addEventHandler('Treasury.TipsClosed', modules.tips.events.handleClosed)
processor.addEventHandler('Treasury.TipsRetracted', modules.tips.events.handleRetracted)
processor.addEventHandler('Treasury.TipsSlashed', modules.tips.events.handleSlashed)
processor.addCallHandler('Treasury.accept_curator', modules.bounties.extrinsic.handleAcceptCurator)

processor.addEventHandler('Tips.NewTip', modules.tips.events.handleNewTip)
processor.addEventHandler('Tips.TipsClosed', modules.tips.events.handleClosed)
processor.addEventHandler('Tips.TipsRetracted', modules.tips.events.handleRetracted)
processor.addEventHandler('Tips.TipsSlashed', modules.tips.events.handleSlashed)

processor.addEventHandler('Bounties.BountyProposed', modules.bounties.events.handleProposed)
processor.addEventHandler('Bounties.BountyRejected', modules.bounties.events.handleRejected)
processor.addEventHandler('Bounties.BountyBecameActive', modules.bounties.events.handleBecameActive)
processor.addEventHandler('Bounties.BountyAwarded', modules.bounties.events.handleAwarded)
processor.addEventHandler('Bounties.BountyClaimed', modules.bounties.events.handleClaimed)
processor.addEventHandler('Bounties.BountyCanceled', modules.bounties.events.handleCanceled)
processor.addEventHandler('Bounties.BountyExtended', modules.bounties.events.handleExtended)
processor.addCallHandler('Bounties.accept_curator', modules.bounties.extrinsic.handleAcceptCurator)

// processor.addPostHook(handleChainState)

processor.run()
