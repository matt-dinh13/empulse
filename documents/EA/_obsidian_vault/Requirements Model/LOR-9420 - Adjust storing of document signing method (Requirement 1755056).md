---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1755056
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9420 - Adjust storing of document signing method

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to exclude the usage of the Document_Verification entity from my features and adjust the storing of documents' signing method accordingly, so I can assure the backwards compatibility of the system's behavior while also allowing the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- Adjust the respective steps of the 01.148 Validate verification code for client's documentation and 01.099 Sign contract externally use cases as follows:
- When data about the OTP signature of the contract documentation are being saved into the system, stop creating the Document_Verification records for each applicable document and save such data into the Agreement_Verification entity only.
	
- Adjust the respective steps of the Save signing method for documents signed paperlessly rule as follows:
- Adjust the step 1 in a way, that the Agreement_Verification.Result = 'VERIFIED' is checked instead of the currently used condition (i.e. that the individual Document_Verification.Result = 'VERIFIED') - if so, perform the step 2 for every document instance found according to the rule Get contract documentation documents.
- Delete the steps 3 and 4 completely.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9420 - Adjust storing of document signing method
