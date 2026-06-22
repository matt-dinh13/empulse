---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589759
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefundOrderType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

Information about one disbursed refund order.

## 🔗 Connections (2)

- ← Dependency: [[ContractInfo (Class 1589761)]]
- → Dependency: [[ClientIdentDocumentType (Class 1589758)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientFullName | string |  |
| amount | MoneyType |  |
| outgoingPaymentCode | string |  |
| clientIdentDocument | ClientIdentDocumentType |  |
| timeToDeliveryFrom | time |  |
| timeToDeliveryTo | time |  |
| contactCellPhone | string |  |
| clientAddress | string |  |
| partnerName | string |  |
| partnerBankBranchName | string |  |
| partnerBankBranchAddress | string |  |
