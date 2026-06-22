---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByCode"
domain: "Analysis Model"
element_id: 1710615
diagrams: 4
connections: 3
tags:
  - enumeration
  - analysis-model
---

# 📝 GetDDMInfoResultTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByCode

## 📝 Notes

{ADD CBL-991 PAY /}

## 🔗 Connections (3)

- ← Dependency: [[getDDMByCodeResponse]]
- ← Dependency: [[GetDDMByCUIDResponse]]
- ← Dependency: [[GetDDMByDataExchangeIDResponse]]

## 📊 Appears In (4 diagrams)

- Logical: DirectDebitService.getDDMByCode
- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitService.getDDMByDataExchangeID
- Logical: DirectDebitServiceV5 - Get DDM by CUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DDM_NOT_FOUND |  |  |
| DDM_FOUND |  |  |
| TECHNICAL_ERROR |  |  |
