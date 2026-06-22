---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)"
domain: "Analysis Model"
element_id: 1741100
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ [Document page name]

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)

## 📝 Notes

Type of the document's page (document type page's name).

Visibility:
On the Tab - Document printouts tab, this element is always hidden. Otherwise visible only if all the following conditions are met:

	
- Parameter (parameters.properties) document.multipleContentFilesEnabled = TRUE.
	
- Some specific Document Type Page Specification is defined for the applicable document type (i.e. Document->Document_Type->Document_Type_Page_Specification exists).


LDM source:
Document->Document_Type->Document_Type_Page_Specification.Name

Localization code: none //No label - only the document type page's name value is displayed.

## 📊 Appears In (1 diagrams)

- Custom: Document page information
