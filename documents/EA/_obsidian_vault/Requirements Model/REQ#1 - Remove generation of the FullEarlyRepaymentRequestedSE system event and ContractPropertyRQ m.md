---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4908 (CLM-1742) Stopping support of ContractPropertyServiceService calling"
domain: "Requirements Model"
element_id: 1410098
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Remove generation of the FullEarlyRepaymentRequestedSE system event and ContractPropertyRQ message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4908 (CLM-1742) Stopping support of ContractPropertyServiceService calling

## 📝 Notes

The notification about FER and CET requests are broadcasted via standard LoanServiceRequest message. It means, we will stop supporting of ContractPropertyServiceService calling for sending these information.

Notice: LCS is developing its part in CBL-3825. As soon as LCS part covered by CBL-3825 is deployed on all countries, this task can be deployed as well.

Supposed changes in the system:

	
- UC 03.052 Create Full Early repayment request - remove generation of the FullEarlyRepaymentRequestedSE system event
	
- UC 01.380 Prepare Contract for Consolidation - replace generation of the FullEarlyRepaymentRequestedSE with LoanServiceRequestCreatedSE system event at FER creation on consolidated contracts
	
- remove generation of the ContractPropertyRQ message (JMS) and ContractPropertyServiceService calling (check with OSB team)

## 📊 Appears In (1 diagrams)

- Custom: CBL-4908 (CLM-1742) Stopping support of ContractPropertyServiceService calling
