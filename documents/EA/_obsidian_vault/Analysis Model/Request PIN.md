---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1609928
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Request PIN

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

Clicking this button runs use case 12.539 Internal PIN request with parameters got on Card detail by calling GetCardRequest.

	
- CUID=CardDto.holderCuid
	
- truncatedPAN= CardDto.truncatedPan
	
- validUntil= max(PlasticDto.validTo) of all records


	
- contractNumber=CardDto.AccountDto.contractCode
	
- PCID=CardDto.pcid


For the button enabling see UC 12.539 Internal PIN request - Constraints

Localization code:REL_PINGenerate

## 🔗 Connections (1)

- → Dependency: [[{MOD}12.539 Internal PIN request]]

## 📊 Appears In (1 diagrams)

- Custom: Card detail - User interface
