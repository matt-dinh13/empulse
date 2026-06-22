---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM"
domain: "Analysis Model"
element_id: 1363303
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CancelDDMRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM

## 📝 Notes

{ADD CBL-1440 PAY /}

## 🔗 Connections (2)

- → Dependency: [[CancelReasonTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitMandate.cancelDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}ddmDataExchangeID | string |  |
| {DEL}DDMCode | string |  |
| cancelReason | CancelReasonTypeDto |  |
