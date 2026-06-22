---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model"
domain: "Analysis Model"
element_id: 1863742
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document type name

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/User interface model

## 📝 Notes

Name of the document's document type with checkbox. 

{ADD CSI-1122}If CLM Feature Flag.useDmsForSupplementRegistration = 1 and the panel is instantiated from Contract Supplement screen then,

	
- Source (checkbox): Document.attributes.value where attributes.code = 'REGISTRATION_CHECK'
	
- Source (checkbox label): Document.typeName

{/ADD}

	
- Checkbox on change function - see 13.275 Show supplement registration AW - Document Check setting
	
- Checkbox is enabled by rules described in 13.275 Show supplement registration


{DEL CSI-1122}

	
- Source: DOCUMENT_TYPE.NAME
Contract Service Document->Contract Service->Service.Name
Checkbox is enabled by rules described in particular UC



	
- When checkbox is checked, then focus is set on Turn on barcode scanning / Scan document barcode input field on this form


	
- System calls the function Validate documents before registration with parameters:
- list of documents for registration = selected document
If function returns no error message then the checkbox 'Check' is enabled else is disabled and error message is displayed.

{/DEL}

	
- If a document is Contract Service Document and contract service is linked to the document (Contract Service Document.Contract Service) then service's name is added in parentheses.

## 📊 Appears In (1 diagrams)

- Custom: Document registration panel - User interface model
