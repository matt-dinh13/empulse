---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary identification documents - product AF"
domain: "Analysis Model"
element_id: 1736191
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Primary identification documents - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary identification documents - product AF

## 📝 Notes

The section for displaying client's identification documents.

Following document types are displayed within this panel:

	
- Document types assigned to the document containers of type 'IDENT' or 'PRIM_IDENT' filtered from the DocumentContainer(s) got according to the rule Get document containers for applicable client scoring segment.
Note: In 2SP, only the DocumentContainer(s) applicable for the respective block of data (identified based on the WhenRequiredIn2SP) are taken into account.

Note: When no product offer is selected yet, then document types got according to the rule Mandatory documents when product not selected are displayed instead.

When user adds/removes identification document (Flag = ID_DOC), such document type is also hidden from/added to combobox in panel Other documents (see rule Document management) and vice versa, if available in assigned document containers.

The window is pre-filled with created documents that belong to this panel (as described above), Detailed description can be found:

	
- for 1SP - in UC 01.081 Fill in application
	
- for 2SP 1BoD- in UC 01.082 Fill in application - 1BoD
	
- for 2SP 2BoD - in UC 01.083 Fill in application - 2BoD)


When panel is empty, it must be hidden. Empty means:

	
- no possibility to add document (combobox and button "Add" are hidden)
	
- there is no previously created documents that could be displayed in this panel


Localization code:
DOC_Primary

## 🔗 Connections (4)

- → Dependency: [[Min number of documents (Action 1787175)]]
- → Dependency: [[Document distribution in AF]]
- → Dependency: [[Get document containers for applicable client scoring segment]]
- → Dependency: [[Mandatory documents when product not selected]]

## 📊 Appears In (1 diagrams)

- Custom: Primary identification documents - product AF
