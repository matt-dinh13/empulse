---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/updateDDM"
domain: "Analysis Model"
element_id: 1700716
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 UpdateDDMFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/updateDDM

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (5)

- ← Dependency: [[DirectDebitService (Interface 1699813)]]
- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- → Dependency: [[UpdateDDMResultTypeDto]]
- → Dependency: [[ValidationResultUpdateDDMDto]]

## 📊 Appears In (2 diagrams)

- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResults | ValidationResultDto |  |
