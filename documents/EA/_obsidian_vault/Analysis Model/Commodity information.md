---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Commodity"
domain: "Analysis Model"
element_id: 1689459
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Commodity information

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Commodity

## 📝 Notes

Panel containing the detailed information about the commodity.

LDM source:
Values of individual sub-elements are retrieved as follows:

	
- Commodity data are retrieved according to the rule Get application commodity data with Contract->Contract_2_Commodity.Commodity_ID as CommodityID on the input.
	
- Commodity category and Commodity type are retrieved according to the rule Get application commodity type data with CommodityTypeCode (returned within the previous step) on the input.


Other:
Visibility of individual sub-elements is controlled by the:

	
- Country-specific configuration - see the Commodity elements visibility rule for more details.
	
- Commodity type flags - i.e. flags returned by the rule Get application commodity type data (see the LDM source section for more details).


Localization code: none

## 🔗 Connections (3)

- → Dependency: [[Get application commodity type data]]
- → Dependency: [[Commodity elements visibility]]
- → Dependency: [[Get application commodity data]]

## 📊 Appears In (1 diagrams)

- Custom: Tab-Commodity
