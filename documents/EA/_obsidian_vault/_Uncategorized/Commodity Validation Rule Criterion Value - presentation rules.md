---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1447365
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Commodity Validation Rule Criterion Value - presentation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

// Rules for entering and displaying of the Value for particular Criterion types 

Data for combo boxes are retrieved by method CommodityWS.GetCommodityValidationRuleCodeLists (in description below are referenced as CVRCodeLists).
If the value is selected from code list then the corresponding code is saved into Value.

{ADD PCG-1919}
It is possible to add list of values at Criterions.  List of Value input will be automatically parsed - accepted separator:

	
- comma


	
- semicolon


	
- space


	
- tabulator


	
- line feed


List of values is available for criterions type Commodity insurance, Financing package, Manufacturer, Product, {ADD PCG-2048}Commodity type.{/ADD}


COMMODITY_TYPE
Selected from combo box - list retrieved from CVRCodeLists.CommodityType.
List of types is filtered by CommodityType.categoryCode, which is selected in combo box with list retrieved from CVRCodeLists.CommodityCategory.
Attribute name (LocalizedString) is displayed both for Commodity Type and Category.
Value = Code of Commodity Type

PRODUCT
Entered, displayed and saved as string. 
Value = Code of Product

MANUFACTURER
Entered, displayed and saved as string. 
Value = Code of Manufacturer

COMMODITY_INSURANCE
Entered, displayed and saved as string. 
Value = Code of Insurance Service

EVENT
Selected from combo box - list retrieved from CVRCodeLists.CommodityValidationEventType.
Codes are translated to localized text for entering and displaying.
Value = Code of Event

## 🔗 Connections (1)

- ← Dependency: [[Value (GUIElement 1439070)]]
