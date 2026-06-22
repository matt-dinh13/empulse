---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1819449
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 RepaymentSimulationRequestBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[TerminateSimulationRequest]]
- ← Generalization «XSDextension»: [[RepaymentSimulationRequest]]
- ← Generalization «XSDextension»: [[{ADD}TerminateSimulationRequest]]

## 📊 Appears In (2 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Terminate account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| requestDate | date |  |
| repaymentDate | date |  |
