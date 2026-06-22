---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5290 (CLM-1868) Skipping Commodity Validation functionality"
domain: "Requirements Model"
element_id: 1381473
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Commodity validation in the Registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5290 (CLM-1868) Skipping Commodity Validation functionality

## 📝 Notes

Goal of this request is to skip commodity validation within the registration process in case a validation of the commodity has been skipped (sometime in the past).
Register contract changes:

	
- get commodity if "skip_validation" is set and based on this info either perform validation (the current function) of skip the validation

## 📊 Appears In (1 diagrams)

- Custom: CBL-5290 (CLM-1868) Skipping Commodity Validation functionality
