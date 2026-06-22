---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10212 Allow previously approved DDMs to be used as DDM for new Loans/LOR-10464 Update SIGN_METHOD document attribute via DMS"
domain: "Requirements Model"
element_id: 1879416
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Save signing method for documents signed paperlessly

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10212 Allow previously approved DDMs to be used as DDM for new Loans/LOR-10464 Update SIGN_METHOD document attribute via DMS

## 📝 Notes

Input:

	
- Contract


Steps:

	
- {MOD LOR-11238} If the contract's agreement has been signed via OTP or SELFIE (i.e. Contract->Agreement->Agreement_Verification.Result = 'VERIFIED' or photoComparisonResult = 'APPROVED'), then system finds all documents, which are part of the contract documentation, according to the rule Get contract documentation documents with the respective ApplicationCode (i.e. Contract.Contract_Code) on the input.
	
- For each document found in the previous step (if there is any) system checks, whether the 'SIGN_METHOD' document attribute is specified for the applicable document type {DEL LOR-10464}(i.e. Document->Document_Type->Document_Type_Attribute[.Code='SIGN_METHOD'] exists). If so, then system creates a new record of Document_Attribute with following parameters:
   - .Code = 'SIGN_METHOD'
   - .Value = 'OTP'
   - Created_By = Contract->Agreement->Agreement_Verification.[.Result='VERIFIED'].Created_By
   - Created_Date = Contract->Agreement->Agreement_Verification.[.Result='VERIFIED'].Creation_Date
   - .Archived = FALSE
and links it to the respective document (i.e. Document->Document_Attribute[.Code='SIGN_METHOD']).{/DEL}
	
- {MOD LOR-11238} If so, system creates document attribute 'SING_METHOD' with value OTP or SELFIE respectively (via DMS API)

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Sign contract finalization]]
- → Realisation: [[Requirement #3 - Call LAP in Sign contract externally]]
- → Dependency: [[Get contract documentation documents]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-10464 Update SIGN_METHOD document attribute via DMS
- Custom: LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
- Custom: LOR-9420 - Adjust storing of document signing method
- Use Case: Contract signing
