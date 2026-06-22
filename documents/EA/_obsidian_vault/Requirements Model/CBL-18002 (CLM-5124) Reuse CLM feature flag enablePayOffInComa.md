---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL"
domain: "Requirements Model"
element_id: 1727589
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-18002 (CLM-5124) Reuse CLM feature flag enablePayOffInComa

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18002 (CLM-5124) Process PayOffRequest - Finish Pay-off for CEL

## 📝 Notes

Goal of this task is to re-use CLM feature flag enablePayOffInComa  as following:

	
- Flag  and related logic is removed from current implementation in 01.740. Result is that REL pay-off is not handled via this use case anymore.
	
- Flag is added to 01.502 to control pay-off via COMA API otherwise system uses direct db access to change contract data.
	
- Flag is added to validation rule Check pay-off possibility algorithm (GUI/RMQ) to control execution of a certain set of validations.

## 📊 Appears In (1 diagrams)

- Custom: CBL-18002 (CLM-5124) Reuse CLM feature flag enablePayOffInComa
