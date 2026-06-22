---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651332
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card pickup salesroom

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

The field contains salesrooms from the selected Regions allowing card pickuping, {DEL CSI-840}i.e. Salesrooms with Salesroom[.Card_pickup = 'TRUE']->Salesroom_Address[.Role = 'BP']->Address.Region = value selected in the field Region.{/DEL}
Source:

	
-  {ADD CSI-840}call HSIS REST API .../salesrooms/search with criteria: filter = status|eq|ACTIV;cardPickup|eq|TRUE, projection = address; 
	
- from returned results filter only salesrooms where "addressType": "SR_BUS" and "regionCode": Card pick-up region.value

the call example: 
https://homesis.kz00a1.cz.infra/homesis/restful/salesrooms/search?filter=status%7Ceq%7CACTIV%3BcardPickup%7Ceq%7CTRUE&maxResults=1000&pageIndex=0&projections=address{/ADD}

Displayed values: Salesroom.Name 
Selected Salesroom Concatenate address parts from the returned and filtered result is showed in the Delivery address field

The field is displayed only if Delivery type filed = POS.
The field is disabled when the field Card pick-up region is not filled in.

Localization code: REL_CardPickupSalesroom

## 🔗 Connections (1)

- → Dependency: [[Card pick-up salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Change delivery address
