---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue"
domain: "Requirements Model"
element_id: 1484855
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 DEV for CBL-7209 FER processing queue REQ#1 - Refactoring of automatic and asynchronous FER processing

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue

## 📝 Notes

This requirement is not directly required by the CBL but it will make the implementation much clearer and maintainable. In this requirement we will change functionalities in responsibility of ISPAY team. It is necessary to share the final MR with Jakub Vermirovsky (or another ISPAY developer if Jakub is not available) for revision before merging it.

1. We need to implement new system event CreateFerRequestAutomaticallySE as a child of ContractEvent and change ProcessFerAutomaticallySE to inherit from ContractEvent instead of ApplicationEvent.

2. We need to rename system property useJobForAutomaticFerProcessing to useAsyncFerProcessing.

3. We need to add a new system property enableAutomaticFerProcessing (boolean) and turn it on only for PH, turn off on other countries.

4. Following changes have to be made to UC 05.184 Reflect change of balance:
- Revise conditions in steps 5. and 6. and update it in the code respectively.
- If a contract has no active FER request and it has automaticFerProcessing setting turned on and the new system property enableAutomaticFerProcessing is turned on then we need to generate the new CreateFerRequestAutomaticallySE system event instead of generating ProcessFerAutomaticallySE system event.

5. We need to implement a new UC which will process system events of type CreateFerRequestAutomaticallySE. It will use ContractService REST API to evaluate and create a FER request under certain conditions.

6. Following changes have to be made to UC 08.041 Process FER automatically:
- We have to remove the branch for processing of FER service without existing request with setting automaticFerProcessing turned on. Newly it will be processed by the new UC described above.

## 🔗 Connections (1)

- → Generalization: [[CLM-2456 CBL-7209 FER processing queue]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7209 (CLM-2456) FER processing queue
