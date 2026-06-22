---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5196 (CLM-1854) Stop insurance charging in collection"
domain: "Requirements Model"
element_id: 1430635
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Stop a new insurance period creation on contracts having DPD over limit (EoM event)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5196 (CLM-1854) Stop insurance charging in collection

## 📝 Notes

Goal of this requirement is stop creation of a new insurance period on contracts having a DPD (more than 1 day overdue). This functionality will be implemented for Insurance types based on CLM events.

Following changes are expected in CLM/Insurance:

	
- Checking and evaluation DPD for monthly insurance (UC 01.775 Process account EOM billing finished event)


	
- Record prolongation failure due to DPD or renew prolongation when DPD is under limit into Business Event 
	
- Generating a notification message (for Notifier) when prolongation failed or the prolongation is renewed

## 📊 Appears In (1 diagrams)

- Custom: CBL-5196 (CLM-1854) Stop insurance charging in collection
