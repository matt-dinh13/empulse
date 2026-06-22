---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/changeDDMStatus"
domain: "Analysis Model"
element_id: 1363452
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ChangeDDMStatusFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/changeDDMStatus

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (3)

- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitService.changeDDMStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResults | ValidationResultCreateDDMDto |  |
