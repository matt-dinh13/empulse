---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1275563
diagrams: 2
connections: 10
tags:
  - class
  - modules
---

# 🔷 ServiceRELIPDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

Specific for Service.Type = RELIP

## 🔗 Connections (10)

- → Dependency «use»: [[ServiceRELIPVariantDto]]
- → Dependency: [[InstallmentScheduleMethodTypeDto]]
- → Dependency: [[RoundingDto]]
- → Dependency: [[RELDayInMonthMethodTypeDto]]
- → Dependency «mapping»: [[RELIP Service]]
- → Dependency: [[PeriodUnitDto]]
- → Dependency: [[RELIPFirstPrescriptionDateTypeDto]]
- → Dependency: [[RELDayInMonthMethodTypeDto]]
- → Dependency: [[DayCountMethodTypeDto]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service RELIP Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dueDayMethod | RELDayInMonthMethodTypeDto |  |
| interestPeriodMethod | RELDayInMonthMethodTypeDto |  |
| firstPrescriptionDate | RELIPFirstPrescriptionDateTypeDto |  |
| installmentPlanMethod | InstallmentScheduleMethodTypeDto |  |
| dayCountMethod | DayCountMethodTypeDto |  |
| installmentRoundingMethod | RoundingDto |  |
| installmentRoundingScale | float |  |
| coolingOffPeriodLength | number |  |
| coolingOffPeriodUnit | PeriodUnitDto |  |
| coolingOffPeriodAIR | percentage |  |
| serviceVariant | ServiceRELIPVariantDto |  |
