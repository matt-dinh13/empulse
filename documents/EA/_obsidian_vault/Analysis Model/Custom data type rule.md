---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Business rules"
domain: "Analysis Model"
element_id: 1534429
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Custom data type rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Business rules

## 📝 Notes

This business rule describes how the custom data type are created (key,value)

a) if GET <BSL address>/api/app/v1/order/exists/{orderNumber} with orderNumber (=application number) on input is called then the data are set:
- key: orderNumber
- value:
   - if system returns code 200 then the value of status is used
   - if system returns code 404 then the value NOT_FOUND is used
   - otherwise = UNKNOWN

## 🔗 Connections (1)

- ← Dependency: [[CustomDataType (Class 1821409)]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
