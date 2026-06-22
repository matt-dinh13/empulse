---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE"
domain: "Analysis Model"
element_id: 998438
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PaymentOrderType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE

## 📝 Notes

It presents collection of individual payment orders involved in the file

## 🔗 Connections (4)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency: [[PaymentOnPosSettlementDto (Class 1482213)]]
- ← Dependency «use»: [[DocumentData]]
- → Dependency «use»: [[PaidContractType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ORDER_FILE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyType |  |
| docID | string |  |
| hcBankAccountNumber | bankAccountNumberType |  |
| hcBankName | string |  |
| paidContracts | PaidContractType |  |
| recipientBankAccountName | string |  |
| recipientBankAccountNumber | bankAccountNumberType |  |
| recipientBankArea | string |  |
| recipientBankName | string |  |
| settlements | PaymentOnPosSettlementDto |  |
