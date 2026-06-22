---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Direct debit mandates"
domain: "Analysis Model"
element_id: 1784594
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ DDM document page

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Direct debit mandates

## 📝 Notes

Panel containing the detailed information about the content document files associated with particular page defined for respective DDM document as well as the operational buttons for related operations.

Visible only if parameter (parameters.properties) document.multipleContentFilesEnabled = TRUE.

If there is no specific Document Type Page Specification defined for the applicable document type, then only a single instance of this panel for the document's general content (i.e. single document file for all document's content) is displayed. Otherwise separate instance of the panel is displayed for each defined Document Type Page Specification.

LDM source:
Document->Document_Type->Document_Type_Page_Specification

Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Tab-Direct debit mandates
