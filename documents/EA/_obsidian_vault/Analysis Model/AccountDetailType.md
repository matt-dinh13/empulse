---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Messages"
domain: "Analysis Model"
element_id: 1031673
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 AccountDetailType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Messages

## 🔗 Connections (6)

- ← Generalization «XSDextension»: [[CancelAccountResponse]]
- ← Generalization «XSDextension»: [[CancelAccountTerminationResponse]]
- ← Generalization «XSDextension»: [[CreateAccountResponse]]
- ← Generalization «XSDextension»: [[InitiateAccountTerminationResponse]]
- → Dependency: [[AccountStatusType]]
- → Generalization «XSDextension»: [[AccountIdentificationType]]

## 📊 Appears In (2 diagrams)

- Logical: Messages - LoyaltyManagementWS
- Logical: Types - LoyaltyManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCodeType |  |
| externalAccountCurrency | CurrencyCodeType |  |
| customer | CustomerType |  |
| status | AccountStatusType |  |
| billingCycleFirstDay | BillingCycleFirstDayType |  |
| pendingBalance | AmountType |  |
| availableBalance | AmountType |  |
| created | date |  |
