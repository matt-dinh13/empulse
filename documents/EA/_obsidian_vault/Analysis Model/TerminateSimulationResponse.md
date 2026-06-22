---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575820
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TerminateSimulationResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Early repayment simulation result.

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[RepaymentSimulationResponseBase]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Service overview
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| earlyRepaymentFees | MoneyDto |  |
