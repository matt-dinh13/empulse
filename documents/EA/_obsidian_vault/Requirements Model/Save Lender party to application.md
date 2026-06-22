---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey"
domain: "Requirements Model"
element_id: 1822799
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Save Lender party to application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey

## 📝 Notes

This object describes the steps, how system saves the primary lender (party with major financing share to be owning the respective contract) including its related data for the selected application.

Input:
- ApplicationCode = unique identifier of the application
- LenderCode = code of the primary lender

Steps:

	
- System takes the LenderCode from the input and validates it against the Lender enumeration. If such validation fails, corresponding system exception is returned and the whole algorithm fails as well without saving any lender data.
	
- System takes the ApplicationCode from the input and saves the applicable lender data onto the corresponding application as follows:
2.1. System creates a new instance of the Party[Organization] and sets its attributes as follows:
          - External_ID = LenderCode 
2.2. System creates a new instance of the Relationship, links it to the application (Contract[.Contract_Code=ApplicationCode]) as well as to the Party from the previous sub-step and sets its attributes as follows:
          - Role_Type = 'LENDER'
2.3. System creates a new instance of the Relationship_Attribute, links it to the Relationship from the previous sub-step and sets its attributes as follows:
          - Type = 'SHARE'
          - Value = Lender[.Code=LenderCode].Percentage_Share
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]
- ← Dependency: [[Save Lender from offer to application]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9145 - Revamp customer loan journey
