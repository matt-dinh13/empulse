---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1879423
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 List of interfaces called in parallel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Following API requests are sent in parallel when applicable:

	
- AccountManagementWS.GetAccountRequest
	
- BigDocumentResource.GetBigDocumentData
	
- REST API GET Commodities
	
- REST API GetCustomerDataRequest
	
- HS-OTP API search method
	
- REST API GET Tariffs
	
- REST API GET ClosingDay
	
- REST API GET Subventions

## 🔗 Connections (2)

- ← Dependency: [[GET ContractDataSource]]
- ← Dependency: [[Generate content of agreement]]
