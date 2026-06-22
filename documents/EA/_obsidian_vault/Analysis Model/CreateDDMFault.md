---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM"
domain: "Analysis Model"
element_id: 1639365
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 CreateDDMFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/createDDM

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (5)

- → Dependency: [[ValidationResultCreateDDMDto]]
- → Dependency: [[DDMResultTypeDto]]
- → Dependency: [[CreateDDMResultCode]]
- → Dependency: [[ValidationResultDto (Class 1710617)]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (2 diagrams)

- Logical: DirectDebitService.createDDM
- Logical: DirectDebitServiceV5 - Create DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | DDMResultTypeDto |  |
| validationResults | ValidationResultDto |  |
