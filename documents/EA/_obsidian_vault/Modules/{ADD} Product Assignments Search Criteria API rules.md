---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules"
domain: "Modules"
element_id: 1871964
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD} Product Assignments Search Criteria API rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom assignment/Business Rules

## 📝 Notes

{ADD PCG-5594} 
For country: PH

Search parameters rules - HSIS
If both partnerCode and partnerName are provided → send only partnerCode.
If only one of partnerCode OR partnerName  is provided → send provided value in respective API parameter 

Search Criteria Input to API param:

Salesroom Code:

	
- Input: Salesroom Code(s),


	
- filter = code|in|salesroomCode1,salesroomCode2,salesroomCode3

NOTE:  salesroom codes are retrieved from PRC DB table BSL_SALERSROOM2PRODUCT - described in Use Case 

Partner Data:

	
- Input: Partner Code(s), filter = partnerCode|in|partner1,partner2,partner3


	
- Input: Partner Name(s), filter = partnerName|like|%partnerName1%,%partnerName2%,%partnerName3%


Combination, Partner + Product:

	
- Input: Salesroom Code(s) + Partner Code(s), 2 API calls:
- filter = code|in|salesroom1,salesroom2,salesroom3
- filter = partnerCode|in|partner1,partner2,partner3 OR filter = partnerName|in|partnerName1,partnerName2,partnerName3

## 🔗 Connections (2)

- ← Dependency: [[{ADD}GET product-assignments]]
- ← Dependency: [[Search Criteria (GUIElement 1873548)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
