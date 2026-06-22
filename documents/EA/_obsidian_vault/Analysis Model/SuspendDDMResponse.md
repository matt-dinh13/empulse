---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/suspendDDM"
domain: "Analysis Model"
element_id: 1258788
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SuspendDDMResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/suspendDDM

## 📝 Notes

{ADD CBL-29 PAY /}

## 🔗 Connections (3)

- → Dependency: [[ContractDDMBaseDto]]
- → Dependency: [[SuspendDDMResultTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.suspendDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | SuspendDDMResultTypeDto |  |
| contract | ContractDDMBaseDto |  |
