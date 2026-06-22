---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-175 (CLM-976) Contract termination - transfer to customer account"
domain: "Requirements Model"
element_id: 1826237
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Contract termination - transfer to customer account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-175 (CLM-976) Contract termination - transfer to customer account

## 📝 Notes

The goals of this task is to update UC01.171 Create REL contract termination request:
- add Transfer to bank account option for PH
- store new attributes (bank details) to ContractStatusTransitionRequestForTermination 
- extend AccountManagementWS.TerminateRequest by new attributes (bank details)

## 🔗 Connections (1)

- → InformationFlow: [[01.171 Create REL contract termination request (UseCase 1852809)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-175 (CLM-976) Contract termination - transfer to customer account
