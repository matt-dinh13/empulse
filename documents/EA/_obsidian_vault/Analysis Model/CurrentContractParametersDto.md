---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819462
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CurrentContractParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Contract parameters for current account contract type.

## 🔗 Connections (1)

- → Generalization «XSDextension»: [[ContractParametersDto]]

## 📊 Appears In (2 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Contract Snapshot

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| billingDay | DayOfMonth |  |
| debtToleranceAmount | MoneyDto |  |
| creditLimit | MoneyDto |  |
| monthlyStatementTemplateName | ParameterValueType |  |
