---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement document management/Business Rules"
domain: "Analysis Model"
element_id: 1862172
diagrams: 9
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get client current data from CIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement document management/Business Rules

## 📝 Notes

This rule describes way of getting client's personal data from CIF system for displaying on a screen.
Input parameters:

	
- CUID


Steps:

	
- System sends an read-only request into CIF by calling Customer Data.GetCustomerDataRequest with following parameters:
- externalID - CUID of client whose detail is being displayed
- projections = ROLE_CONTACT, PARTY_DATA, RELATED_PERSON_INFO, ROLE_DOCUMENT{ADD CSI-1621}, RELATIONSHIP_DATA{/ADD}
	
- CIF returns required data about client.
	
- If CIF returns error or timeout at calling occurred, an error message MSG_0159 (e. g. Communication with CIF failed) is returned

## 🔗 Connections (2)

- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]

## 📊 Appears In (9 diagrams)

- Custom: Business Rules
- Custom: CBL-17031 (CSI-1608) VN BNPL - Additional data of Document generation for BNPL transaction
- Custom: CLM Overview
- Custom: Extension of ALOP datasource
- Custom: Overview
- Use Case: Collection tools request
- Use Case: Payment holiday request creation - via GUI
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Use DMS in 13.205 Create contract supplement documents
