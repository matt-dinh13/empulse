---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822837
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Display remotely created applications

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This element describes how system searches and displays the remotely created applications of respective customer.

Input:
- CUID - customer's unique identifier from CIF or attributes get based on Attributes used for searching 

Steps:

	
- System checks if any remotely created application exists for CUID or for attributes received on the input - Get client's remotely created applications to display.
	
- If the list of application is empty, no remotely created application is displayed.
	
- Otherwise:
- if only application (with existing contract code) without selected product and in status<>canceled or rejected are found, the button Skip is disabled.
- system displays the list into the form Client's remotely created contracts. If the application is considered as Remotely created contract to process and:

            i. contract number exists then the icon Contract detail is enabled 
            ii. contract number doesn't exist and user has access right 01.180 then the icon Fill in application is enabled only if the contract is considered as a Remotely created contract to process,
            iii. otherwise the question mark icon is displayed.
4.     If the user pushes the icon Contract detail, 01.210 Show contract detail is invoked without the access control restrictions.
5.    If the user pushes the icon Fill in application, 01.180 Fill in application is invoked.
6.     If the user pushes the button Skip, the calling use case continues. The user must have UC01_080_SKIP_REM_CON privilege granted to do this action.

## 🔗 Connections (5)

- ← Dependency: [[{MOD}01.160 Search client]]
- → Dependency: [[Get client's remotely created applications to display]]
- → Dependency: [[{MOD}01.210 Show contract detail]]
- → Dependency: [[Client's remotely created contracts]]
- → Dependency: [[Remotely created application to process]]

## 📊 Appears In (3 diagrams)

- Custom: Product business rules
- Custom: Remotely created contracts
- Use Case: Fill in application
