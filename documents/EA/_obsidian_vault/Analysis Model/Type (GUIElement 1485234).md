---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/User Interface"
domain: "Analysis Model"
element_id: 1485234
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/User Interface

## 📝 Notes

Listed: DocumentContainerType.Name
LDM: DocumentContainer.Type
Enabled: only when creating new container

List of Documents-Available is reduced due to selected container type:

	
- PRIM_IDENT - only documents with flag PRIM_IDENT are available
	
- IDENT - only documents with flag ID_DOC or (PERSON and PHOTO)are available


	
- other - all documents with flag PERSON are available

On container type change, documents in Documents-Selected are deleted.

For update restriction see use case Update document container.

Localization code: DOC_ContainerType

## 🔗 Connections (2)

- → Dependency: [[Document Container Type]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Set Document Container
