---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service"
domain: "Requirements Model"
element_id: 1754673
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2445 Replace Contract Service functions update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service

## 📝 Notes

Changes proposed for Service replacement

	
- extend validations with some next parameters placed on the Service definition
	
- Service definition will be obtained via the PCG Service API instead of database
	
- After request for the service replacement is sent to AM. Just like the Add service function, the new service will be switched-on. The function must wait for AM response to be the new service replacement confirmed. After that, the service is activated.


Additional validations:

	
- account status -> https://am.in.prod/cabus-am/rest/openapi/v5/account/3910197158
	
- allowed statuses: AC (Active), PO (Paid off)

## 📊 Appears In (1 diagrams)

- Custom: CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service
