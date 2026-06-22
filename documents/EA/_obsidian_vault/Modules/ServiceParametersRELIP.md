---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELIP"
domain: "Modules"
element_id: 1563228
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 ServiceParametersRELIP

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Service Type Specific Extension/RELIP

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = RELIP

## 🔗 Connections (2)

- → Realisation: [[ServiceParametersRELIPVariants]]
- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: RELIP Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| coolingOffPeriodAIR | PeriodUnitDto |  |
| coolingOffPeriodLength | int |  |
| coolingOffPeriodUnit | PeriodUnitDto |  |
| dayCountMethod | DayCountMethodTypeDto |  |
| dueDateMethod | RELDayInMonthMethodTypeDto |  |
| firstPrescriptionDateType | RELDayInMonthMethodTypeDto |  |
| installmentPlanMethod | RELDayInMonthMethodTypeDto |  |
| installmentRoundingMethod | RELDayInMonthMethodTypeDto |  |
| intallmentRoundingScale | PeriodUnitDto |  |
| interestPeriodMethod | RELDayInMonthMethodTypeDto |  |
| variants | ServiceParametersRELIPVariants |  |
