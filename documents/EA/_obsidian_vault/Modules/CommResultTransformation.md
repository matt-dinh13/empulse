---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables"
domain: "Modules"
element_id: 815975
diagrams: 1
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 CommResultTransformation

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables

## 📝 Notes

Enumeration for transformation of Result code obtained via JMS message (e.g. IncomingPaymentResponse.resultCode) on result codes defined in CommResult enumeration.

For all of combinations Message name and Message Result code is defined exactly one transformation on a record in CommResult enumeration. 

The value of the records is refefence to the CommResult enumeration.

## 🔗 Connections (1)

- → Dependency: [[CommResult]]

## 📊 Appears In (1 diagrams)

- Logical: COMMON - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Result code | CommResult |  |
| JMS Message name | string |  |
| JMS Message Result Code | string |  |
