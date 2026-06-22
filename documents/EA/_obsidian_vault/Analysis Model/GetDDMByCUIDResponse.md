---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByCUID"
domain: "Analysis Model"
element_id: 1609801
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetDDMByCUIDResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByCUID

## 📝 Notes

{MOD CBL-1867 PAYM-536 /}

## 🔗 Connections (4)

- → Dependency: [[DDMInfoBaseDto (Class 1710851)]]
- → Dependency: [[DDMInfoBaseDto]]
- → Dependency: [[GetDDMInfoResultTypeDto]]
- ← Dependency: [[DirectDebitService (Interface 1699813)]]

## 📊 Appears In (2 diagrams)

- Logical: DirectDebitService.getDDMByCUID
- Logical: DirectDebitServiceV5 - Get DDM by CUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DDMInfo | DDMInfoBaseDto |  |
| result | GetDDMInfoResultTypeDto |  |
