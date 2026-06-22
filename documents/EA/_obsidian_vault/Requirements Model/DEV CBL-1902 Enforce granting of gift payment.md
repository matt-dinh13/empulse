---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria"
domain: "Requirements Model"
element_id: 1406041
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-1902 Enforce granting of gift payment

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria

## 📝 Notes

A functionality for enforcing of gift payment granting (ingoring of checks for payment discipline) has already been implemented in the past. UC 08.210 Check and process Gift payment has an input boolean parameter EnforceGPGranting that can optionally be passed on the input. In this CBL, we will check if EnforceGPGranting = false (or null value) was passed on the input and in such case we will try to find a new Contract Service Parameter (name = 'GIFT_ENFORCE_FLAG') for the used Gift Payment service. If we find one and its value is true then we set EnforceGPGranting = true and therefore payment discipline checks will be skipped anyway.

## 🔗 Connections (1)

- → Generalization: [[PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria (Requirement 1406040)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-857 (CBL-1902) Enforce granting of gift payment without fulfilled eligibility criteria
