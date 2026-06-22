---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF/Other documents - product AF"
domain: "Analysis Model"
element_id: 1736187
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Other documents - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF/Other documents - product AF

## 📝 Notes

The section for displaying other documents.

Following document types are displayed within this panel:

	
- Document types assigned to the document containers of type 'OTHER' or 'ADDR_PROOF' filtered from the DocumentContainer(s) got according to the rule Get document containers for applicable client scoring segment.
Note: In 2SP, only the DocumentContainer(s) applicable for the respective block of data (identified based on the WhenRequiredIn2SP) are taken into account.

Note: If the global parameter BL_ALLOW_TO_ADD_PERSON_DOC = TRUE, then the Document type combobox contains all document types with flag 'PERSON'.

When user adds/removes identification document (Flag = ID_DOC), such document type is also hidden from/added to combobox in panel Primary identification documents (see rule Document management) and vice versa, if available in assigned document containers.

The window is pre-filled with created documents that belong to this panel (as described above). Detailed description can be found:

	
- for 1SP - in UC 01.081 Fill in application
	
- for 2SP - in UC 01.083 Fill in application - 2BoD


Document type lookup contains all document types with document type flag PERSON except those, which are displayed on Primary document panel.

Localization code:
DOC_Other

## 🔗 Connections (2)

- → Dependency: [[Get document containers for applicable client scoring segment]]
- → Dependency: [[Document management (Requirement 1822842)]]

## 📊 Appears In (1 diagrams)

- Custom: Other documents - product AF
