---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE"
domain: "Requirements Model"
element_id: 1439723
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-7042 (CLM-2274) Monitor and reprocess failed financial JMS events

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE

## 📝 Notes

From time to time we experience that system events fail. As this results into major issues in finance applications (Book, CoFin), we need to make sure we know about such failed events and are able to reprocess them so as the messages to consumer systems are sent properly.

Goal of this task is to:
* Refactor SE processing methods to ensure delivery of financial JMS events independently on business functionality (if possible)
* Simplify business logic in SE processing methods where possible
* Implement functionality for CLM SE reprocessing
* Improve SE monitoring and make it visible to the team

## 🔗 Connections (1)

- ← Generalization: [[CLM-2398 Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7042 (CLM-2398) Separate ISPAY and CLM processing of ContractRegistrationSE and ContractActivationSE
