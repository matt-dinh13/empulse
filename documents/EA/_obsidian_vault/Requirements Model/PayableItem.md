---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1414265
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 PayableItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 🔗 Connections (3)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- ← Dependency: [[PayableItems]]
- → Dependency: [[MoneyDto (Class 1414257)]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Logical: InstallmentServiceWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPart | String |  |
| amount | MoneyDto |  |
