---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)"
domain: "Requirements Model"
element_id: 1745372
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9168 Implement evaluateApplication + cancel methods

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9105 Create a new attribute for SOB (Selling On Board)

## 📝 Notes

As Loan Origination module, I need to enable the external systems to evaluate and cancel and Application using new REST API.

Solution proposal:
 

	
- enhance evaluateApplication UC to be able to send Application to all evaluation phases - now only MAIN (P/ACL or PDRAFT status) scoring is supported, but we will also need IdentClient; CLIENT, PRELIM, OFFER scoring
	
- Implement POST /applications/{code}/evaluate method on ApplicationManagementREST endpoint handling evaluateApplication UC
	
- Implement POST /applications/{code}/cancel method on ApplicationManagementREST endpoint handling cancel UC

## 🔗 Connections (1)

- → Realisation: [[LOR-9105 Create a new attribute for SOB (Selling On Board)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9105 Create a new attribute for SOB (Selling On Board)
- Custom: LOR-9168 Implement evaluateApplication + cancel methods
