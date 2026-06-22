---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service"
domain: "Modules"
element_id: 1081463
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 CalculationInfo

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service

## 🔗 Connections (4)

- ← Dependency «use»: [[Calculation]]
- ← Aggregation: [[Payable Items]]
- ← Aggregation: [[Service Fee Items]]
- ← Aggregation: [[Overdue Items]]

## 📊 Appears In (1 diagrams)

- Logical: Process service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| TotalExtraordinary Payable Installments | Financial Amount |  |
| Contract | {MOD}Contract |  |
| Error | String |  |
| Internal Refund | Financial Amount |  |
| Overpayment | Financial Amount |  |
| Total Future Payments | Financial Amount |  |
| Total Future Amount | Financial Amount |  |
| Total Overdue Installments | Financial Amount |  |
| Total Payable Installments | Financial Amount |  |
| Total To Paid | Financial Amount |  |
