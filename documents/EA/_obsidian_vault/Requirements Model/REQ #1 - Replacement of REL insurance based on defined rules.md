---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL"
domain: "Requirements Model"
element_id: 1603419
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Replacement of REL insurance based on defined rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL

## 📝 Notes

This requirement describes extension of the UC 11.780 Process Insurance cancellation or termination event which is intended for replacement of any paid insurance with the mandatory insurance in case of the paid insurance termination/cancellation.
 

	
- If a standard REL paid life insurance is cancelled, terminated, switched-off, then the mandatory insurance is added to the contract and switched-on. If the mandatory insurance already exists on the contract, it is only switched-on.
	
- If the REL mandatory insurance is set as "free of charge", the Insurance Contract will be set for automatic prolongation - see REQ #3 for more information
	
- The mandatory insurance is activated (insurance period start date is set) as the paid insurance termination (switch-off) date plus one day (started from the midnight). The paid insurance period end date is the current date (ends by 23.59:59).


Changes marked as CSI-617

## 🔗 Connections (1)

- → Generalization: [[General requirement description]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12831 (CSI-617) Mandatory Life Insurance for REL
