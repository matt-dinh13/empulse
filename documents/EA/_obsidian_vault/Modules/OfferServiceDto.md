---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator"
domain: "Modules"
element_id: 1878416
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 OfferServiceDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Interface Provided/Product Calculator REST API/Product Calculator

## 🔗 Connections (5)

- → Dependency: [[RelipVariantDto]]
- → Dependency: [[RewardTariffItemDto]]
- → Dependency: [[OfferTariffItemDto]]
- → Dependency: [[SubventionDto (Class 1878395)]]
- ← Dependency: [[{MOD}OfferDto]]

## 📊 Appears In (1 diagrams)

- Logical: OfferDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityCode | string |  |
| estimatedFirstPeriodEnd | string |  |
| estimatedFirstPeriodStart | string |  |
| insuranceProgramCode | string |  |
| insuranceProgramVersion | int |  |
| mandatoryOnContract | boolean |  |
| relipVariants | RelipVariantDto |  |
| rewardTariffItem | RewardTariffItemDto |  |
| serviceCategory | string |  |
| serviceCode | string |  |
| serviceName | string |  |
| serviceTariffItems | OfferTariffItemDto |  |
| serviceType | string |  |
| serviceVarsion | int |  |
| subventions | SubventionDto |  |
| tariffCode | string |  |
| tariffVersion | int |  |
