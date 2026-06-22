---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Client documents"
domain: "Analysis Model"
element_id: 1744184
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Set proof check

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Client documents

## 📝 Notes

{ADD CLM-89 /}
Button for setting the document's proof check (proofing purpose(s) for collecting respective document).

Visible only if the document is of a type having the 'PERSON' and 'PROOF_CHECK_REQ' flags (i.e. Document->Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PROOF_CHECK_REQ']).

Activates the 01.105 Set document proof check use case.

Localization code:
DOC_SetDocumentProofCheck

## 🔗 Connections (1)

- → Dependency: [[{MOD}01.105 Set document proof check]]

## 📊 Appears In (1 diagrams)

- Custom: Tab-Client documents
