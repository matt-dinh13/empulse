---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1589891
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Get client current contacts from CIF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

This rule describes way of getting client's contact data from CIF system for displaying on a screen.
Input parameters:

	
- CUID


Steps:
1.    System sends an read-only request into CIF - {ADD CLM-2727}if GP CallCifRestApi = false then{/ADD} PartyWS.customerPersonGet {ADD CLM-2727}else Customer Data.GetCustomerDataRequest{/ADD} with following parameters:
- externalID - CUID of client whose detail is being displayed
- projections = ROLE_CONTACTS{ADD_CLM-323}, PARTY_ADDRESSES, EMPLOYMENT_DATA{/ADD}
CIF returns required data about client. 
2.    If CIF returns error or timeout at calling occurred, an error message MSG_0159 (e. g. Communication with CIF failed) is returned

## 🔗 Connections (3)

- ← Dependency: [[12.501 Show card detail (UseCase 1627282)]]
- ← Dependency: [[12.542 Change e-commerce security level]]
- ← Dependency: [[12.510 Change delivery address (UseCase 1849965)]]

## 📊 Appears In (4 diagrams)

- Custom: CLM Overview
- Custom: Overview
- Use Case: Card detail - Use case
- Use Case: Other Card operations - Use case
