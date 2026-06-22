---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833294
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 PaymentToDisburse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

The structure presents data of payment for disbursement (Outgoing Payment + Payment Channel)

## 🔗 Connections (5)

- → Dependency: [[DisbursementChannelType]]
- ← Dependency: [[ContractForDisbursement]]
- → Dependency: [[RecipientBankBranch]]
- → Dependency: [[RecipientBank (Class 1833317)]]
- → Dependency: [[DisbursementStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContractForDisbursement

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
| {ADD}partnerName | string |  |
| {ADD}partnerBankBranch | string |  |
| {ADD}truncatedPAN | string |  |
| {ADD}externalCardID | string |  |
