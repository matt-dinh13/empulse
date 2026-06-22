---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9299 (CLM-2895) Entrustment Lending support in CLM"
domain: "Requirements Model"
element_id: 1881282
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Contract owner

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9299 (CLM-2895) Entrustment Lending support in CLM

## 📝 Notes

List of contract owners (owner names) separated by comma.

Visible only if not empty.

LDM source:

	
- If the contract has not been signed yet for the application (i.e. Contract->Contract_Status_Transition[.Status='N'] does not exist), then:
Lender[.Code=ApplicationLenderCode].Name

- where ApplicationLenderCode is got from Contract->Relationship[.Role_Type='LENDER']->Party.External_ID

Note: In case there are multiple relationships of respective role type found on the application, the individual Lender.Name values are separated by comma.
.
	
- Otherwise:
Contract->Contract_Ownership->Credit_Owner.Name

- where individual contract owners are ordered by:
   - Type (Contract_Ownership.Type),
   - Valid from (Contract_Ownership.Valid_From),
   - Code (Credit_Owner.Code).


Localization code:
CON_Owner

## 📊 Appears In (2 diagrams)

- Custom: CBL-9299 (CLM-2895) Entrustment Lending support in CLM
- Custom: Contract detail - header
