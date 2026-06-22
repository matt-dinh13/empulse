---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881765
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Panasonic validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

DO (device order) Recall Validation - used for unblocking the serial number of a commodity under a contract. {ADD PCG-5004}It takes the following mandatory parameters: 

 
- nBFCID -  NBFC System generated id - a constant for Homecredit in all transactions (NBFC = non-banking finance company).
 
- nBFCSchemeID - NBFC Scheme id - name from /openapi/v1/partner-schemes, which is found for a commodity based on used product code/financingPackageCode.
 
- agreementID - Agreement id/deal id of agreement - commodity id which is passed as transaction ID to OSB.


DEV Environment: http://45.114.79.240:8181/MicrosoftDynamicsAXAif60/ITLDORecallInboundServiceGrpHTTP/xppservice.svc 
UAT Environment: 
http://45.114.78.173:8181/MicrosoftDynamicsAXAif60/ITLDORecallInboundServiceGrpHTTP/xppservice.svc 
Production Environment: 
http://45.114.78.172:8181/MicrosoftDynamicsAXAif60/ITLDORecallInboundServiceGrpHTTP/xppservice.svc{/ADD} 
The "Unblock Serial Number" API (Recall) will only be called if the transaction is canceled before signing/activation.

Responses:

If DO recall is passed, below message will be the response: 

Recall ID is Panasonic auto generated number (Req00001) and status is Pass/Fail with remark... 
where "..." can be, e.g., Record does not exist in DO request for your Input.

note: documentation for PANASONIC integration assigned in CBL-27023 and CBL-27233

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
