---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1626467
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PaidContractChannel_PBA

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 📝 Notes

Specific attributes for payments with payment channel PBA (Payment provider).
This data allow identify the client when he asks payment provider for credit amount disbursement (in cash). 
Names and address are set with respect to country specific rules.
Clients data are from Client Snapshot from Application Form.

## 🔗 Connections (4)

- → Dependency «use»: [[PaidContractDocuments]]
- → Dependency «use»: [[AddressType (Class 1878263)]]
- → Generalization: [[{MOD}PaidContractType]]
- → Dependency «use»: [[{MOD}NameType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| gender | string |  |
| dateOfBirth | dateTime |  |
| placeOfBirth | string |  |
| address | AddressType |  |
| identificationDocuments | PaidContractDocuments |  |
