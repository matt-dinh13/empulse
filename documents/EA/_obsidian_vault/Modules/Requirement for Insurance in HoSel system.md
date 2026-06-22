---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-377 - Insurance Contract separation - init ANA"
domain: "Modules"
element_id: 1671452
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Requirement for Insurance in HoSel system

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-377 - Insurance Contract separation - init ANA

## 📝 Notes

Insurance support in the HoSel system is supposed to be divided into two main parts:

	
- Insurance Contract core component - this component will contains the InsuranceContract domain (data) including its persistence and it will ensure basic services for creation, updating, getting of object covered by this domain (e.g. InsuranceContract, InsurancePeriod, Object status logs,...) - see Requirements for Insurance Contract core component for more details
	
- Insurance Service process orchestrator - this component (or components) should ensure basic orchestration of business processes related to providing insurance in financial services - see Requirements for Insurance processes orchestrator for more details


Planned steps of development:

	
- Insurance Contract core component
	
- Insurance Service process orchestrator

## 🔗 Connections (2)

- ← Generalization: [[Requirements for Insurance processes orchestrator]]
- ← Generalization: [[Requirements for Insurance Contract core component]]

## 📊 Appears In (1 diagrams)

- Custom: Requirements for Insurance Contract separation
