---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/COP"
domain: "Modules"
element_id: 1563173
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 ServiceParametersCOP

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/COP

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = COP

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: COP Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestRequiredForProcessing | boolean |  |
| setERDateAsProcessingDate | boolean |  |
| acceptedDueDateShift | int |  |
| acceptSmallUnderpayment | boolean |  |
| copLength | int |  |
| earlyRepymentAlgorithm | string |  |
| finishContractAfterProcessing | boolean |  |
