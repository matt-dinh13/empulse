---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL"
domain: "Requirements Model"
element_id: 1868345
diagrams: 7
connections: 3
tags:
  - guielement
  - requirements-model
---

# 🖥️ Register contract

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL

## 📝 Notes

Set contract RegistrationStatus to Registered(R). 

Button is visible only for user with access right 01.270 Register contract and if Contract.RegistrationStatus=NRR or RR.
System calls the function Validate documents before registration with parameters:

	
- list of documents for registration = current contract registration documents


If function returns no error message then the button 'Register contract' is enabled else is disabled and error message is displayed.

Localisation code: CON_Register

## 🔗 Connections (3)

- → Dependency: [[01.270 Register contract manually]]
- → Dependency: [[{MOD}Validate documents before registration]]
- → Association «navigate»: [[Confirmation (Screen 1868343)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
- Custom: CBL-6153 (CLM-3253) Ticket search access rights used for contract and supplement registration
- Custom: CBL-6256 (CLM-2060) Select all documents for registration
- Custom: Contract registration
- Custom: REQ #1 - Add radio buttons Registration and Mistake investigation
- Custom: REQ #2 - Implement DDM document attributes validation before registration
