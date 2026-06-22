---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL"
domain: "Requirements Model"
element_id: 1603421
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Deactivation of mandatory insurance on standard life insurance adding

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL

## 📝 Notes

This requirement describes a new function for deactivation of the mandatory insurance in case of a paid life insurance activation. Rules for this action:

	
- the mandatory insurance is switched-off only (i.e. it won't be and terminated).
	
- if a standard paid life insurance is added but it isn't switched-on, the mandatory insurance stays unchanged (i.e. active)!


	
- The mandatory insurance period end date is set as the paid insurance activation (switch-on) date minus one day (ends by 23.59:59).

## 🔗 Connections (1)

- → Generalization: [[General requirement description]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12831 (CSI-617) Mandatory Life Insurance for REL
