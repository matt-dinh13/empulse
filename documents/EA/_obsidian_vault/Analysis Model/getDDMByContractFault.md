---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByContract"
domain: "Analysis Model"
element_id: 1609794
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 getDDMByContractFault

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByContract

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (5)

- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ValidationResultCreateDDMDto]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- → Dependency: [[GetDDMByContractResultTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.getDDMByContract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResult | ValidationResultDto |  |
