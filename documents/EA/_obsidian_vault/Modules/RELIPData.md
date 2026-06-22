---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/RELIP"
domain: "Modules"
element_id: 1500476
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 RELIPData

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{ADD}Services/RELIP

## 📝 Notes

{ADD PCG-2095/}
Specific for Service.ServiceType = RELIP

## 🔗 Connections (1)

- → Realisation: [[ServiceRELIPVariantData]]

## 📊 Appears In (1 diagrams)

- Logical: RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDayMethod | RELDayInMonthMethodTypeDto |  |
| interestPeriodMethod | RELDayInMonthMethodTypeDto |  |
| firstPrescriptionDate | RELIPFirstPrescriptionDateTypeDto |  |
| installmentPlanMethod | InstallmentScheduleMethodTypeDto |  |
| dayCountMethod | DayCountMethodTypeDto |  |
| intallmentRoundingScale | string |  |
| coolingOffPeriodLength | int |  |
| coolingOffPeriodUnit | PeriodUnitDto |  |
| coolingOffPeriodAIR | PeriodUnitDto |  |
| serviceVariant | ServiceRELIPVariantData |  |
