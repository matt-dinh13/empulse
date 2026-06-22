---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482206
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RefundOrderType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

Information about one disbursed refund order.

## 🔗 Connections (2)

- → Dependency «use»: [[ClientIdentDocumentType]]
- ← Dependency «use»: [[ContractInfo]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

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
