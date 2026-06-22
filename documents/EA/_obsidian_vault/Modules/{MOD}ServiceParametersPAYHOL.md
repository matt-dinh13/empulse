---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/PAYHOL"
domain: "Modules"
element_id: 1666801
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 {MOD}ServiceParametersPAYHOL

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/PAYHOL

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = PAYHOL

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: PAYHOL Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptSmallUnderpayment | boolean |  |
| bonusServicesImpact | string |  |
| expirationPeriodDays | int |  |
| {DEL}interestAccrualCalculation | boolean |  |
| {DEL}interestCalculation | boolean |  |
| maxNumberOfDeferredPeriods | int |  |
| minDaysBeforeInstallment | int |  |
