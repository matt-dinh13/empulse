---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Service timeline/Use case model"
domain: "Analysis Model"
element_id: 1874492
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Renew IBACK periods

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Service timeline/Use case model

## 📝 Notes

{ADD DFPH-282}{PH only}
This rule is used for reactivation of IBACK periods after service rollback operation -> called from UC 03.301 Rollback service or directly from service rollback mBeans

Input:
- contract code
- checked date

Steps:

	
- System check existence of Interest back loan service request:
- if loan service request if loan service request with request type = IBACK  has current status = CREATED, then continue with next step
- else if loan service request (LSR) with request type = IBACK  has current status = CANCELLED, then update  LSR.current status to CREATED 
- else use case ends.
	
- System call rule 08.611 Create request for bonus service processing for processed contract with operation type UPDATE and checked date from input data.
	
- Use case ends.

{/ADD}

## 🔗 Connections (1)

- ← UseCase «include»: [[03.301 Rollback service (UseCase 1874486)]]

## 📊 Appears In (1 diagrams)

- Use Case: Service timeline
