---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1864782
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 {MOD}Financing Package Criterion Value - presentation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

// Rules for entering and displaying of the Value for particular Criterion types 

Data for combo boxes are retrieved by method FinancingSchemeWS.GetFinancingPackageCodeLists (in description below are referenced as FPCodeLists).
If the value is selected from code list then the corresponding code is saved into Value.

PURPOSE
Selected from combo box - list retrieved from FPCodeLists.FinancingPackagePurpose.
Codes are translated to localized text for entering and displaying.
Value = Code + Name of Purpose 

TRANSACTION_TYPE
Selected from combo box - list retrieved from FPCodeLists.TransactionType.
Codes are translated to localized text for entering and displaying.
Value = Code + Name of Transaction Type 


MINIMAL_TRANSACTION_DATE, MAXIMAL_TRANSACTION_DATE
Entered and displayed as date. 
Saved as text in date time format, time part set to 00:00:00 for minimal date, 23:59:59 for maximal date.

MERCHANT
Selected from combo box - list retrieved from FPCodeLists.Merchant.
Only codes are displayed.
Value = Code of Merchant

COMMODITY_TYPE
Selected from combo box - list retrieved from commodity module via GET commodity-types/active.
List of types is filtered by CommodityType.categoryCode, which is selected in combo box with list retrieved from commodity module via GET commodity-categories/active.
Attribute name (LocalizedString) is displayed both for Commodity Type and Category.
Value = Code of Commodity Type

COMMODITY_MANUFACTURER
Selected from combo box - list retrieved from FPCodeLists.Manufacturer.
Attribute name (LocalizedString) is displayed.
Value = Code of Manufacturer

COMMODITY_MODEL
Free text.

COMMODITY_MODEL_CODE
Selected from combo list of Model.Name

SERVICE_TYPE
Selected from combo list of Service type.Name

INSURANCE_TYPE
Selected from combo list of Insurance type.Name

IPPACK_SERVICE_LEVEL
Selected from combo list of IPPACK Service Level.Name

## 🔗 Connections (1)

- ← Dependency: [[Value (GUIElement 1860809)]]
