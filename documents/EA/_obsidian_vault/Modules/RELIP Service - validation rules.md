---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1275555
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 RELIP Service - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Validation at the moment of saving of specific parameters of RELIP service
Entity RELIP Service 

Installment Plan Method:
- mandatory, reference to Installment Schedule Method Type
(MSG_RELIP_InvalidInstallmentPlanMethod)

Installment Rounding Method:
- mandatory, reference to Rounding
(MSG_RELIP_InvalidInstallmentRoundingMethod)

Installment Rounding Scale:
- mandatory, rules according to Rounding Scale must be satisfied
(MSG_RELIP_InvalidInstallmentRoundingScale)

Interest Period Method:
- mandatory, reference to REL Day In Month Method Type
(MSG_RELIP_InvalidInterestPeriodMethod)

First Prescription Date:
- mandatory, reference to RELIP First Prescription Date Type
(MSG_RELIP_FirstPrescriptionDate)

Due Day Method:
- mandatory, reference to REL Day In Month Method Type
(MSG_RELIP_InvalidDueDayMethod)

Cooling-off  Period Length:
- mandatory, integer >= 0
(MSG_RELIP_InvalidCOPLength)

Cooling-off  Period Unit:
- mandatory, reference to Period Unit
(MSG_RELIP_InvalidCOPUnit)

Cooling-off  Period AIR:
- mandatory, percentage >= 0
(MSG_RELIP_InvalidCOPAIR)

Day Count Method:
- mandatory, reference to Day Count Method Type
- check rule Day Count Method - validation rules

Cross-validation:
Combination of
- Installment Plan Method
- Due Day Method
- Installment Rounding Method
- Installment Rounding Scale
must be defined in RELIP Service Allowed Combination.
(MSG_RELIP_AllowedCombination)

## 🔗 Connections (3)

- → Dependency: [[Day Count Method - validation rules]]
- → Dependency: [[RELIP Service - allowed combination rules]]
- ← Dependency: [[Set RELIP service]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP service 
