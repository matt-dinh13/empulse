---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575809
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 TerminateRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Submits account termination request.

## 🔗 Connections (2)

- → Dependency: [[TerminationOwnFundsSettlementTypeDto]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: Account ManagementWS - Account termination

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| repaymentDate | date |  |
| terminationOwnFundsSettlementType | TerminationOwnFundsSettlementTypeDto |  |
