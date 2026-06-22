---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1626469
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}PaidContractType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 🔗 Connections (6)

- → Dependency: [[{MOD}NameType]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- ← Dependency «use»: [[PaidContractsType]]
- ← Generalization: [[PaidContractChannel_PBA]]
- ← Generalization: [[PaidContractChannel_SBA]]
- → Dependency «use»: [[PaidContractItemsType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractId | string |  |
| dateOfSigningContract | dateTime |  |
| paidAmount | MoneyType |  |
| posId | string |  |
| posName | string |  |
| dateOfPaymentOrderCreation | dateTime |  |
| payments | PaidContractItemsType |  |
| clientName | {MOD}NameType |  |
| productCode | string |  |
| subventionToPartner | MoneyType |  |
