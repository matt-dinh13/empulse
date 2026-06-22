---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4771 - Concurrent modification based on FER finishing"
domain: "Requirements Model"
element_id: 1692085
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Concurrent modification based on FER finishing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4771 - Concurrent modification based on FER finishing

## 📝 Notes

1. Remove finishing automatically from processing of LoanServiceRequestExecutedSE and ContractFERExecutedSE and COPExecutedSE
- For LoanServiceRequestExecutedSE extract setting of conditions accepted from finishing method and move into similar method for SAI
2. Create finishing request (contract status transition request) during loan service execution
- based on flag on service and for CEL or newSAI
- always create for consolidation FER service
3. Remove processing of ContractFERExecutedSE completelly, move functionality into CSI package, will be triggered based on ContractFinishingAutomaticallySE
- Check that refinanced contract has finished and FER with CONSOLIDATION variant was executed
-- Move termination of bonus services
-- Move checking that all refinanced contracts are finished and then:
a) finilization of consolidation service
b) creation consolidation business event
c) sending of LoanServiceRequestExecutedSE for consolidating contract

## 📊 Appears In (1 diagrams)

- Custom: CLM-4771 - Concurrent modification based on FER finishing
