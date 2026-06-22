---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules"
domain: "Analysis Model"
element_id: 1031658
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Loyalty system/Mapping rules

## 📝 Notes

Create Loyalty account. Request.

## 🔗 Connections (3)

- ← Dependency: [[LoyaltyManagementWS]]
- → Dependency: [[Mapping CreateAccountRequest - LoyaltyManagementWS]]
- → Generalization «XSDextension»: [[AccountIdentificationType]]

## 📊 Appears In (3 diagrams)

- Custom: LoyaltyManagementWS - mapping rules
- Logical: LoyaltyManagementWS
- Logical: Messages - LoyaltyManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCodeType |  |
| externalAccountCurrency | CurrencyCodeType |  |
| customer | CustomerType |  |
| billingCycleFirstDay | BillingCycleFirstDayType |  |
| schemaCode | SchemaCodeType |  |
