---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM"
domain: "Analysis Model"
element_id: 1363304
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CancelDDMFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/cancelDDM

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (4)

- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- → Dependency: [[CancelDDMResulTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitMandate.cancelDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResults | ValidationResultCreateDDMDto |  |
