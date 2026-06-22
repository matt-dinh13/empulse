---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1"
domain: "Analysis Model"
element_id: 1711076
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DDMExtendedPropertyData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1

## 📝 Notes

LDM of attributes
Paym_ext_property_group = DDM
Paym_ext_property_item =  values of Paym_ext_property_group
Paym_ext_property_value = values of Paym_ext_property_item

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Extended Property]]
- ← Dependency: [[KafkaDDMData]]

## 📊 Appears In (2 diagrams)

- Logical: DirectDebitServiceRestAPI - Get DDM
- Logical: Kafka Messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
