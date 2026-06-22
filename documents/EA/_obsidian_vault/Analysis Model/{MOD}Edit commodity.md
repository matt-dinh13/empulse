---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/User Interface Model"
domain: "Analysis Model"
element_id: 1848391
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Edit commodity

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/User Interface Model

## 📝 Notes

Form containing the necessary input fields for editing existing commodity (commodity's attributes).

LDM source:
Values for pre-filling the individual sub-elements are retrieved as follows:

	
- Commodity data are retrieved according to the rule {DEL CLM-3768}Get application commodity data for update{/DEL}{ADD CLM-3768}Get contract commodity data for update{/ADD} with Contract->Contract_2_Commodity.Commodity_ID as CommodityID and applicable UpdateMode (see the {DEL CLM-3768}01.650 Edit Contract Commodity{/DEL}{ADD CLM-3768}01.650 Edit Contract Commodity [CLM]{/ADD} use case for more details) on the input.
	
- Commodity category and Commodity type are retrieved according to the rule {DEL CLM-3768}Get application commodity type data{/DEL}{ADD CLM-3768}Get contract commodity type data{/ADD} with CommodityTypeCode (returned within the previous step) on the input.


Other:
General visibility of individual sub-elements is controlled by the:

	
- Country-specific configuration - see the Commodity Data Visibility Parameters object for more details.
	
- Commodity type flags - i.e. flags returned by the rule {DEL CLM-3768}Get application commodity type data{/DEL}{ADD CLM-3768}Get contract commodity type data{/ADD} (see the LDM source section for more details).

Event-specific visibility (overwriting the general visibility settings), editability and obligation of individual sub-elements is controlled by the:

	
- Commodity field settings - i.e. fieldSettings returned by the rule {DEL CLM-3768}Get application commodity data for update{/DEL}{ADD CLM-3768}Get contract commodity data for update{/ADD} (see the LDM source section for more details).

Note: See the {DEL CLM-3768}01.650 Edit Contract Commodity{/DEL}{ADD CLM-3768}01.650 Edit Contract Commodity [CLM]{/ADD} use case for more details.



Localization code: none

## 🔗 Connections (3)

- → Dependency: [[Get application commodity data for update]]
- → Dependency: [[Get application commodity type data]]
- → Dependency: [[Commodity Data Visibility Parameters]]

## 📊 Appears In (1 diagrams)

- Custom: Edit commodity
