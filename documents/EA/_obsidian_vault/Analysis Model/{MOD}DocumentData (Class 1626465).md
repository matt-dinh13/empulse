---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1626465
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}DocumentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 🔗 Connections (4)

- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[PaidContractsType]]
- → Dependency: [[PaymentOnPosSettlementDto (Class 1482213)]]
- ← Generalization: [[outgoingPaymentsOrderDispatchNote]]

## 📊 Appears In (1 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| posPartnerCode | string |  |
| posPartnerName | string |  |
| informationAboutPaymentLevel | string |  |
| posPartnerPhone | string |  |
| posPartnerContactPerson | string |  |
| posPartnerEmail | string |  |
| posPartnerBankAccount | string |  |
| paymentOrderId | string |  |
| paymentOrderTransactionDate | dateTime |  |
| paymentOrderGenerationDate | dateTime |  |
| hcBankAccountName | string |  |
| hcBankAccountNumber | string |  |
| hcBankAccountBranch | string |  |
| numberOfContracts | long |  |
| paidContracts | PaidContractsType |  |
| settlements | PaidContractsType |  |
| totalReimbursementAmount | MoneyType |  |
