---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612010
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #INT - Integration overview

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

This part describes a list of connection between CLM and system participating on ALOP process
 

	
- Exposing WS for Mobile App (MA) for getting ALOP simple requests: ?
	
- Calling SQS - get info about chosen offer
	
- Calling LAP for ALOP approval: the current JMS notification
	
- Getting response from LAP about result of ALOP approval: the current JMS notification
	
- Calling Cabus AM for posting ALOP transaction for authorization:  AuthorizeTransactionWithIPVariant
	
- Calling PST due to update limits: REST WS https://bsl.vn00c1.vn.infra/bsl/api/swagger-ui.html#/PartyScoringTool/scoreUsingPOST_1
	
- Notification about ALOP request processing: Create, Approve, Reject, Cancel, Accept.
Notification subscribers: Offer Store (OFS) regarding results of ALOP processing, AP?
Technology: KAFKA messaging?

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
