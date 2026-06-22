---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1819444
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 RepaymentSimulationResponseBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 🔗 Connections (4)

- ← Generalization «XSDextension»: [[TerminateSimulationResponse]]
- ← Generalization «XSDextension»: [[RepaymentSimulationResponse]]
- → Dependency: [[BillingPeriodBalanceDto]]
- → Generalization «XSDextension»: [[AccountManagementResponseBaseDto (Class 1819447)]]

## 📊 Appears In (2 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| balance | BillingPeriodBalanceDto |  |
| nextDueDate | date |  |
| nextDueDateAmount | MoneyDto |  |
