---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/LRES"
domain: "Modules"
element_id: 1563207
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceParametersLRES

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/LRES

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = LRES

## 🔗 Connections (2)

- → Dependency: [[{MOD}Bonus Services Impact Type]]
- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: LRES Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bonusServicesImpact | string |  |
| expirationPeriodDays | int |  |
| acceptSmallUnderpayment | boolean |  |
| minDaysBeforeInstallment | int |  |
| keepInstallmentAmount | boolean |  |
