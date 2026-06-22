---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/updateDDMDocument"
domain: "Analysis Model"
element_id: 1511263
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 updateDDMDocumentFault

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/updateDDMDocument

## 📝 Notes

{ADD CBL-4708 PAYM-1766}

## 🔗 Connections (3)

- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: directDebitService.updateDDMDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ValidationResultDto |  |
| ValidationResults | DDMResultTypeDto |  |
