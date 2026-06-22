---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists"
domain: "Modules"
element_id: 1509434
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 TransactionType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackageCodeLists

## 📝 Notes

This data type defines list of Transaction Type.
If not successfully retrieved then add NOTAVAILABLE_TRANSACTIONTYPE to GetFinancingPackageCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Transaction Type]]
- ← Dependency: [[GetFinancingPackageCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
