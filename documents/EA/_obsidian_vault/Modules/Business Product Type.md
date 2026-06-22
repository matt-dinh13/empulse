---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Business Rules"
domain: "Modules"
element_id: 1879085
diagrams: 2
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 Business Product Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Business Rules

## 📝 Notes

Transformation of combination of Product Profile attributes

	
- Product Type
	
- Initial Transaction Type
	
- IsDebit

to business description.

## 🔗 Connections (1)

- ← Dependency: [[Get set of Business Product Types]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Logical: Business Product Type

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CEL_POS (Consumer loan) |  |  |
| CEL_CASH (Cash loan) |  |  |
| REL_POS_CREDIT (Revolving loan with POS initial transaction) |  |  |
| REL_CASH_CREDIT (Revolving loan with CASH initial transaction) |  |  |
| REL_NDF_CREDIT (Revolving loan without initial transaction) |  |  |
| REL_NDF_DEBIT (Debit card) |  |  |
| SAI (Standalone insurance) |  |  |
