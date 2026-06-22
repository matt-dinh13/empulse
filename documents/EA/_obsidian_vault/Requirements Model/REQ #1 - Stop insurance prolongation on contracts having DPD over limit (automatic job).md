---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5196 (CLM-1854) Stop insurance charging in collection"
domain: "Requirements Model"
element_id: 1430636
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Stop insurance prolongation on contracts having DPD over limit (automatic job)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5196 (CLM-1854) Stop insurance charging in collection

## 📝 Notes

Goal of this requirement is stop prolongation of insurance on contracts having a DPD (more than 1 day overdue). This functionality will be implemented for Insurance types based on CLM events (i.e. not on REL account EoM event).

Following changes are expected in CLM/Insurance:

	
- Checking DPD of account where annual insurance is to be prolonged (UC 11.081 Prolong insurance contracts)
	
- Record prolongation failure due to DPD or renew prolongation when DPD is under limit into Business Event 
	
- Generating a notification message (for Notifier) when prolongation failed, or the prolongation is renewed

## 📊 Appears In (1 diagrams)

- Custom: CBL-5196 (CLM-1854) Stop insurance charging in collection
