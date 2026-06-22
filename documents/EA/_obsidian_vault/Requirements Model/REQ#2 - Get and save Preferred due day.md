---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-73 Fixed due day on REL Account (CBL-19)"
domain: "Requirements Model"
element_id: 1270500
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Get and save Preferred due day

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-73 Fixed due day on REL Account (CBL-19)

## 📝 Notes

- For entering of Preferred Due Day will be reuse current UC 01.077 Change product offer parameters (entered due day is saved into Offer Financial Parameters, current attribute Preferred Due Day).
	
- Define available Fixed due days as set of days in range 1 - 28 (will be saved as a due day map in global parameters separately for CELs and RELs).
	
- Adjust form for entering of Preferred due day.
For RELs allow also choice of the last day in month for Preferred Due Day (will be saved as 31 in Offer Financial Parameters and then sent to AM module).

## 📊 Appears In (1 diagrams)

- Custom: PCG-73 Fixed due day on REL Account (CBL-19)
