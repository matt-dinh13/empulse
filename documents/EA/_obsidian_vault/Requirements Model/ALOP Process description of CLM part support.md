---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612009
diagrams: 1
connections: 11
tags:
  - requirement
  - requirements-model
---

# 📋 ALOP Process description of CLM part support

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Expected CLM support of the ALOP process.
For sequential diagram see Advanced Cash on card operation diagram in Appendices chapter
Prerequisites:

	
- client receives and chooses an ALOP offer
	
- Mobile application (MA) is able to send ALOP request to CLM (call a REST API)
	
- Mobile application (MA) is able to receive notifications about ALOP request processing (KAFKA usage is expected)


Steps:

	
- Mobile application (MA) sends request for ALOP transaction creation to CLM (basic data of  the request: customer Id, applicant id, contract code, chosen offer Id, current account for cash disbursement, loan purpose)
	
- CLM validates the request data (cuid, applicant id, contract, offer Id existence, AM account status,...)
	
- CLM creates ALOP supplement (status = InProgress) for the current client's contract and returns response to the calling system
	
- If LAP approval is required, 
- CLM prepares a vector for LAP. In case an additional data is needed, CLM calls respective systems for that (e.g. calls SQS)
- CLM launches final underwriting of ALOP by sending a request in the LAP.
- CLM notifies the subscribers about ALOP request creation
When ALOP underwriting response is received from the LAP,
- in case the request is REJECTED/CANCELLED,  CLM
- - updates ALOP contract supplement (status = Rejected)
- - sends notification about ALOP request is rejected and process ends 
- in case the request is APPROVED, CLM 
- - updates client's personal data based on some Applicant data in the CIF (#Open questions BIZ: Who/which system decides which client's data is to be updated; if update is needed can be configurable but a rule has to be defined for that)
	
- If LAP approval is not required it is continued with next steps
	
- If ALOP document is required (based on the ALOP supplement setting), the process continues with ALOP document processing
#Open questions BIZ: 
- What data of the ALOP request is to be used for print (datasource definition)? 
- Is it needed the signed document to be checked and confirmed an HC operator (registration step)?
	
- If ALOP document isn't required, it is continued with ALOP transaction authorization step
	
- ALOP transaction authorization: CLM initiates the ALOP transaction authorization in the AM. (API - AuthorizeTransactionWithIPVariant will be used. Tx Type = ALOP)
	
- AM responses with confirmation/rejection (with reason)
- If rejection is returned from the AM, CLM updates ALOP contract supplement (status = Rejected) sends notification about ALOP request is rejected and process ends #Open questions BIZ: What should happen if AM refuses transaction authorization? Should the ALOP request be canceled?
- If the AM accepts the request, CLM updates ALOP contract supplement (status = Accepted) and notifies the subscribers about ALOP transaction authorization.
	
- After AM receives the disbursement confirmation from the Payment module, it sends notification into CLM about this.
	
- CLM updates ALOP contract supplement (status = Paid) and notifies the subscribers about ALOP transaction repayment.
	
- Process ends


ALOP document processing
Conditions/expectations for ALPO document processing: 

	
- Only a document as addendum of the current contract for ALOP transaction will be needed for the process
	
- Nobody (e.g. a back-office operator) will check anything on the document
	
- no additional client's documents (e.g. income proof) will be required.
	
- All the action will be automatic, so a type of e-signature of the document will be required.


	
- Based on the ALOP supplement setting, CLM generates defined ALOP document (by calling PrintServer comp) and store it in the Cabinet.
	
- CLM sends notification about ALOP request is approved with needed document printouts
	
- MA notifies the client that an acceptation of the ALOP document (contract addendum) is required
	
- MA downloads the document printouts on client's request
	
- MA sends result of the client decision (accept/refuse) into CLM
	
- I client accepted documents, CLM updates ALOP contract supplement (status = SIGNED) and continues in the ALOP transaction processing, otherwise continues Cancel ALOP request (client refuses the documents)


Cancel ALOP request by client
Conditions/expectations: In any moment of the process before ALOP transaction authorization, client can cancel the ALOP request

	
- MA sends a request for ALOP transaction cancellation to CLM
	
- CLM updates ALOP contract supplement (status = Canceled) and sends notification about ALOP request is canceled and process ends


Cancel ALOP request based on client inactivity (time for ALOP transaction expired)

	
- CLM automatic process search for unfinished ALOP transactions and creates requests for cancellation for them

For each unfinished ALOP transaction, CLM updates ALOP contract supplement (status = Canceled) and sends notification about ALOP request is canceled and process ends

## 🔗 Connections (11)

- ← Generalization: [[REQ #INT - Integration overview]]
- ← Generalization: [[REQ #5 - ALOP documents processing]]
- ← Dependency: [[Cash on card operation diagram]]
- ← Generalization: [[REQ #9 - Receiving Account Management EventInfo messages]]
- ← Generalization: [[REQ #6 - ALOP transaction processing]]
- ← Generalization: [[REQ #3 - LAP vector preparation for ALOP]]
- ← Generalization: [[REQ #4 - Approval of ALOP evaluation and Cancellation]]
- ← Generalization: [[REQ #7 - Changes in the current ALOP functions and APIs]]
- ← Generalization: [[REQ #8 - Getting ALOP Contract Supplement list of Client]]
- ← Generalization: [[REQ #2 - Creating ALOP supplement]]
- ← Generalization: [[REQ #1 - Definition of ALOP supplement]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
