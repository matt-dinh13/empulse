---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement document management/Access Right"
domain: "Analysis Model"
element_id: 1879357
diagrams: 15
connections: 22
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}13.205 Create contract supplement documents v2

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement document management/Access Right

## 📝 Notes

The technical use case is used for creating Contract Supplement documents including printouts generation (if needed). Documents are created automatically by setting of particular document types on a Supplement definition.
There are two categories of supplement documents created in the UC:

	
- Documents required from client by reason for particular supplement usage
	
- Supplement documents generated from the system - there are difference is usage between a Supplement related to a Loan Service and a standalone Supplement (without relation to a Loan Service)

All supplement documents defined on the Supplement and having Printout Template defined are always printed even though only Required Moment is defined.
If a generated document is intended for registration (process of documents checking), Contract Supplement registration status is set to "Ready for Registration". 

Inputs:

	
- CUID
	
- ContractSupplement
	
- {ADD CSI-3892} VerificationData (VN) / otpId (PH) {/ADD}
	
- {ADD CSI-4104} AdditionalData[] - array of key-value items which is sent to DSM (VN) {/ADD}

## 🔗 Connections (21)

- ← UseCase «include»: [[{MOD}08.358 Create request for payment holiday common]]
- ← UseCase «include»: [[{MOD}08.405 Confirm offer for loan restructuring common]]
- ← UseCase «include»: [[{MOD}08.064 Create request for change due date common]]
- ← Dependency: [[{ADD}13.076 Accept credit limit change documents (UseCase 1877207)]]
- ← Dependency: [[{ADD}13.074 Prepare credit limit change documents (UseCase 1877203)]]
- ← UseCase: [[Print Server (Actor 1880896)]]
- ← UseCase «include»: [[13.202 Prepare Account Renewal Supplement documents]]
- ← UseCase «include»: [[13.206 Recreate Account Renewal Supplement documents]]
- → Realisation: [[13.205 Create contract supplement documents]]
- → Dependency: [[Set Contract Supplement registration status]]
- → Dependency: [[Get supplement documents required for service request]]
- → Dependency: [[Get client current data from CIF]]
- → Dependency: [[Get client documents needed to service request]]
- → Dependency: [[Get Applicant by Id from CIF]]
- → Dependency: [[Get application data by code]]
- → Dependency: [[HO_ALOP_DATA filling rules]]
- → Dependency: [[Get supplement documents required for Contract Supplement]]
- → Dependency: [[Generate printout of document]]
- ← UseCase: [[Cabinet (Actor 1880880)]]
- ← UseCase «include»: [[13.108 Accept Transaction Supplement documents]]
- ← UseCase «include»: [[13.102 Prepare Transaction Supplement documents]]

## 📊 Appears In (15 diagrams)

- Custom: Access Right
- Custom: CBL-28958 (CSI-4104) Transition of HPL Product to Committed Line
- Custom: CBL-29660 (CSI-4244) Sending Commodity Type and Down Payment to HO_ALOP_DATA
- Custom: One Level Requirement Hierarchy
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: Loan restructuring request creation - externally
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
- Use Case: REL Account renewal support - Use Case Model
- Use Case: Supplement document management
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Use DMS in 13.205 Create contract supplement documents
