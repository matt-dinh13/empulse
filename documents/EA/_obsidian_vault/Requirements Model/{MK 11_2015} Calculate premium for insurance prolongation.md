---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/TODO - Suggestion to system improvement/Contract Management"
domain: "Requirements Model"
element_id: 1300593
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {MK 11/2015} Calculate premium for insurance prolongation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/TODO - Suggestion to system improvement/Contract Management

## 📝 Notes

Now premium is calculated as a hot fix SUM INSURED * TARIFF. But it works only in case the period is whole one year.
To use this calculation also for other period, we have to calculate number of years on defined period (in days) and then recalculate yearly premium. This recalculation will be used only for Tariff Annual Rate Projection=PIY - Period in years.

## 📊 Appears In (1 diagrams)

- Custom: Contract Management
