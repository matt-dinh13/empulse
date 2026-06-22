---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back"
domain: "Requirements Model"
element_id: 1867119
diagrams: 4
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}TariffItemDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back

## 🔗 Connections (8)

- → Dependency: [[LocalizedString (Class 1873246)]]
- → Dependency: [[Tariff Annual Rate Projection]]
- → Dependency: [[Tariff Item Category]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- ← Usage: [[TariffInputDtoTariffItems]]
- → Dependency: [[Tariff Item Calculation Method (Enumeration 1867113)]]
- ← Dependency: [[TariffItemResponse]]
- ← Dependency: [[TariffDto (Class 1867105)]]

## 📊 Appears In (4 diagrams)

- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Logical: Tariff
- Logical: TariffDto
- Logical: TariffInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| typeCode | string |  |
| group | string |  |
| limitNumberBasedOn | string |  |
| limitNumberFrom | int |  |
| limitNumberTo | int |  |
| limitAmountBasedOn | string |  |
| calculationMethod | string |  |
| percentage | int |  |
| percentageBasedOn | string |  |
| roundingType | string |  |
| roundingScale | int |  |
| minAmount | int |  |
| maxAmount | int |  |
| taxPercentage | int |  |
| minAmountToZero | boolean |  |
| amount | int |  |
| annualRateProjection | string |  |
| currency | string |  |
| limitAmountFrom | int |  |
| limitValueBasedOn | string |  |
| limitAmountTo | int |  |
| limitValue | string |  |
| textToDisplay | LocalizedString |  |
| category | string |  |
| {ADD}divideByTerms | boolean |  |
