---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)"
domain: "Analysis Model"
element_id: 1721971
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Edit commodity

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Commodity/Edit commodity (modal window)

## 📝 Notes

Form containing the necessary input fields for editing existing commodity (commodity's attributes).

LDM source:
Values for pre-filling the individual sub-elements are retrieved as follows:

	
- Commodity data are retrieved according to the rule Get application commodity data for update with Contract->Contract_2_Commodity.Commodity_ID as CommodityID and applicable UpdateMode (see the 01.650 Edit Contract Commodity use case for more details) on the input.
	
- Commodity category and Commodity type are retrieved according to the rule Get application commodity type data with CommodityTypeCode (returned within the previous step) on the input.


Other:
General visibility of individual sub-elements is controlled by the:

	
- Country-specific configuration - see the Commodity Data Visibility Parameters object for more details.
	
- Commodity type flags - i.e. flags returned by the rule Get application commodity type data (see the LDM source section for more details).

Event-specific visibility (overwriting the general visibility settings), editability and obligation of individual sub-elements is controlled by the:

	
- Commodity field settings - i.e. fieldSettings returned by the rule Get application commodity data for update (see the LDM source section for more details).

Note: See the 01.650 Edit Contract Commodity use case for more details.



Localization code: none

## 🔗 Connections (3)

- → Dependency: [[Commodity Data Visibility Parameters]]
- → Dependency: [[Get application commodity data for update]]
- → Dependency: [[Get application commodity type data]]

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
