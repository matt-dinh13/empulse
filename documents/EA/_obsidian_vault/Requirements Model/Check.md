---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL"
domain: "Requirements Model"
element_id: 1868367
diagrams: 5
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ Check

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL

## 📝 Notes

Name of the document's document type. 

If a document is Contract Service Document and contract service is linked to the document (Contract Service Document.Contract Service) then service's name is added in parentheses.

When checkbox is checked, then focus is set on Turn on barcode scanning / Scan document barcode input field on this form

System calls the function Validate documents before registration with parameters:

	
- list of documents for registration = selected document


If function returns no error message then the checkbox 'Check' is enabled else is disabled and error message is displayed.

LDM:DOCUMENT_TYPE.NAME
Contract Service Document->Contract Service->Service.Name
Checkbox is enabled by rules described in particular UC

## 🔗 Connections (1)

- → Dependency: [[{MOD}Validate documents before registration]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: CBL-5553 (CLM-2773) INVOICE document for Key Accounts/Home Appliances
- Custom: CBL-7299 (CLM-2396) RBI Regulation for KYC Docs -To view KYC Docs on every contract
- Custom: Document registration form
- Custom: REQ #2 - Implement DDM document attributes validation before registration
