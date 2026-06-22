---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5"
domain: "Analysis Model"
element_id: 1710849
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 updateDDMAttributes

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5

## 📝 Notes

{ADD PAYM-3798}
List of extended properties for DDM

LDM of attributes
- key  = Contract-> DDM-> Paym_ext_property_item.code
- value = Contract-> DDM -> Paym_ext_property_value.Value

## 🔗 Connections (1)

- ← Dependency: [[UpdateDDMRequest (Class 1710853)]]

## 📊 Appears In (1 diagrams)

- Logical: DirectDebitServiceV5 - Update DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
