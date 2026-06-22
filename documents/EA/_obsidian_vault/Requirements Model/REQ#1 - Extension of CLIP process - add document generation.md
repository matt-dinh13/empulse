---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line"
domain: "Requirements Model"
element_id: 1865354
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extension of CLIP process - add document generation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line

## 📝 Notes

Current steps:

	
- Create a new supplement - 13.070 Process Credit limit change request via messaging, status IN_PROCESS
	
- Send approval to LAP (if approval is defined) 13.150 Send supplement to approval
	
- Receive approval from LAP - 13.450 Process supplement approval result - APPROVED / REJECTED, CreditLimitChangeRequestApprovedSE generated
	
- Send request to AM - 13.072 Create Credit limit change request for REL account
	
- Receive result from AM - 13.052 Process account notification for credit limit change - ACCEPTED / REJECTED,   CreditLimitChangeRequestAcceptedSE, CreditLimitChangeRejectedSE


New steps (very similar to current Transaction supplement process):

	
- Create a new supplement - 13.070 Process Credit limit change request via messaging, status IN_PROCESS
	
- Send approval to LAP (if approval is defined) 13.150 Send supplement to approval
	
- Receive approval from LAP - 13.450 Process supplement approval result - APPROVED / REJECTED, CreditLimitChangeRequestApprovedSE generated
	
- Document generation (if defined) - 13.074 Prepare credit limit change documents - CreditLimitChangeDocumentPreparedSE
	
- Document acceptance via API - 13.076 Accept credit limit change documents - SIGNED / CANCELLED,  CreditLimitChangeRequestSignedSE, CreditLimitChangeCanceledSE
	
- Send request to AM - 13.072 Create Credit limit change request for REL account
	
- Receive result from AM - 13.052 Process account notification for credit limit change - ACCEPTED / REJECTED,   CreditLimitChangeRequestAcceptedSE, CreditLimitChangeRejectedSE


Changes:

	
- new technical UC 13.074 Prepare credit limit change documents - it is triggered by CreditLimitChangeRequestApprovedSE instead of 13.072 Create Credit limit change request for REL account
	
- new UC 13.076 Accept credit limit change documents triggered by new BSL API /bsl/api/v1/credit-limit-change-supplement/accept
	
- update UC 13.072 Create Credit limit change request for REL account, newly triggered by CreditLimitChangeRequestSignedSE instead of CreditLimitChangeRequestApprovedSE
	
- update UC 13.205 Create contract supplement documents v2 - use new optional inputs verificationData and additionalData as input for DSM

## 📊 Appears In (1 diagrams)

- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
