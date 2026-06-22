---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1657581
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}INSR - Get Customer personal data from PIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

{ADD CSI-1875 /}
This rule describes getting customer personal data from the PIF system based on customer CUID.

Input:

	
- CUID


Output:

	
- CustomerData



	
- System gets basic client data from CIF by calling Customer Data.GetCustomerDataRequest with following request parameters: 
- projections = PARTY_DATA, EMPLOYMENT_DATA, ROLE_CONTACTS --parameters to restrict the response for needed data only
- hci_tech_callingSystem = INSR
	
- If the CIF call returns no response (an error or timeout at calling occurred), system returns MSG_INSR_CIFCommunicationFailed (e. g. "Communication with CIF failed") and function ends
	
- If the returned CustomerPerson.resultCode != FOUND, an error message MSG_INSR_CIFClientNotFound (e.g. "Client not found or a CIF error occurred") is returned and function ends
	
- If CustomerPerson.resultCode = FOUND, system returns data.person and customerPersonRelationship.employmentInfos in CustomerData an function ends

## 🔗 Connections (1)

- ← Dependency: [[11.124 Validate data eligibility for insurance (UseCase 1705435)]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
