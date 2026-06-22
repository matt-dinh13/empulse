---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4522 (CLM-1722) New features for Insurance Service setting"
domain: "Requirements Model"
element_id: 1425759
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ# 1 - Defined length of insurance driven by billing period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4522 (CLM-1722) New features for Insurance Service setting

## 📝 Notes

Goal of this requirement is extension of the Insurance service functionality for REL insurance based on defined period (e.g. 12 months) and charging fix amount of premium on each month (billing period). 

Supposed behaviour of the system:

	
- Setting of the current Insurance Period length driven by AM billing period will be extend by setting of number of billing period (billing period limit) for which the insurance should last (e.g. 12 month)
	
- the billing period charging of the insurance premium (fix fee is required) will be ensured by AP/AM module
	
- Insurance module notify about start and end of the insurance period but after all defined billing periods pass, insurance contract is terminated. It is not needed to notify about "switch-off" the insurance. Only ChangeService notification is sent.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4522 (CLM-1722) New features for Insurance Service setting
