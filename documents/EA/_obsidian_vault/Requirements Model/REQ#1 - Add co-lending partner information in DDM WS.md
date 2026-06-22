---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS"
domain: "Requirements Model"
element_id: 1328838
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Add co-lending partner information in DDM WS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS

## 📝 Notes

ContractPaymentChannelManagementWS structure is not changed because user cannot update JFSPartner by this WS. 

But Paym team should be informed which partner is selected for the contract when DDM is created, so DirectDebitService.createDDM is extended by JFSPartners attribute which is filled by data from the DB (Contract Party Role).

## 🔗 Connections (1)

- → Dependency: [[01.776 Create contract DDM service]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS
