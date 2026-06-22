---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1757060
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to communicate with Payments module via its provided REST API when prefilling the direct debit mandate data onto the application form, so I can allow the future modularization of LOR functionalities into separate module(s).

Solution proposal:

	
- Adjust the logic of direct debit mandate data prefilling onto the application form described by the Get client's previous DDM for application form prefilling rule (i.e. applied when the parameter (parameters.properties) useDDMRest = TRUE) as follows:
- Adjust the step 1 in a way, that the contracts of the respective client are not filtered based on their status at all when the parameter (parameters.properties) prefillOnlyActiveDDM = FALSE in order to better replicate the current behaviour of a live prefill used in PH.
- Adjust the step 3 in a way, that the "hybrid" method for getting the direct debit mandate data is used (i.e. direct debit mandates are get based on providing the available Application2DDM.External_Identifier_ID as well as contractCode on the input when calling the respective DDM REST API GET method) in order to assure the backwards compatibility while the ApplicationManagementWS is still supported.
- Add a new step in between the current steps 3 and 4, which filters out all direct debit mandates, whose bank account does not contain account number or account holder name or account type.

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form
