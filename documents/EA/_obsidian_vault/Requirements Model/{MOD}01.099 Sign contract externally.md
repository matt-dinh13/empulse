---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic"
domain: "Requirements Model"
element_id: 1879297
diagrams: 12
connections: 21
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.099 Sign contract externally

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic

## 📝 Notes

This use case is called only via WS interface.Its purpose is to confirm the credit documents signature and perform steps that are related to this event:

	
- check that documents to sign are prepared and signed until the end of their validity (or even after their validity is expired, if respective privilege is granted)


	
- check all document existence validations and validations of all document types
	
- validate the contract commodities
	
- Call technical use case 01.187 Sign contract

## 🔗 Connections (21)

- ← Realisation: [[ApplicationManagementWS_v23]]
- ← Realisation: [[ApplicationManagementWS_v22 (Interface 1819678)]]
- ← Realisation: [[ApplicationManagementWS_v21 (Interface 1820000)]]
- ← UseCase «extend»: [[01.006 Delete file from document archive (UseCase 1851468)]]
- ← Dependency: [[Sign]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Get contract documentation documents]]
- → Realisation: [[Requirement #3 - Call LAP in Sign contract externally]]
- → Dependency: [[Validate application commodity]]
- → Realisation: [[Requirement #1 - Add dmsUUID in _sign API]]
- → UseCase «include»: [[{MOD}01.187 Sign contract]]
- → Dependency: [[Deleting prepared documentation rule]]
- → Realisation: [[Requirement #2 - Call PIF in Sign contract externally]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Dependency: [[Validity of assigned instant card]]
- → Realisation: [[01.099 Sign contract externally (with invalid documents)]]
- → Dependency: [[DDM attributes validation]]
- → Dependency: [[Generate content of agreement]]
- → Realisation: [[{ADD}01.099 Sign contract externally - all contracts]]
- → Realisation: [[01.099 Sign contract externally]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (12 diagrams)

- Custom: LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
- Custom: LOR-9360 Remove temporary switch useSingleOtpForContractSign
- Custom: LOR-9420 - Adjust storing of document signing method
- Custom: LOR-9603 Lock mechanism for prepare and sign agreement requests
- Custom: PAYM-1613 - savingOfPaymentChannels
- Logical: Agreement
- Logical: ApplicationManagementWS_v21 - SignApplication
- Logical: ApplicationManagementWS_v22 - SignAgreement
- Logical: ApplicationManagementWS_v23 - SignAgreement
- Use Case: Access Rights
- Use Case: Use Case
- Use Case: Use Case
