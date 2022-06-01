#### Description
Squid for [DeepDAO](https://deepdao.io/) that allows to get a history of chain states and governance proposals
#### Sample query
```gql
query MyQuery {
  proposals(where: {type_eq: CouncilMotion}, limit: 10) {
    index
    hash
    proposer
    proposedCall {
      section
      method
      description
    }
    status
    threshold {
      ... on MotionThreshold {
        __typename
        value
      }
    }
    type
    voting(limit: 10) {
      voter
      decision
    }
  }
}

```