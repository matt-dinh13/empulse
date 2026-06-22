---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8"
domain: "Analysis Model"
element_id: 1833077
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PaymentToDisburse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8

## 📝 Notes

The structure presents data of payment for disbursement (Outgoing Payment + Payment Channel)

## 🔗 Connections (5)

- → Dependency: [[RecipientBank]]
- → Dependency: [[DisbursementStatusType (Enumeration 1833081)]]
- ← Dependency: [[ContractForDisbursement (Class 1833072)]]
- → Dependency: [[RecipientBankBranch (Class 1833071)]]
- → Dependency: [[DisbursementChannelType (Enumeration 1833069)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS_v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| disbursedAmount | MoneyDto |  |
| disbursementChannelType | DisbursementChannelType |  |
| recipientBank | RecipientBank |  |
| recipientBankBranch | RecipientBankBranch |  |
| accountNumber | string |  |
| accountHolderName | string |  |
| disbursementStatus | DisbursementStatusType |  |
| partnerName | string |  |
| partnerBankBranch | string |  |
| truncatedPAN | string |  |
| externalCardID | string |  |
