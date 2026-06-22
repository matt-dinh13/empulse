---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution"
domain: "Requirements Model"
element_id: 1869499
diagrams: 3
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ServiceParametersPER

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/PCG-5124 CBL-28112 PER – Change the setup Minimal last installment amount and Disable PER service after the first successful execution

## 📝 Notes

Specific for Service.ServiceType = PER

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceTypeDto]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-5124 CBL-28112
- Logical: PER Data
- Logical: Service Type Specific Extension

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| acceptedDueDateShift | int |  |
| allowPerAmountInterval | boolean |  |
| allowRequestInMoratorium | boolean |  |
| dpdMaxLimit | int |  |
| minimalLastInstallmentAmount | int |  |
| minimalPerAmountRate | int |  |
| minimumDaysBeforeEr | int |  |
| moratorium | int |  |
| perType | string |  |
| {ADD}maximalNumberOfUsage | int |  |
| {ADD}minimalRemainingPrincipalFixed | int |  |
| {ADD}minimalRemainingPrincipalBase | string |  |
| {ADD}minimalRemainingPrincipalPercentage | int |  |
