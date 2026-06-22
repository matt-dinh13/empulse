---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589805
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefundOrderType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

Information about one disbursed refund order.

## 🔗 Connections (2)

- → Dependency: [[ClientIdentDocumentType (Class 1589812)]]
- ← Dependency: [[ContractInfo (Class 1589813)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

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
