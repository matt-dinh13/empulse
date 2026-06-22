---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1820509
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Contract Service module estimations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Variant I - 300MDs
Contract Service module (without loan service request processing)

	
- infrastructure, module container, monitoring - 10MDs
	
- 22 use cases, CEL, REL service types involved - 120MDs (ANA, DEV, TEST) 80 + 25 + 15
	
- HO database used
	
- aut. tests - not involved


VAS Deals (remaining estimations)

	
- There is only create, get VAS Deal and Add period is available in the module
	
- Needs to develop Cancel, Terminate, Activate, Activate, Deactivate VAS Deal - 50MDs - 30 + 15 + 5

DEV 120, ANA 40, 20 
Contract Service module integration to KZ BSL

	
- impact on BSL Installment part!! - needs for exposing APIs for getting Instalment Schedule info, calculations of the loan financial parameters - 40MDs
	
- KZ BSL UI - run actions on services and insurances - 80MDs
	
- KZ BSL UI - getting service and insurance info  - stays as is


Variant II - 250MDs
Contract Service module (without loan service request processing)

	
- infrastructure, module container, monitoring - 10MDs


	
- 20 use cases, REL service types involved only - 100MDs (ANA, DEV, TEST) 73 + 25 + 12


	
- HO database used


	
- aut. tests - not involved


VAS Deals (remaining estimations)

	
- There is only create, get VAS Deal and Add period is available in the module
	
- Needs to develop Cancel, Terminate, Activate, Activate, Deactivate VAS Deal - 60MDs - 37 + 13 +10
	
- REL insurance functions is only involved


Contract Service module integration to KZ BSL

	
- no impact on BSL Installment part - CEL related functions stay in KZ BSL
	
- KZ BSL UI - run actions on services and insurances - 80MDs
	
- KZ BSL UI - getting service and insurance info  - stays as is

## 📊 Appears In (1 diagrams)

- Custom: CBL-22680 Service Management Modules for REL (KZ)
