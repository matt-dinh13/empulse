---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)"
domain: "Requirements Model"
element_id: 1820497
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Expected impact on KZ BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)

## 📝 Notes

Involved components of the HOSEL system

	
- Contract Service (REL) - a new component for the Service management
	
- VAS Deal - a new component extending the Contract Service (REL) to insurance support
	
- REL Service management - new integration for adding, replacement, cancellation and termination of REL Services
	
- CFI - the current Contract Full Info JMS notification


Impacts on BSL parts supporting the Service management

	
- Loan Origination, application processing, creation of the Service offers - should stay as is
	
- Loan Origination, sign application, conversion Service offers into Contract Services - "switch-on" all REL services, a notification to AM isn't needed
	
- Contract detail, Service/Insurance tab user interface, showing service data - no change expected.
	
- Contract detail, Service/Insurance tab user interface, run actions on Services - create a "switch" based on Contract type where CEL services use the current BSL functions (as is status) and REL services will be routed to the new Contract Service module

## 📊 Appears In (1 diagrams)

- Custom: CBL-22680 Service Management Modules for REL (KZ)
