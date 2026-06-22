---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1609933
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Replace

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

This button is enabled as long the account is in status active (use GetAccountRequest with parameter accountNumber=Account number. Wait for GetAccountResponse, account.accountStatus must equal "ACTIVE").

Clicking this button runs use case 12.503 Replace card with input parameters:

	
- PAN=Card number from detail
	
- card status=Card status from detail
	
- contractCode=Contract number from detail
	
- PCID=pcid
	
- {ADD CSI-345}inhouse from CardInfoWS.GetCard.CardDetailDto{/ADD}


Localization code:REL_ReplaceCard

## 🔗 Connections (1)

- → Dependency: [[12.503 Replace card (UseCase 1849963)]]

## 📊 Appears In (1 diagrams)

- Custom: Card detail - User interface
