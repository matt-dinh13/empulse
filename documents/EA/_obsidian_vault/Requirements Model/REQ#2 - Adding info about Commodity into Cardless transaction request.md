---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL"
domain: "Requirements Model"
element_id: 1252404
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Adding info about Commodity into Cardless transaction request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL

## 📝 Notes

Goal of this requirement is to receive and store the commodityID in the AccountTransactionWS.confirmTransactionWithIPConversion for a RPD transaction
The commodityID will be sent in the TransactionDto - Attributes:AttributesDto element via the key value = commodityID

Notice: commodityID is not sent within initial POS transaction, i.e. calling AccountManagementWS.ActivateAccount - confirmTransactionWithIPOffer or AccountManagementWS:ActivateAccount - confirmTransaction for IPD transaction

## 🔗 Connections (1)

- ← Realisation: [[12.632 Create request for POS transaction without card]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-2621 (CLM-1276) Financing schemes IV - Subventions for REL
