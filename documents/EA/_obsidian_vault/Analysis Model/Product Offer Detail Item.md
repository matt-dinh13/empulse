---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755481
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Product Offer Detail Item

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displaying of Offer Detail Items is controlled by customization parameters (see Product Offer Detail Item Parameters):

	
- Available
	
- Order

For each Product Offer Detail Item Type, which is set as Available, is calculated its Value and the Item is added into grid.
Final set of Items is ordered ascending according to parameter Order and displayed. 

Name is left-aligned.
Number or date in Value is transformed to string and right-aligned.
String in Value is left-aligned and wrapped if necessary. 
Value is displayed in Bold.
No header is displayed.

Localization code of title: PRD_FinancialParameters

## 🔗 Connections (1)

- → Dependency: [[Product Offer Detail Item Type]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Financial parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | string |  |
| Value | string |  |
