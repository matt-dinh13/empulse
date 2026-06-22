---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1722002
diagrams: 1
connections: 8
tags:
  - guielement
  - analysis-model
---

# 🖥️ Commodity - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

Localization code:
GEN_Commodity

LDM source:

	
- Commodity data are retrieved according to the rule Get application commodity data with Contract->Contract_2_Commodity.Commodity_ID as CommodityID on the input.
	
- Data related to the commodity type are retrieved according to the rule Get application commodity type data with CommodityTypeCode (returned within the previous step) on the input.


Other:
Order of fields is not fixed, but the trend is to have the order in countries AFs as similar as possible.
Visibility of individual sub-elements is controlled by the:

	
- Commodity type flags - i.e. flags returned by the rule Get application commodity type data (see the LDM source section for more details).

## 🔗 Connections (8)

- ← Generalization: [[Commodity ID (GUIElement 1686215)]]
- ← Generalization: [[Commodity IN (GUIElement 1686230)]]
- ← Generalization: [[Commodity VN (GUIElement 1686251)]]
- ← Generalization: [[Commodity PH (GUIElement 1686267)]]
- → Dependency: [[Get application commodity type data]]
- → Dependency: [[Get application commodity data]]
- → Dependency: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[Setting of commodity attributes]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
