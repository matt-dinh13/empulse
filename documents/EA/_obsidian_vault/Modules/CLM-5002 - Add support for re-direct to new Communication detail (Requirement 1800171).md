---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5002 - Add support for re-direct to new Communication detail"
domain: "Modules"
element_id: 1800171
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 CLM-5002 - Add support for re-direct to new Communication detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-16656/CLM-5002 - Add support for re-direct to new Communication detail

## 📝 Notes

Goal of this task is:

	
- Start to receive communication for Tab List of communication based on use case Search communication (including mapping of new data source) . This use case is used also for REST API searchCommunication and support sensitive data masking (not extra masking on UI is needed)
	
- Start to pass from this tab system attribute in URL, based on in BSL application will use new CLC integration for retrieving communication data.
	
- Remove from the code filtering based on system property COMM_HIST_SELECTED_SYSTEMS.


Note: new data source and system passing are controlled  by system property communicationFromClcModule

## 📊 Appears In (1 diagrams)

- Custom: CLM-5002 - Add support for re-direct to new Communication detail
