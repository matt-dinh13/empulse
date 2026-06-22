---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1626466
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PaidContractChannel_SBA

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 📝 Notes

Specific attributes for payments with payment channel SBA (Sales partner bank account).

## 🔗 Connections (4)

- → Dependency: [[Getting Commodity data rule]]
- → Realisation: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Generalization: [[{MOD}PaidContractType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| totalGoodsPrice | MoneyType |  |
| amountPaidByClient | MoneyType |  |
| invoiceNumberIdentification | string |  |
